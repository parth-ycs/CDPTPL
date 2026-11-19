import Image from "next/image";
import type { InnovationData } from "@/data/research-development/innovations/types";

interface Props {
  data: InnovationData["problem"];
}

export default function ProblemSection({ data }: Props) {
  return (
    <section className="bg-pale px-6 py-16 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">
            {data.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-brand-deep sm:text-4xl">
            {data.heading}
          </h2>
          <p className="mt-5 leading-8 text-ink">{data.description}</p>
        </div>

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
      </div>
    </section>
  );
}