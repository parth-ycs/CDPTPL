
import type { SBUChild } from "@/data/sbus/types";

const liquidDistributors: SBUChild = {
  slug: "liquid-distributors",

  hero: {
    name: "Liquid Distributors",
    tagline: "Uniform Liquid Distribution for Optimized Packed Column Performance",
    description:
      "Engineered liquid distribution systems designed to deliver consistent liquid flow across packed column cross-sections, supporting effective packing wetting and improved mass transfer performance.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial packed column liquid distributor",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Industrial Liquid Distribution Systems",
      description:
        "Liquid distributors are important column internals used to spread incoming liquid uniformly over the packing surface. Proper distribution helps reduce channeling, dry zones and uneven liquid loading. Distributor selection depends on liquid flow rate, fluid properties, column diameter, fouling tendency and operating conditions.",
      kpis: [
        { value: "01", label: "Uniform liquid distribution" },
        { value: "02", label: "Optimized packing wetting" },
        { value: "03", label: "Process-specific design" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Liquid Distributor Engineering Capabilities",
      intro:
        "Engineering capabilities focused on distribution uniformity, hydraulic performance and packed column integration.",
      items: [
        {
          title: "Liquid Distributor Selection",
          description:
            "Evaluate process requirements, liquid properties and column geometry to identify suitable distributor configurations.",
        },
        {
          title: "Distribution Uniformity Assessment",
          description:
            "Assess liquid distribution patterns and discharge arrangements to support uniform coverage across the column cross-section.",
        },
        {
          title: "Distributor Hydraulic Design",
          description:
            "Evaluate liquid flow, discharge openings and hydraulic requirements for the intended operating conditions.",
        },
        {
          title: "Column Cross-Sectional Coverage",
          description:
            "Develop distribution arrangements considering column diameter, packing layout and required liquid coverage.",
        },
        {
          title: "Liquid Flow and Pressure Assessment",
          description:
            "Review liquid loading, pressure conditions and flow characteristics for reliable distributor operation.",
        },
        {
          title: "Existing Distributor Performance Review",
          description:
            "Evaluate existing liquid distribution arrangements and identify potential improvements or replacement requirements.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Liquid Distributor Product Range",
      intro:
        "Representative liquid distribution configurations designed for packed columns and industrial mass transfer applications.",
      items: [
        {
          id: "liquid-distributors-product-1",
          name: "Orifice Type Distributors",
          category: "Liquid Distribution",
          description:
            "Distribution systems using calibrated openings to deliver liquid across a packed column and support controlled discharge.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial orifice type liquid distributor",
          },
          specs: [
            "Calibrated liquid discharge openings",
            "Configuration based on liquid flow requirements",
            "Designed for packed column applications",
          ],
        },
        {
          id: "liquid-distributors-product-2",
          name: "Trough Type Distributors",
          category: "Liquid Distribution",
          description:
            "Trough-based arrangements designed to distribute liquid through multiple discharge points across the column.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial trough type liquid distributor",
          },
          specs: [
            "Multiple liquid discharge points",
            "Trough-based distribution arrangement",
            "Configuration based on column geometry",
          ],
        },
        {
          id: "liquid-distributors-product-3",
          name: "Pan Type Distributors",
          category: "Liquid Distribution",
          description:
            "Pan-style liquid distribution arrangements designed for suitable column operating conditions and liquid handling requirements.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial pan type liquid distributor",
          },
          specs: [
            "Pan-based distribution configuration",
            "Designed around liquid loading requirements",
            "Column-specific arrangement",
          ],
        },
        {
          id: "liquid-distributors-product-4",
          name: "Pipe Type Distributors",
          category: "Liquid Distribution",
          description:
            "Pipe-based systems incorporating discharge openings for liquid delivery across the column cross-section.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial pipe type liquid distributor",
          },
          specs: [
            "Pipe-based liquid distribution",
            "Integrated discharge openings",
            "Configuration based on process requirements",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Liquid Distributor Engineering Services",
      intro:
        "Engineering support covering distributor selection, hydraulic evaluation, liquid flow assessment and column integration.",
      items: [
        {
          title: "Technical Assessment",
          description:
            "Evaluate liquid flow rate, fluid properties and column operating requirements to establish the distributor design basis.",
        },
        {
          title: "Distributor Design and Selection",
          description:
            "Determine suitable distributor geometry, discharge configuration and material requirements.",
        },
        {
          title: "Hydraulic Performance Evaluation",
          description:
            "Review liquid flow, discharge characteristics and hydraulic conditions across the distributor arrangement.",
        },
        {
          title: "Distribution Uniformity Evaluation",
          description:
            "Assess distribution coverage and liquid delivery across the packed column cross-section.",
        },
        {
          title: "Column Integration and Optimization",
          description:
            "Coordinate distributor arrangements with packing, supporting internals and existing column configurations.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Liquid Distributor Industrial Applications",
      intro:
        "Liquid distribution solutions for industrial columns requiring controlled liquid delivery and effective vapour-liquid contacting.",
      items: [
        {
          title: "Packed Distillation Columns",
          description:
            "Uniform liquid delivery across packed sections to support effective contacting during industrial distillation.",
        },
        {
          title: "Gas Absorption Systems",
          description:
            "Liquid distribution arrangements supporting gas-liquid interaction in industrial absorption columns.",
        },
        {
          title: "Industrial Scrubbers",
          description:
            "Distribution systems designed to deliver liquid across scrubbing sections for effective gas-liquid contact.",
        },
        {
          title: "Liquid-Liquid Contacting Columns",
          description:
            "Liquid distribution arrangements for suitable liquid-liquid contacting and separation applications.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Liquid Distributor Technical Specifications",
      intro:
        "Distributor specifications are established according to liquid flow conditions, column geometry and hydraulic design requirements.",
      items: [
        {
          name: "Distributor configuration",
          value: "Trough, pan, orifice or pipe type",
        },
        {
          name: "Liquid flow rate",
          value: "Defined by process requirements",
        },
        {
          name: "Column diameter",
          value: "Application-specific",
        },
        {
          name: "Distribution density",
          value: "Established through hydraulic design",
        },
        {
          name: "Material",
          value: "Selected according to fluid compatibility",
        },
        {
          name: "Fouling tendency",
          value: "Evaluated during distributor selection",
        },
        {
          name: "Discharge arrangement",
          value: "Defined by distributor configuration",
        },
      ],
      note:
        "Specifications are representative design considerations. Actual dimensions, discharge rates, distribution density and materials must be confirmed through approved project calculations.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "How Liquid Distributors Work",
      intro:
        "Liquid distributors receive process liquid and deliver it through designated discharge points to promote uniform distribution across packed column sections.",
      steps: [
        {
          title: "Liquid Feed Assessment",
          description:
            "Determine liquid flow rate, fluid properties and column operating requirements.",
          output: "Liquid feed design basis",
        },
        {
          title: "Distributor Design",
          description:
            "Select suitable distributor geometry and discharge configuration according to the process requirements.",
          output: "Distributor design",
        },
        {
          title: "Liquid Distribution",
          description:
            "Deliver liquid through distribution points across the column cross-section.",
          output: "Distributed liquid stream",
        },
        {
          title: "Packing Wetting",
          description:
            "Allow distributed liquid to flow across the packing surface and establish effective contacting.",
          output: "Improved liquid-packing contact",
        },
      ],
      note:
        "Actual distribution performance depends on liquid properties, flow rate, distributor geometry, column dimensions and operating conditions.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Liquid Distributor Lifecycle Support",
      intro:
        "Support activities focused on maintaining distribution uniformity, hydraulic performance and reliable column operation.",
      items: [
        {
          title: "Installation and Commissioning",
          description:
            "Coordinate distributor installation, positioning and alignment within the column internals arrangement.",
        },
        {
          title: "Inspection and Maintenance",
          description:
            "Inspect discharge openings, troughs, pipes and associated components for fouling, blockage or physical damage.",
        },
        {
          title: "Distribution Performance Review",
          description:
            "Evaluate liquid delivery patterns and distribution uniformity against intended operating requirements.",
        },
        {
          title: "Operational Troubleshooting",
          description:
            "Investigate potential issues involving uneven liquid distribution, blocked openings and hydraulic performance.",
        },
      ],
    },

    {
      id: "performance-sustainability",
      label: "Performance & Sustainability",
      type: "performance-sustainability",
      heading: "Liquid Distributor Performance Indicators",
      intro:
        "Key indicators used to evaluate liquid distribution effectiveness and packed column performance.",
      metrics: [
        {
          title: "Distribution Uniformity",
          description:
            "Evaluate the consistency of liquid delivery across the column cross-section.",
          category: "Performance",
        },
        {
          title: "Hydraulic Capacity",
          description:
            "Review liquid handling capacity under the intended process operating conditions.",
          category: "Hydraulics",
        },
        {
          title: "Packing Wetting",
          description:
            "Assess liquid coverage across the packing surface to identify potential dry zones or uneven distribution.",
          category: "Operations",
        },
      ],
      note:
        "Actual performance values must be established through engineering calculations, distribution testing or operating data.",
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Liquid Distributor Quality and Compliance",
      intro:
        "Applicable engineering, fabrication and inspection requirements depend on distributor configuration and project specifications.",
      items: [
        {
          title: "Mechanical Design Requirements",
          description:
            "Evaluate structural arrangement, component dimensions and integration with column internals.",
          reference: "Project-specific",
        },
        {
          title: "Material Requirements",
          description:
            "Establish material compatibility with process fluids and operating conditions.",
          reference: "Project-specific",
        },
        {
          title: "Inspection and Quality Requirements",
          description:
            "Define inspection and quality verification requirements for supplied distribution equipment.",
          reference: "To be confirmed per project",
        },
      ],
      note:
        "Applicable standards and certifications must be confirmed against the actual project scope. No unverified certification claims are made.",
    },

    {
      id: "downloads-resources",
      label: "Downloads & Technical Resources",
      type: "downloads-resources",
      heading: "Liquid Distributor Technical Resources",
      intro:
        "Technical brochures, product drawings, distributor layouts and approved engineering documentation can be listed here.",
      items: [],
      note:
        "No downloadable technical resources have been configured for this page yet.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Liquid Distributors Frequently Asked Questions",
      intro:
        "Common questions about liquid distribution systems and their role in packed column operation.",
      items: [
        {
          question: "What is a liquid distributor in a packed column?",
          answer:
            "A liquid distributor is a column internal designed to spread incoming liquid uniformly across the packing surface to support effective wetting and mass transfer.",
        },
        {
          question: "Why is uniform liquid distribution important?",
          answer:
            "Uniform distribution helps reduce channeling, dry zones and uneven liquid loading, supporting more effective vapour-liquid contact.",
        },
        {
          question: "What are the different types of liquid distributors?",
          answer:
            "Common configurations include orifice type, trough type, pan type and pipe type distributors.",
        },
        {
          question: "How is a liquid distributor selected?",
          answer:
            "Selection depends on liquid flow rate, fluid properties, column diameter, packing arrangement, fouling tendency and operating conditions.",
        },
        {
          question: "Can existing liquid distributors be replaced?",
          answer:
            "Yes. Replacement can be evaluated by reviewing the existing column geometry, liquid loading, process conditions and required distribution performance.",
        },
      ],
    },
  ],
};

export default liquidDistributors;
