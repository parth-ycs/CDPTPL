import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { aboutPageData } from "@/data/about";

export default function AboutCTASection() {
  const { cta } = aboutPageData;

  return (
    <section className="relative overflow-hidden bg-[#f5f7fa] p-6 sm:p-8 lg:p-10">
      <div className="absolute bottom-0 left-0 h-1 w-24 bg-red-600" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[720px]">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            {cta.eyebrow}
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {cta.heading}
          </h2>

          <p className="mt-4 max-w-[620px] text-sm leading-7 text-slate-600 sm:text-base">
            {cta.description}
          </p>
        </div>

        <Link
          href={cta.href}
          className="group inline-flex shrink-0 items-center gap-4 self-start bg-[#102c59] px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-red-600 lg:self-center"
        >
          {cta.buttonLabel}

          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </section>
  );
}