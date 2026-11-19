"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import PageHero from "@/components/shared-page/PageHero";
import PageOverview from "@/components/shared-page/PageOverview";
import Enquiry from "@/components/enquiry";
import Footer from "@/components/footer";

import { blogsPageData } from "@/data/blogs";

export default function Blogs() {
  const { hero, overview, section, blogs } = blogsPageData;

  const categories = [
    section.allCategoriesLabel,
    ...Array.from(new Set(blogs.map((blog) => blog.category))),
  ];

  const [activeCategory, setActiveCategory] = useState(
    section.allCategoriesLabel,
  );

  const filteredBlogs = useMemo(() => {
    if (activeCategory === section.allCategoriesLabel) {
      return blogs;
    }

    return blogs.filter((blog) => blog.category === activeCategory);
  }, [activeCategory, blogs, section.allCategoriesLabel]);

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
          { label: "Blogs" },
        ]}
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
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
                THE JOURNAL
              </p>

              <h2 className="font-heading text-3xl font-bold tracking-tight text-brand-deep md:text-4xl">
                {section.heading}
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-muted md:text-base">
                {section.description}
              </p>
            </div>

            {blogs.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`border px-4 py-2 text-sm transition-colors ${
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
          </div>

          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {filteredBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blogs/${blog.id}`}
                  className="group block"
                >
                  <div className="relative rounded-lg mb-6 aspect-[4/3] overflow-hidden bg-pale">
                    <Image
                      src={blog.image}
                      alt={blog.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted">
                    <span className="font-semibold uppercase tracking-wider text-brand-blue">
                      {blog.category}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-line" />

                    <time dateTime={blog.publishedAt}>
                      {new Date(blog.publishedAt).toLocaleDateString(
                        "en-IN",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        },
                      )}
                    </time>
                  </div>

                  <h3 className="mb-3 font-heading text-xl font-bold leading-snug text-brand-deep transition-colors group-hover:text-brand-blue md:text-2xl">
                    {blog.title}
                  </h3>

                  <p className="mb-5 line-clamp-3 text-sm leading-7 text-muted">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between border-t border-line pt-4">
                    <span className="text-xs text-muted">
                      {blog.readTime}
                    </span>

                    <span className="text-sm font-semibold text-brand-blue transition-transform group-hover:translate-x-1">
                      {section.readMoreLabel} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="border-y border-line py-24 text-center">
              <p className="font-heading text-xl font-semibold text-brand-deep">
                {section.emptyMessage}
              </p>
            </div>
          )}
        </div>
      </section>

      <Enquiry />
      <Footer />
    </main>
  );
}