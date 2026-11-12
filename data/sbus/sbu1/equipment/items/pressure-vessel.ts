
import type { SBUChild } from "@/data/sbus/types";

const pressureVessel: SBUChild = {
  slug: "pressure-vessel",

  hero: {
    name: "Pressure Vessel",
    tagline: "Engineered Pressure Equipment for Industrial Applications",
    description:
      "Engineered pressure-containing equipment designed for the storage, processing and handling of fluids under defined operating and design pressure conditions.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial pressure vessel equipment",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Pressure Vessels for Industrial Process Applications",
      description:
        "Pressure vessels are critical components in industrial process facilities, designed to contain fluids under defined operating and design pressure conditions. Their engineering involves mechanical design, pressure and temperature requirements, material selection, corrosion considerations, fabrication documentation and applicable inspection requirements.",
      kpis: [
        { value: "01", label: "Mechanical integrity" },
        { value: "02", label: "Process reliability" },
        { value: "03", label: "Engineered design" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Pressure Vessel Engineering Capabilities",
      intro:
        "Engineering capabilities focused on mechanical integrity, pressure containment and reliable industrial equipment design.",
      items: [
        {
          title: "Pressure Vessel Design Basis",
          description:
            "Establish operating conditions, design pressure, temperature requirements, fluid properties and applicable mechanical design criteria.",
        },
        {
          title: "Mechanical Configuration and Sizing",
          description:
            "Evaluate vessel geometry, dimensions, orientation and mechanical configuration according to process and design requirements.",
        },
        {
          title: "Materials and Corrosion Assessment",
          description:
            "Evaluate material compatibility, corrosion characteristics and operating conditions to establish suitable materials of construction.",
        },
        {
          title: "Nozzle and Connection Arrangement",
          description:
            "Coordinate nozzle locations, process connections, manways and associated equipment interfaces within the vessel design.",
        },
        {
          title: "Inspection and Quality Documentation",
          description:
            "Establish fabrication documentation, inspection requirements and quality verification activities according to project specifications.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Pressure Vessel Product Range",
      intro:
        "Representative pressure-containing equipment configurations designed for different industrial storage, processing and separation requirements.",
      items: [
        {
          id: "pressure-vessel-product-1",
          name: "Process Pressure Vessels",
          category: "Static Equipment",
          description:
            "Pressure-containing vessels configured for specific industrial process duties and defined operating conditions.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial process pressure vessel",
          },
          specs: [
            "Design based on process and mechanical requirements",
            "Configuration and materials are project-specific",
          ],
        },
        {
          id: "pressure-vessel-product-2",
          name: "Storage Vessels",
          category: "Storage Equipment",
          description:
            "Engineered vessel arrangements for holding process fluids under defined operating pressure and temperature conditions.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial pressure storage vessel",
          },
          specs: [
            "Designed around storage and operating requirements",
            "Horizontal or vertical configurations",
          ],
        },
        {
          id: "pressure-vessel-product-3",
          name: "Separator Vessels",
          category: "Separation Equipment",
          description:
            "Pressure-containing vessels designed to separate process phases according to fluid characteristics and intended process service.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial process separator vessel",
          },
          specs: [
            "Configuration based on separation requirements",
            "Internal arrangements are application-specific",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Pressure Vessel Engineering Services",
      intro:
        "Engineering and technical services supporting pressure vessel design, fabrication planning and process integration.",
      items: [
        {
          title: "Design Basis Development",
          description:
            "Establish process conditions, design requirements and applicable mechanical criteria for pressure vessel engineering.",
        },
        {
          title: "Mechanical Design and Engineering",
          description:
            "Develop vessel configurations, dimensions, material selection and mechanical connection arrangements.",
        },
        {
          title: "Fabrication and Quality Planning",
          description:
            "Coordinate fabrication requirements, inspection activities and quality documentation according to project specifications.",
        },
        {
          title: "Installation and Integration Support",
          description:
            "Support equipment installation, process connections and integration with associated plant systems within the agreed project scope.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Pressure Vessel Industrial Applications",
      intro:
        "Pressure vessel solutions for industrial facilities involving fluid containment, storage, processing and separation.",
      items: [
        {
          title: "Chemical Process Plants",
          description:
            "Pressure-containing equipment for chemical production, storage and process operations.",
        },
        {
          title: "Oil and Gas Facilities",
          description:
            "Vessels for hydrocarbon processing, fluid containment and associated process operations.",
        },
        {
          title: "Petrochemical Processing",
          description:
            "Pressure vessel applications supporting petrochemical production and industrial processing systems.",
        },
        {
          title: "Industrial Utilities",
          description:
            "Pressure-containing equipment for selected utility systems and supporting industrial operations.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Pressure Vessel Technical Specifications",
      intro:
        "Vessel specifications are established according to process conditions, pressure and temperature requirements, mechanical design and applicable engineering codes.",
      items: [
        {
          name: "Design pressure",
          value: "Established from process and design basis",
        },
        {
          name: "Design temperature",
          value: "Defined by project requirements",
        },
        {
          name: "Vessel orientation",
          value: "Horizontal or vertical",
        },
        {
          name: "Vessel configuration",
          value: "Selected according to process requirements",
        },
        {
          name: "Materials of construction",
          value: "Selected through material and corrosion assessment",
        },
        {
          name: "Nozzle arrangement",
          value: "Defined by process and mechanical requirements",
        },
        {
          name: "Design code",
          value: "Confirmed for jurisdiction and project",
        },
        {
          name: "Inspection requirements",
          value: "Defined by applicable codes and project quality plan",
        },
      ],
      note:
        "The above specifications are indicative design considerations. Actual vessel dimensions, pressure ratings, material specifications and inspection requirements must be confirmed against the approved mechanical design and applicable codes.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "Pressure Vessel Engineering and Delivery Process",
      intro:
        "A representative engineering and manufacturing workflow illustrating the development and integration of industrial pressure vessels.",
      steps: [
        {
          title: "Design Basis Development",
          description:
            "Establish operating conditions, fluid properties, pressure and temperature requirements and applicable mechanical design criteria.",
          output: "Approved design basis",
        },
        {
          title: "Mechanical Design",
          description:
            "Develop vessel configuration, dimensions, material selection, nozzle arrangements and associated mechanical details.",
          output: "Mechanical design package",
        },
        {
          title: "Fabrication and Inspection",
          description:
            "Carry out fabrication activities and agreed quality verification and inspection procedures according to project specifications.",
          output: "Inspected vessel",
        },
        {
          title: "Installation and Integration",
          description:
            "Install and connect the vessel to the designated process systems according to project requirements.",
          output: "Integrated process equipment",
        },
      ],
      note:
        "Actual fabrication, inspection, testing and installation responsibilities depend on the approved project scope and applicable requirements.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Pressure Vessel Lifecycle Support",
      intro:
        "Support activities covering equipment installation, inspection, maintenance and ongoing mechanical integrity.",
      items: [
        {
          title: "Installation and Commissioning Support",
          description:
            "Support vessel installation, foundation interfaces, process connections and initial operational checks within the agreed project scope.",
        },
        {
          title: "Inspection and Maintenance",
          description:
            "Plan inspection activities to evaluate vessel condition, mechanical integrity and operating suitability.",
        },
        {
          title: "Corrosion and Material Assessment",
          description:
            "Evaluate material condition and corrosion considerations based on process fluid characteristics and operating conditions.",
        },
        {
          title: "Modification and Revamping",
          description:
            "Assess proposed equipment modifications against existing design conditions, mechanical limitations and applicable requirements.",
        },
      ],
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Pressure Vessel Quality and Compliance",
      intro:
        "Applicable engineering codes, fabrication requirements and inspection procedures depend on vessel design, operating conditions and project jurisdiction.",
      items: [
        {
          title: "Pressure Vessel Design Codes",
          description:
            "Identify applicable pressure vessel design and construction requirements according to jurisdiction and project specifications.",
          reference: "To be confirmed per project",
        },
        {
          title: "Material and Fabrication Requirements",
          description:
            "Establish material specifications, fabrication procedures and traceability requirements according to the approved design.",
          reference: "Project-specific",
        },
        {
          title: "Inspection and Testing",
          description:
            "Define inspection, non-destructive examination and testing requirements according to applicable codes and the project quality plan.",
          reference: "Project quality plan",
        },
      ],
      note:
        "Applicable codes, standards, statutory requirements and certification scopes must be verified against the actual vessel specification and jurisdiction. No specific company certification is implied.",
    },

    {
      id: "downloads-resources",
      label: "Downloads & Technical Resources",
      type: "downloads-resources",
      heading: "Pressure Vessel Technical Resources",
      intro:
        "Technical brochures, equipment datasheets, general arrangement drawings, fabrication documentation and engineering resources can be listed here when approved for public distribution.",
      items: [],
      note:
        "No downloadable technical resources have been configured for this page yet.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Pressure Vessel Frequently Asked Questions",
      intro:
        "Common questions about industrial pressure vessels, their design and process applications.",
      items: [
        {
          question: "What is an industrial pressure vessel?",
          answer:
            "A pressure vessel is a closed container designed to hold gases or liquids under defined internal or external pressure conditions.",
        },
        {
          question: "How are pressure vessels designed?",
          answer:
            "Pressure vessel design considers operating and design pressure, temperature, fluid properties, vessel geometry, material selection, corrosion requirements and applicable design codes.",
        },
        {
          question: "What is the difference between horizontal and vertical pressure vessels?",
          answer:
            "Horizontal and vertical vessels differ in their orientation and installation arrangement. Selection depends on process requirements, available space, fluid characteristics and equipment configuration.",
        },
        {
          question: "What materials are used in pressure vessel construction?",
          answer:
            "Material selection depends on pressure and temperature conditions, process fluid compatibility, corrosion characteristics and applicable mechanical design requirements.",
        },
        {
          question: "What is the purpose of a separator vessel?",
          answer:
            "A separator vessel is designed to separate different process phases, such as gas and liquid or liquid and liquid, according to the intended process duty.",
        },
        {
          question: "What inspections are required for pressure vessels?",
          answer:
            "Inspection requirements depend on the applicable design code, jurisdiction, service conditions and project quality plan. They may include visual inspection, non-destructive examination and pressure testing where specified.",
        },
      ],
    },
  ],
};

export default pressureVessel;

