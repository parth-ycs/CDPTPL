/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

export interface BlogAuthor {
  name: string;
  role: string;
  bio: string;
  avatar?: string; // optional – UI falls back to initials
}

export interface BlogComment {
  id: string;
  author: string;
  avatar?: string;
  createdAt: string; // ISO string
  text: string;
  likes: number;
  replies?: BlogComment[];
}

export interface BlogPost {
  id: string; // used as the URL slug: /blogs/[id]
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: BlogAuthor;
  publishedAt: string; // ISO date
  image: string;
  imageAlt: string;
  likes: number;
  /** Markdown (GitHub-flavoured). Rendered by components/blogs/sections/BlogMarkdown */
  content: string;
}

/* -------------------------------------------------------------------------- */
/*  Page copy                                                                 */
/* -------------------------------------------------------------------------- */

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
    eyebrow: "THE JOURNAL",
    heading: "Latest Articles",
    description: "Explore our latest articles and updates.",
    emptyMessage: "New articles are coming soon. Stay tuned for updates.",
    noResultsMessage: "No articles match your search. Try a different keyword.",
    searchPlaceholder: "Search articles",
    allCategoriesLabel: "All",
    readMoreLabel: "Read Article",
    trendingHeading: "Trending",
  },

  detail: {
    backLabel: "All articles",
    relatedHeading: "More from Chemdist",
    relatedDescription: "Keep reading — more articles from Chemdist Group.",
    commentsHeading: "Responses",
    commentPlaceholder: "What are your thoughts?",
    writtenByLabel: "Written by",
  },
};

/* -------------------------------------------------------------------------- */
/*  Content                                                                   */
/* -------------------------------------------------------------------------- */

const chemdistTeam: BlogAuthor = {
  name: "Chemdist Group",
  role: "Editorial Team",
  bio: "Engineering perspectives from the teams at Chemdist Group, covering process technology, catalysis, separation systems and industrial innovation.",
};

export const blogPosts: BlogPost[] = [
  /* 01 — Distillation Columns */
  {
    id: "distillation-columns",
    title:
      "Distillation Columns: The Backbone of Efficient Separation Processes",
    excerpt:
      "Explore why distillation remains fundamental to chemical, petrochemical and pharmaceutical industries, and how process optimization improves separation efficiency, energy utilization and plant economics.",
    category: "Process Technology",
    tags: ["Distillation", "Process Optimization", "Energy Efficiency"],
    author: chemdistTeam,
    publishedAt: "2026-07-24",
    image: "/images/blogs/distillation-columns.png",
    imageAlt: "Industrial distillation column installation",
    likes: 48,
    content: `
In the process industries, few technologies have remained as fundamental and indispensable as the distillation column. Despite advancements in process intensification, membrane systems and alternative separation technologies, distillation continues to be the preferred solution for a wide range of chemical, petrochemical, pharmaceutical and specialty chemical applications.

Its importance lies not only in its ability to separate components but also in its direct impact on product quality, throughput, energy consumption and overall plant economics.

## The Importance of Process Optimization

For many facilities, distillation represents one of the most energy-intensive operations within the process chain. As production demands increase and sustainability targets become more stringent, the focus has shifted from simply operating distillation columns to optimizing their performance.

A well-engineered distillation system is the result of multiple design considerations working together. Feed characteristics, operating pressure, vapor-liquid equilibrium, tray or packing selection, hydraulic design and heat integration strategies all influence separation efficiency.

Even minor improvements in these areas can significantly affect operating costs over the lifecycle of the plant.

## Designing for Scalability and Reliability

Another critical consideration is scalability. As industries expand production capacity, distillation systems must be designed to accommodate future requirements without compromising performance. This requires a careful balance between capital investment, operational flexibility and long-term process reliability.

Modern distillation projects are therefore no longer viewed as standalone equipment purchases. They are evaluated as integrated process solutions where engineering decisions influence everything from energy utilization and maintenance requirements to product recovery and plant uptime.

## Unlocking Value from Existing Systems

Many organizations are revisiting existing distillation assets to unlock hidden value. Through debottlenecking studies, internal modifications, process optimization and improved heat recovery strategies, plants can often achieve meaningful capacity and efficiency improvements without major infrastructure expansion.

## The Chemdist Approach

As process industries continue to pursue greater operational efficiency, distillation technology remains a key enabler of productivity and profitability. The challenge is no longer understanding the importance of distillation—it is ensuring that systems are engineered to deliver maximum performance throughout their operational life.

At Chemdist, we approach distillation as a complete process engineering challenge rather than simply an equipment requirement. By combining process expertise, design capabilities, manufacturing excellence and execution support, we help industries develop distillation solutions that align with both technical objectives and long-term business goals.
`.trim(),
  },

  /* 02 — Green Hydrogen */
  {
    id: "green-hydrogen-beyond-electrolysis",
    title:
      "Green Hydrogen Beyond Electrolysis: Integrating Chemistry for a Low Carbon Future",
    excerpt:
      "Green hydrogen has a role beyond renewable-powered electrolysis. Discover how integrated chemical processes, biomass conversion and carbon utilization can contribute to a more sustainable hydrogen economy.",
    category: "Green Technology",
    tags: ["Green Hydrogen", "Biomass", "Carbon Utilization"],
    author: chemdistTeam,
    publishedAt: "2026-07-07",
    image: "/images/blogs/green-hydrogen.png",
    imageAlt: "Green hydrogen and sustainable chemical processing",
    likes: 112,
    content: `
The global discussion around green hydrogen has accelerated dramatically. Governments, energy companies and technology developers are investing in hydrogen as a pathway to decarbonize industries that are otherwise difficult to electrify.

Most discussions focus on producing hydrogen through water electrolysis powered by renewable energy. Electrolysis will undoubtedly play a critical role in the future hydrogen economy. However, the hydrogen transition cannot be viewed only through the lens of electricity and electrolyzers.

For the chemical industry, hydrogen must be understood within a broader context of integrated chemical processes where it can be generated, recovered, transported and utilized through different production pathways.

## The Expanding Role of Hydrogen in the Chemical Industry

Hydrogen is already widely used in refining, fertilizer production, petrochemicals and numerous hydrogenation reactions. Traditionally, much industrial hydrogen is produced through steam methane reforming or coal gasification. While these technologies are mature, they are associated with significant carbon emissions.

Green hydrogen, produced using renewable energy, offers an alternative. Equally important is the ability to integrate hydrogen generation within chemical production routes so that hydrogen and valuable chemicals can be produced together.

## Hydrogen Generation Through Chemical Pathways

Several chemical processes can generate hydrogen as a co-product while producing valuable chemicals. One example is ethanol dehydrogenation, in which ethanol is converted into ethyl acetate through a catalytic pathway and hydrogen is released as a byproduct.

When ethanol feedstock is derived from biomass fermentation, the resulting hydrogen can form part of a renewable production pathway. Such processes create opportunities to produce both chemicals and hydrogen within the same facility.

## Ammonia as a Hydrogen Carrier

Hydrogen storage and transportation remain significant challenges. Hydrogen has a low volumetric energy density and requires compression or liquefaction for large-scale transport.

Ammonia has emerged as a promising hydrogen carrier. It contains a high hydrogen content and can be stored and transported using established infrastructure. At the destination, ammonia can be decomposed through catalytic cracking to produce hydrogen and nitrogen.

## Biomass Conversion and Hydrogen-Rich Streams

Biomass conversion technologies offer another pathway for generating hydrogen-rich streams. Biomass can be thermochemically converted into syngas through gasification. Syngas typically contains hydrogen, carbon monoxide, carbon dioxide and smaller quantities of other gases.

Further processing through shift reactions and purification can produce hydrogen. Biomass conversion can also produce valuable products such as bio-oil and biochar, creating opportunities for integrated biorefineries.

## Hydrogen and Carbon Utilization

Hydrogen can also help convert captured carbon dioxide into useful chemical products. One example is methanol synthesis from carbon dioxide and hydrogen. Methanol is a versatile platform chemical that can be used as a fuel or converted into a range of downstream products.

These carbon utilization pathways create opportunities to transform captured carbon into valuable products and support circular carbon systems.

## The Importance of Process Integration

Producing hydrogen is only one part of the equation. Storage, transportation and utilization across industries are equally important. Process integration helps align hydrogen production with downstream chemical processes, fuel production systems and carbon utilization technologies.

## Looking Ahead

The future hydrogen economy will emerge through a combination of innovations across renewable energy systems, catalytic chemistry, carbon capture technologies and advanced process engineering.

By connecting renewable energy, biomass resources, captured carbon and hydrogen chemistry, industries can develop new platforms for producing fuels, materials and chemicals with a lower environmental impact.
`.trim(),
  },

  /* 03 — Oil & Gas */
  {
    id: "next-wave-oil-and-gas",
    title: "The Next Wave in Oil & Gas: Scale, Speed, and Sustainability",
    excerpt:
      "The oil and gas sector is evolving through large-scale projects, tighter execution timelines and increasing sustainability expectations. Explore the technologies and partnerships shaping its next phase.",
    category: "Oil & Gas",
    tags: ["Oil & Gas", "Project Execution", "Sustainability"],
    author: chemdistTeam,
    publishedAt: "2025-09-05",
    image: "/images/blogs/oil-and-gas.png",
    imageAlt: "Large-scale oil and gas industrial facility",
    likes: 36,
    content: `
The oil and gas industry is entering a pivotal period. With global energy demand continuing to evolve, the sector is witnessing fresh momentum, particularly in the Gulf, where investments in refining, petrochemicals and infrastructure projects remain significant.

The story is no longer just about supply. Oil and gas companies face a new reality: projects of unprecedented scale, tighter execution timelines and increasing scrutiny on efficiency and sustainability.

## Three Factors Shaping the Industry

The future of the industry will depend on the ability to balance production requirements with process efficiency and reliable project execution.

- Precision in process technologies to maximize yield and minimize waste.
- Energy-efficient heat and separation systems to reduce costs while meeting climate targets.
- Partners capable of executing large-scale projects without compromising reliability.

## The Role of Integrated Engineering Solutions

Collaborations between technology innovators and project execution leaders are reshaping the industrial landscape. Integrated expertise in advanced separation, heat transfer and large-scale project delivery can help address the dual challenges of scale and sustainability.

For the Gulf region, where investment pipelines are expanding and national strategies emphasize both energy leadership and climate responsibility, the ability to adopt integrated solutions will help define competitive advantage.

## Looking Ahead

The evolution of the oil and gas industry is not simply a return to growth. It is a transformation that demands smarter technologies, faster execution and a deeper commitment to sustainability.

As energy companies prepare for the next decade, the organizations capable of balancing operational scale, technological innovation and reliable execution will be increasingly important.
`.trim(),
  },

  /* 04 — Skid-Mounted Systems */
  {
    id: "skid-mounted-systems",
    title: "The Importance of Skid-Mounted Systems in Process Industries",
    excerpt:
      "Discover how pre-engineered, modular skid-mounted systems help process industries improve installation timelines, reduce project risks and achieve scalable industrial operations.",
    category: "Process Equipment",
    tags: ["Skid-Mounted Systems", "Modular Design", "Project Efficiency"],
    author: chemdistTeam,
    publishedAt: "2025-08-26",
    image: "/images/blogs/skid-mounted-systems.png",
    imageAlt: "Industrial skid-mounted process equipment",
    likes: 29,
    content: `
In modern process industries, the demand for efficiency, safety and scalability is greater than ever. Skid-mounted systems, which are compact modular process units, have become a preferred solution for companies looking to optimize operations while minimizing project risks.

## What Are Skid-Mounted Systems?

A skid is a fully engineered and pre-assembled system, tested in controlled environments before being shipped to the site. Unlike conventional setups that require extensive on-site construction, skid systems arrive ready for integration.

This approach can reduce installation time, on-site safety hazards and project delays by shifting much of the assembly and testing work to a controlled manufacturing environment.

## Industries That Benefit

- **Pharmaceuticals** – batch processing, purification and critical utility systems.
- **Oil & Gas** – gas processing, separation and injection skids.
- **Specialty Chemicals** – precise dosing, mixing and reaction systems.
- **Water Treatment** – modular filtration, chemical dosing and recycling systems.

## The Advantages of Modular Design

The advantages extend beyond convenience. Modular design allows companies to scale capacity or adapt to new processes without major infrastructure changes.

Fabricating and testing equipment in controlled facilities can improve quality, reliability and safety compared with extensive field construction.

## Project Efficiency and Cost Considerations

From a cost perspective, modular skid systems can reduce site labour requirements and minimize rework. For project managers, this can translate into more predictable schedules and faster time-to-market.

## The Chemdist Approach

At JNK Chemdist Technologies, custom skid-mounted solutions are designed to integrate into industrial workflows. These solutions support clients across industries in achieving process efficiency, reliability and long-term value.

As industries move towards smarter, modular infrastructure, skid-mounted systems will continue to play an important role in operational excellence.
`.trim(),
  },

  /* 05 — Innovation */
  {
    id: "innovation-process-manufacturing",
    title: "Innovation: The Heartbeat of Progress in Process Manufacturing",
    excerpt:
      "From energy-efficient equipment and byproduct recovery to nano-urea, green plastics and microreactor technology, discover how innovation is shaping the future of process manufacturing.",
    category: "Innovation",
    tags: ["Innovation", "R&D", "Microreactors"],
    author: chemdistTeam,
    publishedAt: "2025-07-23",
    image: "/images/blogs/process-manufacturing-innovation.png",
    imageAlt: "Innovation in chemical process manufacturing",
    likes: 41,
    content: `
In the high-stakes world of process manufacturing, innovation is not a luxury; it is a necessity. With rising input costs, environmental regulations and the need for greater energy efficiency, companies today are under pressure to deliver more with less.

Smarter processes can reduce operational footprints, while intelligent equipment can help reduce energy consumption. Developments in byproduct recovery, including hydrogen generation from methanol reforming or ethanol conversion, can also create opportunities to turn waste into value.

## Innovation Through Research and Engineering

At Chemdist, innovation is treated as an engineering discipline. Every project presents an opportunity to rethink the possibilities of chemical engineering.

From developing nano-urea systems and green plastics to investing in smart reactors and microreactor technology, research and development extends beyond individual products. It reflects a commitment to efficiency, precision and responsibility.

## Responding to Critical Challenges

During the COVID-19 pandemic, the Chemdist team developed oxygen concentrators for the Government of India. This demonstrated the importance of engineering capabilities that can be adapted to address urgent requirements.

## Building for a Sustainable Future

The same innovation mindset supports sustainability initiatives, where clean fuels, circular systems and improved resource utilization are important areas of development.

In a world that demands better solutions, progress in process manufacturing depends on more than incremental improvements. It requires the ability to translate research, engineering knowledge and new technologies into practical industrial applications.
`.trim(),
  },
];

/* -------------------------------------------------------------------------- */
/*  Mock comments (replace with backend)                                      */
/* -------------------------------------------------------------------------- */

export const blogComments: Record<string, BlogComment[]> = {
  "distillation-columns": [
    {
      id: "c1",
      author: "Sample Reader",
      createdAt: "2026-07-26T10:30:00+05:30",
      text: "Debottlenecking existing columns is hugely underrated. Would love a follow-up on heat integration strategies.",
      likes: 6,
      replies: [
        {
          id: "c1-r1",
          author: "Chemdist Group",
          createdAt: "2026-07-27T09:10:00+05:30",
          text: "Noted — heat integration is on our list for an upcoming article.",
          likes: 2,
        },
      ],
    },
    {
      id: "c2",
      author: "Another Reader",
      createdAt: "2026-07-25T18:05:00+05:30",
      text: "Great overview of why distillation still wins in so many applications.",
      likes: 3,
    },
  ],
  "green-hydrogen-beyond-electrolysis": [
    {
      id: "c3",
      author: "Sample Reader",
      createdAt: "2026-07-09T14:20:00+05:30",
      text: "The ammonia-as-carrier section is the clearest explanation of the storage problem I have read.",
      likes: 4,
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Accessors                                                                 */
/*  When the backend arrives, make these async and swap the bodies for fetch  */
/*  calls — page components are already async, so call sites barely change.   */
/* -------------------------------------------------------------------------- */

export function getAllBlogs(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getBlogById(id: string): BlogPost | undefined {
  return blogPosts.find((blog) => blog.id === id);
}

export function getCategories(): string[] {
  return Array.from(new Set(blogPosts.map((blog) => blog.category)));
}

export function getRelatedBlogs(blog: BlogPost, limit = 3): BlogPost[] {
  const others = getAllBlogs().filter((item) => item.id !== blog.id);
  const sameCategory = others.filter((item) => item.category === blog.category);
  const rest = others.filter((item) => item.category !== blog.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

export function getTrendingBlogs(limit = 3): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.likes - a.likes).slice(0, limit);
}

export function getComments(blogId: string): BlogComment[] {
  return blogComments[blogId] ?? [];
}

export function getCommentCount(blogId: string): number {
  return getComments(blogId).reduce(
    (total, comment) => total + 1 + (comment.replies?.length ?? 0),
    0,
  );
}

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

export function getReadTime(markdown: string): string {
  const words = markdown.trim().split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

// Fixed time zone so server and client render the same date (no hydration mismatch)
export function formatBlogDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
}