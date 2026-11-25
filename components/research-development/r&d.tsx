
import PageHero from "@/components/shared-page/PageHero";
import PageLayout from "@/components/shared-page/PageLayout";
import PageOverview from "@/components/shared-page/PageOverview";
import type { PageSectionItem } from "@/components/shared-page/types";

import { rdSectionData } from "@/data/research-development/r&d";

import ResearchAreasSection from "./sections/ResearchAreasSection";
import WorkflowSection from "./sections/WorkflowSection";
import SustainabilitySection from "./sections/SustainabilitySection";
import InnovationShowcaseSection from "./sections/InnovationShowcaseSection";
import IITGuwahatiSection from "./sections/IITGuwahatiSection";
import Enquiry from "@/components/enquiry";
import Footer from "@/components/footer";
import Container from "../container";

const sections: PageSectionItem[] = [
  {
    id: "research-areas",
    label: "Research Areas",
    content: <ResearchAreasSection />,
  },
  {
    id: "iit-guwahati",
    label: "IIT Guwahati",
    content: <IITGuwahatiSection />,
  },
  
];

export default function ResearchDevelopment() {
  const { hero, overview } = rdSectionData;

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
          { label: "Research and Development" },
        ]}
        ctaLabel="Discuss an Opportunity"
        ctaHref="#enquiry"
      />

      <PageOverview
        heading={overview.heading}
        description={overview.description}
      />

      <PageLayout sections={sections} />
      <WorkflowSection />
      <Container>
        <InnovationShowcaseSection />
      </Container>
      <SustainabilitySection />

      <Enquiry />
      <Footer />
    </main>
  );
}
