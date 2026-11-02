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
    <div className="space-y-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-16">
        <div>
          <SectionHeading title={globalPresencePage.overview.heading} />
          <div className="mt-5 max-w-[560px] space-y-4 text-base leading-7 text-slate-600">
            {globalPresencePage.overview.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-slate-200 pt-8 lg:border-t-0 lg:pt-2">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="border-l-2 border-[#B8D5F3] pl-4">
              <dt className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <Icon size={13} className="text-[#1557A0]" />
                {label}
              </dt>
              <dd className="mt-1 font-heading text-3xl font-semibold tracking-tight text-slate-900">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="border-t border-slate-200">
        {regions.map(([region, items]) => (
          <div
            key={region}
            className="grid gap-3 border-b border-slate-100 py-4 sm:grid-cols-[200px_1fr] sm:items-center"
          >
            <p className="text-sm font-semibold text-slate-900">{region}</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {items.map((location) => (
                <li key={location.id} className="flex items-center gap-1.5 text-sm text-slate-600">
                  <span aria-hidden>{getCountryFlag(location.countryCode)}</span>
                  {location.country}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}