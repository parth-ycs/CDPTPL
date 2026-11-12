
import type { SBUChild } from "@/data/sbus/types";

const cdSmartMixer: SBUChild = {
  slug: "cd-smart-mixer",

  hero: {
    name: "CD-Smart Mixer",
    tagline: "Advanced Mixing & Agitation Solutions",
    description:
      "Engineered industrial mixing solutions designed for controlled blending, dispersion and homogenization across diverse process applications.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial CD-Smart Mixer equipment",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "CD-Smart Mixer for Industrial Process Applications",
      description:
        "CD-Smart Mixer systems are designed to achieve consistent mixing performance across a range of industrial processes. Mixer selection considers fluid properties, viscosity, mixing intensity, vessel geometry, operating conditions and the required process outcome.",
      kpis: [
        { value: "01", label: "Process-driven design" },
        { value: "02", label: "Optimised agitation" },
        { value: "03", label: "Application-specific solutions" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "CD-Smart Mixer Engineering Capabilities",
      intro:
        "Engineering capabilities focused on achieving reliable and efficient mixing performance.",
      items: [
        {
          title: "Mixing Duty Assessment",
          description:
            "Evaluate process requirements, fluid characteristics and desired mixing outcomes to establish the appropriate mixing arrangement.",
        },
        {
          title: "Impeller and Agitator Design",
          description:
            "Select suitable impeller geometries and agitator configurations based on flow patterns, viscosity and process requirements.",
        },
        {
          title: "Fluid Dynamics Evaluation",
          description:
            "Assess fluid movement, circulation patterns and mixing behaviour to support effective blending and dispersion.",
        },
        {
          title: "Drive and Mechanical Arrangement",
          description:
            "Determine suitable motor, gearbox, shaft and mechanical configurations for the intended operating conditions.",
        },
        {
          title: "Process Vessel Integration",
          description:
            "Coordinate mixer arrangements with vessel geometry, mounting configurations and associated process connections.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "CD-Smart Mixer Product Range",
      intro:
        "Representative mixing equipment and configurations designed for different industrial process requirements. Final selection and configuration depend on the project design basis.",
      items: [
        {
          id: "cd-smart-mixer-product-1",
          name: "Industrial Mixer Assemblies",
          category: "Mixing Equipment",
          description:
            "Complete mixer arrangements designed for controlled blending and circulation within industrial process vessels.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial mixer assembly",
          },
          specs: [
            "Designed around process mixing requirements",
            "Drive and shaft arrangements are application-specific",
          ],
        },
        {
          id: "cd-smart-mixer-product-2",
          name: "Agitator Systems",
          category: "Agitation Equipment",
          description:
            "Mechanical agitation systems configured to support fluid circulation, blending and process consistency.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial agitator system",
          },
          specs: [
            "Configuration based on fluid characteristics",
            "Suitable arrangement established from vessel requirements",
          ],
        },
        {
          id: "cd-smart-mixer-product-3",
          name: "Impeller Assemblies",
          category: "Mixer Components",
          description:
            "Application-specific impeller configurations selected to achieve the required fluid flow and mixing behaviour.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial mixing impeller assembly",
          },
          specs: [
            "Impeller geometry selected for mixing duty",
            "Material and dimensions are project-specific",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "CD-Smart Mixer Engineering Services",
      intro:
        "Engineering and technical services supporting mixer selection, configuration and process integration.",
      items: [
        {
          title: "Mixing Process Evaluation",
          description:
            "Assess process objectives, material properties and operating conditions to establish mixing requirements.",
        },
        {
          title: "Mixer Selection and Configuration",
          description:
            "Identify appropriate mixer types, impeller arrangements and mechanical configurations.",
        },
        {
          title: "Mechanical and Drive Engineering",
          description:
            "Evaluate shaft arrangements, drive selection, mounting configurations and mechanical requirements.",
        },
        {
          title: "Vessel Integration",
          description:
            "Coordinate mixer installation requirements with process vessels and associated equipment.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "CD-Smart Mixer Industrial Applications",
      intro:
        "Mixing solutions for industrial sectors involving blending, agitation and material homogenization.",
      items: [
        {
          title: "Chemical Manufacturing",
          description:
            "Mixing and agitation applications for chemical production and processing operations.",
        },
        {
          title: "Specialty Chemicals",
          description:
            "Controlled mixing arrangements for specialty chemical formulations and production processes.",
        },
        {
          title: "Pharmaceutical Processing",
          description:
            "Mixing applications where process consistency and controlled material distribution are important.",
        },
        {
          title: "Industrial Formulations",
          description:
            "Blending and homogenization of liquid formulations and process materials.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "CD-Smart Mixer Technical Specifications",
      intro:
        "Mixer specifications are established according to process conditions, fluid properties and mechanical design requirements.",
      items: [
        {
          name: "Mixing duty",
          value: "Blending, dispersion and homogenization",
        },
        {
          name: "Fluid viscosity",
          value: "Established from process material data",
        },
        {
          name: "Impeller configuration",
          value: "Selected according to mixing requirements",
        },
        {
          name: "Drive arrangement",
          value: "Defined by mechanical and process requirements",
        },
        {
          name: "Shaft configuration",
          value: "Selected according to vessel and operating conditions",
        },
        {
          name: "Vessel integration",
          value: "Project-specific mounting and installation arrangement",
        },
        {
          name: "Materials of construction",
          value: "Selected based on process fluid compatibility",
        },
      ],
      note:
        "The above specifications are indicative design considerations, not fixed product ratings. Actual operating parameters and equipment dimensions must be confirmed against the approved project design.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "CD-Smart Mixer Operating Process",
      intro:
        "A representative mixing workflow illustrating how process materials are blended through mechanical agitation.",
      steps: [
        {
          title: "Material Introduction",
          description:
            "Process materials are introduced into the mixing vessel according to the defined operating procedure.",
          output: "Initial material charge",
        },
        {
          title: "Mechanical Agitation",
          description:
            "The mixer drive rotates the shaft and impeller, generating fluid movement and circulation within the vessel.",
          output: "Circulating fluid",
        },
        {
          title: "Blending and Dispersion",
          description:
            "The resulting mixing action promotes distribution of process components and supports the required blending outcome.",
          output: "Homogeneous process mixture",
        },
        {
          title: "Product Discharge",
          description:
            "The mixed material is discharged from the vessel for subsequent processing or production operations.",
          output: "Mixed product stream",
        },
      ],
      note:
        "Actual mixing performance depends on fluid properties, vessel geometry, impeller selection, operating speed and process conditions.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "CD-Smart Mixer Lifecycle Support",
      intro:
        "Support activities covering equipment installation, operation and ongoing maintenance requirements.",
      items: [
        {
          title: "Installation and Commissioning Support",
          description:
            "Support equipment installation, mechanical alignment and initial operational checks within the agreed project scope.",
        },
        {
          title: "Preventive Maintenance",
          description:
            "Plan periodic inspection and maintenance of drive systems, shafts, bearings and associated mechanical components.",
        },
        {
          title: "Spare Parts and Component Support",
          description:
            "Identify replacement requirements for selected mixer components and mechanical assemblies.",
        },
        {
          title: "Performance Evaluation",
          description:
            "Review mixer operating conditions and assess potential improvements based on process requirements.",
        },
      ],
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "CD-Smart Mixer Quality and Compliance",
      intro:
        "Applicable engineering, manufacturing and inspection requirements are determined by the equipment design basis and project specifications.",
      items: [
        {
          title: "Mechanical Design Requirements",
          description:
            "Define applicable mechanical design and equipment requirements based on the intended operating conditions.",
          reference: "To be confirmed per project",
        },
        {
          title: "Material and Fabrication Requirements",
          description:
            "Establish material selection, fabrication and quality requirements according to process compatibility.",
          reference: "Project-specific",
        },
        {
          title: "Inspection and Testing",
          description:
            "Define inspection procedures and agreed mechanical and operational verification activities.",
          reference: "Project quality plan",
        },
      ],
      note:
        "Applicable codes, standards and certifications must be verified against the actual equipment specification. No specific certification is implied.",
    },

    {
      id: "downloads-resources",
      label: "Downloads & Technical Resources",
      type: "downloads-resources",
      heading: "CD-Smart Mixer Technical Resources",
      intro:
        "Technical brochures, equipment datasheets, general arrangement drawings and product documentation can be listed here when approved for public distribution.",
      items: [],
      note:
        "No downloadable technical resources have been configured for this page yet.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "CD-Smart Mixer Frequently Asked Questions",
      intro:
        "Common questions about industrial mixing equipment, configurations and applications.",
      items: [
        {
          question: "What is the purpose of an industrial mixer?",
          answer:
            "Industrial mixers are used to blend, disperse and homogenize process materials to achieve the required product consistency and process conditions.",
        },
        {
          question: "How is the appropriate mixer selected?",
          answer:
            "Mixer selection depends on fluid viscosity, material properties, vessel geometry, required mixing intensity, operating conditions and the intended mixing outcome.",
        },
        {
          question: "Can mixer configurations be customised?",
          answer:
            "Yes. Mixer arrangements can be evaluated and configured according to specific process requirements, vessel dimensions and mechanical design considerations.",
        },
        {
          question: "What is the difference between an agitator and an impeller?",
          answer:
            "An agitator is the overall mechanical assembly responsible for mixing, while the impeller is the rotating component that generates fluid movement within the vessel.",
        },
        {
          question: "What maintenance does a mixer require?",
          answer:
            "Maintenance requirements depend on the equipment configuration and operating conditions. Typical activities include inspecting drive systems, bearings, shafts, seals and impeller assemblies.",
        },
      ],
    },
  ],
};

export default cdSmartMixer;
