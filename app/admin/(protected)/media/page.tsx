import Link from "next/link";
import { Plus } from "lucide-react";

import { getMediaItems } from "@/lib/db/queries/media";
import DeleteMediaButton from "@/components/admin/DeleteMediaButton";

export const dynamic = "force-dynamic";

export default function AdminMediaPage() {
  const items = getMediaItems();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-stone-900">Media</h1>
          <p className="mt-1 text-sm text-stone-500">
            Manage newsroom updates, company announcements, and press stories.
          </p>
        </div>

        <Link
          href="/admin/media/new"
          className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800"
        >
          <Plus className="h-4 w-4" />
          New article
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="rounded-xl border border-dashed border-stone-300 bg-white p-12 text-center">
          <h2 className="text-base font-medium text-stone-900">
            No media articles yet
          </h2>
          <p className="mt-1 text-sm text-stone-500">
            Publish your first company update or news story.
          </p>
          <Link
            href="/admin/media/new"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800"
          >
            <Plus className="h-4 w-4" />
            New article
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-stone-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-stone-200 bg-stone-50 text-xs font-medium uppercase tracking-wider text-stone-500">
                <tr>
                  <th className="px-4 py-3">Article</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Location</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-stone-50/75">
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-12 w-16 shrink-0 rounded border border-stone-200 object-cover bg-stone-100"
                        />
                        <div>
                          <div className="font-medium text-stone-900">
                            {item.title}
                          </div>
                          <div className="mt-0.5 line-clamp-1 max-w-md text-xs text-stone-500">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-stone-700">
                      {item.category}
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap text-stone-700">
                      {item.date}
                    </td>
                    <td className="px-4 py-3.5 text-stone-600">
                      {item.location}
                    </td>
                    <td className="px-4 py-3.5 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-3">
                        <Link
                          href="/media"
                          target="_blank"
                          className="text-stone-600 hover:text-stone-900"
                        >
                          View
                        </Link>
                        <Link
                          href={`/admin/media/${encodeURIComponent(item.id)}`}
                          className="font-medium text-stone-900 hover:underline"
                        >
                          Edit
                        </Link>
                        <DeleteMediaButton id={item.id} title={item.title} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}