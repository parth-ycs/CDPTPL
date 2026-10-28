import type { StandardsCertificationsSectionData } from "@/components/services/types";

export default function StandardsCertificationsSection({ data }: { data: StandardsCertificationsSectionData }) {
  return (
    <section id={data.id} className="scroll-mt-28 bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">{data.label ?? "Standards & certifications"}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-deep md:text-4xl">{data.heading}</h2>
          {data.intro && <p className="mt-4 text-base leading-7 text-slate-600">{data.intro}</p>}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {data.items.map((item, index) => (
            <article key={`${item.title}-${index}`} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-brand-deep">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              {item.reference && <p className="mt-3 text-xs font-medium text-slate-500">Reference: {item.reference}</p>}
            </article>
          ))}
        </div>
        {data.note && <p className="mt-5 text-xs leading-5 text-slate-500">{data.note}</p>}
      </div>
    </section>
  );
}
