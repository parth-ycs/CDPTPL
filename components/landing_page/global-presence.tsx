
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Factory,
  Globe2,
  MapPin,
} from "lucide-react";

import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import { globalPresenceLocations } from "@/data/global-presence";
import type {
  GlobalLocation,
  GlobalPoint,
} from "@/data/global-presence";

type Props = {
  exploreHref?: string;
};

type ViewMode = "global" | "country";

type MarkerData = {
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  code: string;
  pointId: string;
  label: string;
  kind: "office" | "project";
  selected: boolean;
};

const BLUE = 0x1557a0;
const LIGHT_BLUE = 0x77b5e8;
const MUTED_BLUE = 0xf0f6ff;
const WHITE = 0xffffff;
const PROJECT_ORANGE = 0xc45a28;

function getCountryFlag(code: string) {
  return String.fromCodePoint(
    ...[...code.toUpperCase()].map((char) => 127397 + char.charCodeAt(0)),
  );
}

function getPoint(
  location: GlobalLocation,
  pointId: string,
): GlobalPoint | undefined {
  return (
    location.offices.find((office) => office.id === pointId) ??
    location.projects.find((project) => project.id === pointId)
  );
}

function getCountryMarkers(
  location: GlobalLocation,
  selectedPointId: string | null,
): MarkerData[] {
  return [
    ...location.offices.map((office) => ({
      geometry: {
        type: "Point" as const,
        coordinates: office.coordinates,
      },
      code: location.countryCode,
      pointId: office.id,
      label: office.name,
      kind: "office" as const,
      selected: office.id === selectedPointId,
    })),
    ...location.projects.map((project) => ({
      geometry: {
        type: "Point" as const,
        coordinates: project.coordinates,
      },
      code: location.countryCode,
      pointId: project.id,
      label: project.name,
      kind: "project" as const,
      selected: project.id === selectedPointId,
    })),
  ];
}

