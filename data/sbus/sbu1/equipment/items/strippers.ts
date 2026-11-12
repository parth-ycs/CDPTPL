
import type { SBUChild } from "@/data/sbus/types";

const strippers: SBUChild = {
  slug: "strippers",

  hero: {
    name: "Strippers",
    tagline: "Efficient Removal of Volatile Components from Process Liquids",
    description:
      "Industrial stripping columns are designed to remove selected volatile components from liquid streams through controlled gas-liquid contact and mass transfer.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial stripping column for gas-liquid separation",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Industrial Stripping and Mass Transfer Systems",
      description:
        "Stripping is a mass transfer operation used to transfer volatile components from a liquid phase into a gas or vapour phase. The process typically involves contacting the liquid with a suitable stripping medium within a column. Equipment design considers feed properties, stripping medium, operating conditions, mass transfer requirements and downstream recovery.",
      kpis: [
        { value: "01", label: "Gas-liquid contacting" },
        { value: "02", label: "Mass transfer operation" },
        { value: "03", label: "Process-specific design" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Stripping System Engineering Capabilities",
      intro:
        "Engineering capabilities covering stripping duty evaluation, column configuration, mass transfer and process stream handling.",
      items: [
        {
          title: "Stripping Duty Assessment",
          description:
            "Evaluate feed composition, target component removal and process conditions to establish the required stripping duty.",
        },
        {
          title: "Column and Internals Configuration",
          description:
            "Determine suitable column arrangements and select tray or packing configurations according to process requirements.",
        },
        {
          title: "Gas-Liquid Contact Evaluation",
          description:
            "Assess gas-liquid contacting requirements and mass transfer characteristics to support effective volatile component removal.",
        },
        {
          title: "Operating Condition and Utility Assessment",
          description:
            "Evaluate operating pressure, temperature, stripping medium requirements and associated utility considerations.",
        },
        {
          title: "Off-Gas and Recovered Component Handling",
          description:
            "Coordinate overhead stream handling and downstream arrangements for recovered or removed components.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Industrial Stripping Equipment Solutions",
      intro:
        "Stripping column configurations and integrated systems designed for different gas-liquid separation and volatile component removal requirements.",
      items: [
        {
          id: "strippers-product-1",
          name: "Packed Stripping Columns",
          category: "Separation Equipment",
          description:
            "Packed column arrangements using structured or random packing to provide gas-liquid contact and support mass transfer between process streams.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial packed stripping column",
          },
          specs: [
            "Packed column internals",
            "Continuous gas-liquid contacting",
            "Configuration based on mass transfer requirements",
          ],
        },
        {
          id: "strippers-product-2",
          name: "Tray Stripping Columns",
          category: "Separation Equipment",
          description:
            "Tray-based column systems designed for staged gas-liquid contacting and volatile component transfer from liquid to gas or vapour.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial tray stripping column",
          },
          specs: [
            "Tray-based contacting arrangement",
            "Staged gas-liquid mass transfer",
            "Tray configuration based on process duty",
          ],
        },
        {
          id: "strippers-product-3",
          name: "Stripping System Packages",
          category: "Process Systems",
          description:
            "Integrated equipment arrangements coordinating liquid feed, stripping medium supply, column operation and treated liquid handling.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Integrated industrial stripping system package",
          },
          specs: [
            "Integrated feed and stripping medium arrangements",
            "Column and supporting equipment integration",
            "Treated liquid and overhead stream handling",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Stripping Column Engineering Services",
      intro:
        "Engineering support for stripping process evaluation, column configuration, mass transfer requirements and system integration.",
      items: [
        {
          title: "Process and Separation Assessment",
          description:
            "Evaluate feed composition, volatile component characteristics and required removal performance to establish the process design basis.",
        },
        {
          title: "Column Design and Configuration",
          description:
            "Develop suitable column arrangements and determine tray or packing configurations based on the stripping duty.",
        },
        {
          title: "Mass Transfer Evaluation",
          description:
            "Assess gas-liquid contacting requirements and mass transfer considerations for the intended separation.",
        },
        {
          title: "Operating and Utility Assessment",
          description:
            "Review operating conditions, stripping medium requirements and associated process utility considerations.",
        },
        {
          title: "Process System Integration",
          description:
            "Coordinate feed distribution, stripping medium supply, treated liquid discharge and overhead stream interfaces.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Industrial Applications of Stripping Columns",
      intro:
        "Stripping technology is used across industrial processes requiring the removal of volatile components from liquid streams.",
      items: [
        {
          title: "Chemical Processing",
          description:
            "Removal and recovery of selected volatile components from liquid process streams during chemical manufacturing.",
        },
        {
          title: "Industrial Wastewater Treatment",
          description:
            "Treatment of wastewater streams through the transfer of selected volatile contaminants into a gas phase for further handling.",
        },
        {
          title: "Solvent Removal",
          description:
            "Removal of volatile solvents and other components from liquid mixtures through gas-liquid contacting.",
        },
        {
          title: "Process Liquid Purification",
          description:
            "Reduction of selected volatile components in process liquids to meet downstream processing or product requirements.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Stripping Column Technical Specifications",
      intro:
        "Column configuration and operating parameters are established through process analysis and mass transfer design.",
      items: [
        {
          name: "Feed composition",
          value: "Established through process analysis",
        },
        {
          name: "Stripping medium",
          value: "Selected for separation requirements",
        },
        {
          name: "Column internals",
          value: "Tray or packing configuration",
        },
        {
          name: "Operating pressure",
          value: "Process-specific",
        },
        {
          name: "Operating temperature",
          value: "Defined by process design",
        },
        {
          name: "Mass transfer duty",
          value: "Determined through process design",
        },
        {
          name: "Liquid and gas flow rates",
          value: "Established from process operating conditions",
        },
        {
          name: "Downstream handling",
          value: "Based on treated liquid and overhead stream requirements",
        },
      ],
      note:
        "Final column dimensions, internals, operating conditions, material selection and separation performance must be established through project-specific process and mechanical design.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "How Industrial Stripping Columns Work",
      intro:
        "Stripping columns transfer volatile components from a liquid stream into a gas or vapour stream through controlled counter-current gas-liquid contact.",
      steps: [
        {
          title: "Liquid Feed Introduction",
          description:
            "The liquid stream enters the stripping column through the feed distribution system and flows through the contacting section.",
          output: "Incoming liquid stream",
        },
        {
          title: "Stripping Medium Introduction",
          description:
            "Gas or vapour enters the column, typically from the lower section, to provide the contacting medium.",
          output: "Counter-current process streams",
        },
        {
          title: "Mass Transfer",
          description:
            "The liquid and gas phases contact through trays or packing, allowing volatile components to transfer from the liquid phase into the gas phase.",
          output: "Treated liquid and enriched gas",
        },
        {
          title: "Stream Recovery",
          description:
            "The treated liquid leaves the column while the enriched overhead stream is routed for further handling or recovery.",
          output: "Separated process streams",
        },
      ],
      note:
        "The actual process arrangement depends on the stripping medium, column configuration, feed characteristics and downstream recovery requirements.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Stripping System Lifecycle Support",
      intro:
        "Support activities focused on maintaining column condition, mass transfer performance and reliable process operation.",
      items: [
        {
          title: "Installation and Integration",
          description:
            "Coordinate column installation, process connections, feed distribution and stripping medium interfaces.",
        },
        {
          title: "Inspection and Maintenance",
          description:
            "Inspect column internals, distribution systems and associated equipment according to maintenance requirements.",
        },
        {
          title: "Performance Monitoring",
          description:
            "Review operating conditions and separation performance against established process requirements.",
        },
        {
          title: "Operational Troubleshooting",
          description:
            "Investigate potential issues involving gas-liquid contact, pressure drop, flow distribution and stripping performance.",
        },
      ],
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Stripping Column Quality and Compliance",
      intro:
        "Applicable design codes, fabrication requirements and inspection procedures depend on column configuration, operating conditions and project specifications.",
      items: [
        {
          title: "Process and Mass Transfer Design",
          description:
            "Establish process design conditions and separation requirements for the stripping operation.",
          reference: "Project-specific design basis",
        },
        {
          title: "Pressure Equipment Design",
          description:
            "Determine applicable mechanical design requirements for pressure-containing column components.",
          reference: "Applicable project codes",
        },
        {
          title: "Materials and Corrosion Requirements",
          description:
            "Select construction materials based on feed composition, stripping medium and operating conditions.",
          reference: "Project material specifications",
        },
        {
          title: "Inspection and Quality Assurance",
          description:
            "Define applicable fabrication inspection, testing and quality verification requirements.",
          reference: "Project quality plan",
        },
      ],
      note:
        "Applicable codes, standards and certifications must be confirmed against the equipment design, operating conditions and project jurisdiction. No specific company certification is implied.",
    },

    {
      id: "downloads-resources",
      label: "Downloads & Technical Resources",
      type: "downloads-resources",
      heading: "Stripping Column Technical Resources",
      intro:
        "Technical brochures, equipment datasheets, column configuration drawings and engineering documentation can be listed here when approved for public distribution.",
      items: [],
      note:
        "No downloadable technical resources have been configured for this page yet.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Stripping Columns Frequently Asked Questions",
      intro:
        "Common questions about stripping operations, column configurations and industrial applications.",
      items: [
        {
          question: "What is a stripping column?",
          answer:
            "A stripping column is a mass transfer device used to remove volatile components from a liquid stream by contacting it with a gas or vapour stripping medium.",
        },
        {
          question: "How does a stripping column work?",
          answer:
            "The liquid feed contacts a gas or vapour stream, commonly in counter-current flow. Volatile components transfer from the liquid phase into the gas phase through trays or packing.",
        },
        {
          question: "What is the difference between packed and tray stripping columns?",
          answer:
            "Packed columns use internal packing to provide continuous gas-liquid contact, while tray columns use individual trays to create staged contacting between the liquid and gas phases.",
        },
        {
          question: "Which stripping medium is used?",
          answer:
            "The stripping medium depends on the process requirements and may include steam, air, nitrogen or another suitable gas or vapour.",
        },
        {
          question: "Where are stripping columns commonly used?",
          answer:
            "They are used in chemical processing, industrial wastewater treatment, solvent removal and process liquid purification.",
        },
        {
          question: "What factors influence stripping column design?",
          answer:
            "Important factors include feed composition, component volatility, stripping medium, flow rates, operating pressure and temperature, mass transfer requirements and downstream recovery arrangements.",
        },
      ],
    },
  ],
};

export default strippers;
