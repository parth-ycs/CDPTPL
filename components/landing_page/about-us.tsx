
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { aboutSectionData, aboutValues } from "@/data/about";
import Container from "../container";

export default function AboutUsSection() {
  const data = aboutSectionData;

  return (
    <section
      id="about-us"
      className="relative w-full overflow-hidden bg-white sm:pb-15 lg:pb-18 xl:pb-25"
    >
      {/* LEFT CONTENT - SAME ALIGNMENT AS OTHER SECTIONS */}
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">

          <div className="relative min-w-0">
            {/* LABEL */}
            <div className="mb-5 flex items-center gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                {data.label}
              </span>
              <span className="h-[2px] w-12 bg-red-600" />
            </div>

            {/* HEADING */}
            <h2 className="section-heading max-w-[620px]">
              {data.headingStart}{" "}
              <span className="text-brand-blue">
                {data.headingHighlight}
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[590px] text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
              {data.description}
            </p>

            {/* VALUES */}
            <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4 xl:gap-6">
              {aboutValues.map(({ title, description, Icon }, index) => (
                <div
                  key={title}
                  className={`flex min-w-0 items-start gap-3 ${
                    index > 0
                      ? "sm:border-l sm:border-slate-200 sm:pl-4 xl:pl-5"
                      : ""
                  }`}
                >
                  <Icon
                    aria-hidden="true"
                    className="mt-0.5 h-7 w-7 shrink-0 text-[#102c59] xl:h-8 xl:w-8"
                    strokeWidth={1.6}
                  />

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold leading-5 text-[#102c59] xl:text-[15px]">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-5 text-slate-500 xl:text-[13px]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={data.cta.href}
              className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold text-[#102c59] transition-colors duration-300 hover:text-red-600"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600 text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={19} strokeWidth={1.7} />
              </span>

              <span>{data.cta.label}</span>

              <span className="h-px w-10 bg-red-500 transition-all duration-300 group-hover:w-16" />
            </a>
          </div>

          {/* RESERVED SPACE FOR RIGHT IMAGE */}
          <div className="hidden lg:block" />

        </div>
      </Container>

      {/* RIGHT IMAGE - UNCHANGED POSITIONING */}
      <div className="absolute inset-y-0 right-[-48px] hidden w-[55%] lg:block">
        <Image
          src={data.image.src}
          alt={data.image.alt}
          fill
          priority
          sizes="50vw"
          className="object-contain object-right"
        />
      </div>
    </section>
  );
}
