# Modular SBU data

Folder destination: `data/sbus/`

## Files
- `sbus.ts` — central registry; combines all six SBU modules and exports `sbus`, `serviceHref`, `getService`, and `services`.
- `process-equipment-separation.ts`
- `process-plants-epc.ts`
- `green-process-technologies.ts`
- `membranes-advanced-separation.ts`
- `hydrogen-new-energy.ts`
- `water-wastewater-treatment.ts`
- `shared.ts` — shared types and child-page section builder. This avoids duplicating the same construction logic in six files.

## Apply
1. Copy the entire `sbus` folder to `data/sbus/`.
2. Update imports from `@/data/sbus` to `@/data/sbus/sbus`, including navbar and service page imports.
3. Keep the existing imports from `@/data/sbus` only if you create a compatibility file at `data/sbus.ts` that re-exports from `./sbus/sbus`:
   ```ts
   export { default } from "./sbus/sbus";
   export * from "./sbus/sbus";
   ```
   This compatibility file is optional but avoids editing all existing imports immediately.
4. Confirm `components/services/types.ts` contains the seven additional section types and `ServiceSection` union members.
5. Confirm `ServiceSectionRenderer.tsx` has cases for all seven new section types.
6. Run `npm run build`.

## Content accuracy
The existing products, services, industries and KPIs were retained from the supplied file. New section copy is illustrative mock content and is tailored by technology category where possible. Technical parameters remain qualitative/placeholders; no specific company certifications, performance guarantees or download URLs are invented. The Standards & Certifications section explicitly avoids claiming that Chemdist holds a certification. Downloads are empty until approved files are supplied. Performance & Sustainability appears only for water, green-process and hydrogen-related pages where the topic is directly relevant; it is omitted on other pages rather than showing an empty section.

The shared builder includes technology-specific profiles for distillation, evaporation and columns/reactors, plus tailored templates for EPC, membranes, green process, hydrogen and water-treatment pages.
