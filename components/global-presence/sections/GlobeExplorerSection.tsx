"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Building2, Factory, Globe2, MapPin } from "lucide-react";
import { globalPresenceLocations, globalPresencePage } from "@/data/global-presence";
import type { GlobalLocation } from "@/data/global-presence";
// TODO: update this path to wherever your landing-page globe component lives.
import GlobalPresenceGlobe from "@/components/landing_page/global_presence/global-presence-globe";
import {
  findLocationByPoint,
  getCountryFlag,
  getPoint,
  SectionHeading,
  StatusBadge,
} from "../shared";

type ViewMode = "global" | "country";
type Tab = "offices" | "projects";

/** Works out the starting selection from ?country=<id>&point=<id>. */
function resolveFromParams(countryParam: string | null, pointParam: string | null) {
  const byCountry = countryParam
    ? globalPresenceLocations.find((location) => location.id === countryParam)
    : undefined;
  const location = byCountry ?? (pointParam ? findLocationByPoint(pointParam) : undefined);
  if (!location) return null;

  const pointId = pointParam && getPoint(location, pointParam) ? pointParam : null;
  const tab: Tab =
    pointId && location.projects.some((project) => project.id === pointId)
      ? "projects"
      : "offices";
  return { location, pointId, tab };
}

export function GlobeExplorerSkeleton() {
  return (
    <div
      aria-hidden
      className="h-[640px] animate-pulse rounded-3xl border border-slate-200 bg-slate-50"
    />
  );
}

export default function GlobeExplorerSection() {
  const searchParams = useSearchParams();
  const countryParam = searchParams.get("country");
  const pointParam = searchParams.get("point");

  // Read the URL once for the very first render, so the globe opens in the right place.
  const initial = useMemo(
    () => resolveFromParams(countryParam, pointParam),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const rootRef = useRef<HTMLDivElement | null>(null);
  const [activeLocationId, setActiveLocationId] = useState(
    initial?.location.id ?? "india",
  );
  const [viewMode, setViewMode] = useState<ViewMode>(initial ? "country" : "global");
  const [selectedPointId, setSelectedPointId] = useState<string | null>(
    initial?.pointId ?? null,
  );
  const [tab, setTab] = useState<Tab>(initial?.tab ?? "offices");

  const activeLocation = useMemo(
    () =>
      globalPresenceLocations.find((location) => location.id === activeLocationId) ??
      globalPresenceLocations[0],
    [activeLocationId],
  );

  // Globe callbacks must stay stable, otherwise the globe is rebuilt.
  const selectCountryFromGlobe = useCallback((location: GlobalLocation) => {
    setActiveLocationId(location.id);
    // Keep the selected point if it belongs to the country that was just activated.
    setSelectedPointId((previous) => (previous && getPoint(location, previous) ? previous : null));
    setViewMode("country");
  }, []);

  const selectPoint = useCallback((location: GlobalLocation, pointId: string) => {
    if (!getPoint(location, pointId)) return;
    setActiveLocationId(location.id);
    setSelectedPointId(pointId);
    setViewMode("country");
    setTab(location.projects.some((project) => project.id === pointId) ? "projects" : "offices");
  }, []);

  const chooseCountry = useCallback((location: GlobalLocation) => {
    setActiveLocationId(location.id);
    setSelectedPointId(null);
    setViewMode("country");
    setTab(location.offices.length > 0 ? "offices" : "projects");
  }, []);

  const showGlobal = useCallback(() => {
    setViewMode("global");
    setSelectedPointId(null);
  }, []);

  // Links from other sections or the landing page change the URL: follow it and scroll here.
  const firstRun = useRef(true);
  useEffect(() => {
    const target = resolveFromParams(countryParam, pointParam);
    if (!target) return;

    if (!firstRun.current) {
      setActiveLocationId(target.location.id);
      setSelectedPointId(target.pointId);
      setViewMode("country");
      setTab(target.tab);
    }
    firstRun.current = false;

    const timer = window.setTimeout(() => {
      rootRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
    return () => window.clearTimeout(timer);
  }, [countryParam, pointParam]);

  const officeCount = activeLocation.offices.length;
  const projectCount = activeLocation.projects.length;
  const totalOffices = globalPresenceLocations.reduce((sum, l) => sum + l.offices.length, 0);
  const totalProjects = globalPresenceLocations.reduce((sum, l) => sum + l.projects.length, 0);

  const rows =
    tab === "offices"
      ? activeLocation.offices.map((office) => ({
          id: office.id,
          title: office.name,
          subtitle: office.city,
          summary: office.summary,
          status: undefined as string | undefined,
          kind: "office" as const,
        }))
      : activeLocation.projects.map((project) => ({
          id: project.id,
          title: project.name,
          subtitle: `${project.city}, ${project.industry}`,
          summary: project.summary,
          status: project.status as string | undefined,
          kind: "project" as const,
        }));

  return (
    <div ref={rootRef} className="scroll-mt-40">
      <SectionHeading
        title={globalPresencePage.explorer.heading}
        description={globalPresencePage.explorer.description}
      />

      <div className="mt-8 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(26,76,126,0.10)] lg:h-[640px] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        {/* Left: country picker and details */}
        <div className="flex min-h-0 flex-col border-b border-slate-100 lg:border-b-0 lg:border-r">
          <div className="border-b border-slate-100 px-5 pb-3 pt-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-medium text-slate-500">Countries</p>
              {viewMode === "country" && (
                <button
                  type="button"
                  onClick={showGlobal}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1557A0] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1557A0]"
                >
                  <Globe2 size={12} /> Show all
                </button>
              )}
            </div>
            {/* Scrolls sideways, so any number of countries fits */}
            <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
              {globalPresenceLocations.map((location) => {
                const active = viewMode === "country" && location.id === activeLocation.id;
                return (
                  <button
                    key={location.id}
                    type="button"
                    onClick={() => chooseCountry(location)}
                    aria-pressed={active}
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1557A0] focus-visible:ring-offset-2 ${
                      active
                        ? "border-[#1557A0] bg-[#EAF3FC] text-[#1557A0]"
                        : "border-slate-200 text-slate-600 hover:border-[#B8D5F3] hover:text-[#1557A0]"
                    }`}
                  >
                    <span aria-hidden>{getCountryFlag(location.countryCode)}</span>
                    {location.country}
                  </button>
                );
              })}
            </div>
          </div>

          {viewMode === "global" ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
              <Globe2 size={26} className="text-slate-300" />
              <p className="mt-3 text-sm font-semibold text-slate-800">
                {totalOffices} offices and {totalProjects} projects in {globalPresenceLocations.length} countries
              </p>
              <p className="mt-1 max-w-[260px] text-xs leading-5 text-slate-500">
                Select a country to see its offices and projects.
              </p>
            </div>
          ) : (
            <div className="flex min-h-0 flex-1 flex-col">
              <div className="px-5 pt-4">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="inline-flex h-10 w-12 shrink-0 items-center justify-center rounded-lg bg-[#F2F7FC] text-xl"
                  >
                    {getCountryFlag(activeLocation.countryCode)}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-heading text-lg font-semibold leading-6 text-slate-900">
                      {activeLocation.country}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {activeLocation.city} ({activeLocation.region})
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{activeLocation.summary}</p>

                <div
                  role="tablist"
                  aria-label="Offices and projects"
                  className="mt-4 inline-flex rounded-full bg-slate-100 p-1"
                >
                  {(
                    [
                      { id: "offices", label: "Offices", count: officeCount },
                      { id: "projects", label: "Projects", count: projectCount },
                    ] as const
                  ).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={tab === item.id}
                      onClick={() => setTab(item.id)}
                      className={`rounded-full px-3.5 py-1 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1557A0] ${
                        tab === item.id
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      {item.label} <span className="text-slate-400">{item.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* This list scrolls, so it keeps working as more offices and projects are added */}
              <ul className="mt-3 max-h-[360px] min-h-0 flex-1 space-y-0.5 overflow-y-auto px-3 pb-4 lg:max-h-none">
                {rows.length === 0 && (
                  <li className="px-3 py-8 text-center text-xs text-slate-500">
                    No {tab} added for {activeLocation.country} yet.
                  </li>
                )}
                {rows.map((row) => {
                  const selected = selectedPointId === row.id;
                  const isOffice = row.kind === "office";
                  const Icon = isOffice ? Building2 : Factory;
                  return (
                    <li key={row.id}>
                      <button
                        type="button"
                        onClick={() =>
                          selected
                            ? setSelectedPointId(null)
                            : selectPoint(activeLocation, row.id)
                        }
                        aria-pressed={selected}
                        className={`flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1557A0] ${
                          selected
                            ? isOffice
                              ? "bg-[#EAF3FC]"
                              : "bg-orange-50"
                            : "hover:bg-slate-50"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                            isOffice ? "bg-[#EAF3FC] text-[#1557A0]" : "bg-orange-50 text-[#C45A28]"
                          }`}
                        >
                          <Icon size={15} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-2">
                            <span className="truncate text-sm font-semibold text-slate-900">
                              {row.title}
                            </span>
                            {row.status && <StatusBadge status={row.status} />}
                          </span>
                          <span className="mt-0.5 block text-xs text-slate-500">{row.subtitle}</span>
                          {selected && row.summary && (
                            <span className="mt-2 block text-xs leading-5 text-slate-600">
                              {row.summary}
                            </span>
                          )}
                        </span>
                        <MapPin
                          size={14}
                          className={`mt-1 shrink-0 ${
                            selected
                              ? isOffice
                                ? "text-[#1557A0]"
                                : "text-[#C45A28]"
                              : "text-slate-300"
                          }`}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        {/* Right: the globe */}
        <div className="relative min-h-[420px] overflow-hidden bg-gradient-to-br from-[#F0F6FF] via-white to-[#EAF3FC]">
          <div className="pointer-events-none absolute left-4 top-4 z-10 flex items-center gap-3 rounded-full bg-white/90 px-3 py-1.5 text-[11px] text-slate-600 shadow-sm backdrop-blur">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#1557A0]" /> Office
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#C45A28]" /> Project
            </span>
          </div>

          <GlobalPresenceGlobe
            variant="page"
            activeLocation={activeLocation}
            viewMode={viewMode}
            selectedPointId={selectedPointId}
            onSelectCountry={selectCountryFromGlobe}
            onSelectPoint={selectPoint}
          />
        </div>
      </div>
    </div>
  );
}