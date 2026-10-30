
import sbus, { solutionHref } from "@/data/sbus/sbus";

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

const solutionItems: NavigationDropdownItem[] = sbus.map((sbu) => ({
  label: sbu.name,
  href: sbu.href,
  children: sbu.navigationGroups?.length
    ? sbu.navigationGroups.map((group) => ({
        label: group.title,
        href: `/solutions/${sbu.slug}/${group.slug}`,
      }))
    : sbu.children.map((child) => ({
        label: child.hero.name,
        href: solutionHref(child.slug),
      })),
}));


// ---------------------------------------------
// MAIN NAVIGATION
// ---------------------------------------------

export const navigationItems: NavigationItem[] = [
  {
    type: "dropdown",
    label: "About Us",
    visualSrc: "/images/SBUs.png",
    visualHref: "/about-us",
    visualAlt: "About Chemdist Group",
    panelTitle: "Who We Are",
    panelDescription:
      "Discover Chemdist Group, our history, our people, and our commitment to delivering innovative industrial solutions.",

    items: [
      {
        label: "Who We Are",
        href: "/about-us",
        children: [],
      },
      {
        label: "R&D",
        href: "/research-development",
        children: [],
      },
      {
        label: "Leadership",
        href: "/about-us/leadership",
        children: [],
      },
      {
        label: "Our Group",
        href: "/#group",
        children: [],
      },
    ],
  },

  {
    type: "dropdown",
    label: "Solutions",
    visualSrc: "/images/SBUs.png",
    visualHref: "/#technologies",
    visualAlt: "Chemdist Group business units",
    panelTitle: "Business Portfolio",
    panelDescription:
      "Spanning across our business segments, our solutions, products, and services improve resource productivity and strengthen the bottom line while maintaining a cleaner environment.",

    items: solutionItems,
  },

  {
    type: "link",
    label: "Projects",
    href: "/projects",
  },

  {
    type: "link",
    label: "Global Presence",
    href: "/#global",
  },

  {
    type: "link",
    label: "Careers",
    href: "/#careers",
  },
];
