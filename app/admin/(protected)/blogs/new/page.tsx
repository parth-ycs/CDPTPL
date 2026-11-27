import BlogForm from "@/components/admin/BlogForm";
import { getBlogCategories } from "@/lib/db/queries/blogs";

export default function NewBlogPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">New blog</h1>
      <BlogForm mode="create" categories={getBlogCategories()} />
    </div>
  );
}
