import { CheckCircle2 } from "lucide-react";

import type { Project } from "@/data/projects";

type ProjectScopeProps = {
  project: Project;
};

export default function ProjectScope({ project }: ProjectScopeProps) {
  const scopes = project.keyScope;

  if (!scopes?.length) return null;

  return (
    <section className="bg-[#f5f7fa] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-[760px]">
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-red-600" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Scope of Work
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Project execution scope.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Key engineering and delivery activities associated with this
            project.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {scopes.map((scope, index) => (
            <div
              key={scope}
              className="group flex min-h-[120px] items-start gap-4 border border-slate-200 bg-white p-6 transition-colors duration-300 hover:border-[#102c59]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#f1f4f8] text-xs font-semibold text-[#102c59] transition-colors group-hover:bg-[#102c59] group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex min-w-0 gap-3 pt-1">
                <CheckCircle2
                  size={17}
                  className="mt-0.5 shrink-0 text-red-600"
                  aria-hidden="true"
                />
                <p className="text-sm font-medium leading-6 text-slate-700">
                  {scope}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}