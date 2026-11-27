import type {
  ServiceHeroContent as SolutionHeroContent,
  ServiceSection as SolutionSection,
  ServiceConfig as SolutionConfig,
} from "@/components/solutions/types";

export interface SolutionChild {
  slug: string;
  groupSlug?: string;
  hero: SolutionHeroContent;
  sections: SolutionSection[];
}

export interface NavigationGroup {
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  description: string;
  overview: string;
  image: string;
}

export interface SBU {
  name: string;
  slug: string;
  offerings: string;
  children: SolutionChild[];
  navigationGroups?: NavigationGroup[];
  number: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
  capabilities: string[];
  href: string;
}

export type SBUListItem = {
  number: string;
  title: string;
  slug: string;
  href: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  capabilities: string[];
};

export type SolutionRecord = SolutionChild & {
  id: string;
  sbuSlug: string;
  displayOrder: number;
};

export type SBUGroupRecord = NavigationGroup & {
  sbuSlug: string;
  displayOrder: number;
};

export type { SolutionConfig };

export function sbuHref(sbu: Pick<SBU, "slug">) {
  return `/solutions/${sbu.slug}`;
}

export function solutionHref(sbuSlug: string, solutionSlug: string) {
  return `/solutions/${sbuSlug}/${solutionSlug}`;
}

export const sbuPageData = {
  hero: {
    heading: "Our Solutions",
    eyebrow: "Engineering a Better Future",
    description:
      "Integrated engineering capabilities and technology-driven solutions for evolving industrial challenges.",
    image: "/images/solutions/solutions-hero.jpg",
    imageAlt: "Industrial engineering and process technology",
    ctaLabel: "Explore Our Solutions",
    ctaHref: "#sbu-directory",
  },

  overview: {
    heading: {
      before: "Engineering Expertise Across",
      highlight: "Six Business Units",
      after: "",
    },
    description:
      "Our diverse capabilities bring together specialised engineering, process technologies and industrial expertise. Through six strategic business units, we develop solutions that address complex operational requirements, improve process performance and support the evolving needs of industries.",
  },

  directory: {
    eyebrow: "Our Business Units",
    heading: "Explore Our Solutions",
    description:
      "Discover our specialised capabilities and technologies across six strategic business units.",
  },
};