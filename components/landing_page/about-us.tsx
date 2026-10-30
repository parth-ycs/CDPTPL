
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { aboutSectionData, aboutValues } from "@/data/about";

export default function AboutUsSection() {
  const data = aboutSectionData;

  return (
    <section
      id="about-us"
      className="relative overflow-hidden bg-white sm:pb-15 lg:pb-18 xl:pb-25"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="relative z-10 min-w-0">
            <div className="mb-5 flex items-center gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                {data.label}
              </span>
              <span className="h-[2px] w-12 bg-red-600" />
            </div>

            <h2 className="section-heading max-w-[620px]">
              {data.headingStart}{" "}
              <span className="text-brand-blue">
                {data.headingHighlight}
              </span>
            </h2>

            <p className="mt-6 max-w-[590px] text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
              {data.description}
            </p>

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

          <div className="relative hidden min-w-0 lg:block">
            <div className="relative h-[430px] w-full xl:h-[510px]">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                fill
                priority
                sizes="(min-width: 1280px) 48vw, 50vw"
                className="object-contain object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
