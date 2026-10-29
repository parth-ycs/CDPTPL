import type { Project } from "@/data/projects";
import Navbar from "../navbar";
import ProjectHero from "./detail/ProjectHero";
import ProjectOverview from "./detail/ProjectOverview";
import ProjectScope from "./detail/ProjectScope";
import RelatedProjects from "./detail/RelatedProjects";
import ProjectCTA from "./detail/ProjectCTA";

type ProjectDetailPageProps = {
  project: Project;
  relatedProjects: Project[];
};

export default function ProjectDetailPage({
  project,
  relatedProjects,
}: ProjectDetailPageProps) {
  return (
    <main className="overflow-hidden bg-white text-[#102c59]">
      <Navbar variant="dark" />

      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectScope project={project} />
      <RelatedProjects projects={relatedProjects} />
      <ProjectCTA />
    </main>
  );
}