import { Check } from "lucide-react";
import type { InnovationData } from "@/data/research-development/innovations/types";

interface Props {
  data: InnovationData["result"];
}

export default function ResultSection({ data }: Props) {
  return (
    <section className="bg-brand-deep px-6 py-16 text-white lg:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-light">
            {data.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">
            {data.heading}
          </h2>
          <p className="mt-5 leading-8 text-white/70">{data.description}</p>
        </div>

        {data.points.length > 0 && (
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-7 text-white/85">
                <Check size={18} className="mt-1 shrink-0 text-brand-light" />
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}