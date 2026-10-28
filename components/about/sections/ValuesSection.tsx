import { aboutPageData } from "@/data/about";

export default function ValuesSection() {
  const { values } = aboutPageData;

  return (
    <section className="py-4">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-red-600" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              {values.label}
            </span>
          </div>

          <h2 className="mt-6 max-w-[460px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {values.heading}
          </h2>

          <p className="mt-5 max-w-[460px] text-base leading-8 text-slate-600">
            {values.description}
          </p>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {values.items.map(({ title, description, Icon }, index) => (
            <article
              key={title}
              className="group flex items-start gap-5 py-7 sm:gap-7 sm:py-9"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#f1f4f8] transition-colors duration-300 group-hover:bg-[#102c59]">
                <Icon
                  aria-hidden="true"
                  size={24}
                  strokeWidth={1.6}
                  className="text-[#102c59] transition-colors duration-300 group-hover:text-white"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold sm:text-xl">
                    {title}
                  </h3>

                  <span className="text-xs font-medium text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}