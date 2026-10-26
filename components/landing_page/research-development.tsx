
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import { rdSectionData } from "@/data/r&d";

export default function RDSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = rdSectionData.slides;
  const activeSlide = slides[activeIndex];

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      id="research-development"
      aria-labelledby="rd-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-5 xl:gap-5">
          {/* LEFT: R&D CONTENT */}
          <div className="flex min-w-0 flex-col items-start">


            {/* Heading */}
            <h2 id="rd-heading" className="section-heading max-w-[620px]">
              Research & <span className="text-brand-blue">Development</span>
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-[550px] text-[15px] leading-[1.9] text-slate-600 sm:text-base">
              {rdSectionData.description}
            </p>

            {/* Highlights */}
            <ul className="mt-7 flex flex-col gap-3.5">
              {rdSectionData.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 text-sm font-medium text-brand-blue sm:text-base"
                >
                  <span
                    aria-hidden="true"
                    className="h-3 w-3 shrink-0 rounded-full bg-brand-red"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="mt-9 flex w-full flex-wrap gap-3 sm:w-auto sm:gap-4">
              <Link
                href={rdSectionData.primaryCta.href}
                className="group inline-flex min-h-[54px] items-center justify-between gap-5 border border-brand-blue px-5 py-3 text-sm font-semibold text-brand-blue transition-colors duration-300 hover:bg-brand-blue hover:text-white sm:min-w-[220px] sm:px-6"
              >
                {rdSectionData.primaryCta.label}

                <ArrowRight
                  size={20}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href={rdSectionData.secondaryCta.href}
                className="group inline-flex min-h-[54px] items-center justify-between gap-5 border border-slate-300 px-5 py-3 text-sm font-medium text-brand-blue transition-colors duration-300 hover:border-brand-blue hover:bg-slate-50 sm:min-w-[220px] sm:px-6"
              >
                {rdSectionData.secondaryCta.label}

                <ArrowRight
                  size={20}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT: IMAGE SLIDER */}
          <div className="relative min-w-0 max-h-[600px] w-full overflow-hidden rounded-xl bg-slate-100 sm:max-h-[600px] lg:max-h-[600px]">

            {/* Image Frame */}
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-md bg-slate-100">
              {/* Current Slide */}
              <Image
                key={activeSlide.image}
                src={activeSlide.image}
                alt={activeSlide.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Image Contrast Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />

              {/* Slide Counter */}
              <div className="absolute right-5 top-5 z-10 sm:right-7 sm:top-7">
                <span className="text-sm font-semibold tracking-wide text-white sm:text-base">
                  {String(activeIndex + 1).padStart(2, "0")}
                  <span className="mx-1.5 text-white/60">/</span>
                  {String(slides.length).padStart(2, "0")}
                </span>
              </div>

              {/* Previous Button */}
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous R&D image"
                className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-blue shadow-sm transition-all duration-300 hover:scale-105 hover:bg-brand-blue hover:text-white sm:left-6 sm:h-12 sm:w-12"
              >
                <ArrowLeft size={21} strokeWidth={1.8} />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next R&D image"
                className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-blue shadow-sm transition-all duration-300 hover:scale-105 hover:bg-brand-blue hover:text-white sm:right-6 sm:h-12 sm:w-12"
              >
                <ArrowRight size={21} strokeWidth={1.8} />
              </button>

              {/* Bottom Caption */}
              <div
                className="absolute bottom-0 left-0 z-[5] w-full px-6 pb-7 pt-16 sm:px-8"
                aria-live="polite"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 ">
                  Research & Development
                </p>

                <p className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  {activeSlide.title}
                </p>
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-5 right-5 z-10 flex items-center gap-2 sm:bottom-7 sm:right-8">
                {slides.map((slide, index) => (
                  <button
                    key={slide.image}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show slide ${index + 1}: ${slide.title}`}
                    aria-current={
                      activeIndex === index ? "true" : undefined
                    }
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-10 bg-white"
                        : "w-6 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative Index */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Innovation in Practice
              </span>

              <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue">
                Discover More
                <ArrowDownRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
