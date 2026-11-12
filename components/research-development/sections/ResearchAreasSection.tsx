
import Image from "next/image";
import { rdSectionData } from "@/data/r&d";

export default function ResearchAreasSection() {
  const data = rdSectionData.focusAreas;

  return (
    <section className="pt-15">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADER */}
        <div className="mb-7 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>

            <h2 className="mt-2 font-heading text-3xl font-semibold leading-tight text-brand-deep sm:text-4xl">
              {data.heading}
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-muted sm:text-base">
            {data.description}
          </p>
        </div>

        {/* RESEARCH AREA CARDS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map(({ title, description, Icon, image }, index) => (
            <article
              key={title}
              className="group relative isolate h-[190px] overflow-hidden rounded-xl bg-brand-deep sm:h-[210px]"
            >
              {/* BACKGROUND IMAGE */}
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/55 to-brand-deep/10 transition-colors duration-300 group-hover:from-brand-deep/95" />

              {/* CARD CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">

                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wider text-white/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors duration-300 group-hover:border-brand-red group-hover:bg-brand-red">
                    <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-semibold text-white sm:text-xl">
                    {title}
                  </h3>

                  <p className="mt-1 max-w-sm text-xs leading-5 text-white/75 sm:text-sm">
                    {description}
                  </p>

                  <div className="mt-3 h-[2px] w-8 bg-brand-red transition-all duration-300 group-hover:w-14" />
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
