
import type { SBUChild } from "@/data/sbus/types";

const evaporationTechnology: SBUChild = {
  slug: "evaporation-technology",

  hero: {
    name: "Evaporation Technology",
    tagline: "Efficient Concentration and Recovery Through Thermal Processing",
    description:
      "Industrial evaporation technologies designed to concentrate liquids, recover valuable components and manage process streams through controlled vaporization.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial evaporation and thermal processing system",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Industrial Evaporation Technology",
      description:
        "Evaporation technology removes a portion of the solvent from a liquid stream to increase the concentration of the remaining components. System selection depends on product sensitivity, viscosity, fouling characteristics, processing capacity, utility requirements and energy consumption. Suitable configurations are developed to meet concentration targets while addressing process and operating requirements.",
      kpis: [
        { value: "01", label: "Liquid Concentration" },
        { value: "02", label: "Thermal Processing" },
        { value: "03", label: "Resource Recovery" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Evaporation Engineering Capabilities",
      intro:
        "Process engineering capabilities covering evaporation assessment, thermal design, energy optimization and product recovery.",
      items: [
        {
          title: "Evaporation Process Assessment",
          description:
            "Evaluate feed characteristics, concentration requirements, product properties and process conditions to establish a suitable evaporation approach.",
        },
        {
          title: "Single and Multiple Effect Design",
          description:
            "Develop suitable evaporation configurations based on processing capacity, thermal requirements and utility availability.",
        },
        {
          title: "Thermal and Energy Balance",
          description:
            "Evaluate heat requirements, vapour generation and energy utilization through process-specific thermal calculations.",
        },
        {
          title: "Vacuum Evaporation",
          description:
            "Assess reduced-pressure operation for applications where lower boiling temperatures are required.",
        },
        {
          title: "Vapour Recompression Assessment",
          description:
            "Evaluate mechanical vapour recompression opportunities for recovering and reusing generated vapour energy.",
        },
        {
          title: "Concentrate and Condensate Recovery",
          description:
            "Develop process arrangements for recovering concentrated products and managing generated condensate streams.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Evaporation Technology Solutions",
      intro:
        "Representative evaporation processes for industrial concentration, solvent removal and thermal recovery applications.",
      items: [
        {
          id: "evaporation-technology-product-1",
          name: "Multiple Effect Evaporation",
          category: "Evaporation Systems",
          description:
            "Evaporation configuration using multiple effects to utilize generated vapour energy across successive stages of concentration.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial multiple effect evaporation system",
          },
          specs: [
            "Multiple-effect process configuration",
            "Thermal energy integration",
            "Designed around feed and concentration requirements",
          ],
        },
        {
          id: "evaporation-technology-product-2",
          name: "Vacuum Evaporation",
          category: "Specialized Evaporation",
          description:
            "Reduced-pressure evaporation processes for suitable applications requiring lower operating temperatures.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial vacuum evaporation system",
          },
          specs: [
            "Reduced-pressure operation",
            "Application-specific boiling conditions",
            "Designed around product characteristics",
          ],
        },
        {
          id: "evaporation-technology-product-3",
          name: "Mechanical Vapour Recompression",
          category: "Energy Recovery",
          description:
            "Vapour recompression technology that evaluates opportunities to reuse generated vapour as a thermal energy source within the evaporation process.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Mechanical vapour recompression system",
          },
          specs: [
            "Mechanical vapour recompression",
            "Vapour energy reuse",
            "Project-specific thermal integration",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Evaporation Engineering Services",
      intro:
        "Engineering support for evaporation process development, thermal evaluation, equipment configuration and resource recovery.",
      items: [
        {
          title: "Process Feasibility Assessment",
          description:
            "Evaluate feed properties, concentration targets and operating requirements to establish evaporation process feasibility.",
        },
        {
          title: "Evaporation System Design",
          description:
            "Assess single-effect and multiple-effect configurations according to process capacity and thermal requirements.",
        },
        {
          title: "Thermal and Energy Analysis",
          description:
            "Develop heat and material balances to evaluate evaporation duty, vapour generation and utility consumption.",
        },
        {
          title: "Vacuum System Evaluation",
          description:
            "Assess reduced-pressure operating conditions for suitable product and process requirements.",
        },
        {
          title: "Vapour and Condensate Recovery",
          description:
            "Evaluate vapour recompression, condensate recovery and opportunities for improved resource utilization.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Evaporation Technology Applications",
      intro:
        "Evaporation solutions for industrial processes involving liquid concentration, solvent removal and recovery.",
      items: [
        {
          title: "Chemical Concentration",
          description:
            "Concentrate chemical process streams to meet defined product and downstream processing requirements.",
        },
        {
          title: "Industrial Wastewater Concentration",
          description:
            "Reduce liquid volume and concentrate suitable wastewater streams for further treatment or recovery.",
        },
        {
          title: "Food and Ingredient Processing",
          description:
            "Support liquid concentration processes where product characteristics and thermal sensitivity influence system selection.",
        },
        {
          title: "Solvent and Liquid Recovery",
          description:
            "Support recovery and management of process liquids through controlled evaporation and condensation.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Evaporation Technical Parameters",
      intro:
        "Key process and thermal parameters considered during evaporation technology selection and system design.",
      items: [
        {
          name: "Feed concentration",
          value: "Established through feed analysis",
        },
        {
          name: "Final concentration",
          value: "Defined by product requirements",
        },
        {
          name: "Processing capacity",
          value: "Established through material balance",
        },
        {
          name: "Heating medium",
          value: "Selected according to thermal duty",
        },
        {
          name: "Operating pressure",
          value: "Atmospheric or reduced pressure",
        },
        {
          name: "Product characteristics",
          value: "Viscosity, thermal sensitivity and fouling behaviour",
        },
        {
          name: "Energy requirements",
          value: "Evaluated through thermal and energy balance",
        },
      ],
      note:
        "Final operating parameters depend on feed composition, product characteristics, required concentration, selected configuration and project-specific engineering calculations.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "How Evaporation Technology Works",
      intro:
        "Evaporation increases the concentration of a liquid stream by supplying thermal energy to vaporize a portion of its solvent.",
      steps: [
        {
          title: "Feed Preparation",
          description:
            "Characterize the incoming liquid stream and establish feed composition, concentration and processing requirements.",
          output: "Prepared process feed",
        },
        {
          title: "Thermal Energy Supply",
          description:
            "Supply thermal energy through the selected heating medium according to the evaporation duty.",
          output: "Heated process stream",
        },
        {
          title: "Controlled Vaporization",
          description:
            "Vaporize a portion of the solvent under defined operating conditions to increase the concentration of the remaining liquid.",
          output: "Concentrated liquid and generated vapour",
        },
        {
          title: "Product and Vapour Recovery",
          description:
            "Recover the concentrated product and manage generated vapour and condensate through the selected process arrangement.",
          output: "Recovered concentrate and vapour streams",
        },
      ],
      note:
        "The actual process arrangement depends on feed properties, concentration targets, operating pressure and the selected evaporation configuration.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Evaporation System Lifecycle Support",
      intro:
        "Engineering support for evaluating evaporation performance, addressing operating challenges and improving process efficiency.",
      items: [
        {
          title: "Process Performance Assessment",
          description:
            "Review concentration performance, processing capacity and operating conditions against established process requirements.",
        },
        {
          title: "Thermal Performance Evaluation",
          description:
            "Assess heat utilization, evaporation duty and thermal system operation.",
        },
        {
          title: "Operational Troubleshooting",
          description:
            "Investigate process deviations associated with fouling, viscosity, concentration and operating conditions.",
        },
        {
          title: "Energy Optimization",
          description:
            "Evaluate opportunities involving multiple-effect operation, vapour recompression and thermal integration.",
        },
      ],
    },

    {
      id: "performance-sustainability",
      label: "Performance & Sustainability",
      type: "performance-sustainability",
      heading: "Evaporation Performance and Resource Efficiency",
      intro:
        "Evaporation systems can be evaluated through concentration performance, thermal energy utilization and recovery of process resources.",
      metrics: [
        {
          title: "Concentration Performance",
          description:
            "Evaluate the achieved product concentration against the required process specification.",
          category: "Performance",
        },
        {
          title: "Thermal Energy Utilization",
          description:
            "Assess energy consumption and opportunities for improved heat utilization through suitable evaporation configurations.",
          category: "Energy",
        },
        {
          title: "Vapour Energy Recovery",
          description:
            "Evaluate opportunities to reuse generated vapour through multiple-effect arrangements or mechanical vapour recompression.",
          category: "Recovery",
        },
        {
          title: "Liquid Resource Recovery",
          description:
            "Assess condensate recovery and process stream management to support improved resource utilization.",
          category: "Sustainability",
        },
      ],
      note:
        "Actual energy savings, recovery rates and process improvements must be established through project-specific calculations and operating data.",
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Evaporation Engineering and Compliance",
      intro:
        "Applicable design, equipment and process safety requirements depend on the evaporation system, operating conditions and project jurisdiction.",
      items: [
        {
          title: "Process Design Requirements",
          description:
            "Establish feed conditions, concentration targets, thermal requirements and operating limits.",
          reference: "Project-specific",
        },
        {
          title: "Equipment and Material Requirements",
          description:
            "Define equipment construction and material compatibility based on process fluid characteristics and operating conditions.",
          reference: "Project-specific",
        },
        {
          title: "Process Safety and Operating Requirements",
          description:
            "Evaluate relevant operating conditions, pressure requirements and process safety considerations.",
          reference: "To be confirmed per project",
        },
      ],
      note:
        "Applicable standards and certifications must be confirmed against the equipment specification and project requirements. No unverified certification claims are made.",
    },

    {
      id: "downloads-resources",
      label: "Downloads & Technical Resources",
      type: "downloads-resources",
      heading: "Evaporation Technology Technical Resources",
      intro:
        "Technical brochures, equipment documentation, process notes and approved evaporation technology resources can be listed here.",
      items: [],
      note:
        "Technical resources will be added when approved public-facing documents become available.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Evaporation Technology Frequently Asked Questions",
      intro:
        "Common questions about industrial evaporation systems and their applications.",
      items: [
        {
          question: "What is evaporation technology?",
          answer:
            "Evaporation technology removes a portion of the solvent from a liquid stream through controlled vaporization, increasing the concentration of the remaining components.",
        },
        {
          question: "What are the main types of evaporation systems?",
          answer:
            "Common configurations include multiple-effect evaporation, vacuum evaporation and mechanical vapour recompression systems.",
        },
        {
          question: "What is multiple-effect evaporation?",
          answer:
            "Multiple-effect evaporation uses successive evaporation stages to utilize vapour generated in one effect as a heating source for another effect.",
        },
        {
          question: "When is vacuum evaporation preferred?",
          answer:
            "Vacuum evaporation is considered when reduced operating pressure and lower boiling temperatures are required by the product or process.",
        },
        {
          question: "What is mechanical vapour recompression?",
          answer:
            "Mechanical vapour recompression uses mechanical energy to increase the pressure and temperature of generated vapour so it can be reused as a heating medium.",
        },
        {
          question: "Which factors influence evaporation system selection?",
          answer:
            "Selection depends on feed concentration, final concentration, viscosity, product sensitivity, fouling characteristics, processing capacity and available utilities.",
        },
      ],
    },
  ],
};

export default evaporationTechnology;
