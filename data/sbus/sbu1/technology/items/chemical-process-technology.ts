
import type { SBUChild } from "@/data/sbus/types";

const chemicalProcessTechnology: SBUChild = {
  slug: "chemical-process-technology",

  hero: {
    name: "Chemical Process Technology",
    tagline: "Integrated Process Engineering from Concept to Operation",
    description:
      "Comprehensive chemical process technologies covering process development, configuration, equipment integration and industrial production.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial chemical process technology facility",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Integrated Chemical Process Technology",
      description:
        "Chemical process technology integrates chemical engineering, thermodynamics, reaction engineering, separation processes and plant integration to develop industrial production systems. Engineering solutions consider production objectives, resource utilization, process safety and operational constraints to establish technically suitable process configurations.",
      kpis: [
        { value: "01", label: "Process Development" },
        { value: "02", label: "Engineering Integration" },
        { value: "03", label: "Process Optimization" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Chemical Process Engineering Capabilities",
      intro:
        "Engineering capabilities spanning process concept development, simulation, equipment integration and plant-level optimization.",
      items: [
        {
          title: "Process Concept Development",
          description:
            "Develop process concepts based on production objectives, feed characteristics, product requirements and operating constraints.",
        },
        {
          title: "Process Simulation and Mass-Energy Balances",
          description:
            "Evaluate process behaviour and establish material and energy balances to support engineering decisions.",
        },
        {
          title: "Process Flow Diagram Development",
          description:
            "Develop process flow diagrams to represent major process operations, equipment and material streams.",
        },
        {
          title: "Equipment Selection and Sizing",
          description:
            "Evaluate process requirements and identify suitable equipment configurations and sizing criteria.",
        },
        {
          title: "Process Optimization and Integration",
          description:
            "Assess process configurations and integration opportunities to improve resource utilization and operational performance.",
        },
        {
          title: "Process Safety and Operability Review",
          description:
            "Review process conditions, operating constraints and safety considerations during process development.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Chemical Process Technology Solutions",
      intro:
        "Representative engineering packages and integrated process systems for industrial chemical production.",
      items: [
        {
          id: "chemical-process-technology-product-1",
          name: "Process Design Packages",
          category: "Process Engineering",
          description:
            "Engineering deliverables that establish process requirements, design parameters, material and energy balances and process configurations.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial chemical process design and engineering",
          },
          specs: [
            "Process design basis",
            "Material and energy balances",
            "Process flow documentation",
          ],
        },
        {
          id: "chemical-process-technology-product-2",
          name: "Chemical Production Systems",
          category: "Production Technology",
          description:
            "Integrated process configurations designed around chemical manufacturing requirements, production objectives and operating conditions.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial chemical production system",
          },
          specs: [
            "Process-specific production configuration",
            "Equipment and process integration",
            "Defined operating requirements",
          ],
        },
        {
          id: "chemical-process-technology-product-3",
          name: "Process Integration Solutions",
          category: "Process Integration",
          description:
            "Integrated process engineering solutions connecting equipment, utilities and process operations to support efficient plant operation.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial process integration system",
          },
          specs: [
            "Process and equipment integration",
            "Utility and resource evaluation",
            "Project-specific engineering configuration",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Chemical Process Engineering Services",
      intro:
        "Engineering support from initial process development through system integration, optimization and technical verification.",
      items: [
        {
          title: "Process Concept and Feasibility",
          description:
            "Evaluate production objectives, process requirements and technical constraints to establish a suitable process concept.",
        },
        {
          title: "Process Simulation and Engineering",
          description:
            "Develop process calculations, simulations and material and energy balances to support process design.",
        },
        {
          title: "Process Flow Diagram Development",
          description:
            "Prepare process flow representations covering major equipment, process streams and operating stages.",
        },
        {
          title: "Equipment Selection and Integration",
          description:
            "Evaluate equipment requirements and develop integrated process configurations.",
        },
        {
          title: "Process Optimization and Safety Review",
          description:
            "Assess process performance, resource utilization, operating constraints and relevant safety considerations.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Chemical Process Technology Applications",
      intro:
        "Integrated process engineering solutions for industrial manufacturing, chemical production and plant development.",
      items: [
        {
          title: "Chemical and Petrochemical Manufacturing",
          description:
            "Support industrial chemical and petrochemical production through integrated process engineering.",
        },
        {
          title: "Specialty Chemical Production",
          description:
            "Develop process configurations for specialty chemical manufacturing and product-specific requirements.",
        },
        {
          title: "Industrial Material Processing",
          description:
            "Support industrial operations involving material transformation, processing and separation.",
        },
        {
          title: "Plant Development and Expansion",
          description:
            "Support process development and equipment integration for new facilities and existing plant expansions.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Chemical Process Engineering Parameters",
      intro:
        "Key engineering inputs and process parameters considered during chemical process development and system design.",
      items: [
        {
          name: "Design basis",
          value: "Established through project requirements",
        },
        {
          name: "Production capacity",
          value: "Defined by production objectives",
        },
        {
          name: "Material balance",
          value: "Developed from process stream calculations",
        },
        {
          name: "Energy balance",
          value: "Established through thermal requirements",
        },
        {
          name: "Equipment configuration",
          value: "Selected through process engineering evaluation",
        },
        {
          name: "Operating conditions",
          value: "Defined by process and equipment requirements",
        },
        {
          name: "Process safety requirements",
          value: "Evaluated according to project-specific conditions",
        },
      ],
      note:
        "Final design parameters depend on the project design basis, production objectives, process chemistry and engineering calculations.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "How Chemical Process Technology Works",
      intro:
        "Chemical process engineering translates production requirements into an integrated process configuration through systematic development, equipment selection and engineering verification.",
      steps: [
        {
          title: "Process Requirement Definition",
          description:
            "Establish production objectives, feed characteristics, product requirements and operating constraints.",
          output: "Defined process design basis",
        },
        {
          title: "Process Development",
          description:
            "Develop the process concept using engineering calculations, simulations and material and energy balances.",
          output: "Developed process configuration",
        },
        {
          title: "Equipment and System Integration",
          description:
            "Identify suitable equipment and integrate process operations and supporting systems.",
          output: "Integrated process system",
        },
        {
          title: "Engineering Verification",
          description:
            "Review process calculations, equipment requirements, operating conditions and relevant engineering constraints.",
          output: "Verified engineering design",
        },
      ],
      note:
        "The actual engineering workflow depends on project scope, process complexity and the required design deliverables.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Chemical Process Engineering Lifecycle Support",
      intro:
        "Engineering support for reviewing process performance, addressing operational constraints and improving integrated plant operations.",
      items: [
        {
          title: "Process Performance Assessment",
          description:
            "Review operating conditions and process results against established production and design requirements.",
        },
        {
          title: "Process Troubleshooting",
          description:
            "Investigate process deviations and identify potential causes across connected process operations.",
        },
        {
          title: "Plant Optimization",
          description:
            "Evaluate process configurations, equipment integration and resource utilization for improvement opportunities.",
        },
        {
          title: "Expansion and Revamping Studies",
          description:
            "Assess existing process systems and engineering requirements associated with plant modifications or capacity expansion.",
        },
      ],
    },

    {
      id: "performance-sustainability",
      label: "Performance & Sustainability",
      type: "performance-sustainability",
      heading: "Process Performance and Resource Efficiency",
      intro:
        "Integrated chemical process systems can be evaluated through production performance, energy utilization, resource management and operating stability.",
      metrics: [
        {
          title: "Production Performance",
          description:
            "Evaluate process output and operating results against defined production objectives.",
          category: "Performance",
        },
        {
          title: "Energy Utilization",
          description:
            "Review thermal and energy requirements across connected process operations.",
          category: "Energy",
        },
        {
          title: "Resource Utilization",
          description:
            "Assess material consumption, process integration and opportunities for improved resource management.",
          category: "Sustainability",
        },
        {
          title: "Operational Stability",
          description:
            "Evaluate process consistency, equipment integration and operating constraints.",
          category: "Operations",
        },
      ],
      note:
        "Performance improvements and resource savings must be established through project-specific engineering evaluations and operating data.",
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Chemical Process Engineering Compliance",
      intro:
        "Applicable engineering, equipment and process safety requirements depend on the process design, equipment scope and project jurisdiction.",
      items: [
        {
          title: "Process Design Requirements",
          description:
            "Establish design criteria, process calculations and operating requirements based on the approved project design basis.",
          reference: "Project-specific",
        },
        {
          title: "Equipment and Material Requirements",
          description:
            "Define equipment selection, material compatibility and engineering requirements for integrated process systems.",
          reference: "Project-specific",
        },
        {
          title: "Process Safety and Operability",
          description:
            "Review process hazards, operating constraints and relevant safety requirements during engineering development.",
          reference: "To be confirmed per project",
        },
      ],
      note:
        "Applicable standards and certifications must be confirmed against the project scope, equipment specifications and jurisdiction. No unverified certification claims are made.",
    },

    {
      id: "downloads-resources",
      label: "Downloads & Technical Resources",
      type: "downloads-resources",
      heading: "Chemical Process Technology Resources",
      intro:
        "Technical brochures, process documentation, engineering notes and approved chemical process technology resources can be listed here.",
      items: [],
      note:
        "Technical resources will be added when approved public-facing documents become available.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Chemical Process Technology Frequently Asked Questions",
      intro:
        "Common questions about chemical process engineering and integrated industrial production systems.",
      items: [
        {
          question: "What is chemical process technology?",
          answer:
            "Chemical process technology involves developing and integrating engineering systems that transform raw materials into products through chemical, physical and separation processes.",
        },
        {
          question: "What is included in chemical process engineering?",
          answer:
            "It can include process concept development, simulation, material and energy balances, process flow diagrams, equipment selection, system integration and process optimization.",
        },
        {
          question: "What is a process flow diagram?",
          answer:
            "A process flow diagram represents the major process operations, equipment and material streams within an industrial process.",
        },
        {
          question: "Why are material and energy balances important?",
          answer:
            "They establish the material flows and energy requirements of a process and provide an engineering basis for equipment selection and process design.",
        },
        {
          question: "Can chemical process technology support plant expansion?",
          answer:
            "Yes. Process engineering can support plant expansion by evaluating production objectives, existing process configurations, equipment requirements and system integration.",
        },
      ],
    },
  ],
};

export default chemicalProcessTechnology;
