import Image from "next/image";
import Link from "next/link";

import PageHero from "@/components/shared-page/PageHero";
import Enquiry from "@/components/enquiry";
import Footer from "@/components/footer";
import Container from "@/components/container";
import { blogsPageData, type BlogPost } from "@/data/blogs";

interface BlogProps {
  blog: BlogPost;
}

export default function Blog({ blog }: BlogProps) {
  const { detail, blogs } = blogsPageData;

  const relatedBlogs = blogs
    .filter(
      (item) =>
        item.id !== blog.id && item.category === blog.category,
    )
    .slice(0, 3);

  return (
    <main className="bg-white text-ink">
      <PageHero
        name={blog.title}
        tagline={blog.category}
        description={blog.excerpt}
        image={blog.image}
        imageAlt={blog.imageAlt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blogs" },
          { label: blog.title },
        ]}
        ctaLabel={detail.backLabel}
        ctaHref="/blogs"
      />
      <Container>

      <article>
        <div className="mx-auto max-w-[850px] px-6 lg:px-8">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-y border-line py-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                WRITTEN BY
              </p>
              <p className="mt-1 text-sm font-semibold text-brand-deep">
                {blog.author}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                PUBLISHED
              </p>
              <time
                dateTime={blog.publishedAt}
                className="mt-1 block text-sm text-brand-deep"
              >
                {new Date(blog.publishedAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                READING TIME
              </p>
              <p className="mt-1 text-sm text-brand-deep">
                {blog.readTime}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {blog.content.map((block, index) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p
                      key={index}
                      className="text-base leading-8 text-muted md:text-[17px] md:leading-9"
                    >
                      {block.text}
                    </p>
                  );

                case "heading":
                  return (
                    <h2
                      key={index}
                      className="pt-6 font-heading text-2xl font-bold leading-tight text-brand-deep md:text-3xl"
                    >
                      {block.text}
                    </h2>
                  );

                case "list":
                  return (
                    <ul
                      key={index}
                      className="list-disc space-y-3 pl-6 text-base leading-8 text-muted md:text-[17px]"
                    >
                      {block.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  );

                case "quote":
                  return (
                    <blockquote
                      key={index}
                      className="border-l-2 border-brand-blue bg-pale px-6 py-7 md:px-9"
                    >
                      <p className="font-heading text-xl font-semibold leading-relaxed text-brand-deep md:text-2xl">
                        {block.text}
                      </p>

                      {block.attribution && (
                        <cite className="mt-4 block text-sm not-italic text-muted">
                          — {block.attribution}
                        </cite>
                      )}
                    </blockquote>
                  );

                case "image":
                  return (
                    <figure key={index} className="py-4">
                      <div className="relative aspect-[16/9] overflow-hidden bg-pale">
                        <Image
                          src={block.src}
                          alt={block.alt}
                          fill
                          sizes="(max-width: 850px) 100vw, 850px"
                          className="object-cover"
                        />
                      </div>

                      {block.caption && (
                        <figcaption className="mt-3 text-center text-xs text-muted">
                          {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  );

                default:
                  return null;
              }
            })}
          </div>

          <div className="mt-16 border-t border-line pt-8">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-3 text-sm font-semibold text-brand-blue transition-all hover:gap-4"
            >
              ← {detail.backLabel}
            </Link>
          </div>
        </div>
      </article>

      {relatedBlogs.length > 0 && (
        <section className="border-t border-line bg-pale pt-20 md:pt-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="mb-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
                KEEP EXPLORING
              </p>

              <h2 className="font-heading text-3xl font-bold text-brand-deep md:text-4xl">
                {detail.relatedHeading}
              </h2>

              <p className="mt-3 text-sm text-muted md:text-base">
                {detail.relatedDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedBlogs.map((item) => (
                <Link
                  key={item.id}
                  href={`/blogs/${item.id}`}
                  className="group"
                >
                  <div className="relative mb-5 aspect-[4/3] overflow-hidden bg-white">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-blue">
                    {item.category}
                  </p>

                  <h3 className="font-heading text-xl font-bold leading-snug text-brand-deep transition-colors group-hover:text-brand-blue">
                    {item.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-sm leading-7 text-muted">
                    {item.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      </Container>
      <Enquiry />
      <Footer />
    </main>
  );
}