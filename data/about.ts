
import {
  ShieldCheck,
  Settings2,
  Sprout,
  Target,
  Workflow,
  Globe2,
  type LucideIcon,
} from "lucide-react";

export type AboutValue = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

export const aboutSectionData = {
  label: "About Us",
  headingStart: "Who We",
  headingHighlight: "Are",
  description:
    "At Chemdist, we combine deep engineering expertise, advanced technology and proven execution capabilities to deliver integrated process solutions for a safer, cleaner and more sustainable world.",
  image: {
    src: "/images/about-us/image.png",
    alt: "Chemdist industrial process plant",
  },
  cta: {
    label: "Our Journey",
    href: "/about",
  },
};

export const aboutValues: AboutValue[] = [
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
];

export const aboutPageData = {
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
  },

  purpose: {
    label: "Our Approach",
    heading: "From process challenges to engineered solutions.",
    description:
      "We approach industrial challenges through engineering-led thinking, technology integration and a commitment to reliable execution.",
    pillars: [
      {
        number: "01",
        title: "Understand",
        description:
          "Understand process requirements, operational constraints and the objectives behind every project.",
        Icon: Target,
      },
      {
        number: "02",
        title: "Engineer",
        description:
          "Bring engineering expertise and appropriate technologies together to develop integrated process solutions.",
        Icon: Workflow,
      },
      {
        number: "03",
        title: "Deliver",
        description:
          "Focus on practical implementation, dependable execution and solutions designed around real operating needs.",
        Icon: Settings2,
      },
    ],
  },

  values: {
    label: "What Guides Us",
    heading: "Principles behind every solution.",
    description:
      "Our approach is guided by safety, engineering excellence and a long-term commitment to sustainable growth.",
    items: aboutValues,
  },

  commitment: {
    label: "Looking Ahead",
    heading: "Building a more responsible industrial future.",
    description:
      "We believe industrial progress and environmental responsibility should move forward together. By combining engineering capabilities with a focus on safer and more sustainable processes, we aim to create lasting value for industry and the communities it serves.",
    highlights: [
      {
        title: "Safety",
        description: "Prioritising safer processes and responsible execution.",
        Icon: ShieldCheck,
      },
      {
        title: "Innovation",
        description: "Applying engineering and technology to process challenges.",
        Icon: Settings2,
      },
      {
        title: "Sustainability",
        description: "Supporting cleaner, more responsible industrial growth.",
        Icon: Sprout,
      },
    ],
  },

  cta: {
    eyebrow: "Let's Connect",
    heading: "Have a process challenge to solve?",
    description:
      "Explore our capabilities and discover how Chemdist can support your industrial requirements.",
    buttonLabel: "Explore Our Verticals",
    href: "/#verticals",
  },
};
