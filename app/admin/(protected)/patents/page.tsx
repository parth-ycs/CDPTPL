import Link from "next/link";
import { Plus } from "lucide-react";

import { getPatents } from "@/lib/db/queries/patents";
import DeletePatentButton from "@/components/admin/DeletePatentButton";

export const dynamic = "force-dynamic";

export default function AdminPatentsPage() {
  const patents = getPatents();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-stone-900">Patents</h1>
          <p className="mt-1 text-sm text-stone-500">
            Manage patent grants, applications, and intellectual property
            certificates.
          </p>
        </div>

        <Link
          href="/admin/patents/new"
          className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800"
        >
          <Plus className="h-4 w-4" />
          New patent
        </Link>
      </div>

      {patents.length === 0 ? (
        <div className="rounded-xl border border-dashed border-stone-300 bg-white p-12 text-center">
          <h2 className="text-base font-medium text-stone-900">
            No patents yet
          </h2>
          <p className="mt-1 text-sm text-stone-500">
            Add your first granted patent or patent application.
          </p>
          <Link
            href="/admin/patents/new"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800"
          >
            <Plus className="h-4 w-4" />
            New patent
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-stone-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-stone-200 bg-stone-50 text-xs font-medium uppercase tracking-wider text-stone-500">
                <tr>
                  <th className="px-4 py-3">Patent</th>
                  <th className="px-4 py-3">Reference</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {patents.map((patent) => (
                  <tr key={patent.id} className="hover:bg-stone-50/75">
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={patent.image}
                          alt={patent.imageAlt}
                          className="h-14 w-10 shrink-0 rounded border border-stone-200 object-contain bg-stone-50 p-0.5"
                        />
                        <div className="max-w-lg font-medium text-stone-900">
                          {patent.title}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="text-xs text-stone-500">
                        {patent.referenceLabel}
                      </div>
                      <div className="font-mono text-xs font-medium text-stone-800">
                        {patent.applicationNumber}
                      </div>
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap text-stone-600">
                      {patent.date || "—"}
                    </td>
                    <td className="px-4 py-3.5 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-3">
                        <Link
                          href="/patents"
                          target="_blank"
                          className="text-stone-600 hover:text-stone-900"
                        >
                          View
                        </Link>
                        <Link
                          href={`/admin/patents/${encodeURIComponent(patent.id)}`}
                          className="font-medium text-stone-900 hover:underline"
                        >
                          Edit
                        </Link>
                        <DeletePatentButton
                          id={patent.id}
                          title={patent.title}
                        />
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