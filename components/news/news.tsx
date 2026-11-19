
"use client";

import { useMemo, useState } from "react";

import PageHero from "@/components/shared-page/PageHero";
import PageOverview from "@/components/shared-page/PageOverview";
import Enquiry from "@/components/enquiry";
import Footer from "@/components/footer";

import { newsItems, newsPageData } from "@/data/news";

function NewsCard({
  item,
}: {
  item: (typeof newsItems)[number];
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group min-w-0">
      {/* Image */}
      <a
        href={item.href}
        aria-label={item.title}
        className="mb-4 block aspect-[4/3] overflow-hidden bg-pale"
      >
        <img
          src={item.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </a>

      {/* Metadata */}
      <div className="flex flex-wrap items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.1em]">
        <span className="text-brand-blue">{item.category}</span>
        <span className="text-[#aeb5be]">/</span>
        <time className="text-muted">{item.date}</time>
      </div>

      {/* Title */}
      <h3
        className={`mt-2 font-heading text-[17px] font-bold leading-[1.25] tracking-tight text-brand-deep ${
          expanded ? "" : "line-clamp-2"
        }`}
      >
        {item.title}
      </h3>

      {/* Location */}
      <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.08em] text-muted">
        {item.location}
      </p>

      {/* Description */}
      {item.description && (
        <p
          className={`mt-3 text-[12px] leading-[1.7] text-muted ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {item.description}
        </p>
      )}

      {/* Expand / Collapse */}
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
        className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold text-brand-blue transition-colors hover:text-brand-deep"
      >
        {expanded ? "Read less" : "Read more"}

        <svg
          viewBox="0 0 20 20"
          fill="none"
          className={`h-3.5 w-3.5 transition-transform duration-300 ${
            expanded ? "-rotate-90" : ""
          }`}
        >
          <path
            d="M4 10h12m-5-5 5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </article>
  );
}

export default function News() {
  const { hero, listing } = newsPageData;

  const categories = useMemo(
    () => [
      listing.allCategoriesLabel,
      ...Array.from(new Set(newsItems.map((item) => item.category))),
    ],
    [listing.allCategoriesLabel],
  );

  const [activeCategory, setActiveCategory] = useState(
    listing.allCategoriesLabel,
  );

  const filteredNews = useMemo(() => {
    if (activeCategory === listing.allCategoriesLabel) {
      return newsItems;
    }

    return newsItems.filter(
      (item) => item.category === activeCategory,
    );
  }, [activeCategory, listing.allCategoriesLabel]);

  return (
    <main className="bg-white text-ink">
      <PageHero
        name={hero.heading}
        tagline={hero.eyebrow}
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Media & News" },
        ]}
        ctaLabel="Explore News"
        ctaHref="#news-listing"
      />

      <section
        id="news-listing"
        className="scroll-mt-24 border-t border-line py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">

          {/* Heading */}
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue">
                {listing.eyebrow}
              </p>

              <h2 className="font-heading text-3xl font-bold tracking-tight text-brand-deep md:text-4xl">
                {listing.heading}
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
                {listing.description}
              </p>
            </div>

            <p className="text-[11px] font-medium uppercase tracking-wider text-muted">
              {String(filteredNews.length).padStart(2, "0")} Articles
            </p>
          </div>

          {/* Category filters */}
          <div className="mb-10 flex flex-wrap gap-x-6 gap-y-3 border-b border-line pb-4">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`text-xs transition-colors ${
                  activeCategory === category
                    ? "font-semibold text-brand-blue"
                    : "text-muted hover:text-brand-deep"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* News grid */}
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredNews.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-sm text-muted">
              {listing.emptyMessage}
            </div>
          )}

        </div>
      </section>

      <Enquiry />
      <Footer />
    </main>
  );
}
