import type {
  ServiceHeroContent,
  ServiceSection,
} from "@/components/solutions/types";

interface SBUChild {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  hero: ServiceHeroContent;
  sections: ServiceSection[];
}

interface SBU {
  name: string;
  offerings: string;
  children: SBUChild[];
}

const gasSeparation: SBUChild = {
  slug: "gas-separation",
  name: "Gas Separation",
  tagline: "Membranes & Advanced Separation",
  description:
    "Explore membrane-based gas separation concepts for industrial streams, with technology selection guided by gas composition, operating conditions and target product specifications.",
  hero: {
    name: 'Gas Separation',
    tagline: 'Membranes & Advanced Separation',
    description:
      'Membrane-based gas separation solutions are evaluated around the composition of the feed, required product quality and the operating conditions of the process.',
    ctaLabel: "Discuss an Application",
    ctaHref: "/contact",
  },
  sections: [
    {
      type: "overview",
      id: "overview",
      label: "Overview",
      heading: "A process-led approach to gas separation",
      description:
        "Membrane separation can be considered when components in a gas mixture permeate through a selective membrane at different rates. Feasibility depends on the gas pair, feed composition, pressure, temperature, contaminants and the required separation duty.",
      kpis: [
        {
          label: "Understand the feed",
          value:
            "Establish gas composition, variability, pressure, temperature, flow rate and the presence of moisture, aerosols or other contaminants.",
        },
        {
          label: "Define the separation objective",
          value:
            "Clarify the target component, required product purity, recovery expectations and acceptable operating constraints.",
        },
        {
          label: "Evaluate the complete process",
          value:
            "Consider membrane stages alongside pretreatment, compression, recycle, permeate handling and downstream equipment.",
        },
      ],
    },
    {
      type: "capabilities",
      id: "capabilities",
      label: "Capabilities",
      heading: "From feed assessment to system integration",
      intro:
        "The work scope should be defined against the process case and validated through suitable technical data and application testing.",
      items: [
        {
          title: "Gas-stream characterisation",
          description:
            "Review composition, flow envelope, pressure and temperature ranges, contaminants and expected operating variability.",
        },
        {
          title: "Technology screening",
          description:
            "Compare membrane separation with relevant alternative methods against product specifications, energy use, complexity and lifecycle considerations.",
        },
        {
          title: "Membrane configuration review",
          description:
            "Assess candidate membrane types, stage arrangements, pressure ratios and the potential need for recycle or multiple stages.",
        },
        {
          title: "Pretreatment and conditioning",
          description:
            "Identify conditioning requirements that may be needed to protect membrane materials and maintain stable operation.",
        },
        {
          title: "Package and plant interfaces",
          description:
            "Coordinate feed supply, utilities, controls, product outlets, permeate handling and tie-ins with the surrounding process.",
        },
      ],
    },
    {
      type: "products",
      id: "products",
      label: "Equipment & Systems",
      heading: "Representative gas separation equipment",
      intro:
        "The equipment list below describes common system elements for evaluation. Final selection depends on the gas mixture and project requirements.",
      items: [
        {
          id: "membrane-separation-modules",
          name: "Membrane Separation Modules",
          category: "Membrane Equipment",
          image: { src: "/images/services/membranes-advanced-separation/membrane-separation-modules.jpg", alt: "Membrane Separation Modules" },
          description:
            "Membrane modules selected for a defined gas mixture and operating envelope, subject to compatibility and performance validation.",
        },
        {
          id: "gas-pretreatment-units",
          name: "Gas Pretreatment Units",
          category: "Gas Conditioning",
          image: { src: "/images/services/membranes-advanced-separation/gas-pretreatment-units.jpg", alt: "Gas Pretreatment Units" },
          description:
            "Conditioning concepts to manage relevant moisture, particulates, aerosols or other contaminants in the feed stream.",
        },
        {
          id: "feed-compression-and-pressure-control",
          name: "Feed Compression and Pressure Control",
          category: "Process Equipment",
          image: { src: "/images/services/membranes-advanced-separation/feed-compression-and-pressure-control.jpg", alt: "Feed Compression and Pressure Control" },
          description:
            "Compression, pressure regulation and associated equipment considered where required by the selected process configuration.",
        },
        {
          id: "permeate-and-product-handling",
          name: "Permeate and Product Handling",
          category: "Process Systems",
          image: { src: "/images/services/membranes-advanced-separation/permeate-and-product-handling.jpg", alt: "Permeate and Product Handling" },
          description:
            "Equipment concepts for routing, conditioning, recompressing or otherwise handling product and permeate streams.",
        },
        {
          id: "packaged-separation-systems",
          name: "Packaged Separation Systems",
          category: "Packaged Systems",
          image: { src: "/images/services/membranes-advanced-separation/packaged-separation-systems.jpg", alt: "Packaged Separation Systems" },
          description:
            "Potentially integrated packages combining membrane modules with selected conditioning, instrumentation and control interfaces.",
        },
      ],
    },
    {
      type: "services",
      id: "services",
      label: "Engineering Services",
      heading: "Application-specific engineering support",
      intro:
        "A practical scope begins with a clear process basis and progresses through screening, preliminary design and interface definition.",
      items: [
        {
          title: "Gas Stream Evaluation",
          description:
            "Review composition, pressure, flow, temperature, contaminants and target separation requirements.",
        },
        {
          title: "Technology Feasibility Screening",
          description:
            "Identify candidate separation approaches and the data needed to assess technical and economic suitability.",
        },
        {
          title: "Preliminary Process Design",
          description:
            "Develop a preliminary process arrangement, stream definitions and key equipment requirements for further engineering.",
        },
        {
          title: "Package Integration",
          description:
            "Coordinate pretreatment, membrane, utilities, control and downstream process interfaces.",
        },
        {
          title: "Performance Review",
          description:
            "Compare available test data or vendor guarantees with the agreed design basis and operating envelope.",
        },
      ],
    },
    {
      type: "industries",
      id: "industries",
      label: "Applications",
      heading: "Potential application areas",
      intro:
        "Suitability must be confirmed for the specific gas mixture, contaminants, operating conditions and product requirements.",
      items: [
        {
          title: "Industrial Gases",
          description:
            "Evaluation of membrane separation for selected industrial gas mixtures and recovery duties.",
        },
        {
          title: "Energy Processing",
          description:
            "Potential gas treatment or component-recovery applications within energy-related processes.",
        },
        {
          title: "Chemical Plants",
          description:
            "Gas conditioning and recovery opportunities associated with selected chemical operations.",
        },
        {
          title: "Environmental Process Streams",
          description:
            "Assessment of suitable gas streams where separation or recovery may support a defined process objective.",
        },
      ],
    },
    {
      type: "technical-specifications",
      id: "technical-specifications",
      label: "Design Basis",
      heading: "Parameters that shape membrane selection",
      intro:
        "No universal performance figures apply across all gas separation duties. The following inputs are typically needed before a design basis can be established.",
      items: [
        {
          name: "Feed composition",
          value: "Component concentrations, variability and trace contaminants",
        },
        {
          name: "Operating envelope",
          value: "Feed pressure, temperature, flow rate and turndown",
        },
        {
          name: "Product requirements",
          value: "Target purity, recovery, dew point or other specified quality limits",
        },
        {
          name: "Membrane compatibility",
          value: "Chemical compatibility and tolerance to contaminants under operating conditions",
        },
        {
          name: "Utilities and interfaces",
          value: "Power, cooling, instrument air, drainage and process tie-in requirements as applicable",
        },
        {
          name: "Performance validation",
          value: "Supplier data, pilot results or other evidence appropriate to the application",
        },
      ],
    },
    {
      type: "process-flow",
      id: "process-flow",
      label: "Process Flow",
      heading: "A typical evaluation sequence",
      intro:
        "The actual process arrangement depends on the selected membrane technology and the separation target.",
      steps: [
        {
          title: "Feed characterisation",
          description:
            "Collect representative composition, flow, pressure, temperature and contaminant data.",
        },
        {
          title: "Separation target definition",
          description:
            "Agree the required product quality, recovery objectives and operating constraints.",
        },
        {
          title: "Technology and membrane screening",
          description:
            "Evaluate candidate membrane materials and process configurations using relevant data.",
        },
        {
          title: "Preliminary process configuration",
          description:
            "Assess pretreatment, staging, compression, recycle and stream-handling requirements.",
        },
        {
          title: "Validation and integration",
          description:
            "Confirm assumptions through suitable testing or supplier data and define interfaces with the wider plant.",
        },
      ],
    },
    {
      type: "lifecycle-support",
      id: "lifecycle-support",
      label: "Lifecycle Support",
      heading: "Support across the project lifecycle",
      intro:
        "Support requirements should be agreed for the specific equipment, process duty and operating environment.",
      items: [
        {
          title: "Front-end assessment",
          description:
            "Define the process basis, assess available data and identify key technical uncertainties.",
        },
        {
          title: "Engineering coordination",
          description:
            "Coordinate process, mechanical, instrumentation, controls and plant-interface requirements.",
        },
        {
          title: "Commissioning preparation",
          description:
            "Prepare documentation and checks for installation, start-up and performance verification where included in the project scope.",
        },
        {
          title: "Operations and maintenance planning",
          description:
            "Identify monitoring needs, inspection considerations, consumables and potential membrane replacement requirements.",
        },
      ],
    },
    {
      type: "standards-certifications",
      id: "standards-certifications",
      label: "Compliance",
      heading: "Standards and project requirements",
      intro:
        "Applicable codes and certifications must be determined from the project location, process hazards, equipment scope and client specification. No specific certification is implied here.",
      items: [
        {
          title: "Project design codes",
          description:
            "Confirm the codes and engineering practices applicable to the process equipment and installation.",
        },
        {
          title: "Pressure equipment requirements",
          description:
            "Determine applicable pressure-system design, fabrication, inspection and documentation obligations.",
        },
        {
          title: "Hazardous-area requirements",
          description:
            "Assess area classification and equipment suitability where flammable or otherwise hazardous gases are present.",
        },
        {
          title: "Health, safety and environmental review",
          description:
            "Address process hazards, emissions, waste streams and operating safeguards as relevant to the application.",
        },
      ],
    },
    {
      type: "performance-sustainability",
      id: "performance-sustainability",
      label: "Performance",
      heading: "Evaluate performance across the whole process",
      intro:
        "Membrane performance should be assessed at the system level rather than by selectivity or permeance alone.",
      metrics: [
        {
          title: "Product quality and recovery",
          description:
            "Assess purity and recovery together, using a clearly defined feed composition and operating envelope.",
        },
        {
          title: "Energy demand",
          description:
            "Include compression, vacuum, cooling and auxiliary loads where applicable to the chosen configuration.",
        },
        {
          title: "Feed variability",
          description:
            "Review how changes in composition, pressure, flow or contaminants could affect stable operation.",
        },
        {
          title: "Lifecycle considerations",
          description:
            "Consider membrane service life, replacement frequency, maintenance requirements and the handling of spent components.",
        },
      ],
    },
    {
      type: "downloads-resources",
      id: "downloads-resources",
      label: "Resources",
      heading: "Technical resources",
      intro:
        "Project-specific datasheets, process documents and approved technical publications can be added here when available.",
      items: [],
    },
    {
      type: "faqs",
      id: "faqs",
      label: "FAQs",
      heading: "Gas separation questions",
      intro:
        "Common questions to consider when evaluating a membrane-based gas separation application.",
      items: [
        {
          question: "Which gas mixtures can membrane systems separate?",
          answer:
            "Applicability depends on the properties of the gas components, membrane selectivity, operating conditions and required product specifications. A specific feed assessment is needed.",
        },
        {
          question: "Is pretreatment always required?",
          answer:
            "Not always. Pretreatment depends on the feed composition and the membrane material's tolerance to moisture, aerosols, particulates and other contaminants.",
        },
        {
          question: "Can a membrane system achieve a specific purity?",
          answer:
            "That cannot be determined without the gas composition, pressure, flow, membrane data and process configuration. Performance should be validated for the intended duty.",
        },
        {
          question: "What information is needed for an initial review?",
          answer:
            "Useful inputs include gas composition, flow range, pressure, temperature, contaminants, target product purity, recovery objectives and site constraints.",
        },
      ],
    },
  ],
};

const pervaporation: SBUChild = {
  slug: "pervaporation",
  name: "Pervaporation",
  tagline: "Membranes & Advanced Separation",
  description:
    "Explore pervaporation concepts for suitable liquid-mixture separations, with membrane selection and system design based on feed chemistry, target components and operating conditions.",
  hero: {
    name: 'Pervaporation',
    tagline: 'Membranes & Advanced Separation',
    description:
      'Pervaporation uses a selective membrane and a vapour-pressure driving force to separate components from suitable liquid mixtures. Application feasibility depends on mixture properties and validated membrane performance.',
    ctaLabel: "Discuss an Application",
    ctaHref: "/contact",
  },
  sections: [
    {
      type: "overview",
      id: "overview",
      label: "Overview",
      heading: "Selective separation for suitable liquid mixtures",
      description:
        "In pervaporation, components selectively permeate through a membrane and are removed as vapour from the permeate side. It may be evaluated for mixtures where conventional separation is difficult or where an integrated process offers a potential advantage.",
      kpis: [
        {
          label: "Characterise the mixture",
          value:
            "Establish component concentrations, temperature, pressure, flow, phase behaviour and the presence of impurities.",
        },
        {
          label: "Define the separation objective",
          value:
            "Specify the target component, required product composition, recovery goal and acceptable operating limits.",
        },
        {
          label: "Assess the integrated process",
          value:
            "Evaluate feed conditioning, membrane stages, vacuum or sweep arrangements, permeate condensation and product handling.",
        },
      ],
    },
    {
      type: "capabilities",
      id: "capabilities",
      label: "Capabilities",
      heading: "Pervaporation process development",
      intro:
        "A sound design basis combines mixture data, membrane compatibility and the requirements of the complete separation system.",
      items: [
        {
          title: "Mixture feasibility review",
          description:
            "Review the feed composition, volatility, temperature sensitivity and the intended separation duty.",
        },
        {
          title: "Membrane compatibility assessment",
          description:
            "Screen candidate membrane materials against the chemical composition and operating conditions.",
        },
        {
          title: "Process configuration",
          description:
            "Consider membrane staging, feed circulation, vacuum or sweep requirements and permeate condensation.",
        },
        {
          title: "Thermal and utility assessment",
          description:
            "Evaluate heating, cooling, vacuum and other utilities needed to maintain the selected process conditions.",
        },
        {
          title: "Plant integration",
          description:
            "Coordinate feed supply, product outlets, recycle streams, controls and downstream recovery equipment.",
        },
      ],
    },
    {
      type: "products",
      id: "products",
      label: "Equipment & Systems",
      heading: "Representative pervaporation equipment",
      intro:
        "The following equipment categories may form part of a pervaporation system. The final configuration requires application-specific engineering.",
      items: [
        {
          id: "pervaporation-membrane-modules",
          name: "Pervaporation Membrane Modules",
          category: "Membrane Equipment",
          image: { src: "/images/services/membranes-advanced-separation/pervaporation-membrane-modules.jpg", alt: "Pervaporation Membrane Modules" },
          description:
            "Membrane modules selected for the target mixture, chemical compatibility and required separation duty.",
        },
        {
          id: "feed-conditioning-systems",
          name: "Feed Conditioning Systems",
          category: "Process Equipment",
          image: { src: "/images/services/membranes-advanced-separation/feed-conditioning-systems.jpg", alt: "Feed Conditioning Systems" },
          description:
            "Equipment concepts for establishing suitable feed temperature, filtration and other required feed conditions.",
        },
        {
          id: "feed-circulation-equipment",
          name: "Feed Circulation Equipment",
          category: "Fluid Handling",
          image: { src: "/images/services/membranes-advanced-separation/feed-circulation-equipment.jpg", alt: "Feed Circulation Equipment" },
          description:
            "Pumps and associated components selected to suit the process fluid, flow range and operating conditions.",
        },
        {
          id: "vacuum-or-permeate-side-equipment",
          name: "Vacuum or Permeate-Side Equipment",
          category: "Vacuum Systems",
          image: { src: "/images/services/membranes-advanced-separation/vacuum-or-permeate-side-equipment.jpg", alt: "Vacuum or Permeate-Side Equipment" },
          description:
            "Vacuum generation or other permeate-side arrangements considered for the selected process configuration.",
        },
        {
          id: "permeate-condensation-and-collection",
          name: "Permeate Condensation and Collection",
          category: "Process Systems",
          image: { src: "/images/services/membranes-advanced-separation/permeate-condensation-and-collection.jpg", alt: "Permeate Condensation and Collection" },
          description:
            "Condensation, collection and handling concepts for permeate vapour and associated streams.",
        },
      ],
    },
    {
      type: "services",
      id: "services",
      label: "Engineering Services",
      heading: "From mixture review to process integration",
      intro:
        "The engineering scope should match the maturity of the project and the quality of available experimental or supplier data.",
      items: [
        {
          title: "Mixture Feasibility Review",
          description:
            "Assess feed composition, separation objectives and the data required to establish technical feasibility.",
        },
        {
          title: "Membrane Process Screening",
          description:
            "Compare candidate membrane types and process arrangements against compatibility and performance requirements.",
        },
        {
          title: "Preliminary Process Design",
          description:
            "Develop a preliminary configuration covering feed handling, membrane stages and permeate-side equipment.",
        },
        {
          title: "Utility and Equipment Review",
          description:
            "Identify likely heating, cooling, vacuum, pumping and instrumentation needs for the selected process case.",
        },
        {
          title: "System Integration",
          description:
            "Coordinate membrane equipment with upstream processing, product recovery and downstream plant operations.",
        },
      ],
    },
    {
      type: "industries",
      id: "industries",
      label: "Applications",
      heading: "Potential application areas",
      intro:
        "Pervaporation is not suitable for every liquid mixture. Each application requires validation of membrane compatibility and achievable separation performance.",
      items: [
        {
          title: "Chemical Processing",
          description:
            "Evaluation of membrane separation for selected liquid mixtures within chemical production processes.",
        },
        {
          title: "Solvent Recovery",
          description:
            "Assessment of suitable solvent-containing streams where selective permeation may support recovery objectives.",
        },
        {
          title: "Dehydration Duties",
          description:
            "Potential removal of water from compatible mixtures where membrane selectivity and operating conditions are appropriate.",
        },
        {
          title: "Specialty Production",
          description:
            "Purification or concentration concepts for selected products, subject to material compatibility and validation.",
        },
      ],
    },
    {
      type: "technical-specifications",
      id: "technical-specifications",
      label: "Design Basis",
      heading: "Inputs that determine system design",
      intro:
        "The parameters below help establish the design basis. Numeric performance values should only be added when supported by application-specific data.",
      items: [
        {
          name: "Feed composition",
          value: "Component concentrations, impurities and expected variability",
        },
        {
          name: "Fluid properties",
          value: "Density, viscosity, volatility, temperature sensitivity and compatibility",
        },
        {
          name: "Operating conditions",
          value: "Feed temperature, pressure, flow rate and permeate-side pressure",
        },
        {
          name: "Product specification",
          value: "Required composition, recovery target and acceptable product losses",
        },
        {
          name: "Membrane properties",
          value: "Selectivity, permeation behaviour, chemical compatibility and service conditions",
        },
        {
          name: "Utility requirements",
          value: "Heating, cooling, vacuum, pumping and condensation needs as applicable",
        },
      ],
    },
    {
      type: "process-flow",
      id: "process-flow",
      label: "Process Flow",
      heading: "A typical pervaporation evaluation",
      intro:
        "The actual flow scheme varies with the mixture, membrane selection and permeate-side arrangement.",
      steps: [
        {
          title: "Feed and duty definition",
          description:
            "Characterise the mixture and define the required separation, product quality and recovery objectives.",
        },
        {
          title: "Membrane screening",
          description:
            "Assess candidate membranes using compatibility information and suitable experimental or supplier data.",
        },
        {
          title: "Process configuration",
          description:
            "Determine a preliminary arrangement for feed circulation, membrane staging and permeate removal.",
        },
        {
          title: "Permeate handling",
          description:
            "Evaluate vacuum or sweep requirements, condensation, collection and any downstream recovery.",
        },
        {
          title: "Validation and integration",
          description:
            "Validate assumptions and coordinate the system with plant utilities, controls and adjacent process units.",
        },
      ],
    },
    {
      type: "lifecycle-support",
      id: "lifecycle-support",
      label: "Lifecycle Support",
      heading: "Considerations beyond initial design",
      intro:
        "Lifecycle planning should reflect the membrane chemistry, feed quality, operating conditions and maintenance strategy.",
      items: [
        {
          title: "Application definition",
          description:
            "Document the feed envelope, product specification and assumptions used for technology selection.",
        },
        {
          title: "Design and interface coordination",
          description:
            "Coordinate membrane equipment, pumps, vacuum equipment, heat exchange, instrumentation and controls.",
        },
        {
          title: "Start-up readiness",
          description:
            "Define operating procedures, checks and performance criteria appropriate to the supplied system.",
        },
        {
          title: "Monitoring and maintenance planning",
          description:
            "Establish monitoring needs and review potential effects of fouling, chemical exposure or membrane ageing.",
        },
      ],
    },
    {
      type: "standards-certifications",
      id: "standards-certifications",
      label: "Compliance",
      heading: "Codes and compliance considerations",
      intro:
        "Applicable requirements depend on the project location, fluid hazards, pressure and temperature conditions, equipment scope and client specification. This page does not claim any particular certification.",
      items: [
        {
          title: "Equipment design requirements",
          description:
            "Identify the relevant design codes for pumps, vessels, heat exchangers, vacuum equipment and associated systems.",
        },
        {
          title: "Materials compatibility",
          description:
            "Review wetted materials and membrane compatibility for the process fluid and cleaning chemicals, if applicable.",
        },
        {
          title: "Process safety",
          description:
            "Assess flammability, toxicity, temperature, pressure, vacuum and other hazards associated with the mixture.",
        },
        {
          title: "Environmental and waste handling",
          description:
            "Determine appropriate handling of permeate, residues, cleaning streams and other process wastes.",
        },
      ],
    },
    {
      type: "performance-sustainability",
      id: "performance-sustainability",
      label: "Performance",
      heading: "Assess separation performance holistically",
      intro:
        "Performance depends on feed properties, membrane behaviour, operating conditions and the full process configuration. Claims should be based on validated data.",
      metrics: [
        {
          title: "Separation quality",
          description:
            "Evaluate product composition and component recovery together against the agreed process requirements.",
        },
        {
          title: "Energy and utilities",
          description:
            "Account for heating, cooling, vacuum generation, pumping and permeate condensation as applicable.",
        },
        {
          title: "Membrane stability",
          description:
            "Review compatibility, fouling potential, cleaning needs and performance changes over the expected operating cycle.",
        },
        {
          title: "Process integration",
          description:
            "Consider recycle opportunities, heat integration and downstream processing without assuming unverified savings.",
        },
      ],
    },
    {
      type: "downloads-resources",
      id: "downloads-resources",
      label: "Resources",
      heading: "Technical resources",
      intro:
        "Approved application notes, technical datasheets and process documents can be linked here when they are available for publication.",
      items: [],
    },
    {
      type: "faqs",
      id: "faqs",
      label: "FAQs",
      heading: "Pervaporation questions",
      intro:
        "Key questions to resolve before selecting a pervaporation system.",
      items: [
        {
          question: "How does pervaporation work?",
          answer:
            "A liquid mixture contacts a selective membrane. Components permeate through the membrane and are removed as vapour from the permeate side, driven by a difference in chemical potential or vapour pressure.",
        },
        {
          question: "Can pervaporation be used for any liquid mixture?",
          answer:
            "No. Suitability depends on membrane selectivity, chemical compatibility, feed properties, operating conditions and the required separation performance.",
        },
        {
          question: "Does every system require a vacuum unit?",
          answer:
            "The permeate-side arrangement depends on the process design. Vacuum or a sweep arrangement may be considered, and the choice should be evaluated for the specific duty.",
        },
        {
          question: "What data is needed for an initial assessment?",
          answer:
            "Provide the mixture composition, flow rate, operating temperature and pressure, target product composition, recovery objective, impurities and any relevant test data.",
        },
      ],
    },
  ],
};

const membranesAndAdvancedSeparation: Omit<SBU, "href"> = {
  name: "Membranes and Advanced Separation",
  offerings:
    "Gas separation, pervaporation and other membrane applications.",
  children: [gasSeparation, pervaporation],
};

export default membranesAndAdvancedSeparation;
