
import sbus, { solutionHref } from "@/data/sbus";

export type NavigationChild = {
  label: string;
  href: string;
};

export type NavigationDropdownItem = {
  label: string;
  href: string;
  children: NavigationChild[];
};

export type NavigationDropdownConfig = {
  type: "dropdown";
  label: string;
  items: NavigationDropdownItem[];
  visualSrc?: string;
  visualHref?: string;
  visualAlt?: string;
  panelTitle: string;
  panelDescription: string;
};

export type NavigationLinkItem = {
  type: "link";
  label: string;
  href: string;
};

export type NavigationItem =
  | NavigationLinkItem
  | NavigationDropdownConfig;

// ---------------------------------------------
// SOLUTIONS NAVIGATION
// ---------------------------------------------

const SBU_ONE_SLUG = "process-equipment-separation";

const solutionItems: NavigationDropdownItem[] = sbus.map((sbu) => ({
  label: sbu.name,
  href: sbu.href,

  children:
    sbu.slug === SBU_ONE_SLUG
      ? (sbu.navigationGroups ?? []).map((group) => ({
          label: group.title,
          href: `/solutions/${group.slug}`,
        }))
      : sbu.navigationGroups?.length
        ? sbu.navigationGroups.map((group) => ({
            label: group.title,
            href: `/solutions/${sbu.slug}/${group.slug}`,
          }))
        : sbu.children.map((child) => ({
            label: child.hero.name,
            href: solutionHref(sbu.slug, child.slug),
          })),
}));

// ---------------------------------------------
// MAIN NAVIGATION
// ---------------------------------------------

export const navigationItems: NavigationItem[] = [

  // ABOUT US
  {
    type: "dropdown",
    label: "About Us",
    visualSrc: "/images/navigations/about_us.png",
    visualHref: "/about-us",
    visualAlt: "About Chemdist Group",
    panelTitle: "Who We Are",
    panelDescription:
      "Discover Chemdist Group, our businesses, journey, achievements, research capabilities, and commitment to a sustainable future.",

    items: [
      {
        label: "Who We Are",
        href: "/about-us",
        children: [],
      },
      {
        label: "Our Groups",
        href: "/under-development",
        children: [],
      },
      {
        label: "Our Journey",
        href: "/under-development",
        children: [],
      },
      {
        label: "CSR & Sustainability",
        href: "/under-development",
        children: [],
      },
      {
        label: "Awards & Recognition",
        href: "/under-development",
        children: [],
      },
      {
        label: "Research & Development",
        href: "/research-development",
        children: [],
      },
    ],
  },

  // SOLUTIONS
  {
    type: "dropdown",
    label: "Solutions",
    visualSrc: "/images/SBUs.png",
    visualHref: "/solutions",
    visualAlt: "Chemdist Group business units",
    panelTitle: "Business Portfolio",
    panelDescription:
      "Spanning across our business segments, our solutions, products, and services improve resource productivity and strengthen the bottom line while maintaining a cleaner environment.",

    items: solutionItems,
  },

  // PROJECTS
  {
    type: "link",
    label: "Projects",
    href: "/projects",
  },

  // GLOBAL PRESENCE
  {
    type: "link",
    label: "Global Presence",
    href: "/global-presence",
  },

  // RESOURCES
  {
    type: "dropdown",
    label: "Resources",
    visualSrc: "/images/navigations/resources.png",
    visualHref: "/resources",
    visualAlt: "Chemdist Group resources and publications",
    panelTitle: "Resources & Insights",
    panelDescription:
      "Explore our innovations, technical knowledge, publications, industry insights, events, and corporate information.",

    items: [
      {
        label: "Innovations & Patents",
        href: "/under-development",
        children: [],
      },
      {
        label: "Blogs & Insights",
        href: "/under-development",
        children: [],
      },
      {
        label: "Media & Press",
        href: "/under-development",
        children: [],
      },
      {
        label: "E-books & Publications",
        href: "/under-development",
        children: [],
      },
      {
        label: "Events",
        href: "/under-development",
        children: [],
      },
      {
        label: "Investor Relations",
        href: "/under-development",
        children: [],
      },
    ],
  },

  // CAREERS
  {
    type: "link",
    label: "Careers",
    href: "/careers",
  },
];
