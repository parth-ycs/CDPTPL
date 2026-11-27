import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getProjectCategories } from "@/lib/db/queries/projects";
import ProjectForm from "@/components/admin/ProjectForm";

export const dynamic = "force-dynamic";

export default function NewProjectPage() {
  const categories = getProjectCategories();

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/admin/projects"
          className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>
        <h1 className="mt-2 text-2xl font-semibold text-stone-900">
          New project
        </h1>
      </div>

      <ProjectForm mode="create" categories={categories} />
    </div>
  );
}