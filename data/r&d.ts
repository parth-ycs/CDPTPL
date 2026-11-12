
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
  image: string;
}

export const rdSectionData = {
  eyebrow: "Research & Development",

  heading: ["Engineering", "What Comes Next"],

  description:
    "We drive process innovation, materials science and sustainable chemistry to create efficient, scalable and responsible solutions for a better tomorrow. Our R&D efforts bridge fundamental research with real-world industrial applications, enabling cleaner processes, higher performance and long-term value for our customers and the planet.",

  primaryCta: {
    label: "Explore R&D",
    href: "/research-development",
  },


  hero: {
    eyebrow: "Research & Development",
    heading: "Engineering What Comes Next.",
    description:
      "Exploring process innovation, advanced engineering and sustainable technologies to address evolving industrial challenges.",
    image:
      "/images/r&d/hero/image.png",
    imageAlt: "Industrial engineering and process development",
  },

highlights: [
  "Process Innovation & Engineering",
  "Advanced Materials & Separation Technologies",
  "Sustainable Process Development",
],

overview: {
  heading: {
    before: "Driving Industrial Progress Through",
    highlight: "Research & Innovation",
    after: "",
  },
  description:
    "At Chemdist, research and development is focused on transforming engineering challenges into practical industrial solutions. By exploring process innovation, advanced materials, sustainable technologies, and equipment development, we work towards improving efficiency, enabling better resource utilisation, and addressing the evolving needs of modern industries.",
},
focusAreas: {
  heading: "Areas of Research",
  description:
    "Exploring technologies that shape more efficient and sustainable industrial processes.",
  items: [
    {
      title: "Process Innovation",
      description: "Optimising processes for better performance.",
      Icon: Workflow,
      image: "/images/r&d/research-area/process-innovation.png",
    },
    {
      title: "Advanced Materials",
      description: "Developing advanced separation solutions.",
      Icon: Atom,
      image: "/images/r&d/research-area/materials-separation.png",
    },
    {
      title: "Sustainable Technologies",
      description: "Advancing resource-efficient technologies.",
      Icon: Leaf,
      image: "/images/r&d/research-area/sustainable-technologies.png",
    },
    {
      title: "Laboratory Research",
      description: "Testing ideas through scientific research.",
      Icon: Microscope,
      image: "/images/r&d/research-area/laboratory-research.png",
    },
    {
      title: "Equipment Development",
      description: "Engineering solutions for industrial needs.",
      Icon: Settings2,
      image: "/images/r&d/research-area/equipment-development.png",
    },
    {
      title: "Technology Evaluation",
      description: "Validating technologies for real-world use.",
      Icon: FlaskConical,
      image: "/images/r&d/research-area/technology-evaluation.png",
    },
  ],
},
workflow: {
  eyebrow: "Our Workflow",
  heading: "From Idea to Industrial Application",
  description:
    "A systematic approach to transforming research concepts into practical industrial solutions.",

  steps: [
    {
      number: "01",
      title: "Identify",
      image: "/images/r&d/workflow/identify.png",
      description:
        "Understanding industrial challenges and identifying opportunities for innovation.",
      points: [
        "Identify process and operational challenges.",
        "Define technical requirements and objectives.",
        "Establish measurable performance goals.",
      ],
    },
    {
      number: "02",
      title: "Research",
      image: "/images/r&d/workflow/research.png",
      description:
        "Exploring technologies, engineering principles and potential approaches.",
      points: [
        "Explore relevant technologies and materials.",
        "Study engineering principles and applications.",
        "Identify promising solution approaches.",
      ],
    },
    {
      number: "03",
      title: "Evaluate",
      image: "/images/r&d/workflow/evaluate.png",
      description:
        "Evaluating concepts to establish their technical and industrial feasibility.",
      points: [
        "Assess technical feasibility.",
        "Evaluate performance and efficiency.",
        "Analyse implementation requirements.",
      ],
    },
    {
      number: "04",
      title: "Develop",
      image: "/images/r&d/workflow/develop.png",
      description:
        "Developing and refining concepts into practical engineering solutions.",
      points: [
        "Refine selected engineering concepts.",
        "Develop practical technical solutions.",
        "Prepare for industrial application.",
      ],
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
