"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { globalPresenceLocations } from "@/data/global-presence";
import type { GlobalLocation } from "@/data/global-presence";

type Props = {
  /** Optional link to the full Global Presence page. */
  exploreHref?: string;
};

const BLUE = 0x1557a0;
const LIGHT_BLUE = 0x77b5e8;
const MUTED_BLUE = 0xd9e9f8;
const WHITE = 0xffffff;

export default function GlobalPresenceSection({
  exploreHref = "/global-presence",
}: Props) {
  const chartDivRef = useRef<HTMLDivElement | null>(null);
  const chartApiRef = useRef<{
    chart: am5map.MapChart;
    polygonSeries: am5map.MapPolygonSeries;
    pointSeries: am5map.MapPointSeries;
    selectCountry: (code: string) => void;
  } | null>(null);
  const [activeLocationId, setActiveLocationId] = useState("india");

  const activeLocation = useMemo(
    () =>
      globalPresenceLocations.find((location) => location.id === activeLocationId) ??
      globalPresenceLocations[0],
    [activeLocationId],
  );

  const selectLocation = useCallback((location: GlobalLocation) => {
    setActiveLocationId(location.id);
    chartApiRef.current?.selectCountry(location.countryCode);
  }, []);

  useEffect(() => {
    if (!chartDivRef.current) return;

    const root = am5.Root.new(chartDivRef.current);
    root.setThemes([am5themes_Animated.new(root)]);
    root.interfaceColors.set("primaryButton", am5.color(BLUE));
    root.interfaceColors.set("primaryButtonHover", am5.color(BLUE));

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoOrthographic(),
        panX: "rotateX",
        panY: "rotateY",
        wheelY: "none",
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 4,
        paddingRight: 4,
      }),
    );

    const backgroundSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {}),
      );
      backgroundSeries.mapPolygons.template.setAll({
        interactive: false,
        fill: am5.color(0xF0F3FC), // very faint blue ocean
        fillOpacity: 1,
        strokeOpacity: 0,
      });
      backgroundSeries.data.push({
        geometry: am5map.getGeoRectangle(90, 180, -90, -180),
      });

      const polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_worldLow,
        }),
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

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x4b91d1),
    });
    polygonSeries.mapPolygons.template.states.create("active", {
      fill: am5.color(BLUE),
    });

    

    // Location markers are separate from the country polygons, so selecting a
    // marker or a country updates the same React-controlled location state.
    const pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
    pointSeries.bullets.push((bulletRoot, _series, dataItem) => {
      const context = dataItem.dataContext as { code?: string; label?: string };
      const container = am5.Container.new(bulletRoot, {
        interactive: true,
        cursorOverStyle: "pointer",
        tooltipText: context.label ?? "Location",
      });
      container.children.push(
        am5.Circle.new(bulletRoot, {
          radius: 5,
          fill: am5.color(BLUE),
          stroke: am5.color(WHITE),
          strokeWidth: 2,
        }),
      );
      container.children.push(
        am5.Circle.new(bulletRoot, {
          radius: 10,
          fill: am5.color(BLUE),
          fillOpacity: 0.12,
          strokeOpacity: 0,
        }),
      );
      container.events.on("click", () => {
        const match = globalPresenceLocations.find(
          (location) => location.countryCode === context.code,
        );
        if (match) selectLocation(match);
      });
      return am5.Bullet.new(bulletRoot, { sprite: container });
    });

    pointSeries.data.setAll(
      globalPresenceLocations.map((location) => ({
        geometry: {
          type: "Point" as const,
          coordinates: location.coordinates,
        },
        code: location.countryCode,
        label: location.country,
      })),
    );

    let previousPolygon: am5map.MapPolygon | undefined;
    const onPolygonActive = polygonSeries.mapPolygons.template.on(
      "active",
      (active, target) => {
        if (!active || !target) return;
        if (previousPolygon && previousPolygon !== target) {
          previousPolygon.set("active", false);
        }
        previousPolygon = target;
        const code = (
          target.dataItem?.dataContext as { id?: string } | undefined
        )?.id;        const location = globalPresenceLocations.find(
          (item) => item.countryCode === code,
        );
        if (location) {
          setActiveLocationId(location.id);
          rotateToCountry(location.countryCode);
        }
      },
    );

    function rotateToCountry(code: string) {
      const dataItem = polygonSeries.getDataItemById(code);
      const polygon = dataItem?.get("mapPolygon");
      const centroid = polygon?.geoCentroid();
      if (!centroid) return;
      chart.animate({
        key: "rotationX",
        to: -centroid.longitude,
        duration: 1100,
        easing: am5.ease.inOut(am5.ease.cubic),
      });
      chart.animate({
        key: "rotationY",
        to: -centroid.latitude,
        duration: 1100,
        easing: am5.ease.inOut(am5.ease.cubic),
      });
      const locationPolygon = dataItem?.get("mapPolygon");
      if (locationPolygon) {
        if (previousPolygon && previousPolygon !== locationPolygon) {
          previousPolygon.set("active", false);
        }
        locationPolygon.set("active", true);
        previousPolygon = locationPolygon;
      }
    }

    chartApiRef.current = {
      chart,
      polygonSeries,
      pointSeries,
      selectCountry: rotateToCountry,
    };

    polygonSeries.events.on("datavalidated", () => {
      rotateToCountry("IN");
      chart.appear(700, 80);
    });

    return () => {
      onPolygonActive.dispose();
      chartApiRef.current = null;
      root.dispose();
    };
  }, [selectLocation]);

  const stepLocation = (direction: -1 | 1) => {
    const currentIndex = globalPresenceLocations.findIndex(
      (location) => location.id === activeLocationId,
    );
    const nextIndex =
      (currentIndex + direction + globalPresenceLocations.length) %
      globalPresenceLocations.length;
    selectLocation(globalPresenceLocations[nextIndex]);
  };

  return (
    <section className="relative isolate overflow-hidden bg-white text-slate-900">
      <div className="mx-auto grid min-h-[620px] max-w-[1440px] grid-cols-1 items-center px-6 py-12 sm:px-10 lg:min-h-[680px] lg:grid-cols-[0.78fr_1.22fr] lg:gap-2 lg:px-16 lg:py-10">
        <div className="relative z-10 max-w-[470px] py-2 lg:py-0">
          <h2 className="mb-2 text-[clamp(38px,5vw,58px)] [font-family:'Noa_Voren'] font-normal leading-[0.98] font-bold tracking-[-0.06em] text-ink">
            Global 
            <br />
            <span className="text-brand-blue [font-family:'Noa_Voren'] font-normal">Presence</span>
          </h2>
          <p className="mt-4 text-xl font-medium tracking-[-0.02em] text-slate-700 sm:text-2xl">
            Global expertise. Local execution.
          </p>
          <p className="mt-3 max-w-[390px] text-sm leading-6 text-slate-600 sm:text-base">
            A growing international network for technology, engineering and
            manufacturing.
          </p>

          <div className="mt-7 max-w-[360px]" aria-label="Select a country">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              Our locations
            </p>
            <ul className="space-y-1">
              {globalPresenceLocations.map((location) => {
                const isActive = location.id === activeLocationId;
                return (
                  <li key={location.id}>
                    <button
                      type="button"
                      onClick={() => selectLocation(location)}
                      aria-pressed={isActive}
                      className={`group flex w-full items-center gap-3 rounded-full px-3 py-2 text-left transition-colors duration-200 ${
                        isActive
                          ? "bg-[#EAF3FC] text-[#1557A0]"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span
                        className={`relative flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                          isActive
                            ? "border-[#1557A0] bg-[#1557A0]"
                            : "border-slate-300 bg-white group-hover:border-[#7CA9D8]"
                        }`}
                      >
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-white" />
                        )}
                      </span>
                      <span className="flex-1 text-sm font-medium sm:text-base">
                        {location.country}
                      </span>
                      {isActive && (
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 20 20"
                          className="h-4 w-4"
                          fill="none"
                        >
                          <path
                            d="m7 4 6 6-6 6"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <a
            href={exploreHref}
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#064DA7] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(21,87,160,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0B438B] focus:outline-none focus:ring-2 focus:ring-[#1557A0] focus:ring-offset-2"
          >
            Explore locations
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
              <path d="M4 16 16 4M6 4h10v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="relative mt-8 min-h-[420px] lg:mt-0 lg:h-[660px] lg:min-h-0">
          <div
            ref={chartDivRef}
            aria-label="Interactive globe. Select a country marker or a location from the list."
            className="absolute -right-[18%] top-0 h-[430px] w-[120%] sm:-right-[16%] sm:h-[540px] lg:-right-[35%] lg:top-[-8%] lg:h-[760px] lg:w-[135%] xl:h-[850px]"
          />

          <div className="absolute bottom-3 left-1/2 z-10 w-[min(330px,90%)] -translate-x-1/2 rounded-xl border border-white/80 bg-white/95 p-4 shadow-[0_16px_45px_rgba(26,76,126,0.16)] backdrop-blur sm:bottom-8 sm:left-[45%] sm:translate-x-0 lg:bottom-[12%] lg:left-[18%]">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-8 w-10 shrink-0 items-center justify-center rounded-md bg-[#F2F7FC] text-lg" aria-hidden="true">
                {activeLocation.countryCode === "IN"
                  ? "🇮🇳"
                  : activeLocation.countryCode === "US"
                    ? "🇺🇸"
                    : activeLocation.countryCode === "SA"
                      ? "🇸🇦"
                      : activeLocation.countryCode === "DE"
                        ? "🇩🇪"
                        : activeLocation.countryCode === "KR"
                          ? "🇰🇷"
                          : "🇯🇵"}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1557A0]">
                  {activeLocation.region}
                </p>
                <h3 className="mt-0.5 text-base font-semibold text-slate-900">
                  {activeLocation.country}
                </h3>
                <p className="mt-0.5 text-xs text-slate-500">{activeLocation.city}</p>
              </div>
            </div>
            <div className="my-3 h-px bg-slate-200" />
            <p className="text-sm leading-5 text-slate-600">
              {activeLocation.summary}
            </p>
            <div className="mt-3 flex items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400">
                {globalPresenceLocations.findIndex((item) => item.id === activeLocation.id) + 1}
                {" / "}
                {globalPresenceLocations.length} locations
              </span>
              <div className="flex gap-1.5">
                <button
                  type="button"
                  onClick={() => stepLocation(-1)}
                  aria-label="Previous location"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-[#1557A0] hover:text-[#1557A0] focus:outline-none focus:ring-2 focus:ring-[#1557A0]"
                >
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                    <path d="m12 4-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => stepLocation(1)}
                  aria-label="Next location"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1557A0] text-white transition hover:bg-[#0B438B] focus:outline-none focus:ring-2 focus:ring-[#1557A0] focus:ring-offset-2"
                >
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                    <path d="m8 4 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
