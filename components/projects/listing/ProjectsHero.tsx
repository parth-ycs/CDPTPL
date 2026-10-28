import Image from "next/image";
import { ArrowDown } from "lucide-react";

import { projects } from "@/data/projects";

export default function ProjectsHero() {
  const featuredProject = projects[0];

  return (
    <section className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-[#081a35] lg:min-h-[620px]">
      {featuredProject && (
        <Image
          src={featuredProject.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover opacity-35"
        />
      )}

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07162d] via-[#0a2040]/90 to-[#0a2040]/35" />

      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12">
        <div className="max-w-[850px]">
          <div className="mb-7 flex items-center gap-4">
            <span className="h-[2px] w-12 bg-red-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/75">
              Project Portfolio
            </span>
          </div>

          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Engineering Solutions.
            <span className="mt-2 block text-white/65">
              Delivered Worldwide.
            </span>
          </h1>

          <p className="mt-7 max-w-[650px] text-base leading-8 text-slate-200 sm:text-lg">
            Explore our industrial projects across process plants, EPC
            execution, process equipment and green process technologies.
          </p>

          <a
            href="#project-directory"
            className="mt-10 inline-flex items-center gap-4 text-sm font-semibold text-white transition-colors hover:text-red-400"
          >
            Explore Projects
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30">
              <ArrowDown size={18} />
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-32 bg-red-600 sm:w-48" />
    </section>
  );
}