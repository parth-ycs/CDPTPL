import type { ProjectData } from "../types";

import greenHydrogen from "./greenHydrogen";
import carbonCapture from "./carbonCapture";
import advancedHeatTransfer from "./advancedHeatTransfer";
import biomassConversion from "./biomassConversion";
import addarReactionFacility from "./addarReactionFacility";

export const projectList: ProjectData[] = [
  addarReactionFacility,
  greenHydrogen,
  carbonCapture,
  advancedHeatTransfer,
  biomassConversion,
];