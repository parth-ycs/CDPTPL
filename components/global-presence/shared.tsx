import type { ReactNode } from "react";
import { globalPresenceLocations } from "@/data/global-presence";
import type { GlobalLocation } from "@/data/global-presence";

export type Office = GlobalLocation["offices"][number];
export type Project = GlobalLocation["projects"][number];
export type AnyPoint = Office | Project;

export const GLOBAL_PRESENCE_PATH = "/global-presence";

export function getCountryFlag(code: string) {
  return String.fromCodePoint(
    ...[...code.toUpperCase()].map((char) => 127397 + char.charCodeAt(0)),
  );
}

export function getPoint(location: GlobalLocation, pointId: string): AnyPoint | undefined {
  return (
    location.offices.find((office) => office.id === pointId) ??
    location.projects.find((project) => project.id === pointId)
  );
}

export function findLocationByPoint(pointId: string): GlobalLocation | undefined {
  return globalPresenceLocations.find((location) => getPoint(location, pointId));
}

/** Link that opens the globe explorer on a country, and optionally on one office or project. */
export function pointHref(location: GlobalLocation, pointId?: string) {
  const query = new URLSearchParams({ country: location.id });
  if (pointId) query.set("point", pointId);
  return `${GLOBAL_PRESENCE_PATH}?${query.toString()}`;
}

export function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-[640px]">
      <span className="mb-4 block h-[2px] w-10 bg-red-500" />
      <h2 className="font-heading text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

export function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1557A0] focus-visible:ring-offset-2 ${
        active
          ? "border-[#1557A0] bg-[#1557A0] text-white"
          : "border-slate-200 bg-white text-slate-600 hover:border-[#B8D5F3] hover:text-[#1557A0]"
      }`}
    >
      {children}
    </button>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const completed = status === "completed";
  return (
    <span
      className={`inline-flex shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
        completed ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
      }`}
    >
      {completed ? "Completed" : "Ongoing"}
    </span>
  );
}
