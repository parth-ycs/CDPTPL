
"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductsSectionData } from "../types";
import BrandCarouselButtons from "@/components/ui/BrandCarouselButtons";

export default function ProductsSection({
  data,
}: {
  data: ProductsSectionData;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = data.items;

  if (!items.length) return null;

  const index = activeIndex % items.length;
  const active = items[index];

  const selectItem = (nextIndex: number) => {
    setActiveIndex((nextIndex + items.length) % items.length);
  };

  return (
    <section className="w-full">
      {/* Section heading */}
      <div className="mb-7 sm:mb-9">
        <h2 className="[font-family:'Noa_Voren'] text-[clamp(26px,2.6vw,36px)] leading-tight text-ink">
          {data.heading}
        </h2>

        {data.intro && (
          <p className="mt-3 max-w-2xl [font-family:'Bai_Jamjuree'] text-sm leading-6 text-muted sm:text-base sm:leading-7">
            {data.intro}
          </p>
        )}
      </div>

      {/* Main product layout */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-[minmax(0,1.7fr)_minmax(220px,0.9fr)] md:gap-8 lg:gap-10">
        {/* Featured product */}
        <div className="min-w-0">
          <div className="relative h-[240px] w-full overflow-hidden rounded-xl bg-pale sm:h-[320px] lg:h-[360px]">
            <Image
              key={active.id}
              src={active.image.src}
              alt={active.image.alt || active.name}
              fill
              priority
              sizes="(min-width: 768px) 62vw, 100vw"
              className="animate-in fade-in object-cover duration-500"
            />
          </div>

          {/* Product information */}
          <div
            key={`details-${active.id}`}
            className="animate-in fade-in mt-5 duration-300"
          >
            {active.category && (
              <p className="mb-2 [font-family:'Bai_Jamjuree'] text-xs font-semibold uppercase tracking-[0.12em] text-brand-red">
                {active.category}
              </p>
            )}

            <h3 className="[font-family:'Bai_Jamjuree'] text-2xl leading-tight font-bold text-ink sm:text-3xl">
              {active.name}
            </h3>

            <p className="mt-3 max-w-2xl [font-family:'Bai_Jamjuree'] text-sm leading-6 text-muted sm:text-base sm:leading-7">
              {active.description}
            </p>

            {active.specs && active.specs.length > 0 && (
              <ul className="mt-4 space-y-2 [font-family:'Bai_Jamjuree'] text-sm text-ink sm:text-base">
                {active.specs.map((spec) => (
                  <li key={spec} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[9px] size-1.5 shrink-0 rounded-full bg-brand-red"
                    />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Product selector */}
        <aside className="min-w-0">
          <div className="mb-4 flex items-center justify-between">
            <p className="[font-family:'Bai_Jamjuree'] text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Explore products
            </p>

            <div className="flex items-center gap-2">
              <span className="mr-1 [font-family:'Bai_Jamjuree'] text-xs tabular-nums text-muted">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(items.length).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={() => selectItem(index - 1)}
                aria-label="Previous product"
                className="flex size-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-pale focus-visible:outline-2 focus-visible:outline-brand-blue"
              >
                <span aria-hidden="true">←</span>
              </button>

              <button
                type="button"
                onClick={() => selectItem(index + 1)}
                aria-label="Next product"
                className="flex size-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-pale focus-visible:outline-2 focus-visible:outline-brand-blue"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 md:flex-col md:gap-0 md:overflow-visible md:pb-0">
            {items.map((item, itemIndex) => {
              const selected = itemIndex === index;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => selectItem(itemIndex)}
                  aria-pressed={selected}
                  className={[
                    "group flex w-[240px] shrink-0 items-center gap-3 rounded-lg p-2 text-left transition-colors sm:w-[280px] md:w-full md:rounded-none md:p-3",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue",
                    selected
                      ? "bg-pale"
                      : "bg-transparent hover:bg-pale/70",
                  ].join(" ")}
                >
                  <div className="relative size-[76px] shrink-0 overflow-hidden rounded-md bg-white sm:size-[84px]">
                    <Image
                      src={item.image.src}
                      alt=""
                      fill
                      sizes="84px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className={[
                        "[font-family:'Bai_Jamjuree'] text-sm leading-5 transition-colors",
                        selected
                          ? "font-medium text-brand-blue"
                          : "font-medium text-ink group-hover:text-brand-blue",
                      ].join(" ")}
                    >
                      {item.name}
                    </p>

                    {item.category && (
                      <p className="mt-1 line-clamp-2 [font-family:'Bai_Jamjuree'] text-xs leading-4 text-muted">
                        {item.category}
                      </p>
                    )}
                  </div>

                  <span
                    aria-hidden="true"
                    className={[
                      "shrink-0 text-lg transition-colors",
                      selected
                        ? "text-brand-blue"
                        : "text-muted group-hover:text-brand-blue",
                    ].join(" ")}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>
        </aside>
      </div>
    </section>
  );
}
