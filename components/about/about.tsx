import type { PageSectionItem } from "@/components/shared-page/types";

import PageHero from "@/components/shared-page/PageHero";
import PageLayout from "@/components/shared-page/PageLayout";

import { aboutPageData } from "@/data/about";

import IntroductionSection from "@/components/about/sections/IntroductionSection";
import PurposeSection from "@/components/about/sections/PurposeSection";
import ValuesSection from "@/components/about/sections/ValuesSection";
import CommitmentSection from "@/components/about/sections/CommitmentSection";
import AboutCTASection from "@/components/about/sections/AboutCTASection";

const sections: PageSectionItem[] = [
  {
    id: "who-we-are",
    label: "Who We Are",
    content: <IntroductionSection />,
  },
  {
    id: "purpose",
    label: "Our Purpose",
    content: <PurposeSection />,
  },
  {
    id: "values",
    label: "Our Values",
    content: <ValuesSection />,
  },
  {
    id: "commitment",
    label: "Our Commitment",
    content: <CommitmentSection />,
  },
  {
    id: "about-cta",
    label: "Let's Connect",
    content: <AboutCTASection />,
  },
];

export default function AboutPage() {
  const { hero } = aboutPageData;

  return (
    <main className="bg-white text-[#102c59]">
      <PageHero
        name={hero.heading}
        tagline={hero.eyebrow}
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        ctaLabel="Discover Chemdist"
        ctaHref="#who-we-are"
      />

      <PageLayout sections={sections} />
    </main>
  );
}