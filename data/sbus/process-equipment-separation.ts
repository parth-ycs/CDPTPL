import type {
  ServiceHeroContent,
  ServiceSection,
} from "@/components/services/types";

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

const processEquipmentAndSeparation: Omit<SBU, "href"> = {
  name: "Process Equipment and Separation",
  offerings:
    "Distillation, evaporation, columns, reactors, equipment packages and separation systems.",
  children: [
    {
      slug: "distillation-systems",
      hero: {
        name: "Distillation Systems",
        tagline: "Process Equipment & Separation",
        description:
          "Industrial distillation systems separate and purify process streams based on component volatility, process conditions and required product specifications.",
        image: "/images/services/distillation.jpg",
        imageAlt: "Industrial distillation systems",
        ctaLabel: "Discuss a project",
        ctaHref: "#enquiry",
      },
      sections: [
        {
          id: "overview",
          label: "Overview",
          type: "overview",
          heading: "Distillation Systems for Industrial Separation",
          description:
            "Distillation separates components through vapour-liquid equilibrium. System design depends on feed composition, separation targets, throughput, operating pressure, thermal properties and the required product specifications.",
          kpis: [
            { value: "01", label: "Separation design" },
            { value: "02", label: "Process integration" },
            { value: "03", label: "Project support" },
          ],
        },
        {
          id: "capabilities",
          label: "Capabilities",
          type: "capabilities",
          heading: "Distillation Engineering Capabilities",
          intro:
            "Representative technical workstreams for evaluating and engineering distillation systems.",
          items: [
            {
              title: "Separation Basis and Process Design",
              description:
                "Review feed composition, component volatility, target purity and recovery, throughput and operating envelope.",
            },
            {
              title: "Column Configuration",
              description:
                "Evaluate column arrangement, trays or packing, reflux strategy and hydraulic considerations for the intended duty.",
            },
            {
              title: "Thermal System Integration",
              description:
                "Assess reboiler and condenser duties, utility requirements and potential heat-recovery interfaces.",
            },
            {
              title: "Equipment and Control Interfaces",
              description:
                "Coordinate column internals, connected equipment, instrumentation and operating-control requirements.",
            },
          ],
        },
        {
          id: "products",
          label: "Products",
          type: "products",
          heading: "Distillation Equipment",
          intro:
            "Representative equipment categories; actual configurations depend on the project design basis.",
          items: [
            {
              id: "distillation-systems-product-1",
              name: "Distillation Columns",
              category: "Separation Equipment",
              description:
                "Column systems designed around the separation duty, throughput and required product specifications.",
              image: {
                src: "/images/services/distillation.jpg",
                alt: "Distillation column equipment",
              },
              specs: [
                "Column configuration based on process requirements",
                "Operating pressure and thermal duties project-specific",
              ],
            },
            {
              id: "distillation-systems-product-2",
              name: "Column Internals",
              category: "Process Internals",
              description:
                "Tray and packing options assessed for the process duty, capacity, pressure drop and separation performance.",
              image: {
                src: "/images/services/distillation.jpg",
                alt: "Distillation column internals",
              },
              specs: [
                "Internals selected for the intended service",
                "Hydraulic design requires project data",
              ],
            },
            {
              id: "distillation-systems-product-3",
              name: "Distillation Skids",
              category: "Packaged Systems",
              description:
                "Packaged equipment concepts integrating selected distillation equipment and associated process interfaces.",
              image: {
                src: "/images/services/distillation.jpg",
                alt: "Packaged distillation system",
              },
              specs: [
                "Package boundaries defined by project scope",
                "Utilities and controls specified during engineering",
              ],
            },
          ],
        },
        {
          id: "services",
          label: "Services",
          type: "services",
          heading: "Distillation System Services",
          intro:
            "Representative engineering and project support activities for distillation applications.",
          items: [
            {
              title: "Process Design Assessment",
              description:
                "Establish the separation basis and review process inputs needed for preliminary system definition and sizing.",
            },
            {
              title: "Equipment Engineering",
              description:
                "Coordinate process and mechanical requirements for columns, internals and connected equipment.",
            },
            {
              title: "Revamp and Debottlenecking Studies",
              description:
                "Review available operating data, column hydraulics and equipment constraints to assess potential improvement options.",
            },
            {
              title: "Commissioning and Performance Support",
              description:
                "Support agreed checks during start-up and compare observed operation with the approved process basis.",
            },
          ],
        },
        {
          id: "industries",
          label: "Industries",
          type: "industries",
          heading: "Distillation Applications",
          intro:
            "Potential application areas; verify relevance against actual company project experience before publication.",
          items: [
            {
              title: "Chemical Processing",
              description:
                "Separation and purification stages for suitable chemical manufacturing streams.",
            },
            {
              title: "Pharmaceuticals and Fine Chemicals",
              description:
                "Solvent recovery and purification applications subject to product quality and process requirements.",
            },
            {
              title: "Specialty Chemicals",
              description:
                "Separation of selected specialty chemical streams where distillation is technically appropriate.",
            },
          ],
        },
        {
          id: "technical-specifications",
          label: "Technical Specifications",
          type: "technical-specifications",
          heading: "Distillation Design Parameters",
          intro:
            "Final specifications are established from process simulation, engineering calculations and project requirements.",
          items: [
            {
              name: "Feed composition and flow",
              value: "Established from representative process stream data",
            },
            {
              name: "Product purity and recovery",
              value: "Defined by downstream use and product requirements",
            },
            {
              name: "Column internals",
              value: "Tray or packing selection depends on hydraulics and separation duty",
            },
            {
              name: "Operating pressure and temperature",
              value: "Determined from process properties and design requirements",
            },
            {
              name: "Reboiler and condenser duties",
              value: "Calculated from the approved mass and energy balance",
            },
            {
              name: "Materials of construction",
              value: "Selected based on fluid compatibility, corrosion review and design conditions",
            },
          ],
          note:
            "These are specification categories, not verified equipment ratings. Confirm all values against approved engineering documents.",
        },
        {
          id: "process-flow",
          label: "Process Flow / How It Works",
          type: "process-flow",
          heading: "How Distillation Works",
          intro:
            "A simplified sequence for a conventional distillation system. Actual configurations vary with process requirements.",
          steps: [
            {
              title: "Condition the feed",
              description:
                "Confirm feed composition, phase, flow and operating conditions before introducing it to the separation system.",
              output: "Defined feed stream",
            },
            {
              title: "Establish vapour-liquid contact",
              description:
                "Bring rising vapour and descending liquid into contact across trays or packing to support component separation.",
              output: "Enriched vapour and liquid streams",
            },
            {
              title: "Condense and collect overhead",
              description:
                "Condense the overhead stream as required and route product and reflux according to the process design.",
              output: "Overhead product and reflux",
            },
            {
              title: "Reboil and withdraw bottoms",
              description:
                "Supply heat at the reboiler and withdraw the bottoms stream according to the material and energy balance.",
              output: "Separated bottoms stream",
            },
          ],
          note:
            "Use a process-specific diagram where the actual column arrangement and stream routing are known.",
        },
        {
          id: "lifecycle-support",
          label: "Lifecycle Support",
          type: "lifecycle-support",
          heading: "Distillation System Lifecycle Support",
          intro:
            "Maintenance and optimisation activities depend on the equipment, service conditions and agreed support scope.",
          items: [
            {
              title: "Performance Review",
              description:
                "Compare operating data against agreed product specifications, throughput and process design assumptions.",
            },
            {
              title: "Column Internals Inspection",
              description:
                "Plan inspection of trays, packing, liquid distributors and related components based on service and maintenance requirements.",
            },
            {
              title: "Thermal Equipment Maintenance",
              description:
                "Review inspection and maintenance needs for reboilers, condensers and associated heat-transfer systems.",
            },
            {
              title: "Troubleshooting and Revamp Assessment",
              description:
                "Investigate operating constraints and assess proposed changes against hydraulic, thermal and mechanical limits.",
            },
          ],
        },
        {
          id: "performance-sustainability",
          label: "Performance & Sustainability",
          type: "performance-sustainability",
          heading: "Distillation Performance Indicators",
          intro:
            "Use measured operating data and a defined comparison basis to evaluate system performance.",
          metrics: [
            {
              title: "Product Recovery",
              description:
                "Track component recovery against the agreed feed basis and product targets.",
              category: "Separation",
            },
            {
              title: "Product Purity",
              description:
                "Monitor product composition against the specified quality requirements.",
              category: "Quality",
            },
            {
              title: "Specific Energy Demand",
              description:
                "Evaluate reboiler and condenser duties relative to the defined feed or product basis.",
              category: "Energy",
            },
          ],
          note:
            "No numerical efficiency improvement or energy-saving claim is implied without validated operating data.",
        },
        {
          id: "standards-certifications",
          label: "Standards & Certifications",
          type: "standards-certifications",
          heading: "Distillation Equipment Quality and Compliance",
          intro:
            "Applicable codes and inspection requirements depend on equipment type, pressure, service, location and project specification.",
          items: [
            {
              title: "Pressure Equipment Requirements",
              description:
                "Identify applicable pressure-equipment design requirements based on jurisdiction and equipment classification.",
              reference: "To be confirmed per project",
            },
            {
              title: "Materials and Inspection",
              description:
                "Define material traceability, inspection and testing requirements in the approved equipment specification and quality plan.",
              reference: "Project-specific",
            },
            {
              title: "Process Safety Review",
              description:
                "Review relevant process hazards, operating limits and protection interfaces within the engineering scope.",
              reference: "Project-specific",
            },
          ],
          note:
            "No company certification is claimed. Verify applicable standards and any certification scope before publication.",
        },
        {
          id: "downloads-resources",
          label: "Downloads & Technical Resources",
          type: "downloads-resources",
          heading: "Distillation Technical Resources",
          intro:
            "Approved brochures, equipment datasheets or technical notes can be listed when public-facing files are available.",
          items: [],
          note:
            "No downloadable resources have been configured for this page yet.",
        },
        {
          id: "faqs",
          label: "FAQs",
          type: "faqs",
          heading: "Distillation Systems FAQs",
          intro:
            "General technical questions about industrial distillation.",
          items: [
            {
              question: "What determines the design of a distillation column?",
              answer:
                "Feed composition, component volatility, throughput, product purity and recovery targets, operating pressure, thermal properties and allowable pressure drop all influence the design.",
            },
            {
              question: "How are trays and packing selected?",
              answer:
                "Selection depends on separation duty, capacity, pressure drop, fluid properties, fouling considerations, operating range and maintenance requirements.",
            },
            {
              question: "Can an existing column be assessed for debottlenecking?",
              answer:
                "An assessment can review operating data, column hydraulics, internals, heat duties and the constraints of connected equipment. Improvement options require engineering validation.",
            },
          ],
        },
      ],
    },
    {
      slug: "evaporation-systems",
      hero: {
        name: "Evaporation Systems",
        tagline: "Process Equipment & Separation",
        description:
          "Evaporation systems concentrate suitable process liquids by vaporising part of the solvent, with configuration selected around product properties, heat demand and operating constraints.",
        image: "/images/services/distillation.jpg",
        imageAlt: "Industrial evaporation system",
        ctaLabel: "Discuss a project",
        ctaHref: "#enquiry",
      },
      sections: [
        {
          id: "overview",
          label: "Overview",
          type: "overview",
          heading: "Evaporation Systems for Process Concentration",
          description:
            "Evaporation removes part of a liquid feed as vapour to increase the concentration of the remaining solution. System selection depends on feed properties, target concentration, evaporation load, fouling tendency, product sensitivity and available utilities.",
          kpis: [
            { value: "01", label: "Thermal design" },
            { value: "02", label: "Energy review" },
            { value: "03", label: "Plant integration" },
          ],
        },
        {
          id: "capabilities",
          label: "Capabilities",
          type: "capabilities",
          heading: "Evaporation Engineering Capabilities",
          intro:
            "Representative process and thermal engineering workstreams for evaporation duties.",
          items: [
            {
              title: "Concentration Duty Assessment",
              description:
                "Review feed composition, target concentration, evaporation rate, product sensitivity and fouling behaviour.",
            },
            {
              title: "Evaporator Configuration",
              description:
                "Evaluate single-effect or multiple-effect arrangements and vapour recompression options where process conditions support them.",
            },
            {
              title: "Heat-Transfer Design",
              description:
                "Assess thermal duty, heat-transfer requirements, temperature approach and likely fouling constraints.",
            },
            {
              title: "Vapour and Condensate Handling",
              description:
                "Define interfaces for vapour separation, condensation, condensate recovery and concentrate discharge.",
            },
          ],
        },
        {
          id: "products",
          label: "Products",
          type: "products",
          heading: "Evaporation Equipment",
          intro:
            "Representative equipment categories; final selection depends on process and product requirements.",
          items: [
            {
              id: "evaporation-systems-product-1",
              name: "Evaporator Units",
              category: "Evaporation Equipment",
              description:
                "Evaporator configurations selected to concentrate suitable process liquids under defined operating conditions.",
              image: {
                src: "/images/services/distillation.jpg",
                alt: "Evaporator equipment",
              },
              specs: [
                "Configuration selected from process and product properties",
                "Capacity and thermal duty established during engineering",
              ],
            },
            {
              id: "evaporation-systems-product-2",
              name: "Heat Exchanger Packages",
              category: "Thermal Equipment",
              description:
                "Heat-transfer equipment integrated into an evaporation system according to thermal duty and process constraints.",
              image: {
                src: "/images/services/distillation.jpg",
                alt: "Industrial heat exchanger package",
              },
              specs: [
                "Duty calculated from the process heat balance",
                "Materials selected for fluid compatibility",
              ],
            },
            {
              id: "evaporation-systems-product-3",
              name: "Vapour Handling Systems",
              category: "Process Systems",
              description:
                "Equipment concepts for separating, condensing and routing generated vapour and condensate streams.",
              image: {
                src: "/images/services/distillation.jpg",
                alt: "Vapour handling equipment",
              },
              specs: [
                "Stream conditions defined by process design",
                "Condensate handling depends on composition and reuse requirements",
              ],
            },
          ],
        },
        {
          id: "services",
          label: "Services",
          type: "services",
          heading: "Evaporation System Services",
          intro:
            "Representative services for evaluating and integrating evaporation equipment.",
          items: [
            {
              title: "Thermal Process Assessment",
              description:
                "Review feed properties, target concentration, evaporation load and product operating constraints.",
            },
            {
              title: "System Configuration",
              description:
                "Compare suitable evaporation arrangements against process performance, utility and maintenance requirements.",
            },
            {
              title: "Heat Integration Review",
              description:
                "Evaluate potential heat recovery and vapour recompression options where technically appropriate.",
            },
            {
              title: "Plant Integration Support",
              description:
                "Coordinate utilities, controls, condensate routing and interfaces with adjacent plant equipment.",
            },
          ],
        },
        {
          id: "industries",
          label: "Industries",
          type: "industries",
          heading: "Evaporation Applications",
          intro:
            "Potential application areas; validate suitability for the specific feed and product before publication.",
          items: [
            {
              title: "Chemical Processing",
              description:
                "Concentration of suitable chemical solutions and process streams.",
            },
            {
              title: "Food and Ingredient Processing",
              description:
                "Potential concentration duties where product quality and hygiene requirements can be met by the selected design.",
            },
            {
              title: "Industrial Waste Streams",
              description:
                "Volume-reduction or recovery applications for suitable liquid streams following feed and residuals assessment.",
            },
          ],
        },
        {
          id: "technical-specifications",
          label: "Technical Specifications",
          type: "technical-specifications",
          heading: "Evaporation Design Parameters",
          intro:
            "Final specifications are derived from mass and energy balances, product requirements and site utility conditions.",
          items: [
            {
              name: "Feed and product concentration",
              value: "Established from feed analysis and required final concentration",
            },
            {
              name: "Evaporation capacity",
              value: "Calculated from the material balance and operating profile",
            },
            {
              name: "Heat source and thermal duty",
              value: "Selected from process conditions and available utilities",
            },
            {
              name: "Fouling and cleaning",
              value: "Considered from fluid properties, scaling tendency and cleaning requirements",
            },
            {
              name: "Vapour and condensate handling",
              value: "Defined by vapour load, condensate quality and recovery objectives",
            },
            {
              name: "Product temperature limits",
              value: "Set according to product sensitivity and process requirements",
            },
          ],
          note:
            "These are specification categories, not verified equipment ratings or guaranteed energy performance.",
        },
        {
          id: "process-flow",
          label: "Process Flow / How It Works",
          type: "process-flow",
          heading: "How an Evaporation System Works",
          intro:
            "A simplified evaporation sequence. Actual stages depend on the selected evaporator technology and process arrangement.",
          steps: [
            {
              title: "Prepare the feed",
              description:
                "Review feed quality and condition the liquid stream, including preheating where required.",
              output: "Conditioned feed",
            },
            {
              title: "Supply thermal energy",
              description:
                "Transfer heat to vaporise part of the solvent under the selected operating conditions.",
              output: "Vapour and concentrated liquid",
            },
            {
              title: "Separate vapour and liquid",
              description:
                "Separate generated vapour from the concentrate and route each stream to the appropriate system.",
              output: "Separated process streams",
            },
            {
              title: "Recover and discharge streams",
              description:
                "Condense and recover vapour where suitable, then route concentrate to downstream handling.",
              output: "Condensate and concentrate",
            },
          ],
          note:
            "Multiple-effect and vapour-recompression configurations change the heat and vapour routing and should be shown in a process-specific diagram.",
        },
        {
          id: "lifecycle-support",
          label: "Lifecycle Support",
          type: "lifecycle-support",
          heading: "Evaporation System Lifecycle Support",
          intro:
            "Operating and maintenance activities depend on feed characteristics, fouling behaviour and the selected equipment.",
          items: [
            {
              title: "Thermal Performance Review",
              description:
                "Compare observed operating conditions and heat-transfer performance with the approved design basis.",
            },
            {
              title: "Cleaning Strategy",
              description:
                "Plan cleaning methods and intervals based on scaling, fouling, material compatibility and product requirements.",
            },
            {
              title: "Utility and Condensate Review",
              description:
                "Review steam, cooling, condensate and potential heat-recovery interfaces using available operating data.",
            },
            {
              title: "Troubleshooting Support",
              description:
                "Investigate concentration, fouling or throughput issues within the equipment's approved operating envelope.",
            },
          ],
        },
        {
          id: "performance-sustainability",
          label: "Performance & Sustainability",
          type: "performance-sustainability",
          heading: "Evaporation Performance Indicators",
          intro:
            "Performance should be assessed using measured data and a consistent feed or product basis.",
          metrics: [
            {
              title: "Steam Economy",
              description:
                "Where applicable, evaluate the mass of water evaporated per unit of heating steam supplied.",
              category: "Energy",
            },
            {
              title: "Specific Energy Demand",
              description:
                "Compare energy use per unit of evaporated solvent or concentrate produced.",
              category: "Energy",
            },
            {
              title: "Final Concentration",
              description:
                "Monitor product concentration against the agreed process target.",
              category: "Product",
            },
          ],
          note:
            "Do not publish savings or efficiency figures without validated process data and a stated comparison basis.",
        },
        {
          id: "standards-certifications",
          label: "Standards & Certifications",
          type: "standards-certifications",
          heading: "Evaporation Equipment Quality and Compliance",
          intro:
            "Applicable requirements depend on operating conditions, equipment classification, product service and jurisdiction.",
          items: [
            {
              title: "Pressure and Thermal Equipment",
              description:
                "Confirm applicable design requirements for pressure-containing and heat-transfer equipment.",
              reference: "To be confirmed per project",
            },
            {
              title: "Materials and Product Compatibility",
              description:
                "Review material suitability, corrosion considerations and any product-contact requirements.",
              reference: "Process- and project-specific",
            },
            {
              title: "Inspection and Cleaning Requirements",
              description:
                "Define inspection, testing and cleaning provisions in the equipment specification and quality plan.",
              reference: "Project-specific",
            },
          ],
          note:
            "No company certification is claimed. Confirm applicable codes and any product-specific compliance requirements before publication.",
        },
        {
          id: "downloads-resources",
          label: "Downloads & Technical Resources",
          type: "downloads-resources",
          heading: "Evaporation Technical Resources",
          intro:
            "Approved equipment brochures, process notes or technical datasheets can be added when public-facing files are available.",
          items: [],
          note:
            "No downloadable resources have been configured for this page yet.",
        },
        {
          id: "faqs",
          label: "FAQs",
          type: "faqs",
          heading: "Evaporation Systems FAQs",
          intro:
            "General technical questions about industrial evaporation.",
          items: [
            {
              question: "How is an evaporator selected?",
              answer:
                "Selection depends on feed properties, evaporation rate, target concentration, product sensitivity, fouling behaviour, utility availability and cleaning requirements.",
            },
            {
              question: "Can heat recovery reduce utility demand?",
              answer:
                "Heat recovery, multiple-effect arrangements or vapour recompression may be evaluated when process conditions and the overall system design support them. Benefits must be calculated for the specific case.",
            },
            {
              question: "What feed data is needed for preliminary assessment?",
              answer:
                "Useful information includes composition, flow rate, initial and target concentration, temperature limits, fouling tendency and relevant physical properties.",
            },
          ],
        },
      ],
    },
    {
      slug: "columns-and-reactors",
      hero: {
        name: "Columns and Reactors",
        tagline: "Process Equipment & Separation",
        description:
          "Process columns and reactors engineered around defined separation, contacting or reaction duties, operating conditions, material compatibility and applicable design requirements.",
        image: "/images/services/distillation.jpg",
        imageAlt: "Industrial process columns and reactors",
        ctaLabel: "Discuss a project",
        ctaHref: "#enquiry",
      },
      sections: [
        {
          id: "overview",
          label: "Overview",
          type: "overview",
          heading: "Process Columns and Reactors",
          description:
            "Columns and reactors support a range of industrial contacting, separation and reaction duties. Their design is governed by the process duty, fluid properties, operating envelope, materials of construction, mechanical requirements and project-specific codes.",
          kpis: [
            { value: "01", label: "Vessel design" },
            { value: "02", label: "Process safety" },
            { value: "03", label: "Custom engineering" },
          ],
        },
        {
          id: "capabilities",
          label: "Capabilities",
          type: "capabilities",
          heading: "Columns and Reactor Engineering Capabilities",
          intro:
            "Representative process and equipment engineering considerations for columns, reactors and pressure vessels.",
          items: [
            {
              title: "Process Duty Definition",
              description:
                "Define reaction, contacting or separation requirements, throughput, operating envelope and process performance targets.",
            },
            {
              title: "Vessel Configuration and Internals",
              description:
                "Evaluate vessel geometry, internal components, nozzle arrangements and access requirements for the intended duty.",
            },
            {
              title: "Materials and Corrosion Review",
              description:
                "Assess material compatibility against process fluids, temperature, pressure and potential corrosion mechanisms.",
            },
            {
              title: "Mechanical and Process Interfaces",
              description:
                "Coordinate pressure and temperature design conditions, piping connections, instrumentation and plant interfaces.",
            },
          ],
        },
        {
          id: "products",
          label: "Products",
          type: "products",
          heading: "Columns, Reactors and Vessel Equipment",
          intro:
            "Representative equipment categories. Final design and code requirements depend on the specific service and jurisdiction.",
          items: [
            {
              id: "columns-and-reactors-product-1",
              name: "Process Columns",
              category: "Static Equipment",
              description:
                "Column equipment for defined contacting, reaction or separation duties, configured around process requirements.",
              image: {
                src: "/images/services/distillation.jpg",
                alt: "Industrial process column",
              },
              specs: [
                "Internals selected for the process duty",
                "Design conditions established for the specific service",
              ],
            },
            {
              id: "columns-and-reactors-product-2",
              name: "Chemical Reactors",
              category: "Reaction Equipment",
              description:
                "Reactor concepts configured for defined reaction conditions, heat-transfer needs and process interfaces.",
              image: {
                src: "/images/services/distillation.jpg",
                alt: "Industrial chemical reactor",
              },
              specs: [
                "Configuration depends on reaction and operating requirements",
                "Thermal and mixing requirements assessed during design",
              ],
            },
            {
              id: "columns-and-reactors-product-3",
              name: "Pressure Vessels",
              category: "Process Equipment",
              description:
                "Vessel solutions specified for the required process service and applicable mechanical design requirements.",
              image: {
                src: "/images/services/distillation.jpg",
                alt: "Industrial pressure vessel",
              },
              specs: [
                "Design pressure and temperature project-specific",
                "Applicable code and inspection requirements must be confirmed",
              ],
            },
          ],
        },
        {
          id: "services",
          label: "Services",
          type: "services",
          heading: "Columns and Reactor Services",
          intro:
            "Representative activities for specifying and integrating process vessels and equipment.",
          items: [
            {
              title: "Process Specification",
              description:
                "Capture process duty, fluid properties, operating conditions and performance requirements.",
            },
            {
              title: "Mechanical Engineering Coordination",
              description:
                "Coordinate vessel geometry, materials, nozzles, supports and relevant design requirements.",
            },
            {
              title: "Equipment and Interface Review",
              description:
                "Review piping, instrumentation, access, maintenance and plant integration interfaces.",
            },
            {
              title: "Fabrication Documentation Coordination",
              description:
                "Coordinate agreed drawings, inspection records and technical documentation for equipment delivery.",
            },
          ],
        },
        {
          id: "industries",
          label: "Industries",
          type: "industries",
          heading: "Columns and Reactor Applications",
          intro:
            "Potential application areas; confirm relevance to actual company capabilities and project experience.",
          items: [
            {
              title: "Chemical Manufacturing",
              description:
                "Reaction and separation equipment used in suitable chemical process operations.",
            },
            {
              title: "Petrochemicals",
              description:
                "Selected process vessel and column applications subject to the relevant project specification.",
            },
            {
              title: "Industrial Materials",
              description:
                "Equipment supporting reaction, contacting or separation duties in materials production.",
            },
          ],
        },
        {
          id: "technical-specifications",
          label: "Technical Specifications",
          type: "technical-specifications",
          heading: "Column and Reactor Design Parameters",
          intro:
            "Equipment specifications must be established from the process design basis and applicable mechanical requirements.",
          items: [
            {
              name: "Process duty",
              value: "Defined as reaction, contacting or separation service",
            },
            {
              name: "Design pressure and temperature",
              value: "Established from operating conditions, design margins and applicable requirements",
            },
            {
              name: "Materials of construction",
              value: "Selected following fluid compatibility and corrosion review",
            },
            {
              name: "Vessel geometry and internals",
              value: "Determined by process duty, mechanical design and access requirements",
            },
            {
              name: "Nozzles and interfaces",
              value: "Defined by piping, instrumentation and plant layout requirements",
            },
            {
              name: "Applicable codes and inspection",
              value: "Confirmed for equipment type, jurisdiction and project specification",
            },
          ],
          note:
            "No pressure rating, material grade or code compliance is asserted without an approved equipment specification.",
        },
        {
          id: "process-flow",
          label: "Process Flow / How It Works",
          type: "process-flow",
          heading: "From Process Duty to Engineered Equipment",
          intro:
            "A high-level equipment engineering sequence. Actual workflow depends on equipment type and project scope.",
          steps: [
            {
              title: "Define process requirements",
              description:
                "Confirm duty, throughput, fluid properties, operating conditions and performance objectives.",
              output: "Process design basis",
            },
            {
              title: "Develop equipment concept",
              description:
                "Select a preliminary configuration and establish vessel geometry, internals and principal interfaces.",
              output: "Equipment concept",
            },
            {
              title: "Complete engineering coordination",
              description:
                "Coordinate process, mechanical, materials, piping, instrumentation and safety requirements.",
              output: "Coordinated equipment specification",
            },
            {
              title: "Verify and document",
              description:
                "Complete agreed design reviews, inspection planning and equipment documentation.",
              output: "Reviewed equipment records",
            },
          ],
          note:
            "The detailed design and fabrication sequence depends on the selected equipment and contractual scope.",
        },
        {
          id: "lifecycle-support",
          label: "Lifecycle Support",
          type: "lifecycle-support",
          heading: "Column and Reactor Lifecycle Support",
          intro:
            "Inspection and maintenance requirements depend on process service, equipment design and applicable regulations.",
          items: [
            {
              title: "Inspection Planning",
              description:
                "Define inspection activities based on service conditions, equipment criticality and applicable requirements.",
            },
            {
              title: "Internals, Seals and Connections",
              description:
                "Review the condition of internals, seals, nozzles and connected equipment during planned maintenance.",
            },
            {
              title: "Mechanical Integrity Review",
              description:
                "Use available inspection and maintenance records to assess equipment condition and identify required engineering review.",
            },
            {
              title: "Modification Assessment",
              description:
                "Evaluate proposed operating or equipment changes against the approved process and mechanical design basis.",
            },
          ],
        },
        {
          id: "standards-certifications",
          label: "Standards & Certifications",
          type: "standards-certifications",
          heading: "Column and Reactor Quality and Compliance",
          intro:
            "Requirements depend on equipment classification, pressure and temperature, process service, jurisdiction and contract.",
          items: [
            {
              title: "Pressure Vessel and Equipment Codes",
              description:
                "Determine the applicable design code and jurisdictional requirements for the specific equipment.",
              reference: "To be confirmed per project",
            },
            {
              title: "Materials and Traceability",
              description:
                "Specify material documentation, traceability and inspection requirements where required by the project.",
              reference: "Equipment- and project-specific",
            },
            {
              title: "Inspection and Testing",
              description:
                "Define inspection and testing requirements through the approved equipment specification and quality plan.",
              reference: "Project-specific",
            },
          ],
          note:
            "No company certification is claimed. Code applicability and certification requirements must be verified for each project.",
        },
        {
          id: "downloads-resources",
          label: "Downloads & Technical Resources",
          type: "downloads-resources",
          heading: "Columns and Reactors Resources",
          intro:
            "Approved equipment brochures, technical notes or public datasheets can be listed when available.",
          items: [],
          note:
            "No downloadable resources have been configured for this page yet.",
        },
        {
          id: "faqs",
          label: "FAQs",
          type: "faqs",
          heading: "Columns and Reactors FAQs",
          intro:
            "General questions about industrial columns, reactors and pressure vessels.",
          items: [
            {
              question: "What information is needed to specify a reactor or column?",
              answer:
                "Key inputs include process duty, fluid properties, throughput, operating and design conditions, materials requirements, interfaces and applicable codes.",
            },
            {
              question: "Are the same design codes applicable to every vessel?",
              answer:
                "No. Applicable requirements depend on equipment type, service, jurisdiction, project specification and relevant regulatory classification.",
            },
            {
              question: "Can existing equipment be modified?",
              answer:
                "Potential modifications should be assessed against the approved design basis, mechanical integrity, process safety and applicable code requirements before implementation.",
            },
          ],
        },
      ],
    },
  ],
};

export default processEquipmentAndSeparation;
