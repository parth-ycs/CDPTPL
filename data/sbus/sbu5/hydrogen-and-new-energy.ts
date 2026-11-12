import type { SBU } from "../types";

import electrolyzers from "./electrolyzers";
import hydrogenSystems from "./hydrogen-systems";

export type { SBU, SBUChild } from "../types";

const hydrogenAndNewEnergy: Omit<SBU, "href"> = {
  name: "Hydrogen and New Energy",
  offerings:
    "Electrolyzers, hydrogen systems, energy transition applications and associated projects.",
  children: [
    electrolyzers,
    hydrogenSystems,
  ],
};

export default hydrogenAndNewEnergy;
