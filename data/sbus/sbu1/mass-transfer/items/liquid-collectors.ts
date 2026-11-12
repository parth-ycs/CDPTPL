
import type { SBUChild } from "@/data/sbus/types";

const liquidCollectors: SBUChild = {
  slug: "liquid-collectors",

  hero: {
    name: "Liquid Collectors",
    tagline: "Controlled Liquid Collection for Efficient Column Operation",
    description:
      "Engineered liquid collection systems designed to gather process liquid from packed column sections and route it for redistribution, withdrawal or downstream processing.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial column liquid collector internals",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Industrial Liquid Collection Systems",
      description:
        "Liquid collectors are column internals used to collect liquid flowing from an upper packed section. They provide a controlled arrangement for liquid withdrawal, redistribution or transfer to another column section. Collector configuration depends on liquid loading, column geometry, process requirements and integration with associated internals.",
      kpis: [
        { value: "01", label: "Controlled liquid collection" },
        { value: "02", label: "Column integration" },
        { value: "03", label: "Process-specific design" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Liquid Collector Engineering Capabilities",
      intro:
        "Engineering capabilities focused on liquid collection, hydraulic performance and integration with packed column internals.",
      items: [
        {
          title: "Liquid Collector Configuration Selection",
          description:
            "Evaluate column geometry, liquid loading and process requirements to determine a suitable collector arrangement.",
        },
        {
          title: "Column Liquid Collection Assessment",
          description:
            "Assess liquid collection requirements across packed column sections and establish suitable collection arrangements.",
        },
        {
          title: "Collector Hydraulic Design",
          description:
            "Evaluate liquid handling capacity, collection area and hydraulic requirements for the intended operating conditions.",
        },
        {
          title: "Liquid Withdrawal and Routing Design",
          description:
            "Develop arrangements for transferring collected liquid to withdrawal connections or downstream process equipment.",
        },
        {
          title: "Redistribution System Integration",
          description:
            "Coordinate collector arrangements with liquid redistributors and associated column internals.",
        },
        {
          title: "Column Revamping and Internals Evaluation",
          description:
            "Review existing collector configurations and identify opportunities for improvement or replacement.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Liquid Collector Product Range",
      intro:
        "Representative liquid collection configurations designed for packed columns and industrial separation systems.",
      items: [
        {
          id: "liquid-collectors-product-1",
          name: "Collector Trays",
          category: "Liquid Collection",
          description:
            "Tray-based internal arrangements designed to collect descending liquid from packed column sections while maintaining the required vapour passage.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial collector tray",
          },
          specs: [
            "Tray-based collection arrangement",
            "Configuration based on liquid loading",
            "Integrated with column internals",
          ],
        },
        {
          id: "liquid-collectors-product-2",
          name: "Chimney Type Collectors",
          category: "Liquid Collection",
          description:
            "Collector configurations incorporating vapour passage chimneys while gathering descending liquid from upper packed sections.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial chimney type liquid collector",
          },
          specs: [
            "Integrated vapour passage chimneys",
            "Controlled liquid collection",
            "Column-specific configuration",
          ],
        },
        {
          id: "liquid-collectors-product-3",
          name: "Collector and Redistributor Assemblies",
          category: "Integrated Column Internals",
          description:
            "Combined arrangements designed to collect liquid and prepare it for subsequent redistribution across the next packed column section.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Liquid collector and redistributor assembly",
          },
          specs: [
            "Combined collection and redistribution",
            "Integrated column internal arrangement",
            "Designed around process flow requirements",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Liquid Collector Engineering Services",
      intro:
        "Engineering support covering collector selection, hydraulic evaluation, liquid routing and column integration.",
      items: [
        {
          title: "Technical Assessment",
          description:
            "Evaluate liquid loading, column geometry and process requirements to establish the collector design basis.",
        },
        {
          title: "Collector Design and Selection",
          description:
            "Determine suitable collector configurations, dimensions and material requirements.",
        },
        {
          title: "Hydraulic Performance Evaluation",
          description:
            "Review liquid collection capacity, flow distribution and hydraulic operating requirements.",
        },
        {
          title: "Liquid Routing and Redistribution",
          description:
            "Coordinate liquid withdrawal, collection outlets and redistribution arrangements.",
        },
        {
          title: "Column Revamping and Optimization",
          description:
            "Assess existing column internals and identify potential improvements to liquid collection and handling.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Liquid Collector Industrial Applications",
      intro:
        "Liquid collection solutions for packed columns and industrial processes requiring controlled liquid handling.",
      items: [
        {
          title: "Packed Distillation Columns",
          description:
            "Collection and routing of liquid between packed sections in industrial distillation systems.",
        },
        {
          title: "Industrial Absorption Columns",
          description:
            "Liquid collection arrangements supporting gas absorption and associated column operations.",
        },
        {
          title: "Liquid Redistribution Systems",
          description:
            "Collection and transfer of liquid for subsequent redistribution across packed column sections.",
        },
        {
          title: "Multi-Section Packed Columns",
          description:
            "Integrated collection arrangements for columns containing multiple packed beds and contacting sections.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Liquid Collector Technical Specifications",
      intro:
        "Collector specifications are established according to column geometry, liquid loading, hydraulic requirements and process conditions.",
      items: [
        {
          name: "Collector type",
          value: "Tray or chimney configuration",
        },
        {
          name: "Liquid loading",
          value: "Defined by process flow requirements",
        },
        {
          name: "Column diameter",
          value: "Application-specific",
        },
        {
          name: "Vapour passage",
          value: "Integrated according to column design",
        },
        {
          name: "Material",
          value: "Selected according to process compatibility",
        },
        {
          name: "Liquid withdrawal",
          value: "Defined by process arrangement",
        },
        {
          name: "Hydraulic capacity",
          value: "Established through engineering evaluation",
        },
      ],
      note:
        "Specifications are representative design considerations. Actual dimensions, materials, hydraulic capacity and operating parameters must be confirmed through approved project calculations.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "How Liquid Collectors Work",
      intro:
        "Liquid collectors gather descending liquid from packed column sections and route it for withdrawal, redistribution or further processing.",
      steps: [
        {
          title: "Liquid Flow Assessment",
          description:
            "Evaluate liquid loading, column geometry and collection requirements.",
          output: "Defined collection requirements",
        },
        {
          title: "Collector Configuration",
          description:
            "Select a suitable collector arrangement and determine the required collection area.",
          output: "Collector design",
        },
        {
          title: "Liquid Collection",
          description:
            "Collect descending liquid from the upper column section while maintaining the required vapour passage.",
          output: "Collected liquid stream",
        },
        {
          title: "Liquid Routing",
          description:
            "Transfer collected liquid to a withdrawal line, redistribution arrangement or downstream process.",
          output: "Controlled liquid flow",
        },
      ],
      note:
        "The actual collection and routing arrangement depends on column configuration, liquid loading and downstream process requirements.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Liquid Collector Lifecycle Support",
      intro:
        "Support activities covering inspection, hydraulic performance evaluation and maintenance of installed column internals.",
      items: [
        {
          title: "Performance Inspection",
          description:
            "Review the physical condition and operation of installed liquid collection internals.",
        },
        {
          title: "Hydraulic Performance Review",
          description:
            "Evaluate liquid loading, collection capacity and flow behaviour against intended operating conditions.",
        },
        {
          title: "Maintenance Assessment",
          description:
            "Identify potential maintenance, replacement and material compatibility requirements.",
        },
        {
          title: "Column Optimization",
          description:
            "Evaluate improvements to collector and redistribution arrangements based on operational performance.",
        },
      ],
    },

    {
      id: "performance-sustainability",
      label: "Performance & Sustainability",
      type: "performance-sustainability",
      heading: "Liquid Collector Performance Indicators",
      intro:
        "Key indicators used to evaluate liquid collection effectiveness and column hydraulic performance.",
      metrics: [
        {
          title: "Liquid Collection Efficiency",
          description:
            "Evaluate the effectiveness of collecting descending liquid across the column cross-section.",
          category: "Performance",
        },
        {
          title: "Hydraulic Capacity",
          description:
            "Review liquid handling capacity under the intended process operating conditions.",
          category: "Hydraulics",
        },
        {
          title: "Flow Distribution",
          description:
            "Assess liquid collection and routing uniformity across the collector arrangement.",
          category: "Operations",
        },
      ],
      note:
        "Actual performance values must be established through engineering calculations, simulations or operating data.",
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Liquid Collector Quality and Compliance",
      intro:
        "Applicable engineering, fabrication and inspection requirements depend on the collector design and project specifications.",
      items: [
        {
          title: "Mechanical Design Requirements",
          description:
            "Evaluate structural loading, material selection and integration with column internals.",
          reference: "Project-specific",
        },
        {
          title: "Material Requirements",
          description:
            "Establish material compatibility with process fluids and operating conditions.",
          reference: "Project-specific",
        },
        {
          title: "Inspection and Quality Requirements",
          description:
            "Define inspection and quality verification requirements for supplied column internals.",
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
      heading: "Liquid Collector Technical Resources",
      intro:
        "Technical brochures, product drawings, general arrangement drawings and approved engineering documentation can be listed here.",
      items: [],
      note:
        "No downloadable technical resources have been configured for this page yet.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Liquid Collectors Frequently Asked Questions",
      intro:
        "Common questions about liquid collection systems and their role in industrial columns.",
      items: [
        {
          question: "What is a liquid collector in a packed column?",
          answer:
            "A liquid collector is a column internal designed to gather liquid flowing down from an upper packed section for withdrawal, redistribution or transfer to another column section.",
        },
        {
          question: "Why are liquid collectors required?",
          answer:
            "They provide controlled liquid collection and routing, particularly in columns with multiple packed sections or intermediate process connections.",
        },
        {
          question: "What are chimney type collectors?",
          answer:
            "Chimney type collectors incorporate raised vapour passage structures that allow vapour to move through the collector while descending liquid is gathered.",
        },
        {
          question: "Can liquid collectors be integrated with redistributors?",
          answer:
            "Yes. Collector and redistributor assemblies can be configured to collect liquid and distribute it across a subsequent packed section.",
        },
        {
          question: "How is a liquid collector selected?",
          answer:
            "Selection depends on column diameter, liquid loading, vapour flow requirements, process conditions and the intended liquid withdrawal or redistribution arrangement.",
        },
      ],
    },
  ],
};

export default liquidCollectors;
