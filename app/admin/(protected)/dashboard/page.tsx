import Link from "next/link";
import { getBlogs } from "@/lib/db/queries/blogs";
import { getProjectsCount } from "@/lib/db/queries/projects";
import { getSolutionsCount } from "@/lib/db/queries/solutions";

export const dynamic = "force-dynamic";

export default function DashboardPage() {
  const blogCount = getBlogs().length;
  const projectCount = getProjectsCount();
  const solutionCount = getSolutionsCount();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/admin/blogs"
          className="block w-56 rounded-lg border border-stone-200 bg-white p-4 hover:border-stone-400"
        >
          <div className="text-3xl font-semibold">{blogCount}</div>
          <div className="mt-1 text-sm text-stone-600">Blogs</div>
        </Link>

        <Link
          href="/admin/projects"
          className="block w-56 rounded-lg border border-stone-200 bg-white p-4 hover:border-stone-400"
        >
          <div className="text-3xl font-semibold">{projectCount}</div>
          <div className="mt-1 text-sm text-stone-600">Projects</div>
        </Link>

        <Link
          href="/admin/solutions"
          className="block w-56 rounded-lg border border-stone-200 bg-white p-4 hover:border-stone-400"
        >
          <div className="text-3xl font-semibold">{solutionCount}</div>
          <div className="mt-1 text-sm text-stone-600">Solutions</div>
        </Link>
      </div>
    </div>
  );
}