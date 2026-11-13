"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { CapabilitiesSectionData } from "../types";

const EASE_OUT_POW: [number, number, number, number] = [0.25, 1, 0.5, 1];

const pad = (n: number) => String(n).padStart(2, "0");

export default function CapabilitiesSection({
  data,
}: {
  data: CapabilitiesSectionData;
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
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            Capabilities
          </span>
        </div>

        <h2 className="mt-5 max-w-[720px] font-heading text-[clamp(1.75rem,3.5vw,3rem)] font-semibold leading-[1.1] tracking-tight">
          {data.heading}
        </h2>

        {data.intro && (
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {data.intro}
          </p>
        )}
      </motion.div>

      {/* ITEMS */}
      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
        {data.items.map((item, index) => (
          <motion.article
            key={item.title}
            className="group"
            {...fadeUp((index % 2) * 0.08)}
          >
            {item.image && (
              <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05]"
                />
              </div>
            )}

            {/* Divider: grey base, red accent grows on hover */}
            <div className="relative h-px w-full bg-slate-200">
              <span className="absolute left-0 top-0 h-px w-[15%] bg-red-600 transition-[width] duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:w-[40%]" />
            </div>

            <div className="mt-4 flex items-start gap-4">
              <span className="mt-1.5 text-xs font-medium tabular-nums text-red-600">
                {pad(index + 1)}
              </span>

              <div>
                <h3 className="font-heading text-lg font-semibold leading-snug tracking-tight sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-[520px] text-sm leading-7 text-slate-600">
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