
export type ResearchCapability = {
  id: string;
  title: string;
  description: string;
  icon: "flask" | "settings" | "leaf";
};

export type ResearchDevelopmentData = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  primaryImage: {
    src: string;
    alt: string;
    title: string;
  };
  secondaryImage: {
    src: string;
    alt: string;
    title: string;
  };
  description: string;
  capabilities: ResearchCapability[];
};

export const researchDevelopment: ResearchDevelopmentData = {
  eyebrow: "Innovation & Technology",
  title: "Research &",
  titleAccent: "Development",

  primaryImage: {
    src: "/images/r&d/advanced-process-research.png",
    alt: "Industrial pilot plant for advanced process research",
    title: "Advanced Process Research",
  },

  secondaryImage: {
    src: "/images/r&d/research-to-solutions.png",
    alt: "Chemical engineering research and development facility",
    title: "From Research to Real-World Solutions",
  },

  description:
    "At Chemdist, our R&D drives continuous innovation in process technologies, separation systems and sustainable chemical solutions to address tomorrow’s industrial challenges.",

  capabilities: [
    {
      id: "process-innovation",
      title: "Process Innovation",
      description:
        "Development of efficient and scalable chemical processes.",
      icon: "flask",
    },
    {
      id: "advanced-separation",
      title: "Advanced Separation",
      description:
        "Membrane, distillation, evaporation and hybrid separation technologies.",
      icon: "settings",
    },
    {
      id: "sustainable-chemistry",
      title: "Sustainable Chemistry",
      description:
        "Focus on low-carbon processes and renewable feedstocks for a cleaner future.",
      icon: "leaf",
    },
  ],
};
