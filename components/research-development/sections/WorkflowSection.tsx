"use client";

import { memo, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
  type Variants,
} from "framer-motion";

import { rdSectionData } from "@/data/r&d";
import Container from "@/components/container";

/* ------------------------------------------------------------------ */
/* Tuning                                                              */
/* ------------------------------------------------------------------ */
const SCROLL_PER_STEP_VH = 90; // more = slower, calmer pacing (was 70)

// Hysteresis: how far (in step units) you must pass a boundary before
// the step actually changes. Prevents flicker when scrolling jitters.
const SWITCH_HYSTERESIS = 0.06;

// Spring that smooths raw scroll (higher damping = less float)
const SCROLL_SPRING = { stiffness: 110, damping: 28, mass: 0.5 };

// ease-out quart, the CSS/framer form of 1 - pow(1 - t, 4)
const EASE_OUT_POW: [number, number, number, number] = [0.25, 1, 0.5, 1];
const EASE_IN_POW: [number, number, number, number] = [0.5, 0, 0.75, 0];

/* ------------------------------------------------------------------ */
/* Text panel variants (direction-aware)                               */
/* dir =  1 -> scrolling down: new content rises in, old drifts up     */
/* dir = -1 -> scrolling up:   new content drops in, old drifts down   */
/* ------------------------------------------------------------------ */
const panelVariants: Variants = {
  enter: (dir: number) => ({ opacity: 0, y: dir * 28 }),
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE_OUT_POW,
      delayChildren: 0.12,
      staggerChildren: 0.07,
    },
  },
  exit: (dir: number) => ({
    opacity: 0,
    y: dir * -18,
    transition: { duration: 0.28, ease: EASE_IN_POW },
  }),
};

const itemVariants: Variants = {
  enter: { opacity: 0, y: 14 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_OUT_POW },
  },
};

/* ------------------------------------------------------------------ */
/* Image layer: crossfade + slow push-in tied to scroll                */
/* ------------------------------------------------------------------ */
const ImageLayer = memo(function ImageLayer({
  src,
  alt,
  index,
  total,
  isActive,
  progress,
  priority,
  reduce,
}: {
  src: string;
  alt: string;
  index: number;
  total: number;
  isActive: boolean;
  progress: MotionValue<number>;
  priority: boolean;
  reduce: boolean;
}) {
  // Slow zoom across this step's slice of the scroll (gives life during the hold)
  const zoom = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [1.0, 1.07],
    { clamp: true }
  );

  return (
    <motion.div
      className="absolute inset-0"
      initial={false}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{
        duration: reduce ? 0 : isActive ? 0.9 : 0.6,
        ease: EASE_OUT_POW,
      }}
      style={{ scale: reduce ? 1 : zoom, willChange: "transform, opacity" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </motion.div>
  );
});

