import type { SBUChild } from "./types";

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

export default gasSeparation;
