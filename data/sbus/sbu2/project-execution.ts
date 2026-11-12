import type { SBUChild } from "../types";

const projectExecution: SBUChild = {
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
    };

export default projectExecution;
