import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { projects, getProjectById } from "@/data/projects/projects";
import ProjectPage from "@/components/projects/project/ProjectPage";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return { title: "Project Not Found | Chemdist Group" };
  }

  return {
    title: `${project.hero.heading} | Chemdist Projects`,
    description: project.hero.description.slice(0, 160),
  };
}

export default async function ProjectRoute({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) notFound();

  const related = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return <ProjectPage project={project} related={related} />;
}