"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Factory,
  Globe2,
  MapPin,
} from "lucide-react";
import { globalPresenceLocations } from "@/data/global-presence";
import type { GlobalLocation, GlobalPoint } from "@/data/global-presence";

type ViewMode = "global" | "country";

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

function getCountryFlag(code: string) {
  return String.fromCodePoint(
    ...[...code.toUpperCase()].map((char) => 127397 + char.charCodeAt(0)),
  );
}

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
  return (
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

          <ul className="space-y-1">
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

          <div className="max-h-[310px] overflow-y-auto border-t border-slate-200">
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
                    {activeLocation.offices.map((office) => {
                      const isSelected = selectedPointId === office.id;
                      return (
                        <button
                          key={office.id}
                          type="button"
                          onClick={() => onSelectPoint(activeLocation, office.id)}
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
                            <span className="mt-0.5 block text-[10px] leading-4 text-slate-500">{office.city}</span>
                            <span className="mt-1 block text-[10px] leading-4 text-slate-500">{office.summary}</span>
                          </span>
                          <MapPin size={11} className={`mt-1 shrink-0 ${isSelected ? "text-[#1557A0]" : "text-slate-300"}`} />
                        </button>
                      );
                    })}
                  </section>
                )}

                {activeLocation.projects.length > 0 && (
                  <section className="mt-2">
                    <h4 className="px-1 pb-1 pt-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#C45A28]">
                      Industries &amp; projects
                    </h4>
                    {activeLocation.projects.map((project) => {
                      const isSelected = selectedPointId === project.id;
                      return (
                        <button
                          key={project.id}
                          type="button"
                          onClick={() => onSelectPoint(activeLocation, project.id)}
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
                            <span className="block break-words text-[11px] font-semibold leading-4 text-slate-800">{project.name}</span>
                            <span className="mt-0.5 block text-[10px] leading-4 text-slate-500">{project.city} · {project.industry}</span>
                            <span className="mt-1 block text-[10px] leading-4 text-slate-500">{project.summary}</span>
                            <span className={`mt-1 inline-flex rounded-full px-1.5 py-0.5 text-[9px] font-semibold ${project.status === "completed" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
                              {project.status === "completed" ? "Completed" : "Ongoing"}
                            </span>
                          </span>
                          <MapPin size={11} className={`mt-1 shrink-0 ${isSelected ? "text-[#C45A28]" : "text-slate-300"}`} />
                        </button>
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
