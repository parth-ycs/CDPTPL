"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import { ArrowLeft, ArrowRight, Minus, Plus } from "lucide-react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { globalPresenceLocations } from "@/data/global-presence";
import type { GlobalLocation } from "@/data/global-presence";

type ViewMode = "global" | "country";
type MarkerKind = "office" | "project";

type MarkerData = {
  geometry: { type: "Point"; coordinates: [number, number] };
  code: string;
  pointId: string;
  label: string;
  kind: MarkerKind;
  selected: boolean;
};

type Props = {
  activeLocation: GlobalLocation;
  viewMode: ViewMode;
  selectedPointId: string | null;
  onSelectCountry: (location: GlobalLocation) => void;
  onSelectPoint: (location: GlobalLocation, pointId: string) => void;
};

const BLUE = 0x1557a0;
const LIGHT_BLUE = 0x77b5e8;
const MUTED_BLUE = 0xf0f6ff;
const WHITE = 0xffffff;
const PROJECT_ORANGE = 0xc45a28;
const MAX_ZOOM = 5;

function buildMarkers(location: GlobalLocation, selectedPointId: string | null): MarkerData[] {
  return [
    ...location.offices.map((office) => ({
      geometry: { type: "Point" as const, coordinates: office.coordinates },
      code: location.countryCode,
      pointId: office.id,
      label: office.name,
      kind: "office" as const,
      selected: office.id === selectedPointId,
    })),
    ...location.projects.map((project) => ({
      geometry: { type: "Point" as const, coordinates: project.coordinates },
      code: location.countryCode,
      pointId: project.id,
      label: project.name,
      kind: "project" as const,
      selected: project.id === selectedPointId,
    })),
  ];
}

export default function GlobalPresenceGlobe({
  activeLocation,
  viewMode,
  selectedPointId,
  onSelectCountry,
  onSelectPoint,
}: Props) {
  const chartDivRef = useRef<HTMLDivElement | null>(null);
  const chartApiRef = useRef<{
    chart: am5map.MapChart;
    polygonSeries: am5map.MapPolygonSeries;
    pointSeries: am5map.MapPointSeries;
    selectedPointSeries: am5map.MapPointSeries;
    selectCountry: (code: string) => void;
    focusPoint: (coordinates: [number, number]) => void;
  } | null>(null);

  const visibleMarkers = useMemo(() => {
    if (viewMode === "global") {
      return globalPresenceLocations.flatMap((location) => buildMarkers(location, selectedPointId));
    }
    return buildMarkers(activeLocation, selectedPointId);
  }, [activeLocation, selectedPointId, viewMode]);

  const rotateToCountry = useCallback((code: string) => {
    chartApiRef.current?.selectCountry(code);
  }, []);

  const focusPoint = useCallback((coordinates: [number, number]) => {
    chartApiRef.current?.focusPoint(coordinates);
  }, []);

  useEffect(() => {
    if (!chartDivRef.current) return;

    const root = am5.Root.new(chartDivRef.current);
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoOrthographic(),
        panX: "rotateX",
        panY: "rotateY",
        wheelY: "none",
        minZoomLevel: 1,
        maxZoomLevel: MAX_ZOOM,
        zoomLevel: 1,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 4,
        paddingRight: 4,
      }),
    );

    const backgroundSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
    backgroundSeries.mapPolygons.template.setAll({
      interactive: false,
      fill: am5.color(MUTED_BLUE),
      fillOpacity: 1,
      strokeOpacity: 0,
    });
    backgroundSeries.data.push({ geometry: am5map.getGeoRectangle(90, 180, -90, -180) });

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, { geoJSON: am5geodata_worldLow }),
    );
    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color(LIGHT_BLUE),
      fillOpacity: 0.88,
      stroke: am5.color(WHITE),
      strokeWidth: 0.7,
      tooltipText: "{name}",
      interactive: true,
      toggleKey: "active",
      cursorOverStyle: "pointer",
    });
    polygonSeries.mapPolygons.template.states.create("hover", { fill: am5.color(0x4b91d1) });
    polygonSeries.mapPolygons.template.states.create("active", { fill: am5.color(BLUE) });

    const pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
    const selectedPointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
    // This series is created after the normal marker series, so its bullets render on top.

    const createMarkerBullet = (
      bulletRoot: am5.Root,
      _series: am5.Series,
      dataItem: am5.DataItem<am5map.IMapPointSeriesDataItem>,
    ) => {
      const marker = dataItem.dataContext as MarkerData;
      const isOffice = marker.kind === "office";
      const color = isOffice ? BLUE : PROJECT_ORANGE;
      const selected = marker.selected;
      const size = selected ? 44 : 32;

      const container = am5.Container.new(bulletRoot, {
        width: size,
        height: size,
        centerX: am5.p50,
        centerY: am5.p50,
        interactive: true,
        cursorOverStyle: "pointer",
        tooltipText: `${isOffice ? "Office" : "Project"}: ${marker.label}`,
        background: am5.RoundedRectangle.new(bulletRoot, {
          fill: am5.color(WHITE),
          fillOpacity: 1,
          stroke: am5.color(color),
          strokeWidth: selected ? 3 : 1.5,
          cornerRadiusTL: 9,
          cornerRadiusTR: 9,
          cornerRadiusBL: 9,
          cornerRadiusBR: 9,
        }),
      });

      if (selected) {
        container.children.push(am5.Circle.new(bulletRoot, {
          radius: 25,
          x: size / 2,
          y: size / 2,
          centerX: am5.p50,
          centerY: am5.p50,
          fill: am5.color(color),
          fillOpacity: 0.12,
          stroke: am5.color(color),
          strokeOpacity: 0.7,
          strokeWidth: 1.5,
        }));
      }

      // Change these SVG path strings to customize the marker icons.
      const iconPath = isOffice
        ? "M4 20V5H14V20 M14 10H20V20 M7 8H9 M7 12H9 M7 16H9 M11 8H12 M11 12H12 M11 16H12 M17 13H18 M17 16H18 M2 20H22"
        : "M3 20V9L9 13V9L15 13V5H21V20 M7 16H9 M13 16H15 M18 9H19 M2 20H22";

      container.children.push(am5.Graphics.new(bulletRoot, {
        svgPath: iconPath,
        x: size / 2,
        y: size / 2,
        centerX: am5.p50,
        centerY: am5.p50,
        scale: selected ? 0.95 : 0.75,
        fill: am5.color(color),
        stroke: am5.color(color),
        strokeWidth: 1.5,
      }));

      container.events.on("click", () => {
        const location = globalPresenceLocations.find((item) => item.countryCode === marker.code);
        if (location) onSelectPoint(location, marker.pointId);
      });

      return am5.Bullet.new(bulletRoot, { sprite: container });
    };

    pointSeries.bullets.push(createMarkerBullet);
    selectedPointSeries.bullets.push(createMarkerBullet);

    let previousPolygon: am5map.MapPolygon | undefined;

    const rotateCountry = (code: string) => {
      const polygon = polygonSeries.getDataItemById(code)?.get("mapPolygon");
      const centroid = polygon?.geoCentroid();
      if (!centroid) return;

      chart.animate({ key: "rotationX", to: -centroid.longitude, duration: 1000, easing: am5.ease.inOut(am5.ease.cubic) });
      chart.animate({ key: "rotationY", to: -centroid.latitude, duration: 1000, easing: am5.ease.inOut(am5.ease.cubic) });
      if (previousPolygon && previousPolygon !== polygon) previousPolygon.set("active", false);
      if (polygon) {
        polygon.set("active", true);
        previousPolygon = polygon;
      }
    };

    const focusCoordinates = (coordinates: [number, number]) => {
      const [longitude, latitude] = coordinates;
      chart.animate({ key: "rotationX", to: -longitude, duration: 1000, easing: am5.ease.inOut(am5.ease.cubic) });
      chart.animate({ key: "rotationY", to: -latitude, duration: 1000, easing: am5.ease.inOut(am5.ease.cubic) });
      chart.animate({ key: "zoomLevel", to: Math.max(chart.get("zoomLevel", 1), 1.6), duration: 700, easing: am5.ease.out(am5.ease.cubic) });
    };

    chartApiRef.current = {
      chart,
      polygonSeries,
      pointSeries,
      selectedPointSeries,
      selectCountry: rotateCountry,
      focusPoint: focusCoordinates,
    };

    const activeDisposer = polygonSeries.mapPolygons.template.on("active", (active, target) => {
      if (!active || !target) return;
      const code = (target.dataItem?.dataContext as { id?: string } | undefined)?.id;
      const location = globalPresenceLocations.find((item) => item.countryCode === code);
      if (location) onSelectCountry(location);
      if (previousPolygon && previousPolygon !== target) previousPolygon.set("active", false);
      previousPolygon = target;
    });

    polygonSeries.events.on("datavalidated", () => {
      rotateCountry("IN");
      chart.appear(700, 80);
    });

    return () => {
      activeDisposer.dispose();
      chartApiRef.current = null;
      root.dispose();
    };
  }, [onSelectCountry, onSelectPoint]);

  useEffect(() => {
    const api = chartApiRef.current;
    if (!api) return;
    api.pointSeries.data.setAll(visibleMarkers.filter((marker) => !marker.selected));
    api.selectedPointSeries.data.setAll(visibleMarkers.filter((marker) => marker.selected));
  }, [visibleMarkers]);

  useEffect(() => {
    if (viewMode === "global") return;

    if (selectedPointId) {
      const selectedOffice = activeLocation.offices.find((office) => office.id === selectedPointId);
      const selectedProject = activeLocation.projects.find((project) => project.id === selectedPointId);
      const point = selectedOffice ?? selectedProject;
      if (point) focusPoint(point.coordinates);
      return;
    }

    rotateToCountry(activeLocation.countryCode);
  }, [activeLocation, selectedPointId, viewMode, rotateToCountry, focusPoint]);

  const changeZoom = (direction: 1 | -1) => {
    const chart = chartApiRef.current?.chart;
    if (!chart) return;
    const current = chart.get("zoomLevel") || 1;
    const next = direction === 1 ? Math.min(current * 1.35, MAX_ZOOM) : Math.max(current / 1.35, 1);
    chart.animate({ key: "zoomLevel", to: next, duration: 250, easing: am5.ease.out(am5.ease.cubic) });
  };

  const stepCountry = (direction: -1 | 1) => {
    const currentIndex = globalPresenceLocations.findIndex((location) => location.id === activeLocation.id);
    const nextIndex = (currentIndex + direction + globalPresenceLocations.length) % globalPresenceLocations.length;
    onSelectCountry(globalPresenceLocations[nextIndex]);
  };

  return (
    <div className="relative mt-8 min-h-[420px] lg:mt-0 lg:h-[660px] lg:min-h-0">
      {/* Keep the original globe dimensions and offsets. */}
      <div
        ref={chartDivRef}
        aria-label="Interactive globe showing office and project locations"
        className="absolute -right-[18%] top-0 h-[430px] w-[120%] sm:-right-[16%] sm:h-[540px] lg:-right-[35%] lg:top-[-8%] lg:h-[760px] lg:w-[135%] xl:h-[850px]"
      />

      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/80 bg-white/95 p-1.5 shadow-[0_8px_25px_rgba(26,76,126,0.12)] backdrop-blur sm:bottom-8 sm:left-[45%] sm:translate-x-0 lg:bottom-[12%] lg:left-[18%]">
        <span className="px-2 text-[10px] text-slate-500">
          {globalPresenceLocations.findIndex((item) => item.id === activeLocation.id) + 1} / {globalPresenceLocations.length}
        </span>
        <button type="button" onClick={() => stepCountry(-1)} aria-label="Previous country" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-[#1557A0] hover:text-[#1557A0]">
          <ArrowLeft size={15} />
        </button>
        <button type="button" onClick={() => stepCountry(1)} aria-label="Next country" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1557A0] text-white transition hover:bg-[#0B438B]">
          <ArrowRight size={15} />
        </button>
      </div>

      <div className="absolute bottom-3 right-3 z-20 flex flex-col gap-1.5 sm:bottom-8 sm:right-5">
        <button type="button" onClick={() => changeZoom(1)} aria-label="Zoom in" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:text-[#1557A0]">
          <Plus size={17} />
        </button>
        <button type="button" onClick={() => changeZoom(-1)} aria-label="Zoom out" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:text-[#1557A0]">
          <Minus size={17} />
        </button>
      </div>
    </div>
  );
}
