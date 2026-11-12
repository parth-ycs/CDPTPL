
import type { SBUChild } from "@/data/sbus/types";

const distillationTechnology: SBUChild = {
  slug: "distillation-technology",

  hero: {
    name: "Distillation Technology",
    tagline: "Advanced Separation Processes for Industrial Applications",
    description:
      "Process engineering and separation technologies designed to recover, purify and separate components from complex liquid mixtures through controlled vapour-liquid contact.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial distillation column and separation technology",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Industrial Distillation Technology",
      description:
        "Distillation technology is widely used in chemical and petrochemical industries for separating liquid mixtures based on differences in component volatility. Process design involves evaluating feed characteristics, separation requirements, thermodynamic properties, column configuration, operating pressure and energy consumption.",
      kpis: [
        { value: "01", label: "Process Development" },
        { value: "02", label: "Separation Engineering" },
        { value: "03", label: "Process Integration" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Distillation Engineering Capabilities",
      intro:
        "Process engineering capabilities covering separation design, thermodynamic evaluation, column configuration and process optimization.",
      items: [
        {
          title: "Process Simulation and Thermodynamic Evaluation",
          description:
            "Evaluate feed characteristics, component volatility and thermodynamic properties to establish suitable separation conditions.",
        },
        {
          title: "Distillation Process Design and Configuration",
          description:
            "Develop suitable distillation configurations based on separation targets, process requirements and operating conditions.",
        },
        {
          title: "Column and Internals Selection",
          description:
            "Evaluate column configurations and suitable internal arrangements, including trays and structured or random packing.",
        },
        {
          title: "Reflux and Reboiler Duty Optimization",
          description:
            "Assess reflux requirements and reboiler duty to support separation performance and thermal efficiency.",
        },
        {
          title: "Process Integration and Heat Recovery",
          description:
            "Evaluate opportunities to integrate thermal systems and recover usable energy across connected process operations.",
        },
        {
          title: "Revamping and Debottlenecking Studies",
          description:
            "Review existing distillation systems and identify potential improvements to capacity, separation performance and operation.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Distillation Technology Solutions",
      intro:
        "Representative distillation processes and configurations for industrial separation and purification applications.",
      items: [
        {
          id: "distillation-technology-product-1",
          name: "Conventional Distillation",
          category: "Separation Technology",
          description:
            "Established vapour-liquid separation processes for recovering and purifying components from liquid mixtures.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial conventional distillation system",
          },
          specs: [
            "Vapour-liquid separation",
            "Tray or packed column configuration",
            "Designed around separation and purity requirements",
          ],
        },
        {
          id: "distillation-technology-product-2",
          name: "Vacuum Distillation",
          category: "Specialized Separation",
          description:
            "Reduced-pressure distillation processes for suitable materials requiring lower operating temperatures.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial vacuum distillation system",
          },
          specs: [
            "Reduced-pressure operation",
            "Application-specific operating temperature",
            "Designed around product thermal sensitivity",
          ],
        },
        {
          id: "distillation-technology-product-3",
          name: "Azeotropic and Extractive Distillation",
          category: "Advanced Separation",
          description:
            "Specialized separation approaches for mixtures that are difficult to separate through conventional distillation.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial azeotropic and extractive distillation process",
          },
          specs: [
            "Specialized separation configuration",
            "Solvent or entrainer selection where applicable",
            "Process-specific thermodynamic evaluation",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Distillation Engineering Services",
      intro:
        "Engineering support covering process feasibility, separation design, equipment configuration and operational optimization.",
      items: [
        {
          title: "Process Feasibility Assessment",
          description:
            "Evaluate feed composition, component volatility and separation objectives to establish process feasibility.",
        },
        {
          title: "Distillation Process Design",
          description:
            "Develop suitable column configurations, operating conditions and separation arrangements.",
        },
        {
          title: "Column and Internals Engineering",
          description:
            "Evaluate column configurations and select suitable trays, packings and associated internals.",
        },
        {
          title: "Thermal and Energy Evaluation",
          description:
            "Assess reflux requirements, reboiler duty, condenser duty and opportunities for energy optimization.",
        },
        {
          title: "Revamping and Debottlenecking",
          description:
            "Review existing distillation systems and identify opportunities to improve throughput and process performance.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Distillation Technology Applications",
      intro:
        "Distillation solutions for industrial processes involving liquid separation, component recovery and product purification.",
      items: [
        {
          title: "Chemical and Petrochemical Processing",
          description:
            "Separate and recover components from industrial chemical and petrochemical process streams.",
        },
        {
          title: "Solvent Recovery and Purification",
          description:
            "Recover reusable solvents and support purification of liquid process streams.",
        },
        {
          title: "Specialty Chemical Manufacturing",
          description:
            "Support purification and separation requirements in specialty chemical production.",
        },
        {
          title: "Industrial Liquid Separation",
          description:
            "Separate liquid mixtures according to component volatility and defined product specifications.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Distillation Technology Technical Parameters",
      intro:
        "Key process and engineering parameters considered during distillation technology selection and system design.",
      items: [
        {
          name: "Feed composition",
          value: "Defined through process stream analysis",
        },
        {
          name: "Separation requirements",
          value: "Purity and recovery targets",
        },
        {
          name: "Operating pressure",
          value: "Atmospheric, vacuum or pressurized",
        },
        {
          name: "Column configuration",
          value: "Tray or packed arrangement",
        },
        {
          name: "Thermal requirements",
          value: "Established through energy balance",
        },
        {
          name: "Reflux requirements",
          value: "Determined through process design",
        },
        {
          name: "Condenser and reboiler duties",
          value: "Established through heat and material balances",
        },
      ],
      note:
        "These are representative design parameters, not verified performance ratings. Final values require process calculations and approved project specifications.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "How Distillation Technology Works",
      intro:
        "Distillation separates components through controlled vapour-liquid contact, using differences in component volatility.",
      steps: [
        {
          title: "Feed Characterization",
          description:
            "Evaluate feed composition, physical properties, component volatility and required separation targets.",
          output: "Defined process feed basis",
        },
        {
          title: "Separation Design",
          description:
            "Develop the separation configuration, column arrangement and operating conditions.",
          output: "Process separation design",
        },
        {
          title: "Vapour-Liquid Separation",
          description:
            "Establish controlled contact between vapour and liquid phases to achieve the required component separation.",
          output: "Separated process fractions",
        },
        {
          title: "Product Recovery",
          description:
            "Recover overhead and bottom products according to the required product specifications.",
          output: "Purified product streams",
        },
      ],
      note:
        "The actual column configuration depends on the process design, feed characteristics and selected internal arrangement.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Distillation Technology Lifecycle Support",
      intro:
        "Engineering support for evaluating, maintaining and improving distillation system performance throughout its operating lifecycle.",
      items: [
        {
          title: "Process Performance Monitoring",
          description:
            "Review operating parameters, separation performance and product quality against the established design basis.",
        },
        {
          title: "Column Performance Assessment",
          description:
            "Evaluate column operation, internal condition and hydraulic performance under actual operating conditions.",
        },
        {
          title: "Operational Troubleshooting",
          description:
            "Investigate process deviations, separation limitations and thermal performance issues.",
        },
        {
          title: "Process Optimization Studies",
          description:
            "Assess opportunities to improve energy utilization, separation performance and operating reliability.",
        },
      ],
    },

    {
      id: "performance-sustainability",
      label: "Performance & Sustainability",
      type: "performance-sustainability",
      heading: "Distillation Performance Indicators",
      intro:
        "Key indicators used to evaluate separation effectiveness, energy consumption and operational performance.",
      metrics: [
        {
          title: "Separation Efficiency",
          description:
            "Evaluate product purity and component recovery against defined separation requirements.",
          category: "Performance",
        },
        {
          title: "Energy Consumption",
          description:
            "Monitor reboiler and condenser duties relative to process throughput and separation objectives.",
          category: "Energy",
        },
        {
          title: "Operational Reliability",
          description:
            "Review process stability, operating capacity and equipment performance.",
          category: "Operations",
        },
      ],
      note:
        "Performance improvements and energy savings must be established through validated process calculations and operating data.",
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Distillation Technology Quality and Compliance",
      intro:
        "Applicable engineering, equipment and process safety requirements depend on the project scope, equipment classification and jurisdiction.",
      items: [
        {
          title: "Process Design Requirements",
          description:
            "Establish process design criteria, operating conditions and separation requirements.",
          reference: "Project-specific",
        },
        {
          title: "Equipment and Material Requirements",
          description:
            "Define applicable equipment design, material compatibility and fabrication requirements.",
          reference: "Project-specific",
        },
        {
          title: "Process Safety and Inspection",
          description:
            "Review relevant process hazards, operating limits and equipment inspection requirements.",
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
      heading: "Distillation Technology Technical Resources",
      intro:
        "Technical brochures, process notes, engineering documents and approved technology resources can be listed here.",
      items: [],
      note:
        "Technical resources will be added when approved public-facing documents become available.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Distillation Technology Frequently Asked Questions",
      intro:
        "Common questions about industrial distillation processes and their applications.",
      items: [
        {
          question: "What is distillation technology used for?",
          answer:
            "Distillation is used to separate and purify components from liquid mixtures based on differences in their volatility.",
        },
        {
          question: "What are the main types of distillation?",
          answer:
            "Common approaches include conventional distillation, vacuum distillation, azeotropic distillation and extractive distillation.",
        },
        {
          question: "When is vacuum distillation preferred?",
          answer:
            "Vacuum distillation is considered for suitable materials that require reduced operating temperatures to limit thermal exposure or degradation.",
        },
        {
          question: "How is a distillation column designed?",
          answer:
            "Design depends on feed composition, separation targets, thermodynamic properties, operating pressure, column configuration and energy requirements.",
        },
        {
          question: "Can an existing distillation column be optimized?",
          answer:
            "Yes. Existing systems can be evaluated for separation performance, hydraulic limitations, energy consumption and opportunities for revamping or debottlenecking.",
        },
      ],
    },
  ],
};

export default distillationTechnology;
