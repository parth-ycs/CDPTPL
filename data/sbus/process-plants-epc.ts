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

const processPlantsAndEpc: Omit<SBU, "href"> = {
  name: "Process Plants and EPC",
  offerings:
    "Plant engineering, modular packages, project execution and integration.",
  children: [
    {
      slug: "plant-engineering",
      hero: {
        name: "Plant Engineering",
        tagline: "Process Plants & EPC",
        description:
          "Multidisciplinary engineering for industrial process facilities, from process definition and design development to coordinated plant integration.",
        image: "/images/Hero_BG.png",
        imageAlt: "Industrial process plant engineering",
        ctaLabel: "Discuss a project",
        ctaHref: "#enquiry",
      },
      sections: [
        {
          id: "overview",
          label: "Overview",
          type: "overview",
          heading: "Plant Engineering for Integrated Process Facilities",
          description:
            "Plant engineering brings process requirements, equipment selection, layouts, piping, utilities and control systems together into a coordinated design basis. The final scope is established around project requirements and verified site information.",
          kpis: [
            { value: "01", label: "Process definition" },
            { value: "02", label: "Multidiscipline design" },
            { value: "03", label: "Plant integration" },
          ],
        },
        {
          id: "capabilities",
          label: "Capabilities",
          type: "capabilities",
          heading: "Plant Engineering Capabilities",
          intro:
            "Representative engineering workstreams for industrial process projects. Confirm final scope against the approved project and company capabilities.",
          items: [
            {
              title: "Process Engineering",
              description:
                "Establish process design criteria, mass and energy balances, process flow diagrams and preliminary equipment requirements.",
            },
            {
              title: "Multidiscipline Engineering",
              description:
                "Coordinate mechanical, piping, electrical, instrumentation, control and civil or structural interfaces.",
            },
            {
              title: "Plant Layout and Integration",
              description:
                "Develop equipment arrangements and access considerations while reviewing process, maintenance and site interfaces.",
            },
            {
              title: "Engineering Documentation",
              description:
                "Prepare and coordinate agreed technical deliverables, registers, drawings and design records.",
            },
          ],
        },
        {
          id: "products",
          label: "Products",
          type: "products",
          heading: "Plant Engineering Deliverables",
          intro:
            "Representative engineering deliverables rather than claims of standard packaged products.",
          items: [
            {
              id: "plant-engineering-product-1",
              name: "Process Plant Packages",
              category: "Plant Systems",
              description:
                "Project-defined process plant systems arranged around process requirements and agreed battery limits.",
              image: {
                src: "/images/Hero_BG.png",
                alt: "Process plant package",
              },
              specs: [
                "Scope defined by project requirements",
                "Equipment and interfaces established during engineering",
              ],
            },
            {
              id: "plant-engineering-product-2",
              name: "Utility Systems",
              category: "Plant Utilities",
              description:
                "Utility system concepts for supporting process operations, subject to site and process requirements.",
              image: {
                src: "/images/Hero_BG.png",
                alt: "Industrial utility systems",
              },
              specs: [
                "Utility demand established during design",
                "Interfaces documented for the project",
              ],
            },
            {
              id: "plant-engineering-product-3",
              name: "Engineering Documentation",
              category: "Project Deliverables",
              description:
                "Examples include process diagrams, equipment lists, layouts and discipline-specific design documents.",
              image: {
                src: "/images/Hero_BG.png",
                alt: "Engineering documentation",
              },
              specs: [
                "Deliverables agreed in the project scope",
                "Revision and approval requirements project-specific",
              ],
            },
          ],
        },
        {
          id: "services",
          label: "Services",
          type: "services",
          heading: "Plant Engineering Services",
          intro:
            "Engineering activities that may be included in a project scope.",
          items: [
            {
              title: "Basic Engineering",
              description:
                "Develop process concepts, design criteria and preliminary engineering deliverables.",
            },
            {
              title: "Detailed Engineering",
              description:
                "Coordinate discipline-level design, technical documentation and engineering interfaces.",
            },
            {
              title: "Design Coordination",
              description:
                "Manage interfaces across process, mechanical, electrical, instrumentation and layout workstreams.",
            },
            {
              title: "Design Review Support",
              description:
                "Review design inputs, technical comments and interdisciplinary consistency within the agreed scope.",
            },
          ],
        },
        {
          id: "industries",
          label: "Industries",
          type: "industries",
          heading: "Plant Engineering Applications",
          intro:
            "Potential application areas; verify sector relevance against actual project experience before publication.",
          items: [
            {
              title: "Chemical Plants",
              description:
                "Engineering coordination for process manufacturing facilities and associated utilities.",
            },
            {
              title: "Energy and Utilities",
              description:
                "Plant systems supporting industrial energy and utility requirements.",
            },
            {
              title: "Industrial Manufacturing",
              description:
                "Integrated engineering for production facilities and supporting process systems.",
            },
          ],
        },
        {
          id: "technical-specifications",
          label: "Technical Specifications",
          type: "technical-specifications",
          heading: "Plant Engineering Design Basis",
          intro:
            "Engineering parameters are developed from project inputs and must be confirmed during design.",
          items: [
            {
              name: "Project scope",
              value: "Defined by battery limits, deliverables and responsibilities",
            },
            {
              name: "Process design basis",
              value: "Established from process requirements and validated site data",
            },
            {
              name: "Utilities and interfaces",
              value: "Documented in project utility and interface registers",
            },
            {
              name: "Engineering deliverables",
              value: "Agreed according to project stage and contract scope",
            },
            {
              name: "Design codes and jurisdiction",
              value: "Confirmed for the equipment, site and project specification",
            },
          ],
          note:
            "These are specification categories, not confirmed project values or company performance claims.",
        },
        {
          id: "process-flow",
          label: "Process Flow / How It Works",
          type: "process-flow",
          heading: "Plant Engineering Workflow",
          intro:
            "A typical high-level engineering sequence. Actual stages vary with project type and contracted scope.",
          steps: [
            {
              title: "Define requirements",
              description:
                "Confirm process objectives, capacity, feed and product requirements, site data and project boundaries.",
              output: "Approved design basis",
            },
            {
              title: "Develop process design",
              description:
                "Prepare process calculations and define principal equipment, streams and utility needs.",
              output: "Process design package",
            },
            {
              title: "Coordinate disciplines",
              description:
                "Develop and review mechanical, piping, electrical, instrumentation and layout interfaces.",
              output: "Coordinated engineering deliverables",
            },
            {
              title: "Review and issue",
              description:
                "Resolve design comments and issue agreed documents through the project review process.",
              output: "Reviewed engineering package",
            },
          ],
          note:
            "Use project-approved process diagrams and engineering documents when available.",
        },
        {
          id: "lifecycle-support",
          label: "Lifecycle Support",
          type: "lifecycle-support",
          heading: "Engineering Support Across the Project Lifecycle",
          intro:
            "Support depends on the agreed contract, project stage and available plant documentation.",
          items: [
            {
              title: "Design Change Coordination",
              description:
                "Assess requested changes against the design basis, discipline interfaces and documented project requirements.",
            },
            {
              title: "Plant Modification Studies",
              description:
                "Review proposed upgrades or tie-ins against available drawings, site conditions and operating constraints.",
            },
            {
              title: "Technical Documentation Updates",
              description:
                "Maintain agreed engineering records and drawing revisions as part of a defined change-control process.",
            },
          ],
        },
        {
          id: "standards-certifications",
          label: "Standards & Certifications",
          type: "standards-certifications",
          heading: "Engineering Quality and Compliance",
          intro:
            "Applicable requirements must be identified for each project, equipment category and jurisdiction.",
          items: [
            {
              title: "Applicable Design Codes",
              description:
                "Identify relevant codes and standards based on equipment type, process service, location and project requirements.",
              reference: "To be confirmed per project",
            },
            {
              title: "Design Reviews",
              description:
                "Define review stages, technical checks and approval responsibilities in the project quality plan.",
              reference: "Project-specific",
            },
            {
              title: "Document Control",
              description:
                "Maintain agreed revision, review and approval records for engineering deliverables.",
              reference: "Project-specific",
            },
          ],
          note:
            "No company certification is claimed here. Publish certification names or logos only after verifying current certificates and scope.",
        },
        {
          id: "downloads-resources",
          label: "Downloads & Technical Resources",
          type: "downloads-resources",
          heading: "Plant Engineering Resources",
          intro:
            "Add approved public-facing brochures, capability statements or technical documents when files and URLs are available.",
          items: [],
          note:
            "No downloadable resources have been configured for this page yet.",
        },
        {
          id: "faqs",
          label: "FAQs",
          type: "faqs",
          heading: "Plant Engineering FAQs",
          intro:
            "General information to support an initial engineering discussion.",
          items: [
            {
              question: "What information is needed to begin plant engineering?",
              answer:
                "Useful inputs include process objectives, capacity, feed and product data, site information, utility availability, project boundaries and applicable requirements.",
            },
            {
              question: "Can existing plants be upgraded?",
              answer:
                "Potential modifications can be assessed using available drawings, operating information, site constraints and the proposed scope. Feasibility must be confirmed through engineering review.",
            },
            {
              question: "Are all engineering disciplines included in every project?",
              answer:
                "No. Discipline coverage and deliverables depend on the agreed scope, project stage and contract responsibilities.",
            },
          ],
        },
      ],
    },
    {
      slug: "modular-packages",
      hero: {
        name: "Modular Packages",
        tagline: "Process Plants & EPC",
        description:
          "Integrated modular process packages designed around defined process duties, equipment interfaces, transport constraints and installation requirements.",
        image: "/images/Hero_BG.png",
        imageAlt: "Modular industrial process package",
        ctaLabel: "Discuss a project",
        ctaHref: "#enquiry",
      },
      sections: [
        {
          id: "overview",
          label: "Overview",
          type: "overview",
          heading: "Modular Packages for Process Applications",
          description:
            "Modularisation groups selected equipment, piping, instruments and supporting systems into engineered packages that can be assembled and checked before delivery where appropriate. Suitability depends on transport limits, site access, process requirements and installation strategy.",
          kpis: [
            { value: "01", label: "Modular design" },
            { value: "02", label: "Interface planning" },
            { value: "03", label: "Installation readiness" },
          ],
        },
        {
          id: "capabilities",
          label: "Capabilities",
          type: "capabilities",
          heading: "Modular Package Engineering Capabilities",
          intro:
            "Representative activities for evaluating and engineering modular systems.",
          items: [
            {
              title: "Modularisation Studies",
              description:
                "Assess which equipment and process functions can be grouped into modules based on project, transport and site constraints.",
            },
            {
              title: "Package Engineering",
              description:
                "Coordinate equipment, piping, instruments, structural supports and utility connections within defined package boundaries.",
            },
            {
              title: "Interface Management",
              description:
                "Identify battery limits, tie-in points, electrical and control interfaces, and responsibilities between package and site teams.",
            },
            {
              title: "Pre-Delivery Readiness",
              description:
                "Plan inspections, documentation and agreed checks before shipment and site installation.",
            },
          ],
        },
        {
          id: "products",
          label: "Products",
          type: "products",
          heading: "Modular Package Types",
          intro:
            "Illustrative package categories. Actual availability and configuration must be confirmed for each project.",
          items: [
            {
              id: "modular-packages-product-1",
              name: "Skid-Mounted Packages",
              category: "Modular Systems",
              description:
                "Equipment arranged on a common structural skid for suitable process and utility duties.",
              image: {
                src: "/images/Hero_BG.png",
                alt: "Skid-mounted process package",
              },
              specs: [
                "Package boundaries defined by project scope",
                "Transport and lifting constraints require review",
              ],
            },
            {
              id: "modular-packages-product-2",
              name: "Preassembled Process Units",
              category: "Process Modules",
              description:
                "Preassembled modules for defined process functions where modular construction is suitable.",
              image: {
                src: "/images/Hero_BG.png",
                alt: "Preassembled process module",
              },
              specs: [
                "Configuration depends on process duty",
                "Site tie-ins and commissioning scope project-specific",
              ],
            },
            {
              id: "modular-packages-product-3",
              name: "Utility Modules",
              category: "Utility Packages",
              description:
                "Modular arrangements for selected utility functions and their process interfaces.",
              image: {
                src: "/images/Hero_BG.png",
                alt: "Industrial utility module",
              },
              specs: [
                "Utility requirements established during design",
                "Connections and controls defined in interface documents",
              ],
            },
          ],
        },
        {
          id: "services",
          label: "Services",
          type: "services",
          heading: "Modular Package Services",
          intro:
            "Typical engineering and integration services that may form part of a modular package project.",
          items: [
            {
              title: "Modularisation Study",
              description:
                "Assess package boundaries, construction strategy, transport limits and site constraints.",
            },
            {
              title: "Package Engineering",
              description:
                "Coordinate equipment layout, piping, instruments, supports and defined package interfaces.",
            },
            {
              title: "Inspection and Pre-Assembly Checks",
              description:
                "Plan agreed inspections and checks before dispatch, based on the package specification.",
            },
            {
              title: "Site Integration Support",
              description:
                "Support planning for installation, tie-ins and interface resolution within the agreed scope.",
            },
          ],
        },
        {
          id: "industries",
          label: "Industries",
          type: "industries",
          heading: "Modular Package Applications",
          intro:
            "Potential application areas where modular delivery may be considered.",
          items: [
            {
              title: "Chemical Processing",
              description:
                "Packaged systems for defined process operations and supporting utilities.",
            },
            {
              title: "Energy Projects",
              description:
                "Modular systems for suitable energy-related process and utility applications.",
            },
            {
              title: "Remote or Constrained Sites",
              description:
                "Applications where site access, construction space or installation schedules favour off-site assembly.",
            },
          ],
        },
        {
          id: "technical-specifications",
          label: "Technical Specifications",
          type: "technical-specifications",
          heading: "Modular Package Design Considerations",
          intro:
            "Package specifications depend on process duty, installation strategy and site-specific constraints.",
          items: [
            {
              name: "Package battery limits",
              value: "Defined by process, mechanical, electrical and control interfaces",
            },
            {
              name: "Transport envelope",
              value: "Confirmed against route, lifting and transport restrictions",
            },
            {
              name: "Equipment and piping",
              value: "Selected and sized from the approved process and mechanical design basis",
            },
            {
              name: "Utility connections",
              value: "Loads, connection points and operating conditions defined during engineering",
            },
            {
              name: "Inspection and testing",
              value: "Defined in the package specification and project quality plan",
            },
          ],
          note:
            "No standard dimensions, capacities or delivery times are implied; confirm values against the actual package design.",
        },
        {
          id: "process-flow",
          label: "Process Flow / How It Works",
          type: "process-flow",
          heading: "Modular Package Delivery Workflow",
          intro:
            "A high-level workflow for developing and integrating a modular process package.",
          steps: [
            {
              title: "Assess modular suitability",
              description:
                "Review process duty, transport routes, site access, construction strategy and package boundaries.",
              output: "Modularisation basis",
            },
            {
              title: "Engineer the package",
              description:
                "Develop equipment arrangement and coordinate piping, electrical, instrumentation and structural interfaces.",
              output: "Coordinated package design",
            },
            {
              title: "Assemble and inspect",
              description:
                "Complete the agreed assembly, inspection and pre-delivery checks.",
              output: "Package ready for dispatch",
            },
            {
              title: "Install and integrate",
              description:
                "Coordinate lifting, placement, site tie-ins and agreed commissioning interfaces.",
              output: "Integrated site package",
            },
          ],
          note:
            "Actual factory testing, commissioning and installation responsibilities depend on the contract.",
        },
        {
          id: "lifecycle-support",
          label: "Lifecycle Support",
          type: "lifecycle-support",
          heading: "Modular Package Lifecycle Support",
          intro:
            "Support activities are determined by the package scope and project handover requirements.",
          items: [
            {
              title: "Installation Planning",
              description:
                "Review lifting, placement, access and connection requirements before site installation.",
            },
            {
              title: "Package Documentation",
              description:
                "Compile agreed equipment records, drawings, inspection records and operating documentation.",
            },
            {
              title: "Modification and Expansion",
              description:
                "Assess proposed package changes against capacity, interface and site constraints.",
            },
          ],
        },
        {
          id: "standards-certifications",
          label: "Standards & Certifications",
          type: "standards-certifications",
          heading: "Modular Package Quality and Compliance",
          intro:
            "Applicable requirements depend on equipment, transport, installation location and project specifications.",
          items: [
            {
              title: "Equipment and Piping Codes",
              description:
                "Identify applicable design requirements for the included equipment and piping systems.",
              reference: "To be confirmed per project",
            },
            {
              title: "Lifting and Transport Requirements",
              description:
                "Review handling, lifting and transport requirements for the package envelope and mass.",
              reference: "Project- and jurisdiction-specific",
            },
            {
              title: "Inspection Records",
              description:
                "Define inspection, test and traceability records in the package quality plan.",
              reference: "Project-specific",
            },
          ],
          note:
            "No company certification is claimed. Confirm all applicable codes and certificate scopes before publication.",
        },
        {
          id: "downloads-resources",
          label: "Downloads & Technical Resources",
          type: "downloads-resources",
          heading: "Modular Package Resources",
          intro:
            "Approved package brochures, general arrangement drawings or technical notes can be listed when cleared for public use.",
          items: [],
          note:
            "No downloadable resources have been configured for this page yet.",
        },
        {
          id: "faqs",
          label: "FAQs",
          type: "faqs",
          heading: "Modular Packages FAQs",
          intro:
            "Common questions about modular package planning and integration.",
          items: [
            {
              question: "When is modularisation suitable?",
              answer:
                "It depends on transport limits, site access, process complexity, construction strategy, schedule and the extent of package interfaces.",
            },
            {
              question: "Can a modular package be customised?",
              answer:
                "The package can be engineered around agreed process requirements and interfaces, subject to feasibility and the approved design basis.",
            },
            {
              question: "Does modular delivery include commissioning?",
              answer:
                "Commissioning responsibilities vary by contract. Confirm whether site installation, testing, start-up and operator handover are included.",
            },
          ],
        },
      ],
    },
    {
      slug: "project-execution",
      hero: {
        name: "Project Execution",
        tagline: "Process Plants & EPC",
        description:
          "Coordinated project delivery planning for industrial process facilities, including scope definition, engineering interfaces, procurement coordination and handover planning.",
        image: "/images/Hero_BG.png",
        imageAlt: "Industrial process project execution",
        ctaLabel: "Discuss a project",
        ctaHref: "#enquiry",
      },
      sections: [
        {
          id: "overview",
          label: "Overview",
          type: "overview",
          heading: "Project Execution and Delivery Coordination",
          description:
            "Project execution coordinates scope, schedule, technical interfaces, procurement, construction and handover activities within defined responsibilities. The execution model should be tailored to project complexity, contractual boundaries and client requirements.",
          kpis: [
            { value: "01", label: "Project planning" },
            { value: "02", label: "Delivery coordination" },
            { value: "03", label: "Handover support" },
          ],
        },
        {
          id: "capabilities",
          label: "Capabilities",
          type: "capabilities",
          heading: "Project Execution Capabilities",
          intro:
            "Representative project coordination workstreams. The exact delivery model and responsibilities must be confirmed in the contract.",
          items: [
            {
              title: "Project Planning and Controls",
              description:
                "Establish project milestones, work packages, schedule assumptions, progress measures and reporting routines.",
            },
            {
              title: "Engineering and Procurement Coordination",
              description:
                "Coordinate engineering deliverables, technical submittals, procurement milestones and supplier interfaces.",
            },
            {
              title: "Interface and Risk Management",
              description:
                "Track cross-discipline and site interfaces, identify delivery risks and assign agreed mitigation actions.",
            },
            {
              title: "Completion and Handover",
              description:
                "Coordinate completion records, punch-list closeout and agreed project handover documentation.",
            },
          ],
        },
        {
          id: "products",
          label: "Products",
          type: "products",
          heading: "Project Execution Deliverables",
          intro:
            "Representative project-control and closeout deliverables rather than physical products.",
          items: [
            {
              id: "project-execution-product-1",
              name: "Project Delivery Plans",
              category: "Project Controls",
              description:
                "Project schedules, milestones and work-package plans prepared for the agreed delivery scope.",
              image: {
                src: "/images/Hero_BG.png",
                alt: "Project delivery planning",
              },
              specs: [
                "Milestones aligned with the approved project baseline",
                "Planning detail depends on scope and project stage",
              ],
            },
            {
              id: "project-execution-product-2",
              name: "Procurement Packages",
              category: "Procurement",
              description:
                "Structured technical and procurement documentation for equipment and material packages.",
              image: {
                src: "/images/Hero_BG.png",
                alt: "Procurement package documentation",
              },
              specs: [
                "Requirements defined by equipment and project specifications",
                "Supplier deliverables tracked as agreed",
              ],
            },
            {
              id: "project-execution-product-3",
              name: "Handover Documentation",
              category: "Project Closeout",
              description:
                "Completion records and turnover documentation compiled according to the agreed handover plan.",
              image: {
                src: "/images/Hero_BG.png",
                alt: "Project handover documentation",
              },
              specs: [
                "Required records defined in the contract",
                "Acceptance criteria project-specific",
              ],
            },
          ],
        },
        {
          id: "services",
          label: "Services",
          type: "services",
          heading: "Project Execution Services",
          intro:
            "Potential delivery support activities across the project lifecycle.",
          items: [
            {
              title: "Project Management",
              description:
                "Coordinate scope, schedule, cost, risks, decisions and project interfaces within assigned responsibilities.",
            },
            {
              title: "Procurement Coordination",
              description:
                "Track technical submittals, supplier interfaces, purchase milestones and delivery status.",
            },
            {
              title: "Construction Interface Coordination",
              description:
                "Coordinate engineering information and site interfaces relevant to the agreed construction scope.",
            },
            {
              title: "Completion and Handover",
              description:
                "Organise agreed completion checks, records and turnover activities for project closeout.",
            },
          ],
        },
        {
          id: "industries",
          label: "Industries",
          type: "industries",
          heading: "Project Execution Applications",
          intro:
            "Potential project types where structured delivery coordination may be relevant.",
          items: [
            {
              title: "Process Industries",
              description:
                "Delivery coordination for industrial process facilities and associated systems.",
            },
            {
              title: "Industrial Infrastructure",
              description:
                "Project controls and interface management for defined industrial infrastructure scopes.",
            },
            {
              title: "Plant Upgrades and Expansions",
              description:
                "Planning and coordination for retrofit, debottlenecking and expansion projects.",
            },
          ],
        },
        {
          id: "technical-specifications",
          label: "Technical Specifications",
          type: "technical-specifications",
          heading: "Project Execution Basis",
          intro:
            "Project controls and deliverables are defined by the approved execution plan and contract.",
          items: [
            {
              name: "Scope and battery limits",
              value: "Documented with responsibilities, exclusions and interfaces",
            },
            {
              name: "Schedule baseline",
              value: "Established from approved milestones, dependencies and project assumptions",
            },
            {
              name: "Procurement and supplier scope",
              value: "Defined by the procurement plan and package responsibilities",
            },
            {
              name: "Progress reporting",
              value: "Frequency and measures agreed in the project controls plan",
            },
            {
              name: "Completion and handover criteria",
              value: "Defined in contractual and project acceptance documentation",
            },
          ],
          note:
            "No project duration, cost, or delivery guarantee is implied by these example fields.",
        },
        {
          id: "process-flow",
          label: "Process Flow / How It Works",
          type: "process-flow",
          heading: "Project Execution Workflow",
          intro:
            "A typical sequence for organising and coordinating an industrial project.",
          steps: [
            {
              title: "Establish scope and governance",
              description:
                "Confirm objectives, deliverables, responsibilities, interfaces and decision-making routes.",
              output: "Project execution basis",
            },
            {
              title: "Plan work and milestones",
              description:
                "Develop the schedule, work packages, procurement plan, reporting and risk register.",
              output: "Coordinated project plan",
            },
            {
              title: "Coordinate delivery",
              description:
                "Track engineering, procurement and site interfaces against agreed milestones and resolve issues.",
              output: "Progress and interface records",
            },
            {
              title: "Verify completion and hand over",
              description:
                "Complete agreed closeout activities and compile required turnover documentation.",
              output: "Handover package",
            },
          ],
          note:
            "Construction, commissioning and acceptance responsibilities depend on the contractual delivery model.",
        },
        {
          id: "lifecycle-support",
          label: "Lifecycle Support",
          type: "lifecycle-support",
          heading: "Project Closeout and Follow-Through",
          intro:
            "Post-delivery support should be defined explicitly in the project scope.",
          items: [
            {
              title: "Closeout Documentation",
              description:
                "Compile agreed technical records, completion status, outstanding actions and turnover documents.",
            },
            {
              title: "Lessons Learned",
              description:
                "Capture project observations and improvement opportunities for future planning and execution.",
            },
            {
              title: "Outstanding Interface Resolution",
              description:
                "Track and close remaining agreed actions with clear owners and acceptance criteria.",
            },
          ],
        },
        {
          id: "standards-certifications",
          label: "Standards & Certifications",
          type: "standards-certifications",
          heading: "Project Governance and Quality",
          intro:
            "Governance, quality and compliance requirements must be established for the individual project.",
          items: [
            {
              title: "Project Quality Plan",
              description:
                "Define review, inspection, documentation and approval activities relevant to the agreed scope.",
              reference: "Project-specific",
            },
            {
              title: "Risk and Change Control",
              description:
                "Record risks, change requests, decisions and action owners through the agreed governance process.",
              reference: "Project-specific",
            },
            {
              title: "Handover and Acceptance",
              description:
                "Identify required records and acceptance criteria in the contract and turnover plan.",
              reference: "Contract-specific",
            },
          ],
          note:
            "This section does not claim any company certification or a particular project-management accreditation.",
        },
        {
          id: "downloads-resources",
          label: "Downloads & Technical Resources",
          type: "downloads-resources",
          heading: "Project Execution Resources",
          intro:
            "Approved public-facing project delivery overviews or capability documents can be added when available.",
          items: [],
          note:
            "No downloadable resources have been configured for this page yet.",
        },
        {
          id: "faqs",
          label: "FAQs",
          type: "faqs",
          heading: "Project Execution FAQs",
          intro:
            "Common questions about industrial project coordination.",
          items: [
            {
              question: "What does project execution include?",
              answer:
                "It may include planning, project controls, engineering and procurement coordination, interface management, completion and handover. The exact scope is contract-specific.",
            },
            {
              question: "Does project execution always mean full EPC delivery?",
              answer:
                "No. EPC is one possible delivery model. Project execution responsibilities can be limited to selected engineering, coordination or management activities.",
            },
            {
              question: "How are project progress and risks tracked?",
              answer:
                "The project controls plan defines reporting frequency, milestone tracking, risk registers, action ownership and change-control procedures.",
            },
          ],
        },
      ],
    },
  ],
};

export default processPlantsAndEpc;
