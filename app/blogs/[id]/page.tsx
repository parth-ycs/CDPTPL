import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Blog from "@/components/blogs/blog";
import { getBlogById } from "@/lib/db/queries/blogs";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = getBlogById((await params).id);
  return blog ? { title: blog.title, description: blog.excerpt } : {};
}

export default async function BlogPage({ params }: Props) {
  const blog = getBlogById((await params).id);
  if (!blog) notFound();
  return <Blog blog={blog} />;
}