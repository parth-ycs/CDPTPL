
import type { PageSectionItem } from "@/components/shared-page/types";

import PageHero from "@/components/shared-page/PageHero";
import PageLayout from "@/components/shared-page/PageLayout";
import PageOverview from "@/components/shared-page/PageOverview";

import { patentsPageData } from "@/data/patents";

import PatentsSection from "@/components/patents/sections/PatentsSection";

import Enquiry from "@/components/enquiry";
import Footer from "@/components/footer";

const sections: PageSectionItem[] = [
  {
    id: "patents",
    label: "Our Patents",
    content: <PatentsSection />,
  },
];

export default function PatentsPage() {
  const { hero, overview } = patentsPageData;

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
          { label: "Patents" },
        ]}
        ctaLabel="Explore Our Patents"
        ctaHref="#patents"
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
