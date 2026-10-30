import type { TechnicalSpecificationsSectionData } from "@/components/solutions/types";

export default function TechnicalSpecificationsSection({ data }: { data: TechnicalSpecificationsSectionData }) {
  return (
    <section id={data.id} className="scroll-mt-28 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">{data.label ?? "Technical specifications"}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-deep md:text-4xl">{data.heading}</h2>
          {data.intro && <p className="mt-4 text-base leading-7 text-slate-600">{data.intro}</p>}
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          {data.items.map((item, index) => (
            <div key={`${item.name}-${index}`} className={`grid gap-2 px-5 py-4 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8 ${index % 2 === 0 ? "bg-slate-50" : "bg-white"}`}>
              <h3 className="text-sm font-semibold text-brand-deep">{item.name}</h3>
              <p className="text-sm leading-6 text-slate-600">{item.value}</p>
            </div>
          ))}
        </div>
        {data.note && <p className="mt-4 text-xs leading-5 text-slate-500">{data.note}</p>}
      </div>
    </section>
  );
}
