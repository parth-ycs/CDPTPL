"use client";

import { useMemo, useState } from "react";

import PageHero from "@/components/shared-page/PageHero";
import PageOverview from "@/components/shared-page/PageOverview";
import Footer from "@/components/footer";

import BlogCard from "@/components/blogs/sections/BlogCard";
import TrendingBlogs from "@/components/blogs/sections/TrendingBlogs";

import { blogsPageData, type BlogPost } from "@/data/blogs";

interface BlogsProps {
  blogs: BlogPost[];
  categories: string[];
  trending: BlogPost[];
}

export default function Blogs({ blogs, categories: dbCategories, trending }: BlogsProps) {
  const { hero, overview, section } = blogsPageData;

  const categories = useMemo(
    () => [section.allCategoriesLabel, ...dbCategories],
    [section.allCategoriesLabel, dbCategories],
  );

  const [activeCategory, setActiveCategory] = useState(
    section.allCategoriesLabel,
  );
  const [query, setQuery] = useState("");

  const isFiltering =
    activeCategory !== section.allCategoriesLabel || query.trim() !== "";

  const filteredBlogs = useMemo(() => {
    const term = query.trim().toLowerCase();

    return blogs.filter((blog) => {
      const matchesCategory =
        activeCategory === section.allCategoriesLabel ||
        blog.category === activeCategory;

      const matchesQuery =
        term === "" ||
        [blog.title, blog.excerpt, blog.category]
          .join(" ")
          .toLowerCase()
          .includes(term);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, blogs, query, section.allCategoriesLabel]);

  // The latest post is featured only on the unfiltered view
  const featured = !isFiltering ? filteredBlogs[0] : undefined;
  const feed = featured ? filteredBlogs.slice(1) : filteredBlogs;

  return (
    <main className="bg-white text-ink">
      <PageHero
        name={hero.heading}
        tagline={hero.eyebrow}
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blogs" }]}
        ctaLabel="Explore Articles"
        ctaHref="#articles"
      />

      <PageOverview
        heading={overview.heading}
        description={overview.description}
      />

      <section
        id="articles"
        className="scroll-mt-24 border-t border-line py-20 md:py-24"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          {/* Header */}
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-caption font-semibold uppercase tracking-[0.18em] text-brand-blue">
                {section.eyebrow}
              </p>

              <h2 className="font-heading text-h2 font-bold text-brand-deep">
                {section.heading}
              </h2>

              <p className="mt-3 max-w-xl text-body text-muted">
                {section.description}
              </p>
            </div>

            {blogs.length > 0 && (
              <div className="relative w-full md:w-72">
                <svg
                  viewBox="0 0 24 24"
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={section.searchPlaceholder}
                  aria-label={section.searchPlaceholder}
                  className="w-full rounded-full border border-line bg-white py-2.5 pl-11 pr-4 text-small text-ink outline-none transition-colors placeholder:text-muted focus:border-brand-blue"
                />
              </div>
            )}
          </div>

          {/* Category chips */}
          {blogs.length > 0 && (
            <div
              className="mb-12 flex gap-2 overflow-x-auto border-b border-line pb-5"
              role="tablist"
              aria-label="Article categories"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  role="tab"
                  aria-selected={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-small transition-colors ${
                    activeCategory === category
                      ? "border-brand-blue bg-brand-blue text-white"
                      : "border-line text-muted hover:border-brand-blue hover:text-brand-blue"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {/* Feed + sidebar */}
          {filteredBlogs.length > 0 ? (
            <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div>
                {featured && (
                  <div className="mb-12">
                    <BlogCard blog={featured} variant="featured" />
                  </div>
                )}

                <div>
                  {feed.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} variant="row" />
                  ))}
                </div>
              </div>

              <div className="hidden lg:block">
                <TrendingBlogs blogs={trending} />
              </div>
            </div>
          ) : (
            <div className="border-y border-line py-24 text-center">
              <p className="font-heading text-h3 font-semibold text-brand-deep">
                {blogs.length === 0
                  ? section.emptyMessage
                  : section.noResultsMessage}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}