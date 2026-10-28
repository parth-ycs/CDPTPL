import { aboutPageData } from "@/data/about";

export default function PurposeSection() {
  const { purpose } = aboutPageData;

  return (
    <section className="rounded-sm bg-[#f5f7fa] p-6 sm:p-8 lg:p-10">
      <div className="max-w-[720px]">
        <div className="flex items-center gap-4">
          <span className="h-[2px] w-10 bg-red-600" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            {purpose.label}
          </span>
        </div>

        <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {purpose.heading}
        </h2>

        <p className="mt-5 max-w-[620px] text-base leading-8 text-slate-600">
          {purpose.description}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-3">
        {purpose.pillars.map(({ number, title, description, Icon }) => (
          <article
            key={number}
            className="group bg-white p-7 transition-colors duration-300 hover:bg-[#102c59] sm:p-8 lg:p-9"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold tracking-widest text-red-600">
                {number}
              </span>

              <Icon
                aria-hidden="true"
                size={27}
                strokeWidth={1.5}
                className="text-[#102c59] transition-colors duration-300 group-hover:text-white"
              />
            </div>

            <h3 className="mt-10 text-xl font-semibold transition-colors duration-300 group-hover:text-white sm:text-2xl">
              {title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 transition-colors duration-300 group-hover:text-slate-300 sm:text-base">
              {description}
            </p>

            <div className="mt-8 h-[2px] w-10 bg-red-600 transition-all duration-300 group-hover:w-16" />
          </article>
        ))}
      </div>
    </section>
  );
}