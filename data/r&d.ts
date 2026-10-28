
import {
  Atom,
  FlaskConical,
  Leaf,
  Microscope,
  Settings2,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface RDSlide {
  image: string;
  alt: string;
  title: string;
  description?: string;
}

export interface RDFeature {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const rdSectionData = {
  eyebrow: "Research & Development",

  heading: ["Engineering", "What Comes Next"],

  description:
    "We drive process innovation, materials science and sustainable chemistry to create efficient, scalable and responsible solutions for a better tomorrow. Our R&D efforts bridge fundamental research with real-world industrial applications, enabling cleaner processes, higher performance and long-term value for our customers and the planet.",

  highlights: [
    "Process innovation",
    "Advanced materials & separation",
    "Sustainable technologies",
  ],

  primaryCta: {
    label: "Explore R&D",
    href: "/research-development",
  },

  secondaryCta: {
    label: "Our Capabilities",
    href: "/capabilities",
  },

  hero: {
    eyebrow: "Research & Development",
    heading: "Engineering What Comes Next.",
    description:
      "Exploring process innovation, advanced engineering and sustainable technologies to address evolving industrial challenges.",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d42e3c4f1b4?auto=format&fit=crop&w=2000&q=90",
    imageAlt: "Industrial engineering and process development",
  },

  overview: {
    eyebrow: "Our Research Approach",
    heading: "Turning engineering knowledge into practical solutions.",
    paragraphs: [
      "Research and development connect engineering principles, scientific investigation and industrial requirements. The objective is to identify opportunities to improve process performance, resource efficiency and the practical application of emerging technologies.",
      "Through a structured approach to investigation, evaluation and development, research concepts can be assessed against technical requirements and potential industrial applications.",
    ],
  },

  focusAreas: {
    eyebrow: "Areas of Focus",
    heading: "Research driven by industrial needs.",
    description:
      "Explore the technical disciplines that inform our research and development approach.",
    items: [
      {
        title: "Process Innovation",
        description:
          "Investigating process configurations, operating parameters and engineering approaches to improve efficiency, reliability and process performance.",
        Icon: Workflow,
      },
      {
        title: "Advanced Materials & Separation",
        description:
          "Exploring materials, separation principles and process technologies relevant to selective recovery, purification and industrial applications.",
        Icon: Atom,
      },
      {
        title: "Sustainable Technologies",
        description:
          "Evaluating opportunities to reduce resource consumption, improve process efficiency and support more responsible industrial operations.",
        Icon: Leaf,
      },
      {
        title: "Laboratory & Technical Research",
        description:
          "Applying structured investigation, technical evaluation and experimental methods to understand process behaviour and assess possible solutions.",
        Icon: Microscope,
      },
      {
        title: "Process & Equipment Development",
        description:
          "Connecting process requirements with equipment selection, engineering design considerations and implementation constraints.",
        Icon: Settings2,
      },
      {
        title: "Technology Evaluation",
        description:
          "Assessing technical feasibility, process compatibility, scalability and potential application before advancing a development concept.",
        Icon: FlaskConical,
      },
    ] satisfies RDFeature[],
  },

  workflow: {
    eyebrow: "From Research to Application",
    heading: "A structured path from concept to implementation.",
    description:
      "Research concepts need systematic evaluation before they can be translated into practical industrial solutions.",
    steps: [
      {
        number: "01",
        title: "Identify",
        description:
          "Define the industrial challenge, operating requirements and desired process outcomes.",
      },
      {
        number: "02",
        title: "Investigate",
        description:
          "Review relevant technologies, engineering principles and potential solution approaches.",
      },
      {
        number: "03",
        title: "Evaluate",
        description:
          "Assess technical feasibility, expected performance, resource requirements and implementation constraints.",
      },
      {
        number: "04",
        title: "Develop",
        description:
          "Refine suitable concepts into engineering approaches for further validation and potential industrial application.",
      },
    ],
  },

  sustainability: {
    eyebrow: "Responsible Innovation",
    heading: "Engineering with long-term impact in mind.",
    description:
      "Industrial innovation must consider performance alongside resource use, environmental responsibility and operational practicality. Sustainability is an important lens for evaluating process improvements and emerging technology opportunities.",
    principles: [
      {
        title: "Resource Efficiency",
        description:
          "Consider opportunities to use energy, water and raw materials more efficiently.",
      },
      {
        title: "Process Optimisation",
        description:
          "Explore improvements that support effective operation and responsible process performance.",
      },
      {
        title: "Practical Scalability",
        description:
          "Evaluate whether promising concepts can be adapted to real industrial conditions.",
      },
    ],
  },

  gallery: {
    eyebrow: "Innovation in Practice",
    heading: "Research, engineering and industrial applications.",
    description:
      "Explore visual references related to scientific research, engineering development and industrial technology.",
  },

  slides: [
    {
      image:
        "https://images.unsplash.com/photo-1581093458791-9d42e3c4f1b4?auto=format&fit=crop&w=1800&q=90",
      alt: "Industrial engineering and process development",
      title: "Process Innovation",
      description:
        "Exploring engineering approaches to industrial process challenges.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&q=90",
      alt: "Engineers working on industrial technology",
      title: "Engineering Research",
      description:
        "Connecting technical investigation with engineering requirements.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1800&q=90",
      alt: "Laboratory research and scientific experimentation",
      title: "Materials Science",
      description:
        "Investigating scientific principles relevant to materials and processes.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1800&q=90",
      alt: "Industrial equipment and technical development",
      title: "Industrial Applications",
      description:
        "Considering how engineering concepts translate into practical applications.",
    },
  ] satisfies RDSlide[],

  cta: {
    eyebrow: "Collaborate With Us",
    heading: "Have an industrial challenge to explore?",
    description:
      "Connect with our team to discuss process requirements, engineering challenges and potential technology applications.",
    buttonLabel: "Contact Our Team",
    href: "/contact",
  },
};
