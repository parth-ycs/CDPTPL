"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { rdSectionData } from "@/data/r&d";

const EASE_OUT_POW: [number, number, number, number] = [0.25, 1, 0.5, 1];

const pad = (n: number) => String(n).padStart(2, "0");

export default function SustainabilitySection() {
  const data = rdSectionData.sustainability;
  const reduce = useReducedMotion() ?? false;
  const image=data.image
  const fadeUp = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.9, ease: EASE_OUT_POW, delay },
  });

  return (
    <div className="bg-white p-6 text-[#102C59] sm:p-9 lg:p-12">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        {/* LEFT: IMAGE + INTRO */}
        <motion.div className="lg:col-span-5" {...fadeUp()}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src={image}
              alt={data.heading}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT: CONTENT */}
        <div className="lg:col-span-7 lg:pt-4">
          <motion.div {...fadeUp(0.05)}>
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-red-600" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                {data.eyebrow}
              </p>
            </div>

            <h2 className="mt-5 max-w-[620px] font-heading text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              {data.heading}
            </h2>

            <p className="mt-5 max-w-[620px] text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              {data.description}
            </p>
          </motion.div>

          <ul className="mt-10 border-t border-[#102C59]/15">
            {data.principles.map((principle, index) => (
              <motion.li
                key={principle.title}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[#102C59]/15 py-5 sm:grid-cols-[3.5rem_1fr_1.2fr] sm:gap-6 sm:py-6"
                {...fadeUp(index * 0.07)}
              >
                <span className="text-xs font-medium tabular-nums text-red-600">
                  {pad(index + 1)}
                </span>

                <h3 className="font-heading text-lg font-semibold leading-snug tracking-tight sm:text-xl">
                  {principle.title}
                </h3>

                <p className="col-start-2 text-sm leading-7 text-slate-600 sm:col-start-auto">
                  {principle.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}