
"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { PageHeroContent } from "./types";

export default function PageHero({
  name,
  tagline,
  description,
  image,
  imageAlt,
  ctaLabel = "Contact us",
  ctaHref = "#enquiry",
  metadata,
}: PageHeroContent) {
  const [navbarVariant, setNavbarVariant] = useState<"light" | "dark">("dark");

  const heroRef = useRef<HTMLElement>(null);

  // Navbar theme based on hero scroll position
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const updateNavbar = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;

      setNavbarVariant((current) => {
        const next = heroBottom <= 0 ? "light" : "dark";
        return current === next ? current : next;
      });
    };

    updateNavbar();

    window.addEventListener("scroll", updateNavbar, {
      passive: true,
    });

    window.addEventListener("resize", updateNavbar);

    return () => {
      window.removeEventListener("scroll", updateNavbar);
      window.removeEventListener("resize", updateNavbar);
    };
  }, []);

  return (
    <>
      {/* Global Navbar */}
      <Navbar variant={navbarVariant} />

      <section
        ref={heroRef}
        className="relative isolate min-h-[540px] overflow-hidden bg-[#081a35] text-white lg:min-h-[640px]"
      >
        {/* Background */}
        <Image
          src={image}
          alt={imageAlt ?? name}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07162d]/95 via-[#0a2040]/80 to-[#0a2040]/30" />

        {/* Hero Content */}
        <div className="mx-auto flex min-h-[540px] w-full max-w-[1440px] items-end px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[640px] lg:px-12 lg:py-24">
          <div className="w-full max-w-[900px]">

            {/* Tagline */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="h-[2px] w-10 bg-red-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                {tagline}
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[900px] font-heading text-3xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              {name}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[700px] text-base leading-8 text-slate-200 sm:text-lg">
              {description}
            </p>

            {/* CTA */}
            {ctaLabel && ctaHref && (
              <Link
                href={ctaHref}
                className="mt-8 inline-flex items-center gap-3 rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-500 hover:bg-red-700"
              >
                {ctaLabel}
                <ArrowRight size={18} />
              </Link>
            )}

            {/* Metadata */}
            {metadata && metadata.length > 0 && (
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
                {metadata.map((item, index) => (
                  <span
                    key={`${item.label}-${index}`}
                    className="inline-flex items-center gap-2"
                  >
                    <span className="text-red-400">{item.icon}</span>
                    <span>{item.value}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 h-1 w-32 bg-red-600 sm:w-48" />
      </section>
    </>
  );
}
