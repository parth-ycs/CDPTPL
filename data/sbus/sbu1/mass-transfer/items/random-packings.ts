
import type { SBUChild } from "@/data/sbus/types";

const randomPackings: SBUChild = {
  slug: "random-packings",

  hero: {
    name: "Random Packings",
    tagline: "Reliable Mass Transfer Solutions for Industrial Separation Columns",
    description:
      "Random packing elements designed to provide effective vapour-liquid contact in absorption, stripping, distillation and other industrial mass transfer applications.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial random packing elements for separation columns",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Industrial Random Packing Solutions",
      description:
        "Random packings are loose column internals installed in bulk within a packed column. Their geometry creates contact surfaces that facilitate interaction between rising vapour and descending liquid. Different configurations and materials are available depending on process conditions, hydraulic requirements and chemical compatibility.",
      kpis: [
        { value: "01", label: "Vapour-liquid contact" },
        { value: "02", label: "Multiple packing geometries" },
        { value: "03", label: "Application-specific materials" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Random Packing Engineering Capabilities",
      intro:
        "Engineering capabilities focused on packing selection, material suitability, hydraulic performance and mass transfer requirements.",
      items: [
        {
          title: "Random Packing Selection",
          description:
            "Evaluate packing geometry, size and application requirements to identify suitable random packing configurations.",
        },
        {
          title: "Packing Material Evaluation",
          description:
            "Assess metal, plastic and ceramic material options based on process fluid properties and chemical compatibility.",
        },
        {
          title: "Column Loading Configuration",
          description:
            "Determine suitable packing arrangements and loading considerations for the intended column geometry.",
        },
        {
          title: "Mass Transfer Assessment",
          description:
            "Evaluate packing characteristics and contact surface requirements for industrial separation applications.",
        },
        {
          title: "Hydraulic and Pressure Drop Evaluation",
          description:
            "Review hydraulic capacity, liquid loading and pressure drop considerations under specified operating conditions.",
        },
        {
          title: "Existing Column Performance Improvement",
          description:
            "Assess existing packing arrangements and identify potential opportunities for column performance improvement.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Random Packing Product Range",
      intro:
        "Representative random packing configurations for industrial absorption, stripping, distillation and separation processes.",
      items: [
        {
          id: "random-packings-product-1",
          name: "Pall Rings",
          category: "Random Packing",
          description:
            "Open cylindrical packing elements with internal structural features designed to improve vapour-liquid contact.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial Pall Ring random packing",
          },
          specs: [
            "Open cylindrical geometry",
            "Internal structural features",
            "Designed for vapour-liquid contacting",
          ],
        },
        {
          id: "random-packings-product-2",
          name: "Raschig Rings",
          category: "Random Packing",
          description:
            "Cylindrical packing elements used in various industrial absorption and separation applications.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial Raschig Ring packing elements",
          },
          specs: [
            "Cylindrical packing geometry",
            "Multiple material options",
            "Suitable for industrial separation applications",
          ],
        },
        {
          id: "random-packings-product-3",
          name: "Saddles",
          category: "Random Packing",
          description:
            "Curved packing elements designed to provide effective contact surfaces and suitable hydraulic characteristics.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial saddle type random packing",
          },
          specs: [
            "Curved packing geometry",
            "Contact surface designed for mass transfer",
            "Application-specific material selection",
          ],
        },
        {
          id: "random-packings-product-4",
          name: "Plastic Random Packings",
          category: "Random Packing",
          description:
            "Polymeric packing elements for applications requiring suitable chemical compatibility and corrosion resistance.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial plastic random packing elements",
          },
          specs: [
            "Polymeric construction",
            "Material selected for chemical compatibility",
            "Suitable for applicable corrosive environments",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Random Packing Engineering Services",
      intro:
        "Engineering support covering packing selection, material evaluation, hydraulic assessment and column integration.",
      items: [
        {
          title: "Packing Selection and Recommendation",
          description:
            "Evaluate process requirements, column geometry and separation objectives to identify suitable packing types.",
        },
        {
          title: "Material Compatibility Assessment",
          description:
            "Review process fluid properties and operating conditions to determine suitable packing materials.",
        },
        {
          title: "Hydraulic Performance Evaluation",
          description:
            "Assess liquid loading, vapour capacity and pressure drop considerations for the selected packing.",
        },
        {
          title: "Column Loading and Installation",
          description:
            "Support packing loading arrangements and integration with column support structures.",
        },
        {
          title: "Existing Column Evaluation",
          description:
            "Review existing packing configurations and identify potential performance improvement opportunities.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Random Packing Industrial Applications",
      intro:
        "Random packing solutions for industrial processes requiring effective vapour-liquid contacting and separation.",
      items: [
        {
          title: "Gas Absorption Columns",
          description:
            "Provide contact surfaces for gas-liquid interaction in industrial absorption operations.",
        },
        {
          title: "Chemical Stripping Operations",
          description:
            "Support mass transfer between liquid and gas phases in stripping applications.",
        },
        {
          title: "Industrial Scrubbing Systems",
          description:
            "Enable gas-liquid contact within packed scrubbing columns for suitable treatment applications.",
        },
        {
          title: "Distillation and Separation Columns",
          description:
            "Provide packing contact surfaces for vapour-liquid separation processes.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Random Packing Technical Specifications",
      intro:
        "Packing specifications are established according to column geometry, process conditions and hydraulic design requirements.",
      items: [
        {
          name: "Packing type",
          value: "Ring, saddle or other geometry",
        },
        {
          name: "Material",
          value: "Metal, plastic or ceramic",
        },
        {
          name: "Nominal size",
          value: "Selected according to column design",
        },
        {
          name: "Specific surface area",
          value: "Packing-dependent",
        },
        {
          name: "Void fraction",
          value: "Geometry-dependent",
        },
        {
          name: "Chemical compatibility",
          value: "Process-specific",
        },
        {
          name: "Hydraulic performance",
          value: "Evaluated against operating requirements",
        },
      ],
      note:
        "Actual packing dimensions, surface area, void fraction and hydraulic characteristics depend on the selected packing model and manufacturer data.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "How Random Packing Works",
      intro:
        "Random packing elements create contact surfaces within a column, allowing counter-current vapour and liquid streams to interact during mass transfer.",
      steps: [
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
      note:
        "Actual separation performance depends on packing geometry, fluid properties, flow rates and column operating conditions.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Random Packing Lifecycle Support",
      intro:
        "Support activities focused on packing condition, column performance and reliable long-term operation.",
      items: [
        {
          title: "Installation and Commissioning",
          description:
            "Support packing loading, distribution and installation within the column internals arrangement.",
        },
        {
          title: "Inspection and Maintenance",
          description:
            "Evaluate packing condition for fouling, degradation, damage and other operational issues.",
        },
        {
          title: "Performance Evaluation",
          description:
            "Review hydraulic and mass transfer performance against intended process requirements.",
        },
        {
          title: "Replacement and Upgradation",
          description:
            "Assess packing replacement or configuration changes based on process requirements and column performance.",
        },
      ],
    },

    {
      id: "performance-sustainability",
      label: "Performance & Sustainability",
      type: "performance-sustainability",
      heading: "Random Packing Performance Indicators",
      intro:
        "Key indicators used to evaluate packing effectiveness, hydraulic behaviour and operational performance.",
      metrics: [
        {
          title: "Mass Transfer Performance",
          description:
            "Evaluate vapour-liquid contacting effectiveness across the packing surfaces.",
          category: "Performance",
        },
        {
          title: "Hydraulic Capacity",
          description:
            "Assess liquid and vapour handling capability under specified operating conditions.",
          category: "Hydraulics",
        },
        {
          title: "Pressure Drop",
          description:
            "Review pressure drop characteristics across the packed column section.",
          category: "Operations",
        },
      ],
      note:
        "Performance values must be established using selected packing data, process calculations or operating measurements.",
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Random Packing Quality and Compliance",
      intro:
        "Applicable material, manufacturing and inspection requirements depend on packing type and project specifications.",
      items: [
        {
          title: "Material Requirements",
          description:
            "Evaluate material suitability based on process fluid compatibility and operating conditions.",
          reference: "Project-specific",
        },
        {
          title: "Dimensional and Geometric Requirements",
          description:
            "Verify packing dimensions and geometry against the selected product specifications.",
          reference: "Manufacturer specifications",
        },
        {
          title: "Quality and Inspection Requirements",
          description:
            "Define inspection and quality verification requirements for supplied packing materials.",
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
      heading: "Random Packing Technical Resources",
      intro:
        "Product brochures, packing specifications, technical drawings and approved engineering documentation can be listed here.",
      items: [],
      note:
        "No downloadable technical resources have been configured for this page yet.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Random Packing Frequently Asked Questions",
      intro:
        "Common questions about random packing elements and their role in industrial mass transfer applications.",
      items: [
        {
          question: "What is random packing?",
          answer:
            "Random packing consists of loose packing elements installed in bulk within a column to provide contact surfaces for vapour-liquid mass transfer.",
        },
        {
          question: "What are the common types of random packing?",
          answer:
            "Common types include Pall Rings, Raschig Rings, saddles and other packing geometries designed for specific process requirements.",
        },
        {
          question: "Which materials are used for random packing?",
          answer:
            "Random packing is commonly available in metal, plastic and ceramic materials. Selection depends on process fluid properties and operating conditions.",
        },
        {
          question: "Where is random packing used?",
          answer:
            "Random packing is used in gas absorption, chemical stripping, industrial scrubbing, distillation and other separation processes.",
        },
        {
          question: "How is random packing selected?",
          answer:
            "Selection depends on column dimensions, process fluids, flow rates, separation objectives, hydraulic requirements and material compatibility.",
        },
      ],
    },
  ],
};

export default randomPackings;
