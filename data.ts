import {SiWeb3Dotjs, SiReact} from 'react-icons/si'
import { IService } from './type'
import { GiReceiveMoney, GiGoldMine, GiChart } from 'react-icons/gi'
import {HiOutlinePresentationChartLine} from 'react-icons/hi'



export const services: IService[] = [

    {
        title: "Web3 Developer",
        about: "I can build Dapps with both backend solidity contracts and React.js frontend.",
        Icon: SiWeb3Dotjs
    },
    {
        title: "Front End Developer",
        about: "I can build websites using Typescript, React.js and Tailwind/Styled Components.",
        Icon: SiReact
    },
    {
        title: "Defi Degen",
        about: "I have created a portfolio taking advantage of defi protocols to generate a high return.",
        Icon: GiReceiveMoney
    },
    {
        title: "MEV Specialist",
        about: "I use MEV techniques to find trading strategies by frontrunning, and using AMM arbitrage.",
        Icon: GiGoldMine
    },
    {
        title: "Data/ Financial Analyst",
        about: "I analyze data using Pandas to determine Trends and opportunities in Cryptocurrency.",
        Icon: GiChart
    },
    {
        title: "Crypto Consultant",
        about: "I teach and advise individuals and organizations regarding the Cryptocurrency Industry",
        Icon: HiOutlinePresentationChartLine

    },

]