import type { SBUChild } from "./types";

const ufMbr: SBUChild = {
  slug: "uf-mbr",
  name: "UF / MBR",
  tagline: "Water & Wastewater Treatment",
  description:
    "Explore ultrafiltration and membrane bioreactor approaches for suitable water and wastewater treatment duties, guided by influent quality, treated-water targets and site operating conditions.",
  hero: {
    name: "UF / MBR",
    tagline: "Water & Wastewater Treatment",
    description:
      "Ultrafiltration and membrane bioreactor systems can support solids separation and biological wastewater treatment when selected for the specific influent, treatment objectives and operating conditions.",
    imageAlt: "Ultrafiltration and membrane bioreactor water treatment systems",
    ctaLabel: "Discuss a Water Treatment Project",
    ctaHref: "/contact",
  },
  sections: [
    {
      type: "overview",
      id: "overview",
      label: "Overview",
      heading: "Membrane-based treatment for defined water quality targets",
      description:
        "Ultrafiltration (UF) uses a membrane barrier to separate suspended solids and other retained material from water. A membrane bioreactor (MBR) combines biological wastewater treatment with membrane separation. The appropriate process depends on influent characteristics, treatment objectives, discharge or reuse criteria and operational constraints.",
      kpis: [
        { value: "01", label: "Feed assessment" },
        { value: "02", label: "Treatment design" },
        { value: "03", label: "Reuse objectives" },
      ],
    },
    {
      type: "capabilities",
      id: "capabilities",
      label: "Capabilities",
      heading: "Treatment planning from influent to treated water",
      intro:
        "Treatment configuration should be based on representative water analysis, applicable discharge or reuse criteria and site-specific engineering.",
      items: [
        {
          title: "Water quality assessment",
          description:
            "Review influent flow, suspended solids, organic load, temperature, pH, salinity and other relevant contaminants.",
        },
        {
          title: "UF process selection",
          description:
            "Evaluate membrane filtration requirements, pretreatment needs, operating mode and cleaning strategy for the feed water.",
        },
        {
          title: "MBR process configuration",
          description:
            "Assess biological treatment requirements, membrane separation, aeration, sludge handling and process control.",
        },
        {
          title: "Treated-water quality planning",
          description:
            "Define required effluent quality for discharge, downstream treatment or a specified reuse application.",
        },
        {
          title: "Plant and utility integration",
          description:
            "Coordinate process equipment with pumps, tanks, aeration, chemical systems, instrumentation and control interfaces.",
        },
      ],
    },
    {
      type: "products",
      id: "products",
      label: "Equipment & Systems",
      heading: "Representative UF and MBR equipment",
      intro:
        "Equipment selection depends on water chemistry, design flow, treatment objectives and the required operating envelope.",
      items: [
        {
          id: "uf-membrane-modules",
          name: "Ultrafiltration Modules",
          category: "Membrane Systems",
          description:
            "UF modules for suitable suspended-solids and particulate removal duties, subject to feed compatibility and supplier data.",
          image: {
            src: "/images/services/uf-membrane-modules.jpg",
            alt: "Ultrafiltration membrane modules",
          },
        },
        {
          id: "mbr-treatment-packages",
          name: "Membrane Bioreactor Packages",
          category: "Biological Treatment",
          description:
            "MBR system concepts combining biological treatment and membrane separation for appropriate wastewater applications.",
          image: {
            src: "/images/services/mbr-treatment-packages.jpg",
            alt: "Membrane bioreactor treatment equipment",
          },
        },
        {
          id: "pretreatment-filtration",
          name: "Pretreatment and Filtration Units",
          category: "Water Treatment",
          description:
            "Pretreatment and filtration equipment selected according to influent quality and downstream membrane requirements.",
          image: {
            src: "/images/services/pretreatment-filtration.jpg",
            alt: "Water treatment pretreatment and filtration equipment",
          },
        },
        {
          id: "chemical-cleaning-systems",
          name: "Membrane Cleaning Systems",
          category: "Process Support",
          description:
            "Cleaning and chemical-dosing arrangements designed around membrane supplier guidance and the process water characteristics.",
          image: {
            src: "/images/services/membrane-cleaning-systems.jpg",
            alt: "Membrane cleaning system equipment",
          },
        },
      ],
    },
    {
      type: "services",
      id: "services",
      label: "Engineering Services",
      heading: "Engineering support for water treatment systems",
      intro:
        "The scope can cover initial process assessment through preliminary design and integration planning, depending on project requirements.",
      items: [
        {
          title: "Water Quality Assessment",
          description:
            "Review influent characteristics, flow variation and target treated-water requirements.",
        },
        {
          title: "Treatment Process Design",
          description:
            "Develop preliminary treatment stages and process configuration based on the agreed design basis.",
        },
        {
          title: "Membrane Selection Review",
          description:
            "Assess membrane type, operating mode, pretreatment and cleaning considerations for the intended application.",
        },
        {
          title: "Sludge and Residuals Planning",
          description:
            "Identify sludge, screenings, cleaning waste and other residual streams that need appropriate handling.",
        },
        {
          title: "Plant Integration Support",
          description:
            "Coordinate treatment equipment with utilities, controls and discharge or reuse interfaces.",
        },
      ],
    },
    {
      type: "industries",
      id: "industries",
      label: "Applications",
      heading: "Potential application areas",
      intro:
        "The suitability of a UF or MBR solution must be established from the influent profile, treatment goals and applicable local requirements.",
      items: [
        {
          title: "Industrial Manufacturing",
          description:
            "Treatment of suitable process-water, wash-water and utility-water streams.",
        },
        {
          title: "Municipal Wastewater",
          description:
            "Potential wastewater treatment applications where the process configuration meets the specified requirements.",
        },
        {
          title: "Water Reuse Projects",
          description:
            "Treatment stages that may form part of a broader scheme designed to meet defined reuse objectives.",
        },
        {
          title: "Commercial and Institutional Sites",
          description:
            "Evaluation of suitable wastewater flows where site constraints and effluent targets support membrane-based treatment.",
        },
      ],
    },
    {
      type: "technical-specifications",
      id: "technical-specifications",
      label: "Design Basis",
      heading: "Inputs that determine treatment design",
      intro:
        "Final design values require a defined project basis and representative influent data. The parameters below are assessment inputs, not guaranteed operating specifications.",
      items: [
        {
          name: "Influent quality",
          value:
            "Suspended solids, organic load, pH, temperature, salinity and relevant contaminants",
        },
        {
          name: "Hydraulic design",
          value: "Average and peak flow, flow variability and required operating availability",
        },
        {
          name: "Treatment objective",
          value:
            "Required effluent quality, discharge limits or downstream reuse specifications",
        },
        {
          name: "Membrane requirements",
          value:
            "Membrane material, configuration, filtration characteristics and supplier operating limits",
        },
        {
          name: "Biological process basis",
          value:
            "Wastewater characteristics, biological treatment targets, aeration and sludge management requirements",
        },
        {
          name: "Cleaning and maintenance",
          value:
            "Cleaning strategy, chemical compatibility, inspection access and membrane replacement planning",
        },
      ],
      note:
        "Confirm design criteria against water analysis, local regulations and selected equipment supplier documentation.",
    },
    {
      type: "process-flow",
      id: "process-flow",
      label: "Process Flow",
      heading: "A typical treatment development sequence",
      intro:
        "The actual process train varies with influent quality, discharge or reuse requirements and the selected treatment technology.",
      steps: [
        {
          title: "Influent characterisation",
          description:
            "Collect representative flow and water-quality data and identify variability or contaminants that may affect treatment.",
          output: "Influent design basis",
        },
        {
          title: "Pretreatment selection",
          description:
            "Determine whether screening, equalisation, primary treatment or other conditioning is needed.",
          output: "Pretreatment concept",
        },
        {
          title: "UF or biological treatment design",
          description:
            "Define the filtration duty or biological treatment stages and the associated membrane configuration.",
          output: "Preliminary process configuration",
        },
        {
          title: "Treated-water and residuals handling",
          description:
            "Plan effluent collection, downstream polishing if required, sludge handling and cleaning waste management.",
          output: "Water and residuals balance",
        },
        {
          title: "Validation and integration",
          description:
            "Check the design basis against applicable requirements and coordinate equipment, utilities and controls.",
          output: "Integrated treatment concept",
        },
      ],
      note:
        "This sequence is indicative; actual treatment stages must be established for the specific application.",
    },
    {
      type: "lifecycle-support",
      id: "lifecycle-support",
      label: "Lifecycle Support",
      heading: "Plan for stable operation over the equipment lifecycle",
      intro:
        "Operating and maintenance requirements depend on feed characteristics, membrane technology, cleaning procedures and site practices.",
      items: [
        {
          title: "Design basis documentation",
          description:
            "Document influent assumptions, target water quality, process limitations and monitoring requirements.",
        },
        {
          title: "Commissioning preparation",
          description:
            "Define inspection, start-up, membrane integrity and process performance checks appropriate to the selected system.",
        },
        {
          title: "Operations and monitoring",
          description:
            "Identify relevant flow, pressure, transmembrane pressure, water quality and biological process indicators.",
        },
        {
          title: "Cleaning and maintenance planning",
          description:
            "Establish cleaning triggers, chemical handling procedures and maintenance needs using supplier recommendations.",
        },
        {
          title: "Membrane replacement planning",
          description:
            "Consider access, replacement logistics and responsible handling of spent membrane components.",
        },
      ],
    },
    {
      type: "standards-certifications",
      id: "standards-certifications",
      label: "Compliance",
      heading: "Water quality and regulatory requirements",
      intro:
        "Applicable requirements depend on location, influent source, discharge route, reuse application and project specification. No specific certification is implied.",
      items: [
        {
          title: "Discharge requirements",
          description:
            "Identify the applicable discharge limits, sampling requirements and permit conditions for the site.",
        },
        {
          title: "Reuse water quality",
          description:
            "Define water-quality criteria based on the intended end use and relevant local guidance or regulation.",
        },
        {
          title: "Equipment and electrical safety",
          description:
            "Confirm applicable requirements for pressure equipment, electrical installations, chemical handling and machinery.",
        },
        {
          title: "Chemical and residuals management",
          description:
            "Establish appropriate storage, handling and disposal arrangements for cleaning chemicals, sludge and process residues.",
        },
      ],
      note:
        "Verify all applicable legal and technical requirements with the project owner and qualified local specialists.",
    },
    {
      type: "performance-sustainability",
      id: "performance-sustainability",
      label: "Performance",
      heading: "Evaluate treatment performance responsibly",
      intro:
        "Performance should be measured against a documented influent basis, target effluent quality and defined operating conditions.",
      metrics: [
        {
          title: "Treated-water quality",
          description:
            "Track the parameters relevant to the discharge or reuse specification.",
          category: "Water Quality",
        },
        {
          title: "Hydraulic performance",
          description:
            "Monitor flow, pressure and membrane operating indicators appropriate to the selected system.",
          category: "Operations",
        },
        {
          title: "Energy and aeration",
          description:
            "Assess pumping, aeration and other utility loads as part of the overall operating profile.",
          category: "Utilities",
        },
        {
          title: "Residuals generation",
          description:
            "Account for sludge, screenings, cleaning waste and other residual streams.",
          category: "Resource Management",
        },
      ],
      note:
        "No numerical removal efficiency, energy saving or reuse rate is claimed without project-specific validation.",
    },
    {
      type: "downloads-resources",
      id: "downloads-resources",
      label: "Resources",
      heading: "Technical resources",
      intro:
        "Approved process documents, technical datasheets and application notes can be listed here when available.",
      items: [],
      note: "Add only reviewed documents with valid public links.",
    },
    {
      type: "faqs",
      id: "faqs",
      label: "FAQs",
      heading: "UF / MBR questions",
      intro:
        "Common considerations when assessing membrane-based water and wastewater treatment.",
      items: [
        {
          question: "What is the difference between UF and MBR?",
          answer:
            "UF is a membrane filtration process commonly used to separate suspended solids and other retained material. An MBR combines biological wastewater treatment with membrane separation.",
        },
        {
          question: "Can UF or MBR-treated water be reused?",
          answer:
            "Potential reuse depends on the treated-water quality, intended end use, applicable standards and whether additional polishing or disinfection is required.",
        },
        {
          question: "What data is needed to evaluate a system?",
          answer:
            "Useful information includes influent analysis, average and peak flow, temperature, pH, relevant contaminants, treatment objectives and site constraints.",
        },
        {
          question: "Does an MBR eliminate sludge handling?",
          answer:
            "No. Biological treatment generates sludge that must be managed. The quantity and handling approach depend on the wastewater and process design.",
        },
      ],
    },
  ],
};

export default ufMbr;
