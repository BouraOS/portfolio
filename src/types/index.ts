// import { IconType } from "react-icons";

export interface NavItem {
  label: string;
  path: string;
  // icon: IconType;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  technologies: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

export interface Service {
  Icon: string;
  Title: string;
  Description: string;
}
