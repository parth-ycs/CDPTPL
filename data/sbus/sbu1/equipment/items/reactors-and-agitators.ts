
import type { SBUChild } from "@/data/sbus/types";

const reactorsAndAgitators: SBUChild = {
  slug: "reactors-and-agitators",

  hero: {
    name: "Reactors & Agitators",
    tagline: "Integrated Industrial Reaction and Mixing Solutions",
    description:
      "Engineered reactor and agitation systems designed to support controlled chemical reactions, efficient heat transfer and consistent process mixing across industrial applications.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial chemical reactor and agitator equipment",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Reactors & Agitators for Industrial Process Applications",
      description:
        "Reactors provide the environment for chemical transformations under controlled process conditions. Integrated agitation systems support material mixing, temperature uniformity and reactant distribution throughout the reaction process. Equipment design depends on reaction characteristics, heat generation, pressure, temperature, fluid properties and material compatibility.",
      kpis: [
        { value: "01", label: "Controlled reactions" },
        { value: "02", label: "Process uniformity" },
        { value: "03", label: "Thermal management" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Reactors & Agitators Engineering Capabilities",
      intro:
        "Engineering capabilities focused on reaction performance, mechanical configuration and reliable process operation.",
      items: [
        {
          title: "Reaction Process Assessment",
          description:
            "Evaluate reaction chemistry, reactant properties, operating conditions and process requirements to establish the appropriate reactor design basis.",
        },
        {
          title: "Reactor Configuration Selection",
          description:
            "Assess suitable batch and continuous reactor configurations according to reaction characteristics, production requirements and operating conditions.",
        },
        {
          title: "Agitation and Impeller Design",
          description:
            "Evaluate agitator arrangements, impeller configurations and mixing requirements to support reactant distribution and process uniformity.",
        },
        {
          title: "Thermal Management Assessment",
          description:
            "Evaluate reaction heat generation, heating and cooling requirements and thermal management arrangements for controlled operation.",
        },
        {
          title: "Vessel and Instrumentation Integration",
          description:
            "Coordinate reactor vessels, process connections, instrumentation and associated mechanical and control interfaces.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Reactors & Agitators Product Range",
      intro:
        "Representative reaction and agitation equipment configurations designed for different industrial chemical processing requirements.",
      items: [
        {
          id: "reactors-and-agitators-product-1",
          name: "Batch Reactors",
          category: "Reaction Equipment",
          description:
            "Vessel systems designed for controlled batch chemical processes involving defined reactant charging, reaction conditions and product recovery sequences.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial batch chemical reactor",
          },
          specs: [
            "Configuration based on reaction chemistry and batch requirements",
            "Heating, cooling and instrumentation arrangements are application-specific",
          ],
        },
        {
          id: "reactors-and-agitators-product-2",
          name: "Continuous Reactors",
          category: "Reaction Equipment",
          description:
            "Reactor arrangements designed for continuous feed introduction and product withdrawal under defined process operating conditions.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial continuous process reactor",
          },
          specs: [
            "Designed around continuous process flow requirements",
            "Operating conditions established through process engineering",
          ],
        },
        {
          id: "reactors-and-agitators-product-3",
          name: "Agitator Assemblies",
          category: "Mixing Equipment",
          description:
            "Mechanical mixing systems configured to support reactant distribution, fluid circulation and controlled mixing within process reactors.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial reactor agitator assembly",
          },
          specs: [
            "Impeller configuration selected according to mixing duty",
            "Drive and shaft arrangements are project-specific",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Reactors & Agitators Engineering Services",
      intro:
        "Engineering and technical services supporting reactor selection, agitation design and process integration.",
      items: [
        {
          title: "Reaction Process Evaluation",
          description:
            "Evaluate reaction chemistry, material characteristics and operating conditions to establish suitable process equipment requirements.",
        },
        {
          title: "Reactor Design and Configuration",
          description:
            "Develop reactor configurations based on reaction requirements, vessel geometry, pressure and temperature conditions.",
        },
        {
          title: "Agitator and Mixing System Engineering",
          description:
            "Evaluate impeller selection, agitation arrangements, drive systems and mixing requirements for the intended process duty.",
        },
        {
          title: "Thermal and Instrumentation Integration",
          description:
            "Coordinate heating and cooling systems, process instrumentation and associated equipment interfaces for controlled operation.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Reactors & Agitators Industrial Applications",
      intro:
        "Reaction and agitation solutions for industrial sectors involving chemical transformations, formulation and controlled material processing.",
      items: [
        {
          title: "Chemical Manufacturing",
          description:
            "Reactor and agitation systems supporting chemical synthesis, reaction processing and industrial production operations.",
        },
        {
          title: "Specialty Chemicals",
          description:
            "Controlled reaction and mixing equipment for specialty chemical manufacturing and formulation processes.",
        },
        {
          title: "Resin and Polymer Processing",
          description:
            "Reaction and agitation applications involving suitable resin production and polymer processing operations.",
        },
        {
          title: "Industrial Formulation",
          description:
            "Mixing and reaction systems supporting the preparation and processing of industrial formulations.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Reactors & Agitators Technical Specifications",
      intro:
        "Equipment specifications are established according to reaction chemistry, process conditions, mechanical design and mixing requirements.",
      items: [
        {
          name: "Reaction type",
          value: "Defined by process chemistry",
        },
        {
          name: "Operating temperature",
          value: "Established from reaction requirements",
        },
        {
          name: "Operating pressure",
          value: "Defined by project requirements",
        },
        {
          name: "Reactor configuration",
          value: "Batch or continuous arrangement",
        },
        {
          name: "Agitation arrangement",
          value: "Selected according to mixing duty",
        },
        {
          name: "Impeller configuration",
          value: "Selected based on fluid and mixing characteristics",
        },
        {
          name: "Thermal management",
          value: "Heating and cooling arrangements based on reaction requirements",
        },
        {
          name: "Materials of construction",
          value: "Selected for chemical compatibility",
        },
      ],
      note:
        "The above specifications are indicative design considerations. Actual reactor dimensions, pressure ratings, operating temperatures, agitation parameters and material requirements must be confirmed against the approved process and mechanical design.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "Reactor and Agitator Operating Process",
      intro:
        "A representative operating sequence illustrating how reactants are introduced, mixed and processed under controlled reaction conditions.",
      steps: [
        {
          title: "Reactant Charging",
          description:
            "The required raw materials are introduced into the reactor according to the defined process sequence and operating procedure.",
          output: "Charged reactor",
        },
        {
          title: "Agitation and Conditioning",
          description:
            "The mechanical agitation system promotes reactant distribution, fluid circulation and temperature uniformity within the vessel.",
          output: "Conditioned reaction mixture",
        },
        {
          title: "Controlled Reaction",
          description:
            "The chemical reaction proceeds under defined temperature, pressure and process conditions with appropriate thermal management.",
          output: "Processed reaction mixture",
        },
        {
          title: "Product Recovery",
          description:
            "The resulting reaction product is discharged or transferred to downstream separation, purification or processing operations.",
          output: "Product stream",
        },
      ],
      note:
        "Actual reaction sequences and operating conditions depend on process chemistry, reaction kinetics, heat generation and equipment configuration.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Reactors & Agitators Lifecycle Support",
      intro:
        "Support activities covering reactor installation, agitation system maintenance and ongoing process equipment performance.",
      items: [
        {
          title: "Installation and Commissioning Support",
          description:
            "Support reactor installation, agitator alignment, process connections and initial operational checks within the agreed project scope.",
        },
        {
          title: "Preventive Maintenance",
          description:
            "Plan periodic inspection and maintenance of agitator drives, shafts, bearings, mechanical seals and associated components.",
        },
        {
          title: "Vessel and Internal Inspection",
          description:
            "Evaluate vessel condition, internal components and process contact surfaces according to operating conditions and inspection requirements.",
        },
        {
          title: "Performance Evaluation",
          description:
            "Review mixing performance, thermal operating conditions and equipment operation to identify potential process improvements.",
        },
      ],
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Reactors & Agitators Quality and Compliance",
      intro:
        "Applicable engineering codes, fabrication requirements and inspection procedures depend on reactor configuration, operating conditions and project specifications.",
      items: [
        {
          title: "Pressure Equipment Design",
          description:
            "Identify applicable pressure vessel design requirements according to operating conditions, equipment configuration and jurisdiction.",
          reference: "To be confirmed per project",
        },
        {
          title: "Material and Fabrication Requirements",
          description:
            "Establish material selection, fabrication and quality requirements based on chemical compatibility and mechanical design conditions.",
          reference: "Project-specific",
        },
        {
          title: "Inspection and Testing",
          description:
            "Define inspection and testing requirements for vessel integrity, mechanical assemblies and associated process equipment.",
          reference: "Project quality plan",
        },
      ],
      note:
        "Applicable codes, standards and certification requirements must be verified against the actual equipment specification and jurisdiction. No specific company certification is implied.",
    },

    {
      id: "downloads-resources",
      label: "Downloads & Technical Resources",
      type: "downloads-resources",
      heading: "Reactors & Agitators Technical Resources",
      intro:
        "Technical brochures, equipment datasheets, reactor general arrangement drawings, agitator specifications and engineering documentation can be listed here when approved for public distribution.",
      items: [],
      note:
        "No downloadable technical resources have been configured for this page yet.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Reactors & Agitators Frequently Asked Questions",
      intro:
        "Common questions about industrial reactors, agitation systems and controlled chemical processing.",
      items: [
        {
          question: "What is an industrial reactor?",
          answer:
            "An industrial reactor is a vessel or process unit designed to facilitate chemical or physical transformations under controlled operating conditions.",
        },
        {
          question: "What is the difference between batch and continuous reactors?",
          answer:
            "Batch reactors process a defined quantity of reactants in individual batches, whereas continuous reactors receive feed and discharge products continuously during operation.",
        },
        {
          question: "What is the role of an agitator in a reactor?",
          answer:
            "An agitator promotes fluid circulation and reactant distribution, supporting mixing consistency and temperature uniformity throughout the reaction process.",
        },
        {
          question: "How is an agitator selected?",
          answer:
            "Agitator selection depends on fluid viscosity, vessel geometry, mixing intensity, impeller configuration, operating conditions and the required mixing outcome.",
        },
        {
          question: "How is temperature controlled inside a reactor?",
          answer:
            "Temperature management may involve heating or cooling arrangements integrated with the reactor, depending on reaction heat generation and process requirements.",
        },
        {
          question: "Can reactor and agitator configurations be customised?",
          answer:
            "Reactor and agitator arrangements can be engineered around specific reaction chemistry, operating conditions, vessel requirements and process objectives, subject to design feasibility.",
        },
      ],
    },
  ],
};

export default reactorsAndAgitators;
