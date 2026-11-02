"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { globalPresenceLocations, globalPresencePage } from "@/data/global-presence";
import { FilterChip, getCountryFlag, pointHref, SectionHeading } from "../shared";

export default function OfficesSection() {
  const [country, setCountry] = useState<string>("all");

  const withOffices = globalPresenceLocations.filter((l) => l.offices.length > 0);
  const visible = withOffices.filter((l) => country === "all" || l.id === country);

  return (
    <div>
      <SectionHeading
        title={globalPresencePage.offices.heading}
        description={globalPresencePage.offices.description}
      />

      {/* Filters scroll sideways when there are many countries */}
      <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
        <FilterChip active={country === "all"} onClick={() => setCountry("all")}>
          All countries
        </FilterChip>
        {withOffices.map((location) => (
          <FilterChip
            key={location.id}
            active={country === location.id}
            onClick={() => setCountry(location.id)}
          >
            {getCountryFlag(location.countryCode)} {location.country}
          </FilterChip>
        ))}
      </div>

      <div className="mt-6">
        {visible.map((location) => (
          <div
            key={location.id}
            className="grid gap-x-10 border-t border-slate-200 py-6 lg:grid-cols-[220px_1fr]"
          >
            <div className="mb-3 flex items-center gap-2 lg:mb-0 lg:block">
              <span aria-hidden className="text-2xl lg:block">
                {getCountryFlag(location.countryCode)}
              </span>
              <div>
                <h3 className="text-base font-semibold text-slate-900 lg:mt-2">{location.country}</h3>
                <p className="text-xs text-slate-500">
                  {location.offices.length} {location.offices.length === 1 ? "office" : "offices"}
                </p>
              </div>
            </div>

            <ul className="grid gap-x-10 sm:grid-cols-2">
              {location.offices.map((office) => (
                <li
                  key={office.id}
                  className="flex items-start justify-between gap-4 border-b border-slate-100 py-4"
                >
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-slate-900">{office.name}</h4>
                    <p className="mt-0.5 text-xs text-slate-500">{office.city}</p>
                    {office.summary && (
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
                        {office.summary}
                      </p>
                    )}
                  </div>
                  <Link
                    href={pointHref(location, office.id)}
                    scroll={false}
                    aria-label={`Show ${office.name} on the globe`}
                    title="Show on globe"
                    className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-[#1557A0] hover:bg-[#1557A0] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1557A0] focus-visible:ring-offset-2"
                  >
                    <ArrowUpRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}