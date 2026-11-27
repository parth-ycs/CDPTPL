"use client";

import { useMemo, useState } from "react";

import PageHero from "@/components/shared-page/PageHero";
import Enquiry from "@/components/enquiry";
import Footer from "@/components/footer";
import Container from "@/components/container";
import { newsPageData, type NewsItem } from "@/data/media";

function NewsCard({ item }: { item: NewsItem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group min-w-0">
      {/* Image */}
      <a
        href={item.href}
        aria-label={item.title}
        className="mb-4 block aspect-[4/3] overflow-hidden bg-pale"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </a>

      {/* Metadata */}
      <div className="flex flex-wrap items-center gap-2 text-caption font-semibold uppercase tracking-[0.1em]">
        <span className="text-brand-blue">{item.category}</span>
        <span className="text-[#aeb5be]">/</span>
        <time className="text-muted">{item.date}</time>
      </div>

      {/* Title */}
      <h3
        className={`mt-2 font-heading text-h3 font-bold tracking-tight text-brand-deep ${
          expanded ? "" : "line-clamp-2"
        }`}
      >
        {item.title}
      </h3>

      {/* Location */}
      <p className="mt-2 text-caption font-medium uppercase tracking-[0.08em] text-muted">
        {item.location}
      </p>

      {/* Description */}
      {item.description && (
        <p
          className={`mt-3 text-small text-muted ${
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
        className="mt-3 inline-flex items-center gap-2 text-small font-semibold text-brand-blue transition-colors hover:text-brand-deep"
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

export default function News({ items }: { items: NewsItem[] }) {
  const { hero, listing } = newsPageData;

  const categories = useMemo(
    () => [
      listing.allCategoriesLabel,
      ...Array.from(new Set(items.map((item) => item.category))),
    ],
    [items, listing.allCategoriesLabel],
  );

  const [activeCategory, setActiveCategory] = useState(
    listing.allCategoriesLabel,
  );

  const filteredNews = useMemo(() => {
    if (activeCategory === listing.allCategoriesLabel) {
      return items;
    }

    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items, listing.allCategoriesLabel]);

  return (
    <main className="bg-white text-ink">
      <PageHero
        name={hero.heading}
        tagline={hero.eyebrow}
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Media" }]}
        ctaLabel="Explore News"
        ctaHref="#news-listing"
      />
      <Container>
        <section id="news-listing" className="scroll-mt-24">
          <div className="mx-auto max-w-[1500px]">
            {/* Heading */}
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-caption font-semibold uppercase tracking-[0.18em] text-brand-blue">
                  {listing.eyebrow}
                </p>

                <h2 className="font-heading text-h1 font-bold tracking-tight text-brand-deep">
                  {listing.heading}
                </h2>

                <p className="mt-3 max-w-xl text-body text-muted">
                  {listing.description}
                </p>
              </div>

              <p className="text-caption font-medium uppercase tracking-wider text-muted">
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
                  className={`text-small transition-colors ${
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
              <div className="py-20 text-center text-small text-muted">
                {listing.emptyMessage}
              </div>
            )}
          </div>
        </section>
      </Container>
      <Enquiry />
      <Footer />
    </main>
  );
}