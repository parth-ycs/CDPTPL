import Hero from "@/components/landing_page/hero";
import ProcessSection from "@/components/landing_page/process-section";
import GlobalPresence from "@/components/landing_page/global-presence";
import RDSection from "@/components/landing_page/rd-section";
import News from "@/components/landing_page/news";
import Enquiry from "@/components/landing_page/enquiry";
import Footer from "@/components/landing_page/footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <GlobalPresence />
      <RDSection />
      <News />
      <Enquiry />
      <Footer />
    </main>
  );
}
