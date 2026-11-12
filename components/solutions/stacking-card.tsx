"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useTransform,
  type MotionValue,
} from "framer-motion";


import { sbuPageData } from "@/data/sbus";

type Sbu = (typeof sbuPageData.sbus)[number];

/* ==========================================
   TUNING KNOBS: change these to taste
========================================== */
const ENTER_SCALE = 1.15; // incoming card starts this big
const ENTER_IMAGE_SCALE = 1.25; // image inside the incoming card
const BURIED_SCALE = 0.92; // card scale once the next card covers it
const BURIED_SHIFT = -24; // px the buried card drifts upward
const BURIED_DIM = 0.45; // max darkness of the buried card


export default function StackCard({
  sbu,
  index,
  total,
  progress,
  reduce,
}: {
  sbu: Sbu;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const enter = useTransform(progress, [index - 1, index], [0, 1]);
  const leave = useTransform(progress, [index, index + 1], [0, 1]);

  const scaleIn = useTransform(enter, [0, 1], [ENTER_SCALE, 1]);
  const scaleOut = useTransform(leave, [0, 1], [1, BURIED_SCALE]);
  const scale = useTransform([scaleIn, scaleOut], ([a, b]: number[]) => a * b);

  const y = useTransform(leave, [0, 1], [0, BURIED_SHIFT]);
  const dim = useTransform(leave, [0, 1], [0, BURIED_DIM]);
  const imageScale = useTransform(enter, [0, 1], [ENTER_IMAGE_SCALE, 1]);

  return (
    <article
      className="sticky top-0 flex h-svh items-center px-3 sm:px-5"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={reduce ? undefined : { scale, y }}
        className="relative mx-auto grid h-[calc(100svh-1.5rem)] w-full max-w-[1440px] grid-cols-1 grid-rows-[38%_1fr] overflow-hidden rounded-xl bg-white shadow-[0_-8px_35px_rgba(7,26,49,0.12)] will-change-transform sm:h-[calc(100svh-2.5rem)] md:grid-cols-2 md:grid-rows-1"
      >
        {/* IMAGE */}
        <div className="group relative min-h-0 overflow-hidden">
          <motion.div
            style={reduce ? undefined : { scale: imageScale }}
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src={sbu.image}
              alt={sbu.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/55 via-transparent to-transparent" />

          <span className="absolute bottom-5 left-6 font-heading text-5xl font-bold tracking-tight text-white/90 sm:bottom-10 sm:left-10 sm:text-8xl">
            {sbu.number}
          </span>

          <span className="absolute left-6 top-6 border border-white/40 bg-black/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:left-10 sm:top-10">
            Chemdist Group
          </span>
        </div>

        {/* CONTENT */}
        <div className="flex min-h-0 flex-col justify-center overflow-y-auto px-6 py-6 sm:px-10 sm:py-10 lg:px-14 lg:py-14">
          <div className="mb-4 flex items-center gap-3 sm:mb-6">
            <span className="h-[2px] w-8 bg-brand-red" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
              {sbu.eyebrow}
            </span>
          </div>

          <h3 className="font-heading text-2xl font-semibold leading-tight text-brand-deep sm:text-3xl lg:text-4xl">
            {sbu.title}
          </h3>

          <p className="mt-4 max-w-xl font-sans text-sm leading-7 text-muted sm:mt-5 sm:text-base sm:leading-8">
            {sbu.description}
          </p>

          <div className="mt-5 border-t border-line pt-5 sm:mt-7 sm:pt-6">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-deep/50 sm:mb-4">
              Key Capabilities
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {sbu.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="flex items-center gap-3 text-sm text-ink sm:text-base"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                  {capability}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href={sbu.href}
            className="group/link mt-6 inline-flex w-fit items-center gap-3 border-b border-brand-deep pb-2 text-sm font-semibold text-brand-deep transition-colors duration-300 hover:border-brand-red hover:text-brand-red sm:mt-8"
          >
            Explore Solution
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
            />
          </Link>

          {/* PROGRESS */}
          <div
            className="mt-6 flex items-center gap-2 sm:mt-10"
            aria-hidden="true"
          >
            {Array.from({ length: total }).map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i <= index ? "w-7 bg-brand-red" : "w-4 bg-line"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DIM OVERLAY (darkens as the next card covers this one) */}
        {!reduce && (
          <motion.div
            style={{ opacity: dim }}
            className="pointer-events-none absolute inset-0 bg-brand-deep"
            aria-hidden="true"
          />
        )}
      </motion.div>
    </article>
  );
}
