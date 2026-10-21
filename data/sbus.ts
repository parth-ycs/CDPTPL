import { serviceHref, services } from "./services";

export interface SBUItem {
  name: string;
  href: string;
}

export interface SBU {
  name: string;
  offerings: string; // keep if used elsewhere
  href: string; // where the SBU row itself goes
  items: SBUItem[];
}

// NOTE: every slug below is a placeholder. Each must exactly match a `slug`
// in data/services.ts, otherwise the link 404s.
const sbus: SBU[] = [
  {
    name: "Process Equipment and Separation",
    offerings:
      "Distillation, evaporation, columns, reactors, equipment packages and separation systems.",
    href: serviceHref("distillation-systems"),
    items: [
      { name: "Distillation Systems", href: serviceHref("distillation-systems") },
      { name: "Evaporation Systems", href: serviceHref("evaporation-systems") },
      { name: "Columns and Reactors", href: serviceHref("columns-and-reactors") },
    ],
  },
  {
    name: "Process Plants and EPC",
    offerings:
      "Plant engineering, modular packages, project execution and integration.",
    href: serviceHref("plant-engineering"),
    items: [
      { name: "Plant Engineering", href: serviceHref("plant-engineering") },
      { name: "Modular Packages", href: serviceHref("modular-packages") },
      { name: "Project Execution", href: serviceHref("project-execution") },
    ],
  },
  {
    name: "Green Process Technologies",
    offerings:
      "Ethanol derivatives, CO₂ utilisation, green chemicals and process technology development.",
    href: serviceHref("ethanol-derivatives"),
    items: [
      { name: "Ethanol Derivatives", href: serviceHref("ethanol-derivatives") },
      { name: "CO₂ Utilisation", href: serviceHref("co2-utilisation") },
      { name: "Green Chemicals", href: serviceHref("green-chemicals") },
    ],
  },
  {
    name: "Membranes and Advanced Separation",
    offerings: "Gas separation, pervaporation and other membrane applications.",
    href: serviceHref("gas-separation"),
    items: [
      { name: "Gas Separation", href: serviceHref("gas-separation") },
      { name: "Pervaporation", href: serviceHref("pervaporation") },
    ],
  },
  {
    name: "Hydrogen and New Energy",
    offerings:
      "Electrolyzers, hydrogen systems, energy transition applications and associated projects.",
    href: serviceHref("electrolyzers"),
    items: [
      { name: "Electrolyzers", href: serviceHref("electrolyzers") },
      { name: "Hydrogen Systems", href: serviceHref("hydrogen-systems") },
    ],
  },
  {
    name: "Water and Wastewater Treatment",
    offerings:
      "Industrial water treatment, UF/MBR, reuse, recycling and zero liquid discharge where supported by actual capability.",
    href: serviceHref("uf-mbr"),
    items: [
      { name: "UF / MBR", href: serviceHref("uf-mbr") },
      { name: "Water Reuse and Recycling", href: serviceHref("water-reuse") },
      // Add a ZLD item only once you have a real page and real capability.
    ],
  },
];

// Dev-only safeguard: warns when a menu link points at a slug with no service page.
if (process.env.NODE_ENV !== "production") {
  const valid = new Set(services.map((s) => s.slug));
  for (const sbu of sbus) {
    for (const link of [{ name: sbu.name, href: sbu.href }, ...sbu.items]) {
      const slug = link.href.split("/").pop() ?? "";
      if (!valid.has(slug)) {
        console.warn(`[sbus] "${link.name}" links to "${link.href}" but no service has slug "${slug}"`);
      }
    }
  }
}

export default sbus;