import type { SBUChild } from "../types";

const greenChemicals: SBUChild = {
      slug: "green-chemicals",
      hero: {
        name: "Green Chemicals",
        tagline: "Green Process Technologies",
        description:
          "Process technology concepts for chemical production that evaluate feedstock options, conversion pathways, product specifications and resource use within a defined engineering and environmental assessment boundary.",
        image: "/images/Hero_BG.png",
        imageAlt: "Green chemical process technology",
        ctaLabel: "Discuss a project",
        ctaHref: "#enquiry",
      },
      sections: [
        {
          id: "overview",
          label: "Overview",
          type: "overview",
          heading: "Green Chemicals Process Technology",
          description:
            "Green chemical development considers how feedstock choice, conversion chemistry, separation, utilities and residual streams affect a process and its products. Environmental performance must be assessed against a defined baseline and system boundary rather than inferred from a technology label alone.",
          kpis: [
            { value: "01", label: "Process selection" },
            { value: "02", label: "Resource review" },
            { value: "03", label: "Product specification" },
          ],
        },
        {
          id: "capabilities",
          label: "Capabilities",
          type: "capabilities",
          heading: "Green Chemicals Engineering Capabilities",
          intro:
            "Representative process-development workstreams for evaluating chemical production routes and resource use.",
          items: [
            {
              title: "Feedstock and Route Screening",
              description:
                "Compare candidate feedstocks and process routes against composition, availability, product requirements and operating constraints.",
            },
            {
              title: "Reaction and Separation Integration",
              description:
                "Coordinate conversion, purification, recycle and product recovery stages for the selected process concept.",
            },
            {
              title: "Resource and Residual Stream Assessment",
              description:
                "Review energy, water, material inputs and residual streams using a consistent process boundary.",
            },
            {
              title: "Product Specification Development",
              description:
                "Identify the purity, composition and quality criteria relevant to the intended product application.",
            },
          ],
        },
        {
          id: "products",
          label: "Products",
          type: "products",
          heading: "Green Chemical Process Systems",
          intro:
            "Illustrative process-system categories. Commercial availability and environmental performance must be verified for the actual technology.",
          items: [
            {
              id: "green-chemicals-product-1",
              name: "Green Chemical Process Units",
              category: "Process Technology",
              description:
                "Conceptual process units for selected chemical production routes using a defined feedstock and product basis.",
              image: {
                src: "/images/Hero_BG.png",
                alt: "Chemical process unit",
              },
              specs: [
                "Process route depends on the target chemical",
                "Feedstock and utility requirements project-specific",
              ],
            },
            {
              id: "green-chemicals-product-2",
              name: "Purification Systems",
              category: "Separation Equipment",
              description:
                "Separation and purification systems configured to achieve defined product quality requirements.",
              image: {
                src: "/images/Hero_BG.png",
                alt: "Industrial purification system",
              },
              specs: [
                "Purification sequence depends on mixture properties",
                "Product targets must be defined by the intended use",
              ],
            },
            {
              id: "green-chemicals-product-3",
              name: "Material Recovery Units",
              category: "Resource Recovery",
              description:
                "Concepts for recovering suitable process materials for reuse where quality, safety and process economics support it.",
              image: {
                src: "/images/Hero_BG.png",
                alt: "Industrial material recovery equipment",
              },
              specs: [
                "Recoverable streams identified from process analysis",
                "Reuse quality requirements must be confirmed",
              ],
            },
          ],
        },
        {
          id: "services",
          label: "Services",
          type: "services",
          heading: "Green Chemicals Services",
          intro:
            "Representative services for evaluating chemical process options and their resource requirements.",
          items: [
            {
              title: "Process Feasibility Screening",
              description:
                "Screen process options against feedstock, product, technical and operating constraints.",
            },
            {
              title: "Process Engineering",
              description:
                "Develop preliminary process configurations, material balances and equipment requirements.",
            },
            {
              title: "Resource Efficiency Review",
              description:
                "Evaluate energy, water and material use using a defined process basis and available data.",
            },
            {
              title: "Separation and Recovery Integration",
              description:
                "Assess purification, recycle and recovery options while considering product quality and residual streams.",
            },
          ],
        },
        {
          id: "industries",
          label: "Industries",
          type: "industries",
          heading: "Green Chemicals Applications",
          intro:
            "Potential application areas. Feedstock origin alone does not prove environmental benefit or commercial suitability.",
          items: [
            {
              title: "Chemical Manufacturing",
              description:
                "Selected chemical production routes and process improvements based on verified technical requirements.",
            },
            {
              title: "Bio-Based Industries",
              description:
                "Potential processes using suitable renewable feedstocks where product and process specifications can be met.",
            },
            {
              title: "Specialty Chemicals",
              description:
                "Production and purification processes requiring tailored product composition and quality specifications.",
            },
          ],
        },
        {
          id: "technical-specifications",
          label: "Technical Specifications",
          type: "technical-specifications",
          heading: "Green Chemicals Process Design Parameters",
          intro:
            "Technical parameters must be established for the selected feedstock, conversion route and product.",
          items: [
            {
              name: "Feedstock specification",
              value: "Defined by composition, quality, availability and relevant impurities",
            },
            {
              name: "Product specification",
              value: "Purity and product properties set by intended application",
            },
            {
              name: "Conversion and selectivity",
              value: "Established from validated chemistry and process data",
            },
            {
              name: "Separation and recycle",
              value: "Defined by product quality, mixture properties and recovery objectives",
            },
            {
              name: "Energy and water requirements",
              value: "Quantified for the selected process configuration",
            },
            {
              name: "Residual streams",
              value: "Characterised and managed according to composition and applicable requirements",
            },
          ],
          note:
            "No yield, emissions, biodegradability or lifecycle benefit is asserted without route-specific evidence.",
        },
        {
          id: "process-flow",
          label: "Process Flow / How It Works",
          type: "process-flow",
          heading: "Green Chemical Process Development Workflow",
          intro:
            "A general workflow for screening and developing a chemical production route.",
          steps: [
            {
              title: "Define feed and product basis",
              description:
                "Specify feedstock quality, target product, required capacity and intended product use.",
              output: "Process requirements",
            },
            {
              title: "Screen conversion options",
              description:
                "Compare candidate process routes against chemistry, operating conditions and technical constraints.",
              output: "Preliminary route selection",
            },
            {
              title: "Integrate reaction and separation",
              description:
                "Define conversion, purification, recycle and recovery stages for the selected concept.",
              output: "Process configuration",
            },
            {
              title: "Assess resources and residuals",
              description:
                "Quantify material and energy flows and identify residual streams for appropriate handling.",
              output: "Preliminary process balance",
            },
          ],
          note:
            "The process sequence is illustrative. A project-specific flow diagram requires a selected technology and verified process information.",
        },
        {
          id: "lifecycle-support",
          label: "Lifecycle Support",
          type: "lifecycle-support",
          heading: "Green Chemicals Lifecycle Support",
          intro:
            "Support activities depend on process maturity, operating data and the agreed engineering scope.",
          items: [
            {
              title: "Process Performance Review",
              description:
                "Compare operating results against approved product and process requirements.",
            },
            {
              title: "Resource Use Review",
              description:
                "Track energy, water and material inputs against a consistent production basis.",
            },
            {
              title: "Feedstock or Product Change Assessment",
              description:
                "Assess how feedstock variability or changed product requirements affect conversion, purification and process operation.",
            },
          ],
        },
        {
          id: "performance-sustainability",
          label: "Performance & Sustainability",
          type: "performance-sustainability",
          heading: "Green Chemicals Performance Indicators",
          intro:
            "Environmental and resource indicators require reliable data, a defined functional unit and a transparent system boundary.",
          metrics: [
            {
              title: "Material Yield",
              description:
                "Quantify product output relative to the selected feed or reactant basis.",
              category: "Process",
            },
            {
              title: "Resource Intensity",
              description:
                "Evaluate energy, water and material inputs per unit of product.",
              category: "Resources",
            },
            {
              title: "Residual Stream Profile",
              description:
                "Characterise process residuals and track quantities relevant to the selected process boundary.",
              category: "Environment",
            },
          ],
          note:
            "The term 'green' is not itself evidence of lower lifecycle impact. Comparative claims require a defined baseline and substantiated assessment.",
        },
        {
          id: "standards-certifications",
          label: "Standards & Certifications",
          type: "standards-certifications",
          heading: "Green Chemicals Quality and Compliance",
          intro:
            "Applicable requirements depend on the chemical, product application, feedstock, process hazards and operating jurisdiction.",
          items: [
            {
              title: "Product Quality and Test Methods",
              description:
                "Define relevant product specifications, analytical methods and acceptance criteria.",
              reference: "Product-specific",
            },
            {
              title: "Process Safety and Equipment",
              description:
                "Identify applicable requirements for reaction systems, pressure equipment, chemicals handling and process protection.",
              reference: "To be confirmed per project",
            },
            {
              title: "Environmental and Lifecycle Claims",
              description:
                "Establish the methodology and evidence required for any published environmental or lifecycle statement.",
              reference: "Applicable methodology to be confirmed",
            },
          ],
          note:
            "No company certification, ecolabel or environmental performance claim is made by this illustrative section.",
        },
        {
          id: "downloads-resources",
          label: "Downloads & Technical Resources",
          type: "downloads-resources",
          heading: "Green Chemicals Resources",
          intro:
            "Approved process notes, technology briefs or public-facing documents can be added when available.",
          items: [],
          note:
            "No downloadable resources have been configured for this page yet.",
        },
        {
          id: "faqs",
          label: "FAQs",
          type: "faqs",
          heading: "Green Chemicals FAQs",
          intro:
            "General questions about green chemical process development.",
          items: [
            {
              question: "What makes a chemical process 'green'?",
              answer:
                "That assessment depends on defined criteria such as feedstock sourcing, energy and material inputs, emissions, residual streams, product function and lifecycle impacts. The label alone is not sufficient evidence.",
            },
            {
              question: "Can renewable feedstocks be used in every chemical process?",
              answer:
                "No. Suitability depends on feedstock composition and availability, reaction chemistry, product specifications, process economics and the required equipment.",
            },
            {
              question: "How can resource efficiency be evaluated?",
              answer:
                "Use measured or validated material, energy and water data with a defined production basis and system boundary, then compare against an appropriate baseline.",
            },
          ],
        },
      ],
    };

export default greenChemicals;
