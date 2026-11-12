
export type FeaturedTechnology = {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  href: string;

  imageLayout: {
    width: string;
    aspectRatio: string;
    right: string;
    top: string;
    translateY: string;
  };
};

export const featuredTechnologies: FeaturedTechnology[] = [
  {
    id: "heat-exchanger",
    name: "Heat Exchangers",
    category: "PROCESS EQUIPMENT",
    description:
      "High-performance heat transfer solutions engineered for demanding industrial processes.",
    features: [
      "Shell and tube heat exchangers",
      "Thermal process optimization",
      "Custom-engineered equipment",
    ],
    image: "/images/products/heat-exchanger.png",
    href: "/solutions/process-equipment-separation/process-equipment",

    imageLayout: {
      width: "52%",
      aspectRatio: "3 / 2",
      right: "0%",
      top: "50%",
      translateY: "-50%",
    },
  },

  {
    id: "distillation-column",
    name: "Distillation Columns",
    category: "SEPARATION TECHNOLOGY",
    description:
      "Precision-engineered separation systems designed for efficient mass transfer and process performance.",
    features: [
      "Distillation and fractionation",
      "Process-specific configurations",
      "Industrial separation systems",
    ],
    image: "/images/products/distillation-column.png",
    href: "/solutions/process-equipment-separation/process-equipment",
    imageLayout: {
      width: "52%",
      aspectRatio: "3 / 2",
      right: "0%",
      top: "50%",
      translateY: "-50%",
    },
  },

  {
    id: "membrane-system",
    name: "Membrane Separation",
    category: "ADVANCED SEPARATION",
    description:
      "Advanced membrane technologies for selective separation, purification, and resource recovery.",
    features: [
      "Gas separation solutions",
      "Pervaporation technologies",
      "Application-specific systems",
    ],
    image: "/images/products/membrane-system.png",
    href: "/solutions/membranes/pervaporation",

    imageLayout: {
      width: "52%",
      aspectRatio: "3 / 2",
      right: "0%",
      top: "50%",
      translateY: "-50%",
    },
  },
];
