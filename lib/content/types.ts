export type ResearchArea = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  relatedPublicationTitles?: string[];
  image: string;
};

export type ProfileEntry = {
  period: string;
  title: string;
  institution: string;
  location?: string;
  detail?: string;
  detailLinks?: ProfileLink[];
};

export type ProfileLink = {
  label: string;
  href: string;
};

export type ProfileHonor = {
  year: string;
  title: string;
  chineseTitle?: string;
  highlight?: boolean;
};

export type Member = {
  name: string;
  chineseName?: string;
  role: string;
  group: "Principal Investigator" | "Postdocs" | "Graduate Students" | "Undergraduate Students" | "Researchers" | "Alumni";
  bio: string;
  email?: string;
  image?: string;
  links?: ProfileLink[];
  careerSummary?: ProfileEntry[];
  profileHref?: string;
  isOpenPosition?: boolean;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  url?: string;
  coFirstAuthors?: string[];
  correspondingAuthors?: string[];
  preprint: boolean;
  highlighted: boolean;
};

export type PaperSpotlight = {
  publication: Publication;
  image: string;
};

export type NewsItem = {
  title: string;
  date: string;
  summary: string;
  category: "Lab" | "Publication" | "Opening" | "Conference" | "Award";
  link?: string;
  image?: string;
  imageVariant?: "wide" | "side";
};

export type ContactInfo = {
  institution: string;
  address: string;
  email: string;
  joinText: string;
  applicationSections: {
    title: string;
    description: string;
    materials: string[];
  }[];
};
