
"use client";

import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Settings2,
  Sprout,
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

export default function AboutUsSection() {
  return (
    <section
      id="about-us"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* LEFT: Content */}
          <div className="relative z-10 min-w-0">
            {/* Section label */}
            <div className="mb-5 flex items-center gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                About Us
              </span>

              <span className="h-[2px] w-12 bg-red-600" />
            </div>

            {/* Heading */}
            <h2
              id="about-heading"
              className="section-heading max-w-[620px]"
            >
              Who We <span className="text-brand-blue">Are</span>
            </h2>

            {/* Introduction */}
            <p className="mt-6 max-w-[590px] text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
              At Chemdist, we combine deep engineering expertise,
              advanced technology and proven execution capabilities
              to deliver integrated process solutions for a safer,
              cleaner and more sustainable world.
            </p>

            {/* Core values */}
            <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4 xl:gap-6">
              {values.map(({ title, description, Icon }, index) => (
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

            {/* Our Journey */}
            <a
              href="/about"
              className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold text-[#102c59] transition-colors duration-300 hover:text-red-600"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600 text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={19} strokeWidth={1.7} />
              </span>

              <span>Our Journey</span>

              <span className="h-px w-10 bg-red-500 transition-all duration-300 group-hover:w-16" />
            </a>
          </div>

          {/* RIGHT: Industrial image */}
          <div className="relative hidden min-w-0 lg:block">
            <div className="relative h-[430px] w-full xl:h-[510px]">
              <Image
                src="/images/about-us/image.png"
                alt="Chemdist industrial process plant"
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
