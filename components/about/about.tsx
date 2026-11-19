import type { PageSectionItem } from "@/components/shared-page/types";

import PageHero from "@/components/shared-page/PageHero";
import PageOverview from "@/components/shared-page/PageOverview";
import PageLayout from "@/components/shared-page/PageLayout";

import { aboutPageData } from "@/data/about";

import FoundersLeadershipSection from "@/components/about/sections/FoundersLeadershipSection";
import VisionMissionSection from "@/components/about/sections/VisionMissionSection";
import JourneySection from "@/components/about/sections/JourneySection";
import FeaturedAwardsSection from "@/components/about/sections/FeaturedAwardsSection";
import CompanyProfileSection from "@/components/about/sections/CompanyProfileSection";

import Footer from "@/components/footer";
import Enquiry from "@/components/enquiry";

const sections: PageSectionItem[] = [
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
  {
    id: "company-profile",
    label: "Company Profile",
    content: <CompanyProfileSection />,
  },
];

export default function AboutPage() {
  const { hero, overview } = aboutPageData;

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
        ctaHref="#leadership"
      />

      <PageOverview
        heading={overview.heading}
        description={overview.description}
      />

      <PageLayout sections={sections} />

      <Enquiry />
      <Footer />
    </main>
  );
}