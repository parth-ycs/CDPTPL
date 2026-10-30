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
        <h2 className="font-heading font-bold tracking-normal text-[clamp(1.5rem,3vw,2.5rem)] leading-tight sm:text-[clamp(2rem,3vw,3.5rem)] lg:text-[clamp(2.5rem,3vw,4rem)]">
          {data.heading}
        </h2>

        <p
          className="
            mt-4 max-w-xl
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
                  font-heading
                  text-2xl leading-tight font-normal
                  sm:text-3xl lg:text-4xl
                "
              >
                {kpi.value}
              </p>

              <p
                className="
                  mt-2
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