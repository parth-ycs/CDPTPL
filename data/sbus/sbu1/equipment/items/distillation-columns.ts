
import type { SBUChild } from "@/data/sbus/types";

const distillationColumns: SBUChild = {
  slug: "distillation-columns",

  hero: {
    name: "Distillation Columns",
    tagline: "Advanced Industrial Separation Solutions",
    description:
      "Engineered distillation columns designed to separate, purify and recover process components through controlled vapour-liquid contact across a wide range of industrial applications.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial distillation column equipment",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Distillation Columns for Industrial Separation",
      description:
        "Distillation columns are essential equipment in chemical and petrochemical processing. They separate liquid mixtures based on differences in component volatility through repeated vapour-liquid contact. Their configuration depends on feed composition, separation targets, operating pressure, throughput and required product specifications.",
      kpis: [
        { value: "01", label: "Separation efficiency" },
        { value: "02", label: "Process optimisation" },
        { value: "03", label: "Product recovery" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Distillation Column Engineering Capabilities",
      intro:
        "Process and engineering capabilities focused on efficient separation, hydraulic performance and reliable column operation.",
      items: [
        {
          title: "Process Design and Separation Assessment",
          description:
            "Evaluate feed composition, component volatility and separation targets to establish the appropriate column design and process configuration.",
        },
        {
          title: "Column Configuration and Hydraulic Evaluation",
          description:
            "Assess column dimensions, vapour and liquid loading, pressure drop and hydraulic operating conditions to support reliable separation.",
        },
        {
          title: "Tray and Packing Selection",
          description:
            "Evaluate suitable tray and packing configurations based on separation efficiency, capacity, pressure drop and process requirements.",
        },
        {
          title: "Thermal System and Utility Integration",
          description:
            "Coordinate reboilers, condensers, reflux systems and associated utilities with the overall column process.",
        },
        {
          title: "Column Revamping and Debottlenecking",
          description:
            "Evaluate existing column performance and identify potential improvements in capacity, hydraulic operation and separation efficiency.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Distillation Column Product Range",
      intro:
        "Representative distillation equipment and internal configurations designed for different industrial separation requirements.",
      items: [
        {
          id: "distillation-columns-product-1",
          name: "Tray Distillation Columns",
          category: "Separation Equipment",
          description:
            "Industrial column configurations using trays to provide staged vapour-liquid contact for component separation and purification.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial tray distillation column",
          },
          specs: [
            "Tray configuration selected according to process duty",
            "Hydraulic design based on vapour and liquid loading",
          ],
        },
        {
          id: "distillation-columns-product-2",
          name: "Packed Distillation Columns",
          category: "Separation Equipment",
          description:
            "Packed column arrangements designed to provide continuous vapour-liquid contact while considering separation efficiency and pressure drop.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial packed distillation column",
          },
          specs: [
            "Packing selected according to separation requirements",
            "Distributor and support arrangements are application-specific",
          ],
        },
        {
          id: "distillation-columns-product-3",
          name: "Column Internals",
          category: "Process Internals",
          description:
            "Internal components including trays, liquid distributors, collectors and support structures designed to facilitate effective column operation.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Distillation column internal components",
          },
          specs: [
            "Internal configuration based on column design",
            "Hydraulic performance and material compatibility considered",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Distillation Column Engineering Services",
      intro:
        "Engineering and technical services supporting column design, performance improvement and process integration.",
      items: [
        {
          title: "Process Simulation and Design",
          description:
            "Evaluate process conditions and separation requirements to establish suitable column operating and design parameters.",
        },
        {
          title: "Column Sizing and Configuration",
          description:
            "Assess column dimensions, internal arrangements and hydraulic requirements based on process design conditions.",
        },
        {
          title: "Tray and Packing Engineering",
          description:
            "Evaluate and select column internals to achieve the required separation performance and operating capacity.",
        },
        {
          title: "Revamping and Performance Improvement",
          description:
            "Review existing column configurations and identify opportunities for capacity improvement and process optimisation.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Distillation Column Industrial Applications",
      intro:
        "Distillation solutions for industries involving chemical separation, purification and component recovery.",
      items: [
        {
          title: "Chemical and Petrochemical Processing",
          description:
            "Separation and purification of chemical mixtures across industrial production facilities.",
        },
        {
          title: "Solvent Recovery and Purification",
          description:
            "Recovery and purification of solvents from process mixtures for reuse or further processing.",
        },
        {
          title: "Specialty Chemical Manufacturing",
          description:
            "Separation systems supporting specialty chemical production and formulation processes.",
        },
        {
          title: "Oil and Gas Processing",
          description:
            "Distillation and fractionation applications for processing and recovering hydrocarbon components.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Distillation Column Technical Specifications",
      intro:
        "Column specifications are established according to feed characteristics, separation targets, hydraulic requirements and mechanical design conditions.",
      items: [
        {
          name: "Column configuration",
          value: "Tray or packed design",
        },
        {
          name: "Operating pressure",
          value: "Defined by process requirements",
        },
        {
          name: "Operating temperature",
          value: "Established from process conditions",
        },
        {
          name: "Column internals",
          value: "Selected according to hydraulic and separation requirements",
        },
        {
          name: "Feed composition",
          value: "Established from process material data",
        },
        {
          name: "Separation performance",
          value: "Defined by required product specifications",
        },
        {
          name: "Materials of construction",
          value: "Selected based on fluid compatibility",
        },
        {
          name: "Thermal integration",
          value: "Reboiler, condenser and reflux arrangements",
        },
      ],
      note:
        "The above specifications are indicative design considerations. Actual column dimensions, operating conditions, separation performance and material requirements must be confirmed against the approved process and mechanical design.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "Distillation Column Operating Process",
      intro:
        "A representative process sequence illustrating how distillation columns separate liquid mixtures through controlled vapour-liquid interaction.",
      steps: [
        {
          title: "Feed Introduction",
          description:
            "The process feed enters the column at the designated feed location under controlled operating conditions.",
          output: "Conditioned feed stream",
        },
        {
          title: "Vapour-Liquid Contact",
          description:
            "Rising vapour and descending liquid interact across trays or packing, promoting the separation of components based on volatility differences.",
          output: "Separated vapour and liquid phases",
        },
        {
          title: "Overhead Condensation",
          description:
            "The overhead vapour is routed to a condenser, where it is cooled and converted into liquid for product recovery and reflux circulation.",
          output: "Overhead product and reflux",
        },
        {
          title: "Bottom Product Recovery",
          description:
            "The reboiler supplies thermal energy to the column while the concentrated bottom product is withdrawn for further processing.",
          output: "Bottom product stream",
        },
      ],
      note:
        "Actual separation performance depends on feed composition, relative volatility, operating pressure, reflux ratio, column internals and thermal operating conditions.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Distillation Column Lifecycle Support",
      intro:
        "Support activities covering column installation, inspection, maintenance and operational performance improvement.",
      items: [
        {
          title: "Installation and Commissioning Support",
          description:
            "Support column installation, internal assembly, associated equipment integration and initial operational checks within the agreed project scope.",
        },
        {
          title: "Inspection and Maintenance",
          description:
            "Evaluate column internals, trays, packing supports and associated mechanical components for maintenance requirements.",
        },
        {
          title: "Column Revamping",
          description:
            "Assess existing equipment and identify opportunities to improve hydraulic capacity, separation performance and operational reliability.",
        },
        {
          title: "Performance Evaluation",
          description:
            "Review process operating parameters and identify potential improvements in product recovery, throughput and separation efficiency.",
        },
      ],
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Distillation Column Quality and Compliance",
      intro:
        "Applicable engineering codes, fabrication requirements and inspection procedures depend on column configuration, operating conditions and project specifications.",
      items: [
        {
          title: "Pressure Equipment Design",
          description:
            "Identify applicable pressure vessel and mechanical design requirements according to operating conditions and jurisdiction.",
          reference: "To be confirmed per project",
        },
        {
          title: "Fabrication and Material Requirements",
          description:
            "Establish material selection, fabrication and quality requirements based on process fluid compatibility and mechanical design.",
          reference: "Project-specific",
        },
        {
          title: "Inspection and Testing",
          description:
            "Define inspection procedures and testing requirements for mechanical integrity and equipment quality verification.",
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
      heading: "Distillation Column Technical Resources",
      intro:
        "Technical brochures, column datasheets, general arrangement drawings, internal arrangement diagrams and engineering documentation can be listed here when approved for public distribution.",
      items: [],
      note:
        "No downloadable technical resources have been configured for this page yet.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Distillation Columns Frequently Asked Questions",
      intro:
        "Common questions about industrial distillation columns, their configurations and separation applications.",
      items: [
        {
          question: "What is the purpose of a distillation column?",
          answer:
            "A distillation column separates components in a liquid mixture based on differences in their volatility through repeated vapour-liquid contact.",
        },
        {
          question: "What is the difference between tray and packed columns?",
          answer:
            "Tray columns use internal trays to create staged vapour-liquid contact, whereas packed columns use structured or random packing to provide continuous contact between the two phases.",
        },
        {
          question: "How are distillation columns designed?",
          answer:
            "Column design considers feed composition, separation targets, component volatility, operating pressure, throughput, hydraulic conditions and required product specifications.",
        },
        {
          question: "What are column internals?",
          answer:
            "Column internals are components installed inside a column to facilitate vapour-liquid contact and distribution. Examples include trays, packing, liquid distributors, collectors and support structures.",
        },
        {
          question: "What is the function of a reboiler?",
          answer:
            "A reboiler supplies heat to the bottom of a distillation column, vaporising part of the liquid and generating the rising vapour required for separation.",
        },
        {
          question: "Can existing distillation columns be upgraded?",
          answer:
            "Existing columns can be evaluated for revamping and debottlenecking opportunities. Improvements depend on the current equipment configuration, hydraulic limitations and process requirements.",
        },
      ],
    },
  ],
};

export default distillationColumns;
