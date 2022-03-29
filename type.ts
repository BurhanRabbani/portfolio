export interface IService {
  id: number;
  title: string;
  icon: string;
  description: string;
}

export interface ISkill {
  id: number;
  name: string;
  level: string;
  icon: string;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  image: string;
  url: string;
  github: string;
  tags: string[];
  category: Category[];
}

export type Category =
  | "react"
  | "next"
  | "node"
  | "express"
  | "django"
  | "mongo";
