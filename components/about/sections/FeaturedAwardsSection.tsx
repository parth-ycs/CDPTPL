
import Image from "next/image";
import { aboutPageData } from "@/data/about";
import Container from "@/components/container";

export default function FeaturedAwardsSection() {
  const { headingStart, headingHighlight, items } =
    aboutPageData.awards;

  return (
    <section id="awards" className="text-[#171717]">
        <h2 className="mb-12 text-center font-heading text-h2 tracking-tight">
          {headingStart}{" "}
          <span className="text-brand-blue">{headingHighlight}</span>
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((award) => (
            <article key={award.id} className="group">
              <div className="relative aspect-[183/240] overflow-hidden rounded-xl bg-[#d9dee5]">
                <Image
                  src={award.image}
                  alt={award.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <p className="mt-3 text-body text-brand-deep">
                {award.title}
              </p>
            </article>
          ))}
        </div>

    </section>
  );
}
