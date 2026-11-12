"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";


import { sbuPageData } from "@/data/sbus";
import StackCard from "@/components/solutions/stacking-card";
import Container from "@/components/container";
import PageHero from "@/components/shared-page/PageHero";
import Enquiry from "@/components/enquiry";
import Footer from "@/components/footer";


export default function SolutionsPage() {
  const data = sbuPageData;
  const reduce = !!useReducedMotion();

  const stackRef = useRef<HTMLDivElement>(null);
  const total = data.sbus.length;

  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  // 0 -> (total - 1), measured in viewport heights
  const progress = useTransform(scrollYProgress, (v) => v * (total - 1));

  return (
    <main className="bg-white">
      <PageHero
        name={data.hero.heading}
        tagline={data.hero.eyebrow}
        description={data.hero.description}
        image={data.hero.image}
        imageAlt={data.hero.imageAlt}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
        ctaLabel={data.hero.ctaLabel}
        ctaHref={data.hero.ctaHref}
      />

      {/* OVERVIEW */}
      <section className="relative z-10 bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-8 border-t border-line pt-10 lg:grid-cols-2 lg:gap-16">
            <h2 className="max-w-2xl font-heading text-3xl font-semibold leading-[1.2] tracking-tight text-brand-deep sm:text-4xl lg:text-[40px]">
              {data.overview.heading.before}{" "}
              {data.overview.heading.highlight && (
                <span className="text-brand-blue">
                  {data.overview.heading.highlight}
                </span>
              )}{" "}
              {data.overview.heading.after}
            </h2>

            <p className="font-sans text-base leading-[1.75] text-ink sm:text-lg">
              {data.overview.description}
            </p>
          </div>
        </Container>
      </section>

      {/* SBU DIRECTORY: STACKING CARDS
          overflow-x-clip (NOT overflow-hidden) so the scaled-up incoming
          card doesn't cause horizontal scroll, while sticky still works. */}
      <section
        id="sbu-directory"
        className="relative z-20 overflow-x-clip bg-pale pt-10 sm:pt-16"
      >
        <div ref={stackRef} className="relative">
          {data.sbus.map((sbu, index) => (
            <StackCard
              key={sbu.slug}
              sbu={sbu}
              index={index}
              total={total}
              progress={progress}
              reduce={reduce}
            />
          ))}
        </div>
      </section>

      {/* ENQUIRY */}
      <div className="relative z-30 bg-white">
        <Enquiry />
      </div>

      {/* FOOTER */}
      <div className="relative z-30">
        <Footer />
      </div>
    </main>
  );
}
