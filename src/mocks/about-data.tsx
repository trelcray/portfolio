import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaCss3,
  FaDocker,
  FaFigma,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiEslint,
  SiExpo,
  SiFramer,
  SiGithub,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiPrettier,
  SiReacthookform,
  SiReactquery,
  SiRedux,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
} from "react-icons/si";
import {
  TbBrandMantine,
  TbBrandRadixUi,
  TbBrandReactNative,
  TbSql,
} from "react-icons/tb";

interface IAboutDataprops {
  title: string;
  info: {
    title: string;
    icons?: {
      icon: React.ReactNode;
      title: string;
    }[];
    stage?: string;
    stage2?: string;
  }[];
}

export const aboutData: IAboutDataprops[] = [
  {
    title: "skills",
    info: [
      {
        title: "Languages",
        icons: [
          { icon: <SiJavascript />, title: "JavaScript" },
          { icon: <SiTypescript />, title: "TypeScript" },
        ],
      },
      {
        title: "Front-end Development",
        icons: [
          { icon: <FaReact />, title: "React.js" },
          { icon: <SiNextdotjs />, title: "Next.js" },
          { icon: <FaHtml5 />, title: "HTML5" },
          { icon: <FaCss3 />, title: "CSS3" },
          { icon: <SiTailwindcss />, title: "Tailwind CSS" },
          { icon: <SiStyledcomponents />, title: "Styled Components" },
          { icon: <SiSass />, title: "Sass" },
          { icon: <SiBootstrap />, title: "Bootstrap" },
        ],
      },
      {
        title: "Back-end Development",
        icons: [
          { icon: <FaNodeJs />, title: "Node.js" },
          { icon: <SiMongodb />, title: "MongoDB" },
          { icon: <BiLogoPostgresql />, title: "PostgreSQL" },
          { icon: <TbSql />, title: "SQL" },
          { icon: <FaDocker />, title: "Docker" },
        ],
      },
      {
        title: "Mobile App Development",
        icons: [
          { icon: <TbBrandReactNative />, title: "React Native" },
          { icon: <SiExpo />, title: "Expo" },
        ],
      },
      {
        title: "UI Libraries/Frameworks",
        icons: [
          { icon: <SiMui />, title: "Material Ui" },
          { icon: <TbBrandMantine />, title: "Mantine Ui" },
          { icon: <TbBrandRadixUi />, title: "Radix Ui" },
          { icon: <SiFramer />, title: "Framer Motion" },
        ],
      },
      {
        title: "State Management",
        icons: [
          { icon: <SiRedux />, title: "Redux" },
          { icon: <SiReactquery />, title: "React Query" },
          { icon: <SiReacthookform />, title: "React Hook Form" },
        ],
      },
      {
        title: "Testing and Quality",
        icons: [
          { icon: <SiJest />, title: "Jest" },
          { icon: <SiTestinglibrary />, title: "Testing Library" },
          { icon: <SiEslint />, title: "ESlint" },
          { icon: <SiPrettier />, title: "Prettier" },
        ],
      },
      {
        title: "Version Control",
        icons: [{ icon: <SiGithub />, title: "Github" }],
      },
      {
        title: "UI/UX Design",
        icons: [{ icon: <FaFigma />, title: "Figma" }],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "14th Scientific and Technological Initiation Journey - Honoree",
        stage: "2021",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Web Developer - FAPERGS",
        stage: "2020 - 2022",
      },
      {
        title: "Web Developer - Solutions Zeno",
        stage: "2023 - Current",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title:
          "Technology in systems analysis and development - The federal institute of education, Brazil, RS",
        stage: "2019",
        stage2: "2022",
      },
      {
        title:
          "Complete Modern Web Course with JavaScript 2022 + Projects, Udemy",
        stage: "2022",
      },
      {
        title: "Complete Course on Interface Design, Udemy",
        stage: "2022",
      },
    ],
  },
];
