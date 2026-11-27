
import type { ProjectData } from "../types";

const carbonCapture: ProjectData = {
  id: "carbon-capture",
category: "Innovation Showcase",
  hero: {
    eyebrow: "Innovation Showcase",
    heading: "Carbon Capture & Utilization",
    description:
      "Exploring chemical conversion pathways that transform captured carbon dioxide into useful industrial chemicals, fuels and agricultural products.",
    image: "/images/r&d/innovations/carbon_capture_hero.png",
    imageAlt: "Industrial processing and carbon utilization infrastructure",
  },

  overview: {
    heading: {
        before: "Transforming Captured Carbon into",
        highlight: "Valuable Products",
        after: "",
    },
    description:
      "Chemdist explores carbon utilization pathways involving the conversion of captured CO₂ into methanol, dimethyl ether, sustainable aviation fuel and nano-urea. These pathways combine chemical synthesis, downstream purification and product processing.",
    image:"/images/r&d/innovations/carbon_capture_overview.png"
  },

  problem: {
    eyebrow: "The Challenge",
    heading: "Creating Value from Industrial Carbon Emissions",
    description:
      "Captured carbon dioxide requires suitable conversion pathways and downstream processing before it can become a useful industrial product. Each application involves specific reaction, separation, purification and product qualification requirements.",
  },

  solution: {
    eyebrow: "Our Approach",
    heading: "Chemical Conversion and Process Integration",
    description:
      "Chemdist investigates multiple carbon utilization pathways by combining chemical conversion processes with downstream separation and engineering.",
    points: [
      "CO₂ conversion into methanol using hydrogen.",
      "Methanol purification and downstream dehydration to dimethyl ether (DME).",
      "Captured CO₂ utilization in synthetic aviation fuel pathways.",
      "CO₂ and ammonia-based nano-urea production pathways.",
      "Process development, separation systems and pilot validation.",
    ],
  },

  result: {
    eyebrow: "Development Pathways",
    heading: "Expanding Industrial Carbon Utilization",
    description:
      "The technology portfolio identifies potential applications for captured carbon across the chemical, energy and agricultural sectors.",
    points: [
      "CO₂-to-methanol and CO₂-to-DME pathways.",
      "Synthetic aviation fuel development pathways.",
      "CO₂-to-nano-urea conversion pathway.",
    ],
  },
};

export default carbonCapture;
