type SectionBase = {
  id: string;
  label: string;
};

export type OverviewSectionData = SectionBase & {
  type: "overview";
  heading: string;
  description: string;
  kpis?: { value: string; label: string }[];
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

export type IndustriesSectionData = SectionBase & {
  type: "industries";
  heading: string;
  intro?: string;
  items: { title: string; description: string }[];
};

export type CapabilitiesSectionData = SectionBase & {
  type: "capabilities";
  heading: string;
  intro?: string;
  items: {
    title: string;
    description: string;
    image?: string;
  }[];
};

export type TechnicalSpecificationItem = {
  name: string;
  value: string;
};

export type TechnicalSpecificationsSectionData = SectionBase & {
  type: "technical-specifications";
  heading: string;
  intro?: string;
  items: TechnicalSpecificationItem[];
  note?: string;
};

export type ProcessFlowStep = {
  title: string;
  description: string;
  output?: string;
};

export type ProcessFlowSectionData = SectionBase & {
  type: "process-flow";
  heading: string;
  intro?: string;
  steps: ProcessFlowStep[];
  note?: string;
};

export type LifecycleSupportItem = {
  title: string;
  description: string;
};

export type LifecycleSupportSectionData = SectionBase & {
  type: "lifecycle-support";
  heading: string;
  intro?: string;
  items: LifecycleSupportItem[];
};

export type StandardCertificationItem = {
  title: string;
  description: string;
  reference?: string;
};

export type StandardsCertificationsSectionData = SectionBase & {
  type: "standards-certifications";
  heading: string;
  intro?: string;
  items: StandardCertificationItem[];
  note?: string;
};

export type PerformanceMetric = {
  title: string;
  description: string;
  value?: string;
  category?: string;
};

export type PerformanceSustainabilitySectionData = SectionBase & {
  type: "performance-sustainability";
  heading: string;
  intro?: string;
  metrics: PerformanceMetric[];
  note?: string;
};

export type DownloadResourceItem = {
  title: string;
  href: string;
  description?: string;
  fileType?: string;
  external?: boolean;
};

export type DownloadsResourcesSectionData = SectionBase & {
  type: "downloads-resources";
  heading: string;
  intro?: string;
  items: DownloadResourceItem[];
  note?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQsSectionData = SectionBase & {
  type: "faqs";
  heading: string;
  intro?: string;
  items: FAQItem[];
};

export type ServiceSection =
  | OverviewSectionData
  | ProductsSectionData
  | ServicesSectionData
  | IndustriesSectionData
  | CapabilitiesSectionData
  | TechnicalSpecificationsSectionData
  | ProcessFlowSectionData
  | LifecycleSupportSectionData
  | StandardsCertificationsSectionData
  | PerformanceSustainabilitySectionData
  | DownloadsResourcesSectionData
  | FAQsSectionData;

export type ServiceHeroContent = {
  name: string;
  tagline: string;
  description: string;
  image?: string;
  imageAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type ServiceConfig = {
  slug: string;
  hero: ServiceHeroContent;
  sections: ServiceSection[];
};
