
import type { SBUChild } from "@/data/sbus/types";

const environmentalTechnology: SBUChild = {
  slug: "environmental-technology",

  hero: {
    name: "Environmental Technology",
    tagline: "Process Solutions Supporting Responsible Industrial Operations",
    description:
      "Environmental process technologies for wastewater treatment, resource recovery, emission treatment and residual management across industrial operations.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial environmental treatment technology facility",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Industrial Environmental Technology",
      description:
        "Environmental technology supports industrial operations through processes for wastewater treatment, emission control, resource recovery and residual handling. Technology selection depends on stream characteristics, contaminant composition, treatment objectives, regulatory requirements, utility availability and resource recovery opportunities. Engineering evaluation establishes suitable treatment configurations that address environmental and operational requirements.",
      kpis: [
        { value: "01", label: "Environmental Treatment" },
        { value: "02", label: "Resource Recovery" },
        { value: "03", label: "Process Integration" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Environmental Engineering Capabilities",
      intro:
        "Engineering capabilities covering environmental assessment, treatment system development, resource recovery and process integration.",
      items: [
        {
          title: "Environmental Process Assessment",
          description:
            "Evaluate wastewater and gas stream characteristics, contaminant composition and treatment objectives to establish suitable process configurations.",
        },
        {
          title: "Wastewater Treatment",
          description:
            "Assess wastewater characteristics and develop treatment arrangements according to process requirements and discharge or reuse objectives.",
        },
        {
          title: "Gas and Emission Treatment",
          description:
            "Evaluate gas stream characteristics and treatment requirements for industrial emission management.",
        },
        {
          title: "Resource and Water Recovery",
          description:
            "Identify opportunities to recover water and useful resources from suitable industrial process streams.",
        },
        {
          title: "Residual and Concentrate Management",
          description:
            "Evaluate residual streams, concentrates and associated handling requirements within the treatment process.",
        },
        {
          title: "Process Integration and Monitoring",
          description:
            "Integrate environmental treatment systems with industrial operations and evaluate project-specific monitoring requirements.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Environmental Technology Solutions",
      intro:
        "Representative environmental process systems for industrial wastewater treatment, emission management and water recovery.",
      items: [
        {
          id: "environmental-technology-product-1",
          name: "Industrial Wastewater Treatment",
          category: "Water Treatment",
          description:
            "Treatment process configurations designed to manage industrial wastewater according to stream characteristics and defined treatment objectives.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial wastewater treatment system",
          },
          specs: [
            "Wastewater stream characterization",
            "Application-specific treatment configuration",
            "Defined treatment and recovery objectives",
          ],
        },
        {
          id: "environmental-technology-product-2",
          name: "Emission Treatment Systems",
          category: "Emission Control",
          description:
            "Process systems designed to treat suitable industrial gas streams according to contaminant characteristics and emission treatment requirements.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial gas emission treatment system",
          },
          specs: [
            "Gas stream characterization",
            "Contaminant-specific treatment approach",
            "Project-specific operating requirements",
          ],
        },
        {
          id: "environmental-technology-product-3",
          name: "Water Recovery and Reuse Systems",
          category: "Resource Recovery",
          description:
            "Integrated process arrangements for recovering and managing water from suitable industrial streams for potential reuse.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial water recovery and reuse system",
          },
          specs: [
            "Water recovery assessment",
            "Process-specific treatment configuration",
            "Defined reuse requirements",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Environmental Engineering Services",
      intro:
        "Engineering support for environmental assessment, treatment process design, resource recovery and system integration.",
      items: [
        {
          title: "Environmental Stream Assessment",
          description:
            "Evaluate wastewater and gas stream characteristics, contaminant levels and treatment requirements.",
        },
        {
          title: "Wastewater Treatment Process Design",
          description:
            "Develop treatment configurations based on wastewater composition, flow characteristics and treatment objectives.",
        },
        {
          title: "Emission Treatment Evaluation",
          description:
            "Assess gas stream characteristics and identify suitable treatment approaches for industrial emissions.",
        },
        {
          title: "Water and Resource Recovery",
          description:
            "Evaluate recovery opportunities and develop process arrangements for suitable water and resource streams.",
        },
        {
          title: "Residual Management and Process Integration",
          description:
            "Assess residual handling requirements and integrate environmental treatment systems with industrial operations.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Environmental Technology Applications",
      intro:
        "Environmental process solutions for industrial facilities requiring wastewater management, emission treatment and resource recovery.",
      items: [
        {
          title: "Chemical and Petrochemical Facilities",
          description:
            "Address wastewater and emission treatment requirements associated with chemical and petrochemical operations.",
        },
        {
          title: "Industrial Wastewater Management",
          description:
            "Support treatment and management of wastewater streams generated by industrial processes.",
        },
        {
          title: "Manufacturing Utility Systems",
          description:
            "Integrate water treatment, recovery and environmental process systems with manufacturing utilities.",
        },
        {
          title: "Industrial Emission Treatment",
          description:
            "Support treatment of industrial gas streams according to contaminant characteristics and applicable requirements.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Environmental Technology Technical Parameters",
      intro:
        "Key process and engineering parameters considered during environmental treatment technology selection and system design.",
      items: [
        {
          name: "Feed characteristics",
          value: "Established through wastewater or gas stream analysis",
        },
        {
          name: "Processing capacity",
          value: "Defined by process flow requirements",
        },
        {
          name: "Treatment objectives",
          value: "Established through project and regulatory requirements",
        },
        {
          name: "Contaminant characteristics",
          value: "Evaluated through stream composition analysis",
        },
        {
          name: "Residual management",
          value: "Determined through process evaluation",
        },
        {
          name: "Water recovery requirements",
          value: "Defined by treatment and reuse objectives",
        },
        {
          name: "Monitoring requirements",
          value: "Established according to project and regulatory needs",
        },
      ],
      note:
        "Final treatment parameters depend on stream characteristics, contaminant composition, flow rates, treatment objectives and applicable project requirements.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "How Environmental Technology Works",
      intro:
        "Environmental treatment processes begin with stream characterization, followed by technology selection, treatment operations and recovery or final handling.",
      steps: [
        {
          title: "Stream Characterization",
          description:
            "Evaluate incoming wastewater or gas streams, including flow characteristics, contaminant composition and treatment requirements.",
          output: "Defined environmental stream profile",
        },
        {
          title: "Treatment Technology Selection",
          description:
            "Identify suitable treatment technologies based on stream characteristics, treatment objectives and operating constraints.",
          output: "Selected treatment process",
        },
        {
          title: "Treatment and Separation",
          description:
            "Process the incoming stream through the selected treatment and separation operations.",
          output: "Treated stream and separated residuals",
        },
        {
          title: "Recovery and Final Handling",
          description:
            "Evaluate opportunities for water or resource recovery and manage remaining residual streams according to project requirements.",
          output: "Recovered resources and managed residual streams",
        },
      ],
      note:
        "The actual treatment sequence depends on the incoming stream, selected technology, treatment objectives and applicable requirements.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Environmental System Lifecycle Support",
      intro:
        "Engineering support for evaluating treatment performance, managing process variations and improving environmental system operation.",
      items: [
        {
          title: "Treatment Performance Assessment",
          description:
            "Review treatment results against established process objectives and applicable requirements.",
        },
        {
          title: "Operational Troubleshooting",
          description:
            "Investigate treatment deviations associated with feed variations, contaminant characteristics and operating conditions.",
        },
        {
          title: "Resource Recovery Evaluation",
          description:
            "Assess opportunities to improve water and resource recovery from suitable industrial streams.",
        },
        {
          title: "Process Monitoring and Optimization",
          description:
            "Review monitoring requirements and identify opportunities to improve treatment consistency and process integration.",
        },
      ],
    },

    {
      id: "performance-sustainability",
      label: "Performance & Sustainability",
      type: "performance-sustainability",
      heading: "Environmental Performance and Resource Efficiency",
      intro:
        "Environmental treatment systems can be evaluated through treatment effectiveness, resource recovery, residual management and operational performance.",
      metrics: [
        {
          title: "Treatment Effectiveness",
          description:
            "Evaluate treatment results against defined contaminant removal and process objectives.",
          category: "Performance",
        },
        {
          title: "Water Recovery and Reuse",
          description:
            "Assess opportunities to recover water from suitable industrial streams for potential reuse.",
          category: "Resource Recovery",
        },
        {
          title: "Residual Management",
          description:
            "Evaluate residual and concentrate streams and their associated handling requirements.",
          category: "Sustainability",
        },
        {
          title: "Emission Treatment",
          description:
            "Review gas treatment performance against established process and applicable emission requirements.",
          category: "Environmental",
        },
      ],
      note:
        "Treatment efficiencies, recovery rates and environmental improvements must be established through project-specific analysis and validated operating data.",
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Environmental Engineering Compliance",
      intro:
        "Applicable environmental, equipment and process requirements depend on stream characteristics, treatment objectives and project jurisdiction.",
      items: [
        {
          title: "Environmental Treatment Requirements",
          description:
            "Establish treatment objectives and relevant requirements based on stream characteristics and project scope.",
          reference: "Project-specific",
        },
        {
          title: "Equipment and Material Requirements",
          description:
            "Define equipment construction and material compatibility according to the process stream and operating conditions.",
          reference: "Project-specific",
        },
        {
          title: "Monitoring and Regulatory Requirements",
          description:
            "Identify applicable monitoring and regulatory requirements for the intended treatment and discharge or reuse application.",
          reference: "To be confirmed per project",
        },
      ],
      note:
        "Applicable environmental regulations, standards and certifications must be confirmed for the project location and treatment scope. No unverified certification or compliance claims are made.",
    },

    {
      id: "downloads-resources",
      label: "Downloads & Technical Resources",
      type: "downloads-resources",
      heading: "Environmental Technology Technical Resources",
      intro:
        "Technical brochures, treatment documentation, engineering notes and approved environmental technology resources can be listed here.",
      items: [],
      note:
        "Technical resources will be added when approved public-facing documents become available.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Environmental Technology Frequently Asked Questions",
      intro:
        "Common questions about industrial environmental treatment systems and resource recovery processes.",
      items: [
        {
          question: "What is environmental technology in industrial processing?",
          answer:
            "Environmental technology includes processes and systems used to treat wastewater, manage industrial emissions, recover resources and handle residual streams.",
        },
        {
          question: "What is industrial wastewater treatment?",
          answer:
            "Industrial wastewater treatment involves processing wastewater streams to meet defined treatment, discharge or reuse objectives.",
        },
        {
          question: "What are emission treatment systems used for?",
          answer:
            "Emission treatment systems process industrial gas streams to manage contaminants according to applicable treatment and emission requirements.",
        },
        {
          question: "What is water recovery and reuse?",
          answer:
            "Water recovery and reuse involves treating suitable industrial streams to recover water for potential reuse within an industrial operation.",
        },
        {
          question: "Which factors influence environmental treatment system selection?",
          answer:
            "Selection depends on stream composition, contaminant characteristics, flow rate, treatment objectives, utility availability and applicable regulatory requirements.",
        },
        {
          question: "Why is residual management important?",
          answer:
            "Treatment processes can generate residuals and concentrated streams that require suitable handling and management as part of the overall system design.",
        },
      ],
    },
  ],
};

export default environmentalTechnology;
