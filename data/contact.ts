export interface ContactOffice {
  id: string;
  title: string;
  company: string;
  addressLines: string[];
  phones: string[];
  email: string;
  note?: string;
  mapUrl?: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export const contactPageData = {
  hero: {
    heading: "Contact Us",
    eyebrow: "GET IN TOUCH",
    description:
      "Tell us about your requirement and our team will get back to you with the right solution.",
    image: "/images/contact/contact-hero.png",
    imageAlt: "Chemdist Group corporate office",
  },

  form: {
    eyebrow: "SEND AN ENQUIRY",
    before: "Let's talk about what you",
    highlight: "need",
    after: ".",
    description:
      "Share a few details and the right person from our team will respond. The more you tell us about your query, the faster we can help.",
    points: [
      "Product and technical enquiries",
      "Partnerships and distribution",
      "Support and service requests",
    ],
    submitLabel: "Submit enquiry",
    endpoint: "/api/contact",
    successMessage: "Thank you. We have received your enquiry and will contact you shortly.",
    countryCodes: [
      { value: "+91", label: "+91 (IN)" },
      { value: "+1", label: "+1 (US)" },
      { value: "+44", label: "+44 (UK)" },
      { value: "+971", label: "+971 (AE)" },
      { value: "+65", label: "+65 (SG)" },
    ] as SelectOption[],
    countries: [
      { value: "India", label: "India" },
      { value: "United States", label: "United States" },
      { value: "United Kingdom", label: "United Kingdom" },
      { value: "United Arab Emirates", label: "United Arab Emirates" },
      { value: "Singapore", label: "Singapore" },
      { value: "Other", label: "Other" },
    ] as SelectOption[],
    roles: [
      { value: "customer", label: "Customer" },
      { value: "investor", label: "Investor or Analyst" },
      { value: "media", label: "Media Representative" },
      { value: "government-official", label: "Government Official" },
      { value: "job-seeker", label: "Job seeker" },
      { value: "vendor", label: "Vendor" },
      { value: "other", label: "Other" },
    ] as SelectOption[],
  },

  headquarters: {
    heading: "Headquarters",
    company: "Chemdist Group",
    addressLines: [
      "Chemdist House,",
      "00 Sample Road, Wakdewadi,",
      "Pune 411003, Maharashtra, India",
    ],
    image: "/images/contact/headquarters.png",
    imageAlt: "Chemdist Group headquarters building in Pune",
    support: {
      heading: "For customer support & general enquiries",
      tollFree: { label: "Toll free", value: "1800-000-0000", href: "tel:18000000000" },
      email: {
        label: "Email",
        value: "customer.support@chemdist.com",
        href: "mailto:customer.support@chemdist.com",
      },
    },
  },

  offices: {
    eyebrow: "OUR OFFICES",
    heading: "Find us close to you",
    description: "Visit or write to the office nearest to you.",
    items: [
      {
        id: "india-hq",
        title: "India (Headquarters)",
        company: "Chemdist Group",
        addressLines: ["Chemdist House", "00 Sample Road, Wakdewadi", "Pune 411003, Maharashtra", "India"],
        phones: ["+91 20 0000 0000", "+91 20 0000 0001"],
        email: "enquiry@chemdist.com",
        mapUrl: "https://maps.google.com",
      },
      {
        id: "india-registered",
        title: "India (Registered Office)",
        company: "Chemdist Group",
        addressLines: ["Plot No. 00, MIDC Industrial Area", "Chinchwad, Pune 411019", "Maharashtra, India"],
        phones: ["+91 20 0000 0002"],
        email: "enquiry@chemdist.com",
        mapUrl: "https://maps.google.com",
      },
      {
        id: "west-india",
        title: "West India (Mumbai)",
        company: "Chemdist Group",
        addressLines: ["Unit 000, Sample Business Park", "Andheri East, Mumbai 400059", "Maharashtra, India"],
        phones: ["+91 22 0000 0000"],
        email: "enquiry@chemdist.com",
        note: "Sales and regional support",
      },
    ] as ContactOffice[],
  },
};