import type { SBU } from "../types";

import ethanolDerivatives from "./ethanol-derivatives";
import co2Utilisation from "./co2-utilisation";
import greenChemicals from "./green-chemicals";

export type { SBU, SBUChild } from "../types";

const greenProcessTechnologies: Omit<SBU, "href"> = {
  name: "Green Process Technologies",
  offerings:
    "Ethanol derivatives, CO₂ utilisation, green chemicals and process technology development.",

  children: [
    ethanolDerivatives,
    co2Utilisation,
    greenChemicals,
  ],
};

export default greenProcessTechnologies;
