import processEquipmentAndSeparation from "./process-equipment-separation";
import processPlantsAndEpc from "./process-plants-epc";
import greenProcessTechnologies from "./green-process-technologies";
import membranesAndAdvancedSeparation from "./membranes-advanced-separation";
import hydrogenAndNewEnergy from "./hydrogen-new-energy";
import waterWastewaterTreatment from "./water-wastewater-treatment";
import { serviceHref, type SBU, type ServiceConfig } from "./shared";
export type { SBU } from "./shared";
const rawSbus: Omit<SBU, "href">[] = [
  processEquipmentAndSeparation,
  processPlantsAndEpc,
  greenProcessTechnologies,
  membranesAndAdvancedSeparation,
  hydrogenAndNewEnergy,
  waterWastewaterTreatment,
];

const sbus: SBU[] = rawSbus.map((sbu) => ({
  ...sbu,
  href: serviceHref(sbu.children[0].slug),
}));

export default sbus;
export { serviceHref };

export function getService(slug: string): ServiceConfig | undefined {
  for (const sbu of sbus) {
    const child = sbu.children.find((item) => item.slug === slug);
    if (child) return { slug: child.slug, hero: child.hero, sections: child.sections };
  }
  return undefined;
}

export const services: ServiceConfig[] = sbus.flatMap((sbu) =>
  sbu.children.map((child) => ({
    slug: child.slug,
    hero: child.hero,
    sections: child.sections,
  })),
);

if (process.env.NODE_ENV !== "production") {
  const seen = new Set<string>();
  for (const sbu of sbus) {
    if (!sbu.children.length) console.warn(`[sbus] "${sbu.name}" has no child pages.`);
    for (const child of sbu.children) {
      if (seen.has(child.slug)) console.warn(`[sbus] Duplicate child slug: "${child.slug}"`);
      seen.add(child.slug);
      const ids = new Set<string>();
      for (const section of child.sections) {
        if (ids.has(section.id)) console.warn(`[sbus] Duplicate section id "${section.id}" in "${child.slug}".`);
        ids.add(section.id);
      }
    }
  }
  console.info(`[sbus] Loaded ${sbus.length} SBUs and ${seen.size} child pages.`);
}
