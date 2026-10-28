"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  MapPin,
  Search,
} from "lucide-react";

import { getProjectHref, type Project } from "@/data/projects";

type ProjectDirectoryProps = {
  projects: Project[];
  categories: string[];
  selectedCategory: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onSearchChange: (query: string) => void;
  onReset: () => void;
};

export default function ProjectDirectory({
  projects,
  categories,
  selectedCategory,
  searchQuery,
  onCategoryChange,
  onSearchChange,
  onReset,
}: ProjectDirectoryProps) {
  return (
    <section
      id="project-directory"
      className="scroll-mt-24 bg-[#f5f7fa] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-600">
              Project Directory
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Explore Our Projects
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Search by project, plant, location or category.
            </p>
          </div>

          <p className="text-sm text-slate-500">
            <span className="text-2xl font-semibold tabular-nums text-[#102c59]">
              {String(projects.length).padStart(2, "0")}
            </span>{" "}
            {projects.length === 1 ? "project" : "projects"} found
          </p>
        </div>

        {/* Search */}
        <div className="relative mt-8 max-w-[520px]">
          <Search
            size={18}
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="search"
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search projects, plants, locations..."
            aria-label="Search projects"
            className="h-12 w-full border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-[#102c59]"
          />
        </div>

        {/* Category filters */}
        <div
          className="mt-5 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Filter projects by category"
        >
          {categories.map((item) => {
            const active = selectedCategory === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => onCategoryChange(item)}
                aria-pressed={active}
                className={`shrink-0 border px-4 py-3 text-xs font-semibold transition-colors sm:px-5 ${
                  active
                    ? "border-[#102c59] bg-[#102c59] text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-[#102c59] hover:text-[#102c59]"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Project cards */}
        {projects.length > 0 ? (
          <div className="mt-7 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group flex min-w-0 flex-col overflow-hidden border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/[0.06]"
              >
                <Link
                  href={getProjectHref(project)}
                  aria-label={`View ${project.title}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-slate-200"
                >
                  <Image
                    src={project.image}
                    alt={project.plant}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 max-w-[85%] bg-white px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[#102c59] sm:text-[10px]">
                    {project.category}
                  </span>

                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#102c59] transition-colors group-hover:bg-red-600 group-hover:text-white">
                    <ArrowUpRight size={19} />
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-red-600">
                    {project.year}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold leading-snug sm:text-xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 flex items-start gap-2 text-sm text-slate-500">
                    <MapPin
                      size={16}
                      className="mt-0.5 shrink-0 text-red-600"
                      aria-hidden="true"
                    />
                    {project.location}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Plant / Facility
                    </p>

                    <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
                      {project.plant}
                    </p>
                  </div>

                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.capacity && (
                      <span className="border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
                        {project.capacity}
                      </span>
                    )}

                    <span className="inline-flex items-center gap-1.5 border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
                      <CalendarDays size={13} aria-hidden="true" />
                      {project.yearOfCompletion}
                    </span>
                  </div>

                  {project.keyScope && project.keyScope.length > 0 && (
                    <div className="mt-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                        Key Scope
                      </p>

                      <div className="mt-3 space-y-2">
                        {project.keyScope.slice(0, 3).map((scope) => (
                          <p
                            key={scope}
                            className="flex items-start gap-2 text-xs leading-5 text-slate-600"
                          >
                            <CheckCircle2
                              size={14}
                              className="mt-0.5 shrink-0 text-red-600"
                              aria-hidden="true"
                            />
                            {scope}
                          </p>
                        ))}

                        {project.keyScope.length > 3 && (
                          <p className="text-xs text-slate-400">
                            +{project.keyScope.length - 3} more activities
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="mt-auto mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                      Project Reference
                    </span>

                    <Link
                      href={getProjectHref(project)}
                      className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold transition-colors hover:text-red-600"
                    >
                      View Details
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-7 flex min-h-[260px] flex-col items-center justify-center border border-dashed border-slate-300 bg-white px-6 text-center">
            <Search size={30} className="text-slate-400" />

            <h3 className="mt-5 text-lg font-semibold">
              No projects found
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Try a different search term or category.
            </p>

            <button
              type="button"
              onClick={onReset}
              className="mt-5 text-sm font-semibold text-red-600 hover:text-[#102c59]"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}