export interface PatentItem {
  id: string;
  title: string;
  referenceLabel: string;
  applicationNumber: string;
  date: string | null;
  image: string;
  imageAlt: string;
}

export type PatentRecord = PatentItem & {
  displayOrder: number;
};

export const patentsPageData = {
  hero: {
    heading: "Patents",
    eyebrow: "INTELLECTUAL PROPERTY",
    description:
      "Explore the patented technologies and intellectual property contributions of Chemdist Group.",
    image: "/images/patents/patents-hero.png",
    imageAlt: "Chemdist Group patents and intellectual property",
  },

  overview: {
    heading: {
      before: "Protecting ideas through",
      highlight: "intellectual property",
      after: "and innovation.",
    },
    description:
      "Our patents represent the technical knowledge, research and engineering advancements developed at Chemdist Group. Each patent reflects our commitment to developing original technologies and contributing to industrial progress.",
  },

  closing: {
    eyebrow: "OUR COMMITMENT",
    heading: "Advancing Technology Through Research and Intellectual Property.",
    description:
      "We continue to strengthen our intellectual property portfolio through research, engineering and the development of technologies that address evolving industrial needs.",
  },
};