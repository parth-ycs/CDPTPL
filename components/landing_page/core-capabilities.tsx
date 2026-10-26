"use client";

import { useState } from "react";
import {
  Cog,
  Lightbulb,
  Factory,
  HardHat,
  ChartNoAxesColumnIncreasing,
  Atom,
  ArrowUpRight,
} from "lucide-react";
import { coreCapabilities } from "@/data/core-capabilities";

const iconMap = {
  engineering: Cog,
  technology: Lightbulb,
  manufacturing: Factory,
  epc: HardHat,
  execution: ChartNoAxesColumnIncreasing,
  innovation: Atom,
} as const;

const ROWS = 2;

export default function CoreCapabilitiesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeCapability =
    activeIndex === null ? null : coreCapabilities[activeIndex];

  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-12">
        <div
          className="relative isolate overflow-hidden rounded-[1.75rem] bg-brand-medium p-4 sm:rounded-[2rem] sm:p-6 lg:p-7"
          style={
            activeCapability
              ? {
                  backgroundImage: `linear-gradient(110deg, rgba(5,26,53,.82), rgba(8,66,117,.62)), url("${activeCapability.backgroundImage}")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }
              : undefined
          }
        >
        <div className="relative mx-auto w-full max-w-[1440px] px-5 py-5 sm:px-8 sm:py-6 lg:px-12 lg:py-7 xl:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 -z-10 h-72 w-72 rounded-full border border-white/10"
        />
          <div aria-hidden="true" className="pointer-events-none mx-auto max-w-[1440px] sm:px-8 lg:px-12 xl:px-16 absolute -bottom-40 -left-20 -z-10 h-80 w-80 rounded-full border border-white/10"/>
            <div className="mb-5 flex flex-col justify-between gap-3 text-white sm:mb-6 sm:flex-row sm:items-end ">
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70 sm:text-xs font-heading">
                  What we do
                </p>
                <h2 id="rd-heading" className="section-heading max-w-[620px]">
                  Core<span className="text-[#b00505]"> Capabilities</span>
                </h2>
                <p className="mt-2 max-w-2xl text-xs leading-5 text-white/80 sm:text-sm sm:leading-6">
                  Integrated expertise from engineering and technology to
                  manufacturing, EPC delivery, and process innovation.
                </p>
              </div>
            </div>

            {/* Fixed-height grid: each row has its own independent height. */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[240px_240px] lg:gap-4">
              {coreCapabilities.map((capability, index) => {
                const Icon = iconMap[capability.icon];
                const active = index === activeIndex;
                const rowIndex = Math.floor(index / 3);
                const activeRowIndex =
                  activeIndex === null ? -1 : Math.floor(activeIndex / 3);
                const inActiveRow = rowIndex === activeRowIndex;

                return (
                  <button
                    key={capability.id}
                    type="button"
                    aria-pressed={active}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    onFocus={() => setActiveIndex(index)}
                    onBlur={() => setActiveIndex(null)}
                    onClick={() =>
                      setActiveIndex((current) => (current === index ? null : index))
                    }
                    className={[
                      "group relative flex min-h-[180px] flex-col overflow-hidden rounded-xl border p-4 text-left",
                      "sm:min-h-[190px] sm:p-5 lg:min-h-0",
                      "transition-[background-color,border-color,box-shadow,color] duration-300 ease-out",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b477f]",
                      active
                        ? "border-white bg-white text-[#071a31] shadow-lg"
                        : "border-white/60 bg-transparent text-white hover:border-white",
                      // In the active row, only the card directly below/above the active
                      // card is compressed; cards in the other column positions are unchanged.
                      "lg:row-span-1",
                      inActiveRow && !active
                        ? "lg:min-h-0"
                        : "",
                    ].join(" ")}
                    style={{
                      ...(active
                        ? { backgroundColor: "#ffffff" }
                        : { backgroundColor: "transparent" }),
                      ...(inActiveRow && activeIndex !== null && !active
                        ? { minHeight: "0" }
                        : {}),
                    }}
                  >
                    <div className="flex w-full items-start justify-between gap-3">
                      <span
                        className={[
                          "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 sm:h-11 sm:w-11",
                          active
                            ? "bg-[#e8f1fa] text-[#15599b]"
                            : "bg-transparent text-white",
                        ].join(" ")}
                      >
                        <Icon
                          aria-hidden="true"
                          className="h-5 w-5 sm:h-6 sm:w-6"
                          strokeWidth={1.7}
                        />
                      </span>
                      <span
                        className={[
                          "text-[10px] font-semibold tracking-[0.18em]",
                          active ? "text-[#15599b]" : "text-white/75",
                        ].join(" ")}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3
                      className={[
                        "mt-4 text-base font-semibold leading-snug sm:text-lg",
                        active ? "text-[#071a31]" : "text-white",
                      ].join(" ")}
                    >
                      {capability.title}
                    </h3>

                    <div
                      className={[
                        "grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out",
                        active
                          ? "mt-2 grid-rows-[1fr] opacity-100"
                          : "mt-0 grid-rows-[0fr] opacity-0",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <p className="text-xs leading-5 text-slate-600 sm:text-sm sm:leading-5">
                          {capability.description}
                        </p>
                        <ul className="mt-2 space-y-1">
                          {capability.highlights.slice(0, 2).map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-2 text-[11px] leading-4 text-slate-600 sm:text-xs"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600"
                              />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <span
                      aria-hidden="true"
                      className={[
                        "mt-auto flex h-8 w-8 items-center justify-center self-end rounded-full border transition-all duration-300",
                        active
                          ? "border-[#15599b]/20 bg-[#15599b] text-white"
                          : "border-white/60 bg-transparent text-white group-hover:translate-x-1",
                      ].join(" ")}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </button>
                );
              })}
            </div>
        </div>
      </div>
    </section>
  );
}
