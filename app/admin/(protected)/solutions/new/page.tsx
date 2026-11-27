import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getAllSBUGroups, getSBUs } from "@/lib/db/queries/solutions";
import SolutionForm from "@/components/admin/SolutionForm";

export const dynamic = "force-dynamic";

export default function NewSolutionPage() {
  const sbus = getSBUs().map((s) => ({ slug: s.slug, name: s.name }));
  const groups = getAllSBUGroups().map((g) => ({
    slug: g.slug,
    sbuSlug: g.sbuSlug,
    title: g.title,
  }));

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/admin/solutions"
          className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to solutions
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-stone-900">
          New solution
        </h1>
      </div>

      <SolutionForm mode="create" sbus={sbus} groups={groups} />
    </div>
  );
}