import type { SBUChild } from "../types";

const electrolyzers: SBUChild =     {
      slug: "electrolyzers",
      hero: {
        name: "Electrolyzers",
        tagline: "Hydrogen & New Energy",
        description:
          "Electrolyzer systems produce hydrogen from water using electricity. Technology selection and system design depend on power supply characteristics, water quality, operating profile, hydrogen requirements and balance-of-plant integration.",
        image: "/images/services/electrolyzers.jpg",
        imageAlt: "Industrial electrolyzer equipment",
        ctaLabel: "Discuss a project",
        ctaHref: "#enquiry",
      },
      sections: [
        {
          id: "overview",
          label: "Overview",
          type: "overview",
          heading: "Electrolyzer Systems for Hydrogen Production",
          description:
            "Water electrolysis uses electrical energy to split water into hydrogen and oxygen. An electrolyzer project also requires supporting systems for water treatment, electrical supply, thermal management, gas separation and conditioning, controls and safety interfaces. The final configuration depends on the selected technology and project operating conditions.",
          kpis: [
            { value: "01", label: "Technology selection" },
            { value: "02", label: "Balance of plant" },
            { value: "03", label: "System integration" },
          ],
        },
        {
          id: "capabilities",
          label: "Capabilities",
          type: "capabilities",
          heading: "Electrolyzer System Engineering Capabilities",
          intro:
            "Representative engineering workstreams for evaluating and integrating electrolyzer systems. Actual technology availability and project scope must be confirmed.",
          items: [
            {
              title: "Technology and Operating Profile Assessment",
              description:
                "Evaluate suitable electrolyzer technology options against power profile, hydrogen demand, operating flexibility, water quality and project constraints.",
            },
            {
              title: "Balance-of-Plant Engineering",
              description:
                "Define supporting water treatment, cooling, electrical, gas-liquid separation and hydrogen conditioning interfaces.",
            },
            {
              title: "Electrical and Control Integration",
              description:
                "Coordinate power conversion, instrumentation, control logic and interfaces with the selected electrolyzer package.",
            },
            {
              title: "Hydrogen Delivery Integration",
              description:
                "Review downstream requirements for hydrogen purity, pressure, flow and connection to the intended user or process.",
            },
          ],
        },
        {
          id: "products",
          label: "Products",
          type: "products",
          heading: "Electrolyzer and Supporting Systems",
          intro:
            "Representative system categories. The exact equipment arrangement depends on selected technology and supplier scope.",
          items: [
            {
              id: "electrolyzers-product-1",
              name: "Electrolyzer Packages",
              category: "Hydrogen Equipment",
              description:
                "Electrolyzer package concepts for producing hydrogen from treated water using an appropriate electrical supply.",
              image: {
                src: "/images/services/electrolyzers.jpg",
                alt: "Electrolyzer package",
              },
              specs: [
                "Technology and capacity depend on project requirements",
                "Operating envelope and performance require supplier data",
              ],
            },
            {
              id: "electrolyzers-product-2",
              name: "Water Treatment Packages",
              category: "Balance of Plant",
              description:
                "Water conditioning systems selected to meet the feedwater quality requirements of the chosen electrolyzer technology.",
              image: {
                src: "/images/services/electrolyzers.jpg",
                alt: "Water treatment package for electrolysis",
              },
              specs: [
                "Feedwater specification is technology-dependent",
                "Pretreatment and polishing stages depend on source water",
              ],
            },
            {
              id: "electrolyzers-product-3",
              name: "Hydrogen Conditioning Systems",
              category: "Gas Handling",
              description:
                "Downstream conditioning concepts for meeting defined hydrogen quality, pressure and delivery requirements.",
              image: {
                src: "/images/services/electrolyzers.jpg",
                alt: "Hydrogen conditioning system",
              },
              specs: [
                "Required purity and pressure are user-specific",
                "Drying, purification or compression needs require process assessment",
              ],
            },
          ],
        },
        {
          id: "services",
          label: "Services",
          type: "services",
          heading: "Electrolyzer Project Services",
          intro:
            "Representative engineering activities for integrating hydrogen production equipment into a project.",
          items: [
            {
              title: "Technology and System Integration",
              description:
                "Coordinate the selected electrolyzer package with electrical supply, utilities, controls and downstream hydrogen systems.",
            },
            {
              title: "Balance-of-Plant Engineering",
              description:
                "Define supporting water, cooling, gas handling and electrical systems around the selected technology.",
            },
            {
              title: "Hydrogen Interface Definition",
              description:
                "Document hydrogen flow, purity, pressure and delivery interfaces required by the intended application.",
            },
            {
              title: "Project Engineering",
              description:
                "Develop preliminary engineering deliverables and interface documentation for the agreed project scope.",
            },
          ],
        },
        {
          id: "industries",
          label: "Industries",
          type: "industries",
          heading: "Electrolyzer Applications",
          intro:
            "Potential application areas. Project feasibility depends on power supply, hydrogen demand, utilities and local conditions.",
          items: [
            {
              title: "Renewable Hydrogen Projects",
              description:
                "Potential integration with renewable electricity where the power profile and project economics support the selected system.",
            },
            {
              title: "Industrial Hydrogen Users",
              description:
                "Hydrogen supply concepts for suitable industrial applications with defined purity, pressure and flow requirements.",
            },
            {
              title: "Energy Transition Projects",
              description:
                "Projects assessing electrolytic hydrogen as one element of a broader energy or industrial transition strategy.",
            },
          ],
        },
        {
          id: "technical-specifications",
          label: "Technical Specifications",
          type: "technical-specifications",
          heading: "Electrolyzer Design Parameters",
          intro:
            "Technical specifications depend on the selected electrolyzer technology, supplier package and project operating profile.",
          items: [
            {
              name: "Hydrogen production rate",
              value: "Specified from user demand and operating profile",
            },
            {
              name: "Electrical power and profile",
              value: "Defined by production targets, power quality and available supply",
            },
            {
              name: "Feedwater quality",
              value: "Set by the selected technology and supplier requirements",
            },
            {
              name: "Hydrogen purity and pressure",
              value: "Defined by downstream use and conditioning requirements",
            },
            {
              name: "Thermal management",
              value: "Cooling requirements established from technology and operating conditions",
            },
            {
              name: "Balance-of-plant interfaces",
              value: "Water, electrical, controls, gas handling and utility interfaces project-specific",
            },
          ],
          note:
            "No production capacity, efficiency, stack lifetime or operating pressure is guaranteed by these illustrative fields. Use verified supplier and project data.",
        },
        {
          id: "process-flow",
          label: "Process Flow / How It Works",
          type: "process-flow",
          heading: "How Water Electrolysis Works",
          intro:
            "A high-level description of a water-electrolysis system. Specific equipment and flow arrangements depend on the selected technology.",
          steps: [
            {
              title: "Prepare feedwater",
              description:
                "Treat and condition incoming water to meet the electrolyzer's feedwater requirements.",
              output: "Conditioned water",
            },
            {
              title: "Supply electrical energy",
              description:
                "Provide electrical power through the required electrical and power-conversion interfaces.",
              output: "Controlled electrical input",
            },
            {
              title: "Produce and separate gases",
              description:
                "The electrolyzer produces hydrogen and oxygen, which are handled through technology-specific separation and safety systems.",
              output: "Hydrogen and oxygen streams",
            },
            {
              title: "Condition hydrogen for delivery",
              description:
                "Apply required drying, purification or compression and verify the outlet conditions against user requirements.",
              output: "Hydrogen supply stream",
            },
          ],
          note:
            "The detailed process diagram should reflect the actual electrolyzer technology, package boundaries and site-specific safety design.",
        },
        {
          id: "lifecycle-support",
          label: "Lifecycle Support",
          type: "lifecycle-support",
          heading: "Electrolyzer System Lifecycle Support",
          intro:
            "Operating support and maintenance depend on the technology supplier, system configuration and contract scope.",
          items: [
            {
              title: "Operating Performance Review",
              description:
                "Compare hydrogen output, energy use and operating conditions with verified supplier data and the approved design basis.",
            },
            {
              title: "Water Quality and Treatment Review",
              description:
                "Review feedwater quality, treatment system performance and relevant consumables according to technology requirements.",
            },
            {
              title: "Stack and Balance-of-Plant Maintenance",
              description:
                "Plan inspections and maintenance in accordance with supplier instructions and site operating requirements.",
            },
            {
              title: "System Change Assessment",
              description:
                "Assess proposed changes to power profile, hydrogen demand or downstream interfaces against system limitations.",
            },
          ],
        },
        {
          id: "performance-sustainability",
          label: "Performance & Sustainability",
          type: "performance-sustainability",
          heading: "Electrolyzer Performance Indicators",
          intro:
            "Performance and emissions indicators depend on operating measurements, electricity sourcing and the defined system boundary.",
          metrics: [
            {
              title: "Specific Electricity Consumption",
              description:
                "Track electrical energy used per unit of hydrogen produced using a defined measurement basis.",
              category: "Energy",
            },
            {
              title: "Hydrogen Output",
              description:
                "Monitor production rate and availability against the agreed operating profile.",
              category: "Production",
            },
            {
              title: "Water Consumption",
              description:
                "Measure feedwater demand and relevant treatment or purge streams per unit of hydrogen.",
              category: "Resources",
            },
          ],
          note:
            "Hydrogen lifecycle emissions depend strongly on electricity sourcing and other system inputs. Do not claim a carbon intensity without a defined methodology and verified data.",
        },
        {
          id: "standards-certifications",
          label: "Standards & Certifications",
          type: "standards-certifications",
          heading: "Electrolyzer Quality, Safety and Compliance",
          intro:
            "Applicable requirements depend on electrolyzer technology, electrical installation, pressure systems, site and jurisdiction.",
          items: [
            {
              title: "Electrical and Equipment Requirements",
              description:
                "Confirm applicable electrical, equipment and installation requirements for the selected technology and site.",
              reference: "To be confirmed per project",
            },
            {
              title: "Hydrogen and Oxygen Safety",
              description:
                "Review gas handling, ventilation, hazardous areas, pressure systems and protective interfaces as required by the design.",
              reference: "Project- and jurisdiction-specific",
            },
            {
              title: "Supplier Documentation and Testing",
              description:
                "Define inspection, testing, documentation and acceptance requirements for the package and integrated system.",
              reference: "Supplier and project-specific",
            },
          ],
          note:
            "No company certification or product approval is claimed. Confirm current applicable requirements with qualified engineering and compliance specialists.",
        },
        {
          id: "downloads-resources",
          label: "Downloads & Technical Resources",
          type: "downloads-resources",
          heading: "Electrolyzer Technical Resources",
          intro:
            "Approved technology brochures, supplier datasheets or public-facing technical notes can be listed when available.",
          items: [],
          note:
            "No downloadable resources have been configured for this page yet.",
        },
        {
          id: "faqs",
          label: "FAQs",
          type: "faqs",
          heading: "Electrolyzers FAQs",
          intro:
            "General questions about water electrolysis and system integration.",
          items: [
            {
              question: "What determines electrolyzer technology selection?",
              answer:
                "Selection depends on hydrogen demand, power profile, operating flexibility, water quality, required output conditions, technology maturity, supplier support and project economics.",
            },
            {
              question: "Does an electrolyzer system only include the stack?",
              answer:
                "No. A complete system may also require water treatment, power conversion, thermal management, gas separation, hydrogen conditioning, controls and safety systems. Package boundaries vary by supplier and project.",
            },
            {
              question: "Is electrolytic hydrogen always low-carbon?",
              answer:
                "No. Its lifecycle emissions depend on the electricity source and other system inputs. Any carbon-intensity claim requires a defined methodology and verified data.",
            },
          ],
        },
      ],
    };

export default electrolyzers;
