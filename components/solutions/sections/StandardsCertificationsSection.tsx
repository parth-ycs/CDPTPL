import Image from "next/image";
import type { StandardsCertificationsSectionData } from "@/components/solutions/types";

export default function StandardsCertificationsSection({ data }: { data: StandardsCertificationsSectionData }) {
  const headingId = `${data.id}-heading`;

  return (
    <section id={data.id} aria-labelledby={headingId} className="scroll-mt-28 rounded-2xl bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
            <span className="h-px w-8 bg-brand-red" aria-hidden="true" />
            {data.label ?? "Standards & certifications"}
          </p>
          <h2 id={headingId} className="mt-3 text-3xl font-semibold tracking-tight text-brand-deep md:text-4xl">
            {data.heading}
          </h2>
          {data.intro && <p className="mt-4 text-base leading-7 text-slate-600">{data.intro}</p>}
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, index) => (
            <li key={`${item.title}-${index}`} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-lg">
                {/* Image / badge area */}
                <div className="relative flex h-36 items-center justify-center border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6">
                  {item.image ? (
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={160}
                      height={96}
                      sizes="(min-width: 1024px) 160px, 40vw"
                      className="h-full w-auto max-w-full object-contain transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-deep/5 text-xl font-semibold text-brand-deep"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold leading-snug text-brand-deep">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{item.description}</p>
                  {item.reference && (
                    <p className="mt-4 inline-flex w-fit items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                      Ref: {item.reference}
                    </p>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>

        {data.note && (
          <p className="mt-6 border-l-2 border-brand-red/40 pl-4 text-xs leading-5 text-slate-500">{data.note}</p>
        )}
      </div>
    </section>
  );
}