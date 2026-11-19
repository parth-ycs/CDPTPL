import Image from "next/image";

import PageHero from "@/components/shared-page/PageHero";
import PageOverview from "@/components/shared-page/PageOverview";

import Enquiry from "@/components/enquiry";
import Footer from "@/components/footer";
import Container from "@/components/container";
import {
  csrPageData,
  csrInitiatives,
} from "@/data/csr";

function InitiativeCard({
  item,
  index,
}: {
  item: (typeof csrInitiatives)[number];
  index: number;
}) {
  const isReversed = index % 2 !== 0;

  return (
    <article
      className={`group grid grid-cols-1 items-center gap-8 py-10 md:grid-cols-2 md:gap-16 lg:gap-20 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-sm bg-pale ${
          isReversed ? "md:order-2" : "md:order-1"
        }`}
      >
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />
      </div>

      {/* Content */}
      <div
        className={`flex flex-col items-start ${
          isReversed ? "md:order-1" : "md:order-2"
        }`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-blue">
            {item.category}
          </span>

          <span className="h-1 w-1 rounded-full bg-muted" />

          <span className="text-xs text-muted">
            {item.location}
          </span>
        </div>

        <h3 className="mt-5 max-w-xl font-heading text-2xl font-bold leading-[1.2] tracking-tight text-brand-deep sm:text-3xl">
          {item.title}
        </h3>

        <p className="mt-5 max-w-lg text-sm leading-7 text-muted">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function CSR() {
  const {
    hero,
    overview,
    initiativesSection,
    commitment,
  } = csrPageData;

  return (
    <main className="bg-white text-ink">

      {/* Hero */}
      <PageHero
        name={hero.heading}
        tagline={hero.eyebrow}
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Corporate Social Responsibility" },
        ]}
        ctaLabel="Explore Our Initiatives"
        ctaHref="#csr-initiatives"
      />

      {/* Overview */}
      <PageOverview
        heading={overview.heading}
        description={overview.description}
      />
    <Container>
      {/* Initiatives */}
      <section
        id="csr-initiatives"
        className="scroll-mt-24 "
      >
        <div className="mx-auto max-w-[1500px]">

          <div className="mb-8 max-w-2xl">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue">
              {initiativesSection.eyebrow}
            </p>

            <h2 className="font-heading text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl">
              {initiativesSection.heading}
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted">
              {initiativesSection.description}
            </p>
          </div>

          <div>
            {csrInitiatives.map((item, index) => (
                <InitiativeCard
                key={item.id}
                item={item}
                index={index}
                />
            ))}
            </div>

        </div>
      </section>

      {/* Commitment */}
        <section className="py-20">
        <div className="mx-auto max-w-[1500px]">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Left Content */}
            <div className="max-w-xl">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue">
                {commitment.eyebrow}
                </p>

                <h2 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-brand-deep sm:text-5xl">
                {commitment.heading}
                </h2>

                <p className="mt-6 text-sm leading-8 text-muted">
                {commitment.description}
                </p>

                <div className="mt-9 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-brand-blue" />
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-deep">
                    Responsibility in Action
                </span>
                </div>
            </div>

            {/* Right Image */}
            <div className="relative">
                <div className="relative aspect-[7/4] overflow-hidden rounded-lg bg-pale">
                <Image
                    src={commitment.image}
                    alt={commitment.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/65 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-7 sm:p-9">
                    <p className="max-w-sm font-heading text-xl font-semibold leading-snug text-white sm:text-2xl">
                    {commitment.imageLabel}
                    </p>
                </div>
                </div>

                {/* Decorative accent */}
                <div className="absolute -bottom-3 -right-3 -z-10 h-28 w-28 border-b-2 border-r-2 border-brand-blue/30" />
            </div>

            </div>
        </div>
        </section>
      </Container>
      <Enquiry />
      <Footer />

    </main>
  );
}