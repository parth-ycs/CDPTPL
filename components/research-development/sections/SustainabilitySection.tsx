"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { rdSectionData } from "@/data/research-development/r&d";
import Container from "@/components/container";

const EASE_OUT_POW: [number, number, number, number] = [0.25, 1, 0.5, 1];

const pad = (n: number) => String(n).padStart(2, "0");

export default function SustainabilitySection() {
  const data = rdSectionData.sustainability;
  const reduce = useReducedMotion() ?? false;

  const fadeUp = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: EASE_OUT_POW, delay },
  });

  return (
    <section className="bg-white py-12 text-brand-medium lg:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          {/* LEFT: IMAGE CARD */}
          <motion.div className="lg:col-span-5" {...fadeUp()}>
            <div className="group relative h-64 w-full overflow-hidden rounded-3xl bg-slate-100 sm:h-80 lg:h-full lg:min-h-[440px]">
              <Image
                src={data.image}
                alt={data.heading}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102C59]/70 via-transparent to-transparent" />

              {/* Floating label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/15 px-4 py-3 text-white backdrop-blur-md ring-1 ring-white/25">
                <span className="text-sm font-medium">{data.eyebrow}</span>
                <span className="flex items-center gap-2 text-sm tabular-nums">
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: CONTENT */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <motion.div {...fadeUp(0.05)}>
              <div className="flex items-center gap-3">
                <p className="text-sm font-medium text-red-600">{data.eyebrow}</p>
              </div>

              <h2 className="mt-3 max-w-[620px] font-heading text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
                {data.heading}
              </h2>

              <p className="mt-3 max-w-[620px] text-sm leading-7 text-slate-600 sm:text-base">
                {data.description}
              </p>
            </motion.div>

            {/* PRINCIPLE CARDS — hover fills the card navy */}
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {data.principles.map((principle, index) => (
                <motion.li
                  key={principle.title}
                  className="group relative cursor-default overflow-hidden rounded-2xl border border-[#102C59]/10 bg-[brand-light]/[0.03] p-5 transition-colors duration-300 hover:border-[#102C59] hover:bg-brand-medium"
                  {...fadeUp(0.1 + index * 0.07)}
                >
                  {/* red accent bar grows on hover */}
                  <span className="absolute left-0 top-0 h-[3px] w-8 bg-red-600 transition-all duration-500 group-hover:w-full" />

                  <h3 className="mt-2 font-heading text-lg font-semibold leading-snug tracking-tight transition-colors duration-300 group-hover:text-white">
                    {principle.title}
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-white/75">
                    {principle.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}