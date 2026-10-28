import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";

import {
  getProjectHref,
  type Project,
} from "@/data/projects";

type RelatedProjectsProps = {
  projects: Project[];
};

export default function RelatedProjects({
  projects,
}: RelatedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-red-600" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                More Projects
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Related project references.
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 self-start text-sm font-semibold transition-colors hover:text-red-600 sm:self-auto"
          >
            View All Projects
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((related) => (
            <Link
              key={related.id}
              href={getProjectHref(related)}
              className="group overflow-hidden border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                <Image
                  src={related.image}
                  alt={related.plant}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-red-600">
                  {related.category}
                </p>

                <h3 className="mt-3 text-lg font-semibold leading-snug">
                  {related.title}
                </h3>

                <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin size={15} aria-hidden="true" />
                  {related.location}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                  View Project
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}