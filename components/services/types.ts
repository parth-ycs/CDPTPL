// Types for the config-driven service pages.
// To add a new section type (e.g. "capabilities"):
//   1. add its data type here and include it in the ServiceSection union
//   2. create sections/CapabilitiesSection.tsx
//   3. add one `case` in ServiceSectionRenderer.tsx
// The sidebar and layout need no changes.
//
// NOTE: serviceHref() does NOT live here. It belongs in data/services.ts.

type SectionBase = {
  /** Used as the DOM id and the sidebar anchor, e.g. "overview" */
  id: string;
  /** Sidebar link text */
  label: string;
};

export type OverviewSectionData = SectionBase & {
  type: "overview";
  heading: string;
  description: string;
  kpis: {
    value: string;
    label: string;
  }[];
};

export type ProductItem = {
  id: string;
  name: string;
  category?: string;
  description: string;
  image: { src: string; alt: string };
  specs?: string[];
};

export type ProductsSectionData = SectionBase & {
  type: "products";
  heading: string;
  intro?: string;
  items: ProductItem[];
};
export type IndustriesSectionData = SectionBase & {
  type: "industries";
  heading: string;
  intro?: string;
  items: {
    title: string;
    description: string;
  }[];
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type ServicesSectionData = SectionBase & {
  type: "services";
  heading: string;
  intro?: string;
  items: ServiceItem[];
};

export type ServiceSection =
  | OverviewSectionData
  | ProductsSectionData
  | ServicesSectionData
  | IndustriesSectionData;


export type ServiceHeroContent = {
  name: string;
  tagline: string;
  description: string;
};

export type ServiceConfig = {
  slug: string;
  hero: ServiceHeroContent;
  /** Order here = order in the sidebar and on the page */
  sections: ServiceSection[];
};