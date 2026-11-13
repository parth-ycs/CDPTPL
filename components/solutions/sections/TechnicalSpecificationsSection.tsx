import Image from "next/image";
import type { TechnicalSpecificationsSectionData } from "@/components/solutions/types";

export default function TechnicalSpecificationsSection({ data }: { data: TechnicalSpecificationsSectionData }) {
  const headingId = `${data.id}-heading`;
  const hasImage = Boolean(data.image);

  return (
    <section id={data.id} aria-labelledby={headingId} className="scroll-mt-28 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
            <span className="h-px w-8 bg-brand-red" aria-hidden="true" />
            {data.label ?? "Technical specifications"}
          </p>
          <h2 id={headingId} className="mt-3 text-3xl font-semibold tracking-tight text-brand-deep md:text-4xl">
            {data.heading}
          </h2>
          {data.intro && <p className="mt-4 text-base leading-7 text-slate-600">{data.intro}</p>}
        </div>

        <div
          className={`mt-10 grid items-start gap-8 ${
            hasImage ? "lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-10" : ""
          }`}
        >
          {/* Specs table */}
          <dl className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {data.items.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className={`grid gap-1 border-l-2 border-transparent px-5 py-4 transition-colors hover:border-brand-red hover:bg-brand-red/[0.03] sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8 ${
                  index % 2 === 0 ? "bg-slate-50" : "bg-white"
                } ${index !== 0 ? "border-t border-t-slate-100" : ""}`}
              >
                <dt className="text-sm font-semibold text-brand-deep">{item.name}</dt>
                <dd className="text-sm leading-6 text-slate-600">{item.value}</dd>
              </div>
            ))}
          </dl>

          {/* Image */}
          {data.image && (
            <figure className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white">
                <Image
                  src={data.image.src}
                  alt={data.image.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-contain p-6"
                />
              </div>
              {data.image.caption && (
                <figcaption className="mt-3 text-center text-xs leading-5 text-slate-500">
                  {data.image.caption}
                </figcaption>
              )}
            </figure>
          )}
        </div>

        {data.note && (
          <p className="mt-6 border-l-2 border-brand-red/40 pl-4 text-xs leading-5 text-slate-500">{data.note}</p>
        )}
      </div>
    </section>
  );
}