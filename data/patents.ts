
export interface PatentItem {
  id: string;
  title: string;
  referenceLabel: string;
  applicationNumber: string;
  date: string | null;
  image: string;
  imageAlt: string;
}

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

  patents: [
    {
      id: "patent-01",
      title:
        "A method for Synthesis of nano urea and its composites there of",
      referenceLabel: "PCT Patent Application No.",
      applicationNumber: "PCT/IB2024/063111",
      date: null,
      image: "/images/patents/patent-nano-urea.png",
      imageAlt: "Nano urea patent application document",
    },
    {
      id: "patent-02",
      title: "System and Process for Pyrolysis of Biomass and Biosolids",
      referenceLabel: "IN Patent Application No.",
      applicationNumber: "202511096053",
      date: null,
      image: "/images/patents/patent-biomass.png",
      imageAlt: "Biomass pyrolysis patent application document",
    },
    {
      id: "patent-03",
      title:
        "A process for base metal catalysed conversion of Glycerol into lactic acid",
      referenceLabel: "IN Patent Application No.",
      applicationNumber: "202431002941",
      date: null,
      image: "/images/patents/patent-glycerol.png",
      imageAlt: "Glycerol conversion patent application document",
    },
    {
      id: "patent-04",
      title: "Turbulator for Heat Exchangers and Reactors",
      referenceLabel: "Patent No.",
      applicationNumber: "419403",
      date: null,
      image: "/images/patents/patent-turbulator.png",
      imageAlt: "Granted turbulator patent certificate",
    },
        {
      id: "patent-05",
      title:
        "A Metal Catalyst and Process for Catalytic Conversion of Ethanol to Ethyl Acetate and Hydrogen",
      referenceLabel: "IN Patent Application No.",
      applicationNumber: "202431005379",
      date: null,
      image: "/images/patents/patent-ethanol-ethyl-acetate.png",
      imageAlt: "Ethanol to ethyl acetate and hydrogen patent application document",
    },
    {
      id: "patent-06",
      title:
        "Group VIII Catalysts for Generation of Green Hydrogen and Acetic acid from ethanol and its mechanism there of",
      referenceLabel: "Patent No.",
      applicationNumber: "564252",
      date: null,
      image: "/images/patents/patent-green-hydrogen-acetic-acid.png",
      imageAlt: "Granted patent document for green hydrogen and acetic acid production",
    },
    {
      id: "patent-07",
      title:
        "Group VIII Catalyst for production of green hydrogen and formic acid from methanol and its mechanism there of",
      referenceLabel: "PCT Patent Application No.",
      applicationNumber: "PCT/IB2023/051407",
      date: null,
      image: "/images/patents/patent-green-hydrogen-formic-acid.png",
      imageAlt: "Green hydrogen and formic acid production patent application document",
    },
  ] satisfies PatentItem[],

  closing: {
    eyebrow: "OUR COMMITMENT",
    heading: "Advancing Technology Through Research and Intellectual Property.",
    description:
      "We continue to strengthen our intellectual property portfolio through research, engineering and the development of technologies that address evolving industrial needs.",
  },
};
