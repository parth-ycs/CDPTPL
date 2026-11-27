import Hero from "@/components/landing_page/hero";
import Industries from "@/components/landing_page/industries";
import News from "@/components/landing_page/news";
import Enquiry from "@/components/enquiry";
import Footer from "@/components/footer";
import AboutUsSection from "@/components/landing_page/about-us";
import CoreCapabilitiesSection from "@/components/landing_page/core-capabilities";
import FeaturedTechnologies from "@/components/landing_page/featured-technology";
import ProjectsShowcase from "@/components/landing_page/ProjectsShowcase";
import ResearchDevelopment from "@/components/landing_page/research-development";
import GlobalPresenceSection from "@/components/landing_page/global_presence/global-presence";
import { getProjects } from "@/lib/db/queries/projects";

export const dynamic = "force-dynamic";

export default function Page() {
  const projects = getProjects();

  return (
    <main>
      <Hero />
      <AboutUsSection />
      <CoreCapabilitiesSection />
      <FeaturedTechnologies />
      <ProjectsShowcase projects={projects} />
      <GlobalPresenceSection />
      <ResearchDevelopment />
      <Industries />
      <News />
      <Enquiry />
      <Footer />
    </main>
  );
}