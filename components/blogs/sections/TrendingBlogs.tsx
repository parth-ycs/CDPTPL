import Link from "next/link";

import { blogsPageData, formatBlogDate, type BlogPost } from "@/data/blogs";

export default function TrendingBlogs({ blogs }: { blogs: BlogPost[] }) {
  if (blogs.length === 0) return null;

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <h3 className="mb-6 text-caption font-semibold uppercase tracking-[0.18em] text-brand-deep">
        {blogsPageData.section.trendingHeading}
      </h3>

      <ol className="space-y-6">
        {blogs.map((blog, index) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`} className="group flex gap-4">
              <span className="font-heading text-h2 font-bold leading-none text-line">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="block">
                <span className="mb-1 block text-caption text-muted">
                  {blog.author.name} · {formatBlogDate(blog.publishedAt)}
                </span>
                <span className="block font-heading text-small font-bold leading-snug text-brand-deep transition-colors group-hover:text-brand-blue">
                  {blog.title}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </aside>
  );
}
