import type { ReactNode } from "react";

export type HeroBreadcrumb = {
  label: string;
  href?: string;
};

export type HeroNavigationItem = {
  slug: string;
  label: string;
  href: string;
};

export type HeroMetadata = {
  icon?: ReactNode;
  label: string;
  value: string;
};

export type PageHeroContent = {
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt?: string;

  breadcrumbs?: HeroBreadcrumb[];

  ctaLabel?: string;
  ctaHref?: string;

  // Optional dropdown navigation
  navigation?: {
    label: string;
    currentLabel: string;
    items: HeroNavigationItem[];
  };

  // Optional project metadata
  metadata?: HeroMetadata[];
};

/**
 * One section of a page that uses <PageLayout />.
 * `id` is the anchor, `label` is the text in the sticky section menu,
 * and `content` is what gets rendered (null/undefined hides the section).
 */
export type PageSectionItem = {
  id: string;
  label: string;
  content: ReactNode;
};