import { Suspense } from "react";

import PageHero from "@/components/shared-page/PageHero";
import PageLayout from "@/components/shared-page/PageLayout";
import PageOverview from "@/components/shared-page/PageOverview";
import type { PageSectionItem } from "@/components/shared-page/types";

import { globalPresencePage } from "@/data/global-presence";
import GlobeExplorerSection, { GlobeExplorerSkeleton } from "./sections/GlobeExplorerSection";
import Footer from "@/components/footer";
import Enquiry from "@/components/enquiry";

export default function GlobalPresence() {
  const { hero, overview } = globalPresencePage;

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

      <PageOverview
        heading={overview.heading}
        description={overview.description}
      />
      <GlobeExplorerSection />
      <Enquiry />
      <Footer />
    </main>
  );
}