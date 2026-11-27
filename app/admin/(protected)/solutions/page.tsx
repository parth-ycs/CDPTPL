import Link from "next/link";
import { Layers, Plus, FolderTree } from "lucide-react";

import {
  getAllSBUGroups,
  getAllSolutions,
  getSBUs,
} from "@/lib/db/queries/solutions";
import { solutionHref } from "@/data/sbus";
import DeleteSolutionButton from "@/components/admin/DeleteSolutionButton";

export const dynamic = "force-dynamic";

type Props = {
  searchParams: Promise<{ sbu?: string }>;
};

export default async function AdminSolutionsPage({ searchParams }: Props) {
  const { sbu: selectedSbu } = await searchParams;
  const sbus = getSBUs();
  const groups = getAllSBUGroups();
  const allSolutions = getAllSolutions();

  const filtered = selectedSbu
    ? allSolutions.filter((s) => s.sbuSlug === selectedSbu)
    : allSolutions;

  const sbuNameMap = new Map(sbus.map((s) => [s.slug, s.name]));
  const groupNameMap = new Map(groups.map((g) => [g.slug, g.title]));

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-stone-900">Solutions</h1>
          <p className="mt-1 text-sm text-stone-500">
            Manage Strategic Business Units, navigation groups, and solution
            pages.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href="/admin/solutions/sbus"
            className="inline-flex items-center gap-1.5 rounded-lg border border-stone-300 bg-white px-3.5 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
          >
            <Layers className="h-4 w-4" />
            SBUs ({sbus.length})
          </Link>

          <Link
            href="/admin/solutions/groups"
            className="inline-flex items-center gap-1.5 rounded-lg border border-stone-300 bg-white px-3.5 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
          >
            <FolderTree className="h-4 w-4" />
            Groups ({groups.length})
          </Link>

          <Link
            href="/admin/solutions/new"
            className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800"
          >
            <Plus className="h-4 w-4" />
            New solution
          </Link>
        </div>
      </div>

      {/* SBU Filter Pills */}
      <div className="flex flex-wrap gap-2">
        <Link
          href="/admin/solutions"
          className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
            !selectedSbu
              ? "bg-stone-900 text-white"
              : "bg-stone-100 text-stone-700 hover:bg-stone-200"
          }`}
        >
          All ({allSolutions.length})
        </Link>
        {sbus.map((sbu) => {
          const count = allSolutions.filter(
            (s) => s.sbuSlug === sbu.slug,
          ).length;
          return (
            <Link
              key={sbu.slug}
              href={`/admin/solutions?sbu=${encodeURIComponent(sbu.slug)}`}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                selectedSbu === sbu.slug
                  ? "bg-stone-900 text-white"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              {sbu.number}. {sbu.name} ({count})
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-stone-300 bg-white p-12 text-center">
          <h2 className="text-base font-medium text-stone-900">
            No solutions found
          </h2>
          <p className="mt-1 text-sm text-stone-500">
            Create a solution under this business unit to publish it.
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-stone-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-stone-200 bg-stone-50 text-xs font-medium uppercase tracking-wider text-stone-500">
                <tr>
                  <th className="px-4 py-3">Solution</th>
                  <th className="px-4 py-3">SBU</th>
                  <th className="px-4 py-3">Group</th>
                  <th className="px-4 py-3">Sections</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {filtered.map((sol) => (
                  <tr key={sol.id} className="hover:bg-stone-50/75">
                    <td className="px-4 py-3.5">
                      <div className="font-medium text-stone-900">
                        {sol.hero.name}
                      </div>
                      <div className="mt-0.5 text-xs text-stone-500">
                        /{sol.sbuSlug}/{sol.slug}
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-stone-700">
                      {sbuNameMap.get(sol.sbuSlug) ?? sol.sbuSlug}
                    </td>
                    <td className="px-4 py-3.5 text-stone-600">
                      {sol.groupSlug
                        ? (groupNameMap.get(sol.groupSlug) ?? sol.groupSlug)
                        : "—"}
                    </td>
                    <td className="px-4 py-3.5 text-stone-600">
                      {sol.sections.length}
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <div className="inline-flex items-center gap-3">
                        <Link
                          href={solutionHref(sol.sbuSlug, sol.slug)}
                          target="_blank"
                          className="text-stone-600 hover:text-stone-900"
                        >
                          View
                        </Link>
                        <Link
                          href={`/admin/solutions/${encodeURIComponent(sol.id)}`}
                          className="font-medium text-stone-900 hover:underline"
                        >
                          Edit
                        </Link>
                        <DeleteSolutionButton
                          id={sol.id}
                          name={sol.hero.name}
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