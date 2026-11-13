import { Building2, Factory, Globe2, Layers } from "lucide-react";
import { globalPresenceLocations, globalPresencePage } from "@/data/global-presence";
import { getCountryFlag, SectionHeading } from "../shared";

export default function OverviewSection() {
  const locations = globalPresenceLocations;
  const officeCount = locations.reduce((sum, l) => sum + l.offices.length, 0);
  const projectCount = locations.reduce((sum, l) => sum + l.projects.length, 0);
  const industryCount = new Set(
    locations.flatMap((l) => l.projects.map((p) => p.industry)),
  ).size;

  const stats = [
    { label: "Countries", value: locations.length, icon: Globe2 },
    { label: "Offices", value: officeCount, icon: Building2 },
    { label: "Projects", value: projectCount, icon: Factory },
    { label: "Industries", value: industryCount, icon: Layers },
  ];

  const regions = Object.entries(
    locations.reduce<Record<string, typeof locations>>((groups, location) => {
      (groups[location.region] ??= []).push(location);
      return groups;
    }, {}),
  );

  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14">
        <div>
          <SectionHeading title={globalPresencePage.overview.heading} />
          <div className="mt-4 max-w-[560px] space-y-3 text-[15px] leading-7 text-slate-600">
            {globalPresencePage.overview.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-3">
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200 bg-gradient-to-br from-[#F5F9FE] to-white p-4 transition hover:border-[#B8D5F3] hover:shadow-sm"
            >
              <div className="flex items-center justify-between gap-2">
                <dt className="text-xs font-medium text-slate-500">{label}</dt>
                <span
                  aria-hidden
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF3FC] text-[#1557A0]"
                >
                  <Icon size={15} />
                </span>
              </div>
              <dd className="mt-3 font-heading text-4xl font-semibold tracking-tight text-slate-900">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          Where we operate
        </p>
        <div className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map(([region, items]) => (
            <div key={region}>
              <p className="text-sm font-semibold text-slate-900">{region}</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {items.map((location) => (
                  <li
                    key={location.id}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600"
                  >
                    <span aria-hidden>{getCountryFlag(location.countryCode)}</span>
                    {location.country}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}