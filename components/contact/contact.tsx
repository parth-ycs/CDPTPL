import PageHero from "@/components/shared-page/PageHero";
import {
  contactPageData,
  type ContactOffice,
  type ContactSettingsData,
} from "@/data/contact";
import ContactFormSection from "@/components/contact/sections/ContactFormSection";
import HeadquartersSection from "@/components/contact/sections/HeadquartersSection";
import OfficesSection from "@/components/contact/sections/OfficesSection";
import Footer from "@/components/footer";

type Props = {
  settings: ContactSettingsData;
  offices: ContactOffice[];
};

export default function Contact({ settings, offices }: Props) {
  const { hero } = contactPageData;

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
          { label: "Contact Us" },
        ]}
      />

      <ContactFormSection />
      <HeadquartersSection settings={settings} />
      <OfficesSection offices={offices} />

      <Footer />
    </main>
  );
}