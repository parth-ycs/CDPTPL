/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

export interface BlogAuthor {
  name: string;
}

/** A blog post as stored in SQLite (see lib/db/queries/blogs.ts). */
export interface BlogPost {
  id: string; // used as the URL slug: /blogs/[id]
  title: string;
  excerpt: string;
  category: string;
  author: BlogAuthor;
  publishedAt: string; // ISO date
  image: string;
  imageAlt: string;
  likes: number;
  /** Markdown (GitHub-flavoured). Rendered by components/blogs/sections/BlogMarkdown */
  content: string;
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
/*  Comments (temporary)                                                      */
/*  Still mock data. Remove this block, getComments and getCommentCount once  */
/*  comments move to SQLite.                                                  */
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
