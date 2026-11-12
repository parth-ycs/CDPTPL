
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
      href: "/about-us",
    },
  },

  // Dedicated About Us page
  hero: {
    eyebrow: "Discover Chemdist",
    heading: "Engineering Progress. Enabling Possibilities.",
    description:
      "We bring together engineering expertise, technology and execution capabilities to develop integrated process solutions for industry.",
    image: "/images/about-us/hero/image.png",
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
      background: "/images/about-us/vision-mission/vision.png",
    },
    {
      id: "mission",
      title: "MISSION",
      description:
        "To execute technology-based EPC projects in the energy sector while prioritising safety, quality, time and cost.",
      highlight: "safety, quality, time and cost",
      background: "/images/about-us/vision-mission/mission.png",
    },
    {
      id: "core-values",
      title: "VALUES",
      description:
        "Integrity, innovation, collaboration and responsibility guide every decision we make and every solution we deliver.",
      highlight: "integrity, innovation, collaboration",
      background: "/images/about-us/values-bg.png",
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
    id: "2013",
    year: "2013",
    title: "Beginning with Process Solutions",
    description:
      "Established in 2013, Process Solutions began designing, manufacturing, and installing process technologies, delivering complete turnkey solutions.",
    highlights: [
      { title: "Turnkey", subtitle: "Process Solutions" },
    ],
    image: "/images/about-us/journey/2013.jpg",
    imageAlt: "Chemdist Process Solutions",
    imageHeading: "Building process solutions",
  },
  {
    id: "2014",
    year: "2014",
    title: "Introduced Mass Transfer Production Facility",
    description:
      "With over 300 applications and installations for distillation systems, we introduced a range of Mass Transfer Internals to address diverse separation challenges.",
    highlights: [
      { title: "300+", subtitle: "Installations" },
    ],
    image: "/images/about-us/journey/2014.jpg",
    imageAlt: "Chemdist Mass Transfer production facility",
    imageHeading: "Advancing separation technology",
  },
  {
    id: "2018",
    year: "2018",
    title: "Innovation in Membrane Systems",
    description:
      "Introduced next-generation membrane-based separation and process technologies, alongside advanced heat transfer solutions for global applications.",
    highlights: [
      { title: "Next-Gen", subtitle: "Membrane Technology" },
    ],
    image: "/images/about-us/journey/2018.jpg",
    imageAlt: "Chemdist membrane separation technology",
    imageHeading: "Driving process innovation",
  },
  {
    id: "2021",
    year: "2021",
    title: "Centre of Excellence at IIT Guwahati",
    description:
      "Introduced technologies for ethanol and sustainable products, advancing future-ready solutions in ethanol and green hydrogen production.",
    highlights: [
      { title: "IIT Guwahati", subtitle: "Centre of Excellence" },
    ],
    image: "/images/about-us/journey/2021.jpg",
    imageAlt: "Chemdist IIT Guwahati Centre of Excellence",
    imageHeading: "Collaborating for a sustainable future",
  },
  {
    id: "2023",
    year: "2023",
    title: "HiTurb Patent & NCL-Chemdist MoU",
    description:
      "Developed HiTurb, a next-generation high-efficiency heat exchanger technology featuring turbulator elements that improve heat transfer efficiency by 30–40%. Also signed an MoU with NCL for engineering and scaling up batch-to-continuous processes using micro-reactor technology.",
    highlights: [
      { title: "30–40%", subtitle: "Higher Heat Transfer Efficiency" },
      { title: "NCL", subtitle: "MoU Signed" },
    ],
    image: "/images/about-us/journey/2023.jpg",
    imageAlt: "Chemdist HiTurb heat exchanger technology",
    imageHeading: "Engineering the next generation",
  },
  {
    id: "2026",
    year: "2026",
    title: "Global Expansion – Launched in USA",
    description:
      "Expanded our global presence with the launch of Chemdist in the United States, marking another milestone in our international growth.",
    highlights: [
      { title: "USA", subtitle: "New Global Presence" },
    ],
    image: "/images/about-us/journey/2026.jpg",
    imageAlt: "Chemdist expansion into the United States",
    imageHeading: "Expanding our global footprint",
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

companyProfile: {
  label: "Company Profile",
  title: "Know Chemdist in detail",
  description:
    "Download our corporate profile for an overview of our capabilities, verticals, global presence and key projects.",
  chips: ["Capabilities", "Verticals", "Key Projects", "Global Presence"],
  fileInfo: "PDF · 4 MB",
  href: "/downloads/chemdist-company-profile.pdf",
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
