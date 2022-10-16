import styles from "./Project.module.scss";

import { LanguageContext } from "./../../Providers/languages/index";
import { useContext } from "react";
import { SiGithub } from "react-icons/si";

import SwiperComponent from "./../Swiper/index";

const ProjetcPage = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className={styles.container}>
      <section className={styles.containerProject}>
        <h1>{language ? "Projects" : "Projetos"}</h1>
        <SwiperComponent />
        <a
          href="https://github.com/diegosales30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub />

          <p>{language ? "go to Github" : "ir para Github"}</p>
        </a>
      </section>
    </div>
  );
};

export default ProjetcPage;
