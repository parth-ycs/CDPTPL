import type { Metadata } from "next";

import ProjectsPage from "@/components/projects/projects";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Projects & Case Studies | Chemdist Group",
  description:
    "Explore Chemdist Group's industrial projects, engineering capabilities, process plants, and EPC execution references.",
};

export default function ProjectsRoute() {
  return (
    <>
      <ProjectsPage />
      <Footer />
    </>
  );
}