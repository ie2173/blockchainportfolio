import { IconType } from "react-icons/lib";

export interface IService {
  title: string;
  about: string;
  Icon: IconType;
}

export interface ISkill {
  name: string;
  level: string;
  Icon: IconType;
}

export interface IProject {
  name: string;
  description: string;
  imagePath: string;
  deployedUrl?: string;
  githubUrl: string;
  category: category[];
  lang: string[];
}

export type category = "React" | "Solidity" | "Python";
