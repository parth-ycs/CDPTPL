import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden bg-[#102c59] px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-16">
          <div className="absolute bottom-0 left-0 h-1 w-24 bg-red-600" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[720px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                Your Next Project
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Looking for an engineering partner?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                Discuss your process requirements and explore the right
                engineering solution for your project.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 self-start bg-red-600 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#102c59] lg:self-center"
            >
              Contact Our Team
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}