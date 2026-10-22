
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import BrandCarouselButtons from "@/components/ui/BrandCarouselButtons";
import { featuredTechnologies } from "@/data/featuredTechnologies";

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
    <section className="overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section heading */}
        <div className="mb-10 flex items-center justify-between gap-8">
          <div className="max-w-3xl">
            
            <h2 className="text-5xl font-semibold tracking-tight text-slate-900 md:text-4xl [font-family:'Noa_Voren']">
              Featured Technologies &amp; 
              <br/>
              <span className="text-brand-blue font-normal">Solutions</span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 md:text-base [font-family:'Bai_Jamjuree']">
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


        {/* Product showcase */}
        <div
          className="relative isolate min-h-[440px] md:min-h-[390px]"
          aria-live="polite"
        >
          {/* Information card */}
          <article
            key={product.id}
            className="relative z-[1] w-full rounded-2xl border border-slate-200
              bg-white/95 p-6 shadow-sm backdrop-blur-sm
              md:min-h-[330px] md:w-[58%] md:p-9 [font-family:'Bai_Jamjuree']"
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
          

          {/* Product image: independently positioned per product */}
          <Image
            key={product.image}
            src={product.image}
            alt={product.name}
            width={image.width}
            height={image.height}
            priority={index === 0}
            sizes="(max-width: 767px) 100vw, 55vw"
            className="pointer-events-none absolute max-w-none object-contain
              max-md:!relative max-md:!inset-auto max-md:!mt-5
              max-md:!block max-md:!h-auto max-md:!w-full
              max-md:!max-w-full"
            style={{
              width: `${image.width}px`,
              height: `${image.height}px`,
              right: `${image.right}px`,
              top: `${image.top}px`,
              transform: `translate(${image.translateX}px, ${image.translateY}px)`,
              zIndex: image.zIndex,
            }}
          />
        </div>

      </div>
    </section>
  );
}
