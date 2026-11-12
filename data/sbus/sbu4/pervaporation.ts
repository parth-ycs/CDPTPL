import type { SBUChild } from "./types";

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

export default pervaporation;
