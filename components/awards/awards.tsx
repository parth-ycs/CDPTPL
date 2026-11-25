
import Image from "next/image";

import PageHero from "@/components/shared-page/PageHero";
import PageOverview from "@/components/shared-page/PageOverview";

import Enquiry from "@/components/enquiry";
import Footer from "@/components/footer";

import { awardItems, awardsPageData } from "@/data/awards";

function AwardCard({
  item,
}: {
  item: (typeof awardItems)[number];
}) {
  return (
    <article className="group relative aspect-[4/5] overflow-hidden rounded-[18px] bg-brand-deep">
      {/* Award photograph */}
      <Image
        src={item.image}
        alt={item.imageAlt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition-all duration-500 group-hover:bg-black/65" />

      {/* Award icon watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Image
          src={awardsPageData.awardIcon}
          alt=""
          width={180}
          height={180}
          className="h-32 w-32 object-contain opacity-0 brightness-0 invert transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-[0.16] sm:h-40 sm:w-40"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7">
        {/* Category */}
        <p className="mb-3 text-caption font-semibold uppercase tracking-[0.16em] text-white/75 transition-transform duration-500 group-hover:-translate-y-1">
          {item.category}
        </p>

        {/* Title */}
        <h3 className="font-heading text-h3 font-bold tracking-tight text-white transition-transform duration-500 group-hover:-translate-y-3">
          {item.title}
        </h3>

        {/* Description */}
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:mt-4 group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <div className="overflow-hidden">
            <p className="text-caption text-white/80">
              {item.description}
            </p>
          </div>
        </div>

        {/* Optional year */}
        {item.year && (
          <p className="mt-3 text-caption uppercase tracking-widest text-white/60">
            {item.year}
          </p>
        )}
      </div>

      {/* Hover border */}
      <div className="pointer-events-none absolute inset-0 rounded-[18px] border border-white/0 transition-colors duration-500 group-hover:border-white/20" />
    </article>
  );
}

export default function Awards() {
  const { hero, overview, listing } = awardsPageData;

  return (
    <main className="bg-white text-ink">
      <PageHero
        name={hero.heading}
        tagline={hero.eyebrow}
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Awards and Recognition" },
        ]}
        ctaLabel="Explore Achievements"
        ctaHref="#awards-list"
      />

      <PageOverview
        heading={overview.heading}
        description={overview.description}
      />

      {/* Awards Gallery */}
      <section
        id="awards-list"
        className="scroll-mt-24 border-t border-line py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          {/* Section heading */}
          <div className="mb-12">
            <p className="mb-3 text-caption font-semibold uppercase tracking-[0.18em] text-brand-blue">
              {listing.eyebrow}
            </p>

            <h2 className="font-heading text-h2 font-bold text-brand-deep">
              {listing.heading}
            </h2>

            <p className="mt-4 max-w-xl text-body text-muted">
              {listing.description}
            </p>
          </div>

          {/* Award cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {awardItems.map((item) => (
              <AwardCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <Enquiry />
      <Footer />
    </main>
  );
}
