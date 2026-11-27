import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getProjectCategory, getProjectHref } from "@/data/projects/projects";
import type { ProjectData } from "@/data/projects/types";

export default function RelatedProjects({
  projects,
}: {
  projects: ProjectData[];
}) {
  if (projects.length === 0) return null;

  return (
    <section className="px-6 py-12 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-heading text-h1 font-medium text-brand-deep">
          More projects
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={getProjectHref(project.id)}
              className="group relative isolate block aspect-[4/3] overflow-hidden rounded-xl bg-[#0b1f3f] text-white"
            >
              <Image
                src={project.hero.image}
                alt={project.hero.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07162d]/90 via-[#07162d]/20 to-transparent" />

              <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#102c59] transition-colors group-hover:bg-red-600 group-hover:text-white">
                <ArrowUpRight size={18} aria-hidden="true" />
              </span>

              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-caption font-medium text-white/70">
                  {getProjectCategory(project)}
                </p>
                <h3 className="mt-1.5 line-clamp-2 font-heading text-h3 font-semibold">
                  {project.hero.heading}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}