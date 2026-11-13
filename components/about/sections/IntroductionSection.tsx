"use client";

import { useEffect, useRef, useState } from "react";
import { aboutPageData } from "@/data/about";

/* ------------------------------------------------------------------ */
/* Easing: ease-out using pow().                                       */
/* power 2 = gentle, 3 = smooth, 4 = silky, 5 = very fast start/slow end */
/* ------------------------------------------------------------------ */
const easeOutPow = (t: number, power = 4) => 1 - Math.pow(1 - t, power);

/* Runs once when the element enters the viewport */
function useInViewOnce<T extends HTMLElement>(threshold = 0.35) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* Returns raw 0 -> 1 progress, driven by requestAnimationFrame */
function useProgress(active: boolean, duration = 2200, delay = 0) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!active) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setProgress(1);
      return;
    }

    let raf = 0;
    let start: number | null = null;

    const tick = (now: number) => {
      if (start === null) start = now;
      const t = Math.min((now - start) / duration, 1);
      setProgress(t);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    const timeout = window.setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [active, duration, delay]);

  return progress;
}

/* Tweens a number toward `target` using the pow() curve.
   Works for the intro (0 -> target) and for later changes (e.g. hover),
   always continuing from the current value so there are no jumps. */
function useTween(
  target: number,
  enabled: boolean,
  { duration = 1800, delay = 0, power = 4 } = {}
) {
  const [value, setValue] = useState(0);
  const valueRef = useRef(0);
  const hasPlayed = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      valueRef.current = target;
      setValue(target);
      return;
    }

    const from = valueRef.current;
    // Delay only applies to the very first (intro) run
    const startDelay = hasPlayed.current ? 0 : delay;
    hasPlayed.current = true;

    let raf = 0;
    let start: number | null = null;

    const tick = (now: number) => {
      if (start === null) start = now;
      const t = Math.min((now - start) / duration, 1);
      const next = from + (target - from) * easeOutPow(t, power);
      valueRef.current = next;
      setValue(next);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    const timeout = window.setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, startDelay);

    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [target, enabled, duration, delay, power]);

  return value;
}

/* ------------------------------------------------------------------ */
/* Single KPI                                                          */
/* ------------------------------------------------------------------ */
type Kpi = {
  id: string | number;
  value: string | number;
  suffix?: string;
  label: string;
};

function KpiItem({ kpi, index }: { kpi: Kpi; index: number }) {
  const { ref, inView } = useInViewOnce<HTMLElement>();
  const [hovered, setHovered] = useState(false);

  const baseDelay = index * 140;

  // Count-up / reveal progress
  const progress = useProgress(inView, 2200, baseDelay);
  const numberEase = easeOutPow(progress, 4);
  const revealEase = easeOutPow(Math.min(progress * 2.2, 1), 3);
  const labelEase = easeOutPow(Math.max((progress - 0.15) / 0.85, 0), 3);

  // BARS
  // 1) base grey line draws in from the left (0 -> 100)
  const baseLine = useTween(100, inView, {
    duration: 1400,
    delay: baseDelay,
    power: 4,
  });

  // 2) red accent grows after it (0 -> 30), extends to 45 on hover
  const accent = useTween(hovered ? 45 : 30, inView, {
    duration: hovered ? 700 : 1800,
    delay: baseDelay + 200,
    power: hovered ? 3 : 4,
  });

  // Parse the numeric value and keep decimals if any
  const target = parseFloat(String(kpi.value));
  const decimals = String(kpi.value).split(".")[1]?.length ?? 0;
  const isNumeric = !Number.isNaN(target);

  const current = isNumeric ? target * numberEase : 0;
  const displayValue = isNumeric
    ? decimals > 0
      ? current.toFixed(decimals)
      : Math.round(current).toString()
    : String(kpi.value);

  return (
    <article
      ref={ref}
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: revealEase,
        transform: `translate3d(0, ${(1 - revealEase) * 28}px, 0)`,
        willChange: "transform, opacity",
      }}
    >
      {/* TOP DIVIDER: both bars driven by the pow() curve (no CSS transition) */}
      <div className="relative h-px w-full">
        {/* base line */}
        <span
          className="absolute left-0 top-0 h-px w-full origin-left bg-slate-200"
          style={{ transform: `scaleX(${baseLine / 100})` }}
        />
        {/* red accent */}
        <span
          className="absolute left-0 top-0 h-px bg-red-600"
          style={{ width: `${accent}%` }}
        />
      </div>

      {/* NUMBER + LABEL */}
      <div className="flex items-center justify-between gap-4 pt-6 sm:gap-6 sm:pt-8">
        {/* KPI NUMBER */}
        <h3
          className="flex shrink-0 items-baseline whitespace-nowrap font-light leading-none tracking-[-0.04em] text-[#102C59]"
          style={{ fontVariantNumeric: "tabular-nums" }}
          aria-label={`${kpi.value}${kpi.suffix ?? ""}`}
        >
          <span className="text-[56px] sm:text-[64px] lg:text-[84px]">
            {displayValue}
          </span>
          {kpi.suffix && (
            <span className="text-[56px] sm:text-[64px] lg:text-[84px]">
              {kpi.suffix}
            </span>
          )}
        </h3>

        {/* KPI LABEL (slides in slightly after the number) */}
        <p
          className="w-[46%] max-w-[260px] text-base font-medium leading-snug tracking-tight text-slate-700 sm:text-lg lg:text-xl"
          style={{
            opacity: labelEase,
            transform: `translate3d(${(1 - labelEase) * 16}px, 0, 0)`,
          }}
        >
          {kpi.label}
        </p>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */
export default function IntroductionSection() {
  const { introduction } = aboutPageData;

  return (
    <section id="who-we-are" className="py-4">
      {/* OVERVIEW */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-red-600" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              {introduction.label}
            </span>
          </div>

          <h2 className="mt-6 max-w-[500px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {introduction.heading}
          </h2>
        </div>

        <div className="space-y-6 lg:pt-8">
          {introduction.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-[760px] text-base leading-8 text-slate-600 sm:text-lg sm:leading-9"
            >
              {paragraph}
            </p>
          ))}

          <div className="h-px w-full max-w-[760px] bg-slate-200" />
        </div>
      </div>

      {/* COMPANY KPI SECTION */}
      <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
        {introduction.kpis.map((kpi, index) => (
          <KpiItem key={kpi.id} kpi={kpi} index={index} />
        ))}
      </div>
    </section>
  );
}