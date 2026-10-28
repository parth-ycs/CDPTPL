import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";

import type { Project } from "@/data/projects";

type ProjectHeroProps = {
  project: Project;
};

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <>
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center gap-2 px-5 py-4 text-xs text-slate-500 sm:px-8 lg:px-12">
          <Link href="/" className="transition-colors hover:text-red-600">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href="/projects"
            className="transition-colors hover:text-red-600"
          >
            Projects
          </Link>
          <span aria-hidden="true">/</span>
          <span className="max-w-[240px] truncate font-medium text-[#102c59]">
            {project.title}
          </span>
        </div>
      </div>

      <section className="relative isolate min-h-[540px] overflow-hidden bg-[#081a35] lg:min-h-[640px]">
        <Image
          src={project.image}
          alt={`${project.plant} in ${project.location}`}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07162d]/95 via-[#0a2040]/80 to-[#0a2040]/30" />

        <div className="mx-auto flex min-h-[540px] w-full max-w-[1440px] items-end px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[640px] lg:px-12 lg:py-24">
          <div className="max-w-[900px]">
            <Link
              href="/projects"
              className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              All Projects
            </Link>

            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="h-[2px] w-10 bg-red-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                {project.category}
              </span>
            </div>

            <h1 className="max-w-[900px] text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-[700px] text-base leading-8 text-slate-200 sm:text-lg">
              {project.plant}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-red-400" />
                {project.location}
              </span>

              <span className="inline-flex items-center gap-2">
                <CalendarDays size={16} className="text-red-400" />
                {project.year}
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-32 bg-red-600 sm:w-48" />
      </section>
    </>
  );
}