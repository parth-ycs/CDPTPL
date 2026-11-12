
import type { SBU } from "../types";

import plantEngineering from "./plant-engineering";
import modularPackages from "./modular-packages";
import projectExecution from "./project-execution";

export type { SBU, SBUChild } from "../types";

const processPlantsAndEpc: Omit<SBU, "href"> = {
  name: "Process Plants and EPC",
  offerings:
    "Plant engineering, modular packages, project execution and integration.",

  children: [
    plantEngineering,
    modularPackages,
    projectExecution,
  ],
};

export default processPlantsAndEpc;
