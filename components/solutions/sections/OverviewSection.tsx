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
        sm:h-[300px] sm:p-8
        lg:h-[350px] lg:p-10
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
    </section>
  );
}