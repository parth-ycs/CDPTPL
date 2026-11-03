
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import BrandCarouselButtons from "@/components/ui/BrandCarouselButtons";
import { featuredTechnologies } from "@/data/featuredTechnologies";
import Container from "@/components/container";

export default function FeaturedTechnologies() {
  const [index, setIndex] = useState(0);

  if (featuredTechnologies.length === 0) return null;

  const product = featuredTechnologies[index];
  const image = product.imageLayout;

  function selectItem(nextIndex: number) {
    setIndex(
      (nextIndex + featuredTechnologies.length) %
        featuredTechnologies.length
    );
  }

  return (
    <section className="overflow-hidden bg-white">
      <Container>
        {/* SECTION HEADING */}
        <div className="mb-10 flex items-center justify-between gap-8">
          <div className="max-w-3xl">
            <h2 id="rd-heading" className="section-heading max-w-[620px]">
              Featured<span className="text-brand-blue"> Solutions</span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
              Selected technology highlights and product/solution
              categories with strong cross-linking to SBU pages.
            </p>
          </div>

          <div className="shrink-0">
            <BrandCarouselButtons
              onPrevious={() => selectItem(index - 1)}
              onNext={() => selectItem(index + 1)}
              aria-label="Featured product navigation"
            />
          </div>
        </div>

        {/* PRODUCT SHOWCASE */}
        <div
          className="relative isolate min-h-[440px] lg:min-h-[460px]"
          aria-live="polite"
        >
          {/* INFORMATION CARD */}
          <article
            key={product.id}
            className="relative z-[1] w-full rounded-2xl border border-slate-200
              bg-white/95 p-6 shadow-sm backdrop-blur-sm
              lg:min-h-[330px] lg:w-[58%] lg:p-9"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-red-600">
              {product.category}
            </p>

            <h3 className="max-w-md text-2xl font-semibold leading-tight text-slate-900 md:text-3xl">
              {product.name}
            </h3>

            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600">
              {product.description}
            </p>

            <ul className="mt-5 space-y-2">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-red-600"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href={product.href}
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-blue-700"
            >
              Explore solution
              <span aria-hidden="true">↗</span>
            </Link>
          </article>

          {/* PRODUCT IMAGE */}
<div
  key={product.image}
  className="
    absolute z-[2] overflow-visible

    max-lg:!relative
    max-lg:!top-auto
    max-lg:!right-auto
    max-lg:!mt-6
    max-lg:!w-full
    max-lg:!max-w-full
    max-lg:!transform-none
  "
  style={{
    width: image.width,
    aspectRatio: image.aspectRatio,
    right: image.right,
    top: image.top,
    transform: `translateY(${image.translateY})`,
  }}
>
  <Image
    src={product.image}
    alt={product.name}
    fill
    priority={index === 0}
    sizes="(max-width: 1023px) 100vw, 52vw"
    className="pointer-events-none object-contain"
  />
</div>
        </div>
      </Container>
    </section>
  );
}