export default function GlobalPresenceSection({
  exploreHref = "/global-presence",
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

  const [activeLocationId, setActiveLocationId] = useState("india");
  const [viewMode, setViewMode] = useState<ViewMode>("global");
  const [selectedPointId, setSelectedPointId] = useState<string | null>(null);

  const activeLocation = useMemo(
    () =>
      globalPresenceLocations.find(
        (location) => location.id === activeLocationId,
      ) ?? globalPresenceLocations[0],
    [activeLocationId],
  );

  const selectedPoint = useMemo(
    () =>
      selectedPointId
        ? getPoint(activeLocation, selectedPointId)
        : undefined,
    [activeLocation, selectedPointId],
  );

  const allMarkers = useMemo(
    () =>
      globalPresenceLocations.flatMap((location) =>
        getCountryMarkers(location, selectedPointId),
      ),
    [selectedPointId],
  );

  const visibleMarkers = useMemo(
    () =>
      viewMode === "global"
        ? allMarkers
        : getCountryMarkers(activeLocation, selectedPointId),
    [viewMode, activeLocation, allMarkers, selectedPointId],
  );

  const selectCountry = useCallback((location: GlobalLocation) => {
    setActiveLocationId(location.id);
    setSelectedPointId(null);
    setViewMode("country");
    chartApiRef.current?.selectCountry(location.countryCode);
  }, []);

  const selectPoint = useCallback(
    (location: GlobalLocation, pointId: string) => {
      const point = getPoint(location, pointId);
      if (!point) return;

      setActiveLocationId(location.id);
      setSelectedPointId(pointId);
      setViewMode("country");

      chartApiRef.current?.focusPoint(point.coordinates);
    },
    [],
  );

  const showGlobalView = useCallback(() => {
    setViewMode("global");
    setSelectedPointId(null);
  }, []);

  // Initialize the globe once. Globe placement and sizing are unchanged.
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
      fill: am5.color(MUTED_BLUE),
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

    // Normal markers: offices and projects.
    const pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {}),
    );

    // Selected marker: rendered in a separate series above normal markers.
    const selectedPointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {}),
    );
    

    const createMarkerBullet = (
      bulletRoot: am5.Root,
      _series: am5.Series,
      dataItem: am5.DataItem<am5map.IMapPointSeriesDataItem>,
    ) => {
      const context = dataItem.dataContext as MarkerData;
      const isOffice = context.kind === "office";
      const markerColor = isOffice ? BLUE : PROJECT_ORANGE;
      const isSelected = context.selected;

      const container = am5.Container.new(bulletRoot, {
        width: isSelected ? 42 : 32,
        height: isSelected ? 42 : 32,
        centerX: am5.p50,
        centerY: am5.p50,
        interactive: true,
        cursorOverStyle: "pointer",
        tooltipText: `${isOffice ? "Office" : "Project"}: ${context.label}`,
        background: am5.RoundedRectangle.new(bulletRoot, {
          fill: am5.color(WHITE),
          fillOpacity: 1,
          stroke: am5.color(markerColor),
          strokeWidth: isSelected ? 3 : 1.5,
          cornerRadiusTL: 9,
          cornerRadiusTR: 9,
          cornerRadiusBL: 9,
          cornerRadiusBR: 9,
        }),
      });

      const iconPath = isOffice
        ? "M4 20V5H14V20 M14 10H20V20 M7 8H9 M7 12H9 M7 16H9 M11 8H12 M11 12H12 M11 16H12 M17 13H18 M17 16H18 M2 20H22"
        : "M3 20V9L9 13V9L15 13V5H21V20 M7 16H9 M13 16H15 M18 9H19 M2 20H22";

      container.children.push(
        am5.Graphics.new(bulletRoot, {
          svgPath: iconPath,
          x: isSelected ? 21 : 16,
          y: isSelected ? 21 : 16,
          centerX: am5.p50,
          centerY: am5.p50,
          scale: isSelected ? 0.95 : 0.75,
          fill: am5.color(markerColor),
          stroke: am5.color(markerColor),
          strokeWidth: 1.5,
        }),
      );

      container.events.on("click", () => {
        const location = globalPresenceLocations.find(
          (item) => item.countryCode === context.code,
        );

        if (location) selectPoint(location, context.pointId);
      });

      return am5.Bullet.new(bulletRoot, { sprite: container });
    };

    pointSeries.bullets.push(createMarkerBullet);
    selectedPointSeries.bullets.push(createMarkerBullet);

    let previousPolygon: am5map.MapPolygon | undefined;

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

      if (previousPolygon && previousPolygon !== polygon) {
        previousPolygon.set("active", false);
      }

      if (polygon) {
        polygon.set("active", true);
        previousPolygon = polygon;
      }
    }

    function focusPoint(coordinates: [number, number]) {
      const [longitude, latitude] = coordinates;

      chart.animate({
        key: "rotationX",
        to: -longitude,
        duration: 1100,
        easing: am5.ease.inOut(am5.ease.cubic),
      });

      chart.animate({
        key: "rotationY",
        to: -latitude,
        duration: 1100,
        easing: am5.ease.inOut(am5.ease.cubic),
      });
    }

    chartApiRef.current = {
      chart,
      polygonSeries,
      pointSeries,
      selectedPointSeries,
      selectCountry: rotateToCountry,
      focusPoint,
    };

    const onPolygonActive = polygonSeries.mapPolygons.template.on(
      "active",
      (active, target) => {
        if (!active || !target) return;

        const code = (
          target.dataItem?.dataContext as { id?: string } | undefined
        )?.id;

        const location = globalPresenceLocations.find(
          (item) => item.countryCode === code,
        );

        if (location) {
          setActiveLocationId(location.id);
          setSelectedPointId(null);
          setViewMode("country");
          rotateToCountry(location.countryCode);
        }

        if (previousPolygon && previousPolygon !== target) {
          previousPolygon.set("active", false);
        }

        previousPolygon = target;
      },
    );

    polygonSeries.events.on("datavalidated", () => {
      rotateToCountry("IN");
      chart.appear(700, 80);
    });

    return () => {
      onPolygonActive.dispose();
      chartApiRef.current = null;
      root.dispose();
    };
  }, [selectPoint]);


  useEffect(() => {
    const api = chartApiRef.current;
    if (!api) return;

    // Remove the selected marker from the normal series to prevent duplicates.
    api.pointSeries.data.setAll(
      visibleMarkers.filter((marker) => !marker.selected),
    );

    // Render only the selected marker in the topmost series.
    api.selectedPointSeries.data.setAll(
      visibleMarkers.filter((marker) => marker.selected),
    );
  }, [visibleMarkers]);
  const stepCountry = (direction: -1 | 1) => {
    const currentIndex = globalPresenceLocations.findIndex(
      (location) => location.id === activeLocationId,
    );

    const nextIndex =
      (currentIndex + direction + globalPresenceLocations.length) %
      globalPresenceLocations.length;

    selectCountry(globalPresenceLocations[nextIndex]);
  };

  return (
    <section className="relative isolate overflow-hidden bg-white text-slate-900">
      <div className="mx-auto grid min-h-[620px] max-w-[1440px] grid-cols-1 items-center px-6 py-12 sm:px-10 lg:min-h-[680px] lg:grid-cols-[1.05fr_1.15fr] lg:gap-4 lg:px-12 lg:py-10">
        {/* LEFT PANEL */}
        <div className="relative z-10 max-w-[670px] py-2 lg:py-1">
          <h2 className="section-heading text-slate-900">
            Global
            <br />
            <span className="text-brand-blue">Presence</span>
          </h2>

          <p className="mt-4 text-xl font-medium tracking-[-0.02em] text-slate-700 sm:text-2xl">
            Global expertise. Local execution.
          </p>

          <p className="mt-3 max-w-[390px] text-sm leading-6 text-slate-600 sm:text-base">
            A growing international network for technology, engineering and
            manufacturing.
          </p>

          {/* Country list and details card side by side */}
          <div className="mt-7 grid grid-cols-[minmax(0,0.95fr)_minmax(0,1.55fr)] items-start gap-5 sm:gap-5">
            {/* Country list */}
            <div className="min-w-0" aria-label="Select a country">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                  Our locations
                </p>

                {viewMode === "country" && (
                  <button
                    type="button"
                    onClick={showGlobalView}
                    className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#1557A0] hover:underline"
                  >
                    <Globe2 size={11} />
                    Global
                  </button>
                )}
              </div>

              <ul className="space-y-1">
                {globalPresenceLocations.map((location) => {
                  const isActive = location.id === activeLocationId;

                  return (
                    <li key={location.id}>
                      <button
                        type="button"
                        onClick={() => selectCountry(location)}
                        aria-pressed={isActive}
                        className={`group flex w-full items-center gap-1.5 rounded-lg px-2 py-2 text-left transition-colors ${
                          isActive
                            ? "bg-[#EAF3FC] text-[#1557A0]"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span className="shrink-0 text-[10px] font-medium text-slate-500">
                          {location.countryCode}
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block break-words text-xs font-medium leading-4 sm:text-sm">
                            {location.country}
                          </span>
                          <span className="mt-0.5 block text-[9px] leading-3.5 text-slate-500">
                            {location.offices.length}{" "}
                            {location.offices.length === 1 ? "office" : "offices"}
                            {" · "}
                            {location.projects.length}{" "}
                            {location.projects.length === 1
                              ? "project"
                              : "projects"}
                          </span>
                        </span>

                        {isActive && (
                          <ArrowRight
                            size={12}
                            className="shrink-0 text-[#1557A0]"
                          />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <a
                href={exploreHref}
                className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[#064DA7] px-3 py-2.5 text-[11px] font-semibold text-white shadow-sm transition hover:bg-[#0B438B] focus:outline-none focus:ring-2 focus:ring-[#1557A0] focus:ring-offset-2"
              >
                Explore locations
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Compact details card */}
            <div className="min-w-3 overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_8px_28px_rgba(26,76,126,0.09)]">
              <div className="p-3.5 sm:p-3">
                <div className="flex items-start gap-2">
                  <span className="inline-flex h-8 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F2F7FC] text-lg">
                    {getCountryFlag(activeLocation.countryCode)}
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-[8px] font-semibold uppercase tracking-[0.1em] text-[#1557A0]">
                      {activeLocation.region}
                    </p>
                    <h3 className="mt-0.5 break-words text-xs font-semibold leading-4 text-slate-900 sm:text-sm">
                      {activeLocation.country}
                    </h3>
                    <p className="mt-0.5 text-[10px] leading-4 text-slate-500">
                      {activeLocation.city}
                    </p>
                  </div>
                </div>

                <p className="mt-2.5 text-[11px] leading-4 text-slate-600">
                  {activeLocation.summary}
                </p>
              </div>

              {/* Only this list scrolls, not the globe */}
              <div className="max-h-[310px] overflow-y-auto border-t border-slate-200">
                {viewMode === "global" ? (
                  <div className="px-2 py-5 text-center">
                    <Globe2
                      size={20}
                      className="mx-auto mb-2 text-slate-300"
                    />
                    <p className="text-[11px] font-medium text-slate-700">
                      Select a country
                    </p>
                    <p className="mt-1 text-[10px] leading-4 text-slate-500">
                      Browse its offices and projects.
                    </p>
                  </div>
                ) : (
                  <div className="p-1.5">
                    {activeLocation.offices.length > 0 && (
                      <section>
                        <h4 className="px-1 pb-1 pt-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#1557A0]">
                          Offices
                        </h4>

                        {activeLocation.offices.map((office) => {
                          const isSelected = selectedPointId === office.id;

                          return (
                            <button
                              key={office.id}
                              type="button"
                              onClick={() =>
                                selectPoint(activeLocation, office.id)
                              }
                              aria-pressed={isSelected}
                              className={`flex w-full items-start gap-1.5 rounded-lg p-1.5 text-left transition ${
                                isSelected
                                  ? "bg-[#EAF3FC] ring-1 ring-[#B8D5F3]"
                                  : "hover:bg-slate-50"
                              }`}
                            >
                              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#EAF3FC] text-[#1557A0]">
                                <Building2 size={13} />
                              </span>

                              <span className="min-w-0 flex-1">
                                <span className="block break-words text-[11px] font-semibold leading-4 text-slate-800">
                                  {office.name}
                                </span>
                                <span className="mt-0.5 block text-[10px] leading-4 text-slate-500">
                                  {office.city}
                                </span>
                                <span className="mt-1 block text-[10px] leading-4 text-slate-500">
                                  {office.summary}
                                </span>
                              </span>

                              <MapPin
                                size={11}
                                className={`mt-1 shrink-0 ${
                                  isSelected
                                    ? "text-[#1557A0]"
                                    : "text-slate-300"
                                }`}
                              />
                            </button>
                          );
                        })}
                      </section>
                    )}

                    {activeLocation.projects.length > 0 && (
                      <section className="mt-2">
                        <h4 className="px-1 pb-1 pt-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#C45A28]">
                          Industries & projects
                        </h4>

                        {activeLocation.projects.map((project) => {
                          const isSelected = selectedPointId === project.id;

                          return (
                            <button
                              key={project.id}
                              type="button"
                              onClick={() =>
                                selectPoint(activeLocation, project.id)
                              }
                              aria-pressed={isSelected}
                              className={`flex w-full items-start gap-1.5 rounded-lg p-1.5 text-left transition ${
                                isSelected
                                  ? "bg-orange-50 ring-1 ring-orange-200"
                                  : "hover:bg-slate-50"
                              }`}
                            >
                              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-orange-50 text-[#C45A28]">
                                <Factory size={13} />
                              </span>

                              <span className="min-w-0 flex-1">
                                <span className="block break-words text-[11px] font-semibold leading-4 text-slate-800">
                                  {project.name}
                                </span>
                                <span className="mt-0.5 block text-[10px] leading-4 text-slate-500">
                                  {project.city} · {project.industry}
                                </span>
                                <span className="mt-1 block text-[10px] leading-4 text-slate-500">
                                  {project.summary}
                                </span>
                                <span
                                  className={`mt-1 inline-flex rounded-full px-1.5 py-0.5 text-[9px] font-semibold ${
                                    project.status === "completed"
                                      ? "bg-emerald-50 text-emerald-700"
                                      : "bg-amber-50 text-amber-700"
                                  }`}
                                >
                                  {project.status === "completed"
                                    ? "Completed"
                                    : "Ongoing"}
                                </span>
                              </span>

                              <MapPin
                                size={11}
                                className={`mt-1 shrink-0 ${
                                  isSelected
                                    ? "text-[#C45A28]"
                                    : "text-slate-300"
                                }`}
                              />
                            </button>
                          );
                        })}
                      </section>
                    )}

                    {activeLocation.offices.length === 0 &&
                      activeLocation.projects.length === 0 && (
                        <p className="px-2 py-4 text-[11px] text-slate-500">
                          No locations have been added yet.
                        </p>
                      )}
                  </div>
                )}
              </div>

              {selectedPoint && (
                <div className="border-t border-slate-100 bg-slate-50 px-2.5 py-2">
                  <p className="text-[10px] leading-4 text-slate-600">
                    Focused on{" "}
                    <span className="font-semibold text-slate-800">
                      {selectedPoint.name}
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* GLOBE — original placement, dimensions and offsets preserved */}
        <div className="relative mt-8  min-h-[420px] lg:mt-0 lg:h-[660px] lg:min-h-0 ">
          <div
            ref={chartDivRef}
            aria-label="Interactive globe showing office and project locations"
            className="absolute -right-[18%] top-0 h-[430px] w-[120%] sm:-right-[16%] sm:h-[540px] lg:-right-[35%] lg:top-[-8%] lg:h-[760px] lg:w-[135%] xl:h-[850px]"
          />

          {/* Original globe controls retained */}
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/80 bg-white/95 p-1.5 shadow-[0_8px_25px_rgba(26,76,126,0.12)] backdrop-blur sm:bottom-8 sm:left-[45%] sm:translate-x-0 lg:bottom-[12%] lg:left-[18%]">
            <span className="px-2 text-[10px] text-slate-500">
              {globalPresenceLocations.findIndex(
                (item) => item.id === activeLocation.id,
              ) + 1}
              {" / "}
              {globalPresenceLocations.length}
            </span>

            <button
              type="button"
              onClick={() => stepCountry(-1)}
              aria-label="Previous country"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-[#1557A0] hover:text-[#1557A0]"
            >
              <ArrowLeft size={15} />
            </button>

            <button
              type="button"
              onClick={() => stepCountry(1)}
              aria-label="Next country"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1557A0] text-white transition hover:bg-[#0B438B]"
            >
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
