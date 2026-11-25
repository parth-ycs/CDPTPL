
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import PageHero from "@/components/shared-page/PageHero";
import PageOverview from "@/components/shared-page/PageOverview";
import Enquiry from "@/components/enquiry";
import Footer from "@/components/footer";

import { patentsPageData } from "@/data/patents";

const pad = (n: number) => String(n).padStart(2, "0");

export default function PatentsPage() {
  const { hero, overview, patents } = patentsPageData;

  const [activeId, setActiveId] = useState<
    (typeof patents)[number]["id"] | null
  >(null);

  const active = patents.find((patent) => patent.id === activeId) ?? null;

  // Close on Escape and lock page scroll while the modal is open
  useEffect(() => {
    if (!active) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
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
    <main className="bg-white text-ink">
      <PageHero
        name={hero.heading}
        tagline={hero.eyebrow}
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Patents" },
        ]}
        ctaLabel="Explore Our Patents"
        ctaHref="#patents"
      />

      <PageOverview
        heading={overview.heading}
        description={overview.description}
      />

      {/* PATENTS */}
      <section
        id="patents"
        className="scroll-mt-24 border-t border-line py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Heading */}
          <div>
            <h2 className="font-heading text-h1 font-semibold text-brand-deep">
              Our Patents
            </h2>
          </div>

          {/* Patent List */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {patents.map((patent) => (
              <article
                key={patent.id}
                className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(16,44,89,0.25)] sm:flex-row"
              >
                {/* Document Panel */}
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
                  </button>
                </div>

                {/* Patent Details */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="mt-4 font-heading text-h3 font-semibold text-brand-deep">
                    {patent.title}
                  </h3>

                  <dl className="mt-auto space-y-3 border-t border-line pt-5">
                    <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <dt className="text-caption font-semibold uppercase tracking-widest text-muted">
                        {patent.referenceLabel}
                      </dt>

                      <dd className="text-small font-semibold tabular-nums text-brand-blue">
                        {patent.applicationNumber}
                      </dd>
                    </div>

                    {patent.date && (
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <dt className="text-caption font-semibold uppercase tracking-widest text-muted">
                          Date
                        </dt>

                        <dd className="text-small text-ink">
                          {patent.date}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
              onClick={(event) => event.stopPropagation()}
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

      <Enquiry />
      <Footer />
    </main>
  );
}
