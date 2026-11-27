export interface CSRInitiative {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
}

export type CSRInitiativeRecord = CSRInitiative & {
  displayOrder: number;
};

export const csrPageData = {
  hero: {
    heading: "Corporate Social Responsibility",
    eyebrow: "PEOPLE • PLANET • PURPOSE",
    description:
      "Creating meaningful impact through environmental responsibility, community participation and a commitment to a sustainable future.",
    image: "/images/csr/csr-hero.png",
    imageAlt: "Chemdist Group community and environmental initiatives",
  },

  overview: {
    heading: {
      before: "Progress that goes beyond",
      highlight: "business",
      after: ".",
    },
    description:
      "At Chemdist Group, we believe that responsible growth extends beyond technological and industrial advancement. We recognise the importance of contributing to the environment and society through meaningful initiatives, collective participation and responsible action.",
  },

  initiativesSection: {
    eyebrow: "OUR INITIATIVES",
    before: "Small actions.",
    highlight: "Meaningful",
    after: "impact.",
    description:
      "Our initiatives reflect a commitment to environmental awareness, collective responsibility and creating a positive difference in the communities around us.",
  },

  commitment: {
    eyebrow: "OUR COMMITMENT",
    heading: "Building a more responsible tomorrow.",
    description:
      "We believe lasting progress comes from balancing industrial development with environmental and social responsibility. Through collective efforts and meaningful initiatives, we continue to work towards a better future.",
    image: "/images/csr/csr-commitment.png",
    imageAlt: "Environmental conservation and green initiatives",
    imageLabel: "A commitment to a greener future",
  },
};