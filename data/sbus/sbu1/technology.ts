
import type {
  ServiceHeroContent,
  ServiceSection,
} from "@/components/solutions/types";

// ---------------------------------------------
// TYPES
// ---------------------------------------------

export interface TechnologySolution {
  slug: string;
  groupSlug: string;
  hero: ServiceHeroContent;
  sections: ServiceSection[];
}

type TechnologyDefinition = {
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

const TECHNOLOGY_IMAGE = "/images/solutions/process-technology.jpg";

// ---------------------------------------------
// TECHNOLOGY DATA
// ---------------------------------------------

const technologyData: TechnologyDefinition[] = [
  // 01. DISTILLATION TECHNOLOGY
  {
    slug: "distillation-technology",
    name: "Distillation Technology",
    tagline: "Advanced separation processes for industrial applications.",
    description:
      "Process engineering and separation technologies designed to recover, purify and separate components from complex liquid mixtures through controlled vapour-liquid contact.",
    overview:
      "Distillation technology is widely used in chemical and petrochemical industries for separating liquid mixtures based on differences in component volatility. Process design involves evaluating feed characteristics, separation requirements, thermodynamic properties, column configuration, operating pressure and energy consumption.",
    capabilities: [
      "Process simulation and thermodynamic evaluation",
      "Distillation process design and configuration",
      "Column and internals selection",
      "Reflux and reboiler duty optimization studies",
      "Process integration and heat recovery assessment",
      "Revamping and debottlenecking studies",
    ],
    products: [
      {
        name: "Conventional Distillation",
        category: "Separation Technology",
        description:
          "Established vapour-liquid separation processes for recovering and purifying components from liquid mixtures.",
      },
      {
        name: "Vacuum Distillation",
        category: "Specialized Separation",
        description:
          "Reduced-pressure distillation processes for suitable materials requiring lower operating temperatures.",
      },
      {
        name: "Azeotropic and Extractive Distillation",
        category: "Advanced Separation",
        description:
          "Specialized separation approaches for mixtures that are difficult to separate through conventional distillation.",
      },
    ],
    applications: [
      "Chemical and petrochemical processing",
      "Solvent recovery and purification",
      "Specialty chemical manufacturing",
      "Industrial liquid separation",
    ],
    specifications: [
      { name: "Feed composition", value: "Defined through process stream analysis" },
      { name: "Separation requirements", value: "Purity and recovery targets" },
      { name: "Operating pressure", value: "Atmospheric, vacuum or pressurized" },
      { name: "Column configuration", value: "Tray or packed arrangement" },
      { name: "Thermal requirements", value: "Established through energy balance" },
    ],
    processSteps: [
      {
        title: "Feed Characterization",
        description:
          "Evaluate feed composition, physical properties, component volatility and required separation targets.",
        output: "Defined process feed basis",
      },
      {
        title: "Separation Design",
        description:
          "Develop the separation configuration, column arrangement and operating conditions.",
        output: "Process separation design",
      },
      {
        title: "Vapour-Liquid Separation",
        description:
          "Establish controlled contact between vapour and liquid phases to achieve the required component separation.",
        output: "Separated process fractions",
      },
      {
        title: "Product Recovery",
        description:
          "Recover overhead and bottom products according to the required product specifications.",
        output: "Purified product streams",
      },
    ],
  },

  // 02. HEAT TRANSFER TECHNOLOGY
  {
    slug: "heat-transfer-technology",
    name: "Heat Transfer Technology",
    tagline: "Intelligent thermal engineering for industrial processes.",
    description:
      "Thermal engineering solutions designed to transfer, recover and manage heat across industrial processes while supporting process efficiency and utility optimization.",
    overview:
      "Heat transfer technology plays a fundamental role in industrial operations involving heating, cooling, condensation and evaporation. Effective thermal system design requires understanding process conditions, fluid properties, heat transfer mechanisms, temperature differences and energy requirements.",
    capabilities: [
      "Thermal process simulation and heat balance",
      "Heat exchanger selection and configuration",
      "Thermal and hydraulic design assessment",
      "Heat recovery and energy integration",
      "Cooling and heating system engineering",
      "Thermal system optimization studies",
    ],
    products: [
      {
        name: "Shell and Tube Heat Transfer Systems",
        category: "Thermal Technology",
        description:
          "Heat transfer arrangements using separate fluid passages to exchange thermal energy between process streams.",
      },
      {
        name: "Plate Heat Transfer Systems",
        category: "Thermal Technology",
        description:
          "Compact heat transfer arrangements using plate surfaces for suitable industrial heating and cooling applications.",
      },
      {
        name: "Waste Heat Recovery Systems",
        category: "Energy Recovery",
        description:
          "Process integration solutions designed to recover usable thermal energy from suitable waste heat streams.",
      },
    ],
    applications: [
      "Chemical and petrochemical plants",
      "Industrial utility systems",
      "Process heating and cooling",
      "Energy recovery and integration",
    ],
    specifications: [
      { name: "Heat duty", value: "Determined through process heat balance" },
      { name: "Temperature range", value: "Defined by process requirements" },
      { name: "Heat transfer coefficient", value: "Calculated from fluid and equipment conditions" },
      { name: "Pressure drop", value: "Evaluated through hydraulic design" },
      { name: "Thermal medium", value: "Steam, water, thermal oil or process fluids" },
    ],
    processSteps: [
      {
        title: "Thermal Requirement Assessment",
        description:
          "Identify heating, cooling or heat recovery requirements across the process.",
        output: "Defined thermal duty",
      },
      {
        title: "Heat Transfer Configuration",
        description:
          "Select a suitable heat transfer arrangement based on process and equipment requirements.",
        output: "Thermal system configuration",
      },
      {
        title: "Energy Exchange",
        description:
          "Transfer thermal energy between process streams through the selected heat transfer surfaces.",
        output: "Thermally conditioned streams",
      },
      {
        title: "Process Integration",
        description:
          "Integrate the thermal system with plant utilities and connected process operations.",
        output: "Integrated thermal process",
      },
    ],
  },

  // 03. EVAPORATION TECHNOLOGY
  {
    slug: "evaporation-technology",
    name: "Evaporation Technology",
    tagline: "Efficient concentration and recovery through thermal processing.",
    description:
      "Industrial evaporation technologies designed to concentrate process liquids, recover valuable components and manage liquid streams through controlled vaporization.",
    overview:
      "Evaporation technology removes a portion of the solvent from a liquid mixture to increase the concentration of the remaining product. Technology selection depends on product sensitivity, viscosity, fouling tendency, evaporation capacity, available utilities and energy requirements.",
    capabilities: [
      "Evaporation process assessment",
      "Single-effect and multiple-effect system design",
      "Thermal and energy balance calculations",
      "Vacuum evaporation technology",
      "Vapour recompression assessment",
      "Concentrate and condensate recovery",
    ],
    products: [
      {
        name: "Multiple Effect Evaporation",
        category: "Evaporation Technology",
        description:
          "Evaporation configurations using multiple effects to reuse generated vapour as a heating medium where appropriate.",
      },
      {
        name: "Vacuum Evaporation",
        category: "Thermal Processing",
        description:
          "Reduced-pressure evaporation processes for suitable temperature-sensitive materials and process streams.",
      },
      {
        name: "Mechanical Vapour Recompression",
        category: "Energy Optimization",
        description:
          "Vapour recompression approaches that reuse generated vapour energy within suitable evaporation systems.",
      },
    ],
    applications: [
      "Chemical concentration",
      "Industrial wastewater concentration",
      "Food and ingredient processing",
      "Solvent and liquid recovery",
    ],
    specifications: [
      { name: "Feed concentration", value: "Established through feed analysis" },
      { name: "Final concentration", value: "Defined by product requirements" },
      { name: "Evaporation capacity", value: "Determined through material balance" },
      { name: "Heating medium", value: "Selected according to thermal duty" },
      { name: "Operating pressure", value: "Atmospheric or reduced pressure" },
    ],
    processSteps: [
      {
        title: "Feed Preparation",
        description:
          "Characterize and condition the incoming liquid stream according to the evaporation requirements.",
        output: "Prepared liquid feed",
      },
      {
        title: "Thermal Energy Supply",
        description:
          "Introduce thermal energy through the selected heating arrangement.",
        output: "Heated process liquid",
      },
      {
        title: "Controlled Vaporization",
        description:
          "Vaporize a portion of the liquid to increase the concentration of the remaining solution.",
        output: "Vapour and concentrated liquid",
      },
      {
        title: "Product and Vapour Recovery",
        description:
          "Separate the concentrated product and generated vapour for downstream handling or recovery.",
        output: "Concentrate and recovered vapour",
      },
    ],
  },

  // 04. REACTION & MIXING TECHNOLOGY
  {
    slug: "reaction-and-mixing-technology",
    name: "Reaction & Mixing Technology",
    tagline: "Advanced process solutions for controlled reactions and mixing.",
    description:
      "Integrated process technologies for chemical reactions, mixing, blending and material transformation under controlled industrial operating conditions.",
    overview:
      "Reaction and mixing technology combines process chemistry, fluid dynamics, heat transfer and equipment engineering to achieve controlled industrial operations. System design considers reaction kinetics, residence time, mixing intensity, thermal requirements and product characteristics.",
    capabilities: [
      "Reaction kinetics and process evaluation",
      "Reactor configuration and process design",
      "Mixing and agitation assessment",
      "Heat and mass transfer evaluation",
      "Residence time and process optimization",
      "Batch and continuous process engineering",
    ],
    products: [
      {
        name: "Batch Reaction Technology",
        category: "Reaction Technology",
        description:
          "Controlled reaction processes designed around batch charging, mixing, thermal management and product discharge.",
      },
      {
        name: "Continuous Reaction Technology",
        category: "Reaction Technology",
        description:
          "Continuous process arrangements designed for controlled reactant flow and product formation.",
      },
      {
        name: "Industrial Mixing Technology",
        category: "Mixing Technology",
        description:
          "Process mixing approaches for blending, dispersion and homogenization of suitable materials.",
      },
    ],
    applications: [
      "Chemical manufacturing",
      "Specialty chemical processing",
      "Polymer and resin production",
      "Industrial blending and formulation",
    ],
    specifications: [
      { name: "Reaction kinetics", value: "Established from process chemistry" },
      { name: "Residence time", value: "Determined through process evaluation" },
      { name: "Mixing intensity", value: "Selected according to application" },
      { name: "Operating temperature", value: "Reaction-specific" },
      { name: "Heat management", value: "Based on reaction energy requirements" },
    ],
    processSteps: [
      {
        title: "Reactant Preparation",
        description:
          "Define feed materials, concentrations and process conditions required for the reaction.",
        output: "Prepared reactant streams",
      },
      {
        title: "Mixing and Contacting",
        description:
          "Bring reactants into controlled contact through the selected mixing configuration.",
        output: "Mixed reaction system",
      },
      {
        title: "Reaction and Thermal Management",
        description:
          "Maintain suitable operating conditions while the chemical transformation takes place.",
        output: "Reaction product mixture",
      },
      {
        title: "Product Processing",
        description:
          "Recover and route the resulting product for subsequent separation or finishing operations.",
        output: "Processed product stream",
      },
    ],
  },

  // 05. LIQUID-LIQUID EXTRACTION TECHNOLOGY
  {
    slug: "liquid-liquid-extraction-technology",
    name: "Liq-Liq Extraction Technology",
    tagline: "Selective separation through advanced liquid-liquid contacting.",
    description:
      "Liquid-liquid extraction technologies designed to separate selected components through controlled contact between immiscible or partially miscible liquid phases.",
    overview:
      "Liquid-liquid extraction is a separation process in which a component transfers from one liquid phase into another based on differences in solubility and distribution behaviour. Process development involves solvent selection, phase equilibrium evaluation, contacting, mixing, settling and solvent recovery.",
    capabilities: [
      "Solvent selection and process assessment",
      "Liquid-liquid equilibrium evaluation",
      "Extraction stage and configuration design",
      "Mixer-settler and column technology assessment",
      "Phase separation and solvent recovery",
      "Process simulation and optimization",
    ],
    products: [
      {
        name: "Mixer Settler Technology",
        category: "Extraction Technology",
        description:
          "Extraction arrangements combining liquid mixing and subsequent phase separation.",
      },
      {
        name: "Extraction Column Technology",
        category: "Extraction Technology",
        description:
          "Column-based contacting systems for continuous liquid-liquid mass transfer.",
      },
      {
        name: "Solvent Recovery Systems",
        category: "Solvent Processing",
        description:
          "Process systems designed to recover and recycle extraction solvents where suitable.",
      },
    ],
    applications: [
      "Hydrometallurgical processing",
      "Specialty chemical separation",
      "Pharmaceutical intermediates",
      "Solvent-based recovery processes",
    ],
    specifications: [
      { name: "Feed composition", value: "Established through process analysis" },
      { name: "Solvent selection", value: "Based on distribution and compatibility" },
      { name: "Phase ratio", value: "Determined through process design" },
      { name: "Extraction stages", value: "Established through equilibrium calculations" },
      { name: "Phase separation", value: "Based on settling and fluid properties" },
    ],
    processSteps: [
      {
        title: "Feed and Solvent Preparation",
        description:
          "Prepare the feed and selected solvent streams according to the extraction design.",
        output: "Prepared liquid phases",
      },
      {
        title: "Liquid-Liquid Contacting",
        description:
          "Bring the two liquid phases into contact to promote transfer of the target component.",
        output: "Contacted liquid mixture",
      },
      {
        title: "Phase Separation",
        description:
          "Allow the liquid phases to separate according to their physical properties.",
        output: "Extract and raffinate phases",
      },
      {
        title: "Solvent Recovery",
        description:
          "Recover or condition the solvent and route the separated products to subsequent processing.",
        output: "Recovered solvent and product streams",
      },
    ],
  },

  // 06. CHEMICAL PROCESS TECHNOLOGY
  {
    slug: "chemical-process-technology",
    name: "Chemical Process Technology",
    tagline: "Integrated process engineering from concept to operation.",
    description:
      "Comprehensive chemical process technologies covering process development, system configuration, equipment integration and industrial production requirements.",
    overview:
      "Chemical process technology brings together chemical engineering principles, thermodynamics, reaction engineering, separation processes and plant integration. The objective is to develop technically suitable process configurations that address production requirements, resource utilization, safety and operational constraints.",
    capabilities: [
      "Process concept development",
      "Process simulation and mass-energy balances",
      "Process flow diagram development",
      "Equipment selection and sizing assessment",
      "Process optimization and integration",
      "Process safety and operability review",
    ],
    products: [
      {
        name: "Process Design Packages",
        category: "Process Engineering",
        description:
          "Engineering documentation covering process design basis, material balances, energy balances and process configuration.",
      },
      {
        name: "Chemical Production Systems",
        category: "Process Systems",
        description:
          "Integrated process configurations for suitable chemical production operations.",
      },
      {
        name: "Process Integration Solutions",
        category: "Process Optimization",
        description:
          "Engineering approaches for coordinating equipment, utilities and connected production operations.",
      },
    ],
    applications: [
      "Chemical and petrochemical manufacturing",
      "Specialty chemical production",
      "Industrial material processing",
      "Process plant development and expansion",
    ],
    specifications: [
      { name: "Process design basis", value: "Established from project requirements" },
      { name: "Production capacity", value: "Defined by process objectives" },
      { name: "Material balance", value: "Developed from process stream data" },
      { name: "Energy balance", value: "Calculated from thermal requirements" },
      { name: "Equipment configuration", value: "Determined through engineering evaluation" },
    ],
    processSteps: [
      {
        title: "Process Requirement Definition",
        description:
          "Understand production targets, feed characteristics, product specifications and operating constraints.",
        output: "Process design basis",
      },
      {
        title: "Process Development",
        description:
          "Develop process configurations using engineering calculations and suitable simulation methods.",
        output: "Process configuration",
      },
      {
        title: "Equipment and System Integration",
        description:
          "Coordinate equipment, utilities, piping and process interfaces.",
        output: "Integrated process system",
      },
      {
        title: "Engineering Verification",
        description:
          "Review process balances, operating conditions, safety considerations and design requirements.",
        output: "Reviewed engineering package",
      },
    ],
  },

  // 07. OIL & GAS TECHNOLOGY
  {
    slug: "oil-and-gas-technology",
    name: "Oil & Gas Technology",
    tagline: "Process technologies for hydrocarbon handling and treatment.",
    description:
      "Industrial process engineering technologies for hydrocarbon separation, conditioning, treatment and recovery across suitable oil and gas applications.",
    overview:
      "Oil and gas process technology involves the treatment and handling of hydrocarbon streams through separation, conditioning, heat transfer and fluid processing. System configuration depends on feed composition, operating pressure, temperature, phase behaviour, throughput and product specifications.",
    capabilities: [
      "Hydrocarbon process assessment",
      "Gas and liquid separation studies",
      "Process conditioning and treatment",
      "Heat and mass balance development",
      "Equipment and utility integration",
      "Process safety and operating review",
    ],
    products: [
      {
        name: "Gas Processing Technology",
        category: "Gas Treatment",
        description:
          "Process arrangements for conditioning and treating suitable natural gas and industrial gas streams.",
      },
      {
        name: "Hydrocarbon Separation Technology",
        category: "Separation Technology",
        description:
          "Separation processes for handling hydrocarbon mixtures and associated process streams.",
      },
      {
        name: "Oil and Gas Conditioning Systems",
        category: "Process Systems",
        description:
          "Integrated process configurations for conditioning and handling hydrocarbon streams.",
      },
    ],
    applications: [
      "Oil and gas processing facilities",
      "Petrochemical operations",
      "Gas conditioning and treatment",
      "Hydrocarbon recovery systems",
    ],
    specifications: [
      { name: "Feed composition", value: "Established through hydrocarbon analysis" },
      { name: "Operating pressure", value: "Defined by process requirements" },
      { name: "Operating temperature", value: "Process-specific" },
      { name: "Phase behaviour", value: "Evaluated through thermodynamic analysis" },
      { name: "Product specification", value: "Defined by downstream requirements" },
    ],
    processSteps: [
      {
        title: "Feed Characterization",
        description:
          "Evaluate hydrocarbon composition, fluid properties and incoming process conditions.",
        output: "Characterized hydrocarbon feed",
      },
      {
        title: "Process Conditioning",
        description:
          "Apply suitable conditioning operations to prepare the feed for downstream processing.",
        output: "Conditioned process stream",
      },
      {
        title: "Separation and Treatment",
        description:
          "Use appropriate separation and treatment technologies to achieve the intended process objectives.",
        output: "Separated and treated streams",
      },
      {
        title: "Product Recovery",
        description:
          "Recover and route the processed hydrocarbon streams according to product requirements.",
        output: "Recovered product streams",
      },
    ],
  },

  // 08. ENVIRONMENTAL TECHNOLOGY
  {
    slug: "environmental-technology",
    name: "Environmental Technology",
    tagline: "Process solutions supporting responsible industrial operations.",
    description:
      "Environmental process technologies for industrial wastewater management, resource recovery, emission treatment and responsible handling of process residuals.",
    overview:
      "Environmental technology supports industrial facilities in managing wastewater, process emissions and residual streams. Technology selection depends on contaminant characteristics, treatment objectives, regulatory requirements, available utilities and opportunities for resource recovery.",
    capabilities: [
      "Environmental process assessment",
      "Industrial wastewater treatment evaluation",
      "Gas and emission treatment assessment",
      "Resource and water recovery studies",
      "Residual and concentrate management",
      "Process integration and monitoring",
    ],
    products: [
      {
        name: "Industrial Wastewater Treatment",
        category: "Environmental Systems",
        description:
          "Treatment process arrangements designed around wastewater characteristics and required discharge or reuse objectives.",
      },
      {
        name: "Emission Treatment Systems",
        category: "Gas Treatment",
        description:
          "Process equipment and treatment configurations for suitable industrial exhaust streams.",
      },
      {
        name: "Water Recovery and Reuse Systems",
        category: "Resource Recovery",
        description:
          "Integrated treatment approaches for recovering water from suitable industrial process streams.",
      },
    ],
    applications: [
      "Chemical and petrochemical facilities",
      "Industrial wastewater management",
      "Manufacturing process utilities",
      "Industrial emission treatment",
    ],
    specifications: [
      { name: "Feed characteristics", value: "Established through wastewater or gas analysis" },
      { name: "Treatment capacity", value: "Defined by process flow requirements" },
      { name: "Treatment objectives", value: "Based on applicable requirements" },
      { name: "Residual management", value: "Defined through process evaluation" },
      { name: "Monitoring requirements", value: "Established by project and regulatory needs" },
    ],
    processSteps: [
      {
        title: "Stream Characterization",
        description:
          "Analyze the incoming wastewater, exhaust or residual stream to identify treatment requirements.",
        output: "Characterized environmental stream",
      },
      {
        title: "Treatment Technology Selection",
        description:
          "Evaluate suitable physical, chemical or biological treatment approaches where applicable.",
        output: "Selected treatment configuration",
      },
      {
        title: "Treatment and Separation",
        description:
          "Apply the selected treatment processes to remove, transform or separate targeted contaminants.",
        output: "Treated stream and residuals",
      },
      {
        title: "Recovery and Final Handling",
        description:
          "Evaluate opportunities for reuse and establish suitable handling of treated streams and residuals.",
        output: "Recovered resources and managed residuals",
      },
    ],
  },

  // 09. MICRO REACTOR - CONTINUOUS FLOW SYNTHESIS
  {
    slug: "micro-reactor-continuous-flow-synthesis",
    name: "Micro Reactor - Continuous Flow Synthesis Technology",
    tagline: "Precision process technology for continuous chemical synthesis.",
    description:
      "Continuous flow synthesis technology using compact reactor channels and controlled process conditions to support chemical reactions with defined residence time and heat transfer characteristics.",
    overview:
      "Microreactor and continuous flow technologies use small-volume reaction channels to process chemical reactions under controlled flow conditions. These systems offer opportunities for improved heat transfer, controlled mixing and consistent reaction environments. Application suitability depends on reaction kinetics, fluid properties, channel design and process scale-up requirements.",
    capabilities: [
      "Continuous flow process development",
      "Microreactor configuration assessment",
      "Reaction kinetics and residence time evaluation",
      "Heat and mass transfer analysis",
      "Process parameter optimization",
      "Scale-out and process integration assessment",
    ],
    products: [
      {
        name: "Microchannel Reactors",
        category: "Continuous Flow Equipment",
        description:
          "Compact reactor systems using small internal channels for controlled continuous chemical processing.",
      },
      {
        name: "Continuous Flow Reactor Modules",
        category: "Reaction Technology",
        description:
          "Modular reactor arrangements designed for continuous feed, reaction and product discharge.",
      },
      {
        name: "Flow Control and Dosing Systems",
        category: "Process Control",
        description:
          "Associated equipment for controlled feed delivery and flow management in continuous synthesis systems.",
      },
    ],
    applications: [
      "Specialty chemical synthesis",
      "Fine chemical manufacturing",
      "Pharmaceutical intermediates",
      "Research and process development",
    ],
    specifications: [
      { name: "Reactor channel dimensions", value: "Defined by reactor configuration" },
      { name: "Flow rate", value: "Established through process design" },
      { name: "Residence time", value: "Calculated from reactor volume and flow rate" },
      { name: "Operating temperature", value: "Reaction-specific" },
      { name: "Operating pressure", value: "Defined by reaction and equipment requirements" },
    ],
    processSteps: [
      {
        title: "Reactant Feed Preparation",
        description:
          "Prepare reactant streams and establish suitable feed concentrations and flow conditions.",
        output: "Prepared reactant streams",
      },
      {
        title: "Controlled Flow Introduction",
        description:
          "Introduce the reactants into the microreactor through controlled feed and dosing systems.",
        output: "Controlled continuous feed",
      },
      {
        title: "Continuous Reaction",
        description:
          "The reactants move through the reactor channels while undergoing the intended chemical transformation.",
        output: "Continuous reaction mixture",
      },
      {
        title: "Product Collection",
        description:
          "Collect the reactor outlet stream for downstream separation, purification or analysis.",
        output: "Continuous product stream",
      },
    ],
  },
];

// ---------------------------------------------
// SECTION GENERATOR
// ---------------------------------------------

function createTechnologySections(
  item: TechnologyDefinition
): ServiceSection[] {
  return [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: `${item.name} for Industrial Applications`,
      description: item.overview,
      kpis: [
        { value: "01", label: "Process Development" },
        { value: "02", label: "Technology Design" },
        { value: "03", label: "Process Integration" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: `${item.name} Engineering Capabilities`,
      intro:
        "Explore the process engineering and technical capabilities associated with this technology.",
      items: item.capabilities.map((capability) => ({
        title: capability,
        description:
          `${capability} based on process requirements, engineering calculations and the intended industrial application.`,
      })),
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: `${item.name} Technology Solutions`,
      intro:
        "Representative technologies, process configurations and associated equipment.",
      items: item.products.map((product, index) => ({
        id: `${item.slug}-product-${index + 1}`,
        name: product.name,
        category: product.category,
        description: product.description,
        image: {
          src: TECHNOLOGY_IMAGE,
          alt: `${product.name} industrial technology`,
        },
        specs: [
          "Configuration based on process requirements",
          "Operating parameters established through engineering",
          "System integration defined by project scope",
        ],
      })),
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: `${item.name} Engineering Services`,
      intro:
        "Representative process development, engineering and technical support activities.",
      items: [
        {
          title: "Process Feasibility Assessment",
          description:
            `Evaluate the suitability of ${item.name.toLowerCase()} for the intended process duty and operating conditions.`,
        },
        {
          title: "Technology Selection",
          description:
            "Compare suitable technology configurations against process requirements, performance objectives and operational constraints.",
        },
        {
          title: "Process Engineering",
          description:
            "Develop process calculations, operating parameters and equipment integration requirements.",
        },
        {
          title: "Process Optimization",
          description:
            "Evaluate opportunities to improve process operation using validated engineering analysis and operating data.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: `${item.name} Applications`,
      intro:
        "Potential industrial application areas. Actual suitability depends on the process design basis.",
      items: item.applications.map((application) => ({
        title: application,
        description:
          `${item.name} can be evaluated for suitable ${application.toLowerCase()} applications based on process requirements and technical feasibility.`,
      })),
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: `${item.name} Technical Parameters`,
      intro:
        "Key process and engineering parameters considered during technology evaluation and system design.",
      items: item.specifications,
      note:
        "These are representative design parameters, not verified performance ratings. Final values require process calculations and approved project specifications.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: `How ${item.name} Works`,
      intro:
        "A simplified representation of the technology workflow. Actual configurations depend on process requirements.",
      steps: item.processSteps,
      note:
        "This is an illustrative process sequence. Actual process flow diagrams should be developed from the approved engineering design.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: `${item.name} Lifecycle Support`,
      intro:
        "Representative activities for evaluating, operating and improving industrial technology systems.",
      items: [
        {
          title: "Process Performance Monitoring",
          description:
            "Review operating parameters and process output against the established design basis.",
        },
        {
          title: "Technology Assessment",
          description:
            "Evaluate process conditions and technology configuration when production requirements change.",
        },
        {
          title: "Operational Troubleshooting",
          description:
            "Investigate process deviations and identify technically suitable corrective measures.",
        },
        {
          title: "Process Improvement Studies",
          description:
            "Assess opportunities for improving resource utilization, process reliability and operational performance.",
        },
      ],
    },

    {
      id: "performance-sustainability",
      label: "Performance & Sustainability",
      type: "performance-sustainability",
      heading: `${item.name} Performance Indicators`,
      intro:
        "Representative indicators that can be used to evaluate technology performance using measured process data.",
      metrics: [
        {
          title: "Process Efficiency",
          description:
            "Evaluate process output against the defined feed, operating and production basis.",
          category: "Process",
        },
        {
          title: "Energy and Utility Consumption",
          description:
            "Monitor energy and utility requirements relative to the process throughput or output.",
          category: "Energy",
        },
        {
          title: "Operational Reliability",
          description:
            "Review process availability, operating stability and maintenance requirements.",
          category: "Operations",
        },
      ],
      note:
        "Performance improvements and sustainability benefits must be established through validated process data and a defined comparison basis.",
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: `${item.name} Quality and Compliance`,
      intro:
        "Applicable requirements depend on the technology, equipment classification, process application and project jurisdiction.",
      items: [
        {
          title: "Process Design Requirements",
          description:
            "Identify relevant engineering design requirements for the selected process technology.",
          reference: "To be confirmed per project",
        },
        {
          title: "Equipment and Materials",
          description:
            "Define applicable material compatibility, equipment design and inspection requirements.",
          reference: "Project-specific",
        },
        {
          title: "Process Safety and Operational Requirements",
          description:
            "Review relevant process hazards, operating limits and system protection requirements.",
          reference: "Project-specific",
        },
      ],
      note:
        "No company certification or specific compliance claim is made. Confirm applicable standards and regulatory requirements for each project.",
    },

    {
      id: "downloads-resources",
      label: "Downloads & Technical Resources",
      type: "downloads-resources",
      heading: `${item.name} Technical Resources`,
      intro:
        "Technical brochures, process notes, engineering documents and approved technology resources can be listed here.",
      items: [],
      note:
        "Technical resources will be added when approved public-facing documents become available.",
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
          question: `What is ${item.name.toLowerCase()} used for?`,
          answer:
            `${item.name} is evaluated for industrial applications based on its process function, operating requirements and intended production objectives.`,
        },
        {
          question: "How is the appropriate technology selected?",
          answer:
            "Technology selection depends on process requirements, feed characteristics, operating conditions, performance targets, utility availability and project constraints.",
        },
        {
          question: "Can the technology be integrated into an existing plant?",
          answer:
            "Integration can be evaluated by reviewing existing equipment, process interfaces, utilities, available space, control systems and operating requirements.",
        },
      ],
    },
  ];
}

// ---------------------------------------------
// EXPORT TECHNOLOGY SOLUTIONS
// ---------------------------------------------

export const technologySolutions: TechnologySolution[] =
  technologyData.map((item) => ({
    slug: item.slug,
    groupSlug: "process-technology",

    hero: {
      name: item.name,
      tagline: item.tagline,
      description: item.description,
      image: TECHNOLOGY_IMAGE,
      imageAlt: `${item.name} - industrial process technology`,
      ctaLabel: "Discuss a project",
      ctaHref: "#enquiry",
    },

    sections: createTechnologySections(item),
  }));

export default technologySolutions;
