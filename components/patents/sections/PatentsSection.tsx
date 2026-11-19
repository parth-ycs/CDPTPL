"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { patentsPageData } from "@/data/patents";

const pad = (n: number) => String(n).padStart(2, "0");

export default function PatentsSection() {
  const patents = patentsPageData.patents;
  const [activeId, setActiveId] = useState<(typeof patents)[number]["id"] | null>(
    null,
  );

  const active = patents.find((p) => p.id === activeId) ?? null;

  // Close on Esc and lock page scroll while the modal is open
  useEffect(() => {
    if (!active) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <section>
      <div className="mx-auto max-w-7xl">
        <div>
          <h2 className="font-heading text-3xl font-semibold text-brand-deep sm:text-4xl lg:text-5xl">
            Our Patents
          </h2>
        </div>

        {/* PATENT LIST */}
        <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {patents.map((patent, index) => (
            <article
              key={patent.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(16,44,89,0.25)] sm:flex-row"
            >
              {/* DOCUMENT PANEL (clickable) */}
              <div className="flex shrink-0 items-center justify-center bg-pale px-8 py-8 sm:w-[210px]">
                <button
                  type="button"
                  onClick={() => setActiveId(patent.id)}
                  aria-label={`View ${patent.title} document`}
                  className="relative h-[220px] w-[156px] cursor-zoom-in overflow-hidden bg-white shadow-[0_10px_30px_-10px_rgba(16,44,89,0.35)] ring-1 ring-black/5 transition-transform duration-500 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
                >
                  <Image
                    src={patent.image}
                    alt={patent.imageAlt}
                    fill
                    sizes="160px"
                    className="object-contain p-1"
                  />

                  {/* zoom hint */}
                  <span className="absolute inset-0 flex items-center justify-center bg-brand-deep/0 opacity-0 transition-all duration-300 hover:bg-brand-deep/30 hover:opacity-100 group-hover:opacity-100">
                    
                  </span>
                </button>
              </div>

              {/* DETAILS */}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="mt-4 font-heading text-xl font-semibold leading-snug text-brand-deep md:text-2xl">
                  {patent.title}
                </h3>

                <dl className="mt-auto space-y-3 border-t border-line pt-5 text-sm">
                  <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <dt className="text-xs font-semibold uppercase tracking-widest text-muted">
                      {patent.referenceLabel}
                    </dt>
                    <dd className="font-semibold tabular-nums text-brand-blue">
                      {patent.applicationNumber}
                    </dd>
                  </div>

                  {patent.date && (
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <dt className="text-xs font-semibold uppercase tracking-widest text-muted">
                        Date
                      </dt>
                      <dd className="text-ink">{patent.date}</dd>
                    </div>
                  )}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-deep/80 p-4 backdrop-blur-sm sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveId(null)}
          >
            <motion.div
              className="relative rounded-2xl bg-white p-3 shadow-2xl sm:p-4"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveId(null)}
                aria-label="Close"
                autoFocus
                className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-deep shadow-lg transition-colors hover:bg-brand-red hover:text-white"
              >
                <X size={18} />
              </button>

              <div className="relative h-[80vh] w-[min(88vw,620px)] overflow-hidden rounded-lg bg-pale">
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  sizes="(max-width: 768px) 90vw, 620px"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}