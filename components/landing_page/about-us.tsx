
"use client";

import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Settings2,
  Sprout,
  UsersRound,
  Factory,
  Globe2,
  Award,
} from "lucide-react";

const values = [
  {
    title: "Safety First",
    description: "In everything we do",
    Icon: ShieldCheck,
  },
  {
    title: "Engineering Excellence",
    description: "End-to-end capabilities",
    Icon: Settings2,
  },
  {
    title: "Sustainable Growth",
    description: "For a cleaner and greener future",
    Icon: Sprout,
  },
];

const metrics = [
  { value: "600+", label: "Employees", Icon: UsersRound },
  {
    value: "217K",
    suffix: "sq. ft.",
    label: "Fabrication facility",
    detail: "at Mundra, Pune",
    Icon: Factory,
  },
  { value: "590+", label: "Projects worldwide", Icon: Globe2 },
  {
    value: "37+",
    label: "Years of global existence",
    detail: "In India since 2010",
    Icon: Award,
  },
];

export default function AboutUsSection() {
  return (
    <section
      id="about-us"
      className="relative bg-white py-10 sm:py-14 lg:py-16 mt-[-50]"
    >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">        <div className="grid min-w-0 grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-0">          {/* LEFT: Content */}
          <div className="relative z-10 min-w-0 lg:pr-8">
            <div className="mb-5 flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                About Us
              </span>
              <span className="h-[2px] w-12 bg-red-600" />
            </div>

            <h2 className="text-4xl font-bold leading-[1.04] tracking-tight text-[#102c59] sm:text-5xl lg:text-5xl xl:text-5xl [font-family:'Noa_Voren']">
              Who We <span className="text-red-600">Are</span>
            </h2>

            <p className="mt-5 max-w-[650px] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              At Chemdist, we combine deep engineering expertise,
              advanced technology and proven execution capabilities
              to deliver integrated process solutions for a safer,
              cleaner and more sustainable world.
            </p>

            {/* Core values */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-0">
              {values.map(({ title, description, Icon }, index) => (
                <div
                  key={title}
                  className={`flex min-w-0 items-start gap-3 sm:px-3 xl:px-4 ${
                    index === 0
                      ? "sm:pl-0"
                      : "sm:border-l sm:border-slate-300"
                  }`}
                >
                  <Icon
                    aria-hidden="true"
                    className="mt-0.5 h-8 w-8 shrink-0 text-[#102c59] sm:h-8 sm:w-8 xl:h-9 xl:w-9"
                    strokeWidth={1.7}
                  />

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold leading-5 text-[#102c59] sm:text-sm xl:text-base">
                      {title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-xs xl:text-sm">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Our Journey */}
            <a
              href="/about"
              className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#102c59] transition-colors hover:text-red-600"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white transition-transform group-hover:translate-x-1">
                <ArrowRight size={20} />
              </span>
              Our Journey
              <span className="h-px w-12 bg-red-500 transition-all group-hover:w-20" />
            </a>
          </div>
        </div>

        {/* KPI BAR: below both content and image */}
        <div className="max-w-[1440px] relative z-10 mt-10 ">
          <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-slate-300/40 bg-[#414e56] text-white sm:grid-cols-4">
            {metrics.map(
              ({ value, suffix, label, detail, Icon }, index) => (
                <div
                  key={label}
                  className={`flex min-w-0 items-center gap-2 px-3 py-4 sm:gap-3 sm:px-4 sm:py-5 lg:gap-4 lg:px-5 xl:px-7 ${
                    index % 2 === 1
                      ? "border-l border-white/30"
                      : ""
                  } ${
                    index > 1
                      ? "border-t border-white/30 sm:border-t-0"
                      : ""
                  } ${
                    index > 0
                      ? "sm:border-l sm:border-white/30"
                      : ""
                  }`}
                >
                  <Icon
                    aria-hidden="true"
                    className="h-6 w-6 shrink-0 sm:h-8 sm:w-8 lg:h-9 lg:w-9"
                    strokeWidth={1.6}
                  />

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-1">
                      <span className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                        {value}
                      </span>

                      {suffix && (
                        <span className="text-[10px] font-medium sm:text-xs lg:text-sm">
                          {suffix}
                        </span>
                      )}
                    </div>

                    <p className="mt-1 text-[10px] font-medium leading-4 sm:text-xs lg:text-sm">
                      {label}
                    </p>

                    {detail && (
                      <p className="text-[9px] leading-3 text-white/80 sm:text-[10px] lg:text-xs">
                        {detail}
                      </p>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      {/* RIGHT: Image */}
<div className="relative min-w-0 lg:static hidden lg:block">
  <div className="relative h-[250px] w-full sm:h-[350px] lg:pointer-events-none lg:absolute lg:bottom-43 lg:left-0 lg:right-[calc((1440px-100vw)/2+48px)] lg:top-0 lg:h-auto">
    <Image
      src="/images/about-us/image.png"
      alt="Chemdist industrial process plant"
      fill
      priority
      sizes="(max-width: 1023px) 100vw, 55vw"
      className="object-contain object-right-bottom scale-95 origin-bottom-right"
    />
  </div>
</div>
    </section>
  );
}
