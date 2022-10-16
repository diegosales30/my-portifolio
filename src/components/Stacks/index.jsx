import Image from "next/image";
import styles from "./Technology.module.scss";
import gifImg from "../../assets/code2.gif";
import {
  SiChakraui,
  SiCss3,
  SiElectron,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
  SiStyledcomponents,
} from "react-icons/si";
import { SiMaterialui, SiNodedotjs, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaSass, FaGulp } from "react-icons/fa";

const stackObg = [
  {
    icon: <SiHtml5 />,
    text: "Html",
  },
  {
    icon: <SiCss3 />,
    text: "Css",
  },
  {
    icon: <SiJavascript />,
    text: "Js",
  },
  {
    icon: <SiReact />,
    text: "ReactJs",
  },
  {
    icon: <SiTypescript />,
    text: "Ts",
  },
  {
    icon: <TbBrandNextjs />,
    text: "NextJs",
  },
  {
    icon: <SiRedux />,
    text: "Redux",
  },
  {
    icon: <SiElectron />,
    text: "ContextAPI",
  },
  {
    icon: <SiGithub />,
    text: "Git/Github",
  },
  {
    icon: <SiStyledcomponents />,
    text: "Styled",
  },
  {
    icon: <SiChakraui />,
    text: "ChakraUI",
  },
  {
    icon: <FaSass />,
    text: "Sass",
  },
];

import { LanguageContext } from "./../../Providers/languages/index";
import { useContext } from "react";
export default function TechnologyPage() {
  const { language } = useContext(LanguageContext);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.containerTitle}>
          <h1>{language ? "Technology" : "Tecnologias"}</h1>
          <section className={styles.containerStack}>
            <div className={styles.boxStack}>
              {stackObg.map((icon) => (
                <p key={icon.icon}>{icon.icon}</p>
              ))}
              {/* <SiHtml5 size={"7em"} color={"#f5612d"} />
              <h4>HTML</h4> */}
            </div>
          </section>
        </div>
        <div className={styles.containerImg}>
          <span>
            <Image src={gifImg} alt="Vercel Logo" width={480} height={360} />
          </span>
        </div>
      </main>
    </div>
  );
}
