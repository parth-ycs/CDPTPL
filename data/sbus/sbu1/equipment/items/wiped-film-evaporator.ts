
import type { SBUChild } from "@/data/sbus/types";

const wipedFilmEvaporator: SBUChild = {
  slug: "wiped-film-evaporator",

  hero: {
    name: "Wiped Film Evaporator",
    tagline: "Controlled Film Evaporation for Challenging Process Fluids",
    description:
      "Wiped film evaporators use rotating wiping elements to continuously distribute process liquid over a heated surface, enabling controlled evaporation for demanding thermal processing applications.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial wiped film evaporator equipment",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Controlled Wiped Film Evaporation Technology",
      description:
        "Wiped film evaporators are suitable for process applications where fluid viscosity, heat sensitivity, fouling behaviour or residence time require special consideration. A rotating mechanism continuously distributes the liquid across the heated surface, supporting controlled thermal processing and product concentration.",
      kpis: [
        { value: "01", label: "Mechanical film distribution" },
        { value: "02", label: "Controlled evaporation" },
        { value: "03", label: "Challenging process fluids" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Wiped Film Evaporator Engineering Capabilities",
      intro:
        "Engineering capabilities focused on product characteristics, mechanical film distribution, thermal performance and process integration.",
      items: [
        {
          title: "Product and Evaporation Duty Assessment",
          description:
            "Evaluate feed characteristics, viscosity, thermal sensitivity and target concentration to establish the evaporation duty.",
        },
        {
          title: "Wiping Mechanism Configuration",
          description:
            "Determine suitable rotating wiping arrangements to distribute process liquid across the heated surface.",
        },
        {
          title: "Thermal and Vacuum System Integration",
          description:
            "Evaluate heating requirements and coordinate reduced-pressure operation and associated vacuum systems where required.",
        },
        {
          title: "Fouling and Product Handling Assessment",
          description:
            "Assess product behaviour, potential surface deposits and handling requirements to support suitable equipment configuration.",
        },
        {
          title: "Vapour and Concentrate Recovery",
          description:
            "Coordinate vapour collection, concentrated product discharge and downstream recovery arrangements.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Wiped Film Evaporation Solutions",
      intro:
        "Equipment configurations and supporting assemblies designed for controlled evaporation of viscous and heat-sensitive process materials.",
      items: [
        {
          id: "wiped-film-product-1",
          name: "Vertical Wiped Film Evaporators",
          category: "Evaporation Equipment",
          description:
            "Vertical evaporation systems incorporating rotating wiping assemblies to distribute liquid over a heated surface for controlled evaporation.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Vertical industrial wiped film evaporator",
          },
          specs: [
            "Vertical heated-surface configuration",
            "Rotating wiping assembly",
            "Designed around product and evaporation requirements",
          ],
        },
        {
          id: "wiped-film-product-2",
          name: "Wiping Rotor Assemblies",
          category: "Mechanical Components",
          description:
            "Rotating mechanical components designed to continuously distribute process liquid across the heated surface of the evaporator.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Wiped film evaporator rotor assembly",
          },
          specs: [
            "Rotating mechanical assembly",
            "Liquid film distribution",
            "Configuration based on product characteristics",
          ],
        },
        {
          id: "wiped-film-product-3",
          name: "Vacuum Evaporation Packages",
          category: "Process Systems",
          description:
            "Associated process equipment packages for reduced-pressure evaporation applications, including vacuum and vapour handling interfaces.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial vacuum evaporation package",
          },
          specs: [
            "Reduced-pressure operation",
            "Vacuum system integration",
            "Vapour handling and process connections",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Wiped Film Evaporator Engineering Services",
      intro:
        "Engineering support covering process assessment, wiping mechanism selection, thermal design and supporting system integration.",
      items: [
        {
          title: "Process and Product Assessment",
          description:
            "Evaluate feed composition, viscosity, thermal sensitivity and product behaviour to establish the process design basis.",
        },
        {
          title: "Evaporator Configuration",
          description:
            "Determine suitable equipment and internal wiping arrangements based on process requirements.",
        },
        {
          title: "Thermal and Vacuum Design",
          description:
            "Assess thermal duty, heating requirements and reduced-pressure operating conditions.",
        },
        {
          title: "Mechanical Assembly Assessment",
          description:
            "Evaluate rotor and wiping element configuration for the intended product and operating conditions.",
        },
        {
          title: "Vapour and Product Handling Integration",
          description:
            "Coordinate vapour collection, concentrated product discharge and downstream process interfaces.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Industrial Applications of Wiped Film Evaporators",
      intro:
        "Wiped film evaporation supports thermal processing applications where viscosity, heat exposure, fouling behaviour and residence time are important considerations.",
      items: [
        {
          title: "Viscous Chemical Processing",
          description:
            "Processing of suitable high-viscosity chemical streams requiring controlled liquid distribution across heated surfaces.",
        },
        {
          title: "Specialty Chemical Concentration",
          description:
            "Concentration of specialty chemical products under process conditions selected for product characteristics.",
        },
        {
          title: "Heat-Sensitive Product Processing",
          description:
            "Thermal processing of products where controlled film formation and residence time are important design considerations.",
        },
        {
          title: "Industrial Solvent Recovery",
          description:
            "Evaporation and separation of volatile solvents from suitable process mixtures for downstream recovery.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Wiped Film Evaporator Technical Specifications",
      intro:
        "Equipment configuration and operating parameters are established according to product characteristics, mechanical requirements and evaporation duty.",
      items: [
        {
          name: "Product viscosity",
          value: "Established from feed characterization",
        },
        {
          name: "Operating pressure",
          value: "Selected for evaporation requirements",
        },
        {
          name: "Rotor configuration",
          value: "Selected according to product characteristics",
        },
        {
          name: "Thermal duty",
          value: "Calculated from process heat balance",
        },
        {
          name: "Materials",
          value: "Selected for process compatibility",
        },
        {
          name: "Heating medium",
          value: "Selected according to thermal requirements",
        },
        {
          name: "Product residence time",
          value: "Evaluated during process design",
        },
        {
          name: "Vapour handling",
          value: "Configured according to process requirements",
        },
      ],
      note:
        "Final specifications, including heat transfer area, rotor design, operating pressure, temperature, materials and evaporation capacity, must be established through project-specific process and mechanical design.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "How Wiped Film Evaporators Work",
      intro:
        "Wiped film evaporators use rotating mechanical elements to distribute process liquid over a heated surface, supporting controlled evaporation and product concentration.",
      steps: [
        {
          title: "Feed Distribution",
          description:
            "The process liquid enters the equipment and is directed toward the heated surface.",
          output: "Incoming liquid film",
        },
        {
          title: "Mechanical Wiping",
          description:
            "Rotating wiping elements distribute the liquid across the heating surface and maintain a continuously renewed film.",
          output: "Continuously distributed film",
        },
        {
          title: "Controlled Evaporation",
          description:
            "The heated surface supplies thermal energy to vaporise volatile components from the liquid film.",
          output: "Vapour and concentrated liquid",
        },
        {
          title: "Product Collection",
          description:
            "The concentrated liquid and generated vapour are routed to their respective outlets for further handling.",
          output: "Separated process streams",
        },
      ],
      note:
        "Actual evaporation performance depends on product properties, rotor configuration, heating conditions, operating pressure and residence time.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Wiped Film Evaporator Lifecycle Support",
      intro:
        "Support activities focused on maintaining mechanical condition, thermal performance and reliable processing of challenging products.",
      items: [
        {
          title: "Installation and Commissioning",
          description:
            "Coordinate equipment installation, process connections, heating interfaces and initial mechanical and operational checks.",
        },
        {
          title: "Rotor and Wiping Assembly Inspection",
          description:
            "Inspect rotating assemblies and wiping components according to equipment maintenance requirements.",
        },
        {
          title: "Thermal Performance Monitoring",
          description:
            "Review heating conditions, evaporation performance and operating parameters against established process requirements.",
        },
        {
          title: "Operational Troubleshooting",
          description:
            "Investigate potential issues involving film distribution, fouling, product discharge and vapour handling.",
        },
      ],
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Wiped Film Evaporator Quality and Compliance",
      intro:
        "Applicable design codes, fabrication requirements and inspection procedures depend on equipment configuration, operating conditions and project specifications.",
      items: [
        {
          title: "Process and Thermal Design",
          description:
            "Establish process design conditions, evaporation requirements and thermal operating parameters.",
          reference: "Project-specific design basis",
        },
        {
          title: "Pressure Equipment Design",
          description:
            "Determine applicable mechanical design requirements for pressure-containing equipment and associated components.",
          reference: "Applicable project codes",
        },
        {
          title: "Mechanical Component Requirements",
          description:
            "Define design, material and inspection requirements for rotating assemblies and wiping components.",
          reference: "Project mechanical specifications",
        },
        {
          title: "Inspection and Quality Assurance",
          description:
            "Define applicable fabrication inspection, testing and quality verification requirements.",
          reference: "Project quality plan",
        },
      ],
      note:
        "Applicable codes, standards and certifications must be confirmed against the equipment design, operating conditions and project jurisdiction. No specific company certification is implied.",
    },

    {
      id: "downloads-resources",
      label: "Downloads & Technical Resources",
      type: "downloads-resources",
      heading: "Wiped Film Evaporator Technical Resources",
      intro:
        "Technical brochures, equipment datasheets, rotor assembly drawings, general arrangement drawings and engineering documentation can be listed here when approved for public distribution.",
      items: [],
      note:
        "No downloadable technical resources have been configured for this page yet.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Wiped Film Evaporators Frequently Asked Questions",
      intro:
        "Common questions about wiped film evaporation, mechanical film distribution and industrial applications.",
      items: [
        {
          question: "What is a wiped film evaporator?",
          answer:
            "A wiped film evaporator is thermal processing equipment that uses rotating wiping elements to distribute liquid over a heated surface for controlled evaporation.",
        },
        {
          question: "How does a wiped film evaporator work?",
          answer:
            "The feed enters the evaporator and is spread across a heated surface by rotating wiping elements. Thermal energy vaporises volatile components, while the concentrated liquid and generated vapour are collected separately.",
        },
        {
          question: "What is the difference between thin film and wiped film evaporators?",
          answer:
            "Wiped film evaporators use rotating wiping elements to mechanically distribute the liquid film. Thin film evaporators may use different internal arrangements depending on their design.",
        },
        {
          question: "Are wiped film evaporators suitable for viscous products?",
          answer:
            "They can be suitable for selected viscous products because mechanical wiping helps distribute liquid across the heated surface. Actual suitability depends on product viscosity and operating conditions.",
        },
        {
          question: "Can wiped film evaporators handle heat-sensitive materials?",
          answer:
            "They can be configured for heat-sensitive materials where controlled film formation and product residence time are important. Suitability must be evaluated against the product's thermal characteristics.",
        },
        {
          question: "Can wiped film evaporators operate under vacuum?",
          answer:
            "Yes. They can be designed for reduced-pressure operation where required by the evaporation duty, with suitable vacuum and vapour handling arrangements.",
        },
      ],
    },
  ],
};

export default wipedFilmEvaporator;
