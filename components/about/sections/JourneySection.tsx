
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { aboutPageData } from "@/data/about";
import Container from "@/components/container";

const HEADER = "7rem";

export default function JourneySection() {
  const milestones = aboutPageData.journey;

  const [active, setActive] = useState(0);
  const slots = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!milestones.length) return;

    // Detect the milestone currently passing through
    // the central area of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            const center = window.innerHeight / 2;

            const distanceA = Math.abs(
              a.boundingClientRect.top +
                a.boundingClientRect.height / 2 -
                center
            );

            const distanceB = Math.abs(
              b.boundingClientRect.top +
                b.boundingClientRect.height / 2 -
                center
            );

            return distanceA - distanceB;
          });

        if (visible.length > 0) {
          const index = Number(
            (visible[0].target as HTMLElement).dataset.index
          );

          setActive(index);
        }
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    slots.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [milestones.length]);

  if (!milestones.length) return null;

  const current = milestones[active];
  const last = milestones.length - 1;

  const progress = last > 0 ? (active / last) * 100 : 100;

  return (
    <section
      id="our-journey"
      className="bg-white text-[#171717]"
      style={{ scrollMarginTop: HEADER }}
    >
      <Container className="!py-0">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT: Sticky content */}
          <div className="py-10 lg:sticky lg:top-28 lg:flex lg:h-[calc(100vh-7rem)] lg:flex-col lg:justify-center lg:py-0">

            <div className="mb-10 flex items-center gap-4">
              <h2 className="font-heading font-bold text-7xl">
                Our 
                <span className="text-brand-blue"> Journey</span>
              </h2>
            </div>

            {/* Active milestone */}
            <div
              key={current.id}
              className="journey-fade min-h-[300px]"
            >
              <div className="mb-6 flex items-center gap-5">
                <span className="text-4xl font-semibold text-[#1455a0]">
                  {current.year}
                </span>
              </div>

              <h3 className="mb-4 max-w-[620px] text-2xl font-medium leading-snug sm:text-3xl">
                {current.title}
              </h3>

              <p className="max-w-[620px] leading-[1.9] text-[#777]">
                {current.description}
              </p>

              {current.highlights.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {current.highlights.map((h) => (
                    <div
                      key={h.title}
                      className="min-w-[160px] rounded-lg border-l-[3px] border-[#1455a0] px-5 py-3 shadow-sm"
                    >
                      <p className="text-lg font-semibold text-[#1455a0]">
                        {h.title}
                      </p>

                      <p className="text-sm text-[#555]">
                        {h.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Timeline progress */}
            <div className="mx-[18px] mt-10 pb-10">
              <div className="relative h-[5px] rounded-full bg-[#cbd7e6]">

                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-[#1455a0] transition-[width] duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />

                {milestones.map((m, i) => (
                  <div
                    key={m.id}
                    className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${last > 0 ? (i / last) * 100 : 50}%`,
                    }}
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full border-[5px] border-[#1455a0] bg-white transition-all duration-300 ${
                        i === active
                          ? "scale-110 shadow-[0_0_0_8px_rgba(20,85,160,0.12)]"
                          : ""
                      }`}
                    >
                      {i <= active && (
                        <span className="h-2.5 w-2.5 rounded-full bg-[#1455a0]" />
                      )}
                    </div>

                    <span
                      className={`absolute left-1/2 top-11 -translate-x-1/2 whitespace-nowrap text-sm font-medium transition-colors ${
                        i === active
                          ? "text-[#1455a0]"
                          : "text-[#171717]"
                      }`}
                    >
                      {m.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Image cards */}
          <div>
            {milestones.map((m, i) => (
              <div
                key={m.id}
                ref={(el) => {
                  slots.current[i] = el;
                }}
                data-index={i}
                className="flex h-[80vh] items-center lg:h-[calc(100vh-7rem)]"
              >
                <div className="relative h-[65vh] w-full overflow-hidden rounded-[28px] bg-[#ededed] shadow-xl lg:h-[78vh]">

                  <Image
                    src={m.image}
                    alt={m.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

                  <span className="absolute right-6 top-6 rounded-full border border-white/40 bg-black/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
                    {m.year}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                    <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-white/80">
                      Chemdist Through The Years
                    </span>

                    <h3 className="text-3xl font-semibold">
                      {m.imageHeading}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>

      <style jsx>{`
        .journey-fade {
          animation: fade 400ms ease both;
        }

        @keyframes fade {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .journey-fade {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
