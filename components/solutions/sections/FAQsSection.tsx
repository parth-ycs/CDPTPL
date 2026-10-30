"use client";

import { useState } from "react";
import type { FAQsSectionData } from "@/components/solutions/types";

export default function FAQsSection({ data }: { data: FAQsSectionData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={data.id} className="scroll-mt-28 py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">{data.label ?? "FAQs"}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-deep md:text-4xl">{data.heading}</h2>
          {data.intro && <p className="mt-4 text-base leading-7 text-slate-600">{data.intro}</p>}
        </div>
        <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
          {data.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${data.id}-answer-${index}`;
            return (
              <div key={`${item.question}-${index}`} className="py-1">
                <button type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? null : index)} className="flex w-full items-center justify-between gap-5 py-5 text-left">
                  <span className="font-semibold text-brand-deep">{item.question}</span>
                  <span aria-hidden="true" className="shrink-0 text-xl text-brand-red">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <div id={panelId} className="pb-5 pr-8 text-sm leading-7 text-slate-600">{item.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
