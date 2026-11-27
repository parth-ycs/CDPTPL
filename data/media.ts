export type NewsItem = {
  id: string;
  category: string;
  date: string;
  title: string;
  location: string;
  description: string;
  image: string;
  href: string;
};

export type NewsItemRecord = NewsItem & {
  displayOrder: number;
};

export const newsPageData = {
  hero: {
    heading: "Media",
    eyebrow: "NEWSROOM",
    description:
      "Stay informed about the latest developments, milestones, announcements and activities from Chemdist Group.",
    image: "/images/news/news-hero.png",
    imageAlt: "Chemdist Group media and news",
  },

  listing: {
    eyebrow: "LATEST UPDATES",
    heading: "In the News",
    description:
      "Company announcements, industry developments and stories from across Chemdist Group.",
    allCategoriesLabel: "All News",
    featuredLabel: "FEATURED STORY",
    readMoreLabel: "Read More",
    emptyMessage: "No news articles found in this category.",
  },
};