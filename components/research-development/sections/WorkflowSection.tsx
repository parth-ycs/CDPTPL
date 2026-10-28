
import { ArrowRight } from "lucide-react";
import { rdSectionData } from "@/data/r&d";

export default function WorkflowSection() {
  const data = rdSectionData.workflow;

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

      <div className="mt-9">
        {data.steps.map((step, index) => (
          <article
            key={step.number}
            className="group grid grid-cols-[48px_1fr] gap-4 border-t border-line py-6 last:border-b sm:grid-cols-[60px_1fr_auto] sm:gap-6 sm:py-7"
          >
            <span className="flex h-11 w-11 items-center justify-center border border-line text-xs font-semibold text-brand-blue transition-colors group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white">
              {step.number}
            </span>

            <div>
              <h3 className="text-lg font-semibold text-brand-deep sm:text-xl">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-brand-deep/70 sm:text-base">
                {step.description}
              </p>
            </div>

            {index < data.steps.length - 1 && (
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="hidden self-center text-brand-red sm:block"
              />
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
