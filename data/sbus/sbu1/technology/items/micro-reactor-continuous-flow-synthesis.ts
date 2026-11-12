
import type { SBUChild } from "@/data/sbus/types";

const microReactorContinuousFlowSynthesis: SBUChild = {
  slug: "micro-reactor-continuous-flow-synthesis",

  hero: {
    name: "Micro Reactor - Continuous Flow Synthesis Technology",
    tagline: "Precision Process Technology for Continuous Chemical Synthesis",
    description:
      "Continuous flow synthesis technology using compact reactor channels and controlled operating conditions to support chemical reactions with defined residence times and heat transfer characteristics.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial micro reactor and continuous flow synthesis system",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Micro Reactor and Continuous Flow Synthesis Technology",
      description:
        "Micro reactor technology uses small-volume reaction channels to process chemical reactions under controlled flow conditions. Compact channel configurations provide opportunities for heat transfer, mixing and consistent reaction environments. Technology selection and process development depend on reaction kinetics, fluid properties, channel configuration, residence time and scale-up requirements.",
      kpis: [
        { value: "01", label: "Continuous Synthesis" },
        { value: "02", label: "Controlled Reaction" },
        { value: "03", label: "Process Development" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Micro Reactor Engineering Capabilities",
      intro:
        "Engineering capabilities covering continuous flow development, reactor configuration, reaction evaluation and process integration.",
      items: [
        {
          title: "Continuous Flow Process Development",
          description:
            "Develop continuous flow process configurations based on reaction chemistry, feed characteristics and production requirements.",
        },
        {
          title: "Micro Reactor Configuration",
          description:
            "Evaluate microchannel reactor arrangements according to process requirements and application-specific operating conditions.",
        },
        {
          title: "Reaction Kinetics and Residence Time",
          description:
            "Assess reaction kinetics and residence time requirements to establish suitable continuous processing conditions.",
        },
        {
          title: "Heat and Mass Transfer Evaluation",
          description:
            "Evaluate thermal and mass transfer characteristics associated with microchannel configurations and reaction processes.",
        },
        {
          title: "Process Parameter Optimization",
          description:
            "Assess flow rates, temperature and other operating parameters to support the required reaction performance.",
        },
        {
          title: "Scale-Out and Process Integration",
          description:
            "Evaluate scale-out approaches and integration requirements for incorporating continuous flow systems into industrial operations.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Micro Reactor and Continuous Flow Solutions",
      intro:
        "Representative reactor modules and supporting systems for controlled continuous chemical synthesis.",
      items: [
        {
          id: "micro-reactor-technology-product-1",
          name: "Microchannel Reactors",
          category: "Reactor Technology",
          description:
            "Compact reactor configurations using small reaction channels to support controlled continuous chemical processing.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial microchannel reactor",
          },
          specs: [
            "Compact reaction channel configuration",
            "Application-specific channel dimensions",
            "Designed around reaction and transfer requirements",
          ],
        },
        {
          id: "micro-reactor-technology-product-2",
          name: "Continuous Flow Reactor Modules",
          category: "Continuous Flow Technology",
          description:
            "Integrated reactor modules designed to support controlled reactant flow and continuous chemical reaction processes.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Continuous flow reactor module",
          },
          specs: [
            "Continuous flow operation",
            "Defined process residence time",
            "Reaction-specific operating conditions",
          ],
        },
        {
          id: "micro-reactor-technology-product-3",
          name: "Flow Control and Dosing Systems",
          category: "Process Control",
          description:
            "Supporting systems for controlled reactant introduction and flow management in continuous synthesis applications.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial flow control and dosing system",
          },
          specs: [
            "Controlled reactant introduction",
            "Application-specific flow requirements",
            "Integration with continuous reactor systems",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Micro Reactor Engineering Services",
      intro:
        "Engineering support for continuous flow process development, reactor configuration, reaction evaluation and scale-out.",
      items: [
        {
          title: "Continuous Flow Feasibility Assessment",
          description:
            "Evaluate reaction chemistry, feed characteristics and process requirements for continuous flow applications.",
        },
        {
          title: "Micro Reactor Process Design",
          description:
            "Develop reactor configurations based on channel requirements, reaction conditions and process objectives.",
        },
        {
          title: "Reaction Kinetics and Residence Time Analysis",
          description:
            "Evaluate reaction kinetics and residence time to establish suitable continuous processing conditions.",
        },
        {
          title: "Thermal and Mass Transfer Evaluation",
          description:
            "Assess heat and mass transfer requirements associated with the selected reactor configuration.",
        },
        {
          title: "Process Optimization and Scale-Out",
          description:
            "Evaluate operating parameters and scale-out approaches for integration into larger process operations.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Micro Reactor Technology Applications",
      intro:
        "Continuous flow synthesis solutions for applications requiring controlled chemical reactions and defined processing conditions.",
      items: [
        {
          title: "Specialty Chemical Synthesis",
          description:
            "Support specialty chemical manufacturing through controlled continuous reaction processes.",
        },
        {
          title: "Fine Chemical Manufacturing",
          description:
            "Address fine chemical synthesis requirements involving application-specific reaction conditions.",
        },
        {
          title: "Pharmaceutical Intermediates",
          description:
            "Support continuous synthesis and process development for suitable pharmaceutical intermediate applications.",
        },
        {
          title: "Research and Process Development",
          description:
            "Evaluate reaction behaviour and continuous processing configurations during chemical process development.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Micro Reactor Technical Parameters",
      intro:
        "Key process and engineering parameters considered during micro reactor technology selection and system design.",
      items: [
        {
          name: "Channel dimensions",
          value: "Defined by reactor configuration",
        },
        {
          name: "Flow rate",
          value: "Established through process design",
        },
        {
          name: "Residence time",
          value: "Determined from reactor volume and flow rate",
        },
        {
          name: "Operating temperature",
          value: "Specific to reaction requirements",
        },
        {
          name: "Operating pressure",
          value: "Defined by reaction and equipment requirements",
        },
        {
          name: "Reaction kinetics",
          value: "Evaluated through process chemistry",
        },
        {
          name: "Heat and mass transfer",
          value: "Evaluated according to reactor and process configuration",
        },
      ],
      note:
        "Final operating parameters depend on reaction chemistry, fluid properties, channel configuration and project-specific engineering calculations.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "How Continuous Flow Synthesis Works",
      intro:
        "Continuous flow synthesis introduces reactants into a reactor channel where controlled flow and operating conditions support the required chemical reaction.",
      steps: [
        {
          title: "Reactant Feed Preparation",
          description:
            "Prepare and characterize reactant streams according to process composition and reaction requirements.",
          output: "Prepared reactant streams",
        },
        {
          title: "Controlled Flow Introduction",
          description:
            "Introduce reactants into the micro reactor through the selected flow control and dosing arrangement.",
          output: "Controlled reactant flow",
        },
        {
          title: "Continuous Reaction",
          description:
            "Process reactants through the reactor channels under defined flow, temperature and residence time conditions.",
          output: "Continuous reaction product stream",
        },
        {
          title: "Product Collection",
          description:
            "Collect the resulting product stream for downstream processing and evaluation.",
          output: "Collected reaction product",
        },
      ],
      note:
        "The actual process configuration depends on reaction kinetics, reactor geometry, flow conditions and downstream processing requirements.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Micro Reactor System Lifecycle Support",
      intro:
        "Engineering support for evaluating continuous reaction performance, operating conditions and process integration.",
      items: [
        {
          title: "Reaction Performance Assessment",
          description:
            "Review reaction behaviour and process results against established synthesis requirements.",
        },
        {
          title: "Flow and Operating Condition Evaluation",
          description:
            "Assess flow conditions, residence time and operating parameters during continuous processing.",
        },
        {
          title: "Operational Troubleshooting",
          description:
            "Investigate process deviations associated with feed conditions, flow behaviour and reactor operation.",
        },
        {
          title: "Process Optimization and Scale-Out",
          description:
            "Evaluate operating configurations and scale-out opportunities for industrial process integration.",
        },
      ],
    },

    {
      id: "performance-sustainability",
      label: "Performance & Sustainability",
      type: "performance-sustainability",
      heading: "Continuous Flow Performance Indicators",
      intro:
        "Micro reactor systems can be evaluated through reaction performance, process control, thermal management and operating consistency.",
      metrics: [
        {
          title: "Reaction Performance",
          description:
            "Evaluate reaction results against defined process and product requirements.",
          category: "Performance",
        },
        {
          title: "Residence Time Control",
          description:
            "Assess residence time and flow conditions according to the intended reaction requirements.",
          category: "Process",
        },
        {
          title: "Thermal Management",
          description:
            "Evaluate heat transfer requirements and temperature control during continuous reaction operation.",
          category: "Energy",
        },
        {
          title: "Process Consistency",
          description:
            "Review operating stability and consistency of continuous synthesis conditions.",
          category: "Operations",
        },
      ],
      note:
        "Performance improvements and resource savings must be established through project-specific process evaluation and validated operating data.",
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Micro Reactor Engineering Compliance",
      intro:
        "Applicable engineering, equipment and process safety requirements depend on reaction chemistry, reactor configuration and project jurisdiction.",
      items: [
        {
          title: "Process Design Requirements",
          description:
            "Establish reaction conditions, flow requirements and process design criteria.",
          reference: "Project-specific",
        },
        {
          title: "Equipment and Material Requirements",
          description:
            "Define reactor construction and material compatibility according to process fluid properties and operating conditions.",
          reference: "Project-specific",
        },
        {
          title: "Process Safety and Operating Requirements",
          description:
            "Evaluate relevant reaction hazards, pressure conditions and equipment operating limits.",
          reference: "To be confirmed per project",
        },
      ],
      note:
        "Applicable standards and certifications must be confirmed against the reactor specification, reaction chemistry and project requirements. No unverified certification claims are made.",
    },

    {
      id: "downloads-resources",
      label: "Downloads & Technical Resources",
      type: "downloads-resources",
      heading: "Micro Reactor Technical Resources",
      intro:
        "Technical brochures, reactor documentation, process notes and approved continuous flow technology resources can be listed here.",
      items: [],
      note:
        "Technical resources will be added when approved public-facing documents become available.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Micro Reactor and Continuous Flow Synthesis FAQs",
      intro:
        "Common questions about micro reactor technology and continuous chemical synthesis.",
      items: [
        {
          question: "What is micro reactor technology?",
          answer:
            "Micro reactor technology uses compact reaction channels to process chemical reactions under controlled flow conditions.",
        },
        {
          question: "What is continuous flow synthesis?",
          answer:
            "Continuous flow synthesis is a process in which reactants are continuously introduced into a reactor and processed under defined operating conditions.",
        },
        {
          question: "What are the benefits of micro reactor systems?",
          answer:
            "Micro reactor configurations provide opportunities for controlled flow, heat transfer and mixing within compact reaction channels. Actual suitability depends on reaction chemistry and process requirements.",
        },
        {
          question: "How is residence time determined?",
          answer:
            "Residence time is determined from the reactor volume and volumetric flow rate under the relevant operating conditions.",
        },
        {
          question: "Which factors influence micro reactor selection?",
          answer:
            "Selection depends on reaction kinetics, fluid properties, channel configuration, flow rate, temperature, pressure and scale-up requirements.",
        },
        {
          question: "Can micro reactor technology be scaled for industrial applications?",
          answer:
            "Scale-out and process integration can be evaluated based on reaction behaviour, reactor configuration, throughput requirements and engineering assessment.",
        },
      ],
    },
  ],
};

export default microReactorContinuousFlowSynthesis;
