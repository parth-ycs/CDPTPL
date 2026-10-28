
export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  location: string;
  plant: string;
  capacity?: string;
  description: string;
  keyScope?: string[];
  executionScope?: string;
  contractValue?: string;
  yearOfAward?: string;
  yearOfCompletion: string;
  image: string;
};

export const projectsPageData = {
  hero: {
    heading: "Our Projects",
    eyebrow: "ENGINEERING EXCELLENCE",
    description:
      "Explore our portfolio of industrial projects, process plants, and engineering solutions delivered across global markets.",
    image: "/images/projects/farabi-plant.png",
    imageAlt: "Industrial process plant project",
  },
};

export const projects: Project[] = [
  {
    id: "farabi-yanbu",
    title: "Farabi Yanbu Petrochemicals Company, KSA",
    category: "PROCESS PLANTS & EPC",
    year: "2022",
    location: "Yanbu, Saudi Arabia",
    plant: "Process Oil & Lube Oils Blending Plant (Brownfield Project)",
    capacity: "140 KMTA",
    description:
      "Process Oil & Lube Oils Blending Plant — 140 KMTA brownfield expansion project. Basic Engineering Package (BEP) completed by Elixir, Netherlands.",
    keyScope: [
      "Detail Engineering",
      "Modular Skid Design & Supply",
      "Preparation of Construction Tender for Site Execution",
      "Project Management & Site Supervision",
    ],
    executionScope:
      "Engineering, Procurement, Fabrication and Construction",
    yearOfAward: "2019",
    yearOfCompletion: "2022",
    image: "/images/projects/farabi-plant.png",
  },
  {
    id: "addar-reaction-facility",
    title: "Global Company For Chemical Industries (Addar Group), KSA",
    category: "PROCESS PLANTS & EPC",
    year: "2019",
    location: "Saudi Arabia",
    plant: "Multipurpose Stage-1 Reaction Facility",
    capacity: "6,800 TPA",
    description:
      "Multipurpose Stage-1 Reaction Facility comprising MPP-Stage-1 batch process with semi-automatic plant operations. Reaction and blending are the basic processes involved in the facility.",
    keyScope: [
      "Engineering",
      "Procurement",
      "Fabrication",
      "Site Construction",
    ],
    executionScope:
      "Engineering, Procurement, Fabrication and Site Construction",
    yearOfAward: "2018",
    yearOfCompletion: "2019",
    image: "/images/projects/addar-reaction-facility.png",
  },
  {
    id: "taco-ethyl-acetate",
    title: "TACO Chemicals, Turkey",
    category: "PROCESS PLANTS & EPC",
    year: "2018",
    location: "Turkey",
    plant: "Ethyl Acetate Plant",
    capacity: "100 KLPD",
    description:
      "100 KLPD Ethyl Acetate Plant executed on an EPC basis. The plant achieved Ethyl Acetate (EA) purity of 99.95%.",
    keyScope: [
      "Detailed Engineering",
      "Procurement",
      "Fabrication",
      "Supply",
      "Commissioning",
      "Project Management",
      "Site Supervision",
    ],
    executionScope:
      "Engineering, Procurement, Fabrication, Supply and Commissioning",
    yearOfAward: "2017",
    yearOfCompletion: "2018",
    image: "/images/projects/taco-ethyl-acetate.jpg",
  },
  {
    id: "green-energy-chemicals",
    title: "Green Energy Chemicals, Turkey",
    category: "GREEN PROCESS TECHNOLOGIES",
    year: "2023",
    location: "Turkey",
    plant: "Corn Syrup Based Distillery",
    capacity: "50 KLD",
    description:
      "50 KLD Corn Syrup Based Distillery. The project included preparation of the Basic Engineering Package (BEP) and Detailed Engineering Package (DEP), along with supply of equipment, structures, piping, and supervision for site construction and commissioning.",
    keyScope: [
      "Engineering",
      "Procurement",
      "Fabrication",
      "Construction",
      "Commissioning",
    ],
    executionScope:
      "Engineering, Procurement, Fabrication, Construction and Commissioning",
    yearOfAward: "2022",
    yearOfCompletion: "2023",
    image: "/images/projects/green-energy-distillery.jpg",
  },
  {
    id: "nalco-saudi-reactor",
    title: "NALCO Saudi Company Limited, Dammam, KSA",
    category: "PROCESS EQUIPMENT",
    year: "Under Execution",
    location: "Dammam, Saudi Arabia",
    plant: "Reactor Engineering Project",
    capacity: "20 KLPD reactor capacity",
    description:
      "Reactor engineering project including engineering, fabrication, and supply of equipment, utilities, piping, and electrical and instrumentation systems, along with site erection and supervision during commissioning.",
    keyScope: [
      "Engineering",
      "Procurement",
      "Fabrication",
      "Construction",
      "Commissioning",
    ],
    executionScope:
      "Engineering, Procurement, Fabrication, Construction and Commissioning",
    yearOfAward: "2024",
    yearOfCompletion: "Under Execution",
    image: "/images/projects/nalco-reactor.jpg",
  },
  {
    id: "dangote-fired-heaters",
    title: "Fired Heaters Package for Dangote Refinery",
    category: "PROCESS EQUIPMENT",
    year: "2021",
    location: "Nigeria",
    plant: "Fired Heaters Package",
    description:
      "Heater package specifications: CDU A, B and C — 3 × 112.5 Gcal/hr; CCR Heater — 172.6 Gcal/hr; NHT Heater — 23 Gcal/hr; MHC Heaters — 12.7 and 32.7 Gcal/hr. Materials of construction: A312 TP 317L, A335 P9/P22, A691 Gr. 11 and SA106 Gr. B. Structural steel: 12,250 MT. Refractory: 6,650 MT. Coils: 67,500 inch-dia / 2,250 MT.",
    keyScope: [
      "Engineering",
      "Procurement",
      "Fabrication",
      "Supply",
      "Construction",
    ],
    executionScope:
      "Engineering, Procurement, Fabrication, Supply and Construction",
    contractValue: "USD 124 million",
    yearOfCompletion: "2021",
    image: "/images/projects/dangote-fired-heaters.jpg",
  },
  {
    id: "pemex-fired-heaters",
    title: "Fired Heaters for PEMEX",
    category: "PROCESS EQUIPMENT",
    year: "2022",
    location: "Mexico",
    plant: "Fired Heaters Package",
    description:
      "Heater specifications: CDU Heater — 4 × 37.7 Gcal/hr; ATM Heater — 4 × 12.5 Gcal/hr. Materials of construction: A312 TP 317L, A335 P9/P22, A691 Gr. 11 and SA106 Gr. B. Structural steel: 3,400 MT. Refractory: 2,100 MT. Coils: 37,600 inch-dia / 580 MT.",
    keyScope: [
      "Design",
      "Engineering",
      "Procurement",
      "Fabrication",
      "Supply",
    ],
    executionScope:
      "Design, Engineering, Procurement, Fabrication and Supply",
    contractValue: "USD 59 million",
    yearOfCompletion: "2022",
    image: "/images/projects/pemex-fired-heaters.jpg",
  },
  {
    id: "dangote-flare-package",
    title: "Flare Package for Dangote Refinery",
    category: "PROCESS EQUIPMENT",
    year: "2023",
    location: "Nigeria",
    plant: "Flare Package",
    description:
      "Five demountable flares with a combined flow rate of 2.94 million kg/hr. Steel derrick structure: 725 MT. Stack diameter: three 72-inch stacks and two 24-inch stacks. Stack height: 145 m. Molecular seals: 4.",
    keyScope: [
      "Residual Design",
      "Engineering",
      "Procurement",
      "Fabrication",
      "Supply",
      "Construction",
      "Commissioning",
    ],
    executionScope:
      "Residual Design, Engineering, Procurement, Fabrication, Supply, Construction and Commissioning",
    contractValue: "USD 7 million",
    yearOfCompletion: "2023",
    image: "/images/projects/dangote-flare-package.jpg",
  },
];

export const projectCategories = [
  "All Projects",
  ...Array.from(new Set(projects.map((project) => project.category))),
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}

export function getProjectHref(project: Project) {
  return `/projects/${project.id}`;
}
