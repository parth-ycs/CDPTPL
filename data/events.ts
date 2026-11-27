export interface EventItem {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  venue: string;
  stand?: string;
  description: string;
  image: string;
  imageAlt: string;
  url?: string;
}

export type EventRecord = EventItem & {
  displayOrder: number;
};

export const eventsPageData = {
  hero: {
    heading: "Events",
    eyebrow: "EVENTS & EXHIBITIONS",
    description:
      "Discover the exhibitions, industry events and engagements where Chemdist Group connects with ideas, innovations and opportunities.",
    image: "/images/events/events-hero.png",
    imageAlt: "Chemdist Group events and industry exhibitions",
  },

  overview: {
    heading: {
      before: "Connecting expertise with",
      highlight: "opportunities",
      after: ".",
    },
    description:
      "Industry events and exhibitions provide opportunities to exchange knowledge, showcase engineering capabilities and build meaningful connections. Through our participation in industry platforms, we engage with professionals, explore emerging technologies and strengthen relationships across the process industry.",
  },

  listing: {
    eyebrow: "WHERE WE CONNECT",
    heading: "Events & Exhibitions",
    description:
      "Explore the exhibitions, conferences and industry engagements featuring Chemdist Group.",
  },
};