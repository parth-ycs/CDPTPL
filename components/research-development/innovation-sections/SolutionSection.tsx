import Image from "next/image";
import { Check } from "lucide-react";
import type { InnovationData } from "@/data/research-development/innovations/types";

interface Props {
  data: InnovationData["solution"];
}

export default function SolutionSection({ data }: Props) {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {data.image && (
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src={data.image}
              alt={data.imageAlt ?? data.heading}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        )}

        <div className={data.image ? "" : "lg:col-span-2"}>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">
            {data.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-brand-deep sm:text-4xl">
            {data.heading}
          </h2>
          <p className="mt-5 leading-8 text-ink">{data.description}</p>

          {data.points.length > 0 && (
            <ul className="mt-6 space-y-3">
              {data.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-7 text-ink">
                  <Check size={18} className="mt-1 shrink-0 text-brand-blue" />
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}