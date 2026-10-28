
import type { ReactNode } from "react";

export type PageBreadcrumb = {
  label: string;
  href?: string;
};

export type PageHeroContent = {
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  breadcrumbs: PageBreadcrumb[];
  ctaLabel?: string;
  ctaHref?: string;
};

export type PageSectionItem = {
  id: string;
  label: string;
  content: ReactNode;
};
