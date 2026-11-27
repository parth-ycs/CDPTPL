import type { ProjectData } from "./types";

export type { ProjectData, ProjectDetails } from "./types";

export const INNOVATION_SHOWCASE_CATEGORY = "Innovation Showcase";

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

export function getProjectCategory(project: ProjectData) {
  return project.category || project.hero.eyebrow;
}

export function getProjectHref(id: string) {
  return `/projects/${id}`;
}