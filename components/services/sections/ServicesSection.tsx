import type { ServicesSectionData } from "../types";

export default function ServicesSection({ data }: { data: ServicesSectionData }) {
  return (
    <div>
      <h2 className="[font-family:'Noa_Voren'] text-[clamp(24px,2.6vw,34px)] leading-[1.15] font-normal text-ink">
        {data.heading}
      </h2>
      {data.intro && (
        <p className="mt-3 max-w-[560px] text-base leading-[1.65] text-muted [font-family:'Bai_Jamjuree']">
          {data.intro}
        </p>
      )}

      <div className="mt-8 grid gap-px bg-line sm:grid-cols-2">
        {data.items.map((item) => (
          <div key={item.title} className="bg-white p-6 lg:p-8">
            <h3 className="border-l-2 border-brand-red pl-3 text-lg font-semibold text-ink [font-family:'Bai_Jamjuree']">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-[1.65] text-muted [font-family:'Bai_Jamjuree']">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
