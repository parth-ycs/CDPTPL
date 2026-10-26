
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

export const newsItems: NewsItem[] = [
  {
    id: "digital-process-technology",
    category: "Development",
    date: "Mar 12, 2026",
    title: "Building a clearer digital expression for process technology.",
    location: "Chemdist Office",
    description:
      "Exploring digital tools to visualize complex processes, improve operational visibility, and support more efficient industrial workflows.",
    image:
      "https://images.unsplash.com/photo-1786532852011-443cba5dc9fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "#enquiry",
  },
  {
    id: "technology-capability",
    category: "Company Update",
    date: "Feb 28, 2026",
    title: "Technology, capability and the next chapter.",
    location: "R&D Facility",
    description:
      "Discover how research, technical expertise, and modern laboratory practices can support the development of advanced process solutions.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85",
    href: "#enquiry",
  },
  {
    id: "people-growth",
    category: "People & Growth",
    date: "Feb 10, 2026",
    title: "Investing in people for a stronger tomorrow.",
    location: "Chemdist Group",
    description:
      "Skilled teams, knowledge sharing, and collaborative thinking are essential to building capabilities and delivering reliable solutions.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
    href: "#enquiry",
  },
  {
    id: "sustainable-growth",
    category: "Sustainability",
    date: "Jan 25, 2026",
    title: "Driving sustainable growth across industries.",
    location: "Global",
    description:
      "Explore the role of resource efficiency, responsible industrial practices, and cleaner energy in building a more sustainable future.",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1400&q=85",
    href: "#enquiry",
  },
  {
    id: "engineering-excellence",
    category: "Engineering",
    date: "Jan 08, 2026",
    title: "Engineering reliable solutions for complex processes.",
    location: "Chemdist Group",
    description:
      "Precision engineering, careful technical planning, and attention to detail help address demanding industrial requirements.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=85",
    href: "#enquiry",
  },
  {
    id: "project-milestone",
    category: "Projects",
    date: "Dec 16, 2025",
    title: "A new milestone in project delivery.",
    location: "India",
    description:
      "From planning and coordination to execution, effective project delivery depends on technical precision, teamwork, and consistent quality.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
    href: "#enquiry",
  },
];
