import type { ProcessFlowSectionData } from "@/components/services/types";

export default function ProcessFlowSection({ data }: { data: ProcessFlowSectionData }) {
  return (
    <section id={data.id} className="scroll-mt-28 bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">{data.label ?? "Process flow"}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-deep md:text-4xl">{data.heading}</h2>
          {data.intro && <p className="mt-4 text-base leading-7 text-slate-600">{data.intro}</p>}
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {data.steps.map((step, index) => (
            <li key={`${step.title}-${index}`} className="relative rounded-2xl border border-slate-200 bg-white p-6">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-deep text-sm font-semibold text-white">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-lg font-semibold text-brand-deep">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              {step.output && <p className="mt-4 border-t border-slate-100 pt-3 text-xs leading-5 text-slate-500"><span className="font-semibold text-brand-deep">Output: </span>{step.output}</p>}
            </li>
          ))}
        </ol>
        {data.note && <p className="mt-5 text-xs leading-5 text-slate-500">{data.note}</p>}
      </div>
    </section>
  );
}
