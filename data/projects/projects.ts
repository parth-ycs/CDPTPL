import { projectList } from "./project";
import type { ProjectData } from "./types";

export type { ProjectData };

export const projectsPageData = {
  hero: {
    heading: "Our Projects",
    eyebrow: "ENGINEERING EXCELLENCE",
    description:
      "Explore Chemdist Group's projects across process technology, energy and sustainable industry, from the engineering challenge to the delivered solution.",
    image: "/images/projects/hero.png",
    imageAlt: "Industrial process plant project",
  },
  overview: {
    heading: {
      before: "Turning research into",
      highlight: "engineering projects",
      after: "and execution.",
    },
    description:
      "Our projects bring together research, process engineering and execution experience. Each one shows how Chemdist approaches a complex industrial challenge, from the problem through to the engineered solution and its outcome.",
  },
};

export const projects: ProjectData[] = projectList;

export function getProjectCategory(project: ProjectData) {
  return project.category ?? project.hero.eyebrow;
}

export const projectCategories = [
  "ALL PROJECTS",
  ...Array.from(new Set(projects.map(getProjectCategory))),
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}

export function getProjectHref(id: string) {
  return `/projects/${id}`;
}