
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectHref } from "@/data/projects";
import BrandCarouselButtons from "@/components/ui/BrandCarouselButtons";

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

  // Inline animation styles: no global CSS required.
  const headingStyle = {
    animation: "projectHeadingEnter 650ms cubic-bezier(0.22, 1, 0.36, 1) both",
  };

  const detailStyle = (delay: number) => ({
    animation: `projectDetailEnter 500ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms both`,
  });

  return (
    <section className="overflow-hidden bg-white py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* Heading and navigation */}
        <div className="mb-8 flex items-center justify-between gap-6">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-red-600">
              Our work
            </p>

            <h2 id="rd-heading" className="section-heading max-w-[620px]">
              Projects &amp; <br />
              Case <span className="text-brand-blue">Studies</span>
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
        <div className="flex items-stretch gap-5 overflow-x-auto overflow-y-hidden pb-6 pt-3">
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
                  className={`object-cover transition-transform duration-700 ease-out ${
                    expanded ? "scale-105" : "scale-100"
                  }`}
                />

                <div
                  className={`absolute inset-0 transition-colors duration-500 ${
                    expanded
                      ? "bg-black/35"
                      : "bg-gradient-to-t from-black/95 via-black/45 to-black/10"
                  }`}
                />

                {/* Collapsed preview */}
                <div
                  className={`absolute inset-x-0 bottom-0 z-10 p-5
                    transition-[opacity,transform] duration-350 ease-out md:p-6
                    ${
                      expanded
                        ? "pointer-events-none translate-y-4 opacity-0"
                        : "translate-y-0 opacity-100"
                    }`}
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

                {/* Expanded case study */}
                <div
                  aria-hidden={!expanded}
                  className={`absolute inset-0 z-20 flex flex-col overflow-hidden
                    bg-slate-950/75 backdrop-blur-[2px]
                    transition-[opacity,transform] duration-300 ease-out
                    ${
                      expanded
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-3 opacity-0"
                    }`}
                  style={{
                    visibility: expanded ? "visible" : "hidden",
                    transitionDelay: expanded ? "80ms" : "0ms",
                  }}
                >
                  {/* Scrollable information */}
                  <div className="min-h-0 flex-1 overflow-y-auto p-4 md:p-5 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.4)_transparent]">

                    {/* Heading enters first */}
                    <div key={`${project.id}-${expanded}`} style={headingStyle}>
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-red-300 md:text-xs">
                        {project.category}
                      </p>

                      <h3 className="mb-3 break-words text-xl font-semibold leading-snug sm:text-2xl">
                        {project.title}
                      </h3>

                      <p className="mb-5 text-xs text-white/70">
                        {project.location}
                      </p>
                    </div>

                    <div className="space-y-5 text-sm leading-5 text-white/90">

                      {/* Plant */}
                      {project.plant && (
                        <div
                          key={`${project.id}-plant-${expanded}`}
                          style={detailStyle(180)}
                        >
                          <p className="mb-1 font-semibold text-sky-300">
                            Plant
                          </p>
                          <p>{project.plant}</p>
                        </div>
                      )}

                      {/* Description */}
                      <div
                        key={`${project.id}-description-${expanded}`}
                        style={detailStyle(300)}
                      >
                        <p className="mb-1 font-semibold text-sky-300">
                          Project Description
                        </p>
                        <p>{project.description}</p>
                      </div>

                      {/* Contract value */}
                      {project.contractValue && (
                        <div
                          key={`${project.id}-contract-${expanded}`}
                          style={detailStyle(420)}
                        >
                          <p className="mb-1 font-semibold text-sky-300">
                            Overall Contract Value
                          </p>
                          <p className="font-semibold">
                            {project.contractValue}
                          </p>
                        </div>
                      )}

                      {/* Project timeline */}
                      {(project.yearOfAward || project.yearOfCompletion) && (
                        <div
                          key={`${project.id}-years-${expanded}`}
                          className="grid grid-cols-2 gap-3 border-t border-white/15 pt-4"
                          style={detailStyle(520)}
                        >
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
                    </div>
                  </div>

                  {/* Fixed footer */}
                  <div className="shrink-0 border-t border-white/20 bg-slate-950/95 px-4 py-3 md:px-5">
                    <Link
                      href={getProjectHref(project)}
                      tabIndex={expanded ? 0 : -1}
                      className="inline-flex items-center gap-2 font-semibold text-white transition-colors duration-200 hover:text-red-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
                      style={detailStyle(620)}
                    >
                      View case study
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </div>
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
      </div>

      {/* Keyframes scoped to this component */}
      <style jsx>{`
        @keyframes projectHeadingEnter {
          from {
            opacity: 0;
            transform: translateY(26px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes projectDetailEnter {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .project-heading-enter,
          .project-detail-enter {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
