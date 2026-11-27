import {
  Briefcase,
  CalendarDays,
  ClipboardList,
  Factory,
  MapPin,
  Ruler,
  type LucideIcon,
} from "lucide-react";

import type { ProjectDetails as ProjectDetailsData } from "@/data/projects/types";

type Fact = { label: string; value: string; Icon: LucideIcon };

export default function ProjectDetails({
  details,
}: {
  details: ProjectDetailsData;
}) {
  const facts: Fact[] = [
    details.location && { label: "Location", value: details.location, Icon: MapPin },
    details.plant && { label: "Plant / Facility", value: details.plant, Icon: Factory },
    details.capacity && { label: "Capacity", value: details.capacity, Icon: Ruler },
    details.yearOfAward && { label: "Year of Award", value: details.yearOfAward, Icon: CalendarDays },
    details.yearOfCompletion && { label: "Year of Completion", value: details.yearOfCompletion, Icon: CalendarDays },
    details.contractValue && { label: "Contract Value", value: details.contractValue, Icon: ClipboardList },
  ].filter((fact): fact is Fact => Boolean(fact));

  if (facts.length === 0 && !details.executionScope) return null;

  return (
    <section className="px-6 pb-12 lg:px-16 lg:pb-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-heading text-h2 font-medium text-brand-deep">
          Project Information
        </h2>

        {facts.length > 0 && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map(({ label, value, Icon }) => (
              <div
                key={label}
                className="flex gap-4 rounded-xl border border-line bg-pale p-5"
              >
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-brand-red"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <p className="text-caption font-semibold uppercase tracking-wider text-muted">
                    {label}
                  </p>
                  <p className="mt-1.5 break-words text-body font-medium text-brand-deep">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {details.executionScope && (
          <div className="mt-4 flex gap-4 rounded-xl border-l-[3px] border-brand-red bg-pale p-5">
            <Briefcase
              size={22}
              strokeWidth={1.5}
              className="mt-0.5 shrink-0 text-brand-red"
              aria-hidden="true"
            />
            <div>
              <p className="text-caption font-semibold uppercase tracking-wider text-muted">
                Execution Scope
              </p>
              <p className="mt-1.5 text-body font-medium text-brand-deep">
                {details.executionScope}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}