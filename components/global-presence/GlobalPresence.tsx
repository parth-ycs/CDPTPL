import PageHero from "@/components/shared-page/PageHero";
import PageOverview from "@/components/shared-page/PageOverview";
import { globalPresencePage, type GlobalLocation } from "@/data/global-presence";
import GlobeExplorerSection from "./sections/GlobeExplorerSection";
import Footer from "@/components/footer";
import Enquiry from "@/components/enquiry";

export default function GlobalPresence({
  locations,
}: {
  locations: GlobalLocation[];
}) {
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
      <GlobeExplorerSection locations={locations} />
      <Enquiry />
      <Footer />
    </main>
  );
}