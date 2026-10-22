
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import BrandCarouselButtons from "@/components/ui/BrandCarouselButtons";
import { projects } from "@/data/projects";

export default function ProjectsShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  if (projects.length === 0) return null;

  function navigateTo(index: number) {
    const nextIndex = (index + projects.length) % projects.length;

    setCurrentIndex(nextIndex);
    setHoveredIndex(null);

    cardRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }

  return (
    <section className="overflow-hidden bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading and navigation */}
        <div className="mb-8 flex items-center justify-between gap-6">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-red-600">
              Our work
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Projects &amp; Case Studies
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
              Verified installations, major references, project outcomes,
              execution strength.
            </p>
          </div>

          <div className="hidden shrink-0 sm:block">
            <BrandCarouselButtons
              onPrevious={() => navigateTo(currentIndex - 1)}
              onNext={() => navigateTo(currentIndex + 1)}
              aria-label="Project navigation"
            />
          </div>
        </div>

        {/* Project carousel */}
        <div className="flex items-stretch gap-5 overflow-x-auto overflow-y-hidden pb-6 pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {projects.map((project, index) => {
            const expanded = hoveredIndex === index;

            return (
              <article
                key={project.id}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  setCurrentIndex(index);
                }}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => {
                  setHoveredIndex(index);
                  setCurrentIndex(index);
                }}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setHoveredIndex(null);
                  }
                }}
                className={`group relative isolate h-[440px] shrink-0
                  overflow-hidden rounded-xl bg-slate-950 text-white
                  transition-[width,box-shadow] duration-500 ease-in-out
                  md:h-[480px]
                  ${
                    expanded
                      ? "w-[250px] shadow-xl shadow-slate-900/20 sm:w-[360px] lg:w-[460px]"
                      : "w-[250px] sm:w-[280px] lg:w-[300px]"
                  }`}
              >
                {/* Background photograph */}
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 460px, 560px"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10" />

                {/* Collapsed preview: always anchored at bottom */}
                <div
                  className={`absolute inset-x-0 bottom-0 z-10 p-5
                    transition-opacity duration-200 md:p-6
                    ${expanded ? "pointer-events-none opacity-0" : "opacity-100"}`}
                  aria-hidden={expanded}
                >
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-red-300 md:text-xs">
                    {project.category}
                  </p>

                  <h3 className="line-clamp-2 text-xl font-semibold leading-snug md:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs text-white/70">
                    {project.location}
                  </p>
                </div>

                {/* Expanded case study: content starts at the top */}
                
                {expanded && (
                <div
                        className="absolute inset-0 z-20 overflow-hidden
                        bg-slate-950/50 p-4 backdrop-blur-[2px] md:p-5"
                    >
                    {/* Category */}
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-red-300 md:text-xs">
                    {project.category}
                    </p>

                    {/* Project title */}
                    <h3 className="mb-5 break-words text-xl font-semibold leading-snug sm:text-2xl">
                    {project.title}
                    </h3>

                    <div className="space-y-4 text-sm leading-5 text-white/90">
                    {/* Plant */}
                    {project.plant && (
                        <div>
                        <p className="mb-1 font-semibold text-sky-300">Plant</p>
                        <p>{project.plant}</p>
                        </div>
                    )}

                    {/* Description */}
                    <div>
                        <p className="mb-1 font-semibold text-sky-300">
                        Project Description
                        </p>
                        <p>{project.description}</p>
                    </div>

                    
                    {/* Contract value */}
                    {project.contractValue && (
                        <div>
                        <p className="mb-1 font-semibold text-sky-300">
                            Overall Contract Value
                        </p>
                        <p className="font-semibold">{project.contractValue}</p>
                        </div>
                    )}


                    {/* Award and completion dates */}
                    {(project.yearOfAward || project.yearOfCompletion) && (
                        <div className="grid grid-cols-2 gap-3 border-t border-white/15 pt-4">
                        {project.yearOfAward && (
                            <div>
                            <p className="mb-1 font-semibold text-sky-300">
                                Year of Award
                            </p>
                            <p>{project.yearOfAward}</p>
                            </div>
                        )}

                        {project.yearOfCompletion && (
                            <div>
                            <p className="mb-1 font-semibold text-sky-300">
                                Year of Completion
                            </p>
                            <p>{project.yearOfCompletion}</p>
                            </div>
                        )}
                        </div>
                    )}

                    {/* Case study link */}
                    {project.href && (
                        <Link
                        href={project.href}
                        tabIndex={expanded ? 0 : -1}
                        className="inline-flex items-center gap-2 pt-1 font-semibold
                            text-white transition-colors hover:text-red-300
                            focus-visible:outline-2 focus-visible:outline-offset-4
                            focus-visible:outline-sky-300"
                        >
                        View case study
                        <span aria-hidden="true">↗</span>
                        </Link>
                    )}
                    </div>
                </div>
                )}
                </article>
                );
                })}
                </div>


        {/* Mobile navigation */}
        <div className="flex justify-end sm:hidden">
          <BrandCarouselButtons
            onPrevious={() => navigateTo(currentIndex - 1)}
            onNext={() => navigateTo(currentIndex + 1)}
            aria-label="Project navigation"
          />
        </div>

        {/* Counter */}
        <div className="mt-1 flex items-center justify-between border-t border-slate-200 pt-5">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            Selected projects
          </span>

          <span className="text-xs tabular-nums text-slate-500">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
