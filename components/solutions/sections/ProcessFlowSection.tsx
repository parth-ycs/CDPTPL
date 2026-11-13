import Image from "next/image";
import type { ProcessFlowSectionData } from "@/components/solutions/types";

/**
 * Works with any number of steps (1, 2, 3, 5, 8...).
 * Layout: 1 column (vertical timeline) on mobile, 2 columns on md, 3 columns on lg.
 * The horizontal connector is drawn only between steps in the same row.
 */
export default function ProcessFlowSection({ data }: { data: ProcessFlowSectionData }) {
  const headingId = `${data.id}-heading`;
  const total = data.steps.length;

  return (
    <section id={data.id} aria-labelledby={headingId} className="scroll-mt-28 rounded-2xl bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
            <span className="h-px w-8 bg-brand-red" aria-hidden="true" />
            {data.label ?? "Process flow"}
          </p>
          <h2 id={headingId} className="mt-3 text-3xl font-semibold tracking-tight text-brand-deep md:text-4xl">
            {data.heading}
          </h2>
          {data.intro && <p className="mt-4 text-base leading-7 text-slate-600">{data.intro}</p>}
        </div>

        <ol className="mt-12 grid gap-x-6 md:grid-cols-2 md:gap-y-10 lg:grid-cols-3">
          {data.steps.map((step, index) => {
            const number = String(index + 1).padStart(2, "0");
            const isLast = index === total - 1;

            // Per breakpoint: "link" = next step is in the same row,
            // "turn" = row ends, the line wraps down to the next row, "none" = last step
            const mdState = isLast ? "none" : (index + 1) % 2 !== 0 ? "link" : "turn";
            const lgState = isLast ? "none" : (index + 1) % 3 !== 0 ? "link" : "turn";

            const mdLine = {
              link: "md:block md:-mr-2",
              turn: "md:block md:-mr-3",
              none: "",
            }[mdState];
            const lgLine = {
              link: "lg:block lg:-mr-2",
              turn: "lg:block lg:-mr-3",
              none: "lg:hidden",
            }[lgState];

            return (
              <li key={`${step.title}-${index}`} className="group relative flex gap-4 md:flex-col md:gap-0">
                {/* Number + connector */}
                <div className="flex shrink-0 flex-col items-center md:w-full md:flex-row md:gap-4">
                  <span
                    aria-hidden="true"
                    className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-semibold tracking-wider text-brand-deep shadow-sm transition-colors duration-300 group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white"
                  >
                    {number}
                  </span>

                  {/* Vertical connector (mobile) */}
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="mt-2 w-px flex-1 bg-gradient-to-b from-slate-300 to-slate-200 md:hidden"
                    />
                  )}

                  {/* Horizontal connector (md and up) */}
                  <span
                    aria-hidden="true"
                    className={`hidden h-px flex-1 bg-slate-300 ${mdLine} ${lgLine}`}
                  />
                </div>

                {/* Wrap-around connector: end of a row -> start of the next row */}
                {/* 2 columns (md only) */}
                {mdState === "turn" && (
                  <>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-[-0.75rem] top-5 left-[calc(-100%_-_0.25rem)] hidden h-full rounded-br-2xl border-b border-r border-slate-300 md:block lg:hidden"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute top-[calc(100%_+_1.25rem)] left-[calc(-100%_-_0.25rem)] hidden h-5 w-px bg-slate-300 md:block lg:hidden"
                    />
                  </>
                )}
                {/* 3 columns (lg and up) */}
                {lgState === "turn" && (
                  <>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-[-0.75rem] top-5 left-[calc(-200%_-_1.75rem)] hidden h-full rounded-br-2xl border-b border-r border-slate-300 lg:block"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute top-[calc(100%_+_1.25rem)] left-[calc(-200%_-_1.75rem)] hidden h-5 w-px bg-slate-300 lg:block"
                    />
                  </>
                )}

                {/* Card */}
                <div className="flex min-w-0 flex-1 flex-col pb-8 md:mt-5 md:pb-0">
                  <article className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 transition duration-300 group-hover:border-brand-red/30 group-hover:shadow-md">
                    {step.image && (
                      <div className="relative -mx-5 -mt-5 mb-5 aspect-[16/9] overflow-hidden bg-slate-100">
                        <Image
                          src={step.image.src}
                          alt={step.image.alt}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover text-transparent transition duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}

                    <h3 className="text-base font-semibold leading-snug text-brand-deep md:text-lg">
                      <span className="sr-only">Step {index + 1}: </span>
                      {step.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{step.description}</p>

                    {step.output && (
                      <p className="mt-4 flex items-start gap-2 border-t border-slate-100 pt-3 text-xs leading-5 text-slate-500">
                        <svg
                          viewBox="0 0 20 20"
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-red"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          <path d="M4 10h12m0 0l-5-5m5 5l-5 5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>
                          <span className="font-semibold text-brand-deep">Output: </span>
                          {step.output}
                        </span>
                      </p>
                    )}
                  </article>
                </div>
              </li>
            );
          })}
        </ol>

        {data.note && (
          <p className="mt-8 border-l-2 border-brand-red/40 pl-4 text-xs leading-5 text-slate-500">{data.note}</p>
        )}
      </div>
    </section>
  );
}