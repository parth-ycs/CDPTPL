
import type { SBUChild } from "@/data/sbus/types";

const forcedCirculationEvaporator: SBUChild = {
  slug: "forced-circulation-evaporator",

  hero: {
    name: "Forced Circulation Evaporator",
    tagline: "Advanced Evaporation for Demanding Process Applications",
    description:
      "Engineered forced circulation evaporators designed for demanding liquid processing duties through controlled pumping, heat exchange and vapour separation.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial forced circulation evaporator equipment",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Forced Circulation Evaporators for Industrial Processing",
      description:
        "Forced circulation evaporators use mechanical pumping to circulate process liquid through heat exchange equipment and evaporation chambers. They are considered for applications involving challenging fluid characteristics, scaling tendencies or operating conditions that benefit from controlled circulation. System design integrates circulation pumps, heat exchangers, vapour separation and process controls.",
      kpis: [
        { value: "01", label: "Controlled circulation" },
        { value: "02", label: "Thermal performance" },
        { value: "03", label: "Process reliability" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Forced Circulation Evaporator Engineering Capabilities",
      intro:
        "Engineering capabilities focused on controlled liquid circulation, thermal performance and reliable evaporation system operation.",
      items: [
        {
          title: "Circulation and Evaporation Duty Assessment",
          description:
            "Evaluate feed characteristics, evaporation requirements and process conditions to establish suitable circulation and evaporation design parameters.",
        },
        {
          title: "Pump and Hydraulic System Selection",
          description:
            "Assess circulation requirements, hydraulic losses and fluid characteristics to identify suitable pump configurations and operating conditions.",
        },
        {
          title: "Thermal Equipment Integration",
          description:
            "Coordinate heat exchangers, circulation loops and evaporation chambers to achieve the required thermal performance.",
        },
        {
          title: "Scaling and Fouling Assessment",
          description:
            "Evaluate process fluid characteristics and operating conditions to identify potential scaling and fouling considerations.",
        },
        {
          title: "Vapour Separation and Product Handling",
          description:
            "Develop vapour separation and concentrate handling arrangements according to downstream process requirements.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Forced Circulation Evaporator Product Range",
      intro:
        "Representative equipment and system configurations designed for industrial evaporation and challenging liquid processing applications.",
      items: [
        {
          id: "forced-circulation-evaporator-product-1",
          name: "Forced Circulation Evaporator Packages",
          category: "Evaporation Equipment",
          description:
            "Integrated evaporation systems combining heat exchange equipment, circulation pumps and vapour separation chambers for controlled liquid concentration.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial forced circulation evaporator package",
          },
          specs: [
            "Integrated circulation and heat exchange arrangement",
            "Configuration based on process evaporation requirements",
          ],
        },
        {
          id: "forced-circulation-evaporator-product-2",
          name: "Circulation Pump Assemblies",
          category: "Mechanical Equipment",
          description:
            "Pump arrangements designed to maintain the required liquid circulation through the heat exchanger and associated process equipment.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial circulation pump assembly",
          },
          specs: [
            "Pump selection based on process fluid characteristics",
            "Hydraulic configuration established through engineering calculations",
          ],
        },
        {
          id: "forced-circulation-evaporator-product-3",
          name: "Vapour Separation Chambers",
          category: "Process Equipment",
          description:
            "Separation equipment designed to separate generated vapour from concentrated process liquid during evaporation.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial vapour separation chamber",
          },
          specs: [
            "Separation arrangement based on process operating conditions",
            "Vapour and liquid outlet configurations are application-specific",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Forced Circulation Evaporator Engineering Services",
      intro:
        "Engineering and technical services supporting circulation system design, evaporation performance and process integration.",
      items: [
        {
          title: "Evaporation Process Evaluation",
          description:
            "Evaluate feed properties, concentration targets and evaporation duty to establish the required system configuration.",
        },
        {
          title: "Circulation System Engineering",
          description:
            "Assess circulation flow requirements, hydraulic conditions and pump selection for reliable system operation.",
        },
        {
          title: "Thermal Design and Integration",
          description:
            "Evaluate heat exchanger requirements, thermal balance and heating medium conditions for the intended evaporation duty.",
        },
        {
          title: "System Integration and Optimisation",
          description:
            "Coordinate circulation pumps, heat exchangers, vapour separation chambers and associated process connections.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Forced Circulation Evaporator Industrial Applications",
      intro:
        "Evaporation solutions for industrial operations involving challenging liquid characteristics, concentration and recovery requirements.",
      items: [
        {
          title: "Chemical Process Concentration",
          description:
            "Concentration of chemical solutions and process liquids requiring controlled circulation and thermal processing.",
        },
        {
          title: "High-Solids Liquid Processing",
          description:
            "Applications involving liquid streams with elevated solids content where suitable forced circulation arrangements are required.",
        },
        {
          title: "Industrial Wastewater Concentration",
          description:
            "Evaporation applications for concentrating suitable industrial wastewater streams and supporting liquid recovery processes.",
        },
        {
          title: "Scaling-Prone Process Streams",
          description:
            "Applications involving process liquids with scaling tendencies where circulation and operating conditions require careful evaluation.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Forced Circulation Evaporator Technical Specifications",
      intro:
        "Evaporator specifications are established according to fluid characteristics, circulation requirements, thermal duty and process operating conditions.",
      items: [
        {
          name: "Circulation rate",
          value: "Determined through hydraulic calculations",
        },
        {
          name: "Evaporation duty",
          value: "Established from material and energy balances",
        },
        {
          name: "Pump configuration",
          value: "Selected according to process fluid characteristics",
        },
        {
          name: "Operating pressure",
          value: "Defined by process requirements",
        },
        {
          name: "Operating temperature",
          value: "Established from thermal design conditions",
        },
        {
          name: "Heat exchanger",
          value: "Selected according to thermal requirements",
        },
        {
          name: "Vapour separation",
          value: "Designed according to process conditions",
        },
        {
          name: "Materials of construction",
          value: "Selected based on fluid compatibility",
        },
      ],
      note:
        "The above specifications are indicative design considerations. Actual circulation rates, evaporation capacity, operating conditions and equipment dimensions must be confirmed against the approved process and mechanical design.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "Forced Circulation Evaporator Operating Process",
      intro:
        "A representative operating sequence illustrating how mechanical pumping and controlled heat transfer support industrial evaporation.",
      steps: [
        {
          title: "Feed Introduction",
          description:
            "The incoming liquid feed enters the process circulation system and combines with the circulating liquid stream.",
          output: "Incoming liquid feed",
        },
        {
          title: "Forced Circulation",
          description:
            "A circulation pump moves the process liquid through the heat exchanger at the required flow conditions.",
          output: "Circulating process stream",
        },
        {
          title: "Thermal Energy Transfer",
          description:
            "The circulating liquid receives thermal energy through the heat exchanger before entering the evaporation chamber.",
          output: "Heated process stream",
        },
        {
          title: "Vapour Separation",
          description:
            "The heated process stream enters the evaporation chamber, where generated vapour is separated from the remaining concentrated liquid. The liquid may return to circulation or exit as concentrate.",
          output: "Vapour and concentrate streams",
        },
      ],
      note:
        "Actual evaporation performance depends on circulation rate, fluid properties, heat transfer conditions, operating pressure and system configuration.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Forced Circulation Evaporator Lifecycle Support",
      intro:
        "Support activities covering equipment installation, circulation system maintenance and ongoing thermal performance.",
      items: [
        {
          title: "Installation and Commissioning Support",
          description:
            "Support equipment installation, pump alignment, process connections and initial operational checks within the agreed project scope.",
        },
        {
          title: "Circulation Pump Maintenance",
          description:
            "Plan periodic inspection and maintenance of circulation pumps, mechanical seals, bearings and associated components.",
        },
        {
          title: "Heat Exchanger Inspection",
          description:
            "Evaluate heat transfer surfaces and identify inspection, cleaning and maintenance requirements based on process conditions.",
        },
        {
          title: "System Performance Evaluation",
          description:
            "Review circulation conditions, evaporation performance and operating parameters to identify potential system improvements.",
        },
      ],
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Forced Circulation Evaporator Quality and Compliance",
      intro:
        "Applicable engineering codes, fabrication requirements and inspection procedures depend on equipment configuration, operating conditions and project specifications.",
      items: [
        {
          title: "Pressure Equipment Design",
          description:
            "Identify applicable pressure equipment design requirements according to operating conditions and jurisdiction.",
          reference: "To be confirmed per project",
        },
        {
          title: "Mechanical and Material Requirements",
          description:
            "Establish material selection, fabrication and mechanical requirements based on process fluid compatibility and operating conditions.",
          reference: "Project-specific",
        },
        {
          title: "Inspection and Testing",
          description:
            "Define inspection and testing procedures for equipment integrity, pump assemblies and associated process components.",
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
      heading: "Forced Circulation Evaporator Technical Resources",
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
      heading: "Forced Circulation Evaporator Frequently Asked Questions",
      intro:
        "Common questions about forced circulation evaporators, their operation and industrial applications.",
      items: [
        {
          question: "What is a forced circulation evaporator?",
          answer:
            "A forced circulation evaporator is a thermal processing system that uses a mechanical pump to circulate process liquid through heat exchange equipment and an evaporation chamber.",
        },
        {
          question: "How does a forced circulation evaporator work?",
          answer:
            "A circulation pump moves liquid through a heat exchanger where it receives thermal energy. The heated stream enters an evaporation chamber, where generated vapour is separated from the concentrated liquid.",
        },
        {
          question: "When is a forced circulation evaporator preferred?",
          answer:
            "It is considered for applications involving challenging fluid characteristics, high-solids content or scaling tendencies where controlled mechanical circulation is beneficial.",
        },
        {
          question: "What is the role of the circulation pump?",
          answer:
            "The circulation pump maintains the required liquid flow through the heat exchanger and evaporation system, supporting controlled hydraulic and thermal operating conditions.",
        },
        {
          question: "How is scaling managed in forced circulation systems?",
          answer:
            "Scaling considerations are addressed through appropriate equipment design, circulation conditions, operating parameters and suitable cleaning strategies based on process fluid characteristics.",
        },
        {
          question: "What maintenance does a forced circulation evaporator require?",
          answer:
            "Typical maintenance includes inspecting circulation pumps, mechanical seals, heat transfer surfaces, vapour separation equipment and associated process connections.",
        },
      ],
    },
  ],
};

export default forcedCirculationEvaporator;
