import type { SBUChild } from "../types";

const plantEngineering: SBUChild = {
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
    };

export default plantEngineering;
