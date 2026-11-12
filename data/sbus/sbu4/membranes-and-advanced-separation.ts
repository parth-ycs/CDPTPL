import type { SBU } from "./types";

import gasSeparation from "./gas-separation";
import pervaporation from "./pervaporation";

export type { SBU, SBUChild } from "./types";

const membranesAndAdvancedSeparation: SBU = {
  name: "Membranes and Advanced Separation",
  offerings:
    "Gas separation, pervaporation and other membrane applications.",
  children: [
    gasSeparation,
    pervaporation,
  ],
};

export default membranesAndAdvancedSeparation;
