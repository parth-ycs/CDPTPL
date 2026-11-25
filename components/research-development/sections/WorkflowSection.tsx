"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

import { rdSectionData } from "@/data/research-development/r&d";

/* ------------------------------------------------------------------ */
/* Tuning                                                              */
/* ------------------------------------------------------------------ */
// Height of your fixed site header. Better: define --header-h in global CSS
// (e.g. :root { --header-h: 5rem } and a larger value at lg).
const HEADER_H = "var(--header-h, 7.75rem)";
const SCROLL_PER_STEP_VH = 70; // scroll distance per step
const SWITCH_HYSTERESIS = 0.06; // avoids flicker on step boundaries
const SCROLL_SPRING = { stiffness: 110, damping: 28, mass: 0.5, restDelta: 0.0005 };
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */
export default function WorkflowSection() {
  const data = rdSectionData.workflow;
  const total = data.steps.length;

  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const indexRef = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const spring = useSpring(scrollYProgress, SCROLL_SPRING);
  const progress = reduce ? scrollYProgress : spring;

  // Scroll position -> active step (with hysteresis)
  useMotionValueEvent(progress, "change", (v) => {
    const raw = Math.min(Math.max(v, 0), 1) * total;
    const prev = indexRef.current;
    let next = prev;

    if (raw >= prev + 1 + SWITCH_HYSTERESIS) {
      next = Math.min(total - 1, Math.floor(raw - SWITCH_HYSTERESIS));
    } else if (raw <= prev - SWITCH_HYSTERESIS) {
      next = Math.max(0, Math.ceil(raw + SWITCH_HYSTERESIS) - 1);
    }

    if (next !== prev) {
      indexRef.current = next;
      setDir(next > prev ? 1 : -1);
      setActive(next);
    }
  });

  // Click a step -> scroll to the middle of that step's range
  const goTo = (i: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const distance = el.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: top + ((i + 0.5) / total) * distance,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  const railFill = useTransform(progress, [0, 1], [0, 1], { clamp: true });
  const step = data.steps[active];

  return (
    <section
      ref={sectionRef}
      className="relative bg-brand-medium"
      style={{ height: `calc(${total * SCROLL_PER_STEP_VH}vh + 100svh)` }}
      aria-label={data.heading}
    >
      {/* Pinned stage: starts below the fixed site header */}
      <div
        className="sticky flex w-full flex-col overflow-hidden"
        style={{ top: HEADER_H, height: `calc(100svh - ${HEADER_H})` }}
      >
        {/* Full-width wrapper */}
        <div className="flex h-full min-h-0 w-full flex-col px-5 pb-5 pt-4 sm:px-8 lg:px-12 lg:pb-8 lg:pt-6 xl:px-16">
          {/* ---------- Header row ---------- */}
          <header className="flex shrink-0 flex-col gap-2 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div>
              <p className="text-sm font-medium text-brand-light">{data.eyebrow}</p>
              <h2 className="mt-1 font-heading text-2xl font-semibold leading-tight tracking-tight text-white lg:text-3xl">
                {data.heading}
              </h2>
            </div>
            <p className="hidden max-w-md text-base leading-7 text-white/70 lg:block">
              {data.description}
            </p>
          </header>

          {/* ---------- Stage ---------- */}
          <div className="mt-4 grid min-h-0 flex-1 grid-cols-1 grid-rows-[28%_minmax(0,1fr)] gap-4 lg:mt-6 lg:grid-cols-12 lg:grid-rows-1 lg:gap-14">
            {/* IMAGE — wipes in on every step change */}
            <div className="relative order-1 min-h-0 overflow-hidden rounded-3xl bg-white/10 lg:order-2 lg:col-span-7 lg:h-full lg:max-h-[min(480px,60svh)] lg:self-center">
              <AnimatePresence initial={false} custom={dir}>
                <motion.div
                  key={active}
                  custom={dir}
                  className="absolute inset-0"
                  variants={{
                    enter: (d: number) => ({
                      clipPath:
                        d > 0 ? "inset(100% 0% 0% 0%)" : "inset(0% 0% 100% 0%)",
                    }),
                    center: {
                      clipPath: "inset(0% 0% 0% 0%)",
                      transition: { duration: reduce ? 0 : 0.9, ease: EASE },
                    },
                    exit: {
                      opacity: 1,
                      transition: { duration: reduce ? 0 : 0.9 },
                    },
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: reduce ? 1 : 1.12 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: reduce ? 0 : 1.4, ease: EASE }}
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      priority={active === 0}
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Big outlined step number: the one memorable element */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={active}
                  aria-hidden
                  className="pointer-events-none absolute bottom-2 left-5 z-10 select-none font-heading text-[5rem] font-semibold leading-none tabular-nums text-transparent sm:text-[6rem] lg:bottom-3 lg:left-6 lg:text-[8rem]"
                  style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.9)" }}
                  initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduce ? 0 : -16 }}
                  transition={{ duration: reduce ? 0 : 0.45, ease: EASE }}
                >
                  {step.number}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* STEP INDEX — click any step to jump to it */}
            <nav
              aria-label="Workflow steps"
              className="relative order-2 min-h-0 overflow-y-auto overscroll-contain lg:order-1 lg:col-span-5"
            >
              {/* progress rail */}
              <span className="absolute bottom-1 left-0 top-1 w-px bg-white/15" />
              <motion.span
                className="absolute bottom-1 left-0 top-1 w-px origin-top bg-brand-red-light"
                style={{ scaleY: railFill }}
              />

              <ol className="flex min-h-full flex-col justify-center">
                {data.steps.map((s, i) => {
                  const isActive = i === active;
                  const isDone = i < active;

                  return (
                    <li key={s.number} className="relative pl-6 lg:pl-8">
                      {/* rail dot */}
                      <motion.span
                        className="absolute left-0 top-[1.15rem] h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-brand-medium"
                        animate={{
                          backgroundColor:
                            isActive || isDone
                              ? "var(--brand-red-light, #d6252b)"
                              : "rgba(255,255,255,0.25)",
                          scale: isActive ? 1.5 : 1,
                        }}
                        transition={{ duration: 0.35, ease: EASE }}
                      />

                      <button
                        type="button"
                        onClick={() => goTo(i)}
                        aria-current={isActive ? "step" : undefined}
                        className="group flex w-full items-baseline gap-3 py-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-medium lg:py-2"
                      >
                        <span
                          className={`text-sm tabular-nums transition-colors duration-300 ${
                            isActive ? "text-brand-light" : "text-white/50"
                          }`}
                        >
                          {s.number}
                        </span>
                        <span
                          className={`font-heading font-semibold leading-snug transition-all duration-300 ${
                            isActive
                              ? "text-xl text-white lg:text-2xl"
                              : "text-base text-white/55 group-hover:translate-x-1 group-hover:text-white lg:text-lg"
                          }`}
                        >
                          {s.title}
                        </span>
                      </button>

                      {/* Expanding detail */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            key="detail"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: reduce ? 0 : 0.5, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <div className="pb-3 pl-8 lg:pb-3">
                              <p className="text-sm leading-6 text-white/80 lg:text-base lg:leading-7">
                                {s.description}
                              </p>
                              <ul className="mt-3 space-y-1.5">
                                {s.points.map((point, p) => (
                                  <motion.li
                                    key={p}
                                    initial={{ opacity: 0, x: reduce ? 0 : -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      delay: reduce ? 0 : 0.2 + p * 0.06,
                                      duration: 0.4,
                                      ease: EASE,
                                    }}
                                    className="flex items-start gap-2.5 text-sm leading-6 text-white/80"
                                  >
                                    <span className="mt-[11px] h-px w-3 shrink-0 bg-brand-light" />
                                    <span>{point}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}