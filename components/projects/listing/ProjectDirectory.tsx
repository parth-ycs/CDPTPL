
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
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
  const hasFilters =
    searchQuery.trim() !== "" || selectedCategory !== categories[0];

  return (
    <section
      id="project-directory"
      className="scroll-mt-24 rounded-xl bg-[#f5f7fa] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[560px]">
            <h2 className="font-heading text-h1 font-bold tracking-normal text-[#0b1f3f]">
              Explore our projects
            </h2>

          </div>

          {/* Search */}
          <div className="relative w-full lg:max-w-[400px]">
            <Search
              size={17}
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search projects, plants, locations"
              aria-label="Search projects"
              className="h-12 w-full rounded-full border border-slate-200 bg-white pl-11 pr-5 text-small text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-[#102c59]"
            />
          </div>
        </div>

        {/* Filters + count */}
        <div className="mt-8 flex flex-col gap-4 border-b border-line pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => onCategoryChange(item)}
                aria-pressed={selectedCategory === item}
                className={`text-small transition-colors ${
                  selectedCategory === item
                    ? "font-semibold text-brand-blue"
                    : "text-muted hover:text-brand-deep"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-4 text-small text-muted">
            <span aria-live="polite">
              <span className="font-semibold tabular-nums text-brand-deep">
                {projects.length}
              </span>{" "}
              {projects.length === 1 ? "project" : "projects"}
            </span>

            {hasFilters && (
              <button
                type="button"
                onClick={onReset}
                className="font-medium text-brand-red transition-colors hover:text-brand-deep"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Project cards */}
        {projects.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group relative isolate aspect-[4/4.6] overflow-hidden rounded-xl bg-[#0b1f3f] text-white sm:aspect-[4/5]"
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.plant}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="-z-20 object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 group-focus-within:scale-105 motion-reduce:transition-none"
                />

                {/* Overlays */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07162d]/90 via-[#07162d]/20 to-[#07162d]/10" />

                <div className="absolute inset-0 -z-10 bg-[#07162d]/0 transition-colors duration-500 group-hover:bg-[#07162d]/55 group-focus-within:bg-[#07162d]/55 motion-reduce:transition-none" />

                {/* Full-card link */}
                <Link
                  href={getProjectHref(project)}
                  aria-label={`View ${project.title}`}
                  className="absolute inset-0 z-10 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 max-w-[80%] truncate rounded-full bg-white/90 px-3 py-1.5 text-caption font-medium text-[#102c59] backdrop-blur-sm">
                  {project.category}
                </span>

                {/* Arrow */}
                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#102c59] transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white group-focus-within:bg-red-600 group-focus-within:text-white">
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="text-caption font-medium text-white/70">
                    {project.year}
                  </p>

                  <h3 className="mt-1.5 line-clamp-2 font-heading text-h3 font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 flex items-start gap-1.5 text-small text-white/75">
                    <MapPin
                      size={15}
                      className="mt-0.5 shrink-0 text-red-400"
                      aria-hidden="true"
                    />
                    <span className="line-clamp-1">{project.location}</span>
                  </p>

                  {/* Expandable details */}
                  <div className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 motion-reduce:transition-none">
                    <div className="min-h-0 overflow-hidden">
                      <div className="mt-4 border-t border-white/20 pt-4">
                        <p className="text-small font-medium text-white">
                          {project.plant}
                        </p>

                        <p className="mt-2 line-clamp-3 text-body text-white/75">
                          {project.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.capacity && (
                            <span className="rounded-full border border-white/25 px-3 py-1 text-caption text-white/90">
                              {project.capacity}
                            </span>
                          )}

                          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-3 py-1 text-caption text-white/90">
                            <CalendarDays size={12} aria-hidden="true" />
                            {project.yearOfCompletion}
                          </span>
                        </div>

                        {project.keyScope && project.keyScope.length > 0 && (
                          <ul className="mt-4 space-y-1.5">
                            {project.keyScope.slice(0, 2).map((scope) => (
                              <li
                                key={scope}
                                className="flex items-start gap-2 text-caption text-white/80"
                              >
                                <Check
                                  size={13}
                                  className="mt-1 shrink-0 text-red-400"
                                  aria-hidden="true"
                                />
                                <span className="line-clamp-1">{scope}</span>
                              </li>
                            ))}

                            {project.keyScope.length > 2 && (
                              <li className="pl-5 text-caption text-white/50">
                                +{project.keyScope.length - 2} more
                              </li>
                            )}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 flex min-h-[260px] flex-col items-center justify-center border border-dashed border-slate-300 bg-white px-6 text-center">
            <Search
              size={28}
              className="text-slate-400"
              aria-hidden="true"
            />

            <h3 className="mt-5 font-heading text-h3 font-semibold text-[#0b1f3f]">
              No projects found
            </h3>

            <p className="mt-2 text-body text-slate-500">
              Try a different search term or category.
            </p>

            <button
              type="button"
              onClick={onReset}
              className="mt-5 text-small font-semibold text-red-600 transition-colors hover:text-[#102c59]"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
