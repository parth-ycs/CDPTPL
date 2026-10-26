import OverviewSection from "./sections/OverviewSection";
import ProductsSection from "./sections/ProductsSection";
import ServicesSection from "./sections/ServicesSection";
import IndustriesSection from "@/components/landing_page/industries";
import type { ServiceSection } from "./types";

export default function ServiceSectionRenderer({
  sections,
}: {
  sections: ServiceSection[];
}) {
  return (
    <div className="space-y-16">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-28"
        >
          {(() => {
            switch (section.type) {
              case "overview":
                return <OverviewSection data={section} />;

              case "products":
                return <ProductsSection data={section} />;

              case "services":
                return <ServicesSection data={section} />;

              case "industries":
                return <IndustriesSection data={section} />;
            }
          })()}
        </section>
      ))}
    </div>
  );
}