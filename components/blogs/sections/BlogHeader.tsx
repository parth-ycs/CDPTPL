import Link from "next/link";

import {
  blogsPageData,
  formatBlogDate,
  getReadTime,
  type BlogPost,
} from "@/data/blogs";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function BlogHeader({ blog }: { blog: BlogPost }) {
  return (
    <header className="mb-8">
      <Link
        href="/blogs"
        className="mb-10 inline-flex items-center gap-2 text-small font-semibold text-muted transition-all hover:gap-3 hover:text-brand-blue"
      >
        ← {blogsPageData.detail.backLabel}
      </Link>

      <p className="mb-4 text-caption font-semibold uppercase tracking-[0.18em] text-brand-blue">
        {blog.category}
      </p>

      <h1 className="font-heading text-[clamp(2rem,4.6vw,3.25rem)] font-bold leading-[1.12] text-brand-deep">
        {blog.title}
      </h1>

      <p className="mt-5 text-lead text-muted">{blog.excerpt}</p>

      <div className="mt-8 flex items-center gap-4">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-deep text-small font-semibold text-white"
          aria-hidden="true"
        >
          {initials(blog.author.name)}
        </span>

        <div>
          <p className="text-small font-semibold text-brand-deep">
            {blog.author.name}
          </p>
          <p className="text-caption text-muted">
            {blog.author.role} · {formatBlogDate(blog.publishedAt)} ·{" "}
            {getReadTime(blog.content)}
          </p>
        </div>
      </div>
    </header>
  );
}