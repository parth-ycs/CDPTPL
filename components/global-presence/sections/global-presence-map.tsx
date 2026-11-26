"use client";

import { useMemo } from "react";
import { geoArea, geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
// Natural Earth 1:50m countries, India point-of-view (India's full official
// boundary incl. Jammu & Kashmir and Ladakh). Same source and detail level as
// the "world-atlas" package, just the India-POV edition. Feature ids are
// ISO 3166-1 alpha-2 codes, matching GlobalLocation.countryCode.
import worldData from "@/data/world-50m-india.json";
import type {
  GlobalCategory,
  GlobalEntry,
  GlobalLocation,
} from "@/data/global-presence";

/* -------------------------------------------------------------------------- */
/* Shared constants (also imported by the explorer and details files)          */
/* -------------------------------------------------------------------------- */

export const categoryStyles: Record<
  GlobalCategory,
  { label: string; singular: string; fill: string; bg: string }
> = {
  offices: {
    label: "Offices",
    singular: "office",
    fill: "fill-brand-blue",
    bg: "bg-brand-blue",
  },
  facilities: {
    label: "Facilities",
    singular: "facility",
    fill: "fill-teal-600",
    bg: "bg-teal-600",
  },
  projects: {
    label: "Projects",
    singular: "project",
    fill: "fill-brand-red",
    bg: "bg-brand-red",
  },
};

export const flagUrl = (countryCode: string) =>
  `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;

export type MapMarker = { entry: GlobalEntry; countryId: string };

/* -------------------------------------------------------------------------- */
/* Static map geometry (computed once, not per render)                         */
/* -------------------------------------------------------------------------- */

// Mercator keeps meridians vertical and parallels horizontal, so the map (and
// every country when zoomed in) stays upright. Visible latitudes: 80N to 58S.
const W = 960;
const TOP_LAT = 80;
const BOTTOM_LAT = -58;
const mercY = (lat: number) =>
  Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360));
const K = W / (2 * Math.PI);
const H = Math.round(K * (mercY(TOP_LAT) - mercY(BOTTOM_LAT)));
const MOVE = "transform 900ms cubic-bezier(0.22, 1, 0.36, 1)";

const topology = worldData as unknown as Topology<{
  countries: GeometryCollection;
}>;
const allCountries = feature(
  topology,
  topology.objects.countries,
) as FeatureCollection<Geometry>;

// Antarctica (AQ) wastes a third of the map; drop it.
const land: FeatureCollection<Geometry> = {
  type: "FeatureCollection",
  features: allCountries.features.filter((f) => String(f.id) !== "AQ"),
};

const projection = geoMercator()
  .scale(K)
  .translate([W / 2, K * mercY(TOP_LAT)]);
const pathGen = geoPath(projection).digits(1);

const countryShapes = land.features.map((f) => ({
  id: f.id == null ? "" : String(f.id),
  d: pathGen(f) ?? "",
  feature: f,
}));

type View = { k: number; x: number; y: number };
const WORLD_VIEW: View = { k: 1, x: 0, y: 0 };

/**
 * Keep only the main landmass(es) of a country so overseas territories
 * (Alaska/Hawaii, Svalbard, etc.) don't blow up the zoom bounds.
 */
function mainShape(f: Feature<Geometry>): Feature<Geometry> {
  const g = f.geometry;
  if (g.type !== "MultiPolygon") return f;
  const areas = g.coordinates.map((coordinates) =>
    geoArea({ type: "Polygon" as const, coordinates }),
  );
  const max = Math.max(...areas);
  const kept = g.coordinates.filter((_, i) => areas[i] >= max * 0.1);
  return { ...f, geometry: { type: "MultiPolygon", coordinates: kept } };
}

/** Zoom transform that frames a country and all of its markers. */
function getView(countryCode: string | undefined, markers: MapMarker[]): View {
  if (!countryCode) return WORLD_VIEW;

  let x0 = Infinity;
  let y0 = Infinity;
  let x1 = -Infinity;
  let y1 = -Infinity;
  const extend = (x: number, y: number) => {
    x0 = Math.min(x0, x);
    y0 = Math.min(y0, y);
    x1 = Math.max(x1, x);
    y1 = Math.max(y1, y);
  };

  const shape = countryShapes.find((s) => s.id === countryCode);
  if (shape) {
    const [[a, b], [c, d]] = pathGen.bounds(mainShape(shape.feature));
    extend(a, b);
    extend(c, d);
  }
  for (const m of markers) {
    const p = projection(m.entry.coordinates);
    if (p) extend(p[0], p[1]);
  }
  if (!Number.isFinite(x0)) return WORLD_VIEW;

  const dx = Math.max(x1 - x0, 24);
  const dy = Math.max(y1 - y0, 14);
  const k = Math.min(14, Math.max(1, 0.72 / Math.max(dx / W, dy / H)));
  return {
    k,
    x: W / 2 - k * ((x0 + x1) / 2),
    y: H / 2 - k * ((y0 + y1) / 2),
  };
}

/* -------------------------------------------------------------------------- */
/* Component                                                                   */
/* -------------------------------------------------------------------------- */

type Props = {
  category: GlobalCategory;
  /** Countries that have entries in the active category (lightly highlighted). */
  countries: GlobalLocation[];
  /** Selected country, or null for the world / View All view. */
  activeCountry: GlobalLocation | null;
  /** Markers to draw: already filtered by category and country. */
  markers: MapMarker[];
  selectedId: string | null;
  onSelect: (entryId: string) => void;
  onCountrySelect: (countryId: string) => void;
};

export default function GlobalPresenceMap({
  category,
  countries,
  activeCountry,
  markers,
  selectedId,
  onSelect,
  onCountrySelect,
}: Props) {
  const style = categoryStyles[category];
  const isWorld = !activeCountry;

  const codeToId = useMemo(
    () => new Map(countries.map((c) => [c.countryCode, c.id])),
    [countries],
  );
  const view = useMemo(
    () => getView(activeCountry?.countryCode, markers),
    [activeCountry, markers],
  );
  const pins = useMemo(
    () =>
      markers.flatMap((m) => {
        const p = projection(m.entry.coordinates);
        return p ? [{ entry: m.entry, x: p[0], y: p[1] }] : [];
      }),
    [markers],
  );

  // Markers stay a constant on-screen size while the map zooms.
  const pinScale = (isWorld ? 0.8 : 1) / view.k;
  const selectedPin = pins.find((p) => p.entry.id === selectedId);

  return (
    <div className="relative h-full min-h-0 overflow-hidden rounded-2xl border border-line bg-brand-light/35">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={`World map showing ${style.label.toLowerCase()}`}
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        <g
          className="motion-reduce:transition-none"
          style={{
            transform: `translate(${view.x}px, ${view.y}px) scale(${view.k})`,
            transformOrigin: "0 0",
            transition: MOVE,
          }}
        >
          {/* Countries */}
          {countryShapes.map((shape, i) => {
            const countryId = codeToId.get(shape.id);
            const isActive =
              !!activeCountry && shape.id === activeCountry.countryCode;
            return (
              <path
                key={`${shape.id}-${i}`}
                d={shape.d}
                vectorEffect="non-scaling-stroke"
                strokeLinejoin="round"
                strokeWidth={isActive ? 1.75 : 0.6}
                onClick={
                  countryId ? () => onCountrySelect(countryId) : undefined
                }
                className={`transition-colors duration-300 ${
                  isActive
                    ? "fill-brand-light stroke-brand-blue/50"
                    : countryId
                      ? "cursor-pointer fill-brand-light/70 stroke-brand-deep/25 hover:fill-brand-blue/10"
                      : "fill-white stroke-brand-deep/10"
                }`}
              />
            );
          })}

          {/* Markers */}
          {pins.map(({ entry, x, y }) => {
            const selected = entry.id === selectedId;
            return (
              <g key={entry.id} transform={`translate(${x} ${y})`}>
                <g
                  role="button"
                  tabIndex={0}
                  aria-label={`${entry.name}, ${entry.city}`}
                  aria-pressed={selected}
                  onClick={() => onSelect(entry.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onSelect(entry.id);
                    }
                  }}
                  className="cursor-pointer outline-none motion-reduce:transition-none"
                  style={{
                    transform: `scale(${pinScale})`,
                    transformOrigin: "0 0",
                    transition: MOVE,
                  }}
                >
                  <title>{`${entry.name} · ${entry.city}`}</title>
                  <circle r={16} fill="transparent" />
                  <circle
                    r={selected ? 10 : 7}
                    strokeWidth={2.5}
                    className={`${style.fill} stroke-white transition-all duration-200`}
                  />
                  <circle r={2.5} fill="white" />
                </g>
              </g>
            );
          })}

          {/* Selected marker: pulse + name label, drawn above every pin */}
          {selectedPin && (
            <g
              transform={`translate(${selectedPin.x} ${selectedPin.y})`}
              pointerEvents="none"
            >
              <g
                className="motion-reduce:transition-none"
                style={{
                  transform: `scale(${pinScale})`,
                  transformOrigin: "0 0",
                  transition: MOVE,
                }}
              >
                <circle
                  r={10}
                  className={`${style.fill} animate-ping opacity-40`}
                  style={{ transformBox: "fill-box", transformOrigin: "center" }}
                />
                <text
                  y={-18}
                  textAnchor="middle"
                  stroke="white"
                  strokeWidth={4}
                  strokeLinejoin="round"
                  paintOrder="stroke"
                  className="fill-brand-deep text-[11px] font-semibold"
                >
                  {selectedPin.entry.name}
                </text>
              </g>
            </g>
          )}
        </g>
      </svg>

      {/* Legend */}
      <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-2 rounded-lg border border-line bg-white/90 px-3 py-1.5 text-caption font-medium text-ink backdrop-blur">
        <span className={`h-2.5 w-2.5 rounded-full ${style.bg}`} />
        {style.label} · {markers.length}
      </div>
    </div>
  );
}