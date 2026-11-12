
"use client";

import { useEffect, useRef, useState } from "react";
import { aboutPageData } from "@/data/about";

export default function WhatWeStandForSection() {
  const data = aboutPageData.whatWeStandFor;

  const [activeValue, setActiveValue] = useState<string | null>(null);

  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const activeId = activeValue ?? data.items[0]?.id;

  // Detect the value currently underneath the stationary cursor.
  const updateActiveValue = () => {
    const pointer = pointerRef.current;

    if (!pointer || !sectionRef.current) return;

    const element = document.elementFromPoint(pointer.x, pointer.y);

    const row = element?.closest<HTMLElement>("[data-value-id]");

    if (row && sectionRef.current.contains(row)) {
      setActiveValue(row.dataset.valueId ?? null);
    } else {
      setActiveValue(null);
    }
  };

  // Recalculate hover whenever scrolling or resizing occurs.
  useEffect(() => {
    let raf = 0;

    const handleScroll = () => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(updateActiveValue);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;

    pointerRef.current = {
      x: event.clientX,
      y: event.clientY,
    };

    updateActiveValue();
  };

  const handlePointerLeave = () => {
    pointerRef.current = null;
    setActiveValue(null);
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="
        relative left-1/2 z-20
        w-screen -translate-x-1/2
        bg-white text-[#102C59]
        py-[clamp(2rem,5vh,4.5rem)]
      "
    >
      <div
        className="
          mx-auto flex w-full max-w-[1440px] flex-col
          px-[clamp(1.25rem,4vw,4rem)]
          py-[clamp(2rem,6vh,4.5rem)]
        "
      >
        {/* INTRO */}
        <div
          className="
            grid grid-cols-1 items-center
            gap-6
            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-[clamp(2rem,5vw,5rem)]
            lg:pb-[clamp(1.5rem,3vh,2.5rem)]
          "
        >
          <h2
            className="
              text-[clamp(2.8rem,5.5vw,5.2rem)]
              font-heading font-bold leading-[0.88]
              tracking-[-0.065em]
            "
          >
            {data.heading.map((line, index) => (
              <span
                key={`${line}-${index}`}
                className={`block ${
                  index === 0
                    ? "text-[#102C59]"
                    : "text-[#102C59]/50"
                }`}
              >
                {line}
              </span>
            ))}
          </h2>

          <p
            className="
              max-w-[540px] text-base font-light
              leading-[1.65] text-slate-500
              sm:text-lg
              lg:ml-auto
              lg:text-[clamp(0.9rem,1.15vw,1.125rem)]
            "
          >
            {data.description}
          </p>
        </div>

        {/* SIX VALUES */}
        <div className="flex flex-col border-t border-[#102C59]/20">
          {data.items.map((item) => {
            const isActive = activeId === item.id;

            return (
              <article
                key={item.id}
                data-value-id={item.id}
                onFocus={() => setActiveValue(item.id)}
                onBlur={(event) => {
                  if (
                    !event.currentTarget.contains(event.relatedTarget)
                  ) {
                    setActiveValue(null);
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
                {/* SMOOTH ACTIVE LINE */}
                <div
                  className={`
                    absolute inset-x-0 top-0 h-px
                    origin-left bg-[#102C59]
                    transition-transform
                    duration-[900ms]
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    will-change-transform
                    ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0"
                    }
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
                  {/* NUMBER */}
                  <span
                    className={`
                      text-xs font-medium tabular-nums
                      transition-colors duration-700
                      ${
                        isActive
                          ? "text-[#102C59]"
                          : "text-[#102C59]/30"
                      }
                    `}
                  >
                    {item.id}
                  </span>

                  {/* TITLE */}
                  <h3
                    className={`
                      text-[clamp(1.5rem,2.8vw,2.8rem)]
                      font-heading
                      font-semibold leading-none
                      tracking-[-0.045em]
                      transition-colors duration-700
                      ${
                        isActive
                          ? "text-[#102C59]"
                          : "text-[#102C59]/25"
                      }
                    `}
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className={`
                      col-start-2 mt-3 max-w-[540px]
                      text-sm leading-relaxed
                      transition-colors duration-700
                      sm:col-start-auto sm:mt-0
                      sm:justify-self-end sm:text-base
                      lg:text-[clamp(0.8rem,1vw,1rem)]
                      ${
                        isActive
                          ? "text-slate-600"
                          : "text-slate-300"
                      }
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
