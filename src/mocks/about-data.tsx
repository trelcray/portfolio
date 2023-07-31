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
    icons?: React.ReactNode[];
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
        icons: [<SiJavascript key="js" />, <SiTypescript key="ts" />],
      },
      {
        title: "Front-end Development",
        icons: [
          <FaReact key="react" />,
          <SiNextdotjs key="next" />,
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <SiTailwindcss key="tailwindcss" />,
          <SiStyledcomponents key="styled-components" />,
          <SiSass key="sass" />,
          <SiBootstrap key="bootstrap" />,
        ],
      },
      {
        title: "Back-end Development",
        icons: [
          <FaNodeJs key="node" />,
          <SiMongodb key="mongodb" />,
          <BiLogoPostgresql key="postgresql" />,
          <TbSql key="sql" />,
          <FaDocker key="docker" />,
        ],
      },
      {
        title: "Mobile App Development",
        icons: [
          <TbBrandReactNative key="react-native" />,
          <SiExpo key="expo" />,
        ],
      },
      {
        title: "UI Libraries/Frameworks",
        icons: [
          <SiMui key="mui" />,
          <TbBrandMantine key="mantine" />,
          <TbBrandRadixUi key="radixui" />,
          <SiFramer key="framer" />,
        ],
      },
      {
        title: "State Management",
        icons: [
          <SiRedux key="redux" />,
          <SiReactquery key="react-query" />,
          <SiReacthookform key="react-hook-form" />,
        ],
      },
      {
        title: "Testing and Quality",
        icons: [
          <SiJest key="jest" />,
          <SiTestinglibrary key="testing-library" />,
          <SiEslint key="eslint" />,
          <SiPrettier key="prettier" />,
        ],
      },
      {
        title: "Version Control",
        icons: [<SiGithub key="github" />],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma key="figma" />],
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
