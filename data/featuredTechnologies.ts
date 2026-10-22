
export type FeaturedTechnology = {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  href: string;
  imageLayout: {
    width: number;
    height: number;
    right: number;
    top: number;
    translateX: number;
    translateY: number;
    zIndex: number;
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
    href: "/solutions/process-equipment",
    imageLayout: {
      width: 600,
      height: 350,
      right: -15,
      top: 20,
      translateX: 0,
      translateY: 0,
      zIndex: 3,
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
    href: "/solutions/process-equipment",
    imageLayout: {
      width: 540,
      height: 430,
      right: 35,
      top: -65,
      translateX: 0,
      translateY: 0,
      zIndex: 3,
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
    href: "/solutions/membranes",
    imageLayout: {
      width: 550,
      height: 400,
      right: 5,
      top: 30,
      translateX: 0,
      translateY: 0,
      zIndex: 3,
    },
  },
];
