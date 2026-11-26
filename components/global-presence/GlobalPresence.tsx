import { Suspense } from "react";
import { Building2, Factory, Globe2 } from "lucide-react";

import PageHero from "@/components/shared-page/PageHero";
import PageLayout from "@/components/shared-page/PageLayout";
import type { PageSectionItem } from "@/components/shared-page/types";

import { globalPresenceLocations, globalPresencePage } from "@/data/global-presence";

import OverviewSection from "./sections/OverviewSection";
import GlobeExplorerSection, { GlobeExplorerSkeleton } from "./sections/GlobeExplorerSection";
import Footer from "@/components/footer";
import Enquiry from "@/components/enquiry";

const sections: PageSectionItem[] = [
  {
    id: "overview",
    label: "Overview",
    content: <OverviewSection />,
  },
  {
    id: "explore",
    label: "Explore the Globe",
    // useSearchParams needs a Suspense boundary
    content: (
      <Suspense fallback={<GlobeExplorerSkeleton />}>
        <GlobeExplorerSection />
      </Suspense>
    ),
  },
];

export default function GlobalPresence() {
  const { hero } = globalPresencePage;

  const officeCount = globalPresenceLocations.reduce((sum, l) => sum + l.offices.length, 0);
  const projectCount = globalPresenceLocations.reduce((sum, l) => sum + l.projects.length, 0);

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
          { label: "Global Presence" },
        ]}
        ctaLabel={hero.cta.label}
        ctaHref={hero.cta.href}
      />

      <PageLayout sections={sections} />
      <Enquiry />
      <Footer />
    </main>
  );
}
