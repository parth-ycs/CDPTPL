import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  projects,
  getProjectById,
} from "@/data/projects";

import ProjectDetailPage from "@/components/projects/ProjectDetailPage";
import Footer from "@/components/footer";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found | Chemdist Group",
    };
  }

  return {
    title: `${project.title} | Chemdist Projects`,
    description: project.description.slice(0, 160),
  };
}

export default async function ProjectRoute({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter(
      (item) =>
        item.id !== project.id &&
        item.category === project.category,
    )
    .slice(0, 3);

  return (
    <>
      <ProjectDetailPage
        project={project}
        relatedProjects={relatedProjects}
      />
      <Footer />
    </>
  );
}