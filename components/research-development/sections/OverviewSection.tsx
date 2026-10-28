
import { rdSectionData } from "@/data/r&d";

export default function OverviewSection() {
  const data = rdSectionData.overview;

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
        {data.eyebrow}
      </p>

      <h2 className="mt-4 max-w-[760px] font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
        {data.heading}
      </h2>

      <div className="mt-7 max-w-[820px] space-y-5">
        {data.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="text-base leading-8 text-brand-deep/75"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {rdSectionData.highlights.map((highlight, index) => (
          <div
            key={highlight}
            className="border-l-2 border-brand-red bg-pale px-5 py-5"
          >
            <span className="text-xs font-semibold text-brand-red">
              0{index + 1}
            </span>
            <h3 className="mt-3 text-sm font-semibold leading-6 text-brand-blue">
              {highlight}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
