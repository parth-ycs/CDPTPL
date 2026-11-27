import type { Metadata } from "next";

import { getProjectCategories, getProjects } from "@/lib/db/queries/projects";
import ProjectsPage from "@/components/projects/projects";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Projects & Case Studies | Chemdist Group",
  description:
    "Explore Chemdist Group's industrial projects, engineering capabilities, process plants, and EPC execution references.",
};

export default function ProjectsRoute() {
  const projects = getProjects();
  const categories = ["ALL PROJECTS", ...getProjectCategories()];

  return <ProjectsPage projects={projects} categories={categories} />;
}