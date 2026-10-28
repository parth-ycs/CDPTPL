
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Container from "@/components/container";
import { ArrowRight } from "lucide-react";

import type { PageHeroContent } from "./types";

export default function PageHero({
  name,
  tagline,
  description,
  image,
  imageAlt,
  breadcrumbs,
  ctaLabel = "Contact us",
  ctaHref = "#enquiry",
}: PageHeroContent) {
  return (
    <section className="bg-white text-brand-deep">
      <header className="relative h-[80px] ">
        <Navbar />
      </header>

      <Container className="pt-1 pb-12 lg:pb-16">
        <div className="mx-auto mt-12 flex max-w-[920px] flex-col items-center text-center lg:mt-16">
          <span className="text-sm font-medium uppercase tracking-wider text-emerald-700">
            {tagline}
          </span>

          <h1 className="mt-6 font-heading text-[clamp(36px,6vw,80px)] leading-[1.05] font-semibold tracking-tight">
            {name}
          </h1>

          <p className="mt-8 max-w-[680px] text-base leading-[1.8] text-brand-deep/75 sm:text-lg">
            {description}
          </p>

          <Link
            href={ctaHref}
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-emerald-700 px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-emerald-800"
          >
            {ctaLabel}
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl lg:mt-16">
          <Image
            src={image}
            alt={imageAlt}
            width={1800}
            height={700}
            priority
            sizes="(max-width: 768px) 100vw, 1400px"
            className="h-[240px] w-full object-cover sm:h-[360px] lg:h-[480px]"
          />
        </div>
      </Container>
    </section>
  );
}
