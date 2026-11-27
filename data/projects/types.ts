export interface ProjectDetails {
  location?: string;
  plant?: string;
  capacity?: string;
  yearOfAward?: string;
  yearOfCompletion?: string;
  contractValue?: string;
  executionScope?: string;
}

export interface ProjectData {
  id: string;
  category: string;
  details?: ProjectDetails;

  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    image: string;
    imageAlt: string;
  };

  overview: {
    heading: {
      before: string;
      highlight?: string;
      after: string;
    };
    description: string;
    image?: string;
    imageAlt?: string;
  };

  problem: {
    eyebrow: string;
    heading: string;
    description: string;
    image?: string;
    imageAlt?: string;
  };

  solution: {
    eyebrow: string;
    heading: string;
    description: string;
    image?: string;
    imageAlt?: string;
    points: string[];
  };

  result: {
    eyebrow: string;
    heading: string;
    description: string;
    points: string[];
  };
}