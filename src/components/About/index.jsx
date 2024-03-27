import Image from "next/image";
import styles from "./About.module.scss";
import gifImg from "../../assets/code2.gif";

import { LanguageContext } from "./../../Providers/languages/index";
import { useContext } from "react";
export default function AboutMe() {
  const { language } = useContext(LanguageContext);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.containerTitle}>
          <h1>{language ? "About me" : "Sobre mim"}</h1>
          <h3>
            {language
              ? `Passionate technology enthusiast FullStack Developer specialized in Front-End and emerging technologies. Experienced in web and mobile projects.
              I keep myself constantly updated, seeking to learn and stay abreast of the latest market trends in Javascript, React.js, Next.js, Typescript, Node.js/Express, MySQL, Sass, Git, Github, Expo, and Tailwind, among other modern technologies.
              Deepening my knowledge in Node.js and Express to enhance backend skills and create comprehensive APIs, efficiently integrating front-end and back-end.`
              : "Desenvolvedor FullStack apaixonado por tecnologia, especializado em Front-End. Experiente em projetos web e mobile. Mantenho-me constantemente atualizado, buscando aprender e acompanhar as últimas tendências do mercado em Javascript, React.js, Next.js, Typescript, Node.js/Express, MySQL, Sass, Git, Github, Expo e Tailwind, entre outras tecnologias modernas. Aprofundando meus conhecimentos em Node.js e Express para aprimorar habilidades no backend e criar APIs abrangentes, integrando eficientemente front-end e back-end."}
          </h3>
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
