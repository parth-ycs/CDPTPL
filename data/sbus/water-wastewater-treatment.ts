import type {
  ServiceHeroContent,
  ServiceSection,
} from "@/components/solutions/types";

interface SBUChild {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  hero: ServiceHeroContent;
  sections: ServiceSection[];
}

interface SBU {
  name: string;
  offerings: string;
  children: SBUChild[];
}

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

const waterReuse: SBUChild = {
  slug: "water-reuse",
  name: "Water Reuse and Recycling",
  tagline: "Water & Wastewater Treatment",
  description:
    "Explore industrial water reuse and recycling concepts built around site water balances, source-water quality, intended reuse applications and practical treatment requirements.",
  hero: {
    name: "Water Reuse and Recycling",
    tagline: "Water & Wastewater Treatment",
    description:
      "Industrial water reuse starts with understanding where water is used, where wastewater is generated and what quality each potential reuse application requires.",
    imageAlt: "Industrial water reuse and recycling treatment systems",
    ctaLabel: "Discuss a Water Reuse Project",
    ctaHref: "/contact",
  },
  sections: [
    {
      type: "overview",
      id: "overview",
      label: "Overview",
      heading: "Plan water recovery around real site requirements",
      description:
        "Water reuse and recycling projects identify suitable streams for recovery, select treatment steps to meet a defined end-use quality and integrate recovered water with plant demand. Feasibility depends on source-water characteristics, contaminants, recovery targets, utility requirements and residuals management.",
      kpis: [
        { value: "01", label: "Water audit" },
        { value: "02", label: "Recovery planning" },
        { value: "03", label: "Reuse quality" },
      ],
    },
    {
      type: "capabilities",
      id: "capabilities",
      label: "Capabilities",
      heading: "Develop a site-specific reuse strategy",
      intro:
        "A reuse strategy should balance water demand, available streams, treatment needs, operating cost and the quality required by each end use.",
      items: [
        {
          title: "Site water balance",
          description:
            "Map water intake, consumption, wastewater generation, losses and potential recovery points across the facility.",
        },
        {
          title: "Reuse stream assessment",
          description:
            "Characterise candidate streams and screen them for contaminants, variability, compatibility and recovery potential.",
        },
        {
          title: "Treatment train selection",
          description:
            "Evaluate filtration, membrane treatment, biological processes, disinfection or other steps as required by the reuse target.",
        },
        {
          title: "Recovered-water quality planning",
          description:
            "Define fit-for-purpose quality criteria for each intended use rather than assuming one specification suits every user.",
        },
        {
          title: "Distribution and integration",
          description:
            "Plan storage, pumping, monitoring, distribution networks and interfaces with existing plant utilities.",
        },
      ],
    },
    {
      type: "products",
      id: "products",
      label: "Equipment & Systems",
      heading: "Representative water recovery equipment",
      intro:
        "Equipment selection depends on source-water quality, the intended reuse application and the site's existing treatment infrastructure.",
      items: [
        {
          id: "water-recovery-packages",
          name: "Water Recovery Packages",
          category: "Water Treatment",
          description:
            "Treatment package concepts for recovering suitable process or wastewater streams for a defined reuse duty.",
          image: {
            src: "/images/services/water-recovery-packages.jpg",
            alt: "Industrial water recovery treatment package",
          },
        },
        {
          id: "water-polishing-systems",
          name: "Polishing Systems",
          category: "Tertiary Treatment",
          description:
            "Additional treatment concepts selected to meet specific reuse water-quality requirements.",
          image: {
            src: "/images/services/water-polishing-systems.jpg",
            alt: "Water polishing and tertiary treatment equipment",
          },
        },
        {
          id: "reuse-storage-distribution",
          name: "Reuse Storage and Distribution",
          category: "Plant Integration",
          description:
            "Storage, pumping and distribution interfaces for returning recovered water to suitable plant users.",
          image: {
            src: "/images/services/reuse-storage-distribution.jpg",
            alt: "Recovered water storage and distribution equipment",
          },
        },
        {
          id: "water-monitoring-systems",
          name: "Water Quality Monitoring Systems",
          category: "Instrumentation",
          description:
            "Monitoring and sampling arrangements selected for the relevant process controls and reuse quality criteria.",
          image: {
            src: "/images/services/water-quality-monitoring.jpg",
            alt: "Industrial water quality monitoring instrumentation",
          },
        },
      ],
    },
    {
      type: "services",
      id: "services",
      label: "Engineering Services",
      heading: "From water audit to reuse integration",
      intro:
        "Engineering work should be scoped around the site's water balance, target reuse applications and the reliability requirements of plant operations.",
      items: [
        {
          title: "Water Balance Assessment",
          description:
            "Map water use, wastewater generation, stream quality and potential reuse opportunities.",
        },
        {
          title: "Reuse Feasibility Review",
          description:
            "Assess candidate streams, treatment requirements, operational constraints and the data needed for design.",
        },
        {
          title: "Reuse Process Design",
          description:
            "Evaluate treatment stages against target reuse quality and the site's operating envelope.",
        },
        {
          title: "Recovery System Integration",
          description:
            "Coordinate recovered-water storage, distribution, controls and plant interfaces.",
        },
        {
          title: "Monitoring and Performance Planning",
          description:
            "Define water quality, flow and operating indicators needed to verify the reuse system's performance.",
        },
      ],
    },
    {
      type: "industries",
      id: "industries",
      label: "Applications",
      heading: "Potential water reuse application areas",
      intro:
        "Every reuse application needs an agreed quality specification and a review of health, process, materials and regulatory constraints.",
      items: [
        {
          title: "Chemical and Process Plants",
          description:
            "Assess reuse opportunities across selected process, wash-water and utility-water operations.",
        },
        {
          title: "Manufacturing Facilities",
          description:
            "Evaluate recovery of suitable utility and process water streams for defined internal uses.",
        },
        {
          title: "Cooling and Utility Systems",
          description:
            "Consider recovered water for compatible utility duties after checking chemistry, scaling, corrosion and biological risks.",
        },
        {
          title: "Water-Stressed Sites",
          description:
            "Assess recycling as one part of a broader site water-management strategy.",
        },
      ],
    },
    {
      type: "technical-specifications",
      id: "technical-specifications",
      label: "Design Basis",
      heading: "Inputs that shape a reuse system",
      intro:
        "The following inputs help establish the design basis. Actual treatment performance and recovery values must be established for the specific project.",
      items: [
        {
          name: "Water balance",
          value:
            "Source flows, demand profiles, wastewater generation and seasonal or production-related variability",
        },
        {
          name: "Source-water quality",
          value:
            "Suspended solids, dissolved constituents, organics, pH, temperature and relevant contaminants",
        },
        {
          name: "Reuse quality requirements",
          value:
            "Target limits based on the intended end use, process sensitivity and applicable requirements",
        },
        {
          name: "Recovery objective",
          value:
            "Required recovered-water quantity, acceptable losses and constraints on concentrate or residual streams",
        },
        {
          name: "Treatment and utilities",
          value:
            "Candidate treatment technologies, power, chemicals, cleaning, pumping and storage requirements",
        },
        {
          name: "Plant interfaces",
          value:
            "Existing treatment assets, distribution networks, control systems, tie-ins and available installation space",
        },
      ],
      note:
        "Final specifications require representative analysis, a defined reuse application and project-specific engineering.",
    },
    {
      type: "process-flow",
      id: "process-flow",
      label: "Process Flow",
      heading: "A typical water reuse development sequence",
      intro:
        "The treatment train is selected to suit the stream characteristics and the quality required at each reuse point.",
      steps: [
        {
          title: "Site water audit",
          description:
            "Map incoming water, process consumption, wastewater streams and major points of water loss.",
          output: "Site water balance",
        },
        {
          title: "Identify recovery opportunities",
          description:
            "Rank candidate streams according to volume, quality, proximity to demand and technical constraints.",
          output: "Candidate reuse streams",
        },
        {
          title: "Define end-use requirements",
          description:
            "Set quality and reliability criteria for each intended application and confirm applicable restrictions.",
          output: "Reuse quality basis",
        },
        {
          title: "Select treatment and recovery stages",
          description:
            "Evaluate treatment options, residual handling, utility requirements and potential integration with existing assets.",
          output: "Preliminary treatment train",
        },
        {
          title: "Integrate and verify",
          description:
            "Plan storage, distribution, controls and sampling to verify that recovered water meets the agreed criteria.",
          output: "Reuse integration plan",
        },
      ],
      note:
        "Zero liquid discharge (ZLD) should only be considered when supported by project-specific feasibility, energy, residuals and cost assessments.",
    },
    {
      type: "lifecycle-support",
      id: "lifecycle-support",
      label: "Lifecycle Support",
      heading: "Make reuse reliable in day-to-day operations",
      intro:
        "A successful reuse system requires operating ownership, monitoring and management of both recovered water and treatment residuals.",
      items: [
        {
          title: "Water balance updates",
          description:
            "Review the water balance as production patterns, source quality or site demand changes.",
        },
        {
          title: "Operating procedures",
          description:
            "Define start-up, shutdown, bypass and response procedures for changes in feed quality or treatment performance.",
        },
        {
          title: "Water quality monitoring",
          description:
            "Establish sampling frequency and monitoring parameters appropriate to each reuse application.",
        },
        {
          title: "Maintenance and consumables",
          description:
            "Plan maintenance for pumps, filters, membranes, dosing equipment, sensors and associated systems.",
        },
        {
          title: "Residuals and concentrate management",
          description:
            "Review sludge, spent media, concentrate and cleaning waste handling as part of the full lifecycle plan.",
        },
      ],
    },
    {
      type: "standards-certifications",
      id: "standards-certifications",
      label: "Compliance",
      heading: "Confirm requirements for each reuse application",
      intro:
        "Applicable requirements depend on location, water source, intended use, discharge route and project specifications. No specific certification is implied.",
      items: [
        {
          title: "End-use water quality",
          description:
            "Identify relevant limits and guidance for the intended use, including process, cooling or other utility applications.",
        },
        {
          title: "Discharge and residuals requirements",
          description:
            "Confirm requirements for reject streams, concentrate, sludge and any wastewater that remains for discharge.",
        },
        {
          title: "Chemical handling and safety",
          description:
            "Assess storage, dosing, containment and handling requirements for treatment and cleaning chemicals.",
        },
        {
          title: "Monitoring and documentation",
          description:
            "Define sampling, recordkeeping, alarms and reporting requirements relevant to the site and reuse purpose.",
        },
      ],
      note:
        "Verify regulatory obligations with the project owner and qualified local specialists before finalising the design.",
    },
    {
      type: "performance-sustainability",
      id: "performance-sustainability",
      label: "Performance",
      heading: "Measure recovery without overlooking trade-offs",
      intro:
        "Reuse performance should consider water quantity and quality alongside energy, chemicals, residuals and operating reliability.",
      metrics: [
        {
          title: "Recovered-water volume",
          description:
            "Track the volume of water returned to approved uses against a clearly defined measurement basis.",
          category: "Water Recovery",
        },
        {
          title: "Reuse quality compliance",
          description:
            "Monitor the parameters that determine suitability for each intended application.",
          category: "Water Quality",
        },
        {
          title: "Utility and chemical demand",
          description:
            "Assess energy, treatment chemicals, cleaning and other inputs required by the selected process.",
          category: "Resource Use",
        },
        {
          title: "Residuals management",
          description:
            "Account for concentrate, sludge, spent media and cleaning waste generated by the treatment process.",
          category: "Operations",
        },
      ],
      note:
        "No water-saving percentage, recovery rate or environmental benefit is claimed without a verified project baseline and measured results.",
    },
    {
      type: "downloads-resources",
      id: "downloads-resources",
      label: "Resources",
      heading: "Technical resources",
      intro:
        "Approved water balance templates, process notes and equipment datasheets can be added here when available.",
      items: [],
      note: "Add only reviewed documents with valid public links.",
    },
    {
      type: "faqs",
      id: "faqs",
      label: "FAQs",
      heading: "Water reuse and recycling questions",
      intro:
        "Common considerations when evaluating industrial water recovery.",
      items: [
        {
          question: "What is the first step in a water reuse project?",
          answer:
            "Start with a site water balance and representative water-quality data. These establish the available streams, potential demand and constraints for recovery.",
        },
        {
          question: "Can all wastewater be reused?",
          answer:
            "No. Reuse depends on contaminants, treatment feasibility, the intended end use, applicable requirements and the handling of treatment residuals.",
        },
        {
          question: "Does water reuse always require membrane treatment?",
          answer:
            "No. The treatment train depends on source-water quality and the target application. Membranes may be appropriate in some cases, while other processes may be sufficient or needed in combination.",
        },
        {
          question: "Does water reuse mean zero liquid discharge?",
          answer:
            "No. Water reuse and zero liquid discharge are different objectives. ZLD requires a separate assessment of concentrate management, energy, residuals, capital cost and operating cost.",
        },
        {
          question: "What information is needed for an initial review?",
          answer:
            "Useful inputs include water-use records, stream flow rates, water analyses, intended reuse points, target quality, existing treatment equipment and site constraints.",
        },
      ],
    },
  ],
};

const waterAndWastewaterTreatment: Omit<SBU, "href"> = {
  name: "Water and Wastewater Treatment",
  offerings:
    "Industrial water treatment, UF/MBR, reuse, recycling and zero liquid discharge where supported by actual capability.",
  children: [ufMbr, waterReuse],
};

export default waterAndWastewaterTreatment;
