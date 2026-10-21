export type GlobalLocation = {
  id: string;
  country: string;
  countryCode: string;
  region: string;
  city: string;
  summary: string;
  capabilities: string[];
  coordinates: [number, number]; // [longitude, latitude]
};

/**
 * Content for the Global Presence section.
 * Update this file to add/edit locations without changing the UI component.
 * ISO 3166-1 alpha-2 codes are used by amCharts worldLow geodata (e.g. IN, US).
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
  },
  {
    id: "united-states",
    country: "United States",
    countryCode: "US",
    region: "North America",
    city: "New Jersey",
    summary: "Business development, customer interface and support.",
    capabilities: ["Business development", "Customer interface", "Customer support"],
    coordinates: [-74.4057, 40.0583],
  },
  {
    id: "saudi-arabia",
    country: "Saudi Arabia",
    countryCode: "SA",
    region: "Middle East",
    city: "Saudi Arabia",
    summary: "Regional business development and customer support.",
    capabilities: ["Business development", "Customer interface", "Customer support"],
    coordinates: [45.0792, 23.8859],
  },
  {
    id: "germany",
    country: "Germany",
    countryCode: "DE",
    region: "Europe",
    city: "Germany",
    summary: "Technology partnerships, hydrogen and new energy.",
    capabilities: ["Technology partnerships", "Hydrogen", "New energy"],
    coordinates: [10.4515, 51.1657],
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
  },
  {
    id: "japan",
    country: "Japan",
    countryCode: "JP",
    region: "East Asia",
    city: "Japan",
    summary: "Business development, customer interface and support.",
    capabilities: ["Business development", "Customer interface", "Customer support"],
    coordinates: [138.2529, 36.2048],
  },
];
