import Image from "next/image";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import BlogHeader from "@/components/blogs/sections/BlogHeader";
import BlogActions from "@/components/blogs/sections/BlogActions";
import BlogMarkdown from "@/components/blogs/sections/BlogMarkdown";
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

          {/* Bottom action bar (popover opens upward) */}
          <div className="mb-14 mt-12">
            <BlogActions
              blogId={blog.id}
              title={blog.title}
              likes={blog.likes}
              commentCount={commentCount}
              menuDirection="up"
            />
          </div>

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