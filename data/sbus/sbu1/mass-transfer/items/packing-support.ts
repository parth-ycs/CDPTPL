
import type { SBUChild } from "@/data/sbus/types";

const packingSupport: SBUChild = {
  slug: "packing-support",

  hero: {
    name: "Packing Support",
    tagline: "Structural Support Systems for Reliable Packed Column Operation",
    description:
      "Engineered packing support systems designed to carry packing loads, maintain column internals alignment and provide suitable vapour-liquid passage within industrial packed columns.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial packed column packing support system",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Industrial Packing Support Systems",
      description:
        "Packing support systems form the structural foundation for packed column sections. They support the weight of packing material and associated liquid holdup while allowing vapour to pass through the support structure. Design considerations include mechanical loading, hydraulic capacity, material compatibility and column geometry.",
      kpis: [
        { value: "01", label: "Structural load support" },
        { value: "02", label: "Hydraulic flow integration" },
        { value: "03", label: "Column-specific engineering" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Packing Support Engineering Capabilities",
      intro:
        "Engineering capabilities focused on structural integrity, load distribution and hydraulic integration within packed columns.",
      items: [
        {
          title: "Packing Support Configuration Selection",
          description:
            "Evaluate column geometry, packing arrangement and operating requirements to identify suitable support configurations.",
        },
        {
          title: "Mechanical Load Assessment",
          description:
            "Assess packing weight, liquid holdup and other applicable loads to establish structural design requirements.",
        },
        {
          title: "Hydraulic Capacity Evaluation",
          description:
            "Evaluate vapour and liquid passage through the support structure to support column hydraulic performance.",
        },
        {
          title: "Column Internals Structural Integration",
          description:
            "Coordinate support structures with the column shell, packing sections and associated internals.",
        },
        {
          title: "Support Grid and Beam Arrangement",
          description:
            "Develop suitable grid, beam and structural arrangements for transferring loads across the column.",
        },
        {
          title: "Existing Support System Assessment",
          description:
            "Review existing support arrangements for structural condition, loading requirements and operational suitability.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Packing Support Product Range",
      intro:
        "Representative structural support configurations designed for packed columns and industrial separation applications.",
      items: [
        {
          id: "packing-support-product-1",
          name: "Grid Type Packing Supports",
          category: "Packing Support",
          description:
            "Structural grid arrangements designed to support packing while providing openings for vapour and liquid flow.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial grid type packing support",
          },
          specs: [
            "Open grid structural arrangement",
            "Designed for packing load support",
            "Hydraulic opening requirements considered",
          ],
        },
        {
          id: "packing-support-product-2",
          name: "Beam Type Supports",
          category: "Structural Internals",
          description:
            "Support beam configurations used to distribute structural loads across the column and transfer them to supporting structures.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial beam type column support",
          },
          specs: [
            "Structural beam arrangement",
            "Load distribution across the column",
            "Designed around project loading conditions",
          ],
        },
        {
          id: "packing-support-product-3",
          name: "Support Plates",
          category: "Column Internals",
          description:
            "Engineered support plate arrangements designed to carry packing loads in suitable packed column applications.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial packed column support plate",
          },
          specs: [
            "Plate-based support configuration",
            "Column-specific dimensions",
            "Material selection based on process conditions",
          ],
        },
        {
          id: "packing-support-product-4",
          name: "High Capacity Packing Supports",
          category: "Advanced Support Systems",
          description:
            "Support arrangements evaluated for applications involving demanding mechanical and hydraulic loading conditions.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial high capacity packing support system",
          },
          specs: [
            "Designed for demanding loading conditions",
            "Structural and hydraulic evaluation",
            "Application-specific configuration",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Packing Support Engineering Services",
      intro:
        "Engineering support covering structural assessment, configuration selection and integration with packed column internals.",
      items: [
        {
          title: "Structural Design Assessment",
          description:
            "Evaluate packing loads, liquid holdup and column geometry to establish the structural design basis.",
        },
        {
          title: "Support Configuration Design",
          description:
            "Determine suitable grid, beam or plate arrangements according to project requirements.",
        },
        {
          title: "Hydraulic Performance Evaluation",
          description:
            "Review open area and flow passage requirements for vapour and liquid movement through the support structure.",
        },
        {
          title: "Column Internals Integration",
          description:
            "Coordinate packing supports with column shell geometry, packing sections and associated internals.",
        },
        {
          title: "Existing System Evaluation",
          description:
            "Assess existing support structures and identify potential structural or operational improvements.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Packing Support Industrial Applications",
      intro:
        "Packing support systems for industrial columns requiring reliable structural support and suitable hydraulic flow passage.",
      items: [
        {
          title: "Packed Distillation Columns",
          description:
            "Support structured or random packing arrangements while maintaining suitable vapour and liquid flow paths.",
        },
        {
          title: "Gas Absorption Towers",
          description:
            "Provide structural support for packed sections used in industrial gas absorption processes.",
        },
        {
          title: "Industrial Separation Columns",
          description:
            "Integrate packing support structures into columns used for industrial separation and mass transfer.",
        },
        {
          title: "Large Diameter Packed Towers",
          description:
            "Evaluate structural arrangements and load distribution requirements for large-diameter packed column applications.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Packing Support Technical Specifications",
      intro:
        "Packing support specifications are established according to column geometry, mechanical loading and hydraulic design requirements.",
      items: [
        {
          name: "Support configuration",
          value: "Grid, beam or plate arrangement",
        },
        {
          name: "Material",
          value: "Selected according to process conditions",
        },
        {
          name: "Mechanical loading",
          value: "Calculated from packing and liquid loads",
        },
        {
          name: "Column diameter",
          value: "Application-specific",
        },
        {
          name: "Open area",
          value: "Determined through hydraulic evaluation",
        },
        {
          name: "Structural design",
          value: "Based on project-specific loading conditions",
        },
        {
          name: "Column integration",
          value: "Designed around column geometry and internals arrangement",
        },
      ],
      note:
        "Specifications are representative design considerations. Actual dimensions, loading limits, materials and open area must be confirmed through approved project calculations.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "How Packing Support Systems Work",
      intro:
        "Packing support systems carry the mechanical load of packed sections while providing suitable flow passages for vapour and liquid movement.",
      steps: [
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
      note:
        "Final structural and hydraulic performance depends on packing loads, liquid holdup, column dimensions and operating conditions.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Packing Support Lifecycle Support",
      intro:
        "Support activities focused on structural reliability, inspection and continued packed column operation.",
      items: [
        {
          title: "Installation and Commissioning",
          description:
            "Coordinate support installation, positioning and alignment within the column structure.",
        },
        {
          title: "Inspection and Maintenance",
          description:
            "Inspect support components for corrosion, deformation, damage and other potential structural issues.",
        },
        {
          title: "Structural Performance Review",
          description:
            "Review the condition and load-bearing suitability of existing packing support arrangements.",
        },
        {
          title: "Replacement and Upgradation",
          description:
            "Evaluate replacement or modification requirements based on current operating conditions and structural assessments.",
        },
      ],
    },

    {
      id: "performance-sustainability",
      label: "Performance & Sustainability",
      type: "performance-sustainability",
      heading: "Packing Support Performance Indicators",
      intro:
        "Key engineering considerations used to evaluate structural reliability and hydraulic integration.",
      metrics: [
        {
          title: "Mechanical Load Capacity",
          description:
            "Evaluate the support structure against packing weight, liquid holdup and applicable design loads.",
          category: "Structural",
        },
        {
          title: "Hydraulic Open Area",
          description:
            "Assess available flow passage for vapour and liquid movement through the support structure.",
          category: "Hydraulics",
        },
        {
          title: "Structural Integrity",
          description:
            "Review structural stability and load distribution under specified operating conditions.",
          category: "Reliability",
        },
      ],
      note:
        "Actual performance values and design limits must be established through project-specific engineering calculations and verification.",
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Packing Support Quality and Compliance",
      intro:
        "Applicable engineering, fabrication and inspection requirements depend on the support configuration and project specifications.",
      items: [
        {
          title: "Mechanical Design Requirements",
          description:
            "Evaluate structural arrangement, loading conditions and integration with the column shell.",
          reference: "Project-specific",
        },
        {
          title: "Material Requirements",
          description:
            "Establish material suitability based on process fluids and operating conditions.",
          reference: "Project-specific",
        },
        {
          title: "Fabrication and Inspection",
          description:
            "Define fabrication tolerances, inspection activities and quality verification requirements.",
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
      heading: "Packing Support Technical Resources",
      intro:
        "Technical brochures, support layouts, product drawings and approved engineering documentation can be listed here.",
      items: [],
      note:
        "No downloadable technical resources have been configured for this page yet.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Packing Support Frequently Asked Questions",
      intro:
        "Common questions about packing support systems and their role in industrial packed columns.",
      items: [
        {
          question: "What is a packing support in a packed column?",
          answer:
            "A packing support is a structural column internal designed to carry the weight of packing material and associated liquid holdup while allowing vapour and liquid to pass through.",
        },
        {
          question: "Why is packing support important?",
          answer:
            "It provides structural support for the packed section, helps maintain the arrangement of column internals and provides suitable flow passages for process fluids.",
        },
        {
          question: "What are the common types of packing supports?",
          answer:
            "Common configurations include grid type supports, beam type supports, support plates and high-capacity support arrangements.",
        },
        {
          question: "How is a packing support selected?",
          answer:
            "Selection depends on column diameter, packing weight, liquid holdup, mechanical loading, hydraulic requirements and material compatibility.",
        },
        {
          question: "Can an existing packing support be replaced?",
          answer:
            "Yes. Replacement can be evaluated by reviewing the existing column geometry, structural condition, loading requirements and hydraulic operating conditions.",
        },
      ],
    },
  ],
};

export default packingSupport;
