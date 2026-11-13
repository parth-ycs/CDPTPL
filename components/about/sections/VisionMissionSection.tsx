"use client";

import { memo, useEffect, useMemo, useRef, useState } from "react";
import { aboutPageData } from "@/data/about";
import WhatWeStandForSection from "./WhatWeStandForSection";

type StoryItem = {
  id: string;
  title: string;
  description: string;
  highlight?: string;
  background: string;
};

/* ------------------------------------------------------------------ */
/* Timing                                                              */
/* ------------------------------------------------------------------ */

/*
 * Each item owns one "slot" of the timeline, split into 3 phases.
 * REVEAL + HOLD + TRANSITION must add up to 1.
 *
 *  REVEAL     -> heading + description fade in with scroll
 *  HOLD       -> nothing moves; the reader gets a calm pause to read
 *  TRANSITION -> heading flies to the queue, next item fades in
 */
const REVEAL = 0.5;
const HOLD = 0.3;
const TRANSITION = 1 - REVEAL - HOLD; // 0.2

// Scroll length (in viewport heights)
const SCROLL_PER_ITEM = 1.15; // more = slower, more relaxed pacing
const FINAL_HOLD = 0.15;
const OVERLAY_DURATION = 1;

// Scroll inertia: higher = snappier, lower = floatier (try 5 - 10)
const DAMPING = 7;

// Layout
const ACTIVE_TOP = 52; // % - active heading position
const QUEUE_START = 17; // % - first queued heading
const QUEUE_SCALE = 0.58;
const QUEUE_OPACITY = 0.43;

/* ------------------------------------------------------------------ */
/* Math helpers                                                        */
/* ------------------------------------------------------------------ */
const clamp = (value: number, min = 0, max = 1) =>
  Math.min(Math.max(value, min), max);

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const smoothstep = (value: number) => {
  const x = clamp(value);
  return x * x * (3 - 2 * x);
};

/* Symmetric ease-in-out built on pow() */
const easeInOutPow = (value: number, power = 3) => {
  const t = clamp(value);
  return t < 0.5
    ? Math.pow(2, power - 1) * Math.pow(t, power)
    : 1 - Math.pow(-2 * t + 2, power) / 2;
};

const queueGap = (count: number) =>
  count > 1 ? Math.min(9, 34 / (count - 1)) : 9;

const queueTop = (index: number, count: number) =>
  QUEUE_START + index * queueGap(count);

function getHighlightIndexes(text: string, highlight = "") {
  const words = text.split(/\s+/);
  const normalize = (word: string) =>
    word.toLowerCase().replace(/[^\w]/g, "");

  const target = highlight.split(/\s+/).map(normalize).filter(Boolean);
  const normalized = words.map(normalize);

  if (!target.length) return new Set<number>();

  for (let i = 0; i <= normalized.length - target.length; i++) {
    if (target.every((word, index) => normalized[i + index] === word)) {
      return new Set(target.map((_, index) => i + index));
    }
  }

  return new Set<number>();
}

/* ------------------------------------------------------------------ */
/* Text reveal                                                         */
/* ------------------------------------------------------------------ */

/*
 * Feathered reveal: instead of each letter/word switching on one after
 * another, a soft "wave" (SOFT units wide) sweeps across the text.
 */
const revealAmount = (progress: number, count: number, index: number, soft: number) =>
  smoothstep((progress * (count + soft) - index) / soft);

const AnimatedHeading = memo(function AnimatedHeading({
  title,
  progress,
  className = "",
}: {
  title: string;
  progress: number;
  className?: string;
}) {
  const letters = title.split("");

  return (
    <h2 className={className}>
      {letters.map((letter, index) => {
        const amount = revealAmount(progress, letters.length, index, 4);

        return (
          <span
            key={`${letter}-${index}`}
            style={{ color: `rgba(255,255,255,${0.18 + amount * 0.82})` }}
          >
            {letter}
          </span>
        );
      })}
    </h2>
  );
});

const AnimatedDescription = memo(function AnimatedDescription({
  item,
  progress,
}: {
  item: StoryItem;
  progress: number;
}) {
  const words = useMemo(() => item.description.split(/\s+/), [item.description]);
  const highlighted = useMemo(
    () => getHighlightIndexes(item.description, item.highlight),
    [item.description, item.highlight]
  );

  return (
    <p className="max-w-[620px] text-base font-light leading-[1.75] tracking-[-0.015em] sm:text-lg sm:leading-[1.8] lg:text-[23px] lg:leading-[1.75]">
      {words.map((word, index) => {
        const amount = revealAmount(progress, words.length, index, 3);
        const baseColor = highlighted.has(index) ? "96,165,250" : "255,255,255";

        return (
          <span
            key={`${word}-${index}`}
            style={{ color: `rgba(${baseColor},${0.15 + amount * 0.85})` }}
          >
            {word}
            {index !== words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
});

const headingClass =
  "text-[clamp(3.5rem,8vw,7rem)] font-heading font-light leading-[0.9] tracking-[-0.075em]";

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */
export default function VisionMissionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Raw scroll position vs. smoothed (inertial) position
  const targetRef = useRef(0);
  const currentRef = useRef(0);

  const [progress, setProgress] = useState(0);

  const items = aboutPageData.visionMission.items as StoryItem[];
  const itemCount = items.length;

  // Timeline is measured in "item slots"
  const totalTimeline = itemCount;

  useEffect(() => {
    if (!itemCount) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let running = false;
    let last = 0;

    const measure = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrollDistance =
        rect.height - (FINAL_HOLD + OVERLAY_DURATION + 1) * window.innerHeight;

      if (scrollDistance <= 0) return;

      targetRef.current = clamp(-rect.top / scrollDistance);
    };

    /* Exponential damping: frame-rate independent smoothing */
    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const diff = targetRef.current - currentRef.current;

      if (reduceMotion || Math.abs(diff) < 0.00008) {
        currentRef.current = targetRef.current;
        setProgress(currentRef.current);
        running = false;
        return;
      }

      currentRef.current += diff * (1 - Math.exp(-dt * DAMPING));
      setProgress(currentRef.current);
      raf = requestAnimationFrame(frame);
    };

    const kick = () => {
      if (running) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const onScroll = () => {
      measure();
      kick();
    };

    // Initial position: no animation from 0 if the page loads mid-scroll
    measure();
    currentRef.current = targetRef.current;
    setProgress(currentRef.current);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [itemCount]);

  if (!itemCount) return null;

  /* -------------------------------------------------------------- */
  /* Timeline -> phases                                              */
  /* -------------------------------------------------------------- */
  const timeline = clamp(progress * totalTimeline, 0, totalTimeline);
  const activeIndex = Math.min(Math.floor(timeline), itemCount - 1);
  const phase = timeline - activeIndex; // 0 -> 1 inside the active slot
  const hasNext = activeIndex < itemCount - 1;

  // 1) Reveal: text fades in with scroll
  const revealP = easeInOutPow(phase / REVEAL, 2);

  // 2) Hold: (REVEAL -> REVEAL + HOLD) nothing changes

  // 3) Transition: heading moves to queue, next item arrives
  const transP = hasNext
    ? easeInOutPow((phase - REVEAL - HOLD) / TRANSITION, 3)
    : 0;

  const nextIndex = activeIndex + 1;

  /* Background */
  const backgroundItem = items[activeIndex];
  const incomingBackground = hasNext ? items[nextIndex] : null;
  const bgBlend = smoothstep(transP);

  // Slow "push-in" across each slot for a bit of life during the hold
  const bgScaleActive = 1.02 + phase * 0.05;
  const bgScaleIncoming = 1.02;

  /* Divider */
  const lineProgress = smoothstep(timeline / totalTimeline);
  const lineScale = 0.14 + lineProgress * 0.86;

  /* -------------------------------------------------------------- */
  /* Per-item visual state, fully derived from scroll                */
  /* -------------------------------------------------------------- */
  const getState = (index: number) => {
    // Already in the queue
    if (index < activeIndex) {
      return {
        top: lerp(
          queueTop(index, activeIndex),
          queueTop(index, activeIndex + 1),
          transP
        ),
        scale: QUEUE_SCALE,
        opacity: QUEUE_OPACITY,
        headingProgress: 1,
        descOpacity: 0,
        descProgress: 0,
      };
    }

    // The active item
    if (index === activeIndex) {
      return {
        top: lerp(ACTIVE_TOP, queueTop(index, index + 1), transP),
        scale: lerp(1, QUEUE_SCALE, transP),
        opacity: lerp(1, QUEUE_OPACITY, transP),
        headingProgress: revealP,
        descOpacity: 1 - smoothstep(transP / 0.4),
        descProgress: revealP,
      };
    }

    // The next item, arriving after the outgoing heading clears the stage
    if (index === nextIndex && transP > 0) {
      return {
        top: ACTIVE_TOP,
        scale: 1,
        opacity: smoothstep((transP - 0.45) / 0.55),
        headingProgress: 0,
        descOpacity: smoothstep((transP - 0.6) / 0.4),
        descProgress: 0,
      };
    }

    // Everything else is hidden
    return {
      top: ACTIVE_TOP,
      scale: 1,
      opacity: 0,
      headingProgress: 0,
      descOpacity: 0,
      descProgress: 0,
    };
  };

  const displayNumber = Math.min(
    hasNext && transP > 0.5 ? nextIndex : activeIndex,
    itemCount - 1
  );

  return (
    <>
      <section
        ref={sectionRef}
        className="relative left-1/2 z-10 w-screen -translate-x-1/2 bg-[#061426]"
        style={{
          height: `${
            (totalTimeline * SCROLL_PER_ITEM +
              FINAL_HOLD +
              OVERLAY_DURATION +
              1) *
            100
          }svh`,
        }}
      >
        <div className="sticky top-0 h-[100svh] min-h-[620px] w-full overflow-hidden text-white">
          {/* BACKGROUND */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url("${backgroundItem.background}")`,
                opacity: 1 - bgBlend,
                transform: `scale(${bgScaleActive})`,
                willChange: "transform, opacity",
              }}
            />

            {incomingBackground && (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("${incomingBackground.background}")`,
                  opacity: bgBlend,
                  transform: `scale(${bgScaleIncoming})`,
                  willChange: "transform, opacity",
                }}
              />
            )}

            <div className="absolute inset-0 bg-[#041426]/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#041426]/45 via-transparent to-[#041426]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041426]/35 via-transparent to-[#041426]/20" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 mx-auto h-full w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
            {/* SHARED DIVIDER (smoothing comes from the damped scroll value) */}
            <div className="absolute left-0 right-0 top-[46%] h-px bg-white/20">
              <div
                className="h-full w-full bg-white/80"
                style={{
                  transform: `scaleX(${lineScale})`,
                  transformOrigin: "left center",
                  willChange: "transform",
                }}
              />

              <span className="absolute -top-[2px] left-0 h-[5px] w-[5px] rounded-full bg-red-500" />

              {/* Glowing head that travels with the line */}
              <span
                className="absolute -top-[2px] h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-white shadow-[0_0_12px_2px_rgba(255,255,255,0.55)]"
                style={{ left: `${lineScale * 100}%` }}
              />
            </div>

            {/* HEADINGS */}
            {items.map((item, index) => {
              const s = getState(index);
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  className="absolute left-6 right-6 sm:left-10 sm:right-10 lg:left-16 lg:right-16"
                  style={{
                    top: `${s.top}%`,
                    opacity: s.opacity,
                    transform: `scale(${s.scale})`,
                    transformOrigin: "left top",
                    pointerEvents: isActive ? "auto" : "none",
                    willChange: "top, transform, opacity",
                  }}
                >
                  <AnimatedHeading
                    title={item.title}
                    progress={s.headingProgress}
                    className={headingClass}
                  />
                </div>
              );
            })}

            {/* DESCRIPTIONS */}
            {items.map((item, index) => {
              const s = getState(index);
              const isActive = index === activeIndex;

              return (
                <div
                  key={`description-${item.id}`}
                  className="absolute left-6 right-6 top-[52%] sm:left-10 sm:right-10 lg:left-16 lg:right-16"
                  style={{
                    opacity: s.descOpacity,
                    // Gentle upward drift while it appears
                    transform: `translate3d(0, ${(1 - s.descOpacity) * 14}px, 0)`,
                    pointerEvents: isActive ? "auto" : "none",
                    willChange: "transform, opacity",
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                    <div />
                    <div className="lg:pt-1">
                      <AnimatedDescription
                        item={item}
                        progress={s.descProgress}
                      />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* STEP INDICATOR */}
            <div className="absolute bottom-8 right-6 flex items-center gap-4 sm:right-10 lg:right-16">
              <span className="text-[11px] font-medium tabular-nums tracking-[0.22em] text-white/60">
                {String(displayNumber + 1).padStart(2, "0")} /{" "}
                {String(itemCount).padStart(2, "0")}
              </span>

              <div className="flex items-center gap-1.5">
                {items.map((item, index) => (
                  <span
                    key={item.id}
                    className="h-[2px] rounded-full bg-white transition-all duration-500 ease-out"
                    style={{
                      width: index === displayNumber ? 28 : 12,
                      opacity: index === displayNumber ? 0.9 : 0.25,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-20 -mt-[100svh]">
        <WhatWeStandForSection />
      </div>
    </>
  );
}