
import type { SBUChild } from "@/data/sbus/types";

const reboiler: SBUChild = {
  slug: "reboiler",

  hero: {
    name: "Reboiler",
    tagline: "Advanced Thermal Solutions for Industrial Separation",
    description:
      "Engineered reboiler systems designed to provide controlled heat input to process columns, generating vapour to support distillation and other industrial separation operations.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial reboiler heat exchanger equipment",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Reboilers for Industrial Separation Processes",
      description:
        "Reboilers supply thermal energy to the bottom section of distillation columns, generating the vapour required to support separation. Their design depends on process fluid properties, vapour generation requirements, heat duty, circulation arrangement and operating conditions. Proper reboiler selection supports reliable thermal performance and efficient column operation.",
      kpis: [
        { value: "01", label: "Controlled heat input" },
        { value: "02", label: "Vapour generation" },
        { value: "03", label: "Thermal integration" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Reboiler Engineering Capabilities",
      intro:
        "Engineering capabilities focused on thermal performance, circulation requirements and integration with industrial separation systems.",
      items: [
        {
          title: "Reboiler Duty Calculations",
          description:
            "Evaluate process conditions, vapour generation requirements and energy balances to establish the required thermal duty.",
        },
        {
          title: "Thermal Configuration Selection",
          description:
            "Assess suitable reboiler configurations based on process fluid characteristics, heat transfer requirements and operating conditions.",
        },
        {
          title: "Circulation and Hydraulic Assessment",
          description:
            "Evaluate natural and forced circulation arrangements, hydraulic conditions and process flow requirements.",
        },
        {
          title: "Process and Utility Integration",
          description:
            "Coordinate reboiler systems with distillation columns, heating utilities and associated process equipment.",
        },
        {
          title: "Thermal Performance Evaluation",
          description:
            "Review heat transfer characteristics, operating conditions and equipment performance to identify potential improvements.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Reboiler Product Range",
      intro:
        "Representative reboiler configurations designed for different industrial thermal and separation process requirements.",
      items: [
        {
          id: "reboiler-product-1",
          name: "Kettle Reboilers",
          category: "Thermal Equipment",
          description:
            "Reboiler configurations featuring a liquid holding section and heat exchanger bundle, designed to provide controlled heat input and vapour generation.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial kettle reboiler",
          },
          specs: [
            "Integrated liquid holding and heat exchange arrangement",
            "Configuration based on process thermal requirements",
          ],
        },
        {
          id: "reboiler-product-2",
          name: "Thermosiphon Reboilers",
          category: "Thermal Equipment",
          description:
            "Circulation-based reboilers using density differences between heated and unheated fluid to promote natural process circulation.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial thermosiphon reboiler",
          },
          specs: [
            "Natural circulation arrangement",
            "Hydraulic configuration based on process conditions",
          ],
        },
        {
          id: "reboiler-product-3",
          name: "Forced Circulation Reboilers",
          category: "Thermal Equipment",
          description:
            "Reboiler arrangements using mechanical circulation to move process fluid through heat exchange equipment under controlled flow conditions.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial forced circulation reboiler",
          },
          specs: [
            "Mechanical circulation system",
            "Pump and heat exchanger configuration are application-specific",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Reboiler Engineering Services",
      intro:
        "Engineering and technical services supporting reboiler selection, thermal design and process integration.",
      items: [
        {
          title: "Thermal Duty Assessment",
          description:
            "Evaluate process heat requirements, operating conditions and vapour generation targets to establish suitable reboiler duty.",
        },
        {
          title: "Reboiler Selection and Sizing",
          description:
            "Identify appropriate reboiler configurations based on process fluid characteristics, circulation requirements and thermal conditions.",
        },
        {
          title: "Circulation System Engineering",
          description:
            "Assess natural and forced circulation arrangements and associated hydraulic requirements.",
        },
        {
          title: "Column and Utility Integration",
          description:
            "Coordinate reboiler connections, heating utilities and process interfaces with associated distillation and separation systems.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Reboiler Industrial Applications",
      intro:
        "Thermal equipment solutions for industrial operations involving distillation, separation and liquid recovery.",
      items: [
        {
          title: "Distillation Columns",
          description:
            "Reboiler systems supplying controlled thermal energy and vapour generation for industrial distillation operations.",
        },
        {
          title: "Petrochemical Processing",
          description:
            "Thermal equipment supporting hydrocarbon separation and petrochemical processing operations.",
        },
        {
          title: "Chemical Separation Systems",
          description:
            "Reboiler applications supporting chemical separation, purification and process recovery operations.",
        },
        {
          title: "Industrial Solvent Recovery",
          description:
            "Thermal systems supporting solvent recovery and purification through controlled separation processes.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Reboiler Technical Specifications",
      intro:
        "Reboiler specifications are established according to process fluid properties, thermal duty, circulation requirements and operating conditions.",
      items: [
        {
          name: "Thermal duty",
          value: "Established from process heat balance",
        },
        {
          name: "Circulation type",
          value: "Natural or forced circulation",
        },
        {
          name: "Heating medium",
          value: "Selected according to process requirements",
        },
        {
          name: "Operating pressure",
          value: "Defined by project requirements",
        },
        {
          name: "Operating temperature",
          value: "Established from process conditions",
        },
        {
          name: "Heat transfer surface",
          value: "Determined through thermal design",
        },
        {
          name: "Reboiler configuration",
          value: "Kettle, thermosiphon or forced circulation",
        },
        {
          name: "Materials of construction",
          value: "Selected based on process fluid compatibility",
        },
      ],
      note:
        "The above specifications are indicative design considerations. Actual thermal duty, heat transfer area, operating conditions and equipment dimensions must be confirmed against the approved process and mechanical design.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "Reboiler Operating Process",
      intro:
        "A representative operating sequence illustrating how reboilers generate vapour and supply thermal energy to industrial separation columns.",
      steps: [
        {
          title: "Liquid Feed",
          description:
            "Liquid from the bottom section of the distillation column enters the reboiler circulation system.",
          output: "Liquid process stream",
        },
        {
          title: "Heat Supply",
          description:
            "Thermal energy is transferred from the heating medium through the heat exchanger surface to the process fluid.",
          output: "Heated process fluid",
        },
        {
          title: "Vapour Generation",
          description:
            "A portion of the heated process liquid vaporises under the specified operating pressure and temperature conditions.",
          output: "Two-phase process stream",
        },
        {
          title: "Column Return",
          description:
            "The generated vapour and remaining liquid return to the column according to the selected reboiler configuration, supporting the separation process.",
          output: "Reboiled process stream",
        },
      ],
      note:
        "Actual circulation and vapour generation behaviour depends on reboiler configuration, process fluid properties, heat duty and operating conditions.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Reboiler Lifecycle Support",
      intro:
        "Support activities covering reboiler installation, inspection, maintenance and ongoing thermal performance.",
      items: [
        {
          title: "Installation and Commissioning Support",
          description:
            "Support equipment installation, process connections, heating utility integration and initial operational checks within the agreed project scope.",
        },
        {
          title: "Preventive Maintenance",
          description:
            "Plan periodic inspection and maintenance of heat exchange equipment, process connections and associated mechanical components.",
        },
        {
          title: "Inspection and Cleaning",
          description:
            "Evaluate heat transfer surfaces and identify cleaning and inspection requirements based on process fluid characteristics.",
        },
        {
          title: "Thermal Performance Evaluation",
          description:
            "Review heat transfer performance, circulation conditions and operating parameters to identify potential improvements.",
        },
      ],
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Reboiler Quality and Compliance",
      intro:
        "Applicable engineering codes, fabrication requirements and inspection procedures depend on reboiler configuration, operating conditions and project specifications.",
      items: [
        {
          title: "Pressure Equipment Design",
          description:
            "Identify applicable pressure equipment and mechanical design requirements according to operating conditions and jurisdiction.",
          reference: "To be confirmed per project",
        },
        {
          title: "Material and Fabrication Requirements",
          description:
            "Establish material selection, fabrication and quality requirements based on process fluid compatibility and thermal conditions.",
          reference: "Project-specific",
        },
        {
          title: "Inspection and Testing",
          description:
            "Define inspection procedures and testing requirements for equipment integrity and agreed thermal and mechanical verification.",
          reference: "Project quality plan",
        },
      ],
      note:
        "Applicable codes, standards and certification requirements must be verified against the actual equipment specification. No specific company certification is implied.",
    },

    {
      id: "downloads-resources",
      label: "Downloads & Technical Resources",
      type: "downloads-resources",
      heading: "Reboiler Technical Resources",
      intro:
        "Technical brochures, equipment datasheets, thermal design documents, general arrangement drawings and engineering documentation can be listed here when approved for public distribution.",
      items: [],
      note:
        "No downloadable technical resources have been configured for this page yet.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Reboiler Frequently Asked Questions",
      intro:
        "Common questions about industrial reboilers, their operation and thermal applications in separation processes.",
      items: [
        {
          question: "What is an industrial reboiler?",
          answer:
            "A reboiler is a heat exchange system that supplies thermal energy to the bottom section of a distillation column, generating vapour required to support the separation process.",
        },
        {
          question: "What is the difference between kettle and thermosiphon reboilers?",
          answer:
            "Kettle reboilers use a liquid holding section with a heat exchanger bundle, whereas thermosiphon reboilers use density differences to promote natural circulation of process fluid.",
        },
        {
          question: "What is a forced circulation reboiler?",
          answer:
            "A forced circulation reboiler uses a mechanical pump to circulate process liquid through the heat exchanger under controlled flow conditions.",
        },
        {
          question: "How is reboiler duty calculated?",
          answer:
            "Reboiler duty is established through process heat balance calculations considering vapour generation requirements, process fluid properties and operating conditions.",
        },
        {
          question: "Which heating mediums are used in reboilers?",
          answer:
            "Heating medium selection depends on the required thermal duty and process conditions. Common options include steam and other suitable heating fluids.",
        },
        {
          question: "What maintenance does a reboiler require?",
          answer:
            "Typical maintenance includes inspecting heat transfer surfaces, monitoring thermal performance, checking process connections and evaluating cleaning requirements.",
        },
      ],
    },
  ],
};

export default reboiler;
