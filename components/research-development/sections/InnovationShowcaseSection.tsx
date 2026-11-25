
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { rdSectionData } from "@/data/research-development/r&d";

const EASE_OUT_POW: [number, number, number, number] = [0.25, 1, 0.5, 1];

const pad = (n: number) => String(n).padStart(2, "0");

export default function InnovationShowcaseSection() {
  const data = rdSectionData.innovationShowcase;
  const [activeIndex, setActiveIndex] = useState(0);
  const reduce = useReducedMotion() ?? false;

  const active = data.items[activeIndex];

  const changeSlide = (direction: number) => {
    setActiveIndex(
      (current) => (current + direction + data.items.length) % data.items.length,
    );
  };

  if (!active) return null;

  return (
    <section className="bg-white text-brand-deep">
      {/* HEADER */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: EASE_OUT_POW }}
      >
        <h2 className="max-w-[560px] font-heading text-h2 font-semibold">
          {data.heading}
        </h2>
      </motion.div>

      <div className="mt-5 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
        {/* IMAGE */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-pale lg:aspect-[16/9]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              className="absolute inset-0"
              initial={reduce ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: EASE_OUT_POW }}
            >
              <Image
                src={active.image}
                alt={active.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col">
          {/* FIXED-HEIGHT TEXT AREA */}
          <div className="h-[250px] overflow-hidden sm:h-[280px] lg:h-[230px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className="flex h-full flex-col"
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -18 }}
                transition={{ duration: 0.5, ease: EASE_OUT_POW }}
              >

                {/* Title */}
                <h3
                  title={active.title}
                  className=" line-clamp-3 max-w-xl shrink-0 font-heading text-h2 font-semibold"
                >
                  {active.title}
                </h3>

                {/* Description */}
                <div className="mt-5 min-h-0 flex-1 overflow-y-auto pr-2 [scrollbar-width:thin]">
                  <p className="max-w-xl text-body text-muted">
                    {active.description}
                  </p>
                </div>

                <Link
                  href={`/research-development/${active.id}`}
                  className="group mt-5 inline-flex w-fit shrink-0 items-center gap-3 border-b border-brand-blue pb-2 text-small font-semibold text-brand-blue transition-colors hover:text-brand-red"
                >
                  Explore Innovation
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* NAVIGATION */}
          <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
            <div className="flex items-center gap-3">
              <span className="font-heading text-h2 font-semibold tabular-nums text-brand-deep">
                {pad(activeIndex + 1)}
              </span>

              <span className="text-small text-muted">
                / {pad(data.items.length)}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => changeSlide(-1)}
                aria-label="Previous innovation"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-brand-deep transition-colors hover:border-brand-blue hover:bg-brand-blue hover:text-white"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={() => changeSlide(1)}
                aria-label="Next innovation"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-brand-deep transition-colors hover:border-brand-blue hover:bg-brand-blue hover:text-white"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>          
        </div>
      </div>
    </section>
  );
}
