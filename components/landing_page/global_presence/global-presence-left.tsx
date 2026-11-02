"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Factory,
  Globe2,
} from "lucide-react";
import { globalPresenceLocations } from "@/data/global-presence";
import type { GlobalLocation, GlobalPoint } from "@/data/global-presence";

type ViewMode = "global" | "country";

// `href` is optional so this compiles before you add it to the data type.
type LinkablePoint = GlobalPoint & { href?: string };

type Props = {
  activeLocation: GlobalLocation;
  viewMode: ViewMode;
  selectedPointId: string | null;
  selectedPoint?: GlobalPoint;
  exploreHref: string;
  onSelectCountry: (location: GlobalLocation) => void;
  onSelectPoint: (location: GlobalLocation, pointId: string) => void;
  onShowGlobal: () => void;
};

export default function GlobalPresenceLeft({
  activeLocation,
  viewMode,
  selectedPointId,
  selectedPoint,
  exploreHref,
  onSelectCountry,
  onSelectPoint,
  onShowGlobal,
}: Props) {
  // Uses point.href if set, otherwise falls back to the explore page with query params.
  const getHref = (point: LinkablePoint) => {
    if (point.href) return point.href;
    const sep = exploreHref.includes("?") ? "&" : "?";
    return `${exploreHref}${sep}country=${activeLocation.id}&point=${point.id}`;
  };

  return (
    <div className="relative z-10 max-w-[470px] py-2 lg:py-1">
      <h2 className="section-heading text-slate-900">
        Global
        <br />
        <span className="text-brand-blue">Presence</span>
      </h2>

      <p className="mt-4 text-xl font-medium tracking-[-0.02em] text-slate-700 sm:text-2xl">
        Global expertise. Local execution.
      </p>

      <p className="mt-3 max-w-[390px] text-sm leading-6 text-slate-600 sm:text-base">
        A growing international network for technology, engineering and manufacturing.
      </p>

      {/* Country list and details card remain side by side. */}
      <div className="mt-7 grid grid-cols-[minmax(0,0.95fr)_minmax(0,1.55fr)] items-start gap-5 sm:gap-5">
        <div className="min-w-0" aria-label="Select a country">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
              Our locations
            </p>
            {viewMode === "country" && (
              <button
                type="button"
                onClick={onShowGlobal}
                className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#1557A0] hover:underline"
              >
                <Globe2 size={11} /> Global
              </button>
            )}
          </div>

          {/* Scrolls once more countries are added */}
          <ul className="max-h-[310px] space-y-1 overflow-y-auto pr-1">
            {globalPresenceLocations.map((location) => {
              const isActive = location.id === activeLocation.id;
              return (
                <li key={location.id}>
                  <button
                    type="button"
                    onClick={() => onSelectCountry(location)}
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
                        {location.offices.length} {location.offices.length === 1 ? "office" : "offices"}
                        {" · "}
                        {location.projects.length} {location.projects.length === 1 ? "project" : "projects"}
                      </span>
                    </span>
                    {isActive && <ArrowRight size={12} className="shrink-0 text-[#1557A0]" />}
                  </button>
                </li>
              );
            })}
          </ul>

          <a
            href={exploreHref}
            className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[#064DA7] px-3 py-2.5 text-[11px] font-semibold text-white shadow-sm transition hover:bg-[#0B438B] focus:outline-none focus:ring-2 focus:ring-[#1557A0] focus:ring-offset-2"
          >
            Explore locations <ArrowUpRight size={13} />
          </a>
        </div>

        <div className="min-w-0 overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_8px_28px_rgba(26,76,126,0.09)]">
          <div className="max-h-[310px] overflow-y-auto">
            {viewMode === "global" ? (
              <div className="px-2 py-5 text-center">
                <Globe2 size={20} className="mx-auto mb-2 text-slate-300" />
                <p className="text-[11px] font-medium text-slate-700">Select a country</p>
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
                    {activeLocation.offices.map((office: LinkablePoint) => {
                      const isSelected = selectedPointId === office.id;
                      return (
                        <div
                          key={office.id}
                          className={`flex items-start gap-1 rounded-lg transition ${
                            isSelected
                              ? "bg-[#EAF3FC] ring-1 ring-[#B8D5F3]"
                              : "hover:bg-slate-50"
                          }`}
                        >
                          {/* Name area: focuses the point on the globe */}
                          <button
                            type="button"
                            onClick={() => onSelectPoint(activeLocation, office.id)}
                            aria-pressed={isSelected}
                            className="flex min-w-0 flex-1 items-start gap-1.5 p-1.5 text-left"
                          >
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#EAF3FC] text-[#1557A0]">
                              <Building2 size={13} />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block break-words text-[11px] font-semibold leading-4 text-slate-800">
                                {office.name}
                              </span>
                              <span className="mt-0.5 block text-[10px] leading-4 text-slate-500">{office.city}</span>
                            </span>
                          </button>

                          {/* Redirect button */}
                          <Link
                            href={getHref(office)}
                            aria-label={`View ${office.name}`}
                            title="View details"
                            className="mr-1.5 mt-1.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-[#1557A0] hover:bg-[#1557A0] hover:text-white"
                          >
                            <ArrowUpRight size={12} />
                          </Link>
                        </div>
                      );
                    })}
                  </section>
                )}

                {activeLocation.projects.length > 0 && (
                  <section className="mt-2">
                    <h4 className="px-1 pb-1 pt-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#C45A28]">
                      Industries &amp; projects
                    </h4>
                    {activeLocation.projects.map((project: LinkablePoint & { industry?: string }) => {
                      const isSelected = selectedPointId === project.id;
                      return (
                        <div
                          key={project.id}
                          className={`flex items-start gap-1 rounded-lg transition ${
                            isSelected
                              ? "bg-orange-50 ring-1 ring-orange-200"
                              : "hover:bg-slate-50"
                          }`}
                        >
                          {/* Name area: focuses the point on the globe */}
                          <button
                            type="button"
                            onClick={() => onSelectPoint(activeLocation, project.id)}
                            aria-pressed={isSelected}
                            className="flex min-w-0 flex-1 items-start gap-1.5 p-1.5 text-left"
                          >
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-orange-50 text-[#C45A28]">
                              <Factory size={13} />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block break-words text-[11px] font-semibold leading-4 text-slate-800">{project.name}</span>
                              <span className="mt-0.5 block text-[10px] leading-4 text-slate-500">{project.city} · {project.industry}</span>
                            </span>
                          </button>

                          {/* Redirect button */}
                          <Link
                            href={getHref(project)}
                            aria-label={`View ${project.name}`}
                            title="View details"
                            className="mr-1.5 mt-1.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-[#C45A28] hover:bg-[#C45A28] hover:text-white"
                          >
                            <ArrowUpRight size={12} />
                          </Link>
                        </div>
                      );
                    })}
                  </section>
                )}

                {activeLocation.offices.length === 0 && activeLocation.projects.length === 0 && (
                  <p className="px-2 py-4 text-[11px] text-slate-500">No locations have been added yet.</p>
                )}
              </div>
            )}
          </div>

          {selectedPoint && (
            <div className="border-t border-slate-100 bg-slate-50 px-2.5 py-2">
              <p className="text-[10px] leading-4 text-slate-600">
                Focused on <span className="font-semibold text-slate-800">{selectedPoint.name}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}