import type { ProjectData } from "../types";

const addarReactionFacility: ProjectData = {
  id: "addar-reaction-facility",
  category: "PROCESS PLANTS & EPC",

  details: {
    location: "Saudi Arabia",
    plant: "Multipurpose Stage-1 Reaction Facility",
    capacity: "6,800 TPA",
    yearOfAward: "2018",
    yearOfCompletion: "2019",
    executionScope:
      "Engineering, Procurement, Fabrication and Site Construction",
    // contractValue intentionally omitted to test the optional case
  },

  hero: {
    eyebrow: "Process Plants & EPC",
    heading: "Global Company For Chemical Industries (Addar Group), KSA",
    description:
      "Multipurpose Stage-1 Reaction Facility comprising MPP-Stage-1 batch process with semi-automatic plant operations.",
    image: "/images/projects/addar-reaction-facility.png",
    imageAlt: "Addar Group multipurpose reaction facility",
  },

  overview: {
    heading: {
      before: "Engineering a",
      highlight: "multipurpose reaction facility",
      after: "",
    },
    description:
      "Multipurpose Stage-1 Reaction Facility comprising MPP-Stage-1 batch process with semi-automatic plant operations. Reaction and blending are the basic processes involved in the facility.",
  },

  // problem and result omitted on purpose: the page must skip those sections

  problem: {
    eyebrow: "The Challenge",
    heading: "Managing Complex Industrial Heat Requirements",
    description:
      "Chemical processing operations involve varying temperatures, pressures, material properties and thermal loads. Selecting suitable heat transfer equipment and integrating it with the overall process is essential for reliable plant operation.",
  },

  solution: {
    eyebrow: "Our Approach",
    heading: "Process-Oriented Thermal Engineering",
    description:
      "Chemdist combines process and thermal design with equipment engineering to develop solutions for industrial heating, cooling and evaporation requirements.",
    points: [
      "Design and engineering of industrial heat exchangers.",
      "Integration of condensers and reboilers into process systems.",
      "Thermal process design for evaporation and concentration applications.",
      "Equipment selection based on feed properties and operating conditions.",
      "Process simulation and thermal design using engineering tools.",
    ],
    image:"/images/awards/awards-hero.png"
  },

  result: {
    eyebrow: "Engineering Capabilities",
    heading: "Integrated Thermal Processing Solutions",
    description:
      "Chemdist's portfolio covers thermal equipment and process technologies used across chemical and industrial applications.",
    points: [
      "Heat exchangers, condensers and reboilers.",
      "Falling film and forced circulation evaporators.",
      "Multiple-effect evaporation and mechanical vapour recompression systems.",
      "Engineering and fabrication capabilities for industrial process equipment.",
    ],
  },
};

export default addarReactionFacility;