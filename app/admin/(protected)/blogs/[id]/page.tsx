import { notFound } from "next/navigation";
import BlogForm from "@/components/admin/BlogForm";
import { getBlogById, getBlogCategories } from "@/lib/db/queries/blogs";

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = getBlogById(id);
  if (!blog) notFound();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Edit blog</h1>
      <BlogForm mode="edit" blog={blog} categories={getBlogCategories()} />
    </div>
  );
}
