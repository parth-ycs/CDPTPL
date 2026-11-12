
import type { SBUChild } from "@/data/sbus/types";

const fallingFilmEvaporator: SBUChild = {
  slug: "falling-film-evaporator",

  hero: {
    name: "Falling Film Evaporator",
    tagline: "Efficient Industrial Evaporation Solutions",
    description:
      "Engineered falling film evaporators designed for efficient liquid concentration through controlled downward film flow and heat transfer across heated surfaces.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial falling film evaporator equipment",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Falling Film Evaporators for Industrial Applications",
      description:
        "Falling film evaporators are thermal processing systems used to concentrate suitable liquids through controlled evaporation. Liquid is distributed over heated surfaces and flows downward as a thin film, allowing efficient heat transfer and evaporation. System performance depends on liquid distribution, heat transfer characteristics, vapour separation and operating conditions.",
      kpis: [
        { value: "01", label: "Controlled evaporation" },
        { value: "02", label: "Thermal efficiency" },
        { value: "03", label: "Liquid concentration" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Falling Film Evaporator Engineering Capabilities",
      intro:
        "Engineering capabilities focused on evaporation performance, thermal efficiency and reliable process operation.",
      items: [
        {
          title: "Evaporation Capacity Assessment",
          description:
            "Evaluate feed flow, concentration requirements and material balance to establish the required evaporation capacity.",
        },
        {
          title: "Liquid Distributor Design",
          description:
            "Assess liquid distribution arrangements to achieve uniform feed distribution and consistent film formation across heating surfaces.",
        },
        {
          title: "Heat Transfer and Thermal Balance",
          description:
            "Evaluate heat transfer requirements, heating medium conditions and thermal balance for the intended evaporation duty.",
        },
        {
          title: "Vapour Separation and Handling",
          description:
            "Develop vapour separation and handling arrangements to support effective separation of generated vapour and concentrated liquid.",
        },
        {
          title: "Multi-effect System Integration",
          description:
            "Evaluate multi-effect evaporation arrangements to improve thermal utilisation where process conditions permit.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Falling Film Evaporator Product Range",
      intro:
        "Representative evaporation equipment and process configurations designed for different industrial liquid concentration requirements.",
      items: [
        {
          id: "falling-film-evaporator-product-1",
          name: "Vertical Falling Film Evaporators",
          category: "Evaporation Equipment",
          description:
            "Vertical heat exchanger arrangements designed to support downward liquid film flow over heated surfaces for controlled evaporation.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Vertical industrial falling film evaporator",
          },
          specs: [
            "Vertical heating surface arrangement",
            "Designed around liquid distribution and evaporation requirements",
          ],
        },
        {
          id: "falling-film-evaporator-product-2",
          name: "Liquid Distribution Systems",
          category: "Process Internals",
          description:
            "Liquid distribution components designed to provide uniform feed introduction and consistent liquid coverage across heating surfaces.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial evaporator liquid distribution system",
          },
          specs: [
            "Distribution configuration based on feed characteristics",
            "Designed to support uniform film formation",
          ],
        },
        {
          id: "falling-film-evaporator-product-3",
          name: "Multi-effect Evaporator Systems",
          category: "Thermal Systems",
          description:
            "Integrated evaporation arrangements using multiple effects to utilise available thermal energy across successive evaporation stages.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial multi-effect evaporator system",
          },
          specs: [
            "Effect configuration based on process requirements",
            "Thermal integration evaluated during system design",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Falling Film Evaporator Engineering Services",
      intro:
        "Engineering and technical services supporting evaporation system selection, thermal design and process integration.",
      items: [
        {
          title: "Evaporation Process Evaluation",
          description:
            "Evaluate feed characteristics, required concentration and evaporation duty to establish suitable system requirements.",
        },
        {
          title: "Thermal Design and Sizing",
          description:
            "Assess heating surface requirements, thermal balance and heating medium conditions for the intended process duty.",
        },
        {
          title: "Liquid Distribution Engineering",
          description:
            "Evaluate liquid distribution arrangements to achieve consistent film formation and effective heating surface utilisation.",
        },
        {
          title: "Multi-effect System Integration",
          description:
            "Coordinate multiple evaporation effects and associated thermal systems according to process and utility requirements.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Falling Film Evaporator Industrial Applications",
      intro:
        "Evaporation solutions for industrial operations involving liquid concentration, thermal processing and product recovery.",
      items: [
        {
          title: "Chemical Manufacturing",
          description:
            "Concentration of suitable chemical solutions and process liquids through controlled thermal evaporation.",
        },
        {
          title: "Food and Ingredient Processing",
          description:
            "Liquid concentration applications involving suitable food ingredients and process streams.",
        },
        {
          title: "Industrial Liquid Recovery",
          description:
            "Evaporation systems for recovering and concentrating useful liquid components from industrial process streams.",
        },
        {
          title: "Heat-sensitive Liquid Processing",
          description:
            "Applications involving suitable heat-sensitive liquids where controlled thermal exposure is an important process consideration.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Falling Film Evaporator Technical Specifications",
      intro:
        "Evaporator specifications are established according to feed properties, evaporation duty, heating medium conditions and process operating requirements.",
      items: [
        {
          name: "Feed flow",
          value: "Defined by process requirements",
        },
        {
          name: "Evaporation capacity",
          value: "Established through material balance",
        },
        {
          name: "Heating medium",
          value: "Selected according to thermal design",
        },
        {
          name: "Liquid distribution",
          value: "Designed for uniform heating surface coverage",
        },
        {
          name: "Operating pressure",
          value: "Defined by process requirements",
        },
        {
          name: "Operating temperature",
          value: "Established from thermal operating conditions",
        },
        {
          name: "Heating surface",
          value: "Selected according to evaporation duty",
        },
        {
          name: "System configuration",
          value: "Single-effect or multi-effect arrangement",
        },
      ],
      note:
        "The above specifications are indicative design considerations. Actual evaporation capacity, heating surface, operating conditions and equipment dimensions must be confirmed against the approved process and mechanical design.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "Falling Film Evaporator Operating Process",
      intro:
        "A representative operating sequence illustrating how liquid is distributed over heated surfaces and concentrated through controlled evaporation.",
      steps: [
        {
          title: "Feed Distribution",
          description:
            "Liquid feed enters the evaporator and is distributed across the heating surfaces through a suitable liquid distribution arrangement.",
          output: "Uniformly distributed liquid",
        },
        {
          title: "Downward Film Flow",
          description:
            "The distributed liquid flows downward along the heated surfaces, forming a thin film under the selected operating conditions.",
          output: "Falling liquid film",
        },
        {
          title: "Heat Transfer and Evaporation",
          description:
            "Thermal energy is transferred from the heating medium to the liquid film, causing a portion of the liquid to vaporise.",
          output: "Vapour and concentrated liquid",
        },
        {
          title: "Vapour and Product Separation",
          description:
            "The generated vapour and remaining concentrated liquid are separated and routed to their respective downstream process systems.",
          output: "Separated product streams",
        },
      ],
      note:
        "Actual evaporation performance depends on feed properties, liquid distribution, heating conditions, operating pressure and heat transfer characteristics.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Falling Film Evaporator Lifecycle Support",
      intro:
        "Support activities covering evaporator installation, inspection, maintenance and ongoing thermal performance.",
      items: [
        {
          title: "Installation and Commissioning Support",
          description:
            "Support equipment installation, process connections and initial operational checks within the agreed project scope.",
        },
        {
          title: "Preventive Maintenance",
          description:
            "Plan periodic inspection and maintenance of heat transfer surfaces, distribution components and associated equipment.",
        },
        {
          title: "Cleaning and Inspection",
          description:
            "Evaluate heating surface condition and identify cleaning requirements based on process material characteristics and operating conditions.",
        },
        {
          title: "Thermal Performance Evaluation",
          description:
            "Review evaporation performance and identify potential improvements in heat transfer, liquid distribution and utility utilisation.",
        },
      ],
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Falling Film Evaporator Quality and Compliance",
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
          title: "Material and Fabrication Requirements",
          description:
            "Establish material selection, fabrication and quality requirements based on process fluid compatibility and thermal operating conditions.",
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
        "Applicable codes, standards and certification requirements must be verified against the actual equipment specification. No specific company certification is implied.",
    },

    {
      id: "downloads-resources",
      label: "Downloads & Technical Resources",
      type: "downloads-resources",
      heading: "Falling Film Evaporator Technical Resources",
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
      heading: "Falling Film Evaporator Frequently Asked Questions",
      intro:
        "Common questions about falling film evaporators, their operation and industrial applications.",
      items: [
        {
          question: "What is a falling film evaporator?",
          answer:
            "A falling film evaporator is a thermal processing system in which liquid flows downward as a thin film over heated surfaces while a portion of the liquid evaporates.",
        },
        {
          question: "How does a falling film evaporator work?",
          answer:
            "Liquid is distributed across heated surfaces and flows downward as a thin film. Heat transfers from the heating medium into the liquid, causing partial evaporation. The generated vapour and concentrated liquid are subsequently separated.",
        },
        {
          question: "What is the importance of liquid distribution?",
          answer:
            "Uniform liquid distribution helps maintain consistent film coverage across heating surfaces and supports effective heat transfer and evaporation performance.",
        },
        {
          question: "What are multi-effect evaporator systems?",
          answer:
            "Multi-effect systems use multiple evaporation stages arranged to utilise thermal energy from one effect in subsequent effects where process conditions permit.",
        },
        {
          question: "Which industries use falling film evaporators?",
          answer:
            "They are used in suitable chemical, food and ingredient processing, industrial liquid recovery and other applications requiring controlled liquid concentration.",
        },
        {
          question: "What maintenance does a falling film evaporator require?",
          answer:
            "Typical maintenance includes inspecting heating surfaces, liquid distribution components and associated equipment, along with evaluating cleaning requirements and thermal performance.",
        },
      ],
    },
  ],
};

export default fallingFilmEvaporator;
