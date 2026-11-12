import type { SBUChild } from "../types";

const hydrogenSystems: SBUChild =     {
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
    };

export default hydrogenSystems;
