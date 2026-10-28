import type { LifecycleSupportSectionData } from "@/components/services/types";

export default function LifecycleSupportSection({ data }: { data: LifecycleSupportSectionData }) {
  return (
    <section id={data.id} className="scroll-mt-28 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">{data.label ?? "Lifecycle support"}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-deep md:text-4xl">{data.heading}</h2>
          {data.intro && <p className="mt-4 text-base leading-7 text-slate-600">{data.intro}</p>}
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, index) => (
            <article key={`${item.title}-${index}`} className="rounded-2xl border border-slate-200 p-6 transition-colors hover:border-slate-300">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-lg font-semibold text-brand-deep">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
