import type {
  ServiceHeroContent,
  ServiceSection,
} from "@/components/solutions/types";

export interface SBUChild {
  slug: string;
  hero: ServiceHeroContent;
  sections: ServiceSection[];
}

export interface SBU {
  name: string;
  offerings: string;
  children: SBUChild[];
  href: string;
}

const greenProcessTechnologies: Omit<SBU, "href"> = {
  name: "Green Process Technologies",
  offerings:
    "Ethanol derivatives, CO₂ utilisation, green chemicals and process technology development.",
  children: [
    {
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
    },
    {
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
    },
    {
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
    },
  ],
};

export default greenProcessTechnologies;
