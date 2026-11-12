
import type { SBUChild } from "@/data/sbus/types";

const scrubbers: SBUChild = {
  slug: "scrubbers",

  hero: {
    name: "Scrubbers",
    tagline: "Advanced Industrial Gas Treatment Solutions",
    description:
      "Industrial gas scrubbing systems engineered to remove selected contaminants from process gas streams through controlled gas-liquid contact and suitable separation mechanisms.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial gas scrubbing equipment",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Industrial Scrubbers for Gas Treatment Applications",
      description:
        "Scrubbing systems are used in industrial process facilities to treat gas streams and support emission-control requirements. They remove selected contaminants through gas-liquid contacting or other suitable separation mechanisms. Equipment selection depends on gas composition, contaminant characteristics, flow rate, operating conditions and required treatment performance.",
      kpis: [
        { value: "01", label: "Gas treatment" },
        { value: "02", label: "Contaminant removal" },
        { value: "03", label: "Emission control" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Industrial Scrubber Engineering Capabilities",
      intro:
        "Engineering capabilities focused on gas treatment performance, contacting efficiency and reliable process integration.",
      items: [
        {
          title: "Gas Treatment Duty Assessment",
          description:
            "Evaluate gas composition, contaminant characteristics and flow conditions to establish the required treatment duty and equipment design basis.",
        },
        {
          title: "Scrubber Configuration Selection",
          description:
            "Assess suitable scrubber configurations based on gas properties, contaminant characteristics, treatment requirements and operating conditions.",
        },
        {
          title: "Gas-Liquid Contacting Design",
          description:
            "Evaluate contacting arrangements and liquid distribution requirements to support effective interaction between the gas stream and scrubbing medium.",
        },
        {
          title: "Liquid Circulation and Handling",
          description:
            "Coordinate scrubbing liquid circulation, collection and handling arrangements according to process chemistry and operating requirements.",
        },
        {
          title: "Treated Gas and Residual Stream Integration",
          description:
            "Develop treated gas outlet and spent liquid handling arrangements for integration with downstream process and waste management systems.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Industrial Scrubber Product Range",
      intro:
        "Representative gas treatment equipment configurations designed for different industrial contaminant removal and process gas conditioning requirements.",
      items: [
        {
          id: "scrubbers-product-1",
          name: "Packed Bed Scrubbers",
          category: "Gas Treatment Equipment",
          description:
            "Packed systems providing an extended contact surface between process gas and scrubbing liquid to support contaminant transfer and removal.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial packed bed scrubber",
          },
          specs: [
            "Packing configuration selected according to treatment requirements",
            "Liquid distribution designed for contacting performance",
          ],
        },
        {
          id: "scrubbers-product-2",
          name: "Venturi Scrubbers",
          category: "Gas Treatment Equipment",
          description:
            "Gas treatment arrangements using high-velocity gas flow and liquid injection to promote intensive gas-liquid interaction and contaminant capture.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial Venturi scrubber",
          },
          specs: [
            "Configuration based on gas flow and contaminant characteristics",
            "Pressure drop evaluated during equipment design",
          ],
        },
        {
          id: "scrubbers-product-3",
          name: "Spray Tower Scrubbers",
          category: "Gas Treatment Equipment",
          description:
            "Scrubbing equipment using liquid spray distribution within a tower to facilitate contact between the gas stream and treatment medium.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial spray tower scrubber",
          },
          specs: [
            "Spray arrangement selected according to process requirements",
            "Liquid distribution and gas flow evaluated during design",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Industrial Scrubber Engineering Services",
      intro:
        "Engineering and technical services supporting scrubber selection, gas treatment design and process integration.",
      items: [
        {
          title: "Gas Treatment Process Evaluation",
          description:
            "Evaluate gas composition, contaminant loading and operating conditions to establish suitable treatment requirements.",
        },
        {
          title: "Scrubber Selection and Sizing",
          description:
            "Identify appropriate scrubber configurations based on gas flow, contaminant characteristics and required treatment performance.",
        },
        {
          title: "Gas-Liquid Contacting Engineering",
          description:
            "Evaluate packing, spray distribution and contacting arrangements according to the selected scrubber configuration.",
        },
        {
          title: "Liquid Handling and System Integration",
          description:
            "Coordinate scrubbing liquid circulation, collection, spent liquid handling and associated process connections.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Industrial Scrubber Applications",
      intro:
        "Gas treatment solutions for industrial operations involving process gas conditioning and contaminant removal.",
      items: [
        {
          title: "Chemical Manufacturing",
          description:
            "Gas scrubbing applications for treating process exhaust and selected contaminant-bearing gas streams.",
        },
        {
          title: "Industrial Exhaust Treatment",
          description:
            "Scrubbing systems for treating suitable industrial exhaust streams according to applicable treatment requirements.",
        },
        {
          title: "Process Gas Conditioning",
          description:
            "Gas treatment equipment supporting the conditioning of process streams before subsequent industrial operations.",
        },
        {
          title: "Emission-Control Applications",
          description:
            "Scrubbing arrangements for suitable emission-control duties based on contaminant characteristics and project requirements.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Industrial Scrubber Technical Specifications",
      intro:
        "Scrubber specifications are established according to gas composition, contaminant characteristics, treatment requirements and operating conditions.",
      items: [
        {
          name: "Gas flow rate",
          value: "Established from process data",
        },
        {
          name: "Contaminant composition",
          value: "Defined through gas analysis",
        },
        {
          name: "Scrubbing medium",
          value: "Selected according to treatment chemistry",
        },
        {
          name: "Operating pressure",
          value: "Defined by process requirements",
        },
        {
          name: "Operating temperature",
          value: "Established from process conditions",
        },
        {
          name: "Pressure drop",
          value: "Evaluated during equipment design",
        },
        {
          name: "Scrubber configuration",
          value: "Packed bed, Venturi or spray tower",
        },
        {
          name: "Treated gas quality",
          value: "Defined by applicable project requirements",
        },
      ],
      note:
        "The above specifications are indicative design considerations. Actual gas flow rates, contaminant removal performance, pressure drop and equipment dimensions must be confirmed against the approved process design and applicable requirements.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "Industrial Scrubber Operating Process",
      intro:
        "A representative operating sequence illustrating how industrial scrubbers facilitate contaminant removal through controlled gas-liquid interaction.",
      steps: [
        {
          title: "Gas Inlet",
          description:
            "The untreated process gas stream enters the scrubber through its designated inlet arrangement.",
          output: "Incoming gas stream",
        },
        {
          title: "Scrubbing Medium Distribution",
          description:
            "The selected liquid scrubbing medium is introduced and distributed within the contacting section of the equipment.",
          output: "Distributed scrubbing liquid",
        },
        {
          title: "Gas-Liquid Contact",
          description:
            "The gas interacts with the scrubbing medium, allowing suitable contaminants to transfer into or be captured by the liquid phase.",
          output: "Treated gas and contaminated liquid",
        },
        {
          title: "Outlet and Liquid Handling",
          description:
            "The treated gas exits through the designated outlet while the spent scrubbing liquid is collected and routed for appropriate handling.",
          output: "Treated gas and spent liquid",
        },
      ],
      note:
        "Actual contaminant removal performance depends on gas composition, liquid chemistry, contacting efficiency, operating conditions and scrubber configuration.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Industrial Scrubber Lifecycle Support",
      intro:
        "Support activities covering scrubber installation, inspection, maintenance and ongoing gas treatment performance.",
      items: [
        {
          title: "Installation and Commissioning Support",
          description:
            "Support equipment installation, process connections, liquid circulation arrangements and initial operational checks within the agreed project scope.",
        },
        {
          title: "Preventive Maintenance",
          description:
            "Plan periodic inspection and maintenance of scrubber internals, spray nozzles, pumps and associated mechanical components.",
        },
        {
          title: "Inspection and Cleaning",
          description:
            "Evaluate contacting surfaces, packing arrangements and liquid distribution components to identify inspection and cleaning requirements.",
        },
        {
          title: "Treatment Performance Evaluation",
          description:
            "Review gas flow conditions, pressure drop and treatment performance to identify potential improvements in system operation.",
        },
      ],
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Industrial Scrubber Quality and Compliance",
      intro:
        "Applicable engineering codes, fabrication requirements and inspection procedures depend on scrubber configuration, process conditions and project specifications.",
      items: [
        {
          title: "Equipment Design Requirements",
          description:
            "Identify applicable mechanical and process equipment design requirements according to operating conditions and jurisdiction.",
          reference: "To be confirmed per project",
        },
        {
          title: "Material and Fabrication Requirements",
          description:
            "Establish material selection, fabrication and quality requirements based on gas composition, scrubbing chemistry and corrosion considerations.",
          reference: "Project-specific",
        },
        {
          title: "Inspection and Testing",
          description:
            "Define inspection procedures and testing requirements for equipment integrity and agreed operational verification.",
          reference: "Project quality plan",
        },
      ],
      note:
        "Applicable codes, standards and certification requirements must be verified against the actual equipment specification and jurisdiction. No specific company certification is implied.",
    },

    {
      id: "downloads-resources",
      label: "Downloads & Technical Resources",
      type: "downloads-resources",
      heading: "Industrial Scrubber Technical Resources",
      intro:
        "Technical brochures, equipment datasheets, process flow diagrams, general arrangement drawings and engineering documentation can be listed here when approved for public distribution.",
      items: [],
      note:
        "No downloadable technical resources have been configured for this page yet.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Industrial Scrubbers Frequently Asked Questions",
      intro:
        "Common questions about industrial gas scrubbers, their operation and contaminant removal applications.",
      items: [
        {
          question: "What is an industrial scrubber?",
          answer:
            "An industrial scrubber is gas treatment equipment designed to remove selected contaminants from gas streams through liquid-gas contacting or other suitable separation mechanisms.",
        },
        {
          question: "How does a packed bed scrubber work?",
          answer:
            "A packed bed scrubber passes gas through a packed section while scrubbing liquid flows across the packing, providing contact between the gas and liquid phases for contaminant transfer.",
        },
        {
          question: "What is the difference between packed bed and Venturi scrubbers?",
          answer:
            "Packed bed scrubbers use packing to provide an extended gas-liquid contact surface, whereas Venturi scrubbers use high-velocity gas flow and liquid injection to promote intensive contact and contaminant capture.",
        },
        {
          question: "How is a scrubbing medium selected?",
          answer:
            "The scrubbing medium is selected according to contaminant chemistry, gas composition, treatment objectives and process operating conditions.",
        },
        {
          question: "What factors affect scrubber performance?",
          answer:
            "Performance depends on gas flow rate, contaminant characteristics, liquid distribution, gas-liquid contacting efficiency, scrubbing medium properties and operating conditions.",
        },
        {
          question: "How is spent scrubbing liquid handled?",
          answer:
            "Spent liquid is collected and routed for suitable treatment, recovery or disposal according to its composition and applicable environmental and project requirements.",
        },
      ],
    },
  ],
};

export default scrubbers;
