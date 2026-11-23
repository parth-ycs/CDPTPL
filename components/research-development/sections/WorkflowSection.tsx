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

import { rdSectionData } from "@/data/research-development/r&d";
import Container from "@/components/container";

/* ------------------------------------------------------------------ */
/* Tuning                                                              */
/* ------------------------------------------------------------------ */

// Height of your fixed/sticky site header. Set --header-h in your global CSS
// (e.g. :root { --header-h: 4.5rem }) so the pinned area never hides under it.
const HEADER_H = "var(--header-h, 0px)";

// Scroll distance (in vh) spent on each step. More = slower pacing.
const SCROLL_PER_STEP_VH = 90;

// Distance (in step units) past a boundary before the step switches.
const SWITCH_HYSTERESIS = 0.06;

// Smooths raw scroll.
const SCROLL_SPRING = { stiffness: 110, damping: 28, mass: 0.5, restDelta: 0.0005 };

const EASE_OUT: [number, number, number, number] = [0.25, 1, 0.5, 1];
const EASE_IN: [number, number, number, number] = [0.5, 0, 0.75, 0];

/* ------------------------------------------------------------------ */
/* Variants (direction-aware)                                          */
/* ------------------------------------------------------------------ */
const panelVariants: Variants = {
  enter: (dir: number) => ({ opacity: 0, y: dir * 28 }),
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE_OUT,
      delayChildren: 0.12,
      staggerChildren: 0.07,
    },
  },
  exit: (dir: number) => ({
    opacity: 0,
    y: dir * -18,
    transition: { duration: 0.28, ease: EASE_IN },
  }),
};

const itemVariants: Variants = {
  enter: { opacity: 0, y: 14 },
  center: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_OUT } },
};

// Reduced motion: no movement, instant swap.
const reducedPanelVariants: Variants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0 } },
  exit: { opacity: 0, transition: { duration: 0 } },
};
const reducedItemVariants: Variants = {
  enter: { opacity: 1 },
  center: { opacity: 1 },
};

/* ------------------------------------------------------------------ */
/* Image layer: crossfade + slow scroll-linked push-in                 */
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
  const zoom = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [1, 1.07],
    { clamp: true }
  );

  return (
    <motion.div
      className="absolute inset-0"
      initial={false}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{
        duration: reduce ? 0 : isActive ? 0.9 : 0.6,
        ease: EASE_OUT,
      }}
      style={{ scale: reduce ? 1 : zoom, willChange: "transform, opacity" }}
      aria-hidden={!isActive}
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
/* Progress segment                                                    */
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
      transition={{ duration: 0.6, ease: EASE_OUT }}
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
  const indexRef = useRef(0); // source of truth for hysteresis (no side effects in setState)

  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const springProgress = useSpring(scrollYProgress, SCROLL_SPRING);
  const progress = reduce ? scrollYProgress : springProgress;

  useMotionValueEvent(progress, "change", (value) => {
    const raw = Math.min(Math.max(value, 0), 1) * total;
    const prev = indexRef.current;
    let next = prev;

    if (raw >= prev + 1 + SWITCH_HYSTERESIS) {
      next = Math.min(total - 1, Math.floor(raw - SWITCH_HYSTERESIS));
    } else if (raw <= prev - SWITCH_HYSTERESIS) {
      next = Math.max(0, Math.ceil(raw + SWITCH_HYSTERESIS) - 1);
    }

    if (next !== prev) {
      indexRef.current = next;
      setDirection(next > prev ? 1 : -1);
      setActiveIndex(next);
    }
  });

  const activeStep = data.steps[activeIndex];
  const overall = useTransform(progress, [0, 1], [0.08, 1], { clamp: true });

  return (
    <section
      ref={sectionRef}
      className="relative bg-pale"
      // scroll distance + one viewport for the pinned stage
      style={{ height: `calc(${total * SCROLL_PER_STEP_VH}vh + 100svh)` }}
      aria-label={data.heading}
    >
      {/* PINNED STAGE — svh avoids the mobile address-bar jump; offset clears the header */}
      <div
        className="sticky flex w-full items-center overflow-hidden"
        style={{ top: HEADER_H, height: `calc(100svh - ${HEADER_H})` }}
      >
        <Container>
          {/*
            One explicit height drives the whole layout:
            mobile  -> intro (auto) + panel (fills the rest)
            desktop -> intro column + panel column, both full height
          */}
          <div
            className="grid w-full grid-cols-1 grid-rows-[auto_minmax(0,1fr)] gap-4 lg:grid-cols-12 lg:grid-rows-1 lg:items-center lg:gap-14"
            style={{
              height: `calc(100svh - ${HEADER_H} - 2rem)`,
              maxHeight: 680,
            }}
          >
            {/* LEFT: INTRO */}
            <motion.div
              className="lg:col-span-4"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: true }}
              transition={{ duration: 0.9, ease: EASE_OUT }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                {data.eyebrow}
              </p>

              <h2 className="mt-2 font-heading text-2xl font-semibold leading-tight text-brand-deep sm:text-3xl lg:mt-3 lg:text-4xl">
                {data.heading}
              </h2>

              <p className="mt-4 hidden max-w-sm text-base leading-7 text-muted lg:block">
                {data.description}
              </p>

              <div className="relative mt-3 h-[3px] w-full max-w-[200px] overflow-hidden rounded-full bg-line lg:mt-6">
                <motion.div
                  className="absolute inset-0 origin-left bg-brand-red"
                  style={{ scaleX: overall }}
                />
              </div>
            </motion.div>

            {/* RIGHT: PANEL — fills whatever height the grid gives it */}
            <div className="min-h-0 lg:col-span-8 lg:h-full lg:max-h-[560px]">
              <div className="grid h-full min-h-0 grid-cols-1 grid-rows-[34%_minmax(0,1fr)] overflow-hidden rounded-2xl bg-white shadow-sm md:grid-cols-2 md:grid-rows-1">
                {/* IMAGES */}
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
                      reduce={reduce}
                    />
                  ))}
                </div>

                {/* CONTENT
                    flex-col + my-auto centers short content but still lets
                    long content scroll from the top (items-center would clip it). */}
                <div className="relative flex min-h-0 flex-col overflow-y-auto overscroll-contain p-5 sm:p-8 lg:p-10">
                  <AnimatePresence
                    mode="popLayout"
                    initial={false}
                    custom={direction}
                  >
                    <motion.div
                      key={activeIndex}
                      custom={direction}
                      className="my-auto w-full"
                      variants={reduce ? reducedPanelVariants : panelVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      aria-live="polite"
                    >
                      <motion.div
                        variants={reduce ? reducedItemVariants : itemVariants}
                        className="mb-3 flex items-center gap-3 sm:mb-4"
                      >
                        <span className="text-xs font-bold tracking-[0.15em] text-brand-red">
                          STEP {activeStep.number}
                        </span>
                        <span className="h-px w-10 bg-line" />
                        <span className="text-xs tabular-nums text-muted">
                          {activeIndex + 1} / {total}
                        </span>
                      </motion.div>

                      <motion.h3
                        variants={reduce ? reducedItemVariants : itemVariants}
                        className="font-heading text-lg font-semibold leading-tight text-brand-deep sm:text-2xl lg:text-3xl"
                      >
                        {activeStep.title}
                      </motion.h3>

                      <motion.p
                        variants={reduce ? reducedItemVariants : itemVariants}
                        className="mt-2 text-sm leading-6 text-ink sm:mt-3 sm:text-base sm:leading-7"
                      >
                        {activeStep.description}
                      </motion.p>

                      <ul className="mt-4 space-y-2 sm:mt-5 sm:space-y-3">
                        {activeStep.points.map((point, pointIndex) => (
                          <motion.li
                            key={pointIndex}
                            variants={
                              reduce ? reducedItemVariants : itemVariants
                            }
                            className="flex items-start gap-3 text-sm leading-6 text-ink sm:text-base"
                          >
                            <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-brand-red" />
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div
                        variants={reduce ? reducedItemVariants : itemVariants}
                        className="mt-5 flex items-center gap-2 sm:mt-6"
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