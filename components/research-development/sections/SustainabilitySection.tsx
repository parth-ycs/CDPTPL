
import { CheckCircle2 } from "lucide-react";
import { rdSectionData } from "@/data/r&d";

export default function SustainabilitySection() {
  const data = rdSectionData.sustainability;

  return (
    <div className="bg-brand-deep p-6 text-white sm:p-9 lg:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
        {data.eyebrow}
      </p>

      <h2 className="mt-4 max-w-[700px] font-heading text-3xl font-semibold leading-tight sm:text-4xl">
        {data.heading}
      </h2>

      <p className="mt-5 max-w-[760px] text-sm leading-8 text-white/70 sm:text-base">
        {data.description}
      </p>

      <div className="mt-8 divide-y divide-white/15 border-y border-white/15">
        {data.principles.map((principle) => (
          <article
            key={principle.title}
            className="flex gap-4 py-5 sm:py-6"
          >
            <CheckCircle2
              size={21}
              className="mt-1 shrink-0 text-red-300"
              aria-hidden="true"
            />

            <div>
              <h3 className="font-semibold">{principle.title}</h3>
              <p className="mt-2 text-sm leading-7 text-white/70">
                {principle.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
