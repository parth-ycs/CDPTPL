
import type { InnovationData } from "./types";

const biomassConversion: InnovationData = {
  id: "biomass-conversion",

  hero: {
    eyebrow: "Innovation Showcase",
    heading: "Biomass Conversion Technologies",
    description:
      "Exploring thermochemical conversion of agricultural residues into bio-oil, biochar and potential sustainable aviation fuel intermediates.",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1800&q=90",
    imageAlt: "Agricultural biomass and renewable resource landscape",
  },

  overview: {
    heading: {
    before: "Converting Biomass into ",
    highlight: "Industrial Resources",
    after: "",
  },
    description:
      "Chemdist explores thermochemical conversion of agricultural residues and suitable biomass through pyrolysis. The process produces bio-oil, biochar and process gas, creating pathways for renewable fuels and other industrial applications.",
  },

  problem: {
    eyebrow: "The Challenge",
    heading: "Unlocking the Potential of Agricultural Residues",
    description:
      "Agricultural residues and other biomass resources require suitable conversion technologies to produce useful intermediate products. Effective processing involves feed preparation, controlled thermal conversion, condensation and downstream product separation.",
  },

  solution: {
    eyebrow: "Our Approach",
    heading: "Integrated Biomass Processing and Product Recovery",
    description:
      "Chemdist's proposed biomass conversion pathway combines thermochemical processing with downstream product recovery and upgrading.",
    points: [
      "Feed preparation and processing of suitable biomass.",
      "Pyrolysis to produce bio-oil, biochar and process gas.",
      "Condensation and separation of liquid products.",
      "Bio-oil upgrading using hydrogen for potential aviation fuel blendstocks.",
      "Heat recovery and integration across the processing system.",
    ],
  },

  result: {
    eyebrow: "Development Pathways",
    heading: "Multiple Product Streams from Biomass",
    description:
      "The biomass conversion pathway identifies several potential outputs from a common feedstock, supporting renewable fuel development and circular resource utilization.",
    points: [
      "Bio-oil as an intermediate for industrial fuel use or further upgrading.",
      "Biochar for qualified soil, material and industrial applications.",
      "Potential sustainable aviation fuel blendstocks through downstream upgrading.",
      "Process gas as an additional output of thermochemical conversion.",
    ],
  },
};

export default biomassConversion;
