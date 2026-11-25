"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type React from "react";
import { aboutPageData } from "@/data/about";
import Container from "@/components/container";

// Where the "reading line" sits in the viewport (0 = top, 1 = bottom).
// The row closest to this line is the one highlighted while scrolling.
const READING_LINE = 0.65;

export default function WhatWeStandForSection() {
  const data = aboutPageData.whatWeStandFor;

  // Three input sources. Priority: focus > hover > scroll.
  const [scrollId, setScrollId] = useState<string | null>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [focusId, setFocusId] = useState<string | null>(null);

  const rowRefs = useRef<Record<string, HTMLElement | null>>({});

  const activeId =
    focusId ?? hoverId ?? scrollId ?? data.items[0]?.id;

  // Pick the row whose centre is closest to the reading line.
  const updateScrollActive = useCallback(() => {
    const lineY = window.innerHeight * READING_LINE;

    let closestId: string | null = null;
    let closestDistance = Infinity;

    for (const item of data.items) {
      const el = rowRefs.current[item.id];
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      const centre = rect.top + rect.height / 2;
      const distance = Math.abs(centre - lineY);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestId = item.id;
      }
    }

    if (closestId) setScrollId(closestId);
  }, [data.items]);

  // Scroll-driven activation. Scrolling also releases any hover override,
  // so the cursor resting on a row doesn't fight the scroll position.
  useEffect(() => {
    let raf = 0;

    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setHoverId(null);
        updateScrollActive();
      });
    };

    const handleResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateScrollActive);
    };

    updateScrollActive(); // initial state on mount

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [updateScrollActive]);

  // Hover: any mouse/pen movement over a row takes control from scroll.
  const handlePointerMove =
    (id: string) => (event: React.PointerEvent<HTMLElement>) => {
      if (event.pointerType === "touch") return;
      setHoverId(id);
    };

  return (
    <section
      className="
        relative left-1/2 z-20
        w-screen -translate-x-1/2
        bg-white text-[#102C59]
      "
    >
      <div
        className="
          mx-auto flex w-full max-w-[1440px] flex-col
          px-[clamp(1.25rem,4vw,4rem)]
          py-[clamp(2rem,6vh,4.5rem)]
        "
      >
        {/* Intro */}
        <div
          className="
            grid grid-cols-1 items-center
            gap-6
            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-[clamp(2rem,5vw,5rem)]
            lg:pb-[clamp(1.5rem,3vh,2.5rem)]
          "
        >
          <h2 className="font-heading text-h1 font-bold tracking-tight">
            {data.heading.map((line, index) => (
              <span
                key={`${line}-${index}`}
                className={`block ${
                  index === 0 ? "text-[#102C59]" : "text-[#102C59]/50"
                }`}
              >
                {line}
              </span>
            ))}
          </h2>

          <p
            className="
              max-w-[540px] text-lead font-light text-slate-500
              lg:ml-auto
            "
          >
            {data.description}
          </p>
        </div>

        {/* Six values */}
        <div
          className="flex flex-col border-t border-[#102C59]/20"
          onPointerLeave={() => setHoverId(null)}
        >
          {data.items.map((item) => {
            const isActive = activeId === item.id;

            return (
              <article
                key={item.id}
                ref={(el) => {
                  rowRefs.current[item.id] = el;
                }}
                data-value-id={item.id}
                onPointerEnter={handlePointerMove(item.id)}
                onPointerMove={handlePointerMove(item.id)}
                onFocus={() => setFocusId(item.id)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setFocusId(null);
                  }
                }}
                tabIndex={0}
                className="
                  group relative flex flex-col justify-center
                  border-b border-[#102C59]/15
                  py-[clamp(1.25rem,2.5vh,2rem)]
                  outline-none
                "
              >
                {/* Active line */}
                <div
                  className={`
                    absolute inset-x-0 top-0 h-px
                    origin-left bg-[#102C59]
                    transition-transform
                    duration-[900ms]
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    will-change-transform
                    ${isActive ? "scale-x-100" : "scale-x-0"}
                  `}
                />

                <div
                  className="
                    grid grid-cols-[38px_1fr]
                    items-center gap-4
                    sm:grid-cols-[65px_1.1fr_1fr]
                    sm:gap-7
                    lg:grid-cols-[70px_1.1fr_1fr]
                    lg:gap-8
                  "
                >
                  {/* Number */}
                  <span
                    className={`
                      text-caption font-medium tabular-nums
                      transition-colors duration-700
                      ${isActive ? "text-[#102C59]" : "text-[#102C59]/30"}
                    `}
                  >
                    {item.id}
                  </span>

                  {/* Title */}
                  <h3
                    className={`
                      font-heading text-h2 font-semibold
                      tracking-tight
                      transition-colors duration-700
                      ${isActive ? "text-[#102C59]" : "text-[#102C59]/25"}
                    `}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`
                      col-start-2 mt-3 max-w-[540px]
                      text-small
                      transition-colors duration-700
                      sm:col-start-auto sm:mt-0
                      sm:justify-self-end sm:text-body
                      ${isActive ? "text-slate-600" : "text-slate-300"}
                    `}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}