
import type { PageSectionItem } from "@/components/shared-page/types";

import PageHero from "@/components/shared-page/PageHero";
import PageLayout from "@/components/shared-page/PageLayout";

import { aboutPageData } from "@/data/about";

import IntroductionSection from "@/components/about/sections/IntroductionSection";
import FoundersLeadershipSection from "@/components/about/sections/FoundersLeadershipSection";
import VisionMissionSection from "@/components/about/sections/VisionMissionSection";
import JourneySection from "@/components/about/sections/JourneySection";
import FeaturedAwardsSection from "@/components/about/sections/FeaturedAwardsSection";


const sections: PageSectionItem[] = [
  {
    id: "who-we-are",
    label: "Who We Are",
    content: <IntroductionSection />,
  },
  {
    id: "leadership",
    label: "Our Leadership",
    content: <FoundersLeadershipSection />,
  },
  {
    id: "vision-mission",
    label: "Vision & Mission",
    content: <VisionMissionSection />,
  },
  {
    id: "our-journey",
    label: "Our Journey",
    content: <JourneySection />,
  },
  {
    id: "awards",
    label: "Awards",
    content: <FeaturedAwardsSection />,
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
