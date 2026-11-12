
import type { SBUChild } from "@/data/sbus/types";

const trays: SBUChild = {
  slug: "trays",

  hero: {
    name: "Trays",
    tagline: "Efficient Vapour-Liquid Contacting for Industrial Process Columns",
    description:
      "Engineered column trays designed to support controlled vapour-liquid interaction, stage-wise separation and reliable hydraulic performance in industrial processing systems.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial column trays for vapour-liquid contacting",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Industrial Column Tray Solutions",
      description:
        "Trays are internal column components that create distinct contacting stages for vapour and liquid. Vapour passes through openings in the tray deck and interacts with liquid flowing across the tray. Tray configuration is selected based on capacity, efficiency, pressure drop, turndown and process requirements.",
      kpis: [
        { value: "01", label: "Stage-wise separation" },
        { value: "02", label: "Controlled vapour-liquid contact" },
        { value: "03", label: "Hydraulic performance" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Column Tray Engineering Capabilities",
      intro:
        "Engineering capabilities focused on tray selection, hydraulic design, vapour-liquid contacting and column performance.",
      items: [
        {
          title: "Tray Type Selection and Evaluation",
          description:
            "Evaluate sieve, valve, bubble cap and specialized tray configurations against process and operating requirements.",
        },
        {
          title: "Tray Hydraulic Design Assessment",
          description:
            "Assess vapour and liquid loading, pressure drop, capacity and other hydraulic design considerations.",
        },
        {
          title: "Column Internals Engineering",
          description:
            "Coordinate tray arrangements with column geometry, internal supports and associated components.",
        },
        {
          title: "Vapour-Liquid Contacting Optimization",
          description:
            "Evaluate tray configurations to support effective vapour-liquid interaction and stage-wise mass transfer.",
        },
        {
          title: "Capacity and Pressure Drop Evaluation",
          description:
            "Review operating capacity, hydraulic limitations and pressure drop under specified process conditions.",
        },
        {
          title: "Tray Revamping and Replacement Studies",
          description:
            "Assess existing tray systems and identify potential improvements or replacement requirements.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Column Tray Product Range",
      intro:
        "Representative tray configurations designed for industrial distillation, absorption, stripping and separation applications.",
      items: [
        {
          id: "trays-product-1",
          name: "Sieve Trays",
          category: "Column Trays",
          description:
            "Perforated tray decks that allow vapour to pass through liquid for stage-wise mass transfer.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial sieve tray column internals",
          },
          specs: [
            "Perforated tray deck",
            "Vapour passage through tray openings",
            "Configuration based on hydraulic requirements",
          ],
        },
        {
          id: "trays-product-2",
          name: "Valve Trays",
          category: "Column Trays",
          description:
            "Tray configurations incorporating movable or fixed valves to regulate vapour flow through the tray deck.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial valve tray column internals",
          },
          specs: [
            "Movable or fixed valve arrangements",
            "Controlled vapour passage",
            "Designed around operating capacity requirements",
          ],
        },
        {
          id: "trays-product-3",
          name: "Bubble Cap Trays",
          category: "Column Trays",
          description:
            "Tray arrangements using bubble caps and risers to direct vapour through the liquid layer.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial bubble cap tray column internals",
          },
          specs: [
            "Bubble cap and riser arrangement",
            "Vapour discharge into the liquid layer",
            "Application-specific configuration",
          ],
        },
        {
          id: "trays-product-4",
          name: "Special Purpose Trays",
          category: "Column Trays",
          description:
            "Application-specific tray configurations developed for particular process and hydraulic requirements.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Special purpose industrial column tray",
          },
          specs: [
            "Application-specific tray geometry",
            "Process-dependent configuration",
            "Hydraulic design evaluation",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Column Tray Engineering Services",
      intro:
        "Engineering support covering tray selection, hydraulic assessment, column integration and performance optimization.",
      items: [
        {
          title: "Tray Selection and Recommendation",
          description:
            "Evaluate process requirements, vapour and liquid loads and operating conditions to identify suitable tray types.",
        },
        {
          title: "Hydraulic Design Assessment",
          description:
            "Review tray capacity, pressure drop, liquid handling and other relevant hydraulic parameters.",
        },
        {
          title: "Column Internals Design",
          description:
            "Coordinate tray arrangements with column geometry, supports and associated internals.",
        },
        {
          title: "Performance Evaluation",
          description:
            "Assess vapour-liquid contacting and stage-wise separation requirements.",
        },
        {
          title: "Revamping and Replacement",
          description:
            "Evaluate existing tray systems and develop potential modification or replacement approaches.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Column Tray Industrial Applications",
      intro:
        "Tray solutions for industrial columns requiring controlled vapour-liquid contacting and stage-wise separation.",
      items: [
        {
          title: "Distillation Columns",
          description:
            "Support stage-wise vapour-liquid interaction for component separation in industrial distillation processes.",
        },
        {
          title: "Absorption and Stripping Columns",
          description:
            "Provide contacting stages for gas-liquid mass transfer operations.",
        },
        {
          title: "Petrochemical Processing",
          description:
            "Support separation operations across petrochemical processing systems.",
        },
        {
          title: "Chemical Separation Systems",
          description:
            "Enable controlled vapour-liquid contacting in industrial chemical separation applications.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Column Tray Technical Specifications",
      intro:
        "Tray specifications are established according to process requirements, column geometry and hydraulic design conditions.",
      items: [
        {
          name: "Tray type",
          value: "Sieve, valve or bubble cap",
        },
        {
          name: "Tray spacing",
          value: "Column design-dependent",
        },
        {
          name: "Tray material",
          value: "Selected according to process compatibility",
        },
        {
          name: "Operating capacity",
          value: "Established through hydraulic calculations",
        },
        {
          name: "Pressure drop",
          value: "Determined through tray design",
        },
        {
          name: "Turndown requirements",
          value: "Process-specific",
        },
        {
          name: "Tray configuration",
          value: "Based on column geometry and operating requirements",
        },
      ],
      note:
        "Actual tray dimensions, capacity, pressure drop and material specifications must be confirmed through project-specific engineering calculations.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "How Column Trays Work",
      intro:
        "Column trays create successive contacting stages where rising vapour interacts with liquid flowing across each tray.",
      steps: [
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
      note:
        "Actual separation performance depends on tray configuration, fluid properties, operating loads and column design.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Column Tray Lifecycle Support",
      intro:
        "Support activities focused on tray condition, hydraulic performance and reliable long-term column operation.",
      items: [
        {
          title: "Installation and Commissioning",
          description:
            "Support tray installation, positioning, alignment and integration with column internals.",
        },
        {
          title: "Inspection and Maintenance",
          description:
            "Inspect tray decks, valves, bubble caps and associated components for fouling, corrosion or damage.",
        },
        {
          title: "Hydraulic Performance Review",
          description:
            "Evaluate operating capacity, pressure drop and potential hydraulic limitations.",
        },
        {
          title: "Revamping and Replacement",
          description:
            "Assess tray replacement or modification requirements based on process conditions and operating performance.",
        },
      ],
    },

    {
      id: "performance-sustainability",
      label: "Performance & Sustainability",
      type: "performance-sustainability",
      heading: "Column Tray Performance Indicators",
      intro:
        "Key indicators used to evaluate tray effectiveness, hydraulic behaviour and operational performance.",
      metrics: [
        {
          title: "Separation Efficiency",
          description:
            "Evaluate stage-wise vapour-liquid contacting against the intended separation requirements.",
          category: "Performance",
        },
        {
          title: "Operating Capacity",
          description:
            "Assess vapour and liquid handling capability under specified operating conditions.",
          category: "Hydraulics",
        },
        {
          title: "Pressure Drop",
          description:
            "Review pressure drop characteristics across the tray arrangement.",
          category: "Operations",
        },
      ],
      note:
        "Performance values must be established through tray design calculations, process simulations or operating measurements.",
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Column Tray Quality and Compliance",
      intro:
        "Applicable engineering, fabrication and inspection requirements depend on tray configuration and project specifications.",
      items: [
        {
          title: "Mechanical Design Requirements",
          description:
            "Evaluate tray structure, component arrangement and integration with the column.",
          reference: "Project-specific",
        },
        {
          title: "Material Requirements",
          description:
            "Establish material suitability based on process fluid compatibility and operating conditions.",
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
      heading: "Column Tray Technical Resources",
      intro:
        "Product brochures, tray specifications, technical drawings and approved engineering documentation can be listed here.",
      items: [],
      note:
        "No downloadable technical resources have been configured for this page yet.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Column Tray Frequently Asked Questions",
      intro:
        "Common questions about column trays and their role in industrial mass transfer applications.",
      items: [
        {
          question: "What are trays in a process column?",
          answer:
            "Trays are column internals that create distinct contacting stages where rising vapour interacts with liquid flowing across the tray.",
        },
        {
          question: "What are the common types of column trays?",
          answer:
            "Common types include sieve trays, valve trays, bubble cap trays and application-specific tray configurations.",
        },
        {
          question: "How do trays support separation?",
          answer:
            "Trays promote vapour-liquid interaction at successive stages, enabling mass transfer and component separation.",
        },
        {
          question: "How is a tray type selected?",
          answer:
            "Selection depends on vapour and liquid loads, separation objectives, pressure drop, capacity, turndown requirements and process conditions.",
        },
        {
          question: "Can existing column trays be replaced?",
          answer:
            "Yes. Replacement can be evaluated by reviewing existing tray geometry, operating conditions, hydraulic performance and separation requirements.",
        },
      ],
    },
  ],
};

export default trays;