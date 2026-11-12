import type { SBU } from "../types";

import ufMbr from "./uf-mbr";
import waterReuse from "./water-reuse";

export type { SBU, SBUChild } from "../types";

const waterAndWastewaterTreatment: Omit<SBU, "href"> = {
  name: "Water and Wastewater Treatment",
  offerings:
    "Industrial water treatment, UF/MBR, reuse, recycling and zero liquid discharge where supported by actual capability.",
  children: [
    ufMbr,
    waterReuse,
  ],
};

export default waterAndWastewaterTreatment;
