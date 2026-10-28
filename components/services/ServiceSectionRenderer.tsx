import OverviewSection from "./sections/OverviewSection";
import ProductsSection from "./sections/ProductsSection";
import ServicesSection from "./sections/ServicesSection";
import IndustriesSection from "@/components/landing_page/industries";
import CapabilitiesSection from "./sections/CapabilitiesSection";
import TechnicalSpecificationsSection from "./sections/TechnicalSpecificationsSection";
import ProcessFlowSection from "./sections/ProcessFlowSection";
import LifecycleSupportSection from "./sections/LifecycleSupportSection";
import StandardsCertificationsSection from "./sections/StandardsCertificationsSection";
import PerformanceSustainabilitySection from "./sections/PerformanceSustainabilitySection";
import DownloadsResourcesSection from "./sections/DownloadsResourcesSection";
import FAQsSection from "./sections/FAQsSection";

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

              case "capabilities":
                return <CapabilitiesSection data={section} />;

              case "technical-specifications":
                return <TechnicalSpecificationsSection data={section} />;

              case "process-flow":
                return <ProcessFlowSection data={section} />;

              case "lifecycle-support":
                return <LifecycleSupportSection data={section} />;

              case "standards-certifications":
                return <StandardsCertificationsSection data={section} />;

              case "performance-sustainability":
                return <PerformanceSustainabilitySection data={section} />;

              case "downloads-resources":
                return <DownloadsResourcesSection data={section} />;

              case "faqs":
                return <FAQsSection data={section} />;

              default: {
                const exhaustiveCheck: never = section;
                return exhaustiveCheck;
              }
            }
          })()}
        </section>
      ))}
    </div>
  );
}
