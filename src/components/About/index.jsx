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
              ? "Welcome. My name is Diego Sales and I'm a Front-end developer. I'm from Manaus-AM. I am a nature lover and enthusiast of environmental preservation. I'm passionate about technology and programming and I'm always looking for new opportunities to improve my knowledge. I really enjoy learning new technologies, but I also enjoy playing guitar with friends. I'm a Front-end React developer and I'm studying Nodejs to become a full-stack developer."
              : "Seja bem-vindo. Me chamo Diego Sales e sou um desenvolvedor Front-end. Sou natural de Manaus-AM. Sou Amante da natureza e entusiasta da preservação do meio ambiente. Sou apaixonado por tecnologia e por programação e estou sempre em busca de novas oportunidades para aprimorar meus conhecimentos. Gosto muito de aprender novas tecnologias, mas também gosto de fazer um som de violão com os amigos. Sou desenvolvedor Front-end React e estou estudando Nodejs para me tornar um desenvolvedor Full-stack."}
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
