
import type { SBUChild } from "@/data/sbus/types";

import distillationColumns from "./items/distillation-columns";
import hiturbHeatExchangers from "./items/hiturb-heat-exchangers";
import condenser from "./items/condenser";
import cdSmartMixer from "./items/cd-smart-mixer";
import reboiler from "./items/reboiler";
import reactorsAndAgitators from "./items/reactors-and-agitators";
import pressureVessel from "./items/pressure-vessel";
import staticMixers from "./items/static-mixers";
import thinFilmEvaporator from "./items/thin-film-evaporator";
import wipedFilmEvaporator from "./items/wiped-film-evaporator";
import fallingFilmEvaporator from "./items/falling-film-evaporator";
import forcedCirculationEvaporator from "./items/forced-circulation-evaporator";
import strippers from "./items/strippers";
import scrubbers from "./items/scrubbers";
import skids from "./items/skids";

const equipmentItems: SBUChild[] = [
  distillationColumns,
  hiturbHeatExchangers,
  condenser,
  cdSmartMixer,
  reboiler,
  reactorsAndAgitators,
  pressureVessel,
  staticMixers,
  thinFilmEvaporator,
  wipedFilmEvaporator,
  fallingFilmEvaporator,
  forcedCirculationEvaporator,
  strippers,
  scrubbers,
  skids,
];

export const equipmentSolutions = equipmentItems.map((item) => ({
  ...item,
  groupSlug: "process-equipment",
}));

export default equipmentSolutions;
