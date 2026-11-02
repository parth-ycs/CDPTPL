"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { globalPresenceLocations, globalPresencePage } from "@/data/global-presence";
import {
  FilterChip,
  getCountryFlag,
  pointHref,
  SectionHeading,
  StatusBadge,
} from "../shared";

type StatusFilter = "all" | "ongoing" | "completed";

export default function ProjectsSection() {
  const [industry, setIndustry] = useState<string>("all");
  const [status, setStatus] = useState<StatusFilter>("all");

  const allProjects = useMemo(
    () =>
      globalPresenceLocations.flatMap((location) =>
        location.projects.map((project) => ({ location, project })),
      ),
    [],
  );

  const industries = useMemo(
    () => [...new Set(allProjects.map(({ project }) => project.industry))].sort(),
    [allProjects],
  );

  const visible = allProjects.filter(
    ({ project }) =>
      (industry === "all" || project.industry === industry) &&
      (status === "all" || project.status === status),
  );

  const reset = () => {
    setIndustry("all");
    setStatus("all");
  };

  return (
    <div>
      <SectionHeading
        title={globalPresencePage.projects.heading}
        description={globalPresencePage.projects.description}
      />

      <div className="mt-6 space-y-3">
        <div className="flex gap-2 overflow-x-auto pb-1">
          <FilterChip active={industry === "all"} onClick={() => setIndustry("all")}>
            All industries
          </FilterChip>
          {industries.map((name) => (
            <FilterChip key={name} active={industry === name} onClick={() => setIndustry(name)}>
              {name}
            </FilterChip>
          ))}
        </div>

        <div className="flex gap-2">
          {(
            [
              { id: "all", label: "Any status" },
              { id: "ongoing", label: "Ongoing" },
              { id: "completed", label: "Completed" },
            ] as const
          ).map((item) => (
            <FilterChip key={item.id} active={status === item.id} onClick={() => setStatus(item.id)}>
              {item.label}
            </FilterChip>
          ))}
        </div>
      </div>

      <ul className="mt-6 border-t border-slate-200">
        {visible.map(({ location, project }) => (
          <li
            key={project.id}
            className="grid items-start gap-x-8 gap-y-2 border-b border-slate-100 py-5 sm:grid-cols-[minmax(0,1.6fr)_minmax(0,0.9fr)_auto_auto] sm:items-center"
          >
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-slate-900">{project.name}</h3>
              <p className="mt-0.5 text-xs text-slate-500">
                <span aria-hidden>{getCountryFlag(location.countryCode)}</span> {project.city},{" "}
                {location.country}
              </p>
              {project.summary && (
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{project.summary}</p>
              )}
            </div>

            <p className="text-sm text-slate-700">{project.industry}</p>

            <div className="sm:justify-self-start">
              <StatusBadge status={project.status} />
            </div>

            <Link
              href={pointHref(location, project.id)}
              scroll={false}
              aria-label={`Show ${project.name} on the globe`}
              title="Show on globe"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-[#C45A28] hover:bg-[#C45A28] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C45A28] focus-visible:ring-offset-2"
            >
              <ArrowUpRight size={14} />
            </Link>
          </li>
        ))}
      </ul>

      {visible.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-sm text-slate-600">No projects match these filters.</p>
          <button
            type="button"
            onClick={reset}
            className="mt-3 text-sm font-semibold text-[#1557A0] hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}