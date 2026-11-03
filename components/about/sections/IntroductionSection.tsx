
import { aboutPageData } from "@/data/about";

export default function IntroductionSection() {
  const { introduction } = aboutPageData;

  return (
    <section id="who-we-are" className="py-4">

      {/* OVERVIEW */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-red-600" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              {introduction.label}
            </span>
          </div>

          <h2 className="mt-6 max-w-[500px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {introduction.heading}
          </h2>
        </div>

        <div className="space-y-6 lg:pt-8">
          {introduction.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-[760px] text-base leading-8 text-slate-600 sm:text-lg sm:leading-9"
            >
              {paragraph}
            </p>
          ))}

          <div className="h-px w-full max-w-[760px] bg-slate-200" />
        </div>
      </div>

      {/* COMPANY KPI SECTION */}
      <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-4 xl:gap-7">
        {introduction.kpis.map((kpi) => (
          <article
            key={kpi.id}
            className="
              group relative flex min-h-[175px] flex-col justify-between
              overflow-hidden rounded-2xl border border-slate-200
              bg-white p-5
              transition-all duration-300
              hover:-translate-y-1 hover:border-slate-300
              hover:shadow-[0_12px_35px_rgba(15,23,42,0.07)]
              sm:min-h-[220px] sm:p-7
              lg:min-h-[250px] lg:p-8
            "
          >
            {/* KPI NUMBER */}
            <div className="flex items-start">
              <h3 className="text-[48px] font-light leading-none tracking-[-0.065em] text-[#102C59] sm:text-6xl lg:text-[76px]">
                {kpi.value}
              </h3>

              {kpi.suffix && (
                <span className="ml-1 text-[42px] font-light leading-none text-red-600 sm:text-5xl lg:text-6xl">
                  {kpi.suffix}
                </span>
              )}
            </div>

            {/* KPI LABEL */}
            <div className="mt-8">
              <p className="max-w-[200px] text-base font-medium leading-snug tracking-tight text-slate-800 sm:text-lg lg:text-xl">
                {kpi.label}
              </p>

              {/* Subtle accent */}
              <div className="mt-4 h-[2px] w-8 bg-red-600 transition-all duration-300 group-hover:w-14" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
