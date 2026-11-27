import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import {
  getProjectById,
  getProjectCategories,
} from "@/lib/db/queries/projects";
import ProjectForm from "@/components/admin/ProjectForm";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditProjectPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) notFound();

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
          Edit project
        </h1>
        <p className="mt-0.5 text-sm text-stone-500">{project.hero.heading}</p>
      </div>

      <ProjectForm mode="edit" initialData={project} categories={categories} />
    </div>
  );
}