import Image from "next/image";
import Link from "next/link";

import {
  formatBlogDate,
  getCommentCount,
  getReadTime,
  type BlogPost,
} from "@/data/blogs";

interface BlogCardProps {
  blog: BlogPost;
  variant?: "featured" | "row" | "card";
}

function Stats({ blog }: { blog: BlogPost }) {
  return (
    <span className="flex items-center gap-4 text-caption text-muted">
      <span className="inline-flex items-center gap-1.5">
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
        </svg>
        {blog.likes}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
        {getCommentCount(blog.id)}
      </span>
    </span>
  );
}

export default function BlogCard({ blog, variant = "row" }: BlogCardProps) {
  const href = `/blogs/${blog.id}`;
  const readTime = getReadTime(blog.content);
  const date = formatBlogDate(blog.publishedAt);

  /* ---------------------------- Featured (top) ---------------------------- */
  if (variant === "featured") {
    return (
      <Link
        href={href}
        className="group grid items-center gap-8 border-b border-line pb-12 md:grid-cols-2"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-pale">
          <Image
            src={blog.image}
            alt={blog.imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div>
          <p className="mb-3 text-caption text-muted">
            <span className="font-semibold text-brand-deep">
              {blog.author.name}
            </span>{" "}
            · {date}
          </p>

          <h3 className="mb-4 font-heading text-h2 font-bold leading-tight text-brand-deep transition-colors group-hover:text-brand-blue">
            {blog.title}
          </h3>

          <p className="mb-6 line-clamp-3 text-body text-muted">
            {blog.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-pale px-3 py-1 text-caption font-semibold text-brand-blue">
              {blog.category}
            </span>
            <span className="text-caption text-muted">{readTime}</span>
            <Stats blog={blog} />
          </div>
        </div>
      </Link>
    );
  }

  /* ------------------------------ Vertical card --------------------------- */
  if (variant === "card") {
    return (
      <Link href={href} className="group block">
        <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-lg bg-white">
          <Image
            src={blog.image}
            alt={blog.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <p className="mb-2 text-caption font-semibold uppercase tracking-wider text-brand-blue">
          {blog.category}
        </p>

        <h3 className="font-heading text-h3 font-bold text-brand-deep transition-colors group-hover:text-brand-blue">
          {blog.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-small text-muted">
          {blog.excerpt}
        </p>

        <p className="mt-4 text-caption text-muted">
          {date} · {readTime}
        </p>
      </Link>
    );
  }

  /* --------------------------- Row (Medium feed) -------------------------- */
  return (
    <Link
      href={href}
      className="group flex items-start justify-between gap-6 border-b border-line py-8 first:pt-0 sm:gap-10"
    >
      <div className="min-w-0 flex-1">
        <p className="mb-2 text-caption text-muted">
          <span className="font-semibold text-brand-deep">
            {blog.author.name}
          </span>{" "}
          · {date}
        </p>

        <h3 className="mb-2 font-heading text-h3 font-bold leading-snug text-brand-deep transition-colors group-hover:text-brand-blue">
          {blog.title}
        </h3>

        <p className="mb-5 line-clamp-2 text-small text-muted">
          {blog.excerpt}
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="rounded-full bg-pale px-3 py-1 text-caption font-semibold text-brand-blue">
            {blog.category}
          </span>
          <span className="text-caption text-muted">{readTime}</span>
          <Stats blog={blog} />
        </div>
      </div>

      <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-md bg-pale sm:h-28 sm:w-40">
        <Image
          src={blog.image}
          alt={blog.imageAlt}
          fill
          sizes="160px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
      </div>
    </Link>
  );
}