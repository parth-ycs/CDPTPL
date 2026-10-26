import type { ServicesSectionData } from "../types";

export default function ServicesSection({ data }: { data: ServicesSectionData }) {
  return (
    <div>
      <h2 className="font-heading font-bold tracking-normal  text-[clamp(1.5rem,3vw,2.5rem)] leading-tight text-ink ">
        {data.heading}
      </h2>
      {data.intro && (
        <p className="mt-3 max-w-[560px] text-base leading-[1.65] text-muted">
          {data.intro}
        </p>
      )}

      <div className="mt-8 grid gap-px bg-line sm:grid-cols-2">
        {data.items.map((item) => (
          <div key={item.title} className="bg-white p-6 lg:p-8">
            <h3 className="border-l-2 border-brand-red pl-3 text-lg font-semibold text-ink">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-[1.65] text-muted">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
