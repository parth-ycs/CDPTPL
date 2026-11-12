import type {
  ServiceHeroContent,
  ServiceSection,
} from "@/components/solutions/types";

export interface SBUChild {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  hero: ServiceHeroContent;
  sections: ServiceSection[];
}

export interface SBU {
  name: string;
  offerings: string;
  children: SBUChild[];
}
