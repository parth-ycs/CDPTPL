import type { ServiceHeroContent, ServiceSection, ServiceConfig } from "@/components/services/types";

export interface SBUChild { slug: string; hero: ServiceHeroContent; sections: ServiceSection[] }
export interface SBU { name: string; offerings: string; children: SBUChild[]; href: string }
export type ProductMock = { name: string; category: string; description: string };
export type ChildDefinition = {
  slug: string; name: string; tagline: string; description: string;
  products: ProductMock[];
  services: { title: string; description: string }[];
  industries: { title: string; description: string }[];
  kpis: { value: string; label: string }[];
  image?: string;
};

const specific: Record<string, { capabilities: {title:string;description:string}[]; specs:{name:string;value:string}[]; flow:{title:string;description:string;output?:string}[]; lifecycle:{title:string;description:string}[]; metrics:{title:string;description:string;category?:string}[]; faqs:{question:string;answer:string}[] }> = {
  "distillation-systems": {
    capabilities:[{title:"Separation basis",description:"Evaluate volatility differences, feed composition and target product purity."},{title:"Column configuration",description:"Assess trays or packing, reflux strategy and column arrangement."},{title:"Heat integration",description:"Review reboiler, condenser and potential heat-recovery interfaces."}],
    specs:[{name:"Feed composition",value:"Defined from process stream analysis"},{name:"Separation targets",value:"Product purity and recovery requirements to be specified"},{name:"Column internals",value:"Tray or packing selection depends on process and hydraulic design"},{name:"Thermal duties",value:"Established during process design"}],
    flow:[{title:"Feed conditioning",description:"Confirm feed composition, phase and operating conditions.",output:"Defined feed basis"},{title:"Vapour-liquid contact",description:"Contact rising vapour and descending liquid in the column.",output:"Component separation"},{title:"Product handling",description:"Manage overhead and bottoms streams.",output:"Separated products"},{title:"Control integration",description:"Coordinate reflux, heat duties and control interfaces.",output:"Integrated operation"}],
    lifecycle:[{title:"Performance review",description:"Compare operating data against separation targets."},{title:"Internals inspection",description:"Plan inspection of trays, packing and distribution components."},{title:"Thermal-system maintenance",description:"Review exchanger, reboiler and condenser maintenance needs."}],
    metrics:[{title:"Product recovery",description:"Track component recovery against the agreed process basis.",category:"Separation"},{title:"Specific energy demand",description:"Evaluate heat duties per unit of feed or product.",category:"Energy"}],
    faqs:[{question:"What determines distillation column design?",answer:"Feed composition, separation targets, throughput, pressure, thermal properties and allowable pressure drop affect design."},{question:"Can existing columns be assessed for debottlenecking?",answer:"An assessment can review operating data, hydraulics, internals and heat duties."}]
  },
  "evaporation-systems": {
    capabilities:[{title:"Concentration duty assessment",description:"Review feed properties, target concentration, fouling tendency and product sensitivity."},{title:"Evaporator configuration",description:"Evaluate single- or multi-effect arrangements and vapour recompression options."},{title:"Vapour and condensate handling",description:"Define interfaces for vapour separation, condensation and condensate recovery."}],
    specs:[{name:"Feed and product concentration",value:"Established from feed analysis and required final concentration"},{name:"Evaporation capacity",value:"Determined from mass and energy balances"},{name:"Heat source",value:"Selected according to process and utility conditions"},{name:"Fouling and cleaning",value:"Considered from fluid properties and cleaning requirements"}],
    flow:[{title:"Feed preparation",description:"Check feed quality and preheat where required.",output:"Conditioned feed"},{title:"Heat transfer",description:"Supply heat to vaporise part of the liquid.",output:"Vapour and concentrate"},{title:"Vapour separation",description:"Separate generated vapour from concentrated liquid.",output:"Separated streams"},{title:"Recovery",description:"Recover condensate where suitable and discharge concentrate.",output:"Product streams"}],
    lifecycle:[{title:"Thermal performance checks",description:"Compare heat-transfer performance with expected operating conditions."},{title:"Cleaning strategy",description:"Plan cleaning based on scaling, fouling and product characteristics."},{title:"Utility optimisation",description:"Review steam, cooling and condensate systems."}],
    metrics:[{title:"Steam economy",description:"Evaluate evaporation per unit of heating steam where applicable.",category:"Energy"},{title:"Concentrate quality",description:"Monitor final concentration and product-sensitive conditions.",category:"Product"}],
    faqs:[{question:"How is an evaporator selected?",answer:"Selection depends on feed properties, evaporation rate, product sensitivity, fouling behaviour, utilities and cleaning needs."},{question:"Can heat recovery be considered?",answer:"Heat recovery or vapour recompression can be evaluated when process conditions support it."}]
  },
  "columns-and-reactors": {
    capabilities:[{title:"Process and vessel basis",description:"Define reaction or contacting duty, operating envelope and design conditions."},{title:"Materials selection",description:"Evaluate compatibility against process fluids, temperature and corrosion considerations."},{title:"Mechanical interfaces",description:"Coordinate vessel geometry, internals, nozzles and instrumentation."}],
    specs:[{name:"Equipment duty",value:"Reaction, contacting or separation duty defined by process requirements"},{name:"Design pressure and temperature",value:"Set by process and mechanical design basis"},{name:"Materials of construction",value:"Selected after compatibility and corrosion review"},{name:"Applicable codes",value:"Confirmed for equipment type, location and project specification"}],
    flow:[{title:"Define operating envelope",description:"Confirm process duty and operating conditions.",output:"Design basis"},{title:"Select configuration",description:"Determine vessel arrangement, internals and instrumentation.",output:"Equipment concept"},{title:"Engineer interfaces",description:"Coordinate piping, utilities, controls and safety interfaces.",output:"Integrated design"},{title:"Inspect and hand over",description:"Compile inspection and equipment documentation.",output:"Equipment records"}],
    lifecycle:[{title:"Inspection planning",description:"Define inspection needs according to service and applicable requirements."},{title:"Internals and seals",description:"Review condition of internals, seals and connected equipment."},{title:"Modification assessment",description:"Evaluate changes against mechanical integrity and process requirements."}],
    metrics:[{title:"Operating stability",description:"Monitor conditions against the approved operating envelope.",category:"Operation"},{title:"Material integrity",description:"Use inspection and maintenance records to assess equipment condition.",category:"Integrity"}],
    faqs:[{question:"What information is needed to specify a reactor or column?",answer:"Process duty, fluid properties, throughput, operating conditions, materials and applicable codes are key inputs."},{question:"Are code requirements the same for every project?",answer:"No. They depend on equipment type, service conditions, jurisdiction and project specification."}]
  }
};

function getSpecific(d: ChildDefinition) {
  if (specific[d.slug]) return specific[d.slug];
  const n = d.name.toLowerCase();
  const water = /water|uf-mbr|reuse|recycling|wastewater/.test(d.slug + " " + n);
  const hydrogen = /hydrogen|electrolyzer/.test(d.slug + " " + n);
  const green = /green|ethanol|co2|carbon/.test(d.slug + " " + n);
  const membrane = /membrane|gas-separation|pervaporation/.test(d.slug + " " + n);
  const plant = /plant|modular|project-execution/.test(d.slug + " " + n);
  const capabilities = water
    ? [{title:"Feed and water-quality assessment",description:"Review influent quality, target water quality, variability and site constraints."},{title:"Treatment train selection",description:"Evaluate suitable treatment stages against the required reuse or discharge objective."},{title:"Reuse integration",description:"Coordinate treated-water storage, distribution and plant interfaces."}]
    : hydrogen
    ? [{title:"System configuration",description:"Define supply, conditioning and balance-of-plant interfaces for the application."},{title:"Utilities and controls",description:"Coordinate electrical, water, cooling, instrumentation and control requirements."},{title:"Safety interface review",description:"Identify project-specific process safety and hazardous-area requirements for engineering review."}]
    : green
    ? [{title:"Process-route screening",description:"Compare candidate routes against feedstock, product, utility and operating constraints."},{title:"Reaction and separation integration",description:"Coordinate conversion, purification and recovery stages."},{title:"Resource-efficiency assessment",description:"Review energy, water and material flows without assuming unverified savings."}]
    : membrane
    ? [{title:"Feed characterisation",description:"Review composition, contaminants, flow and operating conditions."},{title:"Membrane suitability",description:"Assess separation objective, compatibility and pretreatment requirements."},{title:"System integration",description:"Coordinate pretreatment, membrane stages and permeate or product handling."}]
    : plant
    ? [{title:"Engineering coordination",description:"Coordinate process, mechanical, electrical, instrumentation and layout interfaces."},{title:"Package and interface definition",description:"Define equipment boundaries, utilities, deliverables and site interfaces."},{title:"Project delivery planning",description:"Structure engineering deliverables and execution activities around the agreed scope."}]
    : [{title:"Process assessment",description:`Review process objectives, feed characteristics, operating conditions and required outputs for ${d.name.toLowerCase()}.`},{title:"Equipment and system selection",description:"Evaluate suitable configurations against the process design basis and site constraints."},{title:"Process integration",description:"Define interfaces with utilities, controls and adjacent plant operations."}];
  const specs = water
    ? [{name:"Influent quality",value:"Established from representative water analysis"},{name:"Treated-water target",value:"Defined by reuse, discharge or downstream process requirements"},{name:"Recovery and reject streams",value:"Determined from feed quality and selected treatment stages"},{name:"Cleaning and consumables",value:"Set according to membrane or treatment technology"}]
    : hydrogen
    ? [{name:"Hydrogen production or supply rate",value:"To be specified for the project"},{name:"Purity and pressure",value:"Defined by downstream user requirements"},{name:"Utilities",value:"Electrical, water, cooling and gas handling requirements to be confirmed"},{name:"Safety requirements",value:"Confirmed through project-specific hazard and code review"}]
    : green
    ? [{name:"Feedstock specification",value:"Defined from composition, quality and availability"},{name:"Product specification",value:"Purity and product properties defined by intended application"},{name:"Process yield",value:"Established through validated process data or engineering studies"},{name:"Utilities and waste streams",value:"Quantified during process design"}]
    : membrane
    ? [{name:"Feed composition",value:"Established from gas or liquid stream analysis"},{name:"Separation target",value:"Defined by required purity, recovery or permeate quality"},{name:"Operating conditions",value:"Pressure, temperature and flow confirmed during design"},{name:"Pretreatment",value:"Selected according to contaminants and membrane compatibility"}]
    : plant
    ? [{name:"Project scope",value:"Defined by battery limits, deliverables and responsibilities"},{name:"Design basis",value:"Established from process requirements and site data"},{name:"Utilities and interfaces",value:"Documented in project interface and utility registers"},{name:"Deliverables",value:"Agreed during project planning and engineering"}]
    : [{name:"Design basis",value:"Defined from feed characteristics and required output"},{name:"Capacity and throughput",value:"To be confirmed for the specific application"},{name:"Operating conditions",value:"Temperature, pressure and flow to be confirmed during engineering"},{name:"Materials and utilities",value:"Selected according to service conditions and project requirements"}];
  const flow = water
    ? [{title:"Characterise the feed",description:"Establish influent quality, flow variation and target treated-water quality.",output:"Water-quality basis"},{title:"Select treatment stages",description:"Define pretreatment and primary treatment stages suitable for the feed.",output:"Treatment train"},{title:"Separate and polish",description:"Apply the selected membrane or polishing stages.",output:"Treated water and residual streams"},{title:"Reuse or discharge",description:"Verify treated-water quality against the agreed destination.",output:"Defined outlet streams"}]
    : hydrogen
    ? [{title:"Define demand",description:"Confirm hydrogen rate, purity, pressure and operating profile.",output:"Supply basis"},{title:"Condition inputs",description:"Provide required water, power and utility interfaces where applicable.",output:"Prepared utilities"},{title:"Produce or condition hydrogen",description:"Integrate the selected production or conditioning technology.",output:"Hydrogen stream"},{title:"Verify and deliver",description:"Check agreed product conditions and downstream interfaces.",output:"Ready-for-use supply"}]
    : green
    ? [{title:"Qualify feedstock",description:"Confirm feed composition, quality and availability.",output:"Feed basis"},{title:"Convert feed",description:"Apply the selected reaction or conversion route.",output:"Intermediate stream"},{title:"Separate and purify",description:"Recover the target product and manage side streams.",output:"Product and residual streams"},{title:"Review resource flows",description:"Assess utilities, recycle streams and waste handling.",output:"Process balance"}]
    : membrane
    ? [{title:"Pretreat feed",description:"Condition the stream to protect the separation stage.",output:"Prepared feed"},{title:"Apply membrane separation",description:"Pass the feed through the selected membrane configuration.",output:"Permeate and retentate streams"},{title:"Handle product streams",description:"Condition and route separated streams as required.",output:"Separated products"},{title:"Monitor performance",description:"Review flux, selectivity and operating stability.",output:"Performance record"}]
    : plant
    ? [{title:"Define scope and basis",description:"Confirm project requirements, site data and deliverables.",output:"Project design basis"},{title:"Develop engineering",description:"Coordinate process and discipline-level engineering.",output:"Engineering deliverables"},{title:"Integrate and execute",description:"Coordinate procurement, packages and site interfaces as contracted.",output:"Integrated project scope"},{title:"Verify and hand over",description:"Complete agreed checks and handover documentation.",output:"Closeout records"}]
    : [{title:"Define requirements",description:"Capture process objectives, feed properties, capacity and operating constraints.",output:"Design basis"},{title:"Develop process concept",description:"Evaluate options and identify principal equipment and operating stages.",output:"Preliminary configuration"},{title:"Engineer the system",description:"Coordinate equipment, utilities, controls and interfaces.",output:"Engineering package"},{title:"Validate and hand over",description:"Complete agreed checks and compile project documentation.",output:"Handover records"}];
  const lifecycle = [
    {title:"Engineering documentation",description:"Provide agreed drawings, equipment records and technical documentation."},
    {title:water ? "Cleaning and consumables" : hydrogen ? "Inspection and safety review" : "Maintenance planning",description:water ? "Plan membrane cleaning, replacement and consumables according to operating conditions." : hydrogen ? "Plan inspections and reviews according to equipment and site requirements." : "Identify inspection, maintenance and spare-parts requirements for selected equipment."},
    {title:"Troubleshooting and optimisation",description:"Review operating data and assess potential adjustments within the approved design basis."}
  ];
  const metrics = water || green || hydrogen
    ? [{title:water ? "Water recovery" : green ? "Material yield" : "Specific energy demand",description:water ? "Track recovery against feed quality and agreed treatment targets." : green ? "Quantify product yield using validated process data." : "Assess energy use per unit of hydrogen produced or conditioned.",category:water ? "Water" : green ? "Recovery" : "Energy"},{title:water ? "Treated-water quality" : green ? "Resource intensity" : "Product quality",description:water ? "Monitor key quality parameters against the agreed reuse specification." : green ? "Evaluate energy, water and material inputs per unit of product." : "Verify purity and delivery conditions against user requirements.",category:"Performance"}]
    : [];
  const faqs = [
    {question:`What information is needed to discuss ${d.name.toLowerCase()}?`,answer:"Useful inputs include the process objective, feed composition or quality, target capacity, operating conditions, utilities and site constraints."},
    {question:"Can the configuration be customised?",answer:"Options can be evaluated against process requirements, operating conditions, plant interfaces and the approved project scope."},
    {question:"How are technical specifications confirmed?",answer:"Final specifications are established during engineering review and recorded in approved technical documentation."}
  ];
  return {capabilities,specs,flow,lifecycle,metrics,faqs};
}

export function createChild(d: ChildDefinition): SBUChild {
  const p = getSpecific(d);
  const sections: ServiceSection[] = [
    {id:"overview",label:"Overview",type:"overview",heading:`${d.name}: Engineered Process Solutions`,description:d.description,kpis:d.kpis},
    {id:"capabilities",label:"Capabilities",type:"capabilities",heading:`Engineering Capabilities for ${d.name}`,intro:`Technical areas that may be relevant to ${d.name}; confirm final scope against approved company capabilities.`,items:p.capabilities},
    {id:"products",label:"Products",type:"products",heading:`${d.name} Products & Equipment`,intro:`Representative equipment and solution categories for ${d.name.toLowerCase()}. Replace mock entries with approved product information.`,items:d.products.map((x,i)=>({id:`${d.slug}-product-${i+1}`,name:x.name,category:x.category,description:x.description,image:{src:"/images/Hero_BG.png",alt:x.name},specs:["Configured for project requirements","Industrial process applications"]}))},
    {id:"services",label:"Services",type:"services",heading:`${d.name} Services`,intro:`Representative engineering and project support activities associated with ${d.name.toLowerCase()}.`,items:d.services},
    {id:"industries",label:"Industries",type:"industries",heading:`Industries Served by ${d.name}`,intro:"Example application areas; confirm relevance against actual company capabilities before publishing.",items:d.industries},
    {id:"technical-specifications",label:"Technical Specifications",type:"technical-specifications",heading:`${d.name} Technical Specifications`,intro:"Final parameters depend on process data, site conditions and the approved project specification.",items:p.specs,note:"Illustrative specification fields only. Replace with verified engineering values before publication."},
    {id:"process-flow",label:"Process Flow / How It Works",type:"process-flow",heading:`How ${d.name} Works`,intro:"A high-level workflow. Actual stages depend on the selected technology and application.",steps:p.flow,note:"Use a verified process diagram where a detailed process flow is available."},
    {id:"lifecycle-support",label:"Lifecycle Support",type:"lifecycle-support",heading:`Lifecycle Support for ${d.name}`,intro:"Support activities depend on contract scope, equipment and site requirements.",items:p.lifecycle},
  ];
  if (p.metrics.length) sections.push({id:"performance-sustainability",label:"Performance & Sustainability",type:"performance-sustainability",heading:"Performance & Resource Efficiency",intro:"Use measured or validated data for published performance claims.",metrics:p.metrics,note:"No numerical savings or performance guarantees are implied."});
  sections.push({
    id:"standards-certifications", label:"Standards & Certifications", type:"standards-certifications",
    heading:"Standards, Quality & Compliance",
    intro:"Applicable codes, standards and documentation must be confirmed for each project and jurisdiction.",
    items:[
      {title:"Applicable design codes",description:"Select requirements according to equipment type, service conditions and the approved project specification.",reference:"To be confirmed per project"},
      {title:"Inspection and testing",description:"Inspection, testing and traceability records are defined by the approved project quality plan.",reference:"Project-specific"},
    ],
    note:"No company certification is claimed. Add certification names or logos only after verifying current certificates and their scope.",
  });
  sections.push({
    id:"downloads-resources", label:"Downloads & Technical Resources", type:"downloads-resources",
    heading:"Technical Resources",
    intro:"Approved public-facing documents can be listed here when files and URLs are available.",
    items:[],
    note:"No downloadable resources have been configured for this page yet.",
  });
  sections.push({id:"faqs",label:"FAQs",type:"faqs",heading:`Frequently Asked Questions About ${d.name}`,intro:"General questions to support an initial technical discussion.",items:p.faqs});
  // Add these sections only when approved content exists; this avoids empty certification claims and broken downloads.
  return {
    slug:d.slug,
    hero:{name:d.name,tagline:d.tagline,description:d.description,image:d.image ?? "/images/Hero_BG.png",imageAlt:d.name,ctaLabel:"Discuss a project",ctaHref:"#enquiry"},
    sections,
  };
}
export function serviceHref(slug: string) { return `/services/${slug}`; }
export type { ServiceConfig };
