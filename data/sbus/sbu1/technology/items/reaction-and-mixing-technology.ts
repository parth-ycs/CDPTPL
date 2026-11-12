
import type { SBUChild } from "@/data/sbus/types";

const reactionAndMixingTechnology: SBUChild = {
  slug: "reaction-and-mixing-technology",

  hero: {
    name: "Reaction & Mixing Technology",
    tagline: "Advanced Process Solutions for Controlled Reactions and Mixing",
    description:
      "Integrated process technologies for reactions, mixing, blending and material transformation under controlled industrial conditions.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial reaction and mixing technology",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Industrial Reaction and Mixing Technology",
      description:
        "Reaction and mixing technology combines process chemistry, fluid dynamics, heat transfer and equipment engineering to support controlled industrial reactions and material processing. System design considers reaction kinetics, residence time, mixing intensity, thermal requirements and product characteristics to establish suitable batch or continuous process configurations.",
      kpis: [
        { value: "01", label: "Reaction Engineering" },
        { value: "02", label: "Mixing and Agitation" },
        { value: "03", label: "Process Optimization" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Reaction and Mixing Engineering Capabilities",
      intro:
        "Engineering capabilities covering reaction evaluation, reactor configuration, mixing assessment and process optimization.",
      items: [
        {
          title: "Reaction Kinetics and Process Evaluation",
          description:
            "Evaluate reaction chemistry, kinetics and process requirements to establish suitable operating conditions.",
        },
        {
          title: "Reactor Configuration and Process Design",
          description:
            "Develop reactor configurations based on reaction characteristics, production requirements and operating conditions.",
        },
        {
          title: "Mixing and Agitation Assessment",
          description:
            "Evaluate mixing requirements, agitation intensity and fluid behaviour for suitable industrial applications.",
        },
        {
          title: "Heat and Mass Transfer Evaluation",
          description:
            "Assess thermal and mass transfer requirements associated with reaction and mixing operations.",
        },
        {
          title: "Residence Time and Process Optimization",
          description:
            "Evaluate residence time and operating parameters to support the required process and product characteristics.",
        },
        {
          title: "Batch and Continuous Process Engineering",
          description:
            "Develop process configurations for batch and continuous reaction and mixing applications.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Reaction and Mixing Technology Solutions",
      intro:
        "Representative process technologies for industrial reactions, controlled mixing and material transformation.",
      items: [
        {
          id: "reaction-mixing-technology-product-1",
          name: "Batch Reaction Technology",
          category: "Reaction Technology",
          description:
            "Batch processing configurations for controlled chemical reactions with defined operating conditions and process requirements.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial batch reaction system",
          },
          specs: [
            "Batch process configuration",
            "Reaction-specific operating conditions",
            "Application-dependent mixing and thermal requirements",
          ],
        },
        {
          id: "reaction-mixing-technology-product-2",
          name: "Continuous Reaction Technology",
          category: "Reaction Technology",
          description:
            "Continuous processing configurations designed to support controlled reactant flow, residence time and reaction conditions.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial continuous reaction system",
          },
          specs: [
            "Continuous process configuration",
            "Residence time evaluation",
            "Reaction-specific process control",
          ],
        },
        {
          id: "reaction-mixing-technology-product-3",
          name: "Industrial Mixing Technology",
          category: "Mixing Technology",
          description:
            "Industrial mixing solutions for blending, contacting and processing materials under defined fluid and operating conditions.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial mixing technology system",
          },
          specs: [
            "Application-specific mixing configuration",
            "Mixing intensity evaluation",
            "Fluid and material characteristics considered",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Reaction and Mixing Engineering Services",
      intro:
        "Engineering support for reaction process development, reactor configuration, mixing evaluation and operational optimization.",
      items: [
        {
          title: "Reaction Process Assessment",
          description:
            "Evaluate reaction chemistry, kinetics and process requirements to establish a suitable engineering basis.",
        },
        {
          title: "Reactor Process Design",
          description:
            "Develop reactor configurations based on reaction characteristics, operating conditions and production objectives.",
        },
        {
          title: "Mixing and Agitation Evaluation",
          description:
            "Assess fluid properties, mixing intensity and agitation requirements for industrial processes.",
        },
        {
          title: "Thermal and Mass Transfer Analysis",
          description:
            "Evaluate heat and mass transfer requirements associated with reaction and mixing operations.",
        },
        {
          title: "Batch and Continuous Process Optimization",
          description:
            "Review process configuration, residence time and operating parameters to identify optimization opportunities.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Reaction and Mixing Technology Applications",
      intro:
        "Process solutions for industrial manufacturing operations involving chemical reactions, blending and formulation.",
      items: [
        {
          title: "Chemical Manufacturing",
          description:
            "Support industrial chemical production through controlled reaction and mixing processes.",
        },
        {
          title: "Specialty Chemical Processing",
          description:
            "Address application-specific reaction conditions, mixing requirements and product characteristics.",
        },
        {
          title: "Polymer and Resin Production",
          description:
            "Support polymer and resin manufacturing processes involving controlled reactions and material mixing.",
        },
        {
          title: "Industrial Blending and Formulation",
          description:
            "Support blending and formulation operations requiring controlled mixing of industrial materials.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Reaction and Mixing Technical Parameters",
      intro:
        "Key process and engineering parameters considered during reaction system and mixing technology selection.",
      items: [
        {
          name: "Reaction kinetics",
          value: "Established through process chemistry evaluation",
        },
        {
          name: "Residence time",
          value: "Determined through process evaluation",
        },
        {
          name: "Mixing intensity",
          value: "Defined according to application requirements",
        },
        {
          name: "Reaction temperature",
          value: "Specific to reaction and process requirements",
        },
        {
          name: "Heat management",
          value: "Based on reaction energy and thermal requirements",
        },
        {
          name: "Process configuration",
          value: "Batch or continuous operation",
        },
        {
          name: "Material characteristics",
          value: "Evaluated based on fluid and product properties",
        },
      ],
      note:
        "Final design parameters depend on reaction chemistry, process conditions, material characteristics and project-specific engineering calculations.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "How Reaction and Mixing Technology Works",
      intro:
        "Reaction and mixing processes bring materials into controlled contact while managing the operating conditions required for the intended transformation.",
      steps: [
        {
          title: "Reactant Preparation",
          description:
            "Prepare and characterize the reactants according to process composition, material properties and operating requirements.",
          output: "Prepared reactant streams",
        },
        {
          title: "Mixing and Contacting",
          description:
            "Bring materials into controlled contact through the selected mixing or agitation arrangement.",
          output: "Mixed process materials",
        },
        {
          title: "Reaction and Thermal Management",
          description:
            "Maintain the required reaction conditions while evaluating residence time and thermal requirements.",
          output: "Processed reaction mixture",
        },
        {
          title: "Product Processing",
          description:
            "Handle the resulting process material according to downstream processing and product requirements.",
          output: "Reaction product stream",
        },
      ],
      note:
        "The actual process sequence depends on reaction chemistry, batch or continuous operation and the selected process configuration.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Reaction and Mixing System Lifecycle Support",
      intro:
        "Engineering support for assessing reaction performance, mixing behaviour and process operating conditions throughout the system lifecycle.",
      items: [
        {
          title: "Reaction Performance Assessment",
          description:
            "Review reaction conditions, process results and product characteristics against established requirements.",
        },
        {
          title: "Mixing Performance Evaluation",
          description:
            "Assess mixing behaviour, agitation requirements and process consistency.",
        },
        {
          title: "Operational Troubleshooting",
          description:
            "Investigate process deviations related to reaction conditions, mixing and thermal management.",
        },
        {
          title: "Process Optimization",
          description:
            "Evaluate opportunities to improve residence time, mixing conditions and overall process operation.",
        },
      ],
    },

    {
      id: "performance-sustainability",
      label: "Performance & Sustainability",
      type: "performance-sustainability",
      heading: "Reaction and Mixing Performance Indicators",
      intro:
        "Reaction and mixing systems can be evaluated through process consistency, reaction conditions, energy utilization and material handling.",
      metrics: [
        {
          title: "Reaction Performance",
          description:
            "Evaluate reaction results against defined process and product requirements.",
          category: "Performance",
        },
        {
          title: "Mixing Effectiveness",
          description:
            "Assess mixing behaviour and material uniformity according to application requirements.",
          category: "Process",
        },
        {
          title: "Thermal Energy Management",
          description:
            "Review heating and cooling requirements associated with reaction and mixing operations.",
          category: "Energy",
        },
        {
          title: "Process Consistency",
          description:
            "Evaluate operating stability and consistency across batch or continuous processing.",
          category: "Operations",
        },
      ],
      note:
        "Performance improvements and resource savings must be established through project-specific process evaluation and operating data.",
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Reaction and Mixing Engineering Compliance",
      intro:
        "Applicable engineering, equipment and process safety requirements depend on reaction chemistry, equipment design and project jurisdiction.",
      items: [
        {
          title: "Process Design Requirements",
          description:
            "Establish reaction conditions, operating parameters and process design criteria.",
          reference: "Project-specific",
        },
        {
          title: "Equipment and Material Requirements",
          description:
            "Define equipment construction and material compatibility based on process chemistry and operating conditions.",
          reference: "Project-specific",
        },
        {
          title: "Process Safety and Operating Requirements",
          description:
            "Evaluate relevant process hazards, thermal conditions and equipment operating limits.",
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
      heading: "Reaction and Mixing Technical Resources",
      intro:
        "Technical brochures, process documentation, engineering notes and approved technology resources can be listed here.",
      items: [],
      note:
        "Technical resources will be added when approved public-facing documents become available.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Reaction and Mixing Technology Frequently Asked Questions",
      intro:
        "Common questions about industrial reaction and mixing processes.",
      items: [
        {
          question: "What is reaction and mixing technology?",
          answer:
            "Reaction and mixing technology combines chemical reaction processes with controlled mixing and material handling to support industrial production and material transformation.",
        },
        {
          question: "What is the difference between batch and continuous reaction processes?",
          answer:
            "Batch processes handle materials in defined production batches, while continuous processes introduce and process materials through an ongoing flow.",
        },
        {
          question: "Why is mixing important in chemical reactions?",
          answer:
            "Mixing helps bring reactants into contact and supports the required process conditions. Its importance depends on reaction chemistry, fluid properties and application requirements.",
        },
        {
          question: "What factors influence reactor design?",
          answer:
            "Reactor design depends on reaction kinetics, residence time, operating temperature, heat transfer requirements, material characteristics and production objectives.",
        },
        {
          question: "How is mixing performance evaluated?",
          answer:
            "Mixing performance is evaluated based on application-specific requirements, including fluid behaviour, mixing intensity and the desired process consistency.",
        },
      ],
    },
  ],
};

export default reactionAndMixingTechnology;
