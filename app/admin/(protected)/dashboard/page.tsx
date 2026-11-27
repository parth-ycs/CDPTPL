import Link from "next/link";
import { getBlogs } from "@/lib/db/queries/blogs";

export default function DashboardPage() {
  const blogCount = getBlogs().length;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <Link
        href="/admin/blogs"
        className="block w-56 rounded-lg border border-stone-200 bg-white p-4 hover:border-stone-400"
      >
        <div className="text-3xl font-semibold">{blogCount}</div>
        <div className="mt-1 text-sm text-stone-600">Blogs</div>
      </Link>
    </div>
  );
}
