"use client";

import { useState } from "react";
import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import { rdSectionData } from "@/data/r&d";
import Container from "@/components/container";

const SCROLL_PER_STEP_VH = 70; // scroll distance (in vh) per step

export default function WorkflowSection() {
  const data = rdSectionData.workflow;
  const total = data.steps.length;

  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const next = Math.min(total - 1, Math.max(0, Math.floor(progress * total)));
    setActiveIndex((prev) => (prev === next ? prev : next));
  });

  const activeStep = data.steps[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative bg-pale"
      // total scroll distance = total * 70vh, plus 100vh for the pinned viewport
      style={{ height: `${total * SCROLL_PER_STEP_VH + 100}vh` }}
    >
      {/* PINNED VIEWPORT: everything is centered inside this */}
      <div className="sticky top-0 flex h-screen items-center pb-6 pt-20 sm:pt-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-14">
            {/* LEFT: SECTION INTRO */}
            <motion.div
              className="lg:col-span-4"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                {data.eyebrow}
              </p>

              <h2 className="mt-2 font-heading text-2xl font-semibold leading-tight text-brand-deep sm:text-3xl lg:mt-3 lg:text-4xl">
                {data.heading}
              </h2>

              <p className="mt-4 hidden max-w-sm text-sm leading-7 text-muted lg:block sm:text-base">
                {data.description}
              </p>

              <div className="mt-4 h-[3px] w-12 bg-brand-red lg:mt-6" />
            </motion.div>

            {/* RIGHT: PANEL */}
            <div className="lg:col-span-8">
              <div className="relative grid h-[min(560px,calc(100svh-11rem))] grid-cols-1 grid-rows-[40%_60%] overflow-hidden rounded-2xl bg-white shadow-sm md:grid-cols-2 md:grid-rows-1">
                {/* IMAGES: all stacked, crossfade via opacity (no remount/reload) */}
                <div className="relative h-full w-full">
                  {data.steps.map((step, index) => (
                    <motion.div
                      key={step.number}
                      className="absolute inset-0"
                      initial={false}
                      animate={{
                        opacity: index === activeIndex ? 1 : 0,
                        scale: index === activeIndex ? 1 : 1.03,
                      }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.3,
                        ease: "easeOut",
                      }}
                    >
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* CONTENT: vertically centered */}
                <div className="relative flex h-full items-center overflow-y-auto p-5 sm:p-8 lg:p-10">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={activeIndex}
                      className="w-full"
                      initial={
                        shouldReduceMotion ? false : { opacity: 0, y: 12 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      {/* STEP NUMBER */}
                      <div className="mb-4 flex items-center gap-3">
                        <span className="text-xs font-bold tracking-[0.15em] text-brand-red">
                          STEP {activeStep.number}
                        </span>
                        <span className="h-px w-10 bg-line" />
                        <span className="text-xs text-muted">
                          {activeIndex + 1} / {total}
                        </span>
                      </div>

                      {/* TITLE */}
                      <h3 className="font-heading text-xl font-semibold leading-tight text-brand-deep sm:text-2xl lg:text-3xl">
                        {activeStep.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="mt-3 text-sm leading-6 text-ink sm:text-base sm:leading-7">
                        {activeStep.description}
                      </p>

                      {/* POINTS */}
                      <ul className="mt-5 space-y-3">
                        {activeStep.points.map((point, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-sm leading-6 text-ink sm:text-base"
                          >
                            <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-brand-red" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* PROGRESS INDICATORS */}
                      <div className="mt-6 flex items-center gap-2">
                        {data.steps.map((step, index) => (
                          <div
                            key={step.number}
                            className={`h-1 rounded-full transition-all duration-300 ${
                              index === activeIndex
                                ? "w-10 bg-brand-red"
                                : "w-5 bg-line"
                            }`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}