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
}

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

export const eventItems: EventItem[] = [
  {
  id: "chemprotech-2026",
  title: "ChemProTech 2026, Mumbai",
  category: "Industrial Exhibition",
  date: "29 – 30 April 2026",
  location: "Mumbai, India",
  venue: "Bombay Exhibition Centre, Goregaon",
  stand: "4C12 | Hall 4",
  description:
    "JNK Chemdist participated in ChemProTech 2026, an international exhibition focused on chemical processing technology, equipment and industrial supplies. The event provided an opportunity to showcase its process engineering and industrial solutions.",
  image: "/images/events/chemprotech-2026.png",
  imageAlt: "JNK Chemdist at ChemProTech 2026, Mumbai",
},
{
    id: "chemtech-world-expo-2026",
    title: "ChemTECH World Expo 2026, Mumbai",
    category: "Industrial Exhibition",
    date: "3 – 6 February 2026",
    location: "Mumbai, India",
    venue: "Bombay Exhibition Centre",
    stand: "A-15 | Hall 08",
    description:
      "JNK Chemdist participated in ChemTECH World Expo 2026, showcasing its engineering integrated process solutions across distillation, heat transfer, reactors, water and wastewater treatment, and turnkey solutions.",
    image: "/images/events/chemtech-world-expo-2026.png",
    imageAlt:
      "JNK Chemdist at ChemTECH World Expo 2026, Mumbai",
  },
{
  id: "india-energy-week-2026",
  title: "India Energy Week 2026, Goa",
  category: "Energy Exhibition",
  date: "27 – 30 January 2026",
  location: "Goa, India",
  venue: "ONGC Advanced Training Institute",
  stand: "C29C | Make in India Pavilion",
  description:
    "JNK Chemdist participated in India Energy Week 2026, engaging with industry professionals and showcasing its engineering capabilities in support of India's evolving energy sector.",
  image: "/images/events/india-energy-week-2026.png",
  imageAlt: "JNK Chemdist at India Energy Week 2026, Goa",
},
{
  id: "ifat-india-2025",
  title: "IFAT India 2025, Mumbai",
  category: "Environmental Exhibition",
  date: "14 – 16 October 2025",
  location: "Mumbai, India",
  venue: "Bombay Exhibition Centre",
  stand: "J031 | Hall 6",
  description:
    "JNK Chemdist participated in IFAT India 2025, India's leading trade fair for water, sewage, solid waste and recycling. The exhibition brought together industry leaders and technology providers focused on environmental and wastewater management solutions.",
  image: "/images/events/ifat-india-2025.png",
  imageAlt: "JNK Chemdist at IFAT India 2025, Mumbai",
},
{
  id: "chemprotech-india-2025",
  title: "ChemProTech India 2025, Mumbai",
  category: "Industrial Exhibition",
  date: "29 – 30 April 2025",
  location: "Mumbai, India",
  venue: "Bombay Exhibition Centre",
  stand: "3F28 | Hall 3",
  description:
    "JNK Chemdist participated in ChemProTech India 2025, an international exhibition dedicated to chemical processing technology, equipment and supplies, connecting with professionals across the chemical and process industries.",
  image: "/images/events/chemprotech-india-2025.png",
  imageAlt: "ChemProTech India 2025 exhibition, Mumbai",
},
{
  id: "process-innovation-expo-2024",
  title: "Process Innovation Expo 2024, Singapore",
  category: "International Exhibition",
  date: "19 – 21 November 2024",
  location: "Singapore",
  venue: "Singapore Expo",
  stand: "—",
  description:
    "JNK Chemdist participated in Process Innovation Expo Asia Pacific 2024, powered by ACHEMA, showcasing its presence in the international process engineering and industrial innovation ecosystem.",
  image: "/images/events/process-innovation-expo-2024.png",
  imageAlt: "JNK Chemdist at Process Innovation Expo 2024, Singapore",
},
{
  id: "chemtech-world-expo-2024",
  title: "ChemTECH World Expo 2024, Mumbai",
  category: "Industrial Exhibition",
  date: "4 – 7 March 2024",
  location: "Mumbai, India",
  venue: "Bombay Exhibition Centre",
  stand: "A-4 | Hall 1",
  description:
    "JNK Chemdist participated in ChemTECH World Expo 2024, an international exhibition and conference bringing together companies and professionals from the chemical, petrochemical and process engineering industries.",
  image: "/images/events/chemtech-world-expo-2024.png",
  imageAlt: "JNK Chemdist at ChemTECH World Expo 2024, Mumbai",
},
{
  id: "ifat-india-2023",
  title: "IFAT India 2023, Mumbai",
  category: "Environmental Exhibition",
  date: "17 – 19 October 2023",
  location: "Mumbai, India",
  venue: "Bombay Exhibition Centre",
  stand: "D035 | Hall 1",
  description:
    "JNK Chemdist participated in IFAT India 2023, engaging with the water, sewage, solid waste and recycling industries through one of India's leading environmental technology exhibitions.",
  image: "/images/events/ifat-india-2023.png",
  imageAlt: "JNK Chemdist at IFAT India 2023, Mumbai",
},
{
  id: "ipec-2023",
  title: "IPEC 2023 Exhibition, Hyderabad",
  category: "Process Engineering Exhibition",
  date: "18 – 21 August 2023",
  location: "Hyderabad, India",
  venue: "HITEX Exhibition Centre",
  stand: "2A12 | Hall 2",
  description:
    "JNK Chemdist participated in IPEC 2023, a pan-India process engineering exhibition and conference bringing together engineering companies and industry professionals to explore advancements in process technologies.",
  image: "/images/events/ipec-2023.png",
  imageAlt: "JNK Chemdist at IPEC 2023, Hyderabad",
},
{
  id: "industrial-expo-2022",
  title: "Dahej Industrial Expo 2022, Gujarat",
  category: "Industrial Exhibition",
  date: "15 – 17 November 2022",
  location: "Dahej, Gujarat, India",
  venue: "Dahej GIDC",
  stand: "C72 | Hall 2",
  description:
    "JNK Chemdist participated in the 2nd Industrial Expo 2022 at Dahej, Gujarat, connecting with industrial businesses and showcasing its engineering and process technology capabilities.",
  image: "/images/events/industrial-expo-2022.png",
  imageAlt: "JNK Chemdist at Dahej Industrial Expo 2022, Gujarat",
},
{
  id: "chemtech-world-expo-2022",
  title: "ChemTECH World Expo 2022, Mumbai",
  category: "Industrial Exhibition",
  date: "8 – 11 June 2022",
  location: "Mumbai, India",
  venue: "Jio World Convention Centre",
  stand: "A-6",
  description:
    "JNK Chemdist participated in the 30th International Exhibition and Conference of ChemTECH World Expo 2022, connecting with the chemicals, petrochemicals and process industry in India.",
  image: "/images/events/chemtech-world-expo-2022.png",
  imageAlt: "JNK Chemdist at ChemTECH World Expo 2022, Mumbai",
},
];