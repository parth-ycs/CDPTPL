"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Building2,
  ChevronLeft,
  ChevronRight,
  Factory,
  FolderKanban,
  Globe2,
  type LucideIcon,
} from "lucide-react";
import type { GlobalCategory, GlobalLocation } from "@/data/global-presence";
import GlobalPresenceMap, {
  categoryStyles,
  flagUrl,
  type MapMarker,
} from "./global-presence-map";
import GlobalPresenceDetails from "./global-presence-details";
import Container from "@/components/container";

const categories: { id: GlobalCategory; icon: LucideIcon }[] = [
  { id: "offices", icon: Building2 },
  { id: "facilities", icon: Factory },
  { id: "projects", icon: FolderKanban },
];

const DEFAULT_COUNTRY = "india";

export function GlobeExplorerSection({
  locations,
}: {
  locations: GlobalLocation[];
}) {
  const [category, setCategory] = useState<GlobalCategory>("offices");
  const [countryId, setCountryId] = useState(DEFAULT_COUNTRY);
  const [viewAll, setViewAll] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ start: true, end: true });

  // Only countries that have entries in the active category.
  const countries = useMemo(
    () => locations.filter((l) => l[category].length > 0),
    [locations, category],
  );

  // Retained country -> India -> first available -> none.
  const activeCountry = viewAll
    ? null
    : (countries.find((c) => c.id === countryId) ??
      countries.find((c) => c.id === DEFAULT_COUNTRY) ??
      countries[0] ??
      null);

  const groups = viewAll ? countries : activeCountry ? [activeCountry] : [];

  const markers = useMemo<MapMarker[]>(
    () =>
      groups.flatMap((g) =>
        g[category].map((entry) => ({ entry, countryId: g.id })),
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [category, viewAll, activeCountry?.id, countries],
  );

  function selectCategory(next: GlobalCategory) {
    if (next === category) return;
    const available = locations.filter((l) => l[next].length > 0);
    const keep =
      available.find((c) => c.id === countryId) ??
      available.find((c) => c.id === DEFAULT_COUNTRY) ??
      available[0];
    if (keep) setCountryId(keep.id);
    setCategory(next);
    setSelectedId(null);
  }

  function selectCountry(id: string) {
    setCountryId(id);
    setViewAll(false);
    setSelectedId(null);
  }

  function toggleViewAll() {
    setViewAll((v) => !v);
    setSelectedId(null);
  }

  function selectEntry(id: string) {
    setSelectedId((cur) => (cur === id ? null : id));
  }

  /* ---- Country bar scrolling ---- */
  function updateEdges() {
    const el = navRef.current;
    if (!el) return;
    setEdge({
      start: el.scrollLeft <= 2,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2,
    });
  }

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [countries]);

  useEffect(() => {
    const el = navRef.current;
    const btn = el?.querySelector<HTMLElement>("[data-active='true']");
    if (el && btn) {
      el.scrollTo({
        left: btn.offsetLeft - el.clientWidth / 2 + btn.clientWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeCountry?.id, category]);

  const scrollNav = (dir: 1 | -1) =>
    navRef.current?.scrollBy({ left: dir * 240, behavior: "smooth" });

  const arrowClass =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-white text-brand-blue transition-colors hover:border-brand-blue hover:bg-brand-light/40 disabled:pointer-events-none disabled:opacity-40";

  return (
    <section aria-label="Global presence explorer" className="bg-white">
      <Container>
        <div className="flex flex-col gap-4 lg:h-[calc(100svh-var(--gp-offset,5.5rem))] lg:min-h-[600px]">
          {/* Top row: category selectors + View All */}
          <div className="flex shrink-0 items-center justify-between gap-4">
            <div
              className="flex items-start gap-5 sm:gap-8"
              role="group"
              aria-label="Category"
            >
              {categories.map(({ id, icon: Icon }) => {
                const active = id === category;
                const count = locations.reduce(
                  (n, l) => n + l[id].length,
                  0,
                );
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => selectCategory(id)}
                    className="group flex flex-col items-center gap-1.5"
                  >
                    <span
                      className={`relative flex h-18 w-18 items-center justify-center rounded-full border transition-all duration-200 ${
                        active
                          ? "border-brand-blue bg-brand-blue text-white shadow-md shadow-brand-blue/25"
                          : "border-line bg-white text-brand-blue group-hover:border-brand-blue/50 group-hover:bg-brand-light/40"
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                      <span
                        className={`absolute -right-1 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 text-[10px] font-semibold ring-1 ${
                          active
                            ? "bg-white text-brand-blue ring-brand-blue"
                            : "bg-pale text-muted ring-line"
                        }`}
                      >
                        {count}
                      </span>
                    </span>
                    <span
                      className={`text-caption font-semibold transition-colors ${
                        active ? "text-brand-blue" : "text-muted"
                      }`}
                    >
                      {categoryStyles[id].label}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={toggleViewAll}
              aria-pressed={viewAll}
              disabled={countries.length === 0}
              className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-small font-semibold transition-colors disabled:pointer-events-none disabled:opacity-40 ${
                viewAll
                  ? "border-brand-blue bg-brand-blue text-white"
                  : "border-brand-blue bg-white text-brand-blue hover:bg-brand-blue hover:text-white"
              }`}
            >
              <Globe2 className="h-4 w-4" />
              View All
            </button>
          </div>

          {/* Country navigation */}
          <div className="flex shrink-0 items-center gap-2 rounded-2xl border border-line bg-pale p-1.5">
            <button
              type="button"
              aria-label="Scroll countries left"
              disabled={edge.start}
              onClick={() => scrollNav(-1)}
              className={arrowClass}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div
              ref={navRef}
              onScroll={updateEdges}
              className="relative flex min-w-0 flex-1 items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {countries.length === 0 ? (
                <p className="px-3 py-2 text-small text-muted">
                  No {categoryStyles[category].label.toLowerCase()} listed yet.
                </p>
              ) : (
                countries.map((c) => {
                  const active = !viewAll && activeCountry?.id === c.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      data-active={active}
                      aria-pressed={active}
                      onClick={() => selectCountry(c.id)}
                      className={`flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-xl border px-4 py-2 text-small font-semibold transition-all duration-200 ${
                        active
                          ? "border-brand-blue/20 bg-brand-light shadow-sm"
                          : "border-line bg-white text-ink hover:border-brand-blue/40 hover:text-brand-blue"
                      }`}
                    >
                      <img
                        src={flagUrl(c.countryCode)}
                        alt=""
                        className="h-4 w-6 rounded-[2px] object-cover"
                      />
                      {c.country}
                    </button>
                  );
                })
              )}
            </div>

            <button
              type="button"
              aria-label="Scroll countries right"
              disabled={edge.end}
              onClick={() => scrollNav(1)}
              className={arrowClass}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Details (left) + map (right) */}
          <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            <div className="h-[420px] min-h-0 lg:h-auto">
              <GlobalPresenceDetails
                category={category}
                groups={groups}
                isGlobal={viewAll}
                selectedId={selectedId}
                onSelect={selectEntry}
              />
            </div>
            <div className="aspect-[960/563] min-h-0 lg:aspect-auto lg:h-auto">
              <GlobalPresenceMap
                category={category}
                countries={countries}
                activeCountry={activeCountry}
                markers={markers}
                selectedId={selectedId}
                onSelect={selectEntry}
                onCountrySelect={selectCountry}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Suspense fallback: same footprint as the real section so nothing jumps. */
export function GlobeExplorerSkeleton() {
  return (
    <section aria-hidden="true" className="bg-white">
      <Container>
        <div className="flex animate-pulse flex-col gap-4 lg:h-[calc(100svh-var(--gp-offset,5.5rem))] lg:min-h-[600px]">
          <div className="flex shrink-0 items-center justify-between">
            <div className="flex gap-6 sm:gap-8">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <div className="h-12 w-12 rounded-full bg-pale" />
                  <div className="h-3 w-12 rounded bg-pale" />
                </div>
              ))}
            </div>
            <div className="h-10 w-28 rounded-full bg-pale" />
          </div>
          <div className="h-[54px] shrink-0 rounded-2xl bg-pale" />
          <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            <div className="h-[420px] rounded-2xl bg-pale lg:h-auto" />
            <div className="aspect-[960/563] rounded-2xl bg-brand-light/25 lg:aspect-auto" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default GlobeExplorerSection;