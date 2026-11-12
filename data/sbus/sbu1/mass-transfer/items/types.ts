
export type MassTransferDefinition = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  overview: string;
  capabilities: string[];
  products: {
    name: string;
    category: string;
    description: string;
  }[];
  applications: string[];
  specifications: {
    name: string;
    value: string;
  }[];
  processSteps: {
    title: string;
    description: string;
    output: string;
  }[];
};
