"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ProductsSectionData } from "../types";

const EASE_OUT_POW: [number, number, number, number] = [0.25, 1, 0.5, 1];

const pad = (n: number) => String(n).padStart(2, "0");

export default function ProductsSection({
  data,
}: {
  data: ProductsSectionData;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduce = useReducedMotion() ?? false;
  const listRef = useRef<HTMLDivElement>(null);

  const items = data.items;
  const total = items.length;
  const index = total ? activeIndex % total : 0;
  const active = items[index];

  const selectItem = (next: number) =>
    setActiveIndex((next + total) % total);

  // Keep the selected thumbnail in view (horizontal scroll on mobile)
  useEffect(() => {
    const el = listRef.current?.children[index] as HTMLElement | undefined;
    el?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [index, reduce]);

  if (!total) return null;

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      selectItem(index + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      selectItem(index - 1);
    }
  };

  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: EASE_OUT_POW, delay },
  });

  return (
    <section className="w-full">
      {/* Section heading */}
      <motion.div
        className="mb-7 sm:mb-9"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: EASE_OUT_POW }}
      >
        <h2 className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-tight text-ink">
          {data.heading}
        </h2>

        {data.intro && (
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
            {data.intro}
          </p>
        )}
      </motion.div>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-[minmax(0,1.7fr)_minmax(220px,0.9fr)] md:gap-8 lg:gap-10">
        {/* FEATURED PRODUCT */}
        <div className="min-w-0">
          {/* Images: all stacked, crossfade (no remount, no flash) */}
          <div className="relative h-[240px] w-full overflow-hidden rounded-xl bg-pale sm:h-[320px] lg:h-[360px]">
            {items.map((item, i) => {
              const isActive = i === index;

              return (
                <motion.div
                  key={item.id}
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 1.05,
                  }}
                  transition={{
                    duration: reduce ? 0 : isActive ? 1 : 0.6,
                    ease: EASE_OUT_POW,
                  }}
                  aria-hidden={!isActive}
                >
                  <Image
                    src={item.image.src}
                    alt={item.image.alt || item.name}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 768px) 62vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Progress line: grey base, red accent tracks the selection */}
          <div className="relative mt-4 h-px w-full bg-line">
            <motion.span
              className="absolute left-0 top-0 h-px bg-brand-red"
              initial={false}
              animate={{ width: `${((index + 1) / total) * 100}%` }}
              transition={{
                duration: reduce ? 0 : 0.9,
                ease: EASE_OUT_POW,
              }}
            />
          </div>

          {/* Product information */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              className="mt-5"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              aria-live="polite"
            >
              {active.category && (
                <motion.p
                  {...fade(0)}
                  className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-red"
                >
                  {active.category}
                </motion.p>
              )}

              <motion.h3
                {...fade(0.05)}
                className="font-heading text-2xl font-bold leading-tight text-brand-blue sm:text-3xl"
              >
                {active.name}
              </motion.h3>

              <motion.p
                {...fade(0.1)}
                className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7"
              >
                {active.description}
              </motion.p>

              {active.specs && active.specs.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm text-ink sm:text-base">
                  {active.specs.map((spec, i) => (
                    <motion.li
                      key={spec}
                      {...fade(0.15 + i * 0.06)}
                      className="flex items-start gap-3"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[9px] size-1.5 shrink-0 rounded-full bg-brand-red"
                      />
                      <span>{spec}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PRODUCT SELECTOR */}
        <aside className="min-w-0" onKeyDown={onKeyDown}>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Explore products
            </p>

            <div className="flex items-center gap-2">
              <span className="mr-1 font-heading text-xs tabular-nums text-muted">
                {pad(index + 1)} / {pad(total)}
              </span>

              {[
                { label: "Previous product", arrow: "←", step: -1 },
                { label: "Next product", arrow: "→", step: 1 },
              ].map(({ label, arrow, step }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => selectItem(index + step)}
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-pale focus-visible:outline-2 focus-visible:outline-brand-blue"
                >
                  <span aria-hidden="true">{arrow}</span>
                </button>
              ))}
            </div>
          </div>

          <div
            ref={listRef}
            className="flex gap-3 overflow-x-auto pb-2 md:flex-col md:gap-0 md:overflow-visible md:pb-0"
          >
            {items.map((item, itemIndex) => {
              const selected = itemIndex === index;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => selectItem(itemIndex)}
                  aria-pressed={selected}
                  className="group relative flex w-[240px] shrink-0 items-center gap-3 rounded-lg p-2 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue sm:w-[280px] md:w-full md:rounded-none md:p-3"
                >
                  {/* Sliding highlight: glides between items */}
                  {selected && (
                    <motion.span
                      layoutId="product-active"
                      aria-hidden="true"
                      className="absolute inset-0 rounded-lg bg-pale md:rounded-none"
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 36 }
                      }
                    />
                  )}

                  {/* Red marker on the active item */}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-y-3 left-0 w-[2px] origin-center bg-brand-red transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      selected ? "scale-y-100" : "scale-y-0"
                    }`}
                  />

                  <div className="relative size-[76px] shrink-0 overflow-hidden rounded-md bg-white sm:size-[84px]">
                    <Image
                      src={item.image.src}
                      alt=""
                      fill
                      sizes="84px"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                    />
                  </div>

                  <div className="relative min-w-0 flex-1">
                    <p
                      className={`font-heading text-sm font-medium leading-5 transition-colors duration-500 ${
                        selected
                          ? "text-brand-blue"
                          : "text-ink group-hover:text-brand-blue"
                      }`}
                    >
                      {item.name}
                    </p>

                    {item.category && (
                      <p className="mt-1 line-clamp-2 text-xs leading-4 text-muted">
                        {item.category}
                      </p>
                    )}
                  </div>

                  <span
                    aria-hidden="true"
                    className={`relative shrink-0 text-lg transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      selected
                        ? "translate-x-0 text-brand-blue"
                        : "-translate-x-1 text-muted group-hover:translate-x-0 group-hover:text-brand-blue"
                    }`}
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