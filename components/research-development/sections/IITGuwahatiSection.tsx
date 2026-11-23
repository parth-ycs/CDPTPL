
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { rdSectionData } from "@/data/research-development/r&d";

const EASE_OUT_POW: [number, number, number, number] = [
  0.25, 1, 0.5, 1,
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function IITGuwahatiSection() {
  const data = rdSectionData.iitGuwahati;
  const [activeIndex, setActiveIndex] = useState(0);
  const reduce = useReducedMotion() ?? false;

  const active = data.images[activeIndex];

  useEffect(() => {
    if (data.images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % data.images.length,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [data.images.length]);

  const changeSlide = (direction: number) => {
    setActiveIndex(
      (current) =>
        (current + direction + data.images.length) %
        data.images.length,
    );
  };

  if (!active) return null;

  return (
    <section className="bg-white py-16 text-brand-deep md:py-20">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-10 px-6 md:px-12 lg:grid-cols-2 lg:gap-16">

        {/* CONTENT */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE_OUT_POW }}
          className="max-w-xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            {data.eyebrow}
          </p>

          <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {data.heading}
          </h2>

          <p className="mt-6 text-sm leading-7 text-muted sm:text-base sm:leading-8">
            {data.description}
          </p>

          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-10 bg-brand-blue" />
            <span className="text-sm font-medium text-brand-deep">
              {data.tagline}
            </span>
          </div>
        </motion.div>

        {/* IMAGE SLIDER */}
        <div className="relative">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-pale lg:aspect-[16/9]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.image}
                className="absolute inset-0"
                initial={reduce ? false : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: -20 }}
                transition={{
                  duration: 0.6,
                  ease: EASE_OUT_POW,
                }}
              >
                <Image
                  src={active.image}
                  alt={active.alt}
                  fill
                  priority={activeIndex === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* NAVIGATION */}
          <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
            <div className="flex items-center gap-3">
              <span className="font-heading text-2xl font-semibold tabular-nums text-brand-deep">
                {pad(activeIndex + 1)}
              </span>
              <span className="text-sm text-muted">
                / {pad(data.images.length)}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => changeSlide(-1)}
                aria-label="Previous image"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-brand-deep transition-colors hover:border-brand-blue hover:bg-brand-blue hover:text-white"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={() => changeSlide(1)}
                aria-label="Next image"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-brand-deep transition-colors hover:border-brand-blue hover:bg-brand-blue hover:text-white"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* POSITION INDICATORS */}
          <div className="mt-5 flex items-center gap-2">
            {data.images.map((image, index) => (
              <button
                key={image.image}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show image ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`h-[3px] transition-all duration-500 ${
                  index === activeIndex
                    ? "w-10 bg-brand-red"
                    : "w-5 bg-slate-200 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
