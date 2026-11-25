import Image from "next/image";

// ⚠ Adjust this import to wherever your Navbar actually lives.
// The old detail page got its navbar through <PageHero />; this page has no hero.
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import BlogHeader from "@/components/blogs/sections/BlogHeader";
import BlogActions from "@/components/blogs/sections/BlogActions";
import BlogMarkdown from "@/components/blogs/sections/BlogMarkdown";
import BlogAuthorCard from "@/components/blogs/sections/BlogAuthorCard";
import BlogComments from "@/components/blogs/sections/BlogComments";
import RelatedBlogs from "@/components/blogs/sections/RelatedBlogs";

import {
  blogsPageData,
  getCommentCount,
  getComments,
  type BlogPost,
} from "@/data/blogs";

interface BlogProps {
  blog: BlogPost;
}

export default function Blog({ blog }: BlogProps) {
  const { detail } = blogsPageData;
  const commentCount = getCommentCount(blog.id);

  return (
    <main className="bg-white text-ink">
      <Navbar />

      {/* 88px = fixed navbar height */}
      <article className="pb-20 pt-[88px] md:pb-24">
        <div className="mx-auto max-w-[780px] px-6 pt-12 lg:px-8 md:pt-16">
          <BlogHeader blog={blog} />

          {/* Top action bar */}
          <BlogActions
            blogId={blog.id}
            title={blog.title}
            likes={blog.likes}
            commentCount={commentCount}
            menuDirection="down"
          />

          {/* Cover image */}
          <figure className="my-10">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-pale">
              <Image
                src={blog.image}
                alt={blog.imageAlt}
                fill
                priority
                sizes="(max-width: 780px) 100vw, 780px"
                className="object-cover"
              />
            </div>
          </figure>

          {/* Markdown body */}
          <BlogMarkdown content={blog.content} />

          {/* Tags */}
          {blog.tags.length > 0 && (
            <div className="mb-10 mt-12 flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-pale px-4 py-2 text-small text-brand-deep"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Bottom action bar (popover opens upward) */}
          <BlogActions
            blogId={blog.id}
            title={blog.title}
            likes={blog.likes}
            commentCount={commentCount}
            menuDirection="up"
          />

          <BlogAuthorCard author={blog.author} />

          <BlogComments
            blogId={blog.id}
            initialComments={getComments(blog.id)}
            heading={detail.commentsHeading}
            placeholder={detail.commentPlaceholder}
          />
        </div>
      </article>

      <RelatedBlogs blog={blog} />

      <Footer />
    </main>
  );
}