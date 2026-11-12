import Image from "next/image";
import Link from "next/link";
import { aboutPageData } from "@/data/about";
import Container from "@/components/container";

export default function FeaturedAwardsSection() {
  const { headingStart, headingHighlight, items, cta } =
    aboutPageData.awards;

  return (
    <section id="awards" className=" text-[#171717]">
      <Container className="!py-16 lg:!py-20">
        <h2 className="mb-12 text-center font-[var(--font-noa-voren)] text-4xl tracking-tight sm:text-5xl">
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
              <p className="mt-3 text-[17px] leading-tight">{award.title}</p>
            </article>
          ))}
        </div>

        {/* <div className="mt-12 flex justify-center">
          <Link
            href={cta.href}
            className="flex items-center gap-2 text-base font-medium transition-colors hover:text-[#e32b2b]"
          >
            <span className="h-3 w-3 rounded-full bg-[#e32b2b]" />
            {cta.label}
          </Link>
        </div> */}
      </Container>
    </section>
  );
}