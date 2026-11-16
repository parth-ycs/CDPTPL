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
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Single entrance reveal on load
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

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
    window.addEventListener("scroll", updateNavbar, { passive: true });
    window.addEventListener("resize", updateNavbar);

    return () => {
      window.removeEventListener("scroll", updateNavbar);
      window.removeEventListener("resize", updateNavbar);
    };
  }, []);

  const hasMetadata = metadata && metadata.length > 0;

  return (
    <>
      <Navbar variant={navbarVariant} />

      <section
        ref={heroRef}
        className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#081a35] text-white"
      >
        {/* Background image */}
        <Image
          src={image}
          alt={imageAlt ?? name}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center"
        />

        {/* Overlays: quiet, even tint + bottom-left depth for legibility */}
        <div className="absolute inset-0 -z-10 bg-[#07162d]/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07162d]/95 via-[#07162d]/45 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07162d]/70 via-transparent to-transparent" />

        {/* Main content (pushed to the bottom, below the navbar) */}
        <div className="mx-auto flex w-full max-w-[1440px] flex-1 items-end px-6 pb-12 pt-32 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
          <div
            className={`w-full max-w-[860px] transition-all duration-1000 ease-out motion-reduce:transition-none ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            {/* Tagline */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-red-500" />
              <span className="text-sm font-medium tracking-wide text-white/70">
                {tagline}
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {name}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[560px] text-base leading-relaxed text-white/75 sm:text-lg">
              {description}
            </p>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-3 rounded-full bg-white py-3 pl-7 pr-3 text-sm font-medium text-[#081a35] transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#081a35]"
              >
                {ctaLabel}
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#081a35] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Metadata strip */}
        {hasMetadata && (
          <div className="border-t border-white/15 bg-[#07162d]/30 backdrop-blur-sm">
            <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center gap-x-10 gap-y-3 px-6 py-5 text-sm text-white/80 sm:px-10 lg:px-16">
              {metadata.map((item, index) => (
                <span
                  key={`${item.label}-${index}`}
                  className="inline-flex items-center gap-2.5"
                >
                  <span className="text-red-400" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.value}</span>
                </span>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}