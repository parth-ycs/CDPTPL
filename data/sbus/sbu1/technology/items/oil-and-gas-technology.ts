
import type { SBUChild } from "@/data/sbus/types";

const oilAndGasTechnology: SBUChild = {
  slug: "oil-and-gas-technology",

  hero: {
    name: "Oil & Gas Technology",
    tagline: "Process Technologies for Hydrocarbon Handling and Treatment",
    description:
      "Process engineering solutions for hydrocarbon separation, conditioning, treatment and recovery across industrial oil and gas operations.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial oil and gas processing facility",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Industrial Oil and Gas Process Technology",
      description:
        "Oil and gas process technology supports the separation, conditioning, treatment and recovery of hydrocarbon streams. Process design depends on feed composition, operating pressure and temperature, phase behaviour, throughput and required product specifications. Engineering evaluation establishes suitable process configurations for handling and treating hydrocarbon streams under defined operating conditions.",
      kpis: [
        { value: "01", label: "Hydrocarbon Processing" },
        { value: "02", label: "Separation and Treatment" },
        { value: "03", label: "Process Recovery" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Oil and Gas Engineering Capabilities",
      intro:
        "Engineering capabilities covering hydrocarbon process assessment, separation, conditioning, equipment integration and operational evaluation.",
      items: [
        {
          title: "Hydrocarbon Process Assessment",
          description:
            "Evaluate feed composition, fluid properties and process requirements to establish suitable hydrocarbon handling and treatment configurations.",
        },
        {
          title: "Gas and Liquid Separation",
          description:
            "Assess phase separation requirements and develop suitable process configurations for gas and liquid streams.",
        },
        {
          title: "Process Conditioning and Treatment",
          description:
            "Evaluate process conditioning and treatment requirements according to feed characteristics and downstream specifications.",
        },
        {
          title: "Heat and Mass Balance",
          description:
            "Develop process calculations to evaluate material flows, thermal requirements and operating conditions.",
        },
        {
          title: "Equipment and Utility Integration",
          description:
            "Assess equipment requirements and integrate process systems with supporting utilities and connected operations.",
        },
        {
          title: "Process Safety and Operating Review",
          description:
            "Review process operating conditions, equipment requirements and relevant safety considerations.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Oil and Gas Technology Solutions",
      intro:
        "Representative process technologies for hydrocarbon processing, separation and conditioning applications.",
      items: [
        {
          id: "oil-gas-technology-product-1",
          name: "Gas Processing Technology",
          category: "Gas Processing",
          description:
            "Process configurations for handling and treating gas streams according to feed characteristics and required downstream specifications.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial gas processing system",
          },
          specs: [
            "Gas stream characterization",
            "Process-specific treatment configuration",
            "Defined operating requirements",
          ],
        },
        {
          id: "oil-gas-technology-product-2",
          name: "Hydrocarbon Separation Technology",
          category: "Separation Technology",
          description:
            "Separation process configurations designed to handle hydrocarbon streams based on phase behaviour and operating conditions.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial hydrocarbon separation system",
          },
          specs: [
            "Gas and liquid separation",
            "Phase behaviour evaluation",
            "Application-specific process design",
          ],
        },
        {
          id: "oil-gas-technology-product-3",
          name: "Oil and Gas Conditioning Systems",
          category: "Process Conditioning",
          description:
            "Integrated process arrangements for conditioning hydrocarbon streams to meet defined process and product requirements.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial oil and gas conditioning system",
          },
          specs: [
            "Hydrocarbon stream conditioning",
            "Feed-specific process configuration",
            "Downstream specification requirements",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Oil and Gas Engineering Services",
      intro:
        "Engineering support for hydrocarbon process development, separation system design, treatment evaluation and process integration.",
      items: [
        {
          title: "Hydrocarbon Process Assessment",
          description:
            "Evaluate feed composition, phase behaviour and operating requirements to establish a suitable process design basis.",
        },
        {
          title: "Gas and Liquid Separation Design",
          description:
            "Assess phase separation requirements and develop suitable equipment and process configurations.",
        },
        {
          title: "Process Conditioning and Treatment",
          description:
            "Evaluate treatment requirements and develop process arrangements based on feed and product specifications.",
        },
        {
          title: "Material and Energy Balance",
          description:
            "Establish process stream calculations and thermal requirements to support engineering design.",
        },
        {
          title: "Equipment Integration and Safety Review",
          description:
            "Evaluate equipment and utility integration alongside relevant process safety and operating requirements.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Oil and Gas Technology Applications",
      intro:
        "Process engineering solutions for hydrocarbon handling, treatment and recovery across related industrial operations.",
      items: [
        {
          title: "Oil and Gas Facilities",
          description:
            "Support hydrocarbon handling, separation and conditioning requirements across oil and gas processing facilities.",
        },
        {
          title: "Petrochemical Operations",
          description:
            "Address hydrocarbon stream processing and separation requirements in petrochemical operations.",
        },
        {
          title: "Gas Conditioning and Treatment",
          description:
            "Support gas stream conditioning and treatment according to feed characteristics and downstream requirements.",
        },
        {
          title: "Hydrocarbon Recovery",
          description:
            "Develop process configurations for separating and recovering hydrocarbon components from industrial streams.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Oil and Gas Technical Parameters",
      intro:
        "Key process and engineering parameters considered during hydrocarbon processing technology selection and system design.",
      items: [
        {
          name: "Feed composition",
          value: "Established through hydrocarbon analysis",
        },
        {
          name: "Operating pressure",
          value: "Defined by process requirements",
        },
        {
          name: "Operating temperature",
          value: "Defined by process requirements",
        },
        {
          name: "Phase behaviour",
          value: "Evaluated through thermodynamic analysis",
        },
        {
          name: "Product specifications",
          value: "Established through downstream requirements",
        },
        {
          name: "Processing capacity",
          value: "Defined by project throughput requirements",
        },
        {
          name: "Material and energy balance",
          value: "Established through process calculations",
        },
      ],
      note:
        "Final operating parameters depend on hydrocarbon composition, phase behaviour, throughput, product specifications and project-specific engineering calculations.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "How Oil and Gas Process Technology Works",
      intro:
        "Hydrocarbon processing involves characterizing incoming streams, applying suitable conditioning and separation operations, and recovering products according to defined requirements.",
      steps: [
        {
          title: "Feed Characterization",
          description:
            "Evaluate hydrocarbon composition, fluid properties, phase behaviour and required product specifications.",
          output: "Defined hydrocarbon feed basis",
        },
        {
          title: "Process Conditioning",
          description:
            "Establish suitable process conditions and treatment arrangements based on feed characteristics.",
          output: "Conditioned process stream",
        },
        {
          title: "Separation and Treatment",
          description:
            "Apply the selected separation and treatment processes to meet defined stream requirements.",
          output: "Separated and treated streams",
        },
        {
          title: "Product Recovery",
          description:
            "Recover hydrocarbon products and manage process streams according to downstream requirements.",
          output: "Recovered product streams",
        },
      ],
      note:
        "The actual process sequence depends on feed composition, phase behaviour, selected treatment technologies and product specifications.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Oil and Gas System Lifecycle Support",
      intro:
        "Engineering support for evaluating hydrocarbon processing performance, addressing operational challenges and reviewing system requirements.",
      items: [
        {
          title: "Process Performance Assessment",
          description:
            "Review separation and treatment performance against established process and product requirements.",
        },
        {
          title: "Operational Troubleshooting",
          description:
            "Investigate process deviations associated with feed characteristics, operating conditions and phase behaviour.",
        },
        {
          title: "Equipment and Process Evaluation",
          description:
            "Assess equipment operation and process integration under actual operating conditions.",
        },
        {
          title: "Process Optimization",
          description:
            "Evaluate opportunities to improve separation, treatment and hydrocarbon recovery performance.",
        },
      ],
    },

    {
      id: "performance-sustainability",
      label: "Performance & Sustainability",
      type: "performance-sustainability",
      heading: "Hydrocarbon Processing Performance Indicators",
      intro:
        "Oil and gas process systems can be evaluated through separation performance, product quality, energy utilization and operational stability.",
      metrics: [
        {
          title: "Separation Performance",
          description:
            "Evaluate phase separation and hydrocarbon recovery against defined process requirements.",
          category: "Performance",
        },
        {
          title: "Product Quality",
          description:
            "Review treated hydrocarbon streams against established downstream product specifications.",
          category: "Quality",
        },
        {
          title: "Energy Utilization",
          description:
            "Assess thermal and utility requirements across hydrocarbon processing operations.",
          category: "Energy",
        },
        {
          title: "Operational Stability",
          description:
            "Evaluate process consistency and equipment operation under defined operating conditions.",
          category: "Operations",
        },
      ],
      note:
        "Recovery rates, energy savings and performance improvements must be established through project-specific calculations and operating data.",
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Oil and Gas Engineering Compliance",
      intro:
        "Applicable engineering, equipment and process safety requirements depend on hydrocarbon properties, equipment scope and project jurisdiction.",
      items: [
        {
          title: "Process Design Requirements",
          description:
            "Establish feed conditions, operating parameters and product specifications for the process design.",
          reference: "Project-specific",
        },
        {
          title: "Equipment and Material Requirements",
          description:
            "Define equipment construction and material compatibility based on hydrocarbon properties and operating conditions.",
          reference: "Project-specific",
        },
        {
          title: "Process Safety and Operating Requirements",
          description:
            "Evaluate relevant process hazards, operating limits and safety requirements for hydrocarbon handling.",
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
      heading: "Oil and Gas Technical Resources",
      intro:
        "Technical brochures, process documentation, engineering notes and approved oil and gas technology resources can be listed here.",
      items: [],
      note:
        "Technical resources will be added when approved public-facing documents become available.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Oil and Gas Technology Frequently Asked Questions",
      intro:
        "Common questions about hydrocarbon processing, separation and treatment technologies.",
      items: [
        {
          question: "What is oil and gas process technology?",
          answer:
            "Oil and gas process technology involves engineering systems used to handle, separate, condition, treat and recover hydrocarbon streams.",
        },
        {
          question: "Why is feed characterization important?",
          answer:
            "Feed composition and fluid properties influence phase behaviour, process selection, operating conditions and the required treatment configuration.",
        },
        {
          question: "What is hydrocarbon separation?",
          answer:
            "Hydrocarbon separation involves separating components or phases from process streams based on their physical and thermodynamic properties.",
        },
        {
          question: "What factors influence gas processing system design?",
          answer:
            "Design depends on gas composition, operating pressure and temperature, phase behaviour, processing capacity and downstream product requirements.",
        },
        {
          question: "Why is process conditioning required?",
          answer:
            "Process conditioning prepares hydrocarbon streams to meet defined operating, treatment or downstream product requirements.",
        },
      ],
    },
  ],
};

export default oilAndGasTechnology;
