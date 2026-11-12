
import type { SBUChild } from "@/data/sbus/types";

const skids: SBUChild = {
  slug: "skids",

  hero: {
    name: "Skids",
    tagline: "Integrated Process Packages for Industrial Applications",
    description:
      "Engineered skid-mounted process systems combining equipment, piping, instrumentation and supporting components into integrated packages for specific industrial duties.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial skid-mounted process equipment package",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Integrated Skid-Mounted Process Systems",
      description:
        "Skid-mounted systems provide a packaged approach to process equipment integration. They can incorporate pumps, vessels, heat exchangers, valves, piping, instrumentation and control interfaces within a coordinated structural arrangement. Package configuration depends on process scope, installation requirements, site utilities and project-specific operating conditions.",
      kpis: [
        { value: "01", label: "Integrated packages" },
        { value: "02", label: "Process equipment" },
        { value: "03", label: "Modular installation" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Process Skid Engineering Capabilities",
      intro:
        "Integrated engineering capabilities covering package design, equipment selection, system coordination and installation planning.",
      items: [
        {
          title: "Package Process Design and Configuration",
          description:
            "Establish package design requirements, process duty and system configuration based on project specifications and operating conditions.",
        },
        {
          title: "Equipment Selection and Integration",
          description:
            "Select and integrate pumps, vessels, heat exchangers, valves and supporting components according to the intended process function.",
        },
        {
          title: "Piping and Instrumentation Coordination",
          description:
            "Coordinate interconnecting piping, valves, instrumentation and control interfaces to create an integrated process package.",
        },
        {
          title: "Structural and Layout Engineering",
          description:
            "Develop equipment positioning and structural arrangements considering accessibility, maintenance requirements and site installation constraints.",
        },
        {
          title: "Testing and Documentation Planning",
          description:
            "Define agreed package verification activities and coordinate technical documentation required for delivery and site integration.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Packaged Process Skid Solutions",
      intro:
        "Representative skid-mounted systems configured for chemical handling, thermal duties and industrial process operations.",
      items: [
        {
          id: "skids-product-1",
          name: "Chemical Dosing Skids",
          category: "Packaged Process Systems",
          description:
            "Integrated packages for controlled chemical storage, metering and injection, incorporating dosing equipment and associated piping and instrumentation.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial chemical dosing skid",
          },
          specs: [
            "Chemical storage and handling arrangement",
            "Metering and injection equipment",
            "Instrumentation based on dosing requirements",
          ],
        },
        {
          id: "skids-product-2",
          name: "Heat Exchanger Skids",
          category: "Thermal Packages",
          description:
            "Packaged thermal systems combining heat exchangers with associated process connections, piping, valves and supporting components.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial heat exchanger skid package",
          },
          specs: [
            "Heat exchanger configuration based on thermal duty",
            "Integrated process and utility connections",
            "Instrumentation based on package requirements",
          ],
        },
        {
          id: "skids-product-3",
          name: "Process Pump Skids",
          category: "Packaged Equipment",
          description:
            "Integrated pumping packages configured around required flow and pressure conditions, including pumps and associated piping and instrumentation.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial process pump skid",
          },
          specs: [
            "Pump selection based on flow and pressure requirements",
            "Integrated piping and valve arrangement",
            "Package interfaces based on process requirements",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Process Skid Engineering Services",
      intro:
        "Engineering and integration services supporting the development of packaged process systems from design basis through installation preparation.",
      items: [
        {
          title: "Process Package Engineering",
          description:
            "Translate process requirements into a defined package scope, equipment configuration and engineering design basis.",
        },
        {
          title: "Equipment and Component Integration",
          description:
            "Coordinate equipment selection, piping connections, valves and supporting components within the package boundary.",
        },
        {
          title: "Piping and Instrumentation Design",
          description:
            "Develop coordinated piping and instrumentation arrangements aligned with process requirements and control philosophy.",
        },
        {
          title: "Structural and Layout Design",
          description:
            "Plan skid layouts and structural arrangements with consideration for equipment access, maintenance and transportation constraints.",
        },
        {
          title: "Testing and Documentation",
          description:
            "Prepare agreed inspection, testing and documentation activities for package verification and project handover.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Industrial Applications of Skid Packages",
      intro:
        "Packaged process systems designed for integration into industrial facilities and process plant operations.",
      items: [
        {
          title: "Chemical and Petrochemical Plants",
          description:
            "Integrated process packages supporting chemical handling, dosing, pumping and other plant operations.",
        },
        {
          title: "Oil and Gas Facilities",
          description:
            "Skid-mounted equipment packages for selected process, fluid handling and utility applications.",
        },
        {
          title: "Industrial Utility Systems",
          description:
            "Packaged thermal, pumping and utility systems configured around facility operating requirements.",
        },
        {
          title: "Process Plant Expansion Projects",
          description:
            "Modular equipment packages that support facility upgrades, capacity expansion and integration with existing plant infrastructure.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Process Skid Technical Specifications",
      intro:
        "Package specifications are established according to process duty, equipment configuration, site requirements and project interfaces.",
      items: [
        {
          name: "Package scope",
          value: "Defined by project requirements",
        },
        {
          name: "Equipment configuration",
          value: "Selected according to process duty",
        },
        {
          name: "Piping arrangement",
          value: "Developed from process and layout requirements",
        },
        {
          name: "Instrumentation",
          value: "Defined by control philosophy",
        },
        {
          name: "Structural arrangement",
          value: "Based on equipment layout and installation requirements",
        },
        {
          name: "Operating conditions",
          value: "Established from process design data",
        },
        {
          name: "Utility connections",
          value: "Defined by package and site requirements",
        },
        {
          name: "Installation interface",
          value: "Site-specific",
        },
      ],
      note:
        "All specifications are project-dependent. Final package dimensions, equipment ratings, materials, operating parameters and connection details must be established through the approved engineering design.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "Process Skid Engineering and Integration",
      intro:
        "A representative workflow illustrating how individual process components are developed into an integrated skid-mounted package.",
      steps: [
        {
          title: "Process Requirement Definition",
          description:
            "Establish the package duty, process conditions, design basis and required equipment interfaces.",
          output: "Package design basis",
        },
        {
          title: "Equipment Integration",
          description:
            "Select and arrange the equipment required to perform the intended process function within the package boundary.",
          output: "Integrated equipment arrangement",
        },
        {
          title: "Piping and Instrumentation",
          description:
            "Coordinate interconnecting piping, valves, instrumentation and control interfaces across the package.",
          output: "Coordinated package system",
        },
        {
          title: "Testing and Installation Preparation",
          description:
            "Complete agreed inspection and verification activities, prepare technical documentation and coordinate the package for site integration.",
          output: "Packaged process system",
        },
      ],
      note:
        "The actual engineering, assembly, inspection and testing sequence depends on the package scope and project requirements.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Process Skid Lifecycle Support",
      intro:
        "Support activities covering package installation, commissioning, inspection and ongoing operational requirements.",
      items: [
        {
          title: "Installation and Site Integration",
          description:
            "Support package positioning, utility connections, process interfaces and integration with existing plant systems.",
        },
        {
          title: "Commissioning Support",
          description:
            "Coordinate agreed pre-commissioning checks, equipment verification and initial operational activities.",
        },
        {
          title: "Preventive Maintenance",
          description:
            "Plan inspection and maintenance activities for pumps, valves, instruments and other package components.",
        },
        {
          title: "Operational Performance Review",
          description:
            "Review package operating conditions and equipment performance to identify maintenance or improvement requirements.",
        },
      ],
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Process Skid Quality and Compliance",
      intro:
        "Applicable engineering codes, fabrication requirements and inspection procedures depend on package scope, equipment type and project specifications.",
      items: [
        {
          title: "Process and Equipment Design",
          description:
            "Establish applicable design requirements for individual equipment and integrated package systems.",
          reference: "To be confirmed per project",
        },
        {
          title: "Piping and Instrumentation Requirements",
          description:
            "Define applicable piping, instrumentation and control requirements according to package design and site interfaces.",
          reference: "Project-specific",
        },
        {
          title: "Fabrication and Quality Assurance",
          description:
            "Establish material, fabrication, inspection and quality verification requirements for the package.",
          reference: "Project quality plan",
        },
        {
          title: "Inspection and Testing",
          description:
            "Define agreed inspection and testing activities before package delivery and site integration.",
          reference: "Project-specific",
        },
      ],
      note:
        "Applicable codes, standards and certifications must be confirmed against the package design basis, equipment scope and project jurisdiction. No specific company certification is implied.",
    },

    {
      id: "downloads-resources",
      label: "Downloads & Technical Resources",
      type: "downloads-resources",
      heading: "Process Skid Technical Resources",
      intro:
        "Technical brochures, package datasheets, general arrangement drawings, piping and instrumentation diagrams and engineering documentation can be listed here when approved for public distribution.",
      items: [],
      note:
        "No downloadable technical resources have been configured for this page yet.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Process Skids Frequently Asked Questions",
      intro:
        "Common questions about skid-mounted process systems, package integration and industrial applications.",
      items: [
        {
          question: "What is a process skid?",
          answer:
            "A process skid is an integrated equipment package assembled on a structural base. It can combine equipment, piping, valves, instrumentation and control interfaces to perform a defined industrial process function.",
        },
        {
          question: "What equipment can be included in a process skid?",
          answer:
            "Depending on the package scope, a skid can include pumps, vessels, heat exchangers, valves, piping, instruments and supporting components.",
        },
        {
          question: "What are the advantages of skid-mounted systems?",
          answer:
            "Skid-mounted systems provide a packaged approach to equipment integration and can simplify transportation, installation planning and connection with existing plant infrastructure.",
        },
        {
          question: "Can process skids be customized?",
          answer:
            "Yes. Package configuration is developed according to process duty, equipment requirements, operating conditions, site utilities and installation interfaces.",
        },
        {
          question: "What information is required to design a process skid?",
          answer:
            "Typical inputs include process duty, operating conditions, equipment requirements, piping and instrumentation interfaces, utility availability and site installation constraints.",
        },
        {
          question: "Are skid packages tested before delivery?",
          answer:
            "Testing and inspection activities are defined by the agreed project scope and quality plan. The required verification activities should be established during package engineering.",
        },
      ],
    },
  ],
};

export default skids;
