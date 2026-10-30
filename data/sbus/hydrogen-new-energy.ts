import type {
  ServiceHeroContent,
  ServiceSection,
} from "@/components/solutions/types";

export interface SBUChild {
  slug: string;
  hero: ServiceHeroContent;
  sections: ServiceSection[];
}

export interface SBU {
  name: string;
  offerings: string;
  children: SBUChild[];
  href: string;
}

const hydrogenAndNewEnergy: Omit<SBU, "href"> = {
  name: "Hydrogen and New Energy",
  offerings:
    "Electrolyzers, hydrogen systems, energy transition applications and associated projects.",
  children: [
    {
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
    },
    {
      slug: "hydrogen-systems",
      hero: {
        name: "Hydrogen Systems",
        tagline: "Hydrogen & New Energy",
        description:
          "Integrated hydrogen system concepts for conditioning, delivery and process use, coordinated around required flow, purity, pressure, storage interfaces and project-specific safety requirements.",
        image: "/images/Hero_BG.png",
        imageAlt: "Industrial hydrogen system",
        ctaLabel: "Discuss a project",
        ctaHref: "#enquiry",
      },
      sections: [
        {
          id: "overview",
          label: "Overview",
          type: "overview",
          heading: "Integrated Hydrogen Systems",
          description:
            "Hydrogen systems connect a supply source to the intended end user through suitable conditioning, pressure management, distribution and monitoring equipment. The system architecture depends on source conditions, delivery requirements, storage strategy, materials compatibility and applicable safety requirements.",
          kpis: [
            { value: "01", label: "System architecture" },
            { value: "02", label: "Safety interfaces" },
            { value: "03", label: "Process integration" },
          ],
        },
        {
          id: "capabilities",
          label: "Capabilities",
          type: "capabilities",
          heading: "Hydrogen System Engineering Capabilities",
          intro:
            "Representative engineering workstreams for defining and integrating hydrogen supply and use systems.",
          items: [
            {
              title: "Hydrogen Supply and Demand Definition",
              description:
                "Establish source conditions, flow profile, purity, pressure and downstream demand requirements.",
            },
            {
              title: "Conditioning and Pressure Management",
              description:
                "Evaluate drying, purification, compression, pressure regulation and other conditioning needs based on the intended use.",
            },
            {
              title: "Storage and Distribution Interfaces",
              description:
                "Define interfaces with the selected storage or distribution arrangement, including isolation and monitoring requirements.",
            },
            {
              title: "Process Safety Coordination",
              description:
                "Coordinate hydrogen-specific hazards, ventilation, detection, isolation and other required safeguards with qualified project specialists.",
            },
          ],
        },
        {
          id: "products",
          label: "Products",
          type: "products",
          heading: "Hydrogen System Equipment",
          intro:
            "Representative equipment categories. Storage, compression and distribution configurations must be selected for the specific application.",
          items: [
            {
              id: "hydrogen-systems-product-1",
              name: "Hydrogen Conditioning Packages",
              category: "Gas Systems",
              description:
                "Concepts for conditioning hydrogen to meet defined purity, moisture, pressure and downstream process requirements.",
              image: {
                src: "/images/Hero_BG.png",
                alt: "Hydrogen conditioning package",
              },
              specs: [
                "Outlet requirements set by the end user",
                "Conditioning stages depend on source gas quality",
              ],
            },
            {
              id: "hydrogen-systems-product-2",
              name: "Hydrogen Distribution Interfaces",
              category: "System Integration",
              description:
                "Interface concepts for connecting hydrogen supply and conditioning systems with downstream consumers.",
              image: {
                src: "/images/Hero_BG.png",
                alt: "Hydrogen distribution system",
              },
              specs: [
                "Flow and pressure requirements are application-specific",
                "Materials and connections require engineering review",
              ],
            },
            {
              id: "hydrogen-systems-product-3",
              name: "Monitoring and Control Interfaces",
              category: "Instrumentation and Controls",
              description:
                "Instrumentation and control interfaces for monitoring system conditions and coordinating defined operating and protective functions.",
              image: {
                src: "/images/Hero_BG.png",
                alt: "Hydrogen monitoring and control interfaces",
              },
              specs: [
                "Instrument selection follows the design basis",
                "Safety functions require project-specific validation",
              ],
            },
          ],
        },
        {
          id: "services",
          label: "Services",
          type: "services",
          heading: "Hydrogen Systems Services",
          intro:
            "Representative engineering activities for connecting hydrogen supply, conditioning and end-use systems.",
          items: [
            {
              title: "System Definition",
              description:
                "Document hydrogen supply, pressure, purity, flow profile, demand and downstream process requirements.",
            },
            {
              title: "Conditioning and Distribution Engineering",
              description:
                "Define required treatment, pressure management and interfaces between source and user.",
            },
            {
              title: "Process and Safety Coordination",
              description:
                "Coordinate the process design with project-specific hazard reviews, detection, isolation and protection requirements.",
            },
            {
              title: "Integration Engineering",
              description:
                "Define interfaces among supply, conditioning, storage, distribution, controls and end-use equipment.",
            },
          ],
        },
        {
          id: "industries",
          label: "Industries",
          type: "industries",
          heading: "Hydrogen System Applications",
          intro:
            "Potential application areas. System suitability depends on supply conditions, end-use requirements and project-specific safety assessment.",
          items: [
            {
              title: "Industrial Hydrogen Users",
              description:
                "Hydrogen supply and conditioning concepts for industrial processes with defined quality and pressure requirements.",
            },
            {
              title: "Energy Infrastructure Projects",
              description:
                "Hydrogen systems considered within suitable energy infrastructure and transition projects.",
            },
            {
              title: "Pilot and Demonstration Facilities",
              description:
                "System concepts for appropriately scoped research, pilot or demonstration projects.",
            },
          ],
        },
        {
          id: "technical-specifications",
          label: "Technical Specifications",
          type: "technical-specifications",
          heading: "Hydrogen System Design Parameters",
          intro:
            "Final specifications depend on the hydrogen source, end-use equipment, operating profile and site requirements.",
          items: [
            {
              name: "Hydrogen flow rate",
              value: "Defined from user demand and operating profile",
            },
            {
              name: "Purity and moisture limits",
              value: "Specified by downstream process and equipment requirements",
            },
            {
              name: "Supply and delivery pressure",
              value: "Established from source conditions and end-use requirements",
            },
            {
              name: "Conditioning requirements",
              value: "Drying, purification or compression selected from gas quality and delivery needs",
            },
            {
              name: "Materials compatibility",
              value: "Reviewed for hydrogen service, pressure, temperature and equipment conditions",
            },
            {
              name: "Detection and isolation interfaces",
              value: "Defined through project-specific safety and control design",
            },
          ],
          note:
            "No storage capacity, pressure rating, material suitability or safety performance is guaranteed by these illustrative fields.",
        },
        {
          id: "process-flow",
          label: "Process Flow / How It Works",
          type: "process-flow",
          heading: "Hydrogen System Workflow",
          intro:
            "A simplified sequence for connecting a hydrogen source to a defined end user.",
          steps: [
            {
              title: "Define source and demand",
              description:
                "Confirm supply conditions, hydrogen quality, flow profile and downstream pressure requirements.",
              output: "Hydrogen supply basis",
            },
            {
              title: "Condition the hydrogen",
              description:
                "Apply the required drying, purification, compression or pressure regulation based on the selected design.",
              output: "Conditioned hydrogen stream",
            },
            {
              title: "Integrate distribution or storage",
              description:
                "Connect the supply system with the selected distribution and storage interfaces where included in scope.",
              output: "Integrated delivery system",
            },
            {
              title: "Monitor and deliver",
              description:
                "Verify relevant process conditions and coordinate required operating and protective functions.",
              output: "Defined end-use supply",
            },
          ],
          note:
            "Actual flow arrangements and safety functions must be based on the engineered system and approved project documentation.",
        },
        {
          id: "lifecycle-support",
          label: "Lifecycle Support",
          type: "lifecycle-support",
          heading: "Hydrogen System Lifecycle Support",
          intro:
            "Inspection, maintenance and operational support must follow the equipment design, supplier guidance and applicable site requirements.",
          items: [
            {
              title: "Operating Condition Review",
              description:
                "Compare flow, purity, pressure and other relevant operating data against the approved system basis.",
            },
            {
              title: "Conditioning Equipment Maintenance",
              description:
                "Plan maintenance for filtration, drying, compression and related equipment according to supplier instructions.",
            },
            {
              title: "Detection and Protective System Review",
              description:
                "Coordinate inspection and testing of relevant detection, isolation and protective functions under the site maintenance programme.",
            },
            {
              title: "System Modification Assessment",
              description:
                "Review proposed changes to supply, storage, distribution or end use against process, materials and safety requirements.",
            },
          ],
        },
        {
          id: "standards-certifications",
          label: "Standards & Certifications",
          type: "standards-certifications",
          heading: "Hydrogen System Safety and Compliance",
          intro:
            "Applicable requirements depend on pressure, storage arrangement, equipment classification, site layout and jurisdiction.",
          items: [
            {
              title: "Hydrogen Equipment and Piping",
              description:
                "Determine applicable requirements for equipment, piping, pressure systems and materials in hydrogen service.",
              reference: "To be confirmed per project",
            },
            {
              title: "Hazardous Areas and Gas Detection",
              description:
                "Assess applicable requirements for hazardous-area classification, ventilation, gas detection and protective systems.",
              reference: "Site- and jurisdiction-specific",
            },
            {
              title: "Inspection, Testing and Operating Procedures",
              description:
                "Define required inspections, acceptance records and operating procedures for the engineered system.",
              reference: "Project-specific",
            },
          ],
          note:
            "No company certification or safety approval is claimed. Requirements must be verified by qualified specialists for the specific installation.",
        },
        {
          id: "downloads-resources",
          label: "Downloads & Technical Resources",
          type: "downloads-resources",
          heading: "Hydrogen Systems Resources",
          intro:
            "Approved system brochures, technical notes or public-facing documentation can be listed when available.",
          items: [],
          note:
            "No downloadable resources have been configured for this page yet.",
        },
        {
          id: "faqs",
          label: "FAQs",
          type: "faqs",
          heading: "Hydrogen Systems FAQs",
          intro:
            "General questions about hydrogen conditioning and system integration.",
          items: [
            {
              question: "What information is needed to define a hydrogen system?",
              answer:
                "Key inputs include source conditions, flow rate, purity, moisture limits, pressure, operating profile, end-use requirements, site constraints and applicable safety requirements.",
            },
            {
              question: "Does every hydrogen system require compression or storage?",
              answer:
                "No. Conditioning and storage requirements depend on source pressure, demand profile, delivery conditions and the selected system architecture.",
            },
            {
              question: "Why does hydrogen service require specific materials and safety review?",
              answer:
                "Material compatibility, leakage control, ignition hazards, ventilation, detection and pressure-system requirements must be assessed for the particular operating conditions and installation.",
            },
          ],
        },
      ],
    },
  ],
};

export default hydrogenAndNewEnergy;
