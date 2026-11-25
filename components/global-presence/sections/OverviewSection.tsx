
import { Building2, Factory, Globe2, Layers } from "lucide-react";
import { globalPresenceLocations, globalPresencePage } from "@/data/global-presence";
import { SectionHeading } from "../shared";

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
          <div className="mt-4 max-w-[560px] space-y-3 text-body text-slate-600">
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
                <dt className="text-small font-medium text-slate-500">
                  {label}
                </dt>
                <span
                  aria-hidden
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF3FC] text-[#1557A0]"
                >
                  <Icon size={15} />
                </span>
              </div>
              <dd className="mt-3 font-heading text-h1 font-semibold tracking-tight text-slate-900">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
