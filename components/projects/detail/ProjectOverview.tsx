import {
  CalendarDays,
  ClipboardList,
  Factory,
  MapPin,
  Ruler,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { Project } from "@/data/projects";

type ProjectOverviewProps = {
  project: Project;
};

type ProjectFact = {
  label: string;
  value: string;
  Icon: LucideIcon;
};

export default function ProjectOverview({
  project,
}: ProjectOverviewProps) {
  const projectFacts: ProjectFact[] = [
    {
      label: "Location",
      value: project.location,
      Icon: MapPin,
    },
    {
      label: "Plant / Facility",
      value: project.plant,
      Icon: Factory,
    },
    ...(project.capacity
      ? [
          {
            label: "Capacity",
            value: project.capacity,
            Icon: Ruler,
          },
        ]
      : []),
    ...(project.yearOfAward
      ? [
          {
            label: "Year of Award",
            value: project.yearOfAward,
            Icon: CalendarDays,
          },
        ]
      : []),
    {
      label: "Completion Status",
      value: project.yearOfCompletion,
      Icon: CalendarDays,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-12">
        <div>
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-red-600" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Project Overview
            </span>
          </div>

          <h2 className="mt-6 max-w-[700px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Engineering scope and project requirements.
          </h2>

          <p className="mt-7 max-w-[760px] whitespace-pre-line text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
            {project.description}
          </p>

          {project.executionScope && (
            <div className="mt-9 border-l-[3px] border-red-600 bg-[#f5f7fa] px-6 py-5 sm:px-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Execution Scope
              </p>
              <p className="mt-3 text-base font-semibold leading-7 text-[#102c59]">
                {project.executionScope}
              </p>
            </div>
          )}
        </div>

        <aside className="h-fit border border-slate-200 bg-white">
          <div className="border-b border-slate-200 bg-[#f5f7fa] px-6 py-5 sm:px-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Project Information
            </p>
          </div>

          <div className="divide-y divide-slate-200 px-6 sm:px-7">
            {projectFacts.map(({ label, value, Icon }) => (
              <div key={label} className="flex gap-4 py-5">
                <Icon
                  size={20}
                  strokeWidth={1.6}
                  className="mt-0.5 shrink-0 text-red-600"
                  aria-hidden="true"
                />

                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                    {label}
                  </p>
                  <p className="mt-2 break-words text-sm font-medium leading-6 text-[#102c59]">
                    {value}
                  </p>
                </div>
              </div>
            ))}

            {project.contractValue && (
              <div className="flex gap-4 py-5">
                <ClipboardList
                  size={20}
                  strokeWidth={1.6}
                  className="mt-0.5 shrink-0 text-red-600"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Contract Value
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#102c59]">
                    {project.contractValue}
                  </p>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}