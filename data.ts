import { SiWeb3Dotjs, SiReact } from "react-icons/si";
import { IProject, IService, ISkill } from "./type";
import { GiReceiveMoney, GiGoldMine, GiChart } from "react-icons/gi";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    title: "Web3 Developer",
    about:
      "I can build Dapps with both backend solidity contracts and React.js frontend.",
    Icon: SiWeb3Dotjs,
  },
  {
    title: "Front End Developer",
    about:
      "I can build websites using Typescript, React.js and Tailwind/Styled Components.",
    Icon: SiReact,
  },
  {
    title: "Defi Degen",
    about:
      "I have created a portfolio taking advantage of defi protocols to generate a high return.",
    Icon: GiReceiveMoney,
  },
  {
    title: "MEV Specialist",
    about:
      "I use MEV techniques to find trading strategies by frontrunning, and using AMM arbitrage.",
    Icon: GiGoldMine,
  },
  {
    title: "Data/ Financial Analyst",
    about:
      "I analyze data using Pandas to determine Trends and opportunities in Cryptocurrency.",
    Icon: GiChart,
  },
  {
    title: "Crypto Consultant",
    about:
      "I teach and advise individuals and organizations regarding the Cryptocurrency Industry",
    Icon: HiOutlinePresentationChartLine,
  },
];

export const Languages: ISkill[] = [
  {
    name: "Python",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Javascript",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "React",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Solidity",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "SQL",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "GoLang",
    level: "10%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "Hardhat",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Truffle",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Git",
    level: "80%",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    name: "Movie Database",
    description:
      "This is a IMDB clone created with Typescript and react as part of a React tutorial.",
    imagePath: "/images/movieProject.png",
    githubUrl: "https://github.com/ie2173/MovieDbTutorial",
    deployedUrl: "https://jolly-goldberg-155a72.netlify.app/",
    category: ["React"],
    lang: ["React", "Javascript"],
  },
];
