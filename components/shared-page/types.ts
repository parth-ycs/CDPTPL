
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
