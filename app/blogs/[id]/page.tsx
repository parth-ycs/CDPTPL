import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Blog from "@/components/blogs/blog";
import { getAllBlogs, getBlogById } from "@/data/blogs";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return getAllBlogs().map((blog) => ({ id: blog.id }));
}

// Open Graph / Twitter tags are what LinkedIn, Facebook, Threads and X
// read to build the preview card when someone shares the link.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const blog = getBlogById(id);
  if (!blog) return {};

  return {
    title: `${blog.title} | Chemdist Group`,
    description: blog.excerpt,
    openGraph: {
      type: "article",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
      publishedTime: blog.publishedAt,
      authors: [blog.author.name],
      tags: blog.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { id } = await params;
  const blog = getBlogById(id);

  if (!blog) notFound();

  return <Blog blog={blog} />;
}
