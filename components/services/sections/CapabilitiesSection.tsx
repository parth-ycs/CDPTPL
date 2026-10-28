
import type { CapabilitiesSectionData } from "../types";

export default function CapabilitiesSection({
  data,
}: {
  data: CapabilitiesSectionData;
}) {
  return (
    <div>
      <h2 className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-ink">
        {data.heading}
      </h2>

      {data.intro && (
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
          {data.intro}
        </p>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {data.items.map((item) => (
          <article
            key={item.title}
            className="border border-line p-6"
          >
            {item.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.image}
                alt=""
                className="mb-5 h-48 w-full object-cover"
              />
            )}

            <h3 className="text-lg font-semibold text-brand-blue">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-muted">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
