export interface CSRInitiative {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
}

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
    heading: "Small actions. Meaningful impact.",
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

export const csrInitiatives: CSRInitiative[] = [
  {
    id: "world-environment-day",
    title: "Team Chemdist Celebrates World Environment Day!",
    category: "Environmental Initiative",
    location: "ARAI Hills, Pune, India",
    description:
      "In a spirited celebration of World Environment Day, Team Chemdist came together at ARAI Hills, Pune, for a meaningful tree-planting and conservation activity. Through teamwork and dedication, the initiative contributed to environmental awareness and the conservation of green spaces for future generations.",
    image: "/images/csr/world-environment-day.jpg",
    imageAlt:
      "Team Chemdist participating in a tree planting and conservation activity at ARAI Hills",
  },
  {
    id: "world-environment-day",
    title: "Team Chemdist Celebrates World Environment Day!",
    category: "Environmental Initiative",
    location: "ARAI Hills, Pune, India",
    description:
      "In a spirited celebration of World Environment Day, Team Chemdist came together at ARAI Hills, Pune, for a meaningful tree-planting and conservation activity. Through teamwork and dedication, the initiative contributed to environmental awareness and the conservation of green spaces for future generations.",
    image: "/images/csr/world-environment-day.jpg",
    imageAlt:
      "Team Chemdist participating in a tree planting and conservation activity at ARAI Hills",
  },
  {
    id: "world-environment-day",
    title: "Team Chemdist Celebrates World Environment Day!",
    category: "Environmental Initiative",
    location: "ARAI Hills, Pune, India",
    description:
      "In a spirited celebration of World Environment Day, Team Chemdist came together at ARAI Hills, Pune, for a meaningful tree-planting and conservation activity. Through teamwork and dedication, the initiative contributed to environmental awareness and the conservation of green spaces for future generations.",
    image: "/images/csr/world-environment-day.jpg",
    imageAlt:
      "Team Chemdist participating in a tree planting and conservation activity at ARAI Hills",
  },
];