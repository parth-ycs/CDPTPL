import type { PerformanceSustainabilitySectionData } from "@/components/solutions/types";

export default function PerformanceSustainabilitySection({ data }: { data: PerformanceSustainabilitySectionData }) {
  return (
    <section id={data.id} className="scroll-mt-28 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">{data.label ?? "Performance & sustainability"}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-deep md:text-4xl">{data.heading}</h2>
          {data.intro && <p className="mt-4 text-base leading-7 text-slate-600">{data.intro}</p>}
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.metrics.map((metric, index) => (
            <article key={`${metric.title}-${index}`} className="rounded-2xl border border-slate-200 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">{metric.category ?? "Performance"}</p>
              <h3 className="mt-3 text-lg font-semibold text-brand-deep">{metric.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{metric.description}</p>
              {metric.value && <p className="mt-4 text-sm font-semibold text-brand-deep">{metric.value}</p>}
            </article>
          ))}
        </div>
        {data.note && <p className="mt-5 text-xs leading-5 text-slate-500">{data.note}</p>}
      </div>
    </section>
  );
}
