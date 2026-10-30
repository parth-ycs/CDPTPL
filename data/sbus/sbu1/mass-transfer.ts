
import type {
  ServiceHeroContent,
  ServiceSection,
} from "@/components/solutions/types";

// ---------------------------------------------
// TYPES
// ---------------------------------------------

export interface MassTransferSolution {
  slug: string;
  groupSlug: string;
  hero: ServiceHeroContent;
  sections: ServiceSection[];
}

type MassTransferDefinition = {
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

const MASS_TRANSFER_IMAGE = "/images/solutions/mass-transfer.jpg";

// ---------------------------------------------
// MASS TRANSFER DATA
// ---------------------------------------------

const massTransferData: MassTransferDefinition[] = [
  // 01. STRUCTURED PACKINGS
  {
    slug: "structured-packings",
    name: "Structured Packings",
    tagline: "Precision-engineered column internals for efficient separation.",
    description:
      "Structured packing solutions designed to provide efficient vapour-liquid contact, improved mass transfer performance and optimized separation processes across industrial applications.",
    overview:
      "Structured packings are specialized column internals consisting of regularly arranged corrugated sheets or structured elements. They provide a large effective surface area for vapour-liquid interaction while maintaining suitable hydraulic characteristics. Their selection depends on separation requirements, fluid properties, column geometry and operating conditions.",
    capabilities: [
      "Structured packing selection and evaluation",
      "Column internals configuration",
      "Mass transfer performance assessment",
      "Hydraulic capacity evaluation",
      "Pressure drop analysis",
      "Column revamping and performance optimization",
    ],
    products: [
      {
        name: "Metal Structured Packings",
        category: "Structured Packing",
        description:
          "Metal corrugated packing elements designed for industrial separation columns requiring suitable mechanical strength and mass transfer performance.",
      },
      {
        name: "Plastic Structured Packings",
        category: "Structured Packing",
        description:
          "Polymeric structured packing configurations for applications requiring suitable chemical compatibility and corrosion resistance.",
      },
      {
        name: "High Performance Structured Packings",
        category: "Advanced Column Internals",
        description:
          "Specialized structured packing geometries developed to address demanding separation and hydraulic requirements.",
      },
    ],
    applications: [
      "Chemical processing columns",
      "Petrochemical separation systems",
      "Gas absorption and stripping",
      "Solvent recovery operations",
    ],
    specifications: [
      { name: "Packing geometry", value: "Corrugated structured arrangement" },
      { name: "Material", value: "Metal or suitable polymer" },
      { name: "Specific surface area", value: "Design-dependent" },
      { name: "Void fraction", value: "Geometry-dependent" },
      { name: "Pressure drop", value: "Determined through hydraulic evaluation" },
      { name: "Operating conditions", value: "Process-specific" },
    ],
    processSteps: [
      {
        title: "Process Evaluation",
        description:
          "Evaluate the separation requirements, fluid properties and operating conditions of the column.",
        output: "Defined separation requirements",
      },
      {
        title: "Packing Selection",
        description:
          "Select suitable packing geometry, material and configuration based on process requirements.",
        output: "Selected packing arrangement",
      },
      {
        title: "Vapour-Liquid Contact",
        description:
          "Distribute liquid across the packing surface while vapour flows through the available passages.",
        output: "Mass transfer between phases",
      },
      {
        title: "Separation Performance",
        description:
          "Achieve the intended separation through repeated vapour-liquid interaction across the packed column.",
        output: "Separated process streams",
      },
    ],
  },

  // 02. RANDOM PACKINGS
  {
    slug: "random-packings",
    name: "Random Packings",
    tagline: "Reliable mass transfer solutions for industrial separation columns.",
    description:
      "Random packing elements designed to provide effective vapour-liquid contact in absorption, stripping, distillation and other industrial mass transfer applications.",
    overview:
      "Random packings are loose column internals installed in bulk within a packed column. Their geometry creates contact surfaces that facilitate interaction between rising vapour and descending liquid. Different configurations and materials are available depending on process conditions, hydraulic requirements and chemical compatibility.",
    capabilities: [
      "Random packing selection",
      "Packing material evaluation",
      "Column loading configuration",
      "Mass transfer assessment",
      "Hydraulic and pressure drop evaluation",
      "Existing column performance improvement",
    ],
    products: [
      {
        name: "Pall Rings",
        category: "Random Packing",
        description:
          "Open cylindrical packing elements with internal structural features designed to improve vapour-liquid contact.",
      },
      {
        name: "Raschig Rings",
        category: "Random Packing",
        description:
          "Cylindrical packing elements used in various industrial absorption and separation applications.",
      },
      {
        name: "Saddles",
        category: "Random Packing",
        description:
          "Curved packing elements designed to provide effective contact surfaces and suitable hydraulic characteristics.",
      },
      {
        name: "Plastic Random Packings",
        category: "Random Packing",
        description:
          "Polymeric packing elements for applications requiring suitable chemical compatibility and corrosion resistance.",
      },
    ],
    applications: [
      "Gas absorption columns",
      "Chemical stripping operations",
      "Industrial scrubbing systems",
      "Distillation and separation columns",
    ],
    specifications: [
      { name: "Packing type", value: "Ring, saddle or other geometry" },
      { name: "Material", value: "Metal, plastic or ceramic" },
      { name: "Nominal size", value: "Selected according to column design" },
      { name: "Specific surface area", value: "Packing-dependent" },
      { name: "Void fraction", value: "Geometry-dependent" },
      { name: "Chemical compatibility", value: "Process-specific" },
    ],
    processSteps: [
      {
        title: "Column Assessment",
        description:
          "Review column dimensions, process fluids, flow rates and intended separation performance.",
        output: "Column design requirements",
      },
      {
        title: "Packing Configuration",
        description:
          "Determine suitable packing type, size and material for the application.",
        output: "Selected packing configuration",
      },
      {
        title: "Packing Installation",
        description:
          "Load the packing elements into the column using an appropriate supporting arrangement.",
        output: "Packed column",
      },
      {
        title: "Mass Transfer Operation",
        description:
          "Allow counter-current vapour and liquid flow to interact across the packing surfaces.",
        output: "Treated or separated streams",
      },
    ],
  },

  // 03. TRAYS
  {
    slug: "trays",
    name: "Trays",
    tagline: "Efficient vapour-liquid contacting for industrial process columns.",
    description:
      "Engineered column trays designed to support controlled vapour-liquid interaction, stage-wise separation and reliable hydraulic performance in industrial processing systems.",
    overview:
      "Trays are internal column components that create distinct contacting stages for vapour and liquid. Vapour passes through openings in the tray deck and interacts with liquid flowing across the tray. Tray configuration is selected based on capacity, efficiency, pressure drop, turndown and process requirements.",
    capabilities: [
      "Tray type selection and evaluation",
      "Tray hydraulic design assessment",
      "Column internals engineering",
      "Vapour-liquid contacting optimization",
      "Capacity and pressure drop evaluation",
      "Tray revamping and replacement studies",
    ],
    products: [
      {
        name: "Sieve Trays",
        category: "Column Trays",
        description:
          "Perforated tray decks that allow vapour to pass through liquid for stage-wise mass transfer.",
      },
      {
        name: "Valve Trays",
        category: "Column Trays",
        description:
          "Tray configurations incorporating movable or fixed valves to regulate vapour flow through the tray deck.",
      },
      {
        name: "Bubble Cap Trays",
        category: "Column Trays",
        description:
          "Tray arrangements using bubble caps and risers to direct vapour through the liquid layer.",
      },
      {
        name: "Special Purpose Trays",
        category: "Column Trays",
        description:
          "Application-specific tray configurations developed for particular process and hydraulic requirements.",
      },
    ],
    applications: [
      "Distillation columns",
      "Absorption and stripping columns",
      "Petrochemical processing",
      "Chemical separation systems",
    ],
    specifications: [
      { name: "Tray type", value: "Sieve, valve or bubble cap" },
      { name: "Tray spacing", value: "Column design-dependent" },
      { name: "Tray material", value: "Selected according to process compatibility" },
      { name: "Operating capacity", value: "Established through hydraulic calculations" },
      { name: "Pressure drop", value: "Determined through tray design" },
      { name: "Turndown requirements", value: "Process-specific" },
    ],
    processSteps: [
      {
        title: "Process Requirement Analysis",
        description:
          "Identify vapour and liquid loads, separation objectives and operating conditions.",
        output: "Defined tray design basis",
      },
      {
        title: "Tray Design and Selection",
        description:
          "Select tray configuration, geometry and hydraulic parameters.",
        output: "Designed tray arrangement",
      },
      {
        title: "Vapour-Liquid Contacting",
        description:
          "Vapour rises through the tray openings and interacts with the liquid flowing across each tray.",
        output: "Stage-wise mass transfer",
      },
      {
        title: "Product Separation",
        description:
          "Repeated contacting across successive stages enables the required component separation.",
        output: "Separated product streams",
      },
    ],
  },

  // 04. LIQUID DISTRIBUTORS
  {
    slug: "liquid-distributors",
    name: "Liquid Distributor",
    tagline: "Uniform liquid distribution for optimized packed column performance.",
    description:
      "Liquid distribution systems designed to deliver consistent liquid flow across packed column cross-sections, supporting effective wetting and improved mass transfer performance.",
    overview:
      "Liquid distributors are important column internals used to spread incoming liquid uniformly over the packing surface. Proper distribution helps reduce channeling, dry zones and uneven liquid loading. Distributor selection depends on liquid flow rate, fluid properties, column diameter, fouling tendency and operating conditions.",
    capabilities: [
      "Liquid distributor selection",
      "Distribution uniformity assessment",
      "Distributor hydraulic design",
      "Column cross-sectional coverage evaluation",
      "Liquid flow and pressure assessment",
      "Existing distributor performance review",
    ],
    products: [
      {
        name: "Orifice Type Distributors",
        category: "Liquid Distribution",
        description:
          "Distribution systems using calibrated openings to deliver liquid across a packed column.",
      },
      {
        name: "Trough Type Distributors",
        category: "Liquid Distribution",
        description:
          "Trough-based arrangements designed to distribute liquid through multiple discharge points.",
      },
      {
        name: "Pan Type Distributors",
        category: "Liquid Distribution",
        description:
          "Pan-style liquid distribution arrangements designed for suitable column operating conditions.",
      },
      {
        name: "Pipe Type Distributors",
        category: "Liquid Distribution",
        description:
          "Pipe-based systems incorporating discharge openings for liquid delivery across the column.",
      },
    ],
    applications: [
      "Packed distillation columns",
      "Gas absorption systems",
      "Industrial scrubbers",
      "Liquid-liquid contacting columns",
    ],
    specifications: [
      { name: "Distributor configuration", value: "Trough, pan, orifice or pipe type" },
      { name: "Liquid flow rate", value: "Defined by process requirements" },
      { name: "Column diameter", value: "Application-specific" },
      { name: "Distribution density", value: "Established through hydraulic design" },
      { name: "Material", value: "Selected according to fluid compatibility" },
      { name: "Fouling tendency", value: "Evaluated during distributor selection" },
    ],
    processSteps: [
      {
        title: "Liquid Feed Assessment",
        description:
          "Determine liquid flow rate, fluid properties and column operating requirements.",
        output: "Liquid feed design basis",
      },
      {
        title: "Distributor Design",
        description:
          "Select suitable distributor geometry and discharge configuration.",
        output: "Distributor design",
      },
      {
        title: "Liquid Distribution",
        description:
          "Deliver liquid through distribution points across the column cross-section.",
        output: "Uniformly distributed liquid",
      },
      {
        title: "Packing Wetting",
        description:
          "Allow distributed liquid to flow across the packing surface and establish effective contacting.",
        output: "Improved liquid-packing contact",
      },
    ],
  },

  // 05. LIQUID COLLECTORS
  {
    slug: "liquid-collectors",
    name: "Liquid Collector",
    tagline: "Controlled liquid collection for efficient column operation.",
    description:
      "Liquid collection systems designed to gather process liquid from packed column sections and route it for redistribution, withdrawal or downstream processing.",
    overview:
      "Liquid collectors are column internals used to collect liquid flowing from an upper packed section. They provide a controlled arrangement for liquid withdrawal, redistribution or transfer to another column section. Collector configuration depends on liquid loading, column geometry, process requirements and integration with associated internals.",
    capabilities: [
      "Liquid collector configuration selection",
      "Column liquid collection assessment",
      "Collector hydraulic design",
      "Liquid withdrawal and routing design",
      "Redistribution system integration",
      "Column revamping and internals evaluation",
    ],
    products: [
      {
        name: "Collector Trays",
        category: "Liquid Collection",
        description:
          "Tray-based internal arrangements designed to collect liquid from packed column sections.",
      },
      {
        name: "Chimney Type Collectors",
        category: "Liquid Collection",
        description:
          "Collector configurations incorporating vapour passage chimneys while gathering descending liquid.",
      },
      {
        name: "Collector and Redistributor Assemblies",
        category: "Integrated Column Internals",
        description:
          "Combined arrangements designed to collect liquid and prepare it for subsequent redistribution.",
      },
    ],
    applications: [
      "Packed distillation columns",
      "Industrial absorption columns",
      "Liquid redistribution systems",
      "Multi-section packed columns",
    ],
    specifications: [
      { name: "Collector type", value: "Tray or chimney configuration" },
      { name: "Liquid loading", value: "Defined by process flow requirements" },
      { name: "Column diameter", value: "Application-specific" },
      { name: "Vapour passage", value: "Integrated according to column design" },
      { name: "Material", value: "Selected according to process compatibility" },
      { name: "Liquid withdrawal", value: "Defined by process arrangement" },
    ],
    processSteps: [
      {
        title: "Liquid Flow Assessment",
        description:
          "Evaluate liquid loading, column geometry and collection requirements.",
        output: "Defined collection requirements",
      },
      {
        title: "Collector Configuration",
        description:
          "Select a suitable collector arrangement and determine the required collection area.",
        output: "Collector design",
      },
      {
        title: "Liquid Collection",
        description:
          "Collect descending liquid from the upper column section while maintaining the required vapour passage.",
        output: "Collected liquid stream",
      },
      {
        title: "Liquid Routing",
        description:
          "Transfer collected liquid to a withdrawal line, redistribution arrangement or downstream process.",
        output: "Controlled liquid flow",
      },
    ],
  },

  // 06. PACKING SUPPORT
  {
    slug: "packing-support",
    name: "Packing Support",
    tagline: "Structural support systems for reliable packed column operation.",
    description:
      "Engineered packing support systems designed to carry packing loads, maintain column internals alignment and provide suitable vapour-liquid passage within industrial packed columns.",
    overview:
      "Packing support systems form the structural foundation for packed column sections. They support the weight of packing material and associated liquid holdup while allowing vapour to pass through the support structure. Design considerations include mechanical loading, hydraulic capacity, material compatibility and column geometry.",
    capabilities: [
      "Packing support configuration selection",
      "Mechanical load assessment",
      "Hydraulic capacity evaluation",
      "Column internals structural integration",
      "Support grid and beam arrangement",
      "Existing support system assessment",
    ],
    products: [
      {
        name: "Grid Type Packing Supports",
        category: "Packing Support",
        description:
          "Structural grid arrangements designed to support packing while providing openings for vapour and liquid flow.",
      },
      {
        name: "Beam Type Supports",
        category: "Structural Internals",
        description:
          "Support beam configurations used to distribute structural loads across the column.",
      },
      {
        name: "Support Plates",
        category: "Column Internals",
        description:
          "Engineered support plate arrangements for suitable packed column applications.",
      },
      {
        name: "High Capacity Packing Supports",
        category: "Advanced Support Systems",
        description:
          "Support arrangements evaluated for applications involving demanding mechanical and hydraulic loading conditions.",
      },
    ],
    applications: [
      "Packed distillation columns",
      "Gas absorption towers",
      "Industrial separation columns",
      "Large diameter packed towers",
    ],
    specifications: [
      { name: "Support configuration", value: "Grid, beam or plate arrangement" },
      { name: "Material", value: "Selected according to process conditions" },
      { name: "Mechanical loading", value: "Calculated from packing and liquid loads" },
      { name: "Column diameter", value: "Application-specific" },
      { name: "Open area", value: "Determined through hydraulic evaluation" },
      { name: "Structural design", value: "Based on project-specific loading conditions" },
    ],
    processSteps: [
      {
        title: "Structural Requirement Assessment",
        description:
          "Evaluate column geometry, packing weight, liquid holdup and expected mechanical loading.",
        output: "Defined support design basis",
      },
      {
        title: "Support Configuration Design",
        description:
          "Determine suitable support geometry, material and structural arrangement.",
        output: "Packing support design",
      },
      {
        title: "Packing Load Distribution",
        description:
          "Transfer the load from the packed section through the support structure to the column shell.",
        output: "Supported packing arrangement",
      },
      {
        title: "Hydraulic Operation",
        description:
          "Maintain suitable vapour and liquid passage through the support structure during operation.",
        output: "Integrated column operation",
      },
    ],
  },
];

// ---------------------------------------------
// SECTION GENERATOR
// ---------------------------------------------

function createMassTransferSections(
  item: MassTransferDefinition
): ServiceSection[] {
  return [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: `${item.name} for Industrial Applications`,
      description: item.overview,
      kpis: [
        { value: "01", label: "Engineering Design" },
        { value: "02", label: "Performance Evaluation" },
        { value: "03", label: "Process Integration" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: `${item.name} Engineering Capabilities`,
      intro:
        "Explore the engineering capabilities associated with this column internal technology.",
      items: item.capabilities.map((capability) => ({
        title: capability,
        description:
          `${capability} based on process requirements, column configuration and operating conditions.`,
      })),
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: `${item.name} Product Range`,
      intro:
        "Explore representative product configurations and associated engineering solutions.",
      items: item.products.map((product, index) => ({
        id: `${item.slug}-product-${index + 1}`,
        name: product.name,
        category: product.category,
        description: product.description,
        image: {
          src: MASS_TRANSFER_IMAGE,
          alt: `${product.name} industrial column internals`,
        },
        specs: [
          "Configuration based on column requirements",
          "Material selected according to process conditions",
          "Design parameters established through engineering",
        ],
      })),
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: `${item.name} Engineering Services`,
      intro:
        "Engineering activities supporting selection, design, evaluation and integration.",
      items: [
        {
          title: "Technical Assessment",
          description:
            `Evaluate ${item.name.toLowerCase()} requirements based on the column design and intended process duty.`,
        },
        {
          title: "Design and Selection",
          description:
            "Determine suitable configurations, materials and operating parameters.",
        },
        {
          title: "Hydraulic and Mechanical Evaluation",
          description:
            "Review hydraulic performance and mechanical requirements for the intended application.",
        },
        {
          title: "Revamping and Optimization",
          description:
            "Assess opportunities to improve existing column internals and process performance.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: `${item.name} Applications`,
      intro:
        "Representative industrial sectors and applications where this technology may be evaluated.",
      items: item.applications.map((application) => ({
        title: application,
        description:
          `${item.name} can be evaluated for suitable ${application.toLowerCase()} based on process conditions and engineering requirements.`,
      })),
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: `${item.name} Technical Parameters`,
      intro:
        "Key parameters considered during product selection and engineering design.",
      items: item.specifications,
      note:
        "Specifications are representative design considerations. Actual dimensions, materials and performance values require approved project calculations.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: `How ${item.name} Works`,
      intro:
        "A simplified explanation of the technology's role in an industrial column.",
      steps: item.processSteps,
      note:
        "The actual column configuration depends on the process design and selected internal arrangement.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: `${item.name} Lifecycle Support`,
      intro:
        "Representative activities for maintaining and evaluating column internal performance.",
      items: [
        {
          title: "Performance Inspection",
          description:
            "Review the condition and operation of the installed column internals.",
        },
        {
          title: "Hydraulic Performance Review",
          description:
            "Evaluate liquid and vapour loading against the intended operating conditions.",
        },
        {
          title: "Maintenance Assessment",
          description:
            "Identify potential maintenance, replacement and material compatibility requirements.",
        },
        {
          title: "Column Optimization",
          description:
            "Evaluate improvements to the internal arrangement based on operational performance.",
        },
      ],
    },

    {
      id: "performance-sustainability",
      label: "Performance & Sustainability",
      type: "performance-sustainability",
      heading: `${item.name} Performance Indicators`,
      intro:
        "Representative indicators for evaluating column internal performance.",
      metrics: [
        {
          title: "Mass Transfer Performance",
          description:
            "Evaluate separation effectiveness and contacting performance against process requirements.",
          category: "Performance",
        },
        {
          title: "Hydraulic Capacity",
          description:
            "Review liquid and vapour handling capacity under intended operating conditions.",
          category: "Hydraulics",
        },
        {
          title: "Pressure Drop",
          description:
            "Monitor pressure drop across the column internal arrangement.",
          category: "Operations",
        },
      ],
      note:
        "Actual performance and efficiency values must be established through engineering calculations, simulations or operating data.",
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: `${item.name} Quality and Compliance`,
      intro:
        "Applicable engineering and manufacturing requirements depend on the equipment classification and project specifications.",
      items: [
        {
          title: "Mechanical Design Requirements",
          description:
            "Evaluate structural loading, material selection and equipment integration requirements.",
          reference: "Project-specific",
        },
        {
          title: "Material Requirements",
          description:
            "Establish material compatibility with process fluids and operating conditions.",
          reference: "Project-specific",
        },
        {
          title: "Inspection and Quality Requirements",
          description:
            "Define inspection and quality verification requirements for the supplied internals.",
          reference: "To be confirmed per project",
        },
      ],
      note:
        "Applicable standards and certifications must be confirmed against the actual project scope. No unverified certification claims are made.",
    },

    {
      id: "downloads-resources",
      label: "Downloads & Technical Resources",
      type: "downloads-resources",
      heading: `${item.name} Technical Resources`,
      intro:
        "Technical brochures, product drawings, engineering documents and approved technical resources.",
      items: [],
      note:
        "Approved technical resources will be added when available.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: `${item.name} FAQs`,
      intro:
        `Frequently asked questions about ${item.name.toLowerCase()}.`,
      items: [
        {
          question: `What is ${item.name.toLowerCase()} used for?`,
          answer:
            `${item.name} is used in industrial column applications to support the intended mass transfer, liquid handling or structural function.`,
        },
        {
          question: "How is the appropriate configuration selected?",
          answer:
            "Selection depends on column geometry, process fluid properties, operating conditions, hydraulic requirements and mechanical design considerations.",
        },
        {
          question: "Can existing column internals be replaced?",
          answer:
            "Replacement can be evaluated through an assessment of the existing column, operating conditions, internal dimensions and required performance.",
        },
      ],
    },
  ];
}

// ---------------------------------------------
// EXPORT MASS TRANSFER SOLUTIONS
// ---------------------------------------------

export const massTransferSolutions: MassTransferSolution[] =
  massTransferData.map((item) => ({
    slug: item.slug,
    groupSlug: "mass-transfer",

    hero: {
      name: item.name,
      tagline: item.tagline,
      description: item.description,
      image: MASS_TRANSFER_IMAGE,
      imageAlt: `${item.name} - industrial mass transfer technology`,
      ctaLabel: "Discuss a project",
      ctaHref: "#enquiry",
    },

    sections: createMassTransferSections(item),
  }));

export default massTransferSolutions;
