
import type { SBUChild } from "@/data/sbus/types";

const staticMixers: SBUChild = {
  slug: "static-mixers",

  hero: {
    name: "Static Mixers",
    tagline: "In-line Mixing Solutions Without Rotating Components",
    description:
      "Static mixers use stationary internal elements to promote blending and dispersion as process fluids flow through a pipeline or mixing chamber, delivering continuous in-line mixing without rotating components.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial in-line static mixer equipment",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "Continuous In-line Mixing Technology",
      description:
        "Static mixers provide continuous in-line mixing without requiring a rotating agitator. Their internal geometry creates repeated flow division and recombination to improve mixing and fluid distribution. Selection depends on fluid properties, flow regime, pressure drop and the required mixing quality.",
      kpis: [
        { value: "01", label: "No rotating components" },
        { value: "02", label: "Continuous in-line mixing" },
        { value: "03", label: "Process-specific configuration" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "Static Mixer Engineering Capabilities",
      intro:
        "Engineering capabilities focused on mixing performance, hydraulic considerations and integration with industrial process systems.",
      items: [
        {
          title: "In-line Mixing Duty Assessment",
          description:
            "Evaluate process requirements, fluid characteristics and target mixing quality to establish the appropriate static mixing arrangement.",
        },
        {
          title: "Mixing Element Configuration",
          description:
            "Select and configure stationary internal elements according to the required blending, dispersion and fluid distribution duty.",
        },
        {
          title: "Pressure Drop Evaluation",
          description:
            "Assess hydraulic resistance across the mixer based on flow conditions, fluid properties and internal element geometry.",
        },
        {
          title: "Fluid Flow and Process Integration",
          description:
            "Coordinate mixer configuration with upstream and downstream process equipment and pipeline arrangements.",
        },
        {
          title: "Material Compatibility Assessment",
          description:
            "Evaluate construction materials against process fluid properties and operating conditions.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "Static Mixing Solutions",
      intro:
        "Static mixer configurations designed for different in-line blending, fluid distribution and process injection requirements.",
      items: [
        {
          id: "static-mixer-product-1",
          name: "In-line Static Mixers",
          category: "Mixing Equipment",
          description:
            "Stationary-element mixers designed for blending process fluids within pipelines. Internal elements repeatedly divide and redirect the flow to promote uniform mixing.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial in-line static mixer",
          },
          specs: [
            "Stationary internal mixing elements",
            "Pipeline-integrated configuration",
            "Designed for continuous fluid blending",
          ],
        },
        {
          id: "static-mixer-product-2",
          name: "Multi-element Mixers",
          category: "Mixing Equipment",
          description:
            "Mixing arrangements using multiple internal elements to promote repeated fluid distribution and recombination throughout the mixer.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Multi-element industrial static mixer",
          },
          specs: [
            "Multiple stationary mixing elements",
            "Repeated flow division and recombination",
            "Configuration based on mixing requirements",
          ],
        },
        {
          id: "static-mixer-product-3",
          name: "Injection Mixers",
          category: "Process Mixing",
          description:
            "Mixing configurations designed to introduce and distribute an additional process stream into a flowing fluid for controlled in-line blending.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial static injection mixer",
          },
          specs: [
            "Additional process stream injection",
            "In-line fluid distribution",
            "Configuration based on injection requirements",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "Static Mixer Engineering Services",
      intro:
        "Engineering support covering mixer selection, hydraulic evaluation, material compatibility and process integration.",
      items: [
        {
          title: "Mixing Application Assessment",
          description:
            "Review process objectives, fluid properties and operating conditions to establish the required mixing duty.",
        },
        {
          title: "Mixer Configuration and Selection",
          description:
            "Determine suitable internal element arrangements based on flow conditions and required mixing performance.",
        },
        {
          title: "Hydraulic and Pressure Drop Evaluation",
          description:
            "Evaluate pressure losses and flow characteristics to assess compatibility with the process system.",
        },
        {
          title: "Material Selection",
          description:
            "Assess material compatibility with process fluids and specified operating conditions.",
        },
        {
          title: "Process System Integration",
          description:
            "Coordinate mixer installation requirements and connections with the surrounding pipeline and process equipment.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "Industrial Applications of Static Mixers",
      intro:
        "Static mixing technology supports continuous blending and fluid distribution across a range of industrial processes.",
      items: [
        {
          title: "Chemical Processing",
          description:
            "In-line blending of process chemicals and fluid streams in chemical manufacturing operations.",
        },
        {
          title: "Water Treatment Processes",
          description:
            "Distribution and mixing of treatment chemicals within water and wastewater processing systems.",
        },
        {
          title: "Polymer Processing",
          description:
            "In-line blending and distribution of compatible polymer process streams.",
        },
        {
          title: "Industrial Fluid Blending",
          description:
            "Continuous mixing of liquid streams in industrial pipelines and process systems.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "Static Mixer Technical Specifications",
      intro:
        "Mixer configuration and operating parameters are established according to fluid characteristics, hydraulic conditions and process mixing requirements.",
      items: [
        {
          name: "Flow rate",
          value: "Defined by process operating conditions",
        },
        {
          name: "Fluid properties",
          value: "Viscosity and density established from process data",
        },
        {
          name: "Pressure drop",
          value: "Evaluated during hydraulic design",
        },
        {
          name: "Mixing elements",
          value: "Selected according to mixing duty",
        },
        {
          name: "Materials",
          value: "Selected for fluid compatibility",
        },
        {
          name: "Flow regime",
          value: "Evaluated from process operating conditions",
        },
        {
          name: "Installation arrangement",
          value: "Pipeline or mixing chamber configuration",
        },
        {
          name: "Mixing performance",
          value: "Defined by process mixing requirements",
        },
      ],
      note:
        "Final specifications, including dimensions, element geometry, materials, flow capacity and pressure drop, must be established through project-specific engineering evaluation.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "How Static Mixers Work",
      intro:
        "Static mixers use stationary internal elements to repeatedly divide, redirect and recombine flowing process fluids, promoting continuous in-line mixing.",
      steps: [
        {
          title: "Fluid Entry",
          description:
            "The process fluid enters the mixer through the inlet connection and flows toward the stationary internal elements.",
          output: "Incoming process stream",
        },
        {
          title: "Flow Division",
          description:
            "Stationary elements divide and redirect the flowing fluid into multiple flow paths.",
          output: "Divided flow streams",
        },
        {
          title: "Flow Recombination",
          description:
            "The divided streams repeatedly combine and redistribute through successive mixing elements, promoting fluid blending.",
          output: "Mixed fluid stream",
        },
        {
          title: "Outlet Discharge",
          description:
            "The mixed fluid exits the mixer and continues to downstream processing.",
          output: "Blended outlet stream",
        },
      ],
      note:
        "Actual mixing performance depends on internal element geometry, fluid properties, flow conditions and the number of mixing elements.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "Static Mixer Lifecycle Support",
      intro:
        "Support activities focused on maintaining mixer condition, process compatibility and reliable integration throughout equipment operation.",
      items: [
        {
          title: "Installation Support",
          description:
            "Coordinate mixer positioning, pipeline connections and installation requirements within the process system.",
        },
        {
          title: "Inspection and Maintenance",
          description:
            "Review equipment condition and inspect accessible internal components according to operating and maintenance requirements.",
        },
        {
          title: "Performance Assessment",
          description:
            "Evaluate mixing performance and pressure drop against expected process operating conditions.",
        },
        {
          title: "Operational Troubleshooting",
          description:
            "Investigate potential mixing or hydraulic issues arising from changes in fluid properties, flow conditions or process requirements.",
        },
      ],
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "Static Mixer Quality and Compliance",
      intro:
        "Applicable design, material, fabrication and inspection requirements depend on the mixer configuration and project specifications.",
      items: [
        {
          title: "Process Design Requirements",
          description:
            "Establish design conditions and mixing requirements based on the process design basis.",
          reference: "Project-specific",
        },
        {
          title: "Pressure Equipment and Piping Requirements",
          description:
            "Determine applicable requirements for pressure-containing components and pipeline integration.",
          reference: "Applicable project codes",
        },
        {
          title: "Material Compatibility",
          description:
            "Verify construction materials against process fluid properties and specified operating conditions.",
          reference: "Project material specifications",
        },
        {
          title: "Inspection and Quality Assurance",
          description:
            "Define applicable inspection, fabrication and quality verification requirements.",
          reference: "Project quality plan",
        },
      ],
      note:
        "Applicable codes, standards and certifications must be confirmed against the equipment design, operating conditions and project jurisdiction. No specific company certification is implied.",
    },

    {
      id: "downloads-resources",
      label: "Downloads & Technical Resources",
      type: "downloads-resources",
      heading: "Static Mixer Technical Resources",
      intro:
        "Technical brochures, product datasheets, mixer configuration drawings and engineering documentation can be listed here when approved for public distribution.",
      items: [],
      note:
        "No downloadable technical resources have been configured for this page yet.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "Static Mixers Frequently Asked Questions",
      intro:
        "Common questions about static mixer operation, configuration and industrial applications.",
      items: [
        {
          question: "What is a static mixer?",
          answer:
            "A static mixer is an in-line mixing device that uses stationary internal elements to blend process fluids as they flow through a pipeline or mixing chamber.",
        },
        {
          question: "How does a static mixer work?",
          answer:
            "Its internal elements repeatedly divide, redirect and recombine the flowing fluid, promoting mixing without requiring rotating components.",
        },
        {
          question: "Do static mixers require external power?",
          answer:
            "Static mixers do not require a rotating drive or agitator. Mixing is produced by the interaction between the flowing fluid and stationary internal elements. The process system must still provide the required fluid flow.",
        },
        {
          question: "What factors influence static mixer selection?",
          answer:
            "Selection depends on fluid viscosity, density, flow rate, flow regime, allowable pressure drop and the required mixing quality.",
        },
        {
          question: "What is the difference between static and dynamic mixers?",
          answer:
            "Static mixers use stationary internal elements and rely on fluid flow to produce mixing. Dynamic mixers use moving components, such as rotating impellers, to generate mixing.",
        },
        {
          question: "Where are static mixers commonly used?",
          answer:
            "They are used in chemical processing, water treatment, polymer processing and industrial fluid blending applications.",
        },
      ],
    },
  ],
};

export default staticMixers;
