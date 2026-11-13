"use client";

import { useId, useState } from "react";
import type { FAQsSectionData } from "@/components/solutions/types";

export default function FAQsSection({ data }: { data: FAQsSectionData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const uid = useId();
  const headingId = `${data.id}-heading`;

  return (
    <section id={data.id} aria-labelledby={headingId} className="scroll-mt-28 py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
            <span className="h-px w-8 bg-brand-blue" aria-hidden="true" />
            {data.label ?? "FAQs"}
          </p>
          <h2 id={headingId} className="mt-3 text-3xl font-semibold tracking-tight text-brand-deep md:text-4xl">
            {data.heading}
          </h2>
          {data.intro && <p className="mt-4 text-base leading-7 text-slate-600">{data.intro}</p>}
        </div>

        <div className="mt-10 space-y-3">
          {data.items.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${uid}-question-${index}`;
            const panelId = `${uid}-answer-${index}`;

            return (
              <div
                key={`${item.question}-${index}`}
                className={`relative overflow-hidden rounded-2xl border bg-white transition-all duration-300 motion-reduce:transition-none ${
                  isOpen
                    ? "border-brand-blue/30 shadow-md"
                    : "border-slate-200 hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                {/* Left accent bar grows from top when open */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-y-0 left-0 w-1 origin-top bg-brand-blue transition-transform duration-300 motion-reduce:transition-none ${
                    isOpen ? "scale-y-100" : "scale-y-0"
                  }`}
                />

                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/50 focus-visible:ring-inset"
                  >
                    <span
                      className={`font-semibold transition-colors duration-300 motion-reduce:transition-none ${
                        isOpen ? "text-brand-blue" : "text-brand-deep"
                      }`}
                    >
                      {item.question}
                    </span>

                    {/* Plus turns into a minus: the vertical bar rotates and fades */}
                    <span
                      aria-hidden="true"
                      className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 motion-reduce:transition-none ${
                        isOpen ? "bg-brand-blue text-white" : "bg-slate-100 text-brand-blue"
                      }`}
                    >
                      <span className="absolute h-0.5 w-3.5 rounded bg-current" />
                      <span
                        className={`absolute h-3.5 w-0.5 rounded bg-current transition-transform duration-300 motion-reduce:transition-none ${
                          isOpen ? "rotate-90 scale-y-0" : "rotate-0 scale-y-100"
                        }`}
                      />
                    </span>
                  </button>
                </h3>

                {/* Height animation: grid rows 0fr -> 1fr, no JS measuring needed */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows,opacity,visibility] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "visible grid-rows-[1fr] opacity-100" : "invisible grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`px-6 pb-6 pr-12 text-sm leading-7 text-slate-600 transition-transform duration-300 ease-out motion-reduce:transition-none ${
                        isOpen ? "translate-y-0" : "-translate-y-2"
                      }`}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}