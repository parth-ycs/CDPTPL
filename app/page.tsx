import Hero from "@/components/landing_page/hero";
import ProcessSection from "@/components/landing_page/process-section";
import GlobalPresence from "@/components/landing_page/global-presence";
import Industries from "@/components/landing_page/industries";
import News from "@/components/landing_page/news";
import Enquiry from "@/components/landing_page/enquiry";
import Footer from "@/components/landing_page/footer";
import AboutUsSection from "@/components/landing_page/about-us";
import CoreCapabilitiesSection from "@/components/landing_page/core-capabilities";
import FeaturedTechnologies from "@/components/landing_page/featured-technology";
import ProjectsShowcase from "@/components/landing_page/ProjectsShowcase";
import ResearchDevelopment from "@/components/landing_page/research-development";

export default function Page() {
  return (
    <main>
      <Hero />
      <AboutUsSection />
      <CoreCapabilitiesSection />
      <FeaturedTechnologies />
      
      <ProjectsShowcase />
      <GlobalPresence />
      <ResearchDevelopment />
      <Industries />
      <News />
      <Enquiry />
      <Footer />
    </main>
  );
}
