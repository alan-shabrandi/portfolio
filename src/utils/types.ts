import type { IconType } from "react-icons";

export type NavLink = {
  _id: string;
  title: string;
  link: string;
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
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
};

export type Education = {
  id: number;
  degree: string;
  school: string;
  period: string;
  location?: string;
  description?: string;
};
