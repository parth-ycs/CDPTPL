import advancedHeatTransfer from "./advancedHeatTransfer";
import biomassConversion from "./biomassConversion";
import carbonCapture from "./carbonCapture";
import greenHydrogen from "./greenHydrogen";

export const innovations = {
  "green-hydrogen": greenHydrogen,
  "carbon-capture": carbonCapture,
  "advanced-heat-transfer": advancedHeatTransfer,
  "biomass-conversion": biomassConversion,
};

export type InnovationId = keyof typeof innovations;