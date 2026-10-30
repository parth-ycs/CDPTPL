import type { DownloadsResourcesSectionData } from "@/components/solutions/types";

export default function DownloadsResourcesSection({ data }: { data: DownloadsResourcesSectionData }) {
  return (
    <section id={data.id} className="scroll-mt-28 bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">{data.label ?? "Downloads & resources"}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-deep md:text-4xl">{data.heading}</h2>
          {data.intro && <p className="mt-4 text-base leading-7 text-slate-600">{data.intro}</p>}
        </div>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {data.items.map((item, index) => (
            <a key={`${item.title}-${index}`} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} className="group flex items-center justify-between gap-5 rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-red">
              <span>
                <span className="block font-semibold text-brand-deep">{item.title}</span>
                {item.description && <span className="mt-1 block text-sm leading-6 text-slate-600">{item.description}</span>}
                {item.fileType && <span className="mt-2 block text-xs font-medium uppercase tracking-wider text-slate-500">{item.fileType}</span>}
              </span>
              <span aria-hidden="true" className="shrink-0 text-lg text-brand-red transition-transform group-hover:translate-x-1">↗</span>
            </a>
          ))}
        </div>
        {data.note && <p className="mt-5 text-xs leading-5 text-slate-500">{data.note}</p>}
      </div>
    </section>
  );
}
