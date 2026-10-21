import type { OverviewSectionData } from "../types";

export default function OverviewSection({
  data,
}: {
  data: OverviewSectionData;
}) {
  return (
    <section
      className="
        flex h-[360px] w-full flex-col justify-between
        rounded-2xl bg-brand-medium p-6 text-white
        sm:h-[380px] sm:p-8
        lg:h-[500px] lg:p-10
      "
    >
      {/* Content */}
      <div className="max-w-2xl">
        <h2
          className="
            [font-family:'Noa_Voren']
            text-[clamp(26px,2.5vw,36px)]
            leading-[1.15] font-normal
          "
        >
          {data.heading}
        </h2>

        <p
          className="
            mt-4 max-w-xl
            [font-family:'Bai_Jamjuree']
            text-sm leading-6 text-white/80
            sm:text-base sm:leading-7
          "
        >
          {data.description}
        </p>
      </div>

      {/* KPIs */}
      {data.kpis?.length > 0 && (
        <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-5 sm:gap-8 sm:pt-6">
          {data.kpis.slice(0, 3).map((kpi) => (
            <div key={kpi.label} className="min-w-0">
              <p
                className="
                  [font-family:'Noa_Voren']
                  text-2xl leading-tight font-normal
                  sm:text-3xl lg:text-4xl
                "
              >
                {kpi.value}
              </p>

              <p
                className="
                  mt-2 [font-family:'Bai_Jamjuree']
                  text-xs leading-4 text-white/70
                  sm:text-sm sm:leading-5
                "
              >
                {kpi.label}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}