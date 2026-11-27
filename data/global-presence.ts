export type GlobalPoint = {
  id: string;
  name: string;
  city: string;
  summary: string;
  coordinates: [number, number]; // [longitude, latitude]
};

export type GlobalOffice = GlobalPoint & {
  type: "office";
  capabilities: string[];
};

export type GlobalFacility = GlobalPoint & {
  type: "facility";
  capabilities: string[];
};

export type GlobalProject = GlobalPoint & {
  type: "project";
  industry: string;
  status: "completed" | "ongoing";
  href: string;
};

/** The three filters of the Global Presence explorer. Keys match GlobalLocation. */
export type GlobalCategory = "offices" | "facilities" | "projects";
export type GlobalEntry = GlobalOffice | GlobalFacility | GlobalProject;

export type GlobalLocation = {
  id: string;
  country: string;
  countryCode: string;
  /** ISO 3166-1 numeric code; matches the map geometry for highlight and zoom. */
  isoNumeric: string;
  region: string;
  city: string;
  summary: string;
  capabilities: string[];
  coordinates: [number, number];
  offices: GlobalOffice[];
  facilities: GlobalFacility[];
  projects: GlobalProject[];
};

export const globalPresencePage = {
  hero: {
    eyebrow: "Global presence",
    heading: "Global expertise. Local execution.",
    description:
      "A growing international network for technology, engineering and manufacturing. Find the offices that support you and the projects we have delivered on the ground.",
    image: "/images/global-presence/hero.jpg",
    imageAlt: "Our teams and project sites around the world",
    cta: { label: "Contact our team", href: "/contact" },
  },
  overview: {
    heading: {
      before: "One ",
      highlight: "network,",
      after: "close to where the work happens.",
    },
    description: [
      "Our offices keep engineering and delivery close to our customers, while projects show the industries we work in and the places we have worked.",
      "Use the globe below to move between countries, or browse every office and project in the lists that follow.",
    ],
  },
  explorer: {
    heading: "Explore the globe",
    description:
      "Choose a country, or drag the globe. Select an office or project to bring it into view.",
  },
  offices: {
    heading: "Offices",
    description: "Where our teams are based.",
  },
  projects: {
    heading: "Industries and projects",
    description: "Recent and ongoing work, by industry.",
  },
} as const;