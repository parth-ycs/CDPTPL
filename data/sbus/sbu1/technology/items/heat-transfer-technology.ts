
import type { SBUChild } from "@/data/sbus/types";

const heatTransferTechnology: SBUChild = {
  slug: "heat-transfer-technology",

  hero: {
    name: "Heat Transfer Technology",
    tagline: "Intelligent Thermal Engineering for Industrial Processes",
    description:
      "Thermal engineering solutions for the transfer, recovery and management of industrial heat, designed to support process efficiency and utility optimization.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial heat transfer and thermal processing equipment",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Industrial Heat Transfer Technology",
      description:
        "Heat transfer technology supports heating, cooling, condensation and evaporation across industrial processes. System design depends on process conditions, fluid properties, heat transfer mechanisms, temperature differences and energy requirements. The objective is to develop suitable thermal configurations that meet process demands while optimizing energy utilization.",
      kpis: [
        { value: "01", label: "Thermal Engineering" },
        { value: "02", label: "Energy Integration" },
        { value: "03", label: "Process Optimization" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Heat Transfer Engineering Capabilities",
      intro:
        "Engineering capabilities covering thermal evaluation, equipment configuration, hydraulic design and energy integration.",
      items: [
        {
          title: "Thermal Process Simulation and Heat Balance",
          description:
            "Evaluate process heating and cooling requirements through thermal calculations, heat balances and process condition analysis.",
        },
        {
          title: "Heat Exchanger Selection and Configuration",
          description:
            "Identify suitable heat exchanger configurations based on process requirements, fluid characteristics and operating conditions.",
        },
        {
          title: "Thermal and Hydraulic Design",
          description:
            "Evaluate heat transfer requirements and hydraulic parameters to establish an appropriate equipment design.",
        },
        {
          title: "Heat Recovery and Energy Integration",
          description:
            "Identify opportunities to recover process heat and integrate thermal energy across connected operations.",
        },
        {
          title: "Cooling and Heating System Engineering",
          description:
            "Develop thermal system configurations for industrial heating, cooling and process temperature control.",
        },
        {
          title: "Thermal Performance Optimization",
          description:
            "Assess operating conditions and equipment performance to identify opportunities for improved thermal efficiency.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Heat Transfer Technology Solutions",
      intro:
        "Representative thermal systems and equipment configurations for industrial heating, cooling and energy recovery.",
      items: [
        {
          id: "heat-transfer-technology-product-1",
          name: "Shell and Tube Heat Transfer Systems",
          category: "Heat Transfer Equipment",
          description:
            "Heat transfer systems using shell-side and tube-side fluid arrangements for industrial heating, cooling and condensation applications.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial shell and tube heat exchanger",
          },
          specs: [
            "Shell-side and tube-side fluid configuration",
            "Thermal and hydraulic design",
            "Application-specific heat duty",
          ],
        },
        {
          id: "heat-transfer-technology-product-2",
          name: "Plate Heat Transfer Systems",
          category: "Heat Transfer Equipment",
          description:
            "Compact heat transfer configurations using plate-based arrangements for suitable industrial process and utility applications.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial plate heat transfer system",
          },
          specs: [
            "Plate-based heat transfer arrangement",
            "Process-specific thermal configuration",
            "Designed around fluid and operating conditions",
          ],
        },
        {
          id: "heat-transfer-technology-product-3",
          name: "Waste Heat Recovery Systems",
          category: "Energy Recovery",
          description:
            "Thermal recovery systems designed to capture and reuse available heat from industrial process streams.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial waste heat recovery system",
          },
          specs: [
            "Process heat recovery",
            "Thermal energy integration",
            "Project-specific recovery configuration",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Heat Transfer Engineering Services",
      intro:
        "Engineering support for thermal system assessment, equipment design, energy integration and process optimization.",
      items: [
        {
          title: "Thermal Feasibility Assessment",
          description:
            "Evaluate heating, cooling and heat recovery requirements based on process conditions and fluid properties.",
        },
        {
          title: "Heat Exchanger Engineering",
          description:
            "Assess suitable exchanger configurations and develop thermal and hydraulic design parameters.",
        },
        {
          title: "Heat Balance and Energy Analysis",
          description:
            "Establish process heat balances and evaluate energy requirements across thermal operations.",
        },
        {
          title: "Heat Recovery Integration",
          description:
            "Identify opportunities to recover available process heat and integrate it into other thermal requirements.",
        },
        {
          title: "Thermal System Optimization",
          description:
            "Review existing thermal systems to identify opportunities for improved energy utilization and operating performance.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Heat Transfer Technology Applications",
      intro:
        "Thermal engineering solutions for industrial processes requiring controlled heating, cooling and energy recovery.",
      items: [
        {
          title: "Chemical and Petrochemical Plants",
          description:
            "Support process heating, cooling, condensation and thermal integration across chemical and petrochemical operations.",
        },
        {
          title: "Industrial Utility Systems",
          description:
            "Address thermal requirements associated with industrial utility and supporting process systems.",
        },
        {
          title: "Process Heating and Cooling",
          description:
            "Provide thermal system configurations for maintaining process-specific temperature requirements.",
        },
        {
          title: "Energy Recovery and Integration",
          description:
            "Recover available process heat and evaluate opportunities for reuse across industrial operations.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Heat Transfer Technical Parameters",
      intro:
        "Key thermal and hydraulic parameters considered during heat transfer system selection and engineering design.",
      items: [
        {
          name: "Heat duty",
          value: "Established through process heat balance",
        },
        {
          name: "Temperature range",
          value: "Defined by process requirements",
        },
        {
          name: "Heat transfer coefficient",
          value: "Calculated from fluid and equipment conditions",
        },
        {
          name: "Pressure drop",
          value: "Determined through hydraulic design",
        },
        {
          name: "Thermal medium",
          value: "Steam, water, thermal oil or process fluids",
        },
        {
          name: "Fluid properties",
          value: "Evaluated using process stream data",
        },
        {
          name: "Equipment configuration",
          value: "Selected according to thermal and process requirements",
        },
      ],
      note:
        "Final thermal and hydraulic parameters depend on process conditions, fluid properties, equipment configuration and project-specific engineering calculations.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "How Heat Transfer Technology Works",
      intro:
        "Industrial heat transfer systems move thermal energy between process streams or between a process stream and a utility medium.",
      steps: [
        {
          title: "Thermal Requirement Assessment",
          description:
            "Evaluate process temperatures, fluid properties, heating or cooling requirements and available thermal energy.",
          output: "Defined thermal design basis",
        },
        {
          title: "Heat Transfer Configuration",
          description:
            "Select a suitable heat transfer arrangement based on process conditions and thermal requirements.",
          output: "Selected thermal system configuration",
        },
        {
          title: "Energy Exchange",
          description:
            "Transfer thermal energy between process streams or between process fluids and utility media.",
          output: "Controlled heating or cooling",
        },
        {
          title: "Process Integration",
          description:
            "Integrate the thermal system with connected process operations and evaluate heat recovery opportunities.",
          output: "Integrated thermal process",
        },
      ],
      note:
        "The actual process arrangement depends on the selected equipment, thermal medium and project-specific operating conditions.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Heat Transfer System Lifecycle Support",
      intro:
        "Engineering support for evaluating thermal performance, troubleshooting operating issues and improving energy utilization.",
      items: [
        {
          title: "Thermal Performance Assessment",
          description:
            "Review heat transfer performance against established process and equipment design requirements.",
        },
        {
          title: "Operational Troubleshooting",
          description:
            "Investigate thermal deviations, hydraulic limitations and equipment operating issues.",
        },
        {
          title: "Energy Utilization Review",
          description:
            "Evaluate thermal energy consumption and identify potential heat recovery opportunities.",
        },
        {
          title: "Process Optimization",
          description:
            "Assess equipment and process conditions to identify improvements in thermal performance and integration.",
        },
      ],
    },

    {
      id: "performance-sustainability",
      label: "Performance & Sustainability",
      type: "performance-sustainability",
      heading: "Thermal Performance and Energy Efficiency",
      intro:
        "Heat transfer system performance can be evaluated through thermal effectiveness, energy utilization and operating stability.",
      metrics: [
        {
          title: "Thermal Performance",
          description:
            "Evaluate heat transfer effectiveness against process heating and cooling requirements.",
          category: "Performance",
        },
        {
          title: "Energy Recovery",
          description:
            "Assess the potential to capture and reuse available thermal energy from industrial process streams.",
          category: "Energy",
        },
        {
          title: "Utility Optimization",
          description:
            "Review heating and cooling utility requirements to identify opportunities for improved energy utilization.",
          category: "Sustainability",
        },
        {
          title: "Operating Stability",
          description:
            "Monitor thermal and hydraulic operating conditions to support consistent process operation.",
          category: "Operations",
        },
      ],
      note:
        "Energy savings and performance improvements must be established through project-specific thermal calculations and operating data.",
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Heat Transfer Engineering and Compliance",
      intro:
        "Applicable engineering and equipment requirements depend on equipment type, operating conditions, materials and project jurisdiction.",
      items: [
        {
          title: "Thermal Design Requirements",
          description:
            "Establish heat duty, operating temperatures and thermal design criteria.",
          reference: "Project-specific",
        },
        {
          title: "Mechanical and Material Requirements",
          description:
            "Define equipment construction, material compatibility and mechanical design requirements.",
          reference: "Project-specific",
        },
        {
          title: "Hydraulic and Operating Requirements",
          description:
            "Evaluate pressure drop, fluid flow conditions and equipment operating limits.",
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
      heading: "Heat Transfer Technical Resources",
      intro:
        "Technical brochures, equipment documentation, engineering notes and approved thermal technology resources can be listed here.",
      items: [],
      note:
        "Technical resources will be added when approved public-facing documents become available.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Heat Transfer Technology Frequently Asked Questions",
      intro:
        "Common questions about industrial heat transfer systems and their applications.",
      items: [
        {
          question: "What is heat transfer technology?",
          answer:
            "Heat transfer technology involves moving thermal energy between fluids, process streams or utility media to support industrial heating, cooling, condensation and evaporation.",
        },
        {
          question: "What are common industrial heat transfer systems?",
          answer:
            "Common configurations include shell and tube heat exchangers, plate heat transfer systems and waste heat recovery systems.",
        },
        {
          question: "How is a heat exchanger selected?",
          answer:
            "Selection depends on heat duty, operating temperatures, fluid properties, pressure drop, thermal medium and process requirements.",
        },
        {
          question: "What is waste heat recovery?",
          answer:
            "Waste heat recovery involves capturing available thermal energy from industrial process streams and evaluating opportunities to reuse it in other operations.",
        },
        {
          question: "How can thermal system efficiency be improved?",
          answer:
            "Thermal performance can be evaluated through heat balance analysis, equipment assessment, utility optimization and process heat integration.",
        },
      ],
    },
  ],
};

export default heatTransferTechnology;
