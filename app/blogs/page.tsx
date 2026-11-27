import Blogs from "@/components/blogs/blogs";
import {
  getBlogCategories,
  getBlogs,
  getTrendingBlogs,
} from "@/lib/db/queries/blogs";

export const dynamic = "force-dynamic";

export default function BlogsPage() {
  return (
    <Blogs
      blogs={getBlogs()}
      categories={getBlogCategories()}
      trending={getTrendingBlogs(3)}
    />
  );
}