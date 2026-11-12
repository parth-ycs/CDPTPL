
import type { SBUChild } from "@/data/sbus/types";

const structuredPackings: SBUChild = {
  slug: "structured-packings",

  hero: {
    name: "Structured Packings",
    tagline: "Precision-Engineered Column Internals for Efficient Separation",
    description:
      "Structured packing solutions designed to provide efficient vapour-liquid contact, improved mass transfer performance and optimized separation processes across industrial applications.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial structured packing column internals",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Industrial Structured Packing Solutions",
      description:
        "Structured packings are specialized column internals consisting of regularly arranged corrugated sheets or structured elements. They provide a large effective surface area for vapour-liquid interaction while maintaining suitable hydraulic characteristics. Their selection depends on separation requirements, fluid properties, column geometry and operating conditions.",
      kpis: [
        { value: "01", label: "Structured contact surfaces" },
        { value: "02", label: "Efficient mass transfer" },
        { value: "03", label: "Application-specific design" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Structured Packing Engineering Capabilities",
      intro:
        "Engineering capabilities focused on packing selection, mass transfer performance, hydraulic evaluation and column optimization.",
      items: [
        {
          title: "Structured Packing Selection and Evaluation",
          description:
            "Evaluate packing geometry, material and operating requirements to identify suitable structured packing configurations.",
        },
        {
          title: "Column Internals Configuration",
          description:
            "Coordinate structured packing arrangements with column geometry and associated internals.",
        },
        {
          title: "Mass Transfer Performance Assessment",
          description:
            "Evaluate effective contact surfaces and packing characteristics against separation requirements.",
        },
        {
          title: "Hydraulic Capacity Evaluation",
          description:
            "Assess vapour and liquid handling requirements under specified process conditions.",
        },
        {
          title: "Pressure Drop Analysis",
          description:
            "Review pressure drop characteristics and hydraulic limitations of the proposed packing arrangement.",
        },
        {
          title: "Column Revamping and Performance Optimization",
          description:
            "Evaluate existing packed columns and identify potential opportunities for separation and hydraulic performance improvement.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Structured Packing Product Range",
      intro:
        "Representative structured packing configurations designed for industrial separation and mass transfer applications.",
      items: [
        {
          id: "structured-packings-product-1",
          name: "Metal Structured Packings",
          category: "Structured Packing",
          description:
            "Metal corrugated packing elements designed for industrial separation columns requiring suitable mechanical strength and mass transfer performance.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial metal structured packing elements",
          },
          specs: [
            "Corrugated metal sheet construction",
            "Structured vapour-liquid contact surfaces",
            "Material selected according to process conditions",
          ],
        },
        {
          id: "structured-packings-product-2",
          name: "Plastic Structured Packings",
          category: "Structured Packing",
          description:
            "Polymeric structured packing configurations for applications requiring suitable chemical compatibility and corrosion resistance.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial plastic structured packing elements",
          },
          specs: [
            "Polymeric construction",
            "Structured packing geometry",
            "Application-specific chemical compatibility",
          ],
        },
        {
          id: "structured-packings-product-3",
          name: "High Performance Structured Packings",
          category: "Advanced Column Internals",
          description:
            "Specialized structured packing geometries developed to address demanding separation and hydraulic requirements.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "High performance industrial structured packing",
          },
          specs: [
            "Specialized packing geometry",
            "Designed around separation requirements",
            "Hydraulic performance evaluation",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Structured Packing Engineering Services",
      intro:
        "Engineering support covering packing selection, hydraulic assessment, column integration and performance optimization.",
      items: [
        {
          title: "Packing Selection and Recommendation",
          description:
            "Evaluate separation requirements, process fluids and column geometry to identify suitable packing configurations.",
        },
        {
          title: "Material Compatibility Assessment",
          description:
            "Review process conditions and fluid properties to determine appropriate packing materials.",
        },
        {
          title: "Mass Transfer Evaluation",
          description:
            "Assess packing characteristics and effective contact surfaces against the intended separation requirements.",
        },
        {
          title: "Hydraulic Performance Assessment",
          description:
            "Evaluate vapour capacity, liquid loading and pressure drop considerations.",
        },
        {
          title: "Column Revamping and Optimization",
          description:
            "Review existing column internals and assess opportunities for packing replacement or configuration improvements.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Structured Packing Industrial Applications",
      intro:
        "Structured packing solutions for industrial processes requiring efficient vapour-liquid contacting and separation.",
      items: [
        {
          title: "Chemical Processing Columns",
          description:
            "Support vapour-liquid separation and mass transfer operations across chemical processing applications.",
        },
        {
          title: "Petrochemical Separation Systems",
          description:
            "Provide structured contact surfaces for industrial separation processes in petrochemical facilities.",
        },
        {
          title: "Gas Absorption and Stripping",
          description:
            "Facilitate gas-liquid interaction in packed absorption and stripping columns.",
        },
        {
          title: "Solvent Recovery Operations",
          description:
            "Support solvent recovery and separation processes through structured vapour-liquid contacting.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Structured Packing Technical Specifications",
      intro:
        "Packing specifications are established according to separation requirements, column geometry and process operating conditions.",
      items: [
        {
          name: "Packing geometry",
          value: "Corrugated structured arrangement",
        },
        {
          name: "Material",
          value: "Metal or suitable polymer",
        },
        {
          name: "Specific surface area",
          value: "Design-dependent",
        },
        {
          name: "Void fraction",
          value: "Geometry-dependent",
        },
        {
          name: "Pressure drop",
          value: "Determined through hydraulic evaluation",
        },
        {
          name: "Operating conditions",
          value: "Process-specific",
        },
        {
          name: "Column configuration",
          value: "Based on column dimensions and separation requirements",
        },
      ],
      note:
        "Actual dimensions, surface area, void fraction and hydraulic characteristics depend on the selected packing model and manufacturer data.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "How Structured Packing Works",
      intro:
        "Structured packing provides regularly arranged contact surfaces that facilitate interaction between descending liquid and rising vapour within a column.",
      steps: [
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
      note:
        "Actual separation performance depends on packing geometry, fluid properties, flow rates and column operating conditions.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Structured Packing Lifecycle Support",
      intro:
        "Support activities focused on packing condition, column performance and reliable long-term operation.",
      items: [
        {
          title: "Installation and Commissioning",
          description:
            "Support packing installation, orientation and integration with column support structures and distributors.",
        },
        {
          title: "Inspection and Maintenance",
          description:
            "Evaluate packing condition for fouling, corrosion, deformation and other potential operational issues.",
        },
        {
          title: "Performance Evaluation",
          description:
            "Review mass transfer and hydraulic performance against intended process requirements.",
        },
        {
          title: "Replacement and Revamping",
          description:
            "Assess packing replacement and column modification requirements based on operating performance.",
        },
      ],
    },

    {
      id: "performance-sustainability",
      label: "Performance & Sustainability",
      type: "performance-sustainability",
      heading: "Structured Packing Performance Indicators",
      intro:
        "Key indicators used to evaluate structured packing effectiveness, hydraulic behaviour and operational performance.",
      metrics: [
        {
          title: "Mass Transfer Efficiency",
          description:
            "Evaluate vapour-liquid contacting effectiveness across the structured packing surfaces.",
          category: "Performance",
        },
        {
          title: "Hydraulic Capacity",
          description:
            "Assess vapour and liquid handling capability under specified operating conditions.",
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
      heading: "Structured Packing Quality and Compliance",
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
      heading: "Structured Packing Technical Resources",
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
      heading: "Structured Packing Frequently Asked Questions",
      intro:
        "Common questions about structured packing and its role in industrial mass transfer applications.",
      items: [
        {
          question: "What is structured packing?",
          answer:
            "Structured packing consists of regularly arranged corrugated sheets or structured elements installed inside a column to provide contact surfaces for vapour-liquid mass transfer.",
        },
        {
          question: "What are the common types of structured packing?",
          answer:
            "Structured packing is available in different configurations, including metal and plastic structured packing and specialized high-performance geometries.",
        },
        {
          question: "Which materials are used for structured packing?",
          answer:
            "Common material options include metals and suitable polymers. Selection depends on process fluid properties, temperature and operating conditions.",
        },
        {
          question: "Where is structured packing used?",
          answer:
            "Structured packing is used in chemical processing, petrochemical separation, gas absorption, stripping and solvent recovery operations.",
        },
        {
          question: "How is structured packing selected?",
          answer:
            "Selection depends on separation requirements, fluid properties, column geometry, hydraulic capacity, pressure drop and material compatibility.",
        },
      ],
    },
  ],
};

export default structuredPackings;
