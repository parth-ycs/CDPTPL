import type { ServiceConfig } from "@/components/services/types";

export const serviceHref = (slug: string) => `/services/${slug}`;

/**
 * Minimal page: hero + overview. Replace the placeholder copy with real
 * content, and add "products" / "services" sections as you have them.
 */
function stub(slug: string, name: string, vertical: string): ServiceConfig {
  return {
    slug,
    hero: {
      name,
      tagline: vertical,
      description: `Details about ${name} from Chemdist Group. TODO: replace with real copy.`,
    },
    sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Distillation Systems",
      description:
        "Engineered distillation solutions for efficient separation, purification, and recovery of process streams. From individual columns to integrated systems, we deliver application-specific designs focused on product quality, energy efficiency, and reliable plant operation.",
      kpis: [
        { value: "01", label: "Process Engineering" },
        { value: "02", label: "Custom-Built Systems" },
        { value: "03", label: "Plant Integration" },
      ],
    },
    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Our Products",
      intro:
        "Explore our distillation equipment, engineered for efficient separation, purification, and recovery across industrial processes.",
      items: [
        {
          id: "packed-column",
          name: "Packed Columns",
          category: "Distillation Columns",
          description:
            "Packed columns support efficient vapour-liquid contact for separation and purification processes, with packing selected to suit process requirements and operating conditions.",
          image: {
            src: "/placeholder.svg",
            alt: "Packed distillation column",
          },
          specs: [
            "Structured and random packing options",
            "Designed for mass-transfer efficiency",
          ],
        },
        {
          id: "tray-column",
          name: "Tray Columns",
          category: "Distillation Columns",
          description:
            "Tray columns facilitate staged vapour-liquid separation for industrial distillation applications, with configurations tailored to capacity, pressure drop, and separation requirements.",
          image: {
            src: "/placeholder.svg",
            alt: "Industrial tray distillation column",
          },
          specs: [
            "Multiple tray configuration options",
            "Suitable for a range of process duties",
          ],
        },
        {
          id: "evaporators",
          name: "Evaporators",
          category: "Evaporation Systems",
          description:
            "Evaporation systems concentrate process liquids by removing solvents or other volatile components, supporting applications that require efficient concentration and product recovery.",
          image: {
            src: "/placeholder.svg",
            alt: "Industrial evaporation system",
          },
          specs: [
            "Application-specific system configurations",
            "Designed around thermal and process requirements",
          ],
        },
        {
          id: "distillation-skids",
          name: "Distillation Skids",
          category: "Packaged Systems",
          description:
            "Integrated distillation packages combine key process equipment and supporting components into coordinated systems for streamlined installation and plant integration.",
          image: {
            src: "/placeholder.svg",
            alt: "Packaged distillation skid",
          },
          specs: [
            "Integrated process equipment packages",
            "Designed for project-specific requirements",
          ],
        },
      ],
    },
    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Our Services",
      intro:
        "From process design to ongoing operational support, we provide engineering services throughout the lifecycle of distillation systems.",
      items: [
        {
          title: "Process Design & Engineering",
          description:
            "Process evaluation, separation studies, equipment sizing, and engineering design tailored to product specifications and operating conditions.",
        },
        {
          title: "Equipment Design & Fabrication",
          description:
            "Application-specific column internals, vessels, and associated equipment designed around process requirements and project specifications.",
        },
        {
          title: "Plant Integration",
          description:
            "Integration of distillation equipment with upstream and downstream processes, utilities, instrumentation, and plant control systems.",
        },
        {
          title: "Installation & Commissioning",
          description:
            "Installation coordination, system checks, start-up assistance, and commissioning support to help establish reliable operation.",
        },
        {
          title: "Process Optimisation",
          description:
            "Evaluation of operating conditions to identify opportunities to improve separation performance, energy use, throughput, and product quality.",
        },
        {
          title: "Maintenance & Technical Support",
          description:
            "Technical troubleshooting, performance assessments, and maintenance guidance to support equipment reliability and long-term operation.",
        },
      ],
    },
    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Industries We Serve",
      intro:
        "Our separation technologies support diverse industrial processes with solutions tailored to specific operating requirements.",
      items: [
        {
          title: "Chemical Processing",
          description:
            "Separation and purification solutions for chemical production, solvent recovery, and process stream treatment.",
        },
        {
          title: "Pharmaceuticals",
          description:
            "Distillation and purification systems designed around product quality and process requirements.",
        },
        {
          title: "Petrochemicals",
          description:
            "Separation equipment for hydrocarbon processing and recovery applications.",
        },
        {
          title: "Food & Beverage",
          description:
            "Process separation and concentration technologies for suitable food and beverage applications.",
        },
        {
          title: "Specialty Chemicals",
          description:
            "Application-specific separation systems for specialty products and complex process streams.",
        },
        {
          title: "Renewable Chemicals",
          description:
            "Separation and recovery technologies for suitable bio-based chemicals and renewable feedstocks.",
        },
      ],
    },
    ],
  };
}

export const services: ServiceConfig[] = [
  // Process Equipment and Separation
  stub("distillation-systems", "Distillation Systems", "Process Equipment and Separation"),
  stub("evaporation-systems", "Evaporation Systems", "Process Equipment and Separation"),
  stub("columns-and-reactors", "Columns and Reactors", "Process Equipment and Separation"),

  // Process Plants and EPC
  stub("plant-engineering", "Plant Engineering", "Process Plants and EPC"),
  stub("modular-packages", "Modular Packages", "Process Plants and EPC"),
  stub("project-execution", "Project Execution", "Process Plants and EPC"),

  // Green Process Technologies
  stub("ethanol-derivatives", "Ethanol Derivatives", "Green Process Technologies"),
  stub("co2-utilisation", "CO₂ Utilisation", "Green Process Technologies"),
  stub("green-chemicals", "Green Chemicals", "Green Process Technologies"),

  // Membranes and Advanced Separation
  stub("gas-separation", "Gas Separation", "Membranes and Advanced Separation"),
  stub("pervaporation", "Pervaporation", "Membranes and Advanced Separation"),

  // Hydrogen and New Energy
  stub("electrolyzers", "Electrolyzers", "Hydrogen and New Energy"),
  stub("hydrogen-systems", "Hydrogen Systems", "Hydrogen and New Energy"),

  // Water and Wastewater Treatment
  stub("uf-mbr", "UF / MBR", "Water and Wastewater Treatment"),
  stub("water-reuse", "Water Reuse and Recycling", "Water and Wastewater Treatment"),
];

export function getService(slug: string): ServiceConfig | undefined {
  return services.find((s) => s.slug === slug);
}