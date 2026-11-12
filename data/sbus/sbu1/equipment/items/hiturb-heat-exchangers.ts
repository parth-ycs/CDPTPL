
import type { SBUChild } from "@/data/sbus/types";

const hiturbHeatExchangers: SBUChild = {
  slug: "hiturb-heat-exchangers",

  hero: {
    name: "HiTURB™ Heat Exchangers",
    tagline: "Advanced Industrial Heat Transfer Solutions",
    description:
      "Specialized heat exchanger solutions engineered to transfer thermal energy between process streams while optimizing heat duty, operating conditions and equipment reliability.",
    image: "/images/Hero_BG.png",
    imageAlt: "Industrial HiTURB heat exchanger equipment",
    ctaLabel: "Discuss a project",
    ctaHref: "#enquiry",
  },

  sections: [
    {
      id: "overview",
      label: "Overview",
      type: "overview",
      heading: "HiTURB™ Heat Exchangers for Industrial Applications",
      description:
        "Heat exchangers enable controlled thermal energy transfer across industrial processes. HiTURB™ Heat Exchangers are designed around process-specific thermal requirements, considering heat duty, fluid properties, pressure drop, temperature approach, fouling characteristics and available utilities. Their selection and configuration support efficient thermal management and process integration.",
      kpis: [
        { value: "01", label: "Thermal efficiency" },
        { value: "02", label: "Heat recovery" },
        { value: "03", label: "Process integration" },
      ],
    },

    {
      id: "capabilities",
      label: "Capabilities",
      type: "capabilities",
      heading: "HiTURB™ Heat Exchanger Engineering Capabilities",
      intro:
        "Engineering capabilities focused on thermal performance, hydraulic requirements and reliable heat transfer.",
      items: [
        {
          title: "Thermal Duty Assessment",
          description:
            "Evaluate process stream conditions, heat loads and temperature requirements to establish the required thermal duty and heat balance.",
        },
        {
          title: "Heat Exchanger Configuration Selection",
          description:
            "Assess suitable heat exchanger arrangements based on process requirements, fluid characteristics and available installation constraints.",
        },
        {
          title: "Thermal and Hydraulic Design",
          description:
            "Evaluate heat transfer performance, flow characteristics and pressure drop to support appropriate equipment sizing and configuration.",
        },
        {
          title: "Material and Corrosion Assessment",
          description:
            "Consider process fluid compatibility, operating conditions and corrosion characteristics when evaluating materials of construction.",
        },
        {
          title: "Heat Recovery and Process Integration",
          description:
            "Identify suitable opportunities for thermal energy recovery and coordinate exchanger arrangements with existing process and utility systems.",
        },
      ],
    },

    {
      id: "products",
      label: "Products",
      type: "products",
      heading: "HiTURB™ Heat Exchanger Product Range",
      intro:
        "Representative heat transfer equipment and thermal system configurations designed for different industrial process requirements.",
      items: [
        {
          id: "hiturb-heat-exchangers-product-1",
          name: "Shell and Tube Heat Exchangers",
          category: "Heat Transfer Equipment",
          description:
            "Industrial heat exchanger configurations using tube bundles to transfer thermal energy between separate process streams.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial shell and tube heat exchanger",
          },
          specs: [
            "Thermal design based on process heat duty",
            "Tube bundle and shell configuration are application-specific",
          ],
        },
        {
          id: "hiturb-heat-exchangers-product-2",
          name: "Process Heat Exchanger Packages",
          category: "Thermal Systems",
          description:
            "Integrated thermal equipment arrangements designed around process stream requirements, utility connections and operating conditions.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial process heat exchanger package",
          },
          specs: [
            "Package configuration based on process requirements",
            "Process and utility interfaces are project-specific",
          ],
        },
        {
          id: "hiturb-heat-exchangers-product-3",
          name: "Heat Recovery Units",
          category: "Energy Recovery",
          description:
            "Thermal equipment arrangements designed to recover usable energy from suitable process streams and support improved energy utilisation.",
          image: {
            src: "/images/Hero_BG.png",
            alt: "Industrial heat recovery unit",
          },
          specs: [
            "Heat recovery potential established through energy balance",
            "Integration depends on available process streams and utility requirements",
          ],
        },
      ],
    },

    {
      id: "services",
      label: "Services",
      type: "services",
      heading: "HiTURB™ Heat Exchanger Engineering Services",
      intro:
        "Engineering and technical services supporting heat exchanger selection, thermal design and process integration.",
      items: [
        {
          title: "Thermal Design and Evaluation",
          description:
            "Evaluate process heat duty, temperature requirements and thermal balance to establish suitable exchanger design parameters.",
        },
        {
          title: "Equipment Selection and Sizing",
          description:
            "Identify appropriate heat exchanger configurations based on fluid properties, operating conditions and process requirements.",
        },
        {
          title: "Mechanical and Hydraulic Engineering",
          description:
            "Evaluate pressure drop, flow arrangements, mechanical requirements and materials of construction.",
        },
        {
          title: "Energy Recovery and Integration",
          description:
            "Assess opportunities for recovering thermal energy and integrating heat exchangers with existing process systems.",
        },
      ],
    },

    {
      id: "industries",
      label: "Industries",
      type: "industries",
      heading: "HiTURB™ Heat Exchanger Industrial Applications",
      intro:
        "Heat transfer solutions for industrial sectors involving thermal processing, cooling, heating and energy recovery.",
      items: [
        {
          title: "Chemical Processing Plants",
          description:
            "Heat exchange applications supporting chemical production, heating, cooling and process temperature control.",
        },
        {
          title: "Petrochemical Facilities",
          description:
            "Thermal equipment for process stream conditioning, heat recovery and temperature management across petrochemical operations.",
        },
        {
          title: "Oil and Gas Processing",
          description:
            "Heat transfer applications involving hydrocarbon processing, process heating and cooling operations.",
        },
        {
          title: "Industrial Energy Recovery",
          description:
            "Thermal systems designed to recover usable energy from suitable process streams and improve overall energy utilisation.",
        },
      ],
    },

    {
      id: "technical-specifications",
      label: "Technical Specifications",
      type: "technical-specifications",
      heading: "HiTURB™ Heat Exchanger Technical Specifications",
      intro:
        "Heat exchanger specifications are established according to thermal duty, fluid characteristics, hydraulic requirements and mechanical design conditions.",
      items: [
        {
          name: "Heat duty",
          value: "Calculated from process heat balance",
        },
        {
          name: "Heat transfer area",
          value: "Determined during thermal design",
        },
        {
          name: "Operating pressure",
          value: "Defined by process requirements",
        },
        {
          name: "Operating temperature",
          value: "Established from process conditions",
        },
        {
          name: "Pressure drop",
          value: "Defined by hydraulic requirements",
        },
        {
          name: "Heat transfer arrangement",
          value: "Selected according to process requirements",
        },
        {
          name: "Materials of construction",
          value: "Selected for process fluid compatibility",
        },
        {
          name: "Utility requirements",
          value: "Established from thermal and process design",
        },
      ],
      note:
        "The above specifications are indicative design considerations. Actual heat duty, heat transfer area, operating conditions and equipment dimensions must be confirmed against the approved thermal and mechanical design.",
    },

    {
      id: "process-flow",
      label: "Process Flow / How It Works",
      type: "process-flow",
      heading: "HiTURB™ Heat Exchanger Operating Process",
      intro:
        "A representative operating sequence illustrating how thermal energy is transferred between separate process streams.",
      steps: [
        {
          title: "Hot and Cold Stream Introduction",
          description:
            "The hot and cold process streams enter their designated flow passages within the heat exchanger.",
          output: "Separate process streams",
        },
        {
          title: "Thermal Energy Transfer",
          description:
            "Heat passes through the exchanger heat transfer surface from the hotter stream to the colder stream without direct mixing.",
          output: "Thermally exchanged streams",
        },
        {
          title: "Temperature Adjustment",
          description:
            "Both streams undergo temperature changes according to the specified thermal duty and exchanger design conditions.",
          output: "Conditioned process streams",
        },
        {
          title: "Process Integration",
          description:
            "The conditioned outlet streams are routed to their respective downstream process operations or utility systems.",
          output: "Integrated thermal process",
        },
      ],
      note:
        "Actual thermal performance depends on heat transfer area, fluid properties, flow arrangement, operating conditions and exchanger configuration.",
    },

    {
      id: "lifecycle-support",
      label: "Lifecycle Support",
      type: "lifecycle-support",
      heading: "HiTURB™ Heat Exchanger Lifecycle Support",
      intro:
        "Support activities covering equipment installation, inspection, maintenance and ongoing thermal performance.",
      items: [
        {
          title: "Installation and Commissioning Support",
          description:
            "Support equipment installation, process connections, utility integration and initial operational checks within the agreed project scope.",
        },
        {
          title: "Preventive Maintenance",
          description:
            "Plan periodic inspection and maintenance activities to monitor equipment condition and maintain reliable operation.",
        },
        {
          title: "Inspection and Cleaning",
          description:
            "Evaluate heat transfer surfaces and identify inspection and cleaning requirements based on process fluid characteristics and operating conditions.",
        },
        {
          title: "Thermal Performance Evaluation",
          description:
            "Review heat transfer performance, temperature approach and pressure drop to identify potential operational improvements.",
        },
      ],
    },

    {
      id: "standards-certifications",
      label: "Standards & Certifications",
      type: "standards-certifications",
      heading: "HiTURB™ Heat Exchanger Quality and Compliance",
      intro:
        "Applicable engineering codes, fabrication requirements and inspection procedures depend on equipment configuration, operating conditions and project specifications.",
      items: [
        {
          title: "Pressure Equipment Design",
          description:
            "Identify applicable pressure equipment and mechanical design requirements according to operating conditions and jurisdiction.",
          reference: "To be confirmed per project",
        },
        {
          title: "Material and Fabrication Requirements",
          description:
            "Establish material selection, fabrication and quality requirements based on process fluid compatibility and thermal conditions.",
          reference: "Project-specific",
        },
        {
          title: "Inspection and Testing",
          description:
            "Define inspection procedures and testing requirements for equipment integrity and agreed thermal and mechanical verification.",
          reference: "Project quality plan",
        },
      ],
      note:
        "Applicable codes, standards and certification requirements must be verified against the actual equipment specification. No specific company certification is implied.",
    },

    {
      id: "downloads-resources",
      label: "Downloads & Technical Resources",
      type: "downloads-resources",
      heading: "HiTURB™ Heat Exchanger Technical Resources",
      intro:
        "Technical brochures, equipment datasheets, thermal design documents, general arrangement drawings and engineering documentation can be listed here when approved for public distribution.",
      items: [],
      note:
        "No downloadable technical resources have been configured for this page yet.",
    },

    {
      id: "faqs",
      label: "FAQs",
      type: "faqs",
      heading: "HiTURB™ Heat Exchangers Frequently Asked Questions",
      intro:
        "Common questions about industrial heat exchangers, their operation and thermal processing applications.",
      items: [
        {
          question: "What is the purpose of an industrial heat exchanger?",
          answer:
            "An industrial heat exchanger transfers thermal energy between two or more process streams to achieve required heating, cooling or heat recovery objectives.",
        },
        {
          question: "How does a shell and tube heat exchanger work?",
          answer:
            "A shell and tube heat exchanger transfers heat between fluids flowing through separate shell-side and tube-side passages. Heat passes through the tube walls without direct mixing of the streams.",
        },
        {
          question: "How is a heat exchanger selected?",
          answer:
            "Selection depends on heat duty, fluid properties, operating pressure, temperature requirements, pressure drop limitations, fouling characteristics and available utilities.",
        },
        {
          question: "What is heat recovery?",
          answer:
            "Heat recovery involves transferring usable thermal energy from a suitable hot process stream to another stream that requires heating, helping improve overall energy utilisation.",
        },
        {
          question: "What factors affect heat exchanger performance?",
          answer:
            "Performance depends on heat transfer area, fluid flow rates, temperature difference, heat transfer characteristics, fouling and operating conditions.",
        },
        {
          question: "What maintenance does a heat exchanger require?",
          answer:
            "Typical maintenance includes monitoring thermal performance and pressure drop, inspecting heat transfer surfaces, checking connections and evaluating cleaning requirements.",
        },
      ],
    },
  ],
};

export default hiturbHeatExchangers;
