import type { IconType } from "react-icons";

export type NavLink = {
  _id: string;
  title: string;
  link: string;
  icon?: IconType;
};

export type Feature = {
  id: number;
  title: string;
  des: string;
  Icon?: IconType;
};

export type Project = {
  id: number;
  title: string;
  shortDes: string;
  description: string;
  images: string[];
  videos?: string[];
  videoPosters?: string[];

  // extra meta info
  role?: string;
  company?: string;

  // project details
  features?: string[];
  techStack: string[];

  // links
  githubLink?: string;
  demoLinks?: string[];
  technicalHighlights: string[];
};

export type Education = {
  id: number;
  degree: string;
  school: string;
  period: string;
  location?: string;
  description?: string;
};
