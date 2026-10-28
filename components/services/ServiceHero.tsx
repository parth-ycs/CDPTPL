"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import Navbar from "@/components/navbar";
import Container from "@/components/container";
import sbus, { serviceHref } from "@/data/sbus/sbus";
import type { ServiceHeroContent } from "./types";

type ServiceHeroProps = ServiceHeroContent & {
  /** Image shown below the text (rounded banner) */
  image?: string;
  imageAlt?: string;
  /** CTA button */
  ctaLabel?: string;
  ctaHref?: string;
};

export default function ServiceHero({
  name,
  tagline,
  description,
  image = "/images/Hero_BG.png",
  imageAlt,
  ctaLabel = "Contact us",
  ctaHref = "#contact",
}: ServiceHeroProps) {
  const pathname = usePathname();
  const [childMenuOpen, setChildMenuOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  const currentSlug = pathname.split("/").filter(Boolean).at(-1) ?? "";
  const currentSBU = sbus.find((sbu) =>
    sbu.children.some((child) => child.slug === currentSlug)
  );
  const childPages = currentSBU?.children ?? [];

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        switcherRef.current &&
        !switcherRef.current.contains(event.target as Node)
      ) {
        setChildMenuOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setChildMenuOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="bg-white text-brand-deep">
      {/* Navbar sits in a dark bar so it stays readable on the white page.
          Remove this wrapper if your Navbar already handles its own background. */}
      <header className="relative h-[80px] bg-brand-deep">
        <Navbar />
      </header>

      <Container className="pt-8 pb-12 lg:pb-16">
        {/* Breadcrumb and child-page switcher */}
        <div className="flex flex-col gap-4 border-b border-line pb-4 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Breadcrumb" className="min-w-0 text-sm text-brand-deep/70">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand-deep">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link href="/services" className="hover:text-brand-deep">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="font-semibold text-brand-deep">
                {name}
              </li>
            </ol>
          </nav>

          {currentSBU && childPages.length > 1 && (
            <div ref={switcherRef} className="relative w-full sm:w-auto sm:min-w-[300px] sm:max-w-[440px]">
              <button
                type="button"
                aria-expanded={childMenuOpen}
                aria-haspopup="listbox"
                onClick={() => setChildMenuOpen((open) => !open)}
                className="flex w-full items-center justify-between gap-4 px-1 py-3 text-left text-sm text-brand-deep transition-colors hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
              >
                <span className="min-w-0 truncate">
                  <span className="font-medium">{currentSBU.name}</span>
                  <span className="px-1.5 text-muted">:</span>
                  <span>{name}</span>
                </span>
                <ChevronDown
                  size={16}
                  aria-hidden="true"
                  className={`shrink-0 text-brand-red transition-transform duration-200 ${
                    childMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {childMenuOpen && (
                <ul
                  role="listbox"
                  aria-label={`${currentSBU.name} pages`}
                  className="absolute right-0 top-full z-40 mt-1 max-h-72 w-full overflow-y-auto border border-line bg-white shadow-[0_16px_36px_rgba(0,0,0,0.12)]"
                >
                  {childPages.map((child) => {
                    const isCurrent = child.slug === currentSlug;

                    return (
                      <li key={child.slug} role="option" aria-selected={isCurrent}>
                        <Link
                          href={serviceHref(child.slug)}
                          onClick={() => setChildMenuOpen(false)}
                          aria-current={isCurrent ? "page" : undefined}
                          className={`flex items-center justify-between border-b border-line px-4 py-3.5 text-sm transition-colors last:border-b-0 hover:bg-pale hover:text-brand-red ${
                            isCurrent
                              ? "font-semibold text-brand-red"
                              : "text-brand-deep"
                          }`}
                        >
                          <span>{child.hero.name}</span>
                          {isCurrent && (
                            <span className="ml-3 shrink-0 text-xs font-medium text-muted">
                              Current page
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          )}
        </div>

        {/* Centered text block */}
        <div className="mx-auto mt-12 flex max-w-[920px] flex-col items-center text-center lg:mt-16">
          <span className="text-sm font-medium uppercase tracking-wider text-emerald-700">
            {tagline}
          </span>

          <h1 className="mt-6 font-heading text-[clamp(36px,6vw,80px)] leading-[1.05] font-semibold tracking-tight">
            {name}
          </h1>

          <p className="mt-8 max-w-[620px] text-base leading-[1.65] text-brand-deep/75 sm:text-lg">
            {description}
          </p>

          <Link
            href={ctaHref}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-emerald-800"
          >
            <span aria-hidden="true">→</span>
            {ctaLabel}
          </Link>
        </div>

        {/* Image banner */}
        <div className="mt-12 overflow-hidden rounded-3xl lg:mt-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt ?? name}
            className="h-[240px] w-full object-cover sm:h-[360px] lg:h-[480px]"
          />
        </div>
      </Container>
    </section>
  );
}
