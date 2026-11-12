
import type { SBUChild } from "@/data/sbus/types";

const condenser: SBUChild = {
  slug: "condenser",

  hero: {
    name: "Condenser",
    tagline: "Industrial Vapour Condensation Solutions",
    description:
      "Industrial condenser equipment engineered to remove heat from vapour streams and convert them into liquid for recovery, reuse and downstream processing.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial shell and tube condenser equipment",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Industrial Condensers for Process Applications",
      description:
        "Condensers play an essential role in chemical and process industries by converting vapour into liquid through controlled heat removal. Their design considers vapour composition, condensation duty, cooling medium, operating pressure and condensate handling requirements.",
      kpis: [
        { value: "01", label: "Thermal efficiency" },
        { value: "02", label: "Vapour recovery" },
        { value: "03", label: "Process integration" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Condenser Engineering Capabilities",
      intro:
        "Engineering capabilities focused on reliable thermal performance and efficient vapour condensation.",
      items: [
        {
          title: "Condensation Duty Assessment",
          description:
            "Evaluate vapour composition, inlet conditions and required condensation performance to establish the thermal design basis.",
        },
        {
          title: "Thermal and Hydraulic Design",
          description:
            "Assess heat transfer requirements, pressure drop and flow characteristics to support condenser sizing and configuration.",
        },
        {
          title: "Cooling Medium Selection",
          description:
            "Identify suitable cooling media based on available site utilities, operating temperatures and process requirements.",
        },
        {
          title: "Condensate Collection and Handling",
          description:
            "Develop condensate collection and discharge arrangements according to downstream recovery and processing requirements.",
        },
        {
          title: "Process and Utility Integration",
          description:
            "Coordinate condenser equipment with process streams, cooling utilities and associated plant systems.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Industrial Condenser Product Range",
      intro:
        "Representative condenser configurations for different industrial thermal and process applications. Final equipment selection depends on operating conditions and project requirements.",
      items: [
        {
          id: "condenser-product-1",
          name: "Shell and Tube Condensers",
          category: "Condensation Equipment",
          description:
            "Industrial heat exchange equipment designed to condense vapour through controlled heat transfer between shell-side and tube-side fluid streams.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial shell and tube condenser",
          },
          specs: [
            "Thermal design based on condensation duty",
            "Tube and shell materials selected for fluid compatibility",
          ],
        },
        {
          id: "condenser-product-2",
          name: "Surface Condensers",
          category: "Thermal Equipment",
          description:
            "Condensers designed to convert vapour into liquid without direct mixing between the process vapour and cooling medium.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial surface condenser",
          },
          specs: [
            "Separate process and cooling fluid circuits",
            "Configuration based on operating pressure and thermal requirements",
          ],
        },
        {
          id: "condenser-product-3",
          name: "Process Condenser Packages",
          category: "Packaged Equipment",
          description:
            "Integrated condenser arrangements incorporating associated process connections and condensate handling provisions.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial process condenser package",
          },
          specs: [
            "Package configuration defined by process requirements",
            "Condensate handling and utility interfaces are project-specific",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Condenser Engineering Services",
      intro:
        "Technical and engineering services supporting condenser selection, thermal design and process integration.",
      items: [
        {
          title: "Thermal Design and Evaluation",
          description:
            "Evaluate heat transfer requirements, condensation duty and operating conditions for suitable equipment configuration.",
        },
        {
          title: "Equipment Selection",
          description:
            "Identify appropriate condenser types and configurations based on vapour characteristics and cooling utility availability.",
        },
        {
          title: "Mechanical and Process Engineering",
          description:
            "Coordinate equipment design, material selection, process connections and mechanical arrangements.",
        },
        {
          title: "Installation and Integration Support",
          description:
            "Support equipment integration with existing process systems, cooling utilities and condensate recovery arrangements.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Industrial Condenser Applications",
      intro:
        "Condenser solutions for industrial operations involving vapour cooling, condensation and liquid recovery.",
      items: [
        {
          title: "Chemical Manufacturing",
          description:
            "Condensation systems for chemical production processes and associated thermal operations.",
        },
        {
          title: "Petrochemical Processing",
          description:
            "Vapour condensation and recovery applications across petrochemical processing facilities.",
        },
        {
          title: "Distillation and Evaporation",
          description:
            "Condensers used in vapour handling, overhead condensation and evaporation process systems.",
        },
        {
          title: "Industrial Vapour Recovery",
          description:
            "Equipment for recovering condensable vapour streams as liquid for reuse or subsequent processing.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Condenser Technical Specifications",
      intro:
        "Condenser specifications are established according to vapour properties, thermal duty, cooling utility conditions and mechanical design requirements.",
      items: [
        {
          name: "Condensation duty",
          value: "Calculated from vapour flow and operating conditions",
        },
        {
          name: "Cooling medium",
          value: "Selected according to available site utility conditions",
        },
        {
          name: "Operating pressure",
          value: "Defined by process design requirements",
        },
        {
          name: "Operating temperature",
          value: "Established from process and cooling conditions",
        },
        {
          name: "Heat transfer arrangement",
          value: "Selected according to condenser configuration",
        },
        {
          name: "Condensate handling",
          value: "Defined by downstream recovery requirements",
        },
        {
          name: "Materials of construction",
          value: "Selected based on process fluid compatibility",
        },
      ],
      note:
        "All technical parameters are indicative design considerations. Actual thermal ratings, dimensions, pressures and material specifications must be confirmed against the approved project design.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "Condenser Operating Process",
      intro:
        "A representative operating sequence illustrating the conversion of process vapour into liquid through controlled heat removal.",
      steps: [
        {
          title: "Vapour Inlet",
          description:
            "The incoming vapour stream enters the condenser at its specified operating pressure, temperature and flow conditions.",
          output: "Incoming vapour stream",
        },
        {
          title: "Heat Removal",
          description:
            "Heat is transferred from the process vapour to the cooling medium through the condenser heat transfer surface.",
          output: "Reduced vapour temperature",
        },
        {
          title: "Vapour Condensation",
          description:
            "As thermal energy is removed, the vapour undergoes a phase change and converts into liquid condensate.",
          output: "Liquid condensate",
        },
        {
          title: "Condensate Collection",
          description:
            "The condensed liquid is collected and routed to the designated recovery, storage or downstream processing system.",
          output: "Recovered liquid stream",
        },
      ],
      note:
        "Actual condensation performance depends on vapour composition, operating pressure, heat transfer characteristics and cooling medium conditions.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Condenser Lifecycle Support",
      intro:
        "Support activities covering condenser installation, inspection, maintenance and ongoing operational performance.",
      items: [
        {
          title: "Installation and Commissioning Support",
          description:
            "Support equipment installation, utility connections and initial operational verification within the agreed project scope.",
        },
        {
          title: "Preventive Maintenance",
          description:
            "Plan periodic inspections and maintenance activities to monitor equipment condition and thermal performance.",
        },
        {
          title: "Inspection and Cleaning",
          description:
            "Evaluate heat transfer surfaces and identify cleaning or inspection requirements based on operating conditions.",
        },
        {
          title: "Performance Evaluation",
          description:
            "Review thermal operating parameters and identify potential improvements in heat transfer and condensation performance.",
        },
      ],
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Condenser Quality and Compliance",
      intro:
        "Applicable engineering codes, manufacturing requirements and inspection procedures depend on equipment configuration and project specifications.",
      items: [
        {
          title: "Pressure Equipment Design",
          description:
            "Identify applicable pressure equipment design requirements according to operating conditions and jurisdiction.",
          reference: "To be confirmed per project",
        },
        {
          title: "Material and Fabrication Requirements",
          description:
            "Establish material selection, fabrication and inspection requirements based on process fluid compatibility.",
          reference: "Project-specific",
        },
        {
          title: "Inspection and Testing",
          description:
            "Define inspection and testing requirements for equipment integrity and agreed thermal and mechanical verification.",
          reference: "Project quality plan",
        },
      ],
      note:
        "Applicable codes, standards and certification requirements must be verified against the actual equipment specification. No specific company certification is implied.",
    },

    {
      id: "downloads-resources",
      label: "Downloads & Technical Resources",
      type: "downloads-resources",
      heading: "Condenser Technical Resources",
      intro:
        "Technical brochures, equipment datasheets, general arrangement drawings and engineering documentation can be listed here when approved for public distribution.",
      items: [],
      note:
        "No downloadable technical resources have been configured for this page yet.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Condenser Frequently Asked Questions",
      intro:
        "Common questions about industrial condensers, their operation and process applications.",
      items: [
        {
          question: "What is the primary purpose of an industrial condenser?",
          answer:
            "An industrial condenser removes heat from vapour streams to convert them into liquid. The recovered liquid can then be reused, collected or routed for further processing.",
        },
        {
          question: "How does a shell and tube condenser work?",
          answer:
            "A shell and tube condenser transfers heat between process vapour and a cooling medium flowing through separate shell-side and tube-side passages, allowing the vapour to condense.",
        },
        {
          question: "How is a condenser selected?",
          answer:
            "Selection depends on vapour composition, flow rate, condensation duty, operating pressure, temperature conditions, cooling medium availability and condensate handling requirements.",
        },
        {
          question: "What cooling mediums can be used?",
          answer:
            "Cooling medium selection depends on the required thermal performance and available site utilities. Common options include cooling water and other suitable process cooling fluids.",
        },
        {
          question: "What maintenance does a condenser require?",
          answer:
            "Typical maintenance activities include inspection of heat transfer surfaces, monitoring thermal performance, checking process connections and evaluating cleaning requirements.",
        },
      ],
    },
  ],
};

export default condenser;
