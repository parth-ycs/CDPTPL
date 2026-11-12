import type { SBUChild } from "../types";

const ethanolDerivatives: SBUChild = {
      slug: "ethanol-derivatives",
      hero: {
        name: "Ethanol Derivatives",
        tagline: "Green Process Technologies",
        description:
          "Process development concepts for selected ethanol-derived chemicals, from feedstock assessment and reaction-route screening to purification and product recovery.",
        image: "/images/Hero_BG.png",
        imageAlt: "Ethanol derivatives process technology",
        ctaLabel: "Discuss a project",
        ctaHref: "#enquiry",
      },
      sections: [
        {
          id: "overview",
          label: "Overview",
          type: "overview",
          heading: "Ethanol Derivatives Process Technology",
          description:
            "Ethanol can serve as a feedstock for a range of chemical derivatives, depending on the selected conversion route and target product. Process development must consider feedstock quality, reaction chemistry, separation requirements, utilities, product specifications and the intended application.",
          kpis: [
            { value: "01", label: "Process route" },
            { value: "02", label: "Product quality" },
            { value: "03", label: "Resource efficiency" },
          ],
        },
        {
          id: "capabilities",
          label: "Capabilities",
          type: "capabilities",
          heading: "Ethanol Derivatives Engineering Capabilities",
          intro:
            "Representative process-development workstreams. The actual derivative routes and technology scope must be confirmed for each project.",
          items: [
            {
              title: "Feedstock and Product Assessment",
              description:
                "Review ethanol quality, availability, target derivative specification and downstream application requirements.",
            },
            {
              title: "Reaction Route Screening",
              description:
                "Compare candidate conversion routes against chemistry, catalyst or reagent requirements, operating conditions and by-product formation.",
            },
            {
              title: "Reaction and Separation Integration",
              description:
                "Coordinate reaction stages with purification, recycle, recovery and product finishing operations.",
            },
            {
              title: "Process Design Basis",
              description:
                "Develop preliminary material and energy balance assumptions for evaluating the selected process concept.",
            },
          ],
        },
        {
          id: "products",
          label: "Products",
          type: "products",
          heading: "Ethanol Derivative Process Systems",
          intro:
            "Illustrative process-system categories rather than a confirmed list of commercially available products.",
          items: [
            {
              id: "ethanol-derivatives-product-1",
              name: "Derivative Process Packages",
              category: "Process Technology",
              description:
                "Conceptual process packages for selected ethanol derivative routes, subject to process selection and project feasibility.",
              image: {
                src: "/images/Hero_BG.png",
                alt: "Ethanol derivative process package",
              },
              specs: [
                "Process route selected for the target derivative",
                "Capacity and product specification project-specific",
              ],
            },
            {
              id: "ethanol-derivatives-product-2",
              name: "Reaction and Separation Units",
              category: "Process Equipment",
              description:
                "Equipment groupings for reaction, purification, recycle and product recovery based on the selected chemistry.",
              image: {
                src: "/images/Hero_BG.png",
                alt: "Reaction and separation equipment",
              },
              specs: [
                "Equipment configuration depends on process chemistry",
                "Operating conditions established during engineering",
              ],
            },
            {
              id: "ethanol-derivatives-product-3",
              name: "Recovery Systems",
              category: "Process Systems",
              description:
                "Concepts for recovering suitable solvents, unreacted feed or other process materials where technically appropriate.",
              image: {
                src: "/images/Hero_BG.png",
                alt: "Industrial process recovery system",
              },
              specs: [
                "Recovery targets depend on process composition",
                "Recycle quality must meet process requirements",
              ],
            },
          ],
        },
        {
          id: "services",
          label: "Services",
          type: "services",
          heading: "Ethanol Derivatives Services",
          intro:
            "Representative technical services for assessing and developing derivative process concepts.",
          items: [
            {
              title: "Process Route Assessment",
              description:
                "Compare candidate routes against feedstock characteristics, product requirements, process complexity and operating constraints.",
            },
            {
              title: "Preliminary Process Design",
              description:
                "Develop a preliminary process configuration and material and energy balance assumptions for feasibility review.",
            },
            {
              title: "Reaction and Separation Integration",
              description:
                "Coordinate reaction, purification, recycle and recovery interfaces in the proposed process train.",
            },
            {
              title: "Product Specification Review",
              description:
                "Translate intended product use into relevant purity, composition and quality requirements for process evaluation.",
            },
          ],
        },
        {
          id: "industries",
          label: "Industries",
          type: "industries",
          heading: "Ethanol Derivative Applications",
          intro:
            "Potential application areas; specific derivative chemistry and commercial suitability must be verified.",
          items: [
            {
              title: "Bio-Based Chemicals",
              description:
                "Potential derivative routes using ethanol from suitable biological or other feedstock pathways.",
            },
            {
              title: "Chemical Manufacturing",
              description:
                "Process systems for producing selected chemical intermediates and derivative products.",
            },
            {
              title: "Specialty Materials",
              description:
                "Potential applications where the derivative's verified properties meet downstream material requirements.",
            },
          ],
        },
        {
          id: "technical-specifications",
          label: "Technical Specifications",
          type: "technical-specifications",
          heading: "Ethanol Derivative Process Design Basis",
          intro:
            "Specifications depend on the selected derivative, chemistry, process route and target product quality.",
          items: [
            {
              name: "Ethanol feed quality",
              value: "Established from composition, water content and relevant impurity limits",
            },
            {
              name: "Target derivative",
              value: "Defined by intended application and product specification",
            },
            {
              name: "Reaction conditions",
              value: "Selected from the validated chemistry and process design basis",
            },
            {
              name: "Separation and purification",
              value: "Defined by product quality, by-product profile and recycle requirements",
            },
            {
              name: "Material and energy balance",
              value: "Developed from process data and engineering calculations",
            },
            {
              name: "Utilities and waste streams",
              value: "Quantified during process design for the selected route",
            },
          ],
          note:
            "No specific yield, capacity, catalyst performance or environmental benefit is claimed without route-specific validated data.",
        },
        {
          id: "process-flow",
          label: "Process Flow / How It Works",
          type: "process-flow",
          heading: "Ethanol Derivative Process Development Workflow",
          intro:
            "A generic process-development sequence. Actual reaction and separation stages depend on the target derivative.",
          steps: [
            {
              title: "Qualify the feedstock",
              description:
                "Confirm ethanol composition, relevant impurities, availability and the design feed basis.",
              output: "Feedstock specification",
            },
            {
              title: "Select the conversion route",
              description:
                "Evaluate candidate chemistry and reaction conditions against product requirements and process constraints.",
              output: "Selected process concept",
            },
            {
              title: "Separate and purify",
              description:
                "Define the required downstream separation, product finishing and by-product handling stages.",
              output: "Product and residual streams",
            },
            {
              title: "Evaluate recycle and utilities",
              description:
                "Review recycle opportunities, material and energy balances, utility demand and waste streams.",
              output: "Preliminary process balance",
            },
          ],
          note:
            "This workflow is illustrative and does not represent a single universal ethanol-derivative process.",
        },
        {
          id: "lifecycle-support",
          label: "Lifecycle Support",
          type: "lifecycle-support",
          heading: "Ethanol Derivative Process Lifecycle Support",
          intro:
            "Support requirements depend on the selected chemistry, process maturity and project scope.",
          items: [
            {
              title: "Process Performance Review",
              description:
                "Compare available operating data with approved product specifications and process design assumptions.",
            },
            {
              title: "Recycle and Recovery Review",
              description:
                "Assess recycle stream quality and recovery performance where reliable process data are available.",
            },
            {
              title: "Process Change Assessment",
              description:
                "Evaluate feedstock or product specification changes against chemistry, equipment and downstream separation constraints.",
            },
          ],
        },
        {
          id: "performance-sustainability",
          label: "Performance & Sustainability",
          type: "performance-sustainability",
          heading: "Ethanol Derivative Performance Indicators",
          intro:
            "Resource and performance indicators should be calculated from validated process data and a defined system boundary.",
          metrics: [
            {
              title: "Product Yield",
              description:
                "Quantify product output relative to the agreed feed or reactant basis.",
              category: "Process",
            },
            {
              title: "Material Intensity",
              description:
                "Evaluate feedstock and auxiliary material consumption per unit of product.",
              category: "Resources",
            },
            {
              title: "Specific Energy Demand",
              description:
                "Assess process energy use per unit of product using a consistent accounting basis.",
              category: "Energy",
            },
          ],
          note:
            "Bio-based feedstock does not automatically establish a lower lifecycle impact; sustainability claims require a defined assessment boundary and evidence.",
        },
        {
          id: "standards-certifications",
          label: "Standards & Certifications",
          type: "standards-certifications",
          heading: "Ethanol Derivative Quality and Compliance",
          intro:
            "Requirements depend on product use, process chemistry, plant location and applicable regulations.",
          items: [
            {
              title: "Feedstock and Product Quality",
              description:
                "Define analytical methods and acceptance criteria relevant to the selected feedstock and derivative.",
              reference: "Product- and project-specific",
            },
            {
              title: "Process and Equipment Safety",
              description:
                "Identify applicable requirements for reaction hazards, flammable materials, pressure equipment and process controls.",
              reference: "To be confirmed per project",
            },
            {
              title: "Environmental and Waste Requirements",
              description:
                "Confirm applicable requirements for emissions, effluent and residual stream management.",
              reference: "Jurisdiction-specific",
            },
          ],
          note:
            "No company certification or product approval is claimed. Verify the applicable standards and required approvals before publication.",
        },
        {
          id: "downloads-resources",
          label: "Downloads & Technical Resources",
          type: "downloads-resources",
          heading: "Ethanol Derivatives Resources",
          intro:
            "Approved process brochures, product notes or technical documents can be listed when public-facing files are available.",
          items: [],
          note:
            "No downloadable resources have been configured for this page yet.",
        },
        {
          id: "faqs",
          label: "FAQs",
          type: "faqs",
          heading: "Ethanol Derivatives FAQs",
          intro:
            "General questions about evaluating ethanol-derived chemical processes.",
          items: [
            {
              question: "Which chemicals can be produced from ethanol?",
              answer:
                "Potential derivatives depend on the conversion chemistry and target product. A specific route should be selected only after reviewing the feedstock, product requirements, technical feasibility and relevant process data.",
            },
            {
              question: "What information is needed to evaluate a derivative process?",
              answer:
                "Useful inputs include ethanol quality, target product specification, desired capacity, available utilities, site constraints and any known process or product requirements.",
            },
            {
              question: "Can process sustainability be inferred from using ethanol?",
              answer:
                "No. Environmental performance depends on feedstock origin, conversion route, energy and material inputs, coproduct allocation and the assessment boundary.",
            },
          ],
        },
      ],
    };

export default ethanolDerivatives;
