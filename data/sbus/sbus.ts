
import processEquipmentGroups from "./sbu1/navigation-groups";

import equipmentSolutions from "./sbu1/equipment";
import technologySolutions from "./sbu1/technology";
import massTransferSolutions from "./sbu1/mass-transfer";

import processPlantsAndEpc from "./process-plants-epc";
import greenProcessTechnologies from "./green-process-technologies";
import membranesAndAdvancedSeparation from "./membranes-advanced-separation";
import hydrogenAndNewEnergy from "./hydrogen-new-energy";
import waterWastewaterTreatment from "./water-wastewater-treatment";

import type {
  ServiceHeroContent as SolutionHeroContent,
  ServiceSection as SolutionSection,
  ServiceConfig as SolutionConfig,
} from "@/components/solutions/types";

// ---------------------------------------------
// TYPES
// ---------------------------------------------

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
  href: string;
}

type RawSBU = Omit<SBU, "href" | "slug">;

// ---------------------------------------------
// HELPERS
// ---------------------------------------------

export function solutionHref(slug: string) {
  return `/solutions/${slug}`;
}

export function sbuHref(
  sbu: Pick<SBU, "slug" | "children" | "navigationGroups">
) {
  const firstGroup = sbu.navigationGroups?.[0];

  if (firstGroup) {
    return `/solutions/${sbu.slug}/${firstGroup.slug}`;
  }

  return sbu.children[0]
    ? solutionHref(sbu.children[0].slug)
    : "/solutions";
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// ---------------------------------------------
// SBU 1: PROCESS EQUIPMENT & SEPARATION
// ---------------------------------------------

const processEquipmentAndSeparation: RawSBU = {
  name: "Process Equipment & Separation",

  offerings:
    "Process equipment, process technologies, and mass transfer solutions for industrial applications.",

  navigationGroups: processEquipmentGroups,

  children: [
    ...equipmentSolutions,
    ...technologySolutions,
    ...massTransferSolutions,
  ],
};

// ---------------------------------------------
// ALL SIX SBUs
// ---------------------------------------------

const rawSbus: RawSBU[] = [
  processEquipmentAndSeparation,
  processPlantsAndEpc,
  greenProcessTechnologies,
  membranesAndAdvancedSeparation,
  hydrogenAndNewEnergy,
  waterWastewaterTreatment,
];

// ---------------------------------------------
// CENTRAL SBU REGISTRY
// ---------------------------------------------

const sbus: SBU[] = rawSbus.map((sbu) => {
  const currentSbu = {
    ...sbu,
    slug:
      sbu.name === "Process Equipment & Separation"
        ? "process-equipment-separation"
        : slugify(sbu.name),
  };

  return {
    ...currentSbu,
    href: sbuHref(currentSbu),
  };
});

export default sbus;

// ---------------------------------------------
// SOLUTION HELPERS
// ---------------------------------------------

export function getSolution(
  slug: string
): SolutionConfig | undefined {
  for (const sbu of sbus) {
    const child = sbu.children.find(
      (item) => item.slug === slug
    );

    if (child) {
      return {
        slug: child.slug,
        hero: child.hero,
        sections: child.sections,
      };
    }
  }

  return undefined;
}

// All individual solution pages
export const solutions: SolutionConfig[] = sbus.flatMap(
  (sbu) =>
    sbu.children.map((child) => ({
      slug: child.slug,
      hero: child.hero,
      sections: child.sections,
    }))
);

// ---------------------------------------------
// DEVELOPMENT VALIDATION
// ---------------------------------------------

if (process.env.NODE_ENV !== "production") {
  const seen = new Set<string>();

  for (const sbu of sbus) {
    for (const child of sbu.children) {
      if (seen.has(child.slug)) {
        console.warn(
          `[sbus] Duplicate solution slug: "${child.slug}"`
        );
      }

      seen.add(child.slug);

      const sectionIds = new Set<string>();

      for (const section of child.sections) {
        if (sectionIds.has(section.id)) {
          console.warn(
            `[sbus] Duplicate section id "${section.id}" in "${child.slug}".`
          );
        }

        sectionIds.add(section.id);
      }
    }

    for (const group of sbu.navigationGroups ?? []) {
      const matchingChildren = sbu.children.filter(
        (child) => child.groupSlug === group.slug
      );

      if (!matchingChildren.length) {
        console.warn(
          `[sbus] Navigation group "${group.title}" has no solutions.`
        );
      }
    }
  }

  console.info(
    `[sbus] Loaded ${sbus.length} SBUs and ${seen.size} solutions.`
  );
}

export type { SolutionConfig };
