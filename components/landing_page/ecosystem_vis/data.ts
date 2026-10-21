// Edit this file to change labels, colours, paths, speeds and connector targets.
// Coordinates are in the 1200 x 640 SVG viewBox.

export type TechId = "hydrogen" | "co2" | "fuels" | "water" | "chemicals" | "plastics";

export const C = {
  navy: "#102B46",
  blue: "#1685D8",
  red: "#E53935",
  green: "#3C9857",
  mist: "#EDF4F9",
  grey: "#8293A3",
  co2: "#5A6B7C",
  silt: "#9B8B6E",
};

export interface Tech {
  id: TechId;
  title: string;
  blurb: string;
  color: string;
  icon: string; // 24x24 stroke path
  pill: [number, number]; // top-left of the 190x44 label
  anchor: [number, number]; // connector start on the label
  target: [number, number]; // connector end on the equipment
}

export const PILL_W = 190;
export const PILL_H = 44;

export const TECHS: Tech[] = [
  {
    id: "hydrogen", title: "Green Hydrogen", color: C.blue,
    blurb: "An electrolyzer produces hydrogen from water, which is routed to the process plant as a clean feedstock or energy carrier.",
    icon: "M7 5v14M17 5v14M7 12h10",
    pill: [30, 320], anchor: [125, 364], target: [325, 385],
  },
  {
    id: "co2", title: "Carbon Capture & Utilization", color: C.co2,
    blurb: "CO₂ from a process stack is captured, then split into a separate route toward a utilization step. How much is reused depends on the project.",
    icon: "M7 17h10a4 4 0 000-8 5 5 0 00-9.5-1A4.5 4.5 0 007 17z",
    pill: [700, 80], anchor: [795, 124], target: [845, 340],
  },
  {
    id: "fuels", title: "Sustainable Fuels", color: C.green,
    blurb: "Distillation separates process streams into products. Heat is recovered through the exchanger, and fuel products are sent on to storage.",
    icon: "M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z",
    pill: [420, 60], anchor: [515, 104], target: [570, 215],
  },
  {
    id: "water", title: "Water Treatment", color: C.blue,
    blurb: "Raw water enters a staged treatment unit and leaves cleaner. Real systems are matched to the specific contaminants in the stream.",
    icon: "M3 9c3-3 6 3 9 0s6 3 9 0M3 15c3-3 6 3 9 0s6 3 9 0",
    pill: [30, 430], anchor: [125, 474], target: [220, 508],
  },
  {
    id: "chemicals", title: "Green Chemicals", color: C.green,
    blurb: "Intermediates from the reactor, and utilized CO₂, feed a dedicated vessel for lower-footprint chemical products.",
    icon: "M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3",
    pill: [740, 520], anchor: [835, 520], target: [950, 432],
  },
  {
    id: "plastics", title: "Bio-based Plastics", color: C.green,
    blurb: "Green-chemical output is processed downstream and held in a silo as bio-based polymer material.",
    icon: "M5 19c0-9 5-14 14-14 0 9-5 14-14 14zM5 19l8-8",
    pill: [990, 465], anchor: [1085, 465], target: [1022, 432],
  },
];

export interface PipeDef {
  id: string;
  tech?: TechId; // which label highlights it (omit = always-on process pipe)
  color: string;
  d: string;
  dur: number; // seconds per particle trip: lower = faster
  count: number; // particles on this pipe
  r?: number;
}

export const PIPES: PipeDef[] = [
  { id: "h2", tech: "hydrogen", color: C.blue, d: "M370 425 C400 470 560 480 620 455 S660 430 670 410", dur: 4.4, count: 5 },
  { id: "heat", tech: "fuels", color: C.red, d: "M475 415 C470 350 510 310 550 305", dur: 3.2, count: 3 },
  { id: "fuel", tech: "fuels", color: C.green, d: "M644 262 C760 170 1050 190 1105 388", dur: 7, count: 6 },
  { id: "co2-cap", tech: "co2", color: C.co2, d: "M773 300 C790 270 830 280 845 340", dur: 3.6, count: 4 },
  { id: "co2-use", tech: "co2", color: C.green, d: "M880 400 C890 470 940 470 950 432", dur: 4.6, count: 3 },
  { id: "chem", tech: "chemicals", color: C.green, d: "M740 420 C780 510 940 510 965 432", dur: 5.4, count: 4 },
  { id: "bio", tech: "plastics", color: C.green, d: "M980 400 C990 380 1000 380 1010 384", dur: 2.4, count: 2, r: 2.4 },
  { id: "w-in", tech: "water", color: C.silt, d: "M10 578 C80 575 120 530 170 530", dur: 3.4, count: 4 },
  { id: "w-out", tech: "water", color: C.blue, d: "M270 530 C340 530 380 585 470 580", dur: 3.4, count: 4 },
];

export const RIVER = "M-20 580 C300 565 600 595 1220 570";