/* ------------------------------------------------------------------ */
/* Progress segment: fills continuously with scroll                    */
/* ------------------------------------------------------------------ */
const ProgressSegment = memo(function ProgressSegment({
  index,
  total,
  isActive,
  progress,
}: {
  index: number;
  total: number;
  isActive: boolean;
  progress: MotionValue<number>;
}) {
  const fill = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [0, 1],
    { clamp: true }
  );

  return (
    <motion.div
      className="relative h-1 overflow-hidden rounded-full bg-line"
      animate={{ width: isActive ? 40 : 20 }}
      transition={{ duration: 0.6, ease: EASE_OUT_POW }}
    >
      <motion.div
        className="absolute inset-0 origin-left rounded-full bg-brand-red"
        style={{ scaleX: fill }}
      />
    </motion.div>
  );
});

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */
export default function WorkflowSection() {
  const data = rdSectionData.workflow;
  const total = data.steps.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Smoothed (inertial) scroll value drives everything
  const springProgress = useSpring(scrollYProgress, SCROLL_SPRING);
  const progress = shouldReduceMotion ? scrollYProgress : springProgress;

  useMotionValueEvent(progress, "change", (value) => {
    const raw = Math.min(Math.max(value, 0), 1) * total;
    const target = Math.min(total - 1, Math.floor(raw));

    setActiveIndex((prev) => {
      if (target === prev) return prev;

      // Moving forward: must clearly pass the boundary
      if (target > prev && raw < prev + 1 + SWITCH_HYSTERESIS) return prev;

      // Moving backward: must clearly cross back over it
      if (target < prev && raw > prev - SWITCH_HYSTERESIS) return prev;

      setDirection(target > prev ? 1 : -1);
      return target;
    });
  });

  const activeStep = data.steps[activeIndex];

  // Overall progress line under the intro
  const overall = useTransform(progress, [0, 1], [0.08, 1], { clamp: true });

  return (
    <section
      ref={sectionRef}
      className="relative bg-pale"
      // total scroll distance = total * SCROLL_PER_STEP_VH, plus 100vh for the pinned viewport
      style={{ height: `${total * SCROLL_PER_STEP_VH + 100}vh` }}
    >
      {/* PINNED VIEWPORT */}
      <div className="sticky top-0 flex h-screen items-center pb-6 pt-20 sm:pt-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-14">
            {/* LEFT: SECTION INTRO */}
            <motion.div
              className="lg:col-span-4"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: true }}
              transition={{ duration: 0.9, ease: EASE_OUT_POW }}
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

              {/* Scroll-linked progress line (replaces the static red bar) */}
              <div className="relative mt-4 h-[3px] w-full max-w-[200px] overflow-hidden rounded-full bg-line lg:mt-6">
                <motion.div
                  className="absolute inset-0 origin-left bg-brand-red"
                  style={{ scaleX: overall }}
                />
              </div>
            </motion.div>

            {/* RIGHT: PANEL */}
            <div className="lg:col-span-8">
              <div className="relative grid h-[min(560px,calc(100svh-11rem))] grid-cols-1 grid-rows-[40%_60%] overflow-hidden rounded-2xl bg-white shadow-sm md:grid-cols-2 md:grid-rows-1">
                {/* IMAGES: stacked, crossfade + scroll-linked push-in */}
                <div className="relative h-full w-full overflow-hidden">
                  {data.steps.map((step, index) => (
                    <ImageLayer
                      key={step.number}
                      src={step.image}
                      alt={step.title}
                      index={index}
                      total={total}
                      isActive={index === activeIndex}
                      progress={progress}
                      priority={index === 0}
                      reduce={shouldReduceMotion}
                    />
                  ))}
                </div>

                {/* CONTENT */}
                <div className="relative flex h-full items-center overflow-y-auto p-5 sm:p-8 lg:p-10">
                  <AnimatePresence
                    mode="popLayout"
                    initial={false}
                    custom={direction}
                  >
                    <motion.div
                      key={activeIndex}
                      custom={direction}
                      className="w-full"
                      variants={shouldReduceMotion ? undefined : panelVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                    >
                      {/* STEP NUMBER */}
                      <motion.div
                        variants={itemVariants}
                        className="mb-4 flex items-center gap-3"
                      >
                        <span className="text-xs font-bold tracking-[0.15em] text-brand-red">
                          STEP {activeStep.number}
                        </span>
                        <span className="h-px w-10 bg-line" />
                        <span className="text-xs tabular-nums text-muted">
                          {activeIndex + 1} / {total}
                        </span>
                      </motion.div>

                      {/* TITLE */}
                      <motion.h3
                        variants={itemVariants}
                        className="font-heading text-xl font-semibold leading-tight text-brand-deep sm:text-2xl lg:text-3xl"
                      >
                        {activeStep.title}
                      </motion.h3>

                      {/* DESCRIPTION */}
                      <motion.p
                        variants={itemVariants}
                        className="mt-3 text-sm leading-6 text-ink sm:text-base sm:leading-7"
                      >
                        {activeStep.description}
                      </motion.p>

                      {/* POINTS (each one staggers in) */}
                      <ul className="mt-5 space-y-3">
                        {activeStep.points.map((point, pointIndex) => (
                          <motion.li
                            key={pointIndex}
                            variants={itemVariants}
                            className="flex items-start gap-3 text-sm leading-6 text-ink sm:text-base"
                          >
                            <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-brand-red" />
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* PROGRESS INDICATORS (fill with scroll) */}
                      <motion.div
                        variants={itemVariants}
                        className="mt-6 flex items-center gap-2"
                      >
                        {data.steps.map((step, index) => (
                          <ProgressSegment
                            key={step.number}
                            index={index}
                            total={total}
                            isActive={index === activeIndex}
                            progress={progress}
                          />
                        ))}
                      </motion.div>
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