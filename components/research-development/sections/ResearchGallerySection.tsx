"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { rdSectionData } from "@/data/r&d";

const EASE_OUT_POW: [number, number, number, number] = [0.25, 1, 0.5, 1];

const pad = (n: number) => String(n).padStart(2, "0");

export default function ResearchGallerySection() {
  const data = rdSectionData.gallery;
  const slides = rdSectionData.slides;
  const reduce = useReducedMotion() ?? false;

  const fadeUp = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.9, ease: EASE_OUT_POW, delay },
  });

  return (
    <div className="bg-white text-[#102C59]">
      {/* HEADER */}
      <motion.div
        className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16"
        {...fadeUp()}
      >
        <div>
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-red-600" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              {data.eyebrow}
            </p>
          </div>

          <h2 className="mt-5 max-w-[560px] font-heading text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            {data.heading}
          </h2>
        </div>

        <p className="max-w-[560px] text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:ml-auto">
          {data.description}
        </p>
      </motion.div>

      {/* GALLERY */}
      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
        {slides.map((slide, index) => (
          <motion.article
            key={slide.title}
            className={`group ${index % 2 === 1 ? "sm:mt-16" : ""}`}
            {...fadeUp((index % 2) * 0.08)}
          >
            {/* IMAGE */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05]"
              />
            </div>

            {/* CAPTION */}
            <div className="mt-5">
              {/* Divider: grey base, red accent grows on hover */}
              <div className="relative h-px w-full bg-slate-200">
                <span className="absolute left-0 top-0 h-px w-[15%] bg-red-600 transition-[width] duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:w-[40%]" />
              </div>

              <div className="mt-4 flex items-start gap-4">
                <span className="mt-1 text-xs font-medium tabular-nums text-red-600">
                  {pad(index + 1)}
                </span>

                <div>
                  <h3 className="font-heading text-lg font-semibold leading-snug tracking-tight sm:text-xl">
                    {slide.title}
                  </h3>

                  {slide.description && (
                    <p className="mt-2 max-w-[520px] text-sm leading-7 text-slate-600">
                      {slide.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}