
import { ArrowUpRight } from "lucide-react";
import { rdSectionData } from "@/data/r&d";

export default function ResearchAreasSection() {
  const data = rdSectionData.focusAreas;

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
        {data.eyebrow}
      </p>

      <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight sm:text-4xl">
        {data.heading}
      </h2>

      <p className="mt-5 max-w-[760px] leading-8 text-brand-deep/70">
        {data.description}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {data.items.map(({ title, description, Icon }, index) => (
          <article
            key={title}
            className="group border border-line bg-white p-6 transition-colors duration-300 hover:border-brand-blue hover:bg-pale sm:p-7"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-brand-red">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Icon
                size={25}
                strokeWidth={1.5}
                className="text-brand-blue"
                aria-hidden="true"
              />
            </div>

            <h3 className="mt-7 text-lg font-semibold leading-6 text-brand-deep">
              {title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-brand-deep/70">
              {description}
            </p>

            <ArrowUpRight
              size={17}
              aria-hidden="true"
              className="mt-5 text-brand-red transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </article>
        ))}
      </div>
    </div>
  );
}
