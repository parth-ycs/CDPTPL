
import type { SBUChild } from "@/data/sbus/types";

const thinFilmEvaporator: SBUChild = {
  slug: "thin-film-evaporator",

  hero: {
    name: "Thin Film Evaporator",
    tagline: "Thermal Processing for Heat-Sensitive and Viscous Products",
    description:
      "Thin film evaporators create a controlled liquid film across a heated surface to support rapid evaporation under suitable operating conditions, making them suitable for demanding thermal processing applications.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial thin film evaporator equipment",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Controlled Thin Film Evaporation Technology",
      description:
        "Thin film evaporation is used for concentrating or separating products where residence time, heat exposure and viscosity are important design considerations. A mechanically distributed liquid film provides thermal contact with the heated surface, supporting evaporation under controlled process conditions.",
      kpis: [
        { value: "01", label: "Controlled film formation" },
        { value: "02", label: "Thermal processing" },
        { value: "03", label: "Reduced residence time" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Thin Film Evaporator Engineering Capabilities",
      intro:
        "Engineering capabilities focused on evaporation performance, liquid film distribution, thermal efficiency and product handling.",
      items: [
        {
          title: "Evaporation Duty Assessment",
          description:
            "Evaluate feed properties, required concentration and process conditions to establish the evaporation duty.",
        },
        {
          title: "Film Formation and Distribution Evaluation",
          description:
            "Assess the internal arrangement required to create and maintain a controlled liquid film across the heated surface.",
        },
        {
          title: "Thermal Design and Heat Transfer",
          description:
            "Evaluate heating requirements and heat transfer conditions based on product properties and evaporation duty.",
        },
        {
          title: "Vacuum and Vapour Handling Integration",
          description:
            "Coordinate reduced-pressure operation, vapour removal and associated downstream separation equipment where required.",
        },
        {
          title: "Product Residence Time Assessment",
          description:
            "Evaluate product exposure and residence time to support processing requirements for heat-sensitive and viscous materials.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Thin Film Evaporation Solutions",
      intro:
        "Equipment configurations designed for controlled evaporation, product concentration and vapour separation.",
      items: [
        {
          id: "thin-film-product-1",
          name: "Vertical Thin Film Evaporators",
          category: "Evaporation Equipment",
          description:
            "Vertical equipment configurations designed to distribute liquid across a heated surface, supporting controlled film formation and thermal processing.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Vertical industrial thin film evaporator",
          },
          specs: [
            "Vertical heated-surface arrangement",
            "Controlled liquid film distribution",
            "Configuration based on product properties",
          ],
        },
        {
          id: "thin-film-product-2",
          name: "Agitated Thin Film Evaporators",
          category: "Evaporation Equipment",
          description:
            "Mechanically assisted film systems designed to distribute process liquid across a heated surface for suitable viscous or heat-sensitive process streams.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial agitated thin film evaporator",
          },
          specs: [
            "Mechanically assisted film distribution",
            "Suitable for selected viscous process streams",
            "Designed around thermal and residence time requirements",
          ],
        },
        {
          id: "thin-film-product-3",
          name: "Vapour Separation Assemblies",
          category: "Process Equipment",
          description:
            "Associated equipment for separating and routing generated vapour from the concentrated liquid product during evaporation.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial vapour separation assembly",
          },
          specs: [
            "Vapour collection and separation",
            "Integration with evaporator outlets",
            "Configuration based on downstream process requirements",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Thin Film Evaporator Engineering Services",
      intro:
        "Engineering support covering evaporation duty, thermal design, film distribution and integration with supporting process systems.",
      items: [
        {
          title: "Process and Evaporation Assessment",
          description:
            "Evaluate feed composition, product characteristics and target concentration to establish the process design basis.",
        },
        {
          title: "Equipment Configuration",
          description:
            "Determine suitable evaporator arrangements and internal configurations based on product properties and process requirements.",
        },
        {
          title: "Thermal and Heat Transfer Evaluation",
          description:
            "Assess heating requirements and thermal operating conditions for the specified evaporation duty.",
        },
        {
          title: "Vacuum and Vapour System Integration",
          description:
            "Coordinate vacuum requirements, vapour handling and downstream separation interfaces where applicable.",
        },
        {
          title: "Product Handling Assessment",
          description:
            "Evaluate residence time, product discharge and concentrated product handling requirements.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Industrial Applications of Thin Film Evaporators",
      intro:
        "Thin film evaporation supports thermal processing applications where product viscosity, heat exposure and residence time are important considerations.",
      items: [
        {
          title: "Specialty Chemical Concentration",
          description:
            "Concentration and processing of specialty chemical products requiring controlled thermal exposure.",
        },
        {
          title: "Pharmaceutical Intermediates",
          description:
            "Thermal processing of suitable pharmaceutical intermediate streams where product characteristics influence equipment selection.",
        },
        {
          title: "High-Viscosity Product Processing",
          description:
            "Processing of viscous materials using mechanically distributed liquid films across heated surfaces.",
        },
        {
          title: "Solvent Recovery",
          description:
            "Evaporation and separation of volatile solvents from suitable process mixtures for downstream recovery.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Thin Film Evaporator Technical Specifications",
      intro:
        "Equipment configuration and operating parameters are established according to product characteristics, thermal requirements and evaporation duty.",
      items: [
        {
          name: "Evaporation duty",
          value: "Established through process calculations",
        },
        {
          name: "Film arrangement",
          value: "Selected according to product properties",
        },
        {
          name: "Operating pressure",
          value: "Atmospheric or reduced pressure as required",
        },
        {
          name: "Heating medium",
          value: "Selected according to thermal duty",
        },
        {
          name: "Product residence time",
          value: "Evaluated during process design",
        },
        {
          name: "Feed properties",
          value: "Established from process data",
        },
        {
          name: "Heat transfer requirements",
          value: "Determined through thermal design",
        },
        {
          name: "Vapour handling",
          value: "Configured according to process requirements",
        },
      ],
      note:
        "Final specifications, including heat transfer area, operating pressure, temperature, materials and evaporation capacity, must be established through project-specific process and mechanical design.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "How Thin Film Evaporators Work",
      intro:
        "Thin film evaporators distribute process liquid over a heated surface, allowing a portion of the liquid to vaporise under controlled thermal conditions.",
      steps: [
        {
          title: "Feed Introduction",
          description:
            "The liquid feed enters the evaporator and is directed toward the heated surface through the feed distribution arrangement.",
          output: "Distributed liquid feed",
        },
        {
          title: "Film Formation",
          description:
            "The internal arrangement, including mechanical elements where applicable, creates and maintains a controlled thin liquid film.",
          output: "Thin liquid film",
        },
        {
          title: "Evaporation",
          description:
            "Thermal energy transfers from the heated surface into the liquid film, causing a portion of the volatile component to vaporise.",
          output: "Vapour and concentrated liquid",
        },
        {
          title: "Product Separation",
          description:
            "The generated vapour and concentrated liquid are collected through their respective outlets for downstream handling.",
          output: "Vapour and concentrate streams",
        },
      ],
      note:
        "The actual process arrangement depends on product properties, evaporator configuration, operating pressure and required evaporation duty.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Thin Film Evaporator Lifecycle Support",
      intro:
        "Support activities focused on maintaining thermal performance, mechanical condition and reliable product processing.",
      items: [
        {
          title: "Installation and Commissioning",
          description:
            "Coordinate equipment installation, process connections, heating interfaces and initial operational checks.",
        },
        {
          title: "Inspection and Maintenance",
          description:
            "Inspect heated surfaces, mechanical film distribution components and associated equipment according to maintenance requirements.",
        },
        {
          title: "Thermal Performance Monitoring",
          description:
            "Review operating conditions and heat transfer performance against established process requirements.",
        },
        {
          title: "Operational Troubleshooting",
          description:
            "Investigate potential issues involving film distribution, product buildup, evaporation performance and vapour handling.",
        },
      ],
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Thin Film Evaporator Quality and Compliance",
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
          title: "Material and Product Compatibility",
          description:
            "Select construction materials based on product properties, process conditions and operating environment.",
          reference: "Project material specifications",
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
      heading: "Thin Film Evaporator Technical Resources",
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
      heading: "Thin Film Evaporators Frequently Asked Questions",
      intro:
        "Common questions about thin film evaporation, equipment configurations and industrial applications.",
      items: [
        {
          question: "What is a thin film evaporator?",
          answer:
            "A thin film evaporator is thermal processing equipment that distributes liquid as a thin film over a heated surface to promote evaporation and product concentration.",
        },
        {
          question: "How does a thin film evaporator work?",
          answer:
            "The liquid feed is distributed over a heated surface, where thermal energy causes volatile components to vaporise. The generated vapour and concentrated liquid are collected separately.",
        },
        {
          question: "What is the difference between thin film and agitated thin film evaporators?",
          answer:
            "Thin film evaporators use an internal arrangement to distribute liquid across the heated surface. Agitated thin film evaporators use mechanical elements to assist film distribution and renewal.",
        },
        {
          question: "Are thin film evaporators suitable for heat-sensitive products?",
          answer:
            "They can be suitable for heat-sensitive products because controlled film formation and residence time can limit prolonged thermal exposure. Actual suitability depends on product properties and operating conditions.",
        },
        {
          question: "Can thin film evaporators process viscous materials?",
          answer:
            "Selected configurations, particularly mechanically assisted systems, can be designed for suitable viscous process streams. Selection depends on viscosity, flow behaviour and evaporation requirements.",
        },
        {
          question: "Can thin film evaporators operate under vacuum?",
          answer:
            "Yes. They can be configured for reduced-pressure operation where required by the process, subject to equipment design and associated vacuum and vapour handling arrangements.",
        },
      ],
    },
  ],
};

export default thinFilmEvaporator;
