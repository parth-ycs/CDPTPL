import type { SBUChild } from "../types";

const co2Utilisation: SBUChild = {
      slug: "co2-utilisation",
      hero: {
        name: "CO₂ Utilisation",
        tagline: "Green Process Technologies",
        description:
          "Process concepts for using carbon dioxide as a feedstock or process input, with conditioning and conversion pathways selected around gas quality, target products and project feasibility.",
        image: "/images/Hero_BG.png",
        imageAlt: "Carbon dioxide utilisation process technology",
        ctaLabel: "Discuss a project",
        ctaHref: "#enquiry",
      },
      sections: [
        {
          id: "overview",
          label: "Overview",
          type: "overview",
          heading: "CO₂ Utilisation Process Technology",
          description:
            "CO₂ utilisation covers pathways that incorporate carbon dioxide into products or use it as a process input. Feasibility depends on gas composition, contaminants, conversion chemistry, energy and hydrogen availability where relevant, product markets and the intended carbon accounting boundary.",
          kpis: [
            { value: "01", label: "Feedstock assessment" },
            { value: "02", label: "Process integration" },
            { value: "03", label: "Carbon utilisation" },
          ],
        },
        {
          id: "capabilities",
          label: "Capabilities",
          type: "capabilities",
          heading: "CO₂ Utilisation Engineering Capabilities",
          intro:
            "Representative engineering activities for assessing carbon dioxide feed streams and potential utilisation routes.",
          items: [
            {
              title: "CO₂ Feed Characterisation",
              description:
                "Review gas composition, contaminant levels, pressure, flow variability and required feed conditioning.",
            },
            {
              title: "Conversion Route Screening",
              description:
                "Evaluate candidate pathways against target products, reaction requirements, available utilities and process constraints.",
            },
            {
              title: "Capture-to-Conversion Interfaces",
              description:
                "Assess interfaces between an upstream CO₂ source or capture process and the downstream utilisation system.",
            },
            {
              title: "Product Recovery and Process Integration",
              description:
                "Coordinate conversion, separation, recycle, product finishing and residual stream handling.",
            },
          ],
        },
        {
          id: "products",
          label: "Products",
          type: "products",
          heading: "CO₂ Utilisation Process Systems",
          intro:
            "Illustrative system categories. The feasible technology depends on the selected conversion pathway and project conditions.",
          items: [
            {
              id: "co2-utilisation-product-1",
              name: "CO₂ Conditioning Systems",
              category: "Gas Processing",
              description:
                "Concepts for purifying, compressing or conditioning CO₂ streams to meet downstream process requirements.",
              image: {
                src: "/images/Hero_BG.png",
                alt: "Carbon dioxide conditioning system",
              },
              specs: [
                "Feed composition and contaminant limits must be established",
                "Pressure and flow conditions are route-specific",
              ],
            },
            {
              id: "co2-utilisation-product-2",
              name: "Conversion Process Packages",
              category: "Process Technology",
              description:
                "Conceptual process packages for selected CO₂ conversion routes, subject to technical and commercial feasibility.",
              image: {
                src: "/images/Hero_BG.png",
                alt: "CO2 conversion process package",
              },
              specs: [
                "Conversion route depends on target product",
                "Reactants, catalysts and operating conditions route-specific",
              ],
            },
            {
              id: "co2-utilisation-product-3",
              name: "Gas Handling Equipment",
              category: "Process Equipment",
              description:
                "Equipment concepts for transferring and managing process gas streams within the defined operating envelope.",
              image: {
                src: "/images/Hero_BG.png",
                alt: "Industrial gas handling equipment",
              },
              specs: [
                "Equipment sizing based on gas properties and flow",
                "Materials and safeguards depend on service conditions",
              ],
            },
          ],
        },
        {
          id: "services",
          label: "Services",
          type: "services",
          heading: "CO₂ Utilisation Services",
          intro:
            "Representative technical services for evaluating CO₂ feed streams and utilisation concepts.",
          items: [
            {
              title: "Feed Gas Assessment",
              description:
                "Review gas composition, contaminants, pressure, flow and variability against potential downstream requirements.",
            },
            {
              title: "Utilisation Route Screening",
              description:
                "Compare candidate pathways based on target product, conversion requirements, utilities and process constraints.",
            },
            {
              title: "Process Integration",
              description:
                "Evaluate interfaces with upstream capture or supply systems and downstream conversion and product recovery.",
            },
            {
              title: "Concept Engineering",
              description:
                "Develop preliminary process configurations and key design assumptions for further technical evaluation.",
            },
          ],
        },
        {
          id: "industries",
          label: "Industries",
          type: "industries",
          heading: "CO₂ Utilisation Applications",
          intro:
            "Potential application areas; the feasibility and carbon benefit of each route require case-specific assessment.",
          items: [
            {
              title: "Industrial Gas Processing",
              description:
                "Conditioning and handling of suitable CO₂-rich gas streams for defined downstream uses.",
            },
            {
              title: "Chemical Production",
              description:
                "Potential conversion pathways where the chemistry, product requirements and process economics are appropriate.",
            },
            {
              title: "Low-Carbon Process Projects",
              description:
                "Projects assessing carbon utilisation as one element of a wider emissions-reduction strategy.",
            },
          ],
        },
        {
          id: "technical-specifications",
          label: "Technical Specifications",
          type: "technical-specifications",
          heading: "CO₂ Utilisation Design Parameters",
          intro:
            "The design basis depends on the source gas and the selected utilisation pathway.",
          items: [
            {
              name: "CO₂ concentration and purity",
              value: "Established from feed gas analysis and downstream process requirements",
            },
            {
              name: "Contaminant profile",
              value: "Defined by source stream and conversion technology tolerance",
            },
            {
              name: "Feed pressure and flow",
              value: "Set by source conditions, conditioning requirements and process demand",
            },
            {
              name: "Conversion route",
              value: "Selected according to target product and validated process feasibility",
            },
            {
              name: "Additional reactants and utilities",
              value: "Quantified for the chosen route, including hydrogen where required",
            },
            {
              name: "Product and residual streams",
              value: "Specified according to product quality and applicable waste handling requirements",
            },
          ],
          note:
            "No capture rate, conversion efficiency or carbon reduction is implied without route-specific process data and a defined system boundary.",
        },
        {
          id: "process-flow",
          label: "Process Flow / How It Works",
          type: "process-flow",
          heading: "CO₂ Utilisation Process Workflow",
          intro:
            "A generic workflow for evaluating and integrating a CO₂ utilisation route. Conversion stages vary significantly by technology.",
          steps: [
            {
              title: "Characterise the CO₂ source",
              description:
                "Establish gas composition, contaminant profile, pressure, flow and variability.",
              output: "Feed gas basis",
            },
            {
              title: "Condition the feed",
              description:
                "Define required purification, compression, drying or other conditioning stages for the selected route.",
              output: "Conditioned CO₂ stream",
            },
            {
              title: "Apply the selected conversion pathway",
              description:
                "Integrate the relevant reaction or utilisation process using the required reactants and operating conditions.",
              output: "Conversion stream",
            },
            {
              title: "Recover products and assess streams",
              description:
                "Separate products, manage residual streams and evaluate material, energy and carbon-accounting boundaries.",
              output: "Product and process balance",
            },
          ],
          note:
            "This sequence is illustrative and is not a claim that all CO₂ utilisation technologies use the same process stages.",
        },
        {
          id: "lifecycle-support",
          label: "Lifecycle Support",
          type: "lifecycle-support",
          heading: "CO₂ Utilisation Lifecycle Support",
          intro:
            "Support activities depend on the chosen process route and the quality of available operating data.",
          items: [
            {
              title: "Feed Quality Monitoring",
              description:
                "Review source-gas variability and its impact on conditioning requirements and downstream process stability.",
            },
            {
              title: "Conversion and Recovery Review",
              description:
                "Compare operating results with the approved process basis using validated flow and composition data.",
            },
            {
              title: "Process Integration Changes",
              description:
                "Assess changes in source conditions, reactant supply or product requirements against equipment and process constraints.",
            },
          ],
        },
        {
          id: "performance-sustainability",
          label: "Performance & Sustainability",
          type: "performance-sustainability",
          heading: "CO₂ Utilisation Performance Indicators",
          intro:
            "Carbon and process indicators must use verified measurements, a consistent accounting boundary and an appropriate baseline.",
          metrics: [
            {
              title: "CO₂ Conversion or Incorporation",
              description:
                "Quantify the amount of CO₂ converted or incorporated into products using a defined measurement basis.",
              category: "Carbon",
            },
            {
              title: "Product Yield",
              description:
                "Track product output against the agreed feed and reactant basis.",
              category: "Process",
            },
            {
              title: "Energy and Reactant Demand",
              description:
                "Assess energy and additional reactant inputs per unit of product.",
              category: "Resources",
            },
          ],
          note:
            "CO₂ utilisation does not automatically mean permanent carbon storage or net emissions reduction. Claims require lifecycle and system-boundary assessment.",
        },
        {
          id: "standards-certifications",
          label: "Standards & Certifications",
          type: "standards-certifications",
          heading: "CO₂ Utilisation Quality and Compliance",
          intro:
            "Applicable requirements depend on gas source, pressure, process route, product, site and jurisdiction.",
          items: [
            {
              title: "Gas Quality and Equipment Requirements",
              description:
                "Establish gas composition limits and applicable design requirements for conditioning and process equipment.",
              reference: "Route- and project-specific",
            },
            {
              title: "Process Safety",
              description:
                "Review pressure systems, asphyxiation risks, reactants and route-specific hazards through the relevant safety process.",
              reference: "To be confirmed per project",
            },
            {
              title: "Carbon Accounting and Environmental Claims",
              description:
                "Define the evidence, boundary and methodology needed for any published carbon or lifecycle claim.",
              reference: "Applicable methodology to be confirmed",
            },
          ],
          note:
            "No company certification, carbon credit eligibility or emissions reduction is claimed by this illustrative content.",
        },
        {
          id: "downloads-resources",
          label: "Downloads & Technical Resources",
          type: "downloads-resources",
          heading: "CO₂ Utilisation Resources",
          intro:
            "Approved technology briefs, process notes or public-facing technical documents can be listed when available.",
          items: [],
          note:
            "No downloadable resources have been configured for this page yet.",
        },
        {
          id: "faqs",
          label: "FAQs",
          type: "faqs",
          heading: "CO₂ Utilisation FAQs",
          intro:
            "General questions about carbon dioxide utilisation concepts.",
          items: [
            {
              question: "What determines whether a CO₂ utilisation route is feasible?",
              answer:
                "Feasibility depends on gas quality, conversion chemistry, reactant and utility availability, target product requirements, process integration, economics and relevant regulatory conditions.",
            },
            {
              question: "Does using CO₂ automatically reduce emissions?",
              answer:
                "No. The result depends on the CO₂ source, energy and reactants used, product lifetime, displaced alternatives and the lifecycle assessment boundary.",
            },
            {
              question: "Can any CO₂-rich gas stream be used directly?",
              answer:
                "Not necessarily. Contaminants, concentration, pressure and flow may require conditioning, and the acceptable limits depend on the selected process.",
            },
          ],
        },
      ],
    };

export default co2Utilisation;
