import Link from "next/link";
import Navbar from "@/components/landing_page/navbar";
import Container from "@/components/landing_page/container";
import type { ServiceHeroContent } from "./types";

type ServiceHeroProps = ServiceHeroContent & {
  /** Image shown below the text (rounded banner) */
  image?: string;
  imageAlt?: string;
  /** CTA button */
  ctaLabel?: string;
  ctaHref?: string;
};

export default function ServiceHero({
  name,
  tagline,
  description,
  image = "/images/Hero_BG.png",
  imageAlt,
  ctaLabel = "Contact us",
  ctaHref = "#contact",
}: ServiceHeroProps) {
  return (
    <section className="bg-white text-brand-deep">
      {/* Navbar sits in a dark bar so it stays readable on the white page.
          Remove this wrapper if your Navbar already handles its own background. */}
      <header className="relative h-[80px] bg-brand-deep">
        <Navbar />
      </header>

      <Container className="pt-8 pb-12 lg:pb-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-brand-deep/70 [font-family:'Bai_Jamjuree']">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-brand-deep">
                Home
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li>
              <Link href="/services" className="hover:text-brand-deep">
                Services
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li aria-current="page" className="font-semibold text-brand-deep">
              {name}
            </li>
          </ol>
        </nav>

        {/* Centered text block */}
        <div className="mx-auto mt-12 flex max-w-[920px] flex-col items-center text-center lg:mt-16">
          <span className="text-sm font-medium uppercase tracking-wider text-emerald-700 [font-family:'Bai_Jamjuree']">
            {tagline}
          </span>

          <h1 className="mt-6 [font-family:'Noa_Voren'] text-[clamp(36px,6vw,80px)] leading-[1.05] font-semibold tracking-tight">
            {name}
          </h1>

          <p className="mt-8 max-w-[620px] text-base leading-[1.65] text-brand-deep/75 sm:text-lg [font-family:'Bai_Jamjuree']">
            {description}
          </p>

          <Link
            href={ctaHref}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-emerald-800 [font-family:'Bai_Jamjuree']"
          >
            <span aria-hidden>→</span>
            {ctaLabel}
          </Link>
        </div>

        {/* Image banner */}
        <div className="mt-12 overflow-hidden rounded-3xl lg:mt-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt ?? name}
            className="h-[240px] w-full object-cover sm:h-[360px] lg:h-[480px]"
          />
        </div>
      </Container>
    </section>
  );
}