
import type { Metadata } from "next";

import ResearchDevelopment from "@/components/research-development/r&d";
import Enquiry from "@/components/enquiry";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Research & Development | Chemdist Group",
  description:
    "Explore research approaches, process innovation, engineering development and sustainable industrial technologies at Chemdist.",
};

export default function ResearchDevelopmentPage() {
  return (
    <>
      <ResearchDevelopment />

      <div id="enquiry" className="scroll-mt-24">
        <Enquiry />
      </div>

      <Footer />
    </>
  );
}
