export type CaseStudySection = {
  heading: string;
  body: string[];
};

export type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  year: string;
  tags: string[];
  intro: string;
  videoUrl?: string;
  sections: CaseStudySection[];
  visualSlots: {
    afterSection: string;
    caption: string;
    aspectRatio?: "wide" | "square" | "tall";
    src?: string;
    objectPosition?: string;
  }[];
};
