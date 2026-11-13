"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ServicesSectionData } from "../types";

const EASE_OUT_POW: [number, number, number, number] = [0.25, 1, 0.5, 1];

const pad = (n: number) => String(n).padStart(2, "0");

export default function ServicesSection({
  data,
}: {
  data: ServicesSectionData;
}) {
  const reduce = useReducedMotion() ?? false;

  const fadeUp = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.9, ease: EASE_OUT_POW, delay },
  });

  return (
    <div className="bg-white text-[#102C59]">
      {/* HEADER */}
      <motion.div {...fadeUp()}>
        <div className="flex items-center gap-4">
          <span className="h-[2px] w-10 bg-red-600" />
        </div>

        <h2 className="mt-5 max-w-[720px] font-heading text-[clamp(1.75rem,3.5vw,3rem)] font-semibold leading-[1.1] tracking-tight">
          {data.heading}
        </h2>

        {data.intro && (
          <p className="mt-5 max-w-[560px] text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {data.intro}
          </p>
        )}
      </motion.div>

      {/* SERVICES */}
      <div className="mt-12 grid grid-cols-1 gap-x-12 sm:grid-cols-2 lg:gap-x-16">
        {data.items.map((item, index) => (
          <motion.article
            key={item.title}
            className="group py-8 lg:py-10"
            {...fadeUp((index % 2) * 0.08)}
          >
            {/* Divider: grey base, red accent grows on hover */}
            <div className="relative h-px w-full bg-slate-200">
              <span className="absolute left-0 top-0 h-px w-[15%] bg-red-600 transition-[width] duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:w-[40%]" />
            </div>

            <div className="mt-6 flex items-start gap-5">
              <span className="mt-1.5 text-xs font-medium tabular-nums text-red-600">
                {pad(index + 1)}
              </span>

              <div>
                <h3 className="font-heading text-xl font-semibold leading-snug tracking-tight transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-1 sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[480px] text-sm leading-7 text-slate-600 sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}