
import structuredPackings from "./items/structured-packings";
import randomPackings from "./items/random-packings";
import trays from "./items/trays";
import liquidDistributors from "./items/liquid-distributors";
import liquidCollectors from "./items/liquid-collectors";
import packingSupport from "./items/packing-support";

const massTransferItems = [
  structuredPackings,
  randomPackings,
  trays,
  liquidDistributors,
  liquidCollectors,
  packingSupport,
];

export const massTransferSolutions = massTransferItems.map((item) => ({
  ...item,
  groupSlug: "mass-transfer",
}));

export default massTransferSolutions;
