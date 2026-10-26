
export type GlobalPoint = {
  id: string;
  name: string;
  city: string;
  summary: string;
  coordinates: [number, number]; // [longitude, latitude]
};

export type GlobalOffice = GlobalPoint & {
  type: "office";
  capabilities: string[];
};

export type GlobalProject = GlobalPoint & {
  type: "project";
  industry: string;
  status: "completed" | "ongoing";
};

export type GlobalLocation = {
  id: string;
  country: string;
  countryCode: string;
  region: string;
  city: string;
  summary: string;
  capabilities: string[];
  coordinates: [number, number];
  offices: GlobalOffice[];
  projects: GlobalProject[];
};

/**
 * Global Presence content.
 * Project and office entries below are mock data for UI development.
 * Replace mock entries with verified Chemdist information before launch.
 *
 * Coordinates use [longitude, latitude].
 * Country codes follow ISO 3166-1 alpha-2.
 */
export const globalPresenceLocations: GlobalLocation[] = [
  {
    id: "india",
    country: "India",
    countryCode: "IN",
    region: "Asia Pacific",
    city: "Pune · Mundra",
    summary: "Corporate, R&D, engineering and manufacturing.",
    capabilities: ["Corporate", "R&D", "Engineering", "Manufacturing"],
    coordinates: [78.9629, 20.5937],

    offices: [
      {
        id: "india-pune-office",
        type: "office",
        name: "Corporate & R&D Office",
        city: "Pune",
        summary: "Corporate operations, research and engineering.",
        capabilities: ["Corporate", "R&D", "Engineering"],
        coordinates: [73.8567, 18.5204],
      },
      {
        id: "india-mundra-facility",
        type: "office",
        name: "Mundra Manufacturing Facility",
        city: "Mundra",
        summary: "Manufacturing and industrial operations.",
        capabilities: ["Manufacturing", "Industrial Operations"],
        coordinates: [69.7197, 22.8394],
      },
    ],

    projects: [
      {
        id: "india-green-hydrogen",
        type: "project",
        name: "Green Hydrogen Production Facility",
        city: "Mundra",
        summary: "Conceptual project for green hydrogen production and processing.",
        industry: "Hydrogen & New Energy",
        status: "ongoing",
        coordinates: [69.721, 22.842],
      },
      {
        id: "india-chemical-processing",
        type: "project",
        name: "Chemical Processing Plant",
        city: "Dahej",
        summary: "Mock industrial project for chemical processing infrastructure.",
        industry: "Chemicals & Petrochemicals",
        status: "completed",
        coordinates: [72.6266, 21.7051],
      },
      {
        id: "india-industrial-gases",
        type: "project",
        name: "Industrial Gas Processing Unit",
        city: "Mumbai",
        summary: "Mock project for industrial gas processing and handling.",
        industry: "Industrial Gases",
        status: "completed",
        coordinates: [72.8777, 19.076],
      },
    ],
  },

  {
    id: "united-states",
    country: "United States",
    countryCode: "US",
    region: "North America",
    city: "New Jersey",
    summary: "Business development, customer interface and support.",
    capabilities: [
      "Business development",
      "Customer interface",
      "Customer support",
    ],
    coordinates: [-74.4057, 40.0583],

    offices: [
      {
        id: "us-new-jersey-office",
        type: "office",
        name: "North America Office",
        city: "New Jersey",
        summary: "Regional business development and customer support.",
        capabilities: [
          "Business development",
          "Customer interface",
          "Customer support",
        ],
        coordinates: [-74.4057, 40.0583],
      },
    ],

    projects: [
      {
        id: "us-chemical-engineering",
        type: "project",
        name: "Chemical Engineering Facility",
        city: "Newark",
        summary: "Mock project for chemical engineering and process infrastructure.",
        industry: "Chemicals",
        status: "completed",
        coordinates: [-74.1724, 40.7357],
      },
      {
        id: "us-energy-transition",
        type: "project",
        name: "Clean Energy Process Facility",
        city: "Trenton",
        summary: "Mock project focused on low-carbon industrial processes.",
        industry: "Energy & Sustainability",
        status: "ongoing",
        coordinates: [-74.7429, 40.2171],
      },
    ],
  },

  {
    id: "saudi-arabia",
    country: "Saudi Arabia",
    countryCode: "SA",
    region: "Middle East",
    city: "Saudi Arabia",
    summary: "Regional business development and customer support.",
    capabilities: [
      "Business development",
      "Customer interface",
      "Customer support",
    ],
    coordinates: [45.0792, 23.8859],

    offices: [
      {
        id: "saudi-riyadh-office",
        type: "office",
        name: "Regional Business Office",
        city: "Riyadh",
        summary: "Regional customer relationships and business development.",
        capabilities: ["Business development", "Customer support"],
        coordinates: [46.6753, 24.7136],
      },
    ],

    projects: [
      {
        id: "saudi-petrochemical",
        type: "project",
        name: "Petrochemical Processing Complex",
        city: "Jubail",
        summary: "Mock project for petrochemical processing infrastructure.",
        industry: "Petrochemicals",
        status: "completed",
        coordinates: [49.6583, 27.0046],
      },
      {
        id: "saudi-hydrogen",
        type: "project",
        name: "Hydrogen & Ammonia Facility",
        city: "Yanbu",
        summary: "Mock project for hydrogen and ammonia production infrastructure.",
        industry: "Hydrogen & New Energy",
        status: "ongoing",
        coordinates: [38.0618, 24.0895],
      },
      {
        id: "saudi-industrial-water",
        type: "project",
        name: "Industrial Water Treatment Plant",
        city: "Dammam",
        summary: "Mock project for industrial water treatment and utilities.",
        industry: "Water & Utilities",
        status: "completed",
        coordinates: [50.1033, 26.4207],
      },
    ],
  },

  {
    id: "germany",
    country: "Germany",
    countryCode: "DE",
    region: "Europe",
    city: "Germany",
    summary: "Technology partnerships, hydrogen and new energy.",
    capabilities: [
      "Technology partnerships",
      "Hydrogen",
      "New energy",
    ],
    coordinates: [10.4515, 51.1657],

    offices: [
      {
        id: "germany-munich-office",
        type: "office",
        name: "Technology Partnerships Office",
        city: "Munich",
        summary: "Technology collaboration and industrial innovation.",
        capabilities: [
          "Technology partnerships",
          "Engineering",
          "Innovation",
        ],
        coordinates: [11.582, 48.1351],
      },
    ],

    projects: [
      {
        id: "germany-hydrogen",
        type: "project",
        name: "Hydrogen Technology Demonstrator",
        city: "Hamburg",
        summary: "Mock demonstration project for hydrogen technologies.",
        industry: "Hydrogen & New Energy",
        status: "ongoing",
        coordinates: [9.9937, 53.5511],
      },
      {
        id: "germany-process-automation",
        type: "project",
        name: "Advanced Process Engineering Facility",
        city: "Frankfurt",
        summary: "Mock project for process engineering and industrial automation.",
        industry: "Industrial Technology",
        status: "completed",
        coordinates: [8.6821, 50.1109],
      },
    ],
  },

  {
    id: "south-korea",
    country: "South Korea",
    countryCode: "KR",
    region: "East Asia",
    city: "South Korea",
    summary: "Global network and international EPC capabilities.",
    capabilities: ["Global network", "International EPC"],
    coordinates: [127.7669, 35.9078],

    offices: [
      {
        id: "korea-seoul-office",
        type: "office",
        name: "East Asia Office",
        city: "Seoul",
        summary: "Regional coordination and international EPC partnerships.",
        capabilities: [
          "International EPC",
          "Business development",
          "Partnerships",
        ],
        coordinates: [126.978, 37.5665],
      },
    ],

    projects: [
      {
        id: "korea-industrial-plant",
        type: "project",
        name: "Industrial Process Plant",
        city: "Ulsan",
        summary: "Mock project for industrial process infrastructure.",
        industry: "Industrial Manufacturing",
        status: "completed",
        coordinates: [129.3114, 35.5384],
      },
      {
        id: "korea-clean-energy",
        type: "project",
        name: "Clean Energy Process Facility",
        city: "Busan",
        summary: "Mock project for clean energy process technologies.",
        industry: "Energy & Sustainability",
        status: "ongoing",
        coordinates: [129.0756, 35.1796],
      },
    ],
  },

  {
    id: "japan",
    country: "Japan",
    countryCode: "JP",
    region: "East Asia",
    city: "Japan",
    summary: "Business development, customer interface and support.",
    capabilities: [
      "Business development",
      "Customer interface",
      "Customer support",
    ],
    coordinates: [138.2529, 36.2048],

    offices: [
      {
        id: "japan-tokyo-office",
        type: "office",
        name: "Japan Business Office",
        city: "Tokyo",
        summary: "Customer engagement and regional business development.",
        capabilities: [
          "Business development",
          "Customer interface",
          "Customer support",
        ],
        coordinates: [139.6917, 35.6895],
      },
    ],

    projects: [
      {
        id: "japan-hydrogen",
        type: "project",
        name: "Hydrogen Process Demonstrator",
        city: "Kawasaki",
        summary: "Mock project for hydrogen process technology development.",
        industry: "Hydrogen & New Energy",
        status: "ongoing",
        coordinates: [139.7016, 35.5308],
      },
      {
        id: "japan-chemical-facility",
        type: "project",
        name: "Chemical Process Engineering Facility",
        city: "Osaka",
        summary: "Mock project for chemical process engineering.",
        industry: "Chemicals",
        status: "completed",
        coordinates: [135.5023, 34.6937],
      },
    ],
  },
];
