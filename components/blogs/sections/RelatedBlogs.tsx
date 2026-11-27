import BlogCard from "@/components/blogs/sections/BlogCard";

import { blogsPageData, type BlogPost } from "@/data/blogs";
import { getRelatedBlogs } from "@/lib/db/queries/blogs";

export default function RelatedBlogs({ blog }: { blog: BlogPost }) {
  const { detail } = blogsPageData;
  const related = getRelatedBlogs(blog.id, blog.category, 3);

  if (related.length === 0) return null;

  return (
    <section className="border-t border-line bg-pale py-20 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-12">
          <p className="mb-3 text-caption font-semibold uppercase tracking-[0.18em] text-brand-blue">
            KEEP EXPLORING
          </p>

          <h2 className="font-heading text-h2 font-bold text-brand-deep">
            {detail.relatedHeading}
          </h2>

          <p className="mt-3 text-body text-muted">
            {detail.relatedDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <BlogCard key={item.id} blog={item} variant="card" />
          ))}
        </div>
      </div>
    </section>
  );
}
