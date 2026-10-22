export type CoreCapability = {
  id: string;
  title: string;
  shortLabel: string;
  icon:
    | "engineering"
    | "technology"
    | "manufacturing"
    | "epc"
    | "execution"
    | "innovation";
  description: string;
  highlights: string[];
  /** Images are stored in /public. */
  backgroundImage: string;
};

export const coreCapabilities: CoreCapability[] = [
  {
    id: "engineering",
    title: "Engineering",
    shortLabel: "Design & engineering",
    icon: "engineering",
    description:
      "Multidisciplinary engineering that turns complex process requirements into practical, efficient plant designs.",
    highlights: [
      "Process and detailed engineering",
      "Equipment and plant design",
      "Safety-led technical solutions",
    ],
    backgroundImage: "/images/core-capabilities/engineer.png",
  },
  {
    id: "technology",
    title: "Technology",
    shortLabel: "Process technology",
    icon: "technology",
    description:
      "Process know-how and technology development tailored to demanding industrial applications.",
    highlights: [
      "Process development and optimisation",
      "Technology integration",
      "Efficient, reliable operations",
    ],
    backgroundImage: "/images/core-capabilities/technology.png",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    shortLabel: "Fabrication & equipment",
    icon: "manufacturing",
    description:
      "Fabrication capabilities for process equipment, engineered packages, and modular industrial systems.",
    highlights: [
      "Process equipment fabrication",
      "Quality-focused production",
      "Workshop and modular packages",
    ],
    backgroundImage: "/images/core-capabilities/manufacturing.png",
  },
  {
    id: "epc",
    title: "EPC Solutions",
    shortLabel: "End-to-end EPC",
    icon: "epc",
    description:
      "Integrated engineering, procurement, and construction solutions designed around project requirements.",
    highlights: [
      "Engineering and procurement",
      "Construction coordination",
      "Integrated project delivery",
    ],
    backgroundImage: "/images/core-capabilities/epc.png",
  },
  {
    id: "execution",
    title: "Project Execution",
    shortLabel: "Project delivery",
    icon: "execution",
    description:
      "Structured project management and execution focused on safety, quality, schedule, and cost.",
    highlights: [
      "Planning and coordination",
      "Quality and safety management",
      "Schedule and cost control",
    ],
    backgroundImage: "/images/core-capabilities/execution.png",
  },
  {
    id: "innovation",
    title: "Process Innovation",
    shortLabel: "Continuous improvement",
    icon: "innovation",
    description:
      "Continuous process improvement that supports operational performance and evolving industrial needs.",
    highlights: [
      "Process optimisation",
      "Resource and energy efficiency",
      "Emerging process solutions",
    ],
    backgroundImage: "/images/core-capabilities/innovation.png",
  },
];
