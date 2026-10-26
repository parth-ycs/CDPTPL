
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { newsItems } from "@/data/news";

const CARD_HEIGHT = "h-[490px]";

function ArrowIcon({
  direction = "right",
}: {
  direction?: "left" | "right";
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={`h-4 w-4 ${
        direction === "left" ? "rotate-180" : ""
      }`}
    >
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NewsCard({
  item,
}: {
  item: (typeof newsItems)[number];
}) {
  return (
    <article
      className={`group flex ${CARD_HEIGHT} w-full flex-col overflow-hidden rounded-[12px] border border-[#e2dfd7] bg-white transition-[border-color,box-shadow] duration-300 hover:border-[#b7b2a7] hover:shadow-[0_12px_35px_rgba(20,25,35,0.07)] focus-within:border-[#b7b2a7]`}
    >
      <a
        href={item.href}
        aria-label={`Read more: ${item.title}`}
        className="block shrink-0 overflow-hidden"
      >
        <img
          src={item.image}
          alt=""
          loading="lazy"
          className="h-[220px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] group-focus-within:scale-[1.02] motion-reduce:transition-none"
        />
      </a>

      <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-medium uppercase tracking-[0.11em] sm:text-[11px]">
          <span className="text-[#8f3434]">{item.category}</span>

          <span aria-hidden="true" className="text-[#aaa69d]">
            —
          </span>

          <time className="text-[#777b80]">{item.date}</time>
        </div>

        <h3 className="mt-3 font-heading text-[24px] leading-[1.16] tracking-[-0.035em] text-[#15191f] sm:text-[27px]">
          <a
            href={item.href}
            className="decoration-1 underline-offset-4 hover:underline focus-visible:underline"
          >
            {item.title}
          </a>
        </h3>

        <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[#777b80]">
          {item.location}
        </p>

        {item.description && (
          <p className="mt-3 line-clamp-2 text-[13px] leading-[1.55] text-[#737981]">
            {item.description}
          </p>
        )}

        <a
          href={item.href}
          className="mt-auto inline-flex shrink-0 items-center gap-2 pt-4 text-[13px] font-medium text-[#15191f] transition-colors duration-300 hover:text-[#1556a0]"
        >
          Read more
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            <ArrowIcon />
          </span>
        </a>
      </div>
    </article>
  );
}

export default function News() {
  const railRef = useRef<HTMLDivElement>(null);
  const settleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const renderedIndexRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = newsItems.length;

  // Three copies let the carousel loop without a visible jump.
  const slides = [
    ...newsItems,
    ...newsItems,
    ...newsItems,
  ];

  // Scroll to a rendered card, including cloned cards.
  const scrollToCard = useCallback(
    (index: number, behavior: ScrollBehavior) => {
      const rail = railRef.current;
      if (!rail) return;

      const card = rail.children[index] as HTMLElement | undefined;
      if (!card) return;

      const left =
        rail.scrollLeft +
        card.getBoundingClientRect().left -
        rail.getBoundingClientRect().left;

      rail.scrollTo({ left, behavior });
    },
    []
  );

  // Begin in the middle copy, not at the physical start.
  useEffect(() => {
    if (!totalSlides) return;

    const frame = requestAnimationFrame(() => {
      renderedIndexRef.current = totalSlides;
      scrollToCard(totalSlides, "instant");
    });

    return () => cancelAnimationFrame(frame);
  }, [totalSlides, scrollToCard]);

  // Track the visible card and silently recenter after reaching
  // either cloned boundary.
  const updateActiveIndex = useCallback(() => {
    const rail = railRef.current;
    if (!rail || !totalSlides) return;

    const railLeft = rail.getBoundingClientRect().left;
    const cards = Array.from(rail.children) as HTMLElement[];

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        card.getBoundingClientRect().left - railLeft
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    renderedIndexRef.current = closestIndex;
    setActiveIndex(closestIndex % totalSlides);

    if (settleTimerRef.current) {
      clearTimeout(settleTimerRef.current);
    }

    // Wait until smooth scrolling or touch scrolling settles.
    settleTimerRef.current = setTimeout(() => {
      const currentIndex = renderedIndexRef.current;

      if (
        currentIndex < totalSlides ||
        currentIndex >= totalSlides * 2
      ) {
        const equivalentMiddleIndex =
          totalSlides + (currentIndex % totalSlides);

        renderedIndexRef.current = equivalentMiddleIndex;

        // Same logical card, different copy: no visible jump.
        scrollToCard(equivalentMiddleIndex, "instant");
      }
    }, 160);
  }, [totalSlides, scrollToCard]);

  useEffect(() => {
    return () => {
      if (settleTimerRef.current) {
        clearTimeout(settleTimerRef.current);
      }
    };
  }, []);

  // Move exactly one card in either direction.
  const moveSlide = (direction: "previous" | "next") => {
    if (!totalSlides) return;

    const current = renderedIndexRef.current;
    const next =
      direction === "next" ? current + 1 : current - 1;

    // Update the target immediately, even on rapid button clicks.
    renderedIndexRef.current = next;
    setActiveIndex(((next % totalSlides) + totalSlides) % totalSlides);

    scrollToCard(
      next,
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth"
    );
  };

  if (!totalSlides) return null;

  return (
    <section
      id="news"
      aria-labelledby="news-heading"
      className="overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* Heading and top-right navigation */}
        <div className="mb-9 flex flex-col gap-7 sm:mb-11 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="min-w-0 flex-1">
            <h2 id="rd-heading" className="section-heading max-w-[620px]">
              Latest from<span className="text-brand-blue"> Chemdist</span>
            </h2>
          </div>

          <div className="w-full vertical-align-center lg:w-[400px] lg:shrink-0">
            {/* Controls and progress: one aligned row */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => moveSlide("previous")}
                aria-label="Previous news story"
                className="inline-flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-[#dedbd3] text-[#252525] transition-colors duration-300 hover:border-[#1556a0] hover:text-[#1556a0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1556a0]"
              >
                <ArrowIcon direction="left" />
              </button>

              <button
                type="button"
                onClick={() => moveSlide("next")}
                aria-label="Next news story"
                className="inline-flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-[#c9c6bd] text-[#252525] transition-colors duration-300 hover:border-[#1556a0] hover:text-[#1556a0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1556a0]"
              >
                <ArrowIcon />
              </button>

              <span
                className="ml-4 shrink-0 whitespace-nowrap text-[11px] tabular-nums text-[#393939]"
                aria-live="polite"
              >
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(totalSlides).padStart(2, "0")}
              </span>

              <div
                className="ml-1 h-[3px] min-w-[45px] flex-1 overflow-hidden rounded-full bg-[#dedbd3]"
                role="progressbar"
                aria-label="News carousel position"
                aria-valuemin={1}
                aria-valuemax={totalSlides}
                aria-valuenow={activeIndex + 1}
              >
                <div
                  className="h-full rounded-full bg-brand-blue transition-[width] duration-300 ease-out motion-reduce:transition-none"
                  style={{
                    width: `${
                      ((activeIndex + 1) / totalSlides) * 100
                    }%`,
                  }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Continuous carousel */}
        <div
          ref={railRef}
          onScroll={updateActiveIndex}
          className="news-carousel-rail flex items-stretch gap-5 overflow-x-auto snap-x snap-mandatory pb-3"
          aria-label="Latest Chemdist news"
        >
          {slides.map((item, index) => (
            <div
              key={`${index}-${item.id}`}
              className="w-[88%] shrink-0 snap-start sm:w-[40%] md:w-[40%] lg:w-[45%] xl:w-[32%]"
              aria-hidden={
                index % totalSlides !== activeIndex
              }
            >
              <NewsCard item={item} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .news-carousel-rail {
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-behavior: smooth;
          overscroll-behavior-x: contain;
        }

        .news-carousel-rail::-webkit-scrollbar {
          display: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .news-carousel-rail {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </section>
  );
}
