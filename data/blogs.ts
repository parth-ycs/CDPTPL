
export type BlogContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "quote";
      text: string;
      attribution?: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    };

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
  imageAlt: string;
  overview: {
    heading: {
      before: string;
      highlight?: string;
      after: string;
    };
    description: string;
  };
  content: BlogContentBlock[];
}

export const blogsPageData = {
  hero: {
    heading: "Blogs",
    eyebrow: "INSIGHTS & PERSPECTIVES",
    description:
      "Explore our latest perspectives, research insights and developments across chemical engineering, catalysis and industrial innovation.",
    image: "/images/blogs/blogs-hero.png",
    imageAlt: "Chemdist Group insights and research",
  },

  overview: {
    heading: {
      before: "Ideas, research and",
      highlight: "perspectives",
      after: "that move industries forward.",
    },
    description:
      "Discover insights from our work in research, technology and industrial development. Explore ideas, technical perspectives and developments shaping the future of chemical engineering.",
  },

  section: {
    heading: "Latest Articles",
    description: "Explore our latest articles and updates.",
    emptyMessage: "New articles are coming soon. Stay tuned for updates.",
    allCategoriesLabel: "All",
    readMoreLabel: "Read Article",
  },

  detail: {
    backLabel: "Back to all articles",
    relatedHeading: "More Insights",
    relatedDescription: "Explore more articles from Chemdist Group.",
  },

  blogs: [
    // 01 — Distillation Columns
    {
      id: "distillation-columns",
      title:
        "Distillation Columns: The Backbone of Efficient Separation Processes",
      excerpt:
        "Explore why distillation remains fundamental to chemical, petrochemical and pharmaceutical industries, and how process optimization improves separation efficiency, energy utilization and plant economics.",
      category: "Process Technology",
      author: "Chemdist Group",
      publishedAt: "2026-07-24",
      readTime: "5 min read",
      image: "/images/blogs/distillation-columns.png",
      imageAlt: "Industrial distillation column installation",

      overview: {
        heading: {
          before: "Engineering better",
          highlight: "separation",
          after: "for efficient industries.",
        },
        description:
          "Distillation continues to be one of the most important separation technologies in process industries. Its performance directly influences product quality, production capacity, energy consumption and overall plant economics.",
      },

      content: [
        {
          type: "paragraph",
          text:
            "In the process industries, few technologies have remained as fundamental and indispensable as the distillation column. Despite advancements in process intensification, membrane systems and alternative separation technologies, distillation continues to be the preferred solution for a wide range of chemical, petrochemical, pharmaceutical and specialty chemical applications.",
        },
        {
          type: "paragraph",
          text:
            "Its importance lies not only in its ability to separate components but also in its direct impact on product quality, throughput, energy consumption and overall plant economics.",
        },
        {
          type: "heading",
          text: "The Importance of Process Optimization",
        },
        {
          type: "paragraph",
          text:
            "For many facilities, distillation represents one of the most energy-intensive operations within the process chain. As production demands increase and sustainability targets become more stringent, the focus has shifted from simply operating distillation columns to optimizing their performance.",
        },
        {
          type: "paragraph",
          text:
            "A well-engineered distillation system is the result of multiple design considerations working together. Feed characteristics, operating pressure, vapor-liquid equilibrium, tray or packing selection, hydraulic design and heat integration strategies all influence separation efficiency.",
        },
        {
          type: "paragraph",
          text:
            "Even minor improvements in these areas can significantly affect operating costs over the lifecycle of the plant.",
        },
        {
          type: "heading",
          text: "Designing for Scalability and Reliability",
        },
        {
          type: "paragraph",
          text:
            "Another critical consideration is scalability. As industries expand production capacity, distillation systems must be designed to accommodate future requirements without compromising performance. This requires a careful balance between capital investment, operational flexibility and long-term process reliability.",
        },
        {
          type: "paragraph",
          text:
            "Modern distillation projects are therefore no longer viewed as standalone equipment purchases. They are evaluated as integrated process solutions where engineering decisions influence everything from energy utilization and maintenance requirements to product recovery and plant uptime.",
        },
        {
          type: "heading",
          text: "Unlocking Value from Existing Systems",
        },
        {
          type: "paragraph",
          text:
            "Many organizations are revisiting existing distillation assets to unlock hidden value. Through debottlenecking studies, internal modifications, process optimization and improved heat recovery strategies, plants can often achieve meaningful capacity and efficiency improvements without major infrastructure expansion.",
        },
        {
          type: "heading",
          text: "The Chemdist Approach",
        },
        {
          type: "paragraph",
          text:
            "As process industries continue to pursue greater operational efficiency, distillation technology remains a key enabler of productivity and profitability. The challenge is no longer understanding the importance of distillation—it is ensuring that systems are engineered to deliver maximum performance throughout their operational life.",
        },
        {
          type: "paragraph",
          text:
            "At Chemdist, we approach distillation as a complete process engineering challenge rather than simply an equipment requirement. By combining process expertise, design capabilities, manufacturing excellence and execution support, we help industries develop distillation solutions that align with both technical objectives and long-term business goals.",
        },
      ],
    },

    // 02 — Green Hydrogen
    {
      id: "green-hydrogen-beyond-electrolysis",
      title:
        "Green Hydrogen Beyond Electrolysis: Integrating Chemistry for a Low Carbon Future",
      excerpt:
        "Green hydrogen has a role beyond renewable-powered electrolysis. Discover how integrated chemical processes, biomass conversion and carbon utilization can contribute to a more sustainable hydrogen economy.",
      category: "Green Technology",
      author: "Chemdist Group",
      publishedAt: "2026-07-07",
      readTime: "7 min read",
      image: "/images/blogs/green-hydrogen.png",
      imageAlt: "Green hydrogen and sustainable chemical processing",

      overview: {
        heading: {
          before: "Rethinking hydrogen through",
          highlight: "integrated chemistry",
          after: "and process innovation.",
        },
        description:
          "The future hydrogen economy will depend on more than renewable electricity and electrolyzers. Integrating hydrogen generation, recovery and utilization into chemical manufacturing can open new pathways for industrial decarbonization.",
      },

      content: [
        {
          type: "paragraph",
          text:
            "The global discussion around green hydrogen has accelerated dramatically. Governments, energy companies and technology developers are investing in hydrogen as a pathway to decarbonize industries that are otherwise difficult to electrify.",
        },
        {
          type: "paragraph",
          text:
            "Most discussions focus on producing hydrogen through water electrolysis powered by renewable energy. Electrolysis will undoubtedly play a critical role in the future hydrogen economy. However, the hydrogen transition cannot be viewed only through the lens of electricity and electrolyzers.",
        },
        {
          type: "paragraph",
          text:
            "For the chemical industry, hydrogen must be understood within a broader context of integrated chemical processes where it can be generated, recovered, transported and utilized through different production pathways.",
        },
        {
          type: "heading",
          text: "The Expanding Role of Hydrogen in the Chemical Industry",
        },
        {
          type: "paragraph",
          text:
            "Hydrogen is already widely used in refining, fertilizer production, petrochemicals and numerous hydrogenation reactions. Traditionally, much industrial hydrogen is produced through steam methane reforming or coal gasification. While these technologies are mature, they are associated with significant carbon emissions.",
        },
        {
          type: "paragraph",
          text:
            "Green hydrogen, produced using renewable energy, offers an alternative. Equally important is the ability to integrate hydrogen generation within chemical production routes so that hydrogen and valuable chemicals can be produced together.",
        },
        {
          type: "heading",
          text: "Hydrogen Generation Through Chemical Pathways",
        },
        {
          type: "paragraph",
          text:
            "Several chemical processes can generate hydrogen as a co-product while producing valuable chemicals. One example is ethanol dehydrogenation, in which ethanol is converted into ethyl acetate through a catalytic pathway and hydrogen is released as a byproduct.",
        },
        {
          type: "paragraph",
          text:
            "When ethanol feedstock is derived from biomass fermentation, the resulting hydrogen can form part of a renewable production pathway. Such processes create opportunities to produce both chemicals and hydrogen within the same facility.",
        },
        {
          type: "heading",
          text: "Ammonia as a Hydrogen Carrier",
        },
        {
          type: "paragraph",
          text:
            "Hydrogen storage and transportation remain significant challenges. Hydrogen has a low volumetric energy density and requires compression or liquefaction for large-scale transport.",
        },
        {
          type: "paragraph",
          text:
            "Ammonia has emerged as a promising hydrogen carrier. It contains a high hydrogen content and can be stored and transported using established infrastructure. At the destination, ammonia can be decomposed through catalytic cracking to produce hydrogen and nitrogen.",
        },
        {
          type: "heading",
          text: "Biomass Conversion and Hydrogen-Rich Streams",
        },
        {
          type: "paragraph",
          text:
            "Biomass conversion technologies offer another pathway for generating hydrogen-rich streams. Biomass can be thermochemically converted into syngas through gasification. Syngas typically contains hydrogen, carbon monoxide, carbon dioxide and smaller quantities of other gases.",
        },
        {
          type: "paragraph",
          text:
            "Further processing through shift reactions and purification can produce hydrogen. Biomass conversion can also produce valuable products such as bio-oil and biochar, creating opportunities for integrated biorefineries.",
        },
        {
          type: "heading",
          text: "Hydrogen and Carbon Utilization",
        },
        {
          type: "paragraph",
          text:
            "Hydrogen can also help convert captured carbon dioxide into useful chemical products. One example is methanol synthesis from carbon dioxide and hydrogen. Methanol is a versatile platform chemical that can be used as a fuel or converted into a range of downstream products.",
        },
        {
          type: "paragraph",
          text:
            "These carbon utilization pathways create opportunities to transform captured carbon into valuable products and support circular carbon systems.",
        },
        {
          type: "heading",
          text: "The Importance of Process Integration",
        },
        {
          type: "paragraph",
          text:
            "Producing hydrogen is only one part of the equation. Storage, transportation and utilization across industries are equally important. Process integration helps align hydrogen production with downstream chemical processes, fuel production systems and carbon utilization technologies.",
        },
        {
          type: "heading",
          text: "Looking Ahead",
        },
        {
          type: "paragraph",
          text:
            "The future hydrogen economy will emerge through a combination of innovations across renewable energy systems, catalytic chemistry, carbon capture technologies and advanced process engineering.",
        },
        {
          type: "paragraph",
          text:
            "By connecting renewable energy, biomass resources, captured carbon and hydrogen chemistry, industries can develop new platforms for producing fuels, materials and chemicals with a lower environmental impact.",
        },
      ],
    },

    // 03 — Oil & Gas
    {
      id: "next-wave-oil-and-gas",
      title:
        "The Next Wave in Oil & Gas: Scale, Speed, and Sustainability",
      excerpt:
        "The oil and gas sector is evolving through large-scale projects, tighter execution timelines and increasing sustainability expectations. Explore the technologies and partnerships shaping its next phase.",
      category: "Oil & Gas",
      author: "Chemdist Group",
      publishedAt: "2025-09-05",
      readTime: "4 min read",
      image: "/images/blogs/oil-and-gas.png",
      imageAlt: "Large-scale oil and gas industrial facility",

      overview: {
        heading: {
          before: "The future of energy demands",
          highlight: "scale and speed",
          after: "with sustainability.",
        },
        description:
          "As global energy demand evolves, the oil and gas industry faces a changing landscape of large-scale projects, execution challenges and environmental expectations. Process technology and engineering partnerships are becoming increasingly important.",
      },

      content: [
        {
          type: "paragraph",
          text:
            "The oil and gas industry is entering a pivotal period. With global energy demand continuing to evolve, the sector is witnessing fresh momentum, particularly in the Gulf, where investments in refining, petrochemicals and infrastructure projects remain significant.",
        },
        {
          type: "paragraph",
          text:
            "The story is no longer just about supply. Oil and gas companies face a new reality: projects of unprecedented scale, tighter execution timelines and increasing scrutiny on efficiency and sustainability.",
        },
        {
          type: "heading",
          text: "Three Factors Shaping the Industry",
        },
        {
          type: "paragraph",
          text:
            "The future of the industry will depend on the ability to balance production requirements with process efficiency and reliable project execution.",
        },
        {
          type: "list",
          items: [
            "Precision in process technologies to maximize yield and minimize waste.",
            "Energy-efficient heat and separation systems to reduce costs while meeting climate targets.",
            "Partners capable of executing large-scale projects without compromising reliability.",
          ],
        },
        {
          type: "heading",
          text: "The Role of Integrated Engineering Solutions",
        },
        {
          type: "paragraph",
          text:
            "Collaborations between technology innovators and project execution leaders are reshaping the industrial landscape. Integrated expertise in advanced separation, heat transfer and large-scale project delivery can help address the dual challenges of scale and sustainability.",
        },
        {
          type: "paragraph",
          text:
            "For the Gulf region, where investment pipelines are expanding and national strategies emphasize both energy leadership and climate responsibility, the ability to adopt integrated solutions will help define competitive advantage.",
        },
        {
          type: "heading",
          text: "Looking Ahead",
        },
        {
          type: "paragraph",
          text:
            "The evolution of the oil and gas industry is not simply a return to growth. It is a transformation that demands smarter technologies, faster execution and a deeper commitment to sustainability.",
        },
        {
          type: "paragraph",
          text:
            "As energy companies prepare for the next decade, the organizations capable of balancing operational scale, technological innovation and reliable execution will be increasingly important.",
        },
      ],
    },

    // 04 — Skid-Mounted Systems
    {
      id: "skid-mounted-systems",
      title:
        "The Importance of Skid-Mounted Systems in Process Industries",
      excerpt:
        "Discover how pre-engineered, modular skid-mounted systems help process industries improve installation timelines, reduce project risks and achieve scalable industrial operations.",
      category: "Process Equipment",
      author: "Chemdist Group",
      publishedAt: "2025-08-26",
      readTime: "4 min read",
      image: "/images/blogs/skid-mounted-systems.png",
      imageAlt: "Industrial skid-mounted process equipment",

      overview: {
        heading: {
          before: "Modular engineering for",
          highlight: "smarter operations",
          after: "and faster execution.",
        },
        description:
          "Skid-mounted systems bring equipment, piping and process components together into pre-engineered modular units. Their controlled fabrication and testing offer industries a practical approach to installation, scalability and operational reliability.",
      },

      content: [
        {
          type: "paragraph",
          text:
            "In modern process industries, the demand for efficiency, safety and scalability is greater than ever. Skid-mounted systems, which are compact modular process units, have become a preferred solution for companies looking to optimize operations while minimizing project risks.",
        },
        {
          type: "heading",
          text: "What Are Skid-Mounted Systems?",
        },
        {
          type: "paragraph",
          text:
            "A skid is a fully engineered and pre-assembled system, tested in controlled environments before being shipped to the site. Unlike conventional setups that require extensive on-site construction, skid systems arrive ready for integration.",
        },
        {
          type: "paragraph",
          text:
            "This approach can reduce installation time, on-site safety hazards and project delays by shifting much of the assembly and testing work to a controlled manufacturing environment.",
        },
        {
          type: "heading",
          text: "Industries That Benefit",
        },
        {
          type: "list",
          items: [
            "Pharmaceuticals – batch processing, purification and critical utility systems.",
            "Oil & Gas – gas processing, separation and injection skids.",
            "Specialty Chemicals – precise dosing, mixing and reaction systems.",
            "Water Treatment – modular filtration, chemical dosing and recycling systems.",
          ],
        },
        {
          type: "heading",
          text: "The Advantages of Modular Design",
        },
        {
          type: "paragraph",
          text:
            "The advantages extend beyond convenience. Modular design allows companies to scale capacity or adapt to new processes without major infrastructure changes.",
        },
        {
          type: "paragraph",
          text:
            "Fabricating and testing equipment in controlled facilities can improve quality, reliability and safety compared with extensive field construction.",
        },
        {
          type: "heading",
          text: "Project Efficiency and Cost Considerations",
        },
        {
          type: "paragraph",
          text:
            "From a cost perspective, modular skid systems can reduce site labour requirements and minimize rework. For project managers, this can translate into more predictable schedules and faster time-to-market.",
        },
        {
          type: "heading",
          text: "The Chemdist Approach",
        },
        {
          type: "paragraph",
          text:
            "At JNK Chemdist Technologies, custom skid-mounted solutions are designed to integrate into industrial workflows. These solutions support clients across industries in achieving process efficiency, reliability and long-term value.",
        },
        {
          type: "paragraph",
          text:
            "As industries move towards smarter, modular infrastructure, skid-mounted systems will continue to play an important role in operational excellence.",
        },
      ],
    },

    // 05 — Innovation
    {
      id: "innovation-process-manufacturing",
      title:
        "Innovation: The Heartbeat of Progress in Process Manufacturing",
      excerpt:
        "From energy-efficient equipment and byproduct recovery to nano-urea, green plastics and microreactor technology, discover how innovation is shaping the future of process manufacturing.",
      category: "Innovation",
      author: "Chemdist Group",
      publishedAt: "2025-07-23",
      readTime: "3 min read",
      image: "/images/blogs/process-manufacturing-innovation.png",
      imageAlt: "Innovation in chemical process manufacturing",

      overview: {
        heading: {
          before: "Turning engineering ideas into",
          highlight: "industrial progress",
          after: "through innovation.",
        },
        description:
          "Process manufacturing is under increasing pressure to improve efficiency, reduce environmental impact and deliver more value. Research, intelligent equipment and innovative chemical processes are central to addressing these challenges.",
      },

      content: [
        {
          type: "paragraph",
          text:
            "In the high-stakes world of process manufacturing, innovation is not a luxury; it is a necessity. With rising input costs, environmental regulations and the need for greater energy efficiency, companies today are under pressure to deliver more with less.",
        },
        {
          type: "paragraph",
          text:
            "Smarter processes can reduce operational footprints, while intelligent equipment can help reduce energy consumption. Developments in byproduct recovery, including hydrogen generation from methanol reforming or ethanol conversion, can also create opportunities to turn waste into value.",
        },
        {
          type: "heading",
          text: "Innovation Through Research and Engineering",
        },
        {
          type: "paragraph",
          text:
            "At Chemdist, innovation is treated as an engineering discipline. Every project presents an opportunity to rethink the possibilities of chemical engineering.",
        },
        {
          type: "paragraph",
          text:
            "From developing nano-urea systems and green plastics to investing in smart reactors and microreactor technology, research and development extends beyond individual products. It reflects a commitment to efficiency, precision and responsibility.",
        },
        {
          type: "heading",
          text: "Responding to Critical Challenges",
        },
        {
          type: "paragraph",
          text:
            "During the COVID-19 pandemic, the Chemdist team developed oxygen concentrators for the Government of India. This demonstrated the importance of engineering capabilities that can be adapted to address urgent requirements.",
        },
        {
          type: "heading",
          text: "Building for a Sustainable Future",
        },
        {
          type: "paragraph",
          text:
            "The same innovation mindset supports sustainability initiatives, where clean fuels, circular systems and improved resource utilization are important areas of development.",
        },
        {
          type: "paragraph",
          text:
            "In a world that demands better solutions, progress in process manufacturing depends on more than incremental improvements. It requires the ability to translate research, engineering knowledge and new technologies into practical industrial applications.",
        },
      ],
    },
  ] satisfies BlogPost[],
};
