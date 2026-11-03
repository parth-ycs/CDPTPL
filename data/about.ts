
import {
  ShieldCheck,
  Settings2,
  Sprout,
  Target,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type AboutValue = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

export const aboutPageData = {
  // Shared landing page content
  landing: {
    label: "About Us",
    headingStart: "Who We",
    headingHighlight: "Are",
    description:
      "At Chemdist, we combine deep engineering expertise, advanced technology and proven execution capabilities to deliver integrated process solutions for a safer, cleaner and more sustainable world.",
    image: {
      src: "/images/about-us/landing_page.png",
      alt: "Chemdist industrial process plant",
    },
    cta: {
      label: "Our Journey",
      href: "/about",
    },
  },

  // Dedicated About Us page
  hero: {
    eyebrow: "Discover Chemdist",
    heading: "Engineering Progress. Enabling Possibilities.",
    description:
      "We bring together engineering expertise, technology and execution capabilities to develop integrated process solutions for industry.",
    image: "/images/about-us/image.png",
    imageAlt: "Industrial process equipment and plant infrastructure",
  },

  introduction: {
  label: "Who We Are",
  heading: "Engineering expertise with a purpose.",
  paragraphs: [
    "At Chemdist, we combine deep engineering knowledge, advanced technology and practical execution capabilities to address complex industrial process requirements.",
    "Our focus is on delivering integrated solutions that support operational reliability, engineering excellence and more sustainable industrial development.",
  ],

  kpis: [
    {
      id: "legacy",
      value: "60",
      suffix: "+",
      label: "Years of legacy",
    },
    {
      id: "countries",
      value: "90",
      suffix: "+",
      label: "Countries served",
    },
    {
      id: "offices",
      value: "45",
      suffix: "+",
      label: "Offices globally",
    },
    {
      id: "facilities",
      value: "16",
      suffix: "",
      label: "Manufacturing facilities",
    },
  ],
},
leadership: {
  label: "Our Leadership",
  heading: "The People Behind Chemdist",
  description:
    "Meet the people whose vision, experience and leadership drive our engineering capabilities, business growth and commitment to delivering meaningful industrial solutions.",

  members: [
    {
      id: "founder",
      name: "Founder Name",
      designation: "Founder",
      image: "/images/about-us/leadership/founder.png",
      linkedin: "",
    },
    {
      id: "co-founder",
      name: "Co-Founder Name",
      designation: "Co-Founder",
      image: "/images/about-us/leadership/co-founder.png",
      linkedin: "",
    },
    {
      id: "ceo",
      name: "CEO Name",
      designation: "Chief Executive Officer",
      image: "/images/about-us/leadership/ceo.png",
      linkedin: "",
    },
    {
      id: "director",
      name: "Director Name",
      designation: "Director",
      image: "/images/about-us/leadership/director.png",
      linkedin: "",
    },
  ],
},
visionMission: {
  items: [
    {
      id: "vision",
      title: "VISION",
      description:
        "To be a globally respected high performance organisation offering sustainable solutions in energy and the environment.",
      highlight: "high performance",
      background: "/images/about-us/vision-bg.jpg",
    },
    {
      id: "mission",
      title: "MISSION",
      description:
        "To execute technology-based EPC projects in the energy sector while prioritising safety, quality, time and cost.",
      highlight: "safety, quality, time and cost",
      background: "/images/about-us/mission-bg.jpg",
    },
    {
      id: "core-values",
      title: "CORE VALUES",
      description:
        "Integrity, innovation, collaboration and responsibility guide every decision we make and every solution we deliver.",
      highlight: "integrity, innovation, collaboration",
      background: "/images/about-us/values-bg.jpg",
    },
  ],
},
whatWeStandFor: {
  heading: ["WHAT WE", "STAND FOR"],
  description:
    "Our values aren't just a list on the wall. They shape every decision we make, every conversation we have and every solution we deliver.",

  items: [
    {
      id: "01",
      title: "EXPERTISE",
      description:
        "We give advice, it comes from experience. We pride ourselves on having the knowledge to help you succeed.",
    },
    {
      id: "02",
      title: "CONFIDENCE",
      description:
        "Our confidence is backed by our expertise, so you can rest assured that you can rely on us.",
    },
    {
      id: "03",
      title: "ATTITUDE",
      description:
        "We bring a positive attitude that facilitates success for our partners and our teams.",
    },
    {
      id: "04",
      title: "INTEGRITY",
      description:
        "Integrity is at the heart of our business, embracing honesty, responsibility and accountability.",
    },
    {
      id: "05",
      title: "EXCELLENCE",
      description:
        "Excellence is achieved by delivering on our values and consistently exceeding expectations.",
    },
  ],
},

journey: [
  {
    id: "1960s",
    year: "1960s",
    title: "The foundation years",
    description: "Replace with the story of how Chemdist began.",
    highlights: [{ title: "1st", subtitle: "Process plant delivered" }],
    image: "/images/about-us/journey/1960s.jpg",
    imageAlt: "Early Chemdist plant",
    imageHeading: "Where it all began",
  },
  {
    id: "1980s",
    year: "1980s",
    title: "Expanding engineering capabilities",
    description: "Replace with the growth story for this period.",
    highlights: [],
    image: "/images/about-us/journey/1980s.jpg",
    imageAlt: "Chemdist engineering team",
    imageHeading: "Building expertise",
  },
  {
    id: "2000s",
    year: "2000s",
    title: "Going global",
    description: "Replace with your international expansion story.",
    highlights: [
      { title: "90+", subtitle: "Countries served" },
      { title: "45+", subtitle: "Offices" },
    ],
    image: "/images/about-us/journey/2000s.jpg",
    imageAlt: "Chemdist global projects",
    imageHeading: "A global footprint",
  },
  {
    id: "today",
    year: "Today",
    title: "Engineering a sustainable future",
    description: "Replace with where the company stands now.",
    highlights: [{ title: "16", subtitle: "Manufacturing facilities" }],
    image: "/images/about-us/journey/today.jpg",
    imageAlt: "Modern Chemdist facility",
    imageHeading: "Looking ahead",
  },
],

awards: {
  headingStart: "Featured",
  headingHighlight: "awards",
  items: [
    {
      id: "award-1",
      title: "Award name — Winner, 2023",
      image: "/images/about-us/awards/award-1.jpg",
      imageAlt: "Award 1",
    },
    {
      id: "award-2",
      title: "Excellence in Corporate Governance — 2023",
      image: "/images/about-us/awards/award-2.jpg",
      imageAlt: "Award 2",
    },
    {
      id: "award-3",
      title: "Outstanding Achievement in R&D and Innovation — 2025",
      image: "/images/about-us/awards/award-3.jpg",
      imageAlt: "Award 3",
    },
    {
      id: "award-4",
      title: "Gamechanger Challenger Award",
      image: "/images/about-us/awards/award-4.jpg",
      imageAlt: "Award 4",
    },
    {
      id: "award-5",
      title: "Platinum Certification for Sustainability",
      image: "/images/about-us/awards/award-5.jpg",
      imageAlt: "Award 5",
    },
  ],
  cta: {
    label: "View all awards",
    href: "/awards",
  },
},

  values: {
    label: "What Guides Us",
    heading: "Principles behind every solution.",
    description:
      "Our approach is guided by safety, engineering excellence and a long-term commitment to sustainable growth.",
    items: [
      {
        title: "Safety First",
        description: "In everything we do",
        Icon: ShieldCheck,
      },
      {
        title: "Engineering Excellence",
        description: "End-to-end capabilities",
        Icon: Settings2,
      },
      {
        title: "Sustainable Growth",
        description: "For a cleaner and greener future",
        Icon: Sprout,
      },
    ] satisfies AboutValue[],
  },


};

// Backward-compatible exports for the existing landing page.
export const aboutSectionData = aboutPageData.landing;

export const aboutValues = aboutPageData.values.items;
