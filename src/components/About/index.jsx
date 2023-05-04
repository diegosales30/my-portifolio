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
              ? "Hello, welcome! My name is Diego Sales and I work as a Front-end developer. I'm originally from Manaus, Amazonas and I have a great appreciation for nature, being an enthusiast of environmental preservation. In addition, I'm passionate about technology and programming, always seeking new opportunities to expand my knowledge in this area. I love learning new technologies, but I also enjoy playing the guitar with friends. Currently, I work as a React Front-end developer and I'm studying Node.js to become a Full-stack developer."
              : "Olá, seja bem-vindo! Meu nome é Diego Sales e atuo como desenvolvedor Front-end. Sou natural de Manaus, Amazonas e tenho grande apreço pela natureza, sendo um entusiasta da preservação do meio ambiente. Além disso, sou apaixonado por tecnologia e programação, buscando sempre novas oportunidades para expandir meus conhecimentos nessa área. Adoro aprender novas tecnologias, mas também gosto de tocar violão com amigos. Atualmente, trabalho como desenvolvedor Front-end React e estou estudando Node.js para me tornar um desenvolvedor Full-stack."}
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
