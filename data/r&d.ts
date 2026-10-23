
export interface RDSlide {
  image: string;
  alt: string;
  title: string;
}

export const rdSectionData = {
  eyebrow: "Research & Development",

  heading: ["Engineering", "What Comes Next"],

  description:
    "We drive process innovation, materials science and sustainable chemistry to create efficient, scalable and responsible solutions for a better tomorrow. Our R&D efforts bridge fundamental research with real-world industrial applications, enabling cleaner processes, higher performance and long-term value for our customers and the planet.",

  highlights: [
    "Process innovation",
    "Advanced materials & separation",
    "Sustainable technologies",
  ],

  primaryCta: {
    label: "Explore R&D",
    href: "/research-development",
  },

  secondaryCta: {
    label: "Our Capabilities",
    href: "/capabilities",
  },

  slides: [
    {
      image:
        "https://images.unsplash.com/photo-1581093458791-9d42e3c4f1b4?auto=format&fit=crop&w=1800&q=90",
      alt: "Industrial engineering and process development",
      title: "Process Innovation",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&q=90",
      alt: "Engineers working on industrial technology",
      title: "Engineering Research",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1800&q=90",
      alt: "Laboratory research and scientific experimentation",
      title: "Materials Science",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1800&q=90",
      alt: "Industrial equipment and technical development",
      title: "Industrial Applications",
    },
  ] satisfies RDSlide[],
};
