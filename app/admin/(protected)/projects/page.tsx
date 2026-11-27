import Link from "next/link";
import { Plus } from "lucide-react";

import { getProjects } from "@/lib/db/queries/projects";
import { getProjectCategory, getProjectHref } from "@/data/projects/projects";
import DeleteProjectButton from "@/components/admin/DeleteProjectButton";

export const dynamic = "force-dynamic";

export default function AdminProjectsPage() {
  const projects = getProjects();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-stone-900">Projects</h1>
          <p className="mt-1 text-sm text-stone-500">
            Manage engineering projects and Innovation Showcase entries.
          </p>
        </div>

        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-stone-800"
        >
          <Plus className="h-4 w-4" />
          New project
        </Link>
      </div>

      {projects.length === 0 ? (
        <div className="rounded-xl border border-dashed border-stone-300 bg-white p-12 text-center">
          <h2 className="text-base font-medium text-stone-900">
            No projects yet
          </h2>
          <p className="mt-1 text-sm text-stone-500">
            Create your first project to publish it to the website.
          </p>
          <Link
            href="/admin/projects/new"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800"
          >
            <Plus className="h-4 w-4" />
            New project
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-stone-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-stone-200 bg-stone-50 text-xs font-medium uppercase tracking-wider text-stone-500">
                <tr>
                  <th className="px-4 py-3">Project</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Location</th>
                  <th className="px-4 py-3">Year</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-stone-50/75">
                    <td className="px-4 py-3.5">
                      <div className="font-medium text-stone-900">
                        {project.hero.heading}
                      </div>
                      <div className="mt-0.5 text-xs text-stone-500">
                        /{project.id}
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-700">
                        {getProjectCategory(project)}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-stone-600">
                      {project.details?.location ?? "—"}
                    </td>
                    <td className="px-4 py-3.5 text-stone-600">
                      {project.details?.yearOfCompletion ?? "—"}
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <div className="inline-flex items-center gap-3">
                        <Link
                          href={getProjectHref(project.id)}
                          target="_blank"
                          className="text-stone-600 hover:text-stone-900"
                        >
                          View
                        </Link>
                        <Link
                          href={`/admin/projects/${project.id}`}
                          className="font-medium text-stone-900 hover:underline"
                        >
                          Edit
                        </Link>
                        <DeleteProjectButton
                          id={project.id}
                          title={project.hero.heading}
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