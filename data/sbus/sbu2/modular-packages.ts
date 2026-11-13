import type { SBUChild } from "../types";

const IMG = "/image/solutions/solution/images";

const modularPackages: SBUChild = {
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
      image: {
        src: `${IMG}/modular-industries.jpg`,
        alt: "Modular process package installed at an industrial site",
        caption: "Representative installation. Actual configuration varies by project.",
      },
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
      image: {
        src: `${IMG}/modular-technical-diagram.png`,
        alt: "General arrangement of a skid-mounted modular package",
        caption: "Illustrative arrangement. Final layout is defined during package engineering.",
      },
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
          image: {
            src: `${IMG}/modular-step-1-assess.jpg`,
            alt: "Engineers reviewing site and transport constraints",
          },
        },
        {
          title: "Engineer the package",
          description:
            "Develop equipment arrangement and coordinate piping, electrical, instrumentation and structural interfaces.",
          output: "Coordinated package design",
          image: {
            src: `${IMG}/modular-step-2-engineer.jpg`,
            alt: "3D model and drawings of a process package",
          },
        },
        {
          title: "Assemble and inspect",
          description:
            "Complete the agreed assembly, inspection and pre-delivery checks.",
          output: "Package ready for dispatch",
          image: {
            src: `${IMG}/modular-step-3-assemble.jpg`,
            alt: "Package being assembled and inspected in a workshop",
          },
        },
        {
          title: "Install and integrate",
          description:
            "Coordinate lifting, placement, site tie-ins and agreed commissioning interfaces.",
          output: "Integrated site package",
          image: {
            src: `${IMG}/modular-step-4-install.jpg`,
            alt: "Crane lifting a modular package into position on site",
          },
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
          image: {
            src: `${IMG}/modular-support-installation.jpg`,
            alt: "Team planning the lifting and placement of a package",
          },
        },
        {
          title: "Package Documentation",
          description:
            "Compile agreed equipment records, drawings, inspection records and operating documentation.",
          image: {
            src: `${IMG}/modular-support-documentation.jpg`,
            alt: "Engineering documentation and drawings for a package",
          },
        },
        {
          title: "Modification and Expansion",
          description:
            "Assess proposed package changes against capacity, interface and site constraints.",
          image: {
            src: `${IMG}/modular-support-expansion.jpg`,
            alt: "Engineers assessing an existing package for expansion",
          },
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
          image: {
            src: `${IMG}/modular-standard-codes.png`,
            alt: "Equipment and piping design code icon",
          },
        },
        {
          title: "Lifting and Transport Requirements",
          description:
            "Review handling, lifting and transport requirements for the package envelope and mass.",
          reference: "Project- and jurisdiction-specific",
          image: {
            src: `${IMG}/modular-standard-lifting.png`,
            alt: "Lifting and transport requirements icon",
          },
        },
        {
          title: "Inspection Records",
          description:
            "Define inspection, test and traceability records in the package quality plan.",
          reference: "Project-specific",
          image: {
            src: `${IMG}/modular-standard-inspection.png`,
            alt: "Inspection and traceability records icon",
          },
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
};

export default modularPackages;