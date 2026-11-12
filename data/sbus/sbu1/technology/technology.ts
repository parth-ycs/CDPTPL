
import distillationTechnology from "./items/distillation-technology";
import heatTransferTechnology from "./items/heat-transfer-technology";
import evaporationTechnology from "./items/evaporation-technology";
import reactionAndMixingTechnology from "./items/reaction-and-mixing-technology";
import liquidLiquidExtractionTechnology from "./items/liquid-liquid-extraction-technology";
import chemicalProcessTechnology from "./items/chemical-process-technology";
import oilAndGasTechnology from "./items/oil-and-gas-technology";
import environmentalTechnology from "./items/environmental-technology";
import microReactorContinuousFlowSynthesis from "./items/micro-reactor-continuous-flow-synthesis";

const technologyItems = [
  distillationTechnology,
  heatTransferTechnology,
  evaporationTechnology,
  reactionAndMixingTechnology,
  liquidLiquidExtractionTechnology,
  chemicalProcessTechnology,
  oilAndGasTechnology,
  environmentalTechnology,
  microReactorContinuousFlowSynthesis,
];

export const technologySolutions = technologyItems.map((item) => ({
  ...item,
  groupSlug: "process-technology",
}));

export default technologySolutions;
