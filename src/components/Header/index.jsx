import styles from "./Header.module.scss";

import { LanguageContext } from "./../../Providers/languages/index";
import { useContext } from "react";
import MenuHamburguer from "../MenuHamburguer";
import ModalMenu from "../ModalMenu";

const Header = () => {
  const { language, translate } = useContext(LanguageContext);

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <ul className={styles.menufirst}>
          <li>{language ? "Home" : "Inicio"}</li>
          <li>{language ? "About" : "Sobre"}</li>
          <li> {language ? "Technology" : "Tecnologia"}</li>
          <li> {language ? "Project" : "Projeto"} </li>
        </ul>
        <div className={styles.model}>
          <MenuHamburguer />
        </div>

        <ul className={styles.menusecond}>
          <li> {language ? "Contact" : "Contato"}</li>
          <button onClick={translate}>{language ? "🇺🇸" : "🇧🇷"}</button>
        </ul>
      </div>
      <ModalMenu />
    </div>
  );
};

export default Header;
