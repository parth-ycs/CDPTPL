
import type {
  ServiceHeroContent,
  ServiceSection,
} from "@/components/solutions/types";

// ---------------------------------------------
// TYPES
// ---------------------------------------------

export interface EquipmentSolution {
  slug: string;
  groupSlug: string;
  hero: ServiceHeroContent;
  sections: ServiceSection[];
}

type EquipmentDefinition = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  overview: string;
  capabilities: string[];
  products: {
    name: string;
    category: string;
    description: string;
  }[];
  applications: string[];
  specifications: {
    name: string;
    value: string;
  }[];
  processSteps: {
    title: string;
    description: string;
    output: string;
  }[];
};

// ---------------------------------------------
// SHARED IMAGE
// ---------------------------------------------

const EQUIPMENT_IMAGE = "/images/solutions/process-equipment.jpg";

// ---------------------------------------------
// EQUIPMENT DATA
// ---------------------------------------------

const equipmentData: EquipmentDefinition[] = [
  {
    slug: "distillation-columns",
    name: "Distillation Columns",
    tagline: "Advanced separation equipment for industrial processing.",
    description:
      "Engineered distillation columns designed to separate, purify and recover process components through controlled vapour-liquid contact.",
    overview:
      "Distillation columns are essential equipment in chemical and petrochemical processing. They separate liquid mixtures based on differences in component volatility. Their configuration depends on feed composition, separation targets, operating pressure, throughput and required product specifications.",
    capabilities: [
      "Process design and separation assessment",
      "Column configuration and hydraulic evaluation",
      "Tray and packing selection",
      "Thermal system and utility integration",
      "Column revamping and debottlenecking assessment",
    ],
    products: [
      {
        name: "Tray Distillation Columns",
        category: "Separation Equipment",
        description:
          "Column configurations using trays to provide staged vapour-liquid contact for industrial separation duties.",
      },
      {
        name: "Packed Distillation Columns",
        category: "Separation Equipment",
        description:
          "Packed column arrangements designed around separation efficiency, pressure drop and process operating conditions.",
      },
      {
        name: "Column Internals",
        category: "Process Internals",
        description:
          "Internal components including trays, distributors, collectors and support structures.",
      },
    ],
    applications: [
      "Chemical and petrochemical processing",
      "Solvent recovery and purification",
      "Specialty chemical manufacturing",
      "Oil and gas processing",
    ],
    specifications: [
      { name: "Column configuration", value: "Tray or packed design" },
      { name: "Operating pressure", value: "Defined by process requirements" },
      { name: "Operating temperature", value: "Process-specific" },
      { name: "Internals", value: "Selected according to hydraulic requirements" },
      { name: "Materials", value: "Selected based on fluid compatibility" },
    ],
    processSteps: [
      {
        title: "Feed Introduction",
        description:
          "The process feed enters the column at the designated feed location under controlled operating conditions.",
        output: "Conditioned feed stream",
      },
      {
        title: "Vapour-Liquid Contact",
        description:
          "Rising vapour and descending liquid interact across trays or packing to promote component separation.",
        output: "Separated vapour and liquid phases",
      },
      {
        title: "Overhead Condensation",
        description:
          "The overhead vapour is condensed and routed according to the product and reflux requirements.",
        output: "Overhead product and reflux",
      },
      {
        title: "Bottom Product Recovery",
        description:
          "The reboiler supplies thermal energy while the concentrated bottom product is withdrawn.",
        output: "Bottom product stream",
      },
    ],
  },

  {
    slug: "hiturb-heat-exchangers",
    name: "HiTURB™ Heat Exchangers",
    tagline: "Efficient thermal equipment for demanding process applications.",
    description:
      "Specialized heat exchanger solutions designed to transfer thermal energy between process streams while considering heat duty, operating conditions and equipment reliability.",
    overview:
      "Heat exchangers enable controlled thermal energy transfer across industrial processes. Equipment selection depends on heat duty, fluid properties, pressure drop, temperature approach, fouling characteristics and available utilities.",
    capabilities: [
      "Thermal duty assessment and heat balance",
      "Heat exchanger configuration selection",
      "Thermal and hydraulic design evaluation",
      "Material and corrosion considerations",
      "Heat recovery and process integration",
    ],
    products: [
      {
        name: "Shell and Tube Heat Exchangers",
        category: "Heat Transfer Equipment",
        description:
          "Heat exchanger configurations using tube bundles for thermal transfer between process streams.",
      },
      {
        name: "Process Heat Exchanger Packages",
        category: "Thermal Systems",
        description:
          "Integrated thermal equipment arrangements designed around process and utility requirements.",
      },
      {
        name: "Heat Recovery Units",
        category: "Energy Recovery",
        description:
          "Equipment arrangements for recovering usable thermal energy from suitable process streams.",
      },
    ],
    applications: [
      "Chemical processing plants",
      "Petrochemical facilities",
      "Oil and gas processing",
      "Industrial energy recovery",
    ],
    specifications: [
      { name: "Heat duty", value: "Calculated from process heat balance" },
      { name: "Heat transfer area", value: "Determined during thermal design" },
      { name: "Operating pressure", value: "Process-specific" },
      { name: "Pressure drop", value: "Defined by hydraulic requirements" },
      { name: "Materials", value: "Selected for process fluid compatibility" },
    ],
    processSteps: [
      {
        title: "Hot and Cold Stream Introduction",
        description:
          "The process streams enter their designated flow passages.",
        output: "Separate process streams",
      },
      {
        title: "Thermal Energy Transfer",
        description:
          "Heat passes through the exchanger surface from the hotter stream to the colder stream.",
        output: "Thermally exchanged streams",
      },
      {
        title: "Temperature Adjustment",
        description:
          "The streams approach their specified outlet temperatures according to the design duty.",
        output: "Conditioned process streams",
      },
      {
        title: "Process Integration",
        description:
          "The outlet streams are routed to their respective downstream process operations.",
        output: "Integrated thermal process",
      },
    ],
  },

  {
    slug: "condenser",
    name: "Condenser",
    tagline: "Reliable vapour condensation for industrial process systems.",
    description:
      "Industrial condenser equipment designed to remove heat from vapour streams and convert them into liquid for recovery, reuse or downstream processing.",
    overview:
      "Condensers are used throughout chemical and process industries to convert vapour into liquid through controlled heat removal. Their design considers vapour composition, condensation duty, cooling medium, operating pressure and condensate handling requirements.",
    capabilities: [
      "Condensation duty assessment",
      "Thermal and hydraulic design",
      "Cooling medium selection",
      "Condensate collection and handling",
      "Process and utility integration",
    ],
    products: [
      {
        name: "Shell and Tube Condensers",
        category: "Condensation Equipment",
        description:
          "Industrial condensers using tube-side and shell-side flow arrangements for controlled thermal exchange.",
      },
      {
        name: "Surface Condensers",
        category: "Thermal Equipment",
        description:
          "Equipment designed to condense vapour without direct mixing with the cooling medium.",
      },
      {
        name: "Process Condenser Packages",
        category: "Packaged Equipment",
        description:
          "Integrated condenser arrangements with associated process connections and condensate handling.",
      },
    ],
    applications: [
      "Distillation and evaporation systems",
      "Chemical manufacturing",
      "Petrochemical processing",
      "Industrial vapour recovery",
    ],
    specifications: [
      { name: "Condensation duty", value: "Calculated from vapour conditions" },
      { name: "Cooling medium", value: "Selected for site utility conditions" },
      { name: "Operating pressure", value: "Process-specific" },
      { name: "Condensate handling", value: "Defined by downstream requirements" },
      { name: "Materials", value: "Selected based on fluid compatibility" },
    ],
    processSteps: [
      {
        title: "Vapour Inlet",
        description:
          "The vapour stream enters the condenser at its specified operating conditions.",
        output: "Incoming vapour stream",
      },
      {
        title: "Heat Removal",
        description:
          "Thermal energy is transferred from the vapour to the cooling medium.",
        output: "Cooled vapour",
      },
      {
        title: "Condensation",
        description:
          "The vapour undergoes a phase change into liquid as heat is removed.",
        output: "Liquid condensate",
      },
      {
        title: "Condensate Collection",
        description:
          "The liquid condensate is collected and routed for recovery or further processing.",
        output: "Recovered liquid stream",
      },
    ],
  },

  {
    slug: "cd-smart-mixer",
    name: "CD-Smart Mixer",
    tagline: "Engineered mixing solutions for process efficiency.",
    description:
      "Industrial mixing equipment designed to support controlled blending, dispersion and homogenization across a range of process applications.",
    overview:
      "Mixing equipment plays an important role in achieving consistent process conditions and product quality. Mixer selection considers fluid properties, viscosity, mixing intensity, vessel geometry, operating conditions and the required mixing outcome.",
    capabilities: [
      "Mixing duty and application assessment",
      "Impeller and agitator configuration",
      "Fluid dynamics and mixing evaluation",
      "Drive and mechanical arrangement",
      "Process vessel integration",
    ],
    products: [
      {
        name: "Industrial Mixer Assemblies",
        category: "Mixing Equipment",
        description:
          "Mixer arrangements designed for controlled blending and circulation within process vessels.",
      },
      {
        name: "Agitator Systems",
        category: "Mixing Equipment",
        description:
          "Mechanical agitation systems configured around fluid characteristics and mixing requirements.",
      },
      {
        name: "Impeller Assemblies",
        category: "Mixer Components",
        description:
          "Impeller configurations selected to achieve the required flow and mixing behaviour.",
      },
    ],
    applications: [
      "Chemical manufacturing",
      "Specialty chemical processing",
      "Liquid blending operations",
      "Industrial formulation processes",
    ],
    specifications: [
      { name: "Mixing duty", value: "Blending, dispersion or homogenization" },
      { name: "Fluid viscosity", value: "Established from process data" },
      { name: "Impeller configuration", value: "Selected for application requirements" },
      { name: "Drive arrangement", value: "Defined by mechanical and process requirements" },
      { name: "Vessel integration", value: "Project-specific" },
    ],
    processSteps: [
      {
        title: "Material Introduction",
        description:
          "Process materials are introduced into the mixing vessel.",
        output: "Initial material charge",
      },
      {
        title: "Mechanical Agitation",
        description:
          "The impeller generates fluid movement within the vessel.",
        output: "Circulating fluid",
      },
      {
        title: "Blending and Dispersion",
        description:
          "Mixing action promotes distribution of the process components.",
        output: "Blended process material",
      },
      {
        title: "Product Discharge",
        description:
          "The mixed material is discharged for subsequent processing.",
        output: "Mixed product stream",
      },
    ],
  },

  {
    slug: "reboiler",
    name: "Reboiler",
    tagline: "Thermal equipment supporting industrial separation processes.",
    description:
      "Reboiler systems provide controlled heat input to process columns, generating vapour to support distillation and other separation operations.",
    overview:
      "Reboilers supply thermal energy to the bottom section of distillation columns. Their design depends on process fluid properties, vapour generation requirements, heat duty, circulation arrangement and operating conditions.",
    capabilities: [
      "Reboiler duty calculations",
      "Thermal configuration selection",
      "Circulation and hydraulic assessment",
      "Process and utility integration",
      "Thermal equipment performance review",
    ],
    products: [
      {
        name: "Kettle Reboilers",
        category: "Thermal Equipment",
        description:
          "Reboiler configurations featuring a liquid holding section and heat exchanger bundle.",
      },
      {
        name: "Thermosiphon Reboilers",
        category: "Thermal Equipment",
        description:
          "Circulation-based reboilers using density differences to promote fluid movement.",
      },
      {
        name: "Forced Circulation Reboilers",
        category: "Thermal Equipment",
        description:
          "Reboiler arrangements using mechanical circulation to move process fluid through the heat exchanger.",
      },
    ],
    applications: [
      "Distillation columns",
      "Petrochemical processing",
      "Chemical separation systems",
      "Industrial solvent recovery",
    ],
    specifications: [
      { name: "Thermal duty", value: "Established from process heat balance" },
      { name: "Circulation type", value: "Natural or forced circulation" },
      { name: "Heating medium", value: "Selected for process requirements" },
      { name: "Operating conditions", value: "Project-specific" },
      { name: "Heat transfer surface", value: "Determined through thermal design" },
    ],
    processSteps: [
      {
        title: "Liquid Feed",
        description:
          "Liquid from the column bottom enters the reboiler circulation system.",
        output: "Liquid process stream",
      },
      {
        title: "Heat Supply",
        description:
          "Thermal energy is transferred from the heating medium to the process fluid.",
        output: "Heated process fluid",
      },
      {
        title: "Vapour Generation",
        description:
          "A portion of the process liquid vaporises under the specified conditions.",
        output: "Two-phase process stream",
      },
      {
        title: "Column Return",
        description:
          "Generated vapour returns to the column to support separation.",
        output: "Reboiled process stream",
      },
    ],
  },

  {
    slug: "reactors-and-agitators",
    name: "Reactors & Agitators",
    tagline: "Integrated equipment for controlled industrial reactions.",
    description:
      "Engineered reactor and agitation systems designed to support controlled chemical reactions, heat transfer and process mixing.",
    overview:
      "Reactors provide the environment for chemical transformations under controlled process conditions. Agitation systems support material mixing, temperature uniformity and reactant distribution. Design depends on reaction characteristics, heat generation, pressure, temperature and material compatibility.",
    capabilities: [
      "Reaction process assessment",
      "Reactor configuration selection",
      "Agitation and impeller design",
      "Thermal management assessment",
      "Vessel and instrumentation integration",
    ],
    products: [
      {
        name: "Batch Reactors",
        category: "Reaction Equipment",
        description:
          "Vessel systems for carrying out controlled batch chemical processes.",
      },
      {
        name: "Continuous Reactors",
        category: "Reaction Equipment",
        description:
          "Reactor arrangements designed for continuous feed and product flow.",
      },
      {
        name: "Agitator Assemblies",
        category: "Mixing Equipment",
        description:
          "Mechanical mixing systems configured for the reactor's process duty.",
      },
    ],
    applications: [
      "Chemical manufacturing",
      "Specialty chemicals",
      "Resin and polymer processing",
      "Industrial formulation",
    ],
    specifications: [
      { name: "Reaction type", value: "Defined by process chemistry" },
      { name: "Operating temperature", value: "Reaction-specific" },
      { name: "Operating pressure", value: "Project-specific" },
      { name: "Agitation arrangement", value: "Selected according to mixing duty" },
      { name: "Materials", value: "Selected for chemical compatibility" },
    ],
    processSteps: [
      {
        title: "Reactant Charging",
        description:
          "The required raw materials are introduced according to the process sequence.",
        output: "Charged reactor",
      },
      {
        title: "Agitation and Conditioning",
        description:
          "The mixing system promotes reactant distribution and process uniformity.",
        output: "Conditioned reaction mixture",
      },
      {
        title: "Controlled Reaction",
        description:
          "The reaction proceeds under the defined temperature, pressure and process conditions.",
        output: "Reaction mixture",
      },
      {
        title: "Product Recovery",
        description:
          "The reaction product is discharged or transferred to downstream processing.",
        output: "Product stream",
      },
    ],
  },

  {
    slug: "pressure-vessel",
    name: "Pressure Vessel",
    tagline: "Engineered vessels for demanding industrial operating conditions.",
    description:
      "Pressure-containing equipment designed for the storage, processing or handling of fluids under defined operating and design pressure conditions.",
    overview:
      "Pressure vessels are critical components in industrial process facilities. Their engineering involves mechanical design, pressure and temperature requirements, materials selection, corrosion considerations, fabrication documentation and applicable inspection requirements.",
    capabilities: [
      "Pressure vessel design basis development",
      "Mechanical configuration and sizing",
      "Materials and corrosion assessment",
      "Nozzle and connection arrangement",
      "Inspection and quality documentation planning",
    ],
    products: [
      {
        name: "Process Pressure Vessels",
        category: "Static Equipment",
        description:
          "Pressure-containing vessels configured for specific industrial process duties.",
      },
      {
        name: "Storage Vessels",
        category: "Storage Equipment",
        description:
          "Vessel arrangements for holding process fluids under defined operating conditions.",
      },
      {
        name: "Separator Vessels",
        category: "Separation Equipment",
        description:
          "Vessels designed to separate process phases according to the intended service.",
      },
    ],
    applications: [
      "Chemical process plants",
      "Oil and gas facilities",
      "Petrochemical processing",
      "Industrial utilities",
    ],
    specifications: [
      { name: "Design pressure", value: "Established from process and design basis" },
      { name: "Design temperature", value: "Project-specific" },
      { name: "Vessel orientation", value: "Horizontal or vertical" },
      { name: "Materials", value: "Selected through material and corrosion review" },
      { name: "Design code", value: "Confirmed for jurisdiction and project" },
    ],
    processSteps: [
      {
        title: "Design Basis",
        description:
          "Establish the operating conditions, fluid properties and mechanical requirements.",
        output: "Approved design basis",
      },
      {
        title: "Mechanical Design",
        description:
          "Develop vessel configuration, dimensions, material selection and connection arrangements.",
        output: "Mechanical design package",
      },
      {
        title: "Fabrication and Inspection",
        description:
          "Carry out fabrication and agreed quality verification activities.",
        output: "Inspected vessel",
      },
      {
        title: "Installation and Integration",
        description:
          "Install and connect the vessel according to project requirements.",
        output: "Integrated process equipment",
      },
    ],
  },

  {
    slug: "static-mixers",
    name: "Static Mixers",
    tagline: "In-line mixing solutions without rotating components.",
    description:
      "Static mixers use stationary internal elements to promote blending and dispersion as process fluids flow through a pipeline or mixing chamber.",
    overview:
      "Static mixers provide continuous in-line mixing without requiring a rotating agitator. Their internal geometry creates flow division and recombination to improve mixing. Selection depends on fluid properties, flow regime, pressure drop and the required mixing quality.",
    capabilities: [
      "In-line mixing duty assessment",
      "Mixing element configuration",
      "Pressure drop evaluation",
      "Fluid flow and process integration",
      "Material compatibility assessment",
    ],
    products: [
      {
        name: "In-line Static Mixers",
        category: "Mixing Equipment",
        description:
          "Stationary-element mixers designed for blending process fluids within pipelines.",
      },
      {
        name: "Multi-element Mixers",
        category: "Mixing Equipment",
        description:
          "Mixing arrangements using multiple internal elements to promote fluid distribution.",
      },
      {
        name: "Injection Mixers",
        category: "Process Mixing",
        description:
          "Mixing configurations for introducing and distributing an additional process stream.",
      },
    ],
    applications: [
      "Chemical processing",
      "Water treatment processes",
      "Polymer processing",
      "Industrial fluid blending",
    ],
    specifications: [
      { name: "Flow rate", value: "Defined by process operating conditions" },
      { name: "Fluid properties", value: "Viscosity and density established from process data" },
      { name: "Pressure drop", value: "Evaluated during hydraulic design" },
      { name: "Mixing elements", value: "Selected according to mixing duty" },
      { name: "Materials", value: "Selected for fluid compatibility" },
    ],
    processSteps: [
      {
        title: "Fluid Entry",
        description:
          "The process fluid enters the mixer through the inlet connection.",
        output: "Incoming process stream",
      },
      {
        title: "Flow Division",
        description:
          "Stationary elements divide and redirect the flowing fluid.",
        output: "Divided flow streams",
      },
      {
        title: "Flow Recombination",
        description:
          "The flow streams repeatedly combine and redistribute through the mixer.",
        output: "Mixed fluid stream",
      },
      {
        title: "Outlet Discharge",
        description:
          "The mixed fluid exits the mixer and continues to downstream processing.",
        output: "Blended outlet stream",
      },
    ],
  },

  {
    slug: "thin-film-evaporator",
    name: "Thin Film Evaporator",
    tagline: "Thermal processing for heat-sensitive and viscous products.",
    description:
      "Thin film evaporators create a controlled liquid film across a heated surface to support rapid evaporation under suitable operating conditions.",
    overview:
      "Thin film evaporation is used for concentrating or separating products where residence time, heat exposure and viscosity are important design considerations. A mechanically distributed liquid film provides thermal contact with the heated surface.",
    capabilities: [
      "Evaporation duty assessment",
      "Film formation and distribution evaluation",
      "Thermal design and heat transfer",
      "Vacuum and vapour handling integration",
      "Product residence time assessment",
    ],
    products: [
      {
        name: "Vertical Thin Film Evaporators",
        category: "Evaporation Equipment",
        description:
          "Vertical equipment configurations designed to distribute liquid across a heated surface.",
      },
      {
        name: "Agitated Thin Film Evaporators",
        category: "Evaporation Equipment",
        description:
          "Mechanically assisted film systems for suitable viscous or heat-sensitive process streams.",
      },
      {
        name: "Vapour Separation Assemblies",
        category: "Process Equipment",
        description:
          "Associated equipment for separating and routing generated vapour.",
      },
    ],
    applications: [
      "Specialty chemical concentration",
      "Pharmaceutical intermediates",
      "High-viscosity product processing",
      "Solvent recovery",
    ],
    specifications: [
      { name: "Evaporation duty", value: "Established through process calculations" },
      { name: "Film arrangement", value: "Selected according to product properties" },
      { name: "Operating pressure", value: "Atmospheric or reduced pressure as required" },
      { name: "Heating medium", value: "Selected according to thermal duty" },
      { name: "Product residence time", value: "Evaluated during process design" },
    ],
    processSteps: [
      {
        title: "Feed Introduction",
        description:
          "The liquid feed enters the evaporator and is distributed onto the heated surface.",
        output: "Distributed liquid feed",
      },
      {
        title: "Film Formation",
        description:
          "The internal arrangement creates a controlled thin liquid film.",
        output: "Thin liquid film",
      },
      {
        title: "Evaporation",
        description:
          "Thermal energy causes a portion of the liquid to vaporise.",
        output: "Vapour and concentrated liquid",
      },
      {
        title: "Product Separation",
        description:
          "The vapour and concentrated product are collected through their respective outlets.",
        output: "Vapour and concentrate streams",
      },
    ],
  },

  {
    slug: "wiped-film-evaporator",
    name: "Wiped Film Evaporator",
    tagline: "Controlled film evaporation for challenging process fluids.",
    description:
      "Wiped film evaporators use rotating wiping elements to continuously distribute process liquid over a heated surface for controlled evaporation.",
    overview:
      "Wiped film evaporators are suitable for process applications where fluid viscosity, heat sensitivity, fouling behaviour or residence time require special consideration. A rotating mechanism maintains liquid distribution across the heated surface.",
    capabilities: [
      "Product and evaporation duty assessment",
      "Wiping mechanism configuration",
      "Thermal and vacuum system integration",
      "Fouling and product handling assessment",
      "Vapour and concentrate recovery",
    ],
    products: [
      {
        name: "Vertical Wiped Film Evaporators",
        category: "Evaporation Equipment",
        description:
          "Vertical evaporation systems with rotating wiping assemblies.",
      },
      {
        name: "Wiping Rotor Assemblies",
        category: "Mechanical Components",
        description:
          "Rotating components designed to distribute liquid over the heated surface.",
      },
      {
        name: "Vacuum Evaporation Packages",
        category: "Process Systems",
        description:
          "Associated equipment for reduced-pressure evaporation applications.",
      },
    ],
    applications: [
      "Viscous chemical processing",
      "Specialty chemical concentration",
      "Heat-sensitive product processing",
      "Industrial solvent recovery",
    ],
    specifications: [
      { name: "Product viscosity", value: "Established from feed characterization" },
      { name: "Operating pressure", value: "Selected for evaporation requirements" },
      { name: "Rotor configuration", value: "Selected according to product characteristics" },
      { name: "Thermal duty", value: "Calculated from process heat balance" },
      { name: "Materials", value: "Selected for process compatibility" },
    ],
    processSteps: [
      {
        title: "Feed Distribution",
        description:
          "The process liquid enters the equipment and reaches the heated surface.",
        output: "Incoming liquid film",
      },
      {
        title: "Mechanical Wiping",
        description:
          "Rotating wiping elements distribute the liquid across the heating surface.",
        output: "Continuously distributed film",
      },
      {
        title: "Controlled Evaporation",
        description:
          "The heated surface supplies energy to vaporise the volatile components.",
        output: "Vapour and concentrated liquid",
      },
      {
        title: "Product Collection",
        description:
          "The concentrated liquid and generated vapour are routed to their respective outlets.",
        output: "Separated process streams",
      },
    ],
  },

  {
    slug: "falling-film-evaporator",
    name: "Falling Film Evaporator",
    tagline: "Efficient evaporation through controlled liquid film flow.",
    description:
      "Falling film evaporators distribute liquid over heated surfaces, allowing the process fluid to flow downward as a thin film while evaporation takes place.",
    overview:
      "Falling film evaporation is used for concentrating suitable liquids with controlled thermal exposure. Liquid distribution, heat transfer, vapour separation and operating conditions influence overall system performance.",
    capabilities: [
      "Evaporation capacity assessment",
      "Liquid distributor design evaluation",
      "Heat transfer and thermal balance",
      "Vapour separation and handling",
      "Multi-effect system integration",
    ],
    products: [
      {
        name: "Vertical Falling Film Evaporators",
        category: "Evaporation Equipment",
        description:
          "Vertical heat exchanger arrangements designed to support downward liquid film flow.",
      },
      {
        name: "Liquid Distribution Systems",
        category: "Process Internals",
        description:
          "Distribution components designed to provide uniform liquid entry across heating surfaces.",
      },
      {
        name: "Multi-effect Evaporator Systems",
        category: "Thermal Systems",
        description:
          "Integrated evaporation arrangements using multiple effects where process conditions permit.",
      },
    ],
    applications: [
      "Chemical concentration",
      "Food and ingredient processing",
      "Industrial liquid recovery",
      "Suitable heat-sensitive liquid streams",
    ],
    specifications: [
      { name: "Feed flow", value: "Defined by process requirements" },
      { name: "Evaporation capacity", value: "Established through material balance" },
      { name: "Heating medium", value: "Selected according to thermal design" },
      { name: "Liquid distribution", value: "Designed for uniform surface coverage" },
      { name: "Operating pressure", value: "Process-specific" },
    ],
    processSteps: [
      {
        title: "Feed Distribution",
        description:
          "Liquid feed is introduced and distributed across the heating surfaces.",
        output: "Uniformly distributed liquid",
      },
      {
        title: "Downward Film Flow",
        description:
          "The liquid moves downward along the heated surface under the selected operating conditions.",
        output: "Falling liquid film",
      },
      {
        title: "Heat Transfer and Evaporation",
        description:
          "Thermal energy causes part of the liquid to vaporise.",
        output: "Vapour and concentrated liquid",
      },
      {
        title: "Vapour and Product Separation",
        description:
          "The generated vapour and remaining liquid are separated and routed downstream.",
        output: "Separated product streams",
      },
    ],
  },

  {
    slug: "forced-circulation-evaporator",
    name: "Forced Circulation Evaporator",
    tagline: "Controlled evaporation for demanding liquid processing duties.",
    description:
      "Forced circulation evaporators use mechanical pumping to circulate process liquid through heat exchange equipment and evaporation chambers.",
    overview:
      "Forced circulation systems are considered for applications involving challenging fluid characteristics, scaling tendencies or process conditions that benefit from controlled circulation. The design integrates circulation pumps, heat exchangers, vapour separation and process controls.",
    capabilities: [
      "Circulation and evaporation duty assessment",
      "Pump and hydraulic system selection",
      "Thermal equipment integration",
      "Scaling and fouling considerations",
      "Vapour separation and product handling",
    ],
    products: [
      {
        name: "Forced Circulation Evaporator Packages",
        category: "Evaporation Equipment",
        description:
          "Integrated systems combining heat exchange, circulation and vapour separation equipment.",
      },
      {
        name: "Circulation Pump Assemblies",
        category: "Mechanical Equipment",
        description:
          "Pump arrangements designed to maintain the required process circulation.",
      },
      {
        name: "Vapour Separation Chambers",
        category: "Process Equipment",
        description:
          "Separation equipment for handling vapour generated during evaporation.",
      },
    ],
    applications: [
      "Chemical process concentration",
      "High-solids liquid processing",
      "Industrial wastewater concentration",
      "Suitable scaling-prone streams",
    ],
    specifications: [
      { name: "Circulation rate", value: "Determined through hydraulic calculations" },
      { name: "Evaporation duty", value: "Established from material and energy balances" },
      { name: "Pump configuration", value: "Selected for process fluid characteristics" },
      { name: "Operating pressure", value: "Process-specific" },
      { name: "Heat exchanger", value: "Selected according to thermal requirements" },
    ],
    processSteps: [
      {
        title: "Feed Introduction",
        description:
          "The liquid feed enters the process circulation system.",
        output: "Incoming liquid feed",
      },
      {
        title: "Forced Circulation",
        description:
          "A circulation pump moves the liquid through the heat exchanger.",
        output: "Circulating process stream",
      },
      {
        title: "Thermal Energy Transfer",
        description:
          "The liquid receives thermal energy before entering the evaporation chamber.",
        output: "Heated process stream",
      },
      {
        title: "Vapour Separation",
        description:
          "Generated vapour is separated while the remaining liquid returns to circulation or exits as concentrate.",
        output: "Vapour and concentrate streams",
      },
    ],
  },

  {
    slug: "strippers",
    name: "Strippers",
    tagline: "Process equipment for removing volatile components from liquids.",
    description:
      "Industrial stripping columns are designed to remove selected volatile components from liquid streams through gas-liquid contact.",
    overview:
      "Stripping is a mass transfer operation used to transfer volatile components from a liquid phase into a gas or vapour phase. Equipment design considers feed properties, stripping medium, operating conditions, mass transfer requirements and downstream recovery.",
    capabilities: [
      "Stripping duty assessment",
      "Column and internals configuration",
      "Gas-liquid contact evaluation",
      "Operating condition and utility assessment",
      "Off-gas and recovered component handling",
    ],
    products: [
      {
        name: "Packed Stripping Columns",
        category: "Separation Equipment",
        description:
          "Packed column arrangements supporting gas-liquid mass transfer.",
      },
      {
        name: "Tray Stripping Columns",
        category: "Separation Equipment",
        description:
          "Tray-based column systems designed for staged gas-liquid contacting.",
      },
      {
        name: "Stripping System Packages",
        category: "Process Systems",
        description:
          "Integrated equipment arrangements for liquid feed, stripping medium and treated liquid handling.",
      },
    ],
    applications: [
      "Chemical processing",
      "Industrial wastewater treatment",
      "Solvent removal",
      "Process liquid purification",
    ],
    specifications: [
      { name: "Feed composition", value: "Established through process analysis" },
      { name: "Stripping medium", value: "Selected for separation requirements" },
      { name: "Column internals", value: "Tray or packing configuration" },
      { name: "Operating pressure", value: "Process-specific" },
      { name: "Mass transfer duty", value: "Determined through process design" },
    ],
    processSteps: [
      {
        title: "Liquid Feed Introduction",
        description:
          "The liquid stream enters the stripping column through the feed distribution system.",
        output: "Incoming liquid stream",
      },
      {
        title: "Stripping Medium Introduction",
        description:
          "Gas or vapour enters the column to provide the required contacting medium.",
        output: "Counter-current process streams",
      },
      {
        title: "Mass Transfer",
        description:
          "Volatile components transfer from the liquid phase to the gas phase through contacting internals.",
        output: "Treated liquid and enriched gas",
      },
      {
        title: "Stream Recovery",
        description:
          "The treated liquid and overhead stream are routed for further handling.",
        output: "Separated process streams",
      },
    ],
  },

  {
    slug: "scrubbers",
    name: "Scrubbers",
    tagline: "Gas treatment equipment for industrial process applications.",
    description:
      "Industrial scrubbers are designed to remove selected contaminants from gas streams through liquid-gas contacting or other suitable separation mechanisms.",
    overview:
      "Scrubbing systems are used in process facilities to treat gas streams and support emission-control requirements. Equipment selection depends on gas composition, contaminant characteristics, flow rate, operating conditions and the required treatment performance.",
    capabilities: [
      "Gas treatment duty assessment",
      "Scrubber configuration selection",
      "Gas-liquid contacting design",
      "Liquid circulation and handling",
      "Treated gas and residual stream integration",
    ],
    products: [
      {
        name: "Packed Bed Scrubbers",
        category: "Gas Treatment Equipment",
        description:
          "Packed systems providing contact between gas and scrubbing liquid.",
      },
      {
        name: "Venturi Scrubbers",
        category: "Gas Treatment Equipment",
        description:
          "Gas treatment arrangements using high-velocity gas flow and liquid injection.",
      },
      {
        name: "Spray Tower Scrubbers",
        category: "Gas Treatment Equipment",
        description:
          "Scrubbing equipment using liquid spray distribution for gas treatment.",
      },
    ],
    applications: [
      "Chemical manufacturing",
      "Industrial exhaust treatment",
      "Process gas conditioning",
      "Suitable emission-control applications",
    ],
    specifications: [
      { name: "Gas flow rate", value: "Established from process data" },
      { name: "Contaminant composition", value: "Defined through gas analysis" },
      { name: "Scrubbing medium", value: "Selected according to treatment chemistry" },
      { name: "Pressure drop", value: "Evaluated during equipment design" },
      { name: "Treated gas quality", value: "Defined by applicable project requirements" },
    ],
    processSteps: [
      {
        title: "Gas Inlet",
        description:
          "The untreated gas stream enters the scrubber through its inlet arrangement.",
        output: "Incoming gas stream",
      },
      {
        title: "Scrubbing Medium Distribution",
        description:
          "The liquid scrubbing medium is distributed within the contacting section.",
        output: "Distributed scrubbing liquid",
      },
      {
        title: "Gas-Liquid Contact",
        description:
          "The gas interacts with the scrubbing medium, allowing suitable contaminants to be transferred or captured.",
        output: "Treated gas and contaminated liquid",
      },
      {
        title: "Outlet and Liquid Handling",
        description:
          "The treated gas exits while the spent liquid is collected for appropriate handling.",
        output: "Treated gas and spent liquid",
      },
    ],
  },

  {
    slug: "skids",
    name: "Skids",
    tagline: "Integrated process equipment packages for industrial facilities.",
    description:
      "Packaged process skids combine selected equipment, piping, instrumentation and supporting components into integrated systems designed for specific industrial duties.",
    overview:
      "Skid-mounted systems provide a packaged approach to process equipment integration. They can include pumps, vessels, heat exchangers, valves, piping, instrumentation and control interfaces. Package configuration depends on the process scope, installation requirements and site utilities.",
    capabilities: [
      "Package process design and configuration",
      "Equipment selection and integration",
      "Piping and instrumentation coordination",
      "Structural and layout engineering",
      "Testing and project documentation planning",
    ],
    products: [
      {
        name: "Chemical Dosing Skids",
        category: "Packaged Process Systems",
        description:
          "Integrated packages for controlled chemical storage, metering and injection.",
      },
      {
        name: "Heat Exchanger Skids",
        category: "Thermal Packages",
        description:
          "Packaged thermal systems combining heat exchangers and associated process connections.",
      },
      {
        name: "Process Pump Skids",
        category: "Packaged Equipment",
        description:
          "Integrated pumping packages configured around flow and pressure requirements.",
      },
    ],
    applications: [
      "Chemical and petrochemical plants",
      "Oil and gas facilities",
      "Industrial utility systems",
      "Process plant expansion projects",
    ],
    specifications: [
      { name: "Package scope", value: "Defined by project requirements" },
      { name: "Equipment configuration", value: "Selected according to process duty" },
      { name: "Piping arrangement", value: "Developed from process and layout requirements" },
      { name: "Instrumentation", value: "Defined by control philosophy" },
      { name: "Installation interface", value: "Site-specific" },
    ],
    processSteps: [
      {
        title: "Process Requirement Definition",
        description:
          "Establish the package duty, process conditions and required equipment interfaces.",
        output: "Package design basis",
      },
      {
        title: "Equipment Integration",
        description:
          "Select and arrange the equipment required to perform the intended process function.",
        output: "Integrated equipment arrangement",
      },
      {
        title: "Piping and Instrumentation",
        description:
          "Coordinate interconnecting piping, valves, instrumentation and control interfaces.",
        output: "Coordinated package system",
      },
      {
        title: "Testing and Installation",
        description:
          "Complete the agreed verification activities and prepare the package for site integration.",
        output: "Packaged process system",
      },
    ],
  },
];

// ---------------------------------------------
// SECTION GENERATOR
// ---------------------------------------------

function createEquipmentSections(
  item: EquipmentDefinition
): ServiceSection[] {
  return [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: `${item.name} for Industrial Applications`,
      description: item.overview,
      kpis: [
        { value: "01", label: "Process Engineering" },
        { value: "02", label: "Equipment Design" },
        { value: "03", label: "System Integration" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: `${item.name} Engineering Capabilities`,
      intro:
        "Explore the engineering activities and technical considerations associated with this equipment.",
      items: item.capabilities.map((capability) => ({
        title: capability,
        description: `${capability} based on the process design basis, equipment requirements and intended operating conditions.`,
      })),
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: `${item.name} Equipment Range`,
      intro:
        "Representative equipment configurations and associated components. Final selection depends on application requirements.",
      items: item.products.map((product, index) => ({
        id: `${item.slug}-product-${index + 1}`,
        name: product.name,
        category: product.category,
        description: product.description,
        image: {
          src: EQUIPMENT_IMAGE,
          alt: `${product.name} industrial equipment`,
        },
        specs: [
          "Configuration based on process requirements",
          "Operating conditions established during engineering",
          "Materials selected according to application",
        ],
      })),
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: `${item.name} Engineering Services`,
      intro:
        "Representative engineering and project support activities.",
      items: [
        {
          title: "Process Assessment",
          description:
            `Review the process duty, operating conditions and requirements for ${item.name.toLowerCase()}.`,
        },
        {
          title: "Equipment Engineering",
          description:
            "Develop equipment configuration and coordinate process, mechanical and material requirements.",
        },
        {
          title: "System Integration",
          description:
            "Coordinate equipment interfaces, utilities, piping, instrumentation and plant integration.",
        },
        {
          title: "Performance Assessment",
          description:
            "Evaluate equipment operation against the approved process design basis and operating requirements.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: `${item.name} Applications`,
      intro:
        "Potential industrial application areas. Actual suitability depends on process conditions and project requirements.",
      items: item.applications.map((application) => ({
        title: application,
        description:
          `${item.name} may be considered for suitable ${application.toLowerCase()} applications following process and engineering evaluation.`,
      })),
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: `${item.name} Technical Parameters`,
      intro:
        "Important parameters considered during equipment selection and engineering.",
      items: item.specifications,
      note:
        "These are representative design parameters, not verified product ratings. Final values must be established through approved engineering calculations and project specifications.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: `How ${item.name} Works`,
      intro:
        "A simplified representation of the equipment operation. Actual process arrangements vary according to application and design.",
      steps: item.processSteps,
      note:
        "This process sequence is illustrative. Refer to the project-specific process flow diagram for actual stream routing and equipment configuration.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: `${item.name} Lifecycle Support`,
      intro:
        "Representative activities for equipment operation, maintenance and lifecycle assessment.",
      items: [
        {
          title: "Equipment Performance Review",
          description:
            "Evaluate equipment operation against approved process requirements and available operating data.",
        },
        {
          title: "Inspection and Maintenance Planning",
          description:
            "Identify inspection and maintenance requirements based on equipment design and operating conditions.",
        },
        {
          title: "Troubleshooting and Technical Assessment",
          description:
            "Investigate operating constraints and evaluate possible corrective or modification requirements.",
        },
      ],
    },

    {
      id: "performance-sustainability",
      label: "Performance & Sustainability",
      type: "performance-sustainability",
      heading: `${item.name} Performance Indicators`,
      intro:
        "Performance indicators that may be monitored using measured operating data and an agreed evaluation basis.",
      metrics: [
        {
          title: "Operational Performance",
          description:
            "Evaluate equipment operation against the defined process duty and operating requirements.",
          category: "Operations",
        },
        {
          title: "Energy and Utility Demand",
          description:
            "Monitor energy and utility consumption relative to the equipment's intended process function.",
          category: "Energy",
        },
        {
          title: "Equipment Availability",
          description:
            "Review equipment downtime, maintenance history and operational reliability.",
          category: "Reliability",
        },
      ],
      note:
        "No numerical performance improvement or energy-saving claim is implied. Quantitative indicators require validated operating data.",
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: `${item.name} Quality and Compliance`,
      intro:
        "Applicable codes, standards and inspection requirements depend on equipment classification, service conditions and project jurisdiction.",
      items: [
        {
          title: "Equipment Design Requirements",
          description:
            "Identify applicable design codes and engineering requirements for the equipment and intended application.",
          reference: "To be confirmed per project",
        },
        {
          title: "Materials and Inspection",
          description:
            "Establish material specifications, inspection and testing requirements through the approved quality plan.",
          reference: "Project-specific",
        },
        {
          title: "Process and Operational Safety",
          description:
            "Consider relevant process hazards, operating limits and equipment protection requirements.",
          reference: "Project-specific",
        },
      ],
      note:
        "No company certification or specific code compliance is claimed by this mock content. Confirm applicable requirements before publication.",
    },

    {
      id: "downloads-resources",
      label: "Downloads & Technical Resources",
      type: "downloads-resources",
      heading: `${item.name} Technical Resources`,
      intro:
        "Technical brochures, equipment datasheets and approved documentation can be made available here.",
      items: [],
      note:
        "Technical documents will be added once approved public-facing resources are available.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: `${item.name} FAQs`,
      intro:
        `Frequently asked questions about ${item.name.toLowerCase()} and its industrial applications.`,
      items: [
        {
          question: `What factors determine the selection of ${item.name.toLowerCase()}?`,
          answer:
            "Selection depends on process duty, fluid properties, operating conditions, required performance, material compatibility and project-specific design requirements.",
        },
        {
          question: "Can the equipment be customized for a specific application?",
          answer:
            "Equipment configuration can be evaluated against the application requirements, process design basis, operating conditions and applicable engineering constraints.",
        },
        {
          question: "What information is required for preliminary equipment selection?",
          answer:
            "Typical inputs include process flow rate, fluid composition, operating pressure and temperature, required duty, available utilities and material compatibility requirements.",
        },
      ],
    },
  ];
}

// ---------------------------------------------
// EXPORT EQUIPMENT SOLUTIONS
// ---------------------------------------------

export const equipmentSolutions: EquipmentSolution[] =
  equipmentData.map((item) => ({
    slug: item.slug,
    groupSlug: "process-equipment",

    hero: {
      name: item.name,
      tagline: item.tagline,
      description: item.description,
      image: EQUIPMENT_IMAGE,
      imageAlt: `${item.name} - industrial process equipment`,
      ctaLabel: "Discuss a project",
      ctaHref: "#enquiry",
    },

    sections: createEquipmentSections(item),
  }));

export default equipmentSolutions;
