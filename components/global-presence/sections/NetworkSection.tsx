"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Building2, ChevronDown, Factory } from "lucide-react";
import { globalPresenceLocations } from "@/data/global-presence";
import { getCountryFlag, pointHref, SectionHeading, StatusBadge } from "../shared";

type Tab = "offices" | "projects";
type StatusFilter = "all" | "ongoing" | "completed";

const INITIAL_COUNT = 6;

const THEME = {
  offices: {
    text: "text-[#1557A0]",
    hover: "hover:border-[#1557A0]/40",
    ring: "focus-visible:ring-[#1557A0]",
  },
  projects: {
    text: "text-[#C45A28]",
    hover: "hover:border-[#C45A28]/40",
    ring: "focus-visible:ring-[#C45A28]",
  },
} as const;

function Select({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
}) {
  return (
    <label className="relative inline-flex">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-9 appearance-none rounded-full border border-slate-200 bg-white pl-3.5 pr-8 text-xs font-medium text-slate-700 transition-colors hover:border-[#B8D5F3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1557A0]"
      >
        {children}
      </select>
      <ChevronDown
        size={14}
        aria-hidden
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
      />
    </label>
  );
}

export default function NetworkSection() {
  const [tab, setTab] = useState<Tab>("offices");
  const [country, setCountry] = useState("all");
  const [industry, setIndustry] = useState("all");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [expanded, setExpanded] = useState(false);

  const offices = useMemo(
    () =>
      globalPresenceLocations.flatMap((location) =>
        location.offices.map((office) => ({
          location,
          id: office.id,
          name: office.name,
          subtitle: office.city,
          summary: office.summary,
          industry: undefined as string | undefined,
          status: undefined as string | undefined,
        })),
      ),
    [],
  );

  const projects = useMemo(
    () =>
      globalPresenceLocations.flatMap((location) =>
        location.projects.map((project) => ({
          location,
          id: project.id,
          name: project.name,
          subtitle: `${project.city} · ${project.industry}`,
          summary: project.summary,
          industry: project.industry as string | undefined,
          status: project.status as string | undefined,
        })),
      ),
    [],
  );

  const source = tab === "offices" ? offices : projects;
  const isProjects = tab === "projects";
  const theme = THEME[tab];

  // Only offer countries and industries that actually have entries in this tab
  const countries = useMemo(() => {
    const map = new Map<string, { id: string; label: string }>();
    source.forEach(({ location }) =>
      map.set(location.id, {
        id: location.id,
        label: `${getCountryFlag(location.countryCode)} ${location.country}`,
      }),
    );
    return [...map.values()];
  }, [source]);

  const industries = useMemo(
    () => [...new Set(projects.map((item) => item.industry!))].sort(),
    [projects],
  );

  const activeCountry = countries.some((c) => c.id === country) ? country : "all";

  const visible = source.filter(
    (item) =>
      (activeCountry === "all" || item.location.id === activeCountry) &&
      (!isProjects ||
        ((industry === "all" || item.industry === industry) &&
          (status === "all" || item.status === status))),
  );

  const shown = expanded ? visible : visible.slice(0, INITIAL_COUNT);
  const hiddenCount = visible.length - shown.length;
  const filtersActive =
    activeCountry !== "all" || (isProjects && (industry !== "all" || status !== "all"));

  const reset = () => {
    setCountry("all");
    setIndustry("all");
    setStatus("all");
  };

  const switchTab = (next: Tab) => {
    setTab(next);
    setExpanded(false);
  };

  const Icon = isProjects ? Factory : Building2;

  return (
    <div>
      <SectionHeading
        title="Offices & Projects"
        description="Browse our offices and project sites. Select any card to see it on the globe."
      />

      {/* Controls */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <div
          role="tablist"
          aria-label="Offices and projects"
          className="inline-flex rounded-full bg-slate-100 p-1"
        >
          {(
            [
              { id: "offices", label: "Offices", count: offices.length },
              { id: "projects", label: "Projects", count: projects.length },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={tab === item.id}
              onClick={() => switchTab(item.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1557A0] ${
                tab === item.id
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {item.label} <span className="text-slate-400">{item.count}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:ml-auto">
          <Select
            label="Filter by country"
            value={activeCountry}
            onChange={(value) => {
              setCountry(value);
              setExpanded(false);
            }}
          >
            <option value="all">All countries</option>
            {countries.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </Select>

          {isProjects && (
            <>
              <Select
                label="Filter by industry"
                value={industry}
                onChange={(value) => {
                  setIndustry(value);
                  setExpanded(false);
                }}
              >
                <option value="all">All industries</option>
                {industries.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </Select>
              <Select
                label="Filter by status"
                value={status}
                onChange={(value) => {
                  setStatus(value as StatusFilter);
                  setExpanded(false);
                }}
              >
                <option value="all">Any status</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </Select>
            </>
          )}
        </div>
      </div>

      {/* Cards */}
      <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map(({ location, id, name, subtitle, summary, status: itemStatus }) => (
          <li key={id}>
            <Link
              href={pointHref(location, id)}
              scroll={false}
              className={`group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${theme.hover} ${theme.ring}`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <span aria-hidden>{getCountryFlag(location.countryCode)}</span>
                  {location.country}
                </span>
                {itemStatus ? (
                  <StatusBadge status={itemStatus} />
                ) : (
                  <Icon size={14} className="text-slate-300" aria-hidden />
                )}
              </div>

              <h3 className="mt-3 text-sm font-semibold leading-snug text-slate-900">{name}</h3>
              <p className="mt-0.5 text-xs text-slate-500">{subtitle}</p>
              {summary && (
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-600">{summary}</p>
              )}

              <span
                className={`mt-auto inline-flex items-center gap-1 pt-3 text-xs font-semibold ${theme.text}`}
              >
                View on globe
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {visible.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-sm text-slate-600">Nothing matches these filters.</p>
          <button
            type="button"
            onClick={reset}
            className="mt-3 text-sm font-semibold text-[#1557A0] hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Footer: show more / clear */}
      {visible.length > 0 && (hiddenCount > 0 || expanded || filtersActive) && (
        <div className="mt-5 flex items-center justify-center gap-4">
          {(hiddenCount > 0 || (expanded && visible.length > INITIAL_COUNT)) && (
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-[#B8D5F3] hover:text-[#1557A0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1557A0]"
            >
              {expanded ? "Show less" : `Show ${hiddenCount} more`}
            </button>
          )}
          {filtersActive && (
            <button
              type="button"
              onClick={reset}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}