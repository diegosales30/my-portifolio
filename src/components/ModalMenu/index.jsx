import styles from "./styles.module.scss";
import { LanguageContext } from "./../../Providers/languages/index";
import { useContext } from "react";

import { ModalContext } from "./../../Providers/modal/index";

const ModalMenu = () => {
  const { language } = useContext(LanguageContext);
  const { open } = useContext(ModalContext);

  return (
    <div>
      {open ? (
        <ul className={styles.menu}>
          <li>{language ? "Home" : "Inicio"}</li>
          <li>{language ? "About" : "Sobre"}</li>
          <li> {language ? "Technology" : "Tecnologia"}</li>
          <li> {language ? "Project" : "Projeto"} </li>
        </ul>
      ) : null}
    </div>
  );
};

export default ModalMenu;
