import Link from "next/link";
import { ArrowLeft, Plus } from "lucide-react";

import { getAllSBUGroups, getSBUs } from "@/lib/db/queries/solutions";
import DeleteSbuGroupButton from "@/components/admin/DeleteSbuGroupButton";

export const dynamic = "force-dynamic";

export default function AdminSbuGroupsPage() {
  const groups = getAllSBUGroups();
  const sbuMap = new Map(getSBUs().map((s) => [s.slug, s.name]));

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/admin/solutions"
            className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to solutions
          </Link>
          <h1 className="mt-2 text-2xl font-semibold text-stone-900">
            Navigation groups
          </h1>
        </div>

        <Link
          href="/admin/solutions/groups/new"
          className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800"
        >
          <Plus className="h-4 w-4" />
          New group
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs font-medium uppercase tracking-wider text-stone-500">
            <tr>
              <th className="px-4 py-3">Group</th>
              <th className="px-4 py-3">Parent SBU</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {groups.map((group) => (
              <tr key={group.slug} className="hover:bg-stone-50/75">
                <td className="px-4 py-3.5">
                  <div className="font-medium text-stone-900">{group.title}</div>
                  <div className="mt-0.5 text-xs text-stone-500">
                    /solutions/{group.slug}
                  </div>
                </td>
                <td className="px-4 py-3.5 text-stone-600">
                  {sbuMap.get(group.sbuSlug) ?? group.sbuSlug}
                </td>
                <td className="px-4 py-3.5 text-right">
                  <div className="inline-flex items-center gap-3">
                    <Link
                      href={`/solutions/${group.slug}`}
                      target="_blank"
                      className="text-stone-600 hover:text-stone-900"
                    >
                      View
                    </Link>
                    <Link
                      href={`/admin/solutions/groups/${group.slug}`}
                      className="font-medium text-stone-900 hover:underline"
                    >
                      Edit
                    </Link>
                    <DeleteSbuGroupButton
                      slug={group.slug}
                      title={group.title}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}