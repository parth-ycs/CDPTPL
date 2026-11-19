import { notFound } from "next/navigation";

import Blog from "@/components/blogs/blog";
import { blogsPageData } from "@/data/blogs";

interface BlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return blogsPageData.blogs.map((blog) => ({
    id: blog.id,
  }));
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = await params;

  const blog = blogsPageData.blogs.find(
    (item) => item.id === id,
  );

  if (!blog) {
    notFound();
  }

  return <Blog blog={blog} />;
}