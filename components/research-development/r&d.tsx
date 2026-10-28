
import PageHero from "@/components/shared-page/PageHero";
import PageLayout from "@/components/shared-page/PageLayout";
import type { PageSectionItem } from "@/components/shared-page/types";

import { rdSectionData } from "@/data/r&d";

import OverviewSection from "./sections/OverviewSection";
import ResearchAreasSection from "./sections/ResearchAreasSection";
import WorkflowSection from "./sections/WorkflowSection";
import SustainabilitySection from "./sections/SustainabilitySection";
import ResearchGallerySection from "./sections/ResearchGallerySection";

const sections: PageSectionItem[] = [
  {
    id: "overview",
    label: "Overview",
    content: <OverviewSection />,
  },
  {
    id: "research-areas",
    label: "Research Areas",
    content: <ResearchAreasSection />,
  },
  {
    id: "research-workflow",
    label: "Our Approach",
    content: <WorkflowSection />,
  },
  {
    id: "sustainability",
    label: "Sustainability",
    content: <SustainabilitySection />,
  },
  {
    id: "research-gallery",
    label: "Research Gallery",
    content: <ResearchGallerySection />,
  },
];

export default function ResearchDevelopment() {
  const { hero } = rdSectionData;

  return (
    <main>
      <PageHero
        name={hero.heading}
        tagline={hero.eyebrow}
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Research & Development" },
        ]}
        ctaLabel="Discuss an Opportunity"
        ctaHref="#enquiry"
      />

      <PageLayout sections={sections} />
    </main>
  );
}
