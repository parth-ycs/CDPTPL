import Link from "next/link";
import { getBlogs } from "@/lib/db/queries/blogs";
import { getProjectsCount } from "@/lib/db/queries/projects";
import { getSolutionsCount } from "@/lib/db/queries/solutions";
import { getEventsCount } from "@/lib/db/queries/events";
import { getCsrInitiativesCount } from "@/lib/db/queries/csr";
import { getMediaItemsCount } from "@/lib/db/queries/media";
import { getPatentsCount } from "@/lib/db/queries/patents";

export const dynamic = "force-dynamic";

export default function DashboardPage() {
  const blogCount = getBlogs().length;
  const projectCount = getProjectsCount();
  const solutionCount = getSolutionsCount();
  const eventCount = getEventsCount();
  const csrCount = getCsrInitiativesCount();
  const mediaCount = getMediaItemsCount();
  const patentCount = getPatentsCount();

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

        <Link
          href="/admin/events"
          className="block w-56 rounded-lg border border-stone-200 bg-white p-4 hover:border-stone-400"
        >
          <div className="text-3xl font-semibold">{eventCount}</div>
          <div className="mt-1 text-sm text-stone-600">Events</div>
        </Link>

        <Link
          href="/admin/csr"
          className="block w-56 rounded-lg border border-stone-200 bg-white p-4 hover:border-stone-400"
        >
          <div className="text-3xl font-semibold">{csrCount}</div>
          <div className="mt-1 text-sm text-stone-600">CSR Initiatives</div>
        </Link>

        <Link
          href="/admin/media"
          className="block w-56 rounded-lg border border-stone-200 bg-white p-4 hover:border-stone-400"
        >
          <div className="text-3xl font-semibold">{mediaCount}</div>
          <div className="mt-1 text-sm text-stone-600">Media</div>
        </Link>

        <Link
          href="/admin/patents"
          className="block w-56 rounded-lg border border-stone-200 bg-white p-4 hover:border-stone-400"
        >
          <div className="text-3xl font-semibold">{patentCount}</div>
          <div className="mt-1 text-sm text-stone-600">Patents</div>
        </Link>
      </div>
    </div>
  );
}