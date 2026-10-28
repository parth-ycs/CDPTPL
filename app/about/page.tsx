import type { Metadata } from "next";

import AboutPage from "@/components/about/about";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "About Us | Chemdist Group",
  description:
    "Discover Chemdist Group, our purpose, core values, and commitment to responsible industrial growth.",
};

export default function AboutRoute() {
  return (
    <>
      <AboutPage />
      <Footer />
    </>
  );
}