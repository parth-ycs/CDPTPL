
import processEquipmentGroups from "./sbus/sbu1/navigation-groups";
import equipmentSolutions from "./sbus/sbu1/equipment/equipment";
import technologySolutions from "./sbus/sbu1/technology/technology";
import massTransferSolutions from "./sbus/sbu1/mass-transfer/mass-transfer";

import processPlantsAndEpc from "./sbus/sbu2/process-plants-epc";
import greenProcessTechnologies from "./sbus/sbu3/green-process-technologies";
import membranesAndAdvancedSeparation from "./sbus/sbu4/membranes-and-advanced-separation";
import hydrogenAndNewEnergy from "./sbus/sbu5/hydrogen-and-new-energy";
import waterAndWastewaterTreatment from "./sbus/sbu6/water-and-wastewater-treatment";

import type {
  ServiceHeroContent as SolutionHeroContent,
  ServiceSection as SolutionSection,
  ServiceConfig as SolutionConfig,
} from "@/components/solutions/types";

// =============================================
// TYPES
// =============================================

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

  // Directory and landing-page information
  number: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
  capabilities: string[];

  // Canonical SBU URL
  href: string;
}

type RawSBU = Omit<
  SBU,
  | "href"
  | "slug"
  | "number"
  | "eyebrow"
  | "image"
  | "imageAlt"
  | "capabilities"
>;

// =============================================
// URL HELPERS
// =============================================

export function sbuHref(sbu: Pick<SBU, "slug">) {
  return `/solutions/${sbu.slug}`;
}

export function solutionHref(
  sbuSlug: string,
  solutionSlug: string
) {
  return `/solutions/${sbuSlug}/${solutionSlug}`;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// =============================================
// SBU 1: PROCESS EQUIPMENT & SEPARATION
// =============================================

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

// =============================================
// ALL SIX SBUs
// =============================================

const rawSbus: RawSBU[] = [
  processEquipmentAndSeparation,
  processPlantsAndEpc,
  greenProcessTechnologies,
  membranesAndAdvancedSeparation,
  hydrogenAndNewEnergy,
  waterAndWastewaterTreatment,
];

// =============================================
// DIRECTORY PRESENTATION DATA
// Keyed by canonical SBU slug
// =============================================

const sbuPresentation = {
  "process-equipment-separation": {
    number: "01",
    eyebrow: "Process Engineering",
    image: "/images/solutions/sbu1/hero/image.png",
    imageAlt: "Industrial process equipment and separation systems",
    capabilities: [
      "Mass transfer equipment",
      "Separation systems",
      "Process internals and components",
    ],
  },

  "process-plants-and-epc": {
    number: "02",
    eyebrow: "Engineering & Project Execution",
    image: "/images/solutions/sbu2/hero/image.png",
    imageAlt: "Large-scale industrial process plant",
    capabilities: [
      "Process and detailed engineering",
      "Plant design and execution",
      "Turnkey EPC solutions",
    ],
  },

  "green-process-technologies": {
    number: "03",
    eyebrow: "Sustainable Engineering",
    image: "/images/solutions/sbu3/hero/image.png",
    imageAlt: "Sustainable industrial process technology",
    capabilities: [
      "Cleaner process technologies",
      "Energy and resource efficiency",
      "Sustainable process solutions",
    ],
  },

  "membranes-and-advanced-separation": {
    number: "04",
    eyebrow: "Advanced Materials & Technology",
    image: "/images/solutions/sbu4/hero/image.png",
    imageAlt: "Advanced membrane separation technology",
    capabilities: [
      "Membrane technologies",
      "Advanced filtration systems",
      "Separation and purification",
    ],
  },

  "hydrogen-and-new-energy": {
    number: "05",
    eyebrow: "Future Energy",
    image: "/images/solutions/sbu5/hero/image.png",
    imageAlt: "Hydrogen production and clean energy technology",
    capabilities: [
      "Hydrogen technologies",
      "New energy systems",
      "Energy transition solutions",
    ],
  },

  "water-and-wastewater-treatment": {
    number: "06",
    eyebrow: "Water & Environmental Solutions",
    image: "/images/solutions/sbu6/hero/image.png",
    imageAlt: "Industrial water and wastewater treatment facility",
    capabilities: [
      "Industrial water treatment",
      "Wastewater treatment",
      "Water recovery and reuse",
    ],
  },
} satisfies Record<
  string,
  {
    number: string;
    eyebrow: string;
    image: string;
    imageAlt: string;
    capabilities: string[];
  }
>;

// =============================================
// CENTRAL SBU REGISTRY
// =============================================

const sbus: SBU[] = rawSbus.map((sbu) => {
  const slug =
    sbu.name === "Process Equipment & Separation"
      ? "process-equipment-separation"
      : slugify(sbu.name);

  const presentation = sbuPresentation[
    slug as keyof typeof sbuPresentation
  ];

  if (!presentation) {
    throw new Error(
      `[sbus] Missing presentation data for "${slug}".`
    );
  }

  const currentSbu = {
    ...sbu,
    slug,
    ...presentation,
  };

  return {
    ...currentSbu,
    href: sbuHref(currentSbu),
  };
});

export default sbus;

// =============================================
// SOLUTIONS PAGE DATA
// =============================================

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

  // Derived from the central registry.
  // No duplicate SBU names, slugs or links.
  sbus: sbus.map((sbu) => ({
    number: sbu.number,
    title: sbu.name,
    slug: sbu.slug,
    href: sbu.href,
    eyebrow: sbu.eyebrow,
    description: sbu.offerings,
    image: sbu.image,
    imageAlt: sbu.imageAlt,
    capabilities: sbu.capabilities,
  })),
};

// =============================================
// SOLUTION HELPERS
// =============================================

export function getSBU(slug: string) {
  return sbus.find((sbu) => sbu.slug === slug);
}
export function getSBUGroup(groupSlug: string) {
  for (const sbu of sbus) {
    const group = sbu.navigationGroups?.find(
      (item) => item.slug === groupSlug
    );

    if (group) {
      return {
        sbu,
        group,
        children: sbu.children.filter(
          (child) => child.groupSlug === groupSlug
        ),
      };
    }
  }

  return undefined;
}

export function getSolution(
  sbuSlug: string,
  solutionSlug: string
): SolutionConfig | undefined {
  const sbu = getSBU(sbuSlug);

  if (!sbu) return undefined;

  const child = sbu.children.find(
    (item) => item.slug === solutionSlug
  );

  if (!child) return undefined;

  return {
    slug: child.slug,
    hero: child.hero,
    sections: child.sections,
  };
}

// All individual solutions with their parent SBU.
export const solutions = sbus.flatMap((sbu) =>
  sbu.children.map((child) => ({
    sbuSlug: sbu.slug,
    slug: child.slug,
    hero: child.hero,
    sections: child.sections,
  }))
);

// =============================================
// DEVELOPMENT VALIDATION
// =============================================

if (process.env.NODE_ENV !== "production") {
  const seen = new Set<string>();

  for (const sbu of sbus) {
    for (const child of sbu.children) {
      const uniqueKey = `${sbu.slug}/${child.slug}`;

      if (seen.has(uniqueKey)) {
        console.warn(
          `[sbus] Duplicate solution route: "${uniqueKey}"`
        );
      }

      seen.add(uniqueKey);

      const sectionIds = new Set<string>();

      for (const section of child.sections) {
        if (sectionIds.has(section.id)) {
          console.warn(
            `[sbus] Duplicate section id "${section.id}" in "${uniqueKey}".`
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
