import styles from "./Header.module.scss";
import Link from "next/link";
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
          <Link href="/">
            <li>{language ? "Home" : "Inicio"}</li>
          </Link>

          <Link href="/about">
            <li>{language ? "About" : "Sobre"}</li>
          </Link>

          <Link href="/technology">
            <li> {language ? "Technology" : "Tecnologia"}</li>
          </Link>

          <Link href="/project">
            <li> {language ? "Project" : "Projeto"} </li>
          </Link>
        </ul>
        <div className={styles.model}>
          <MenuHamburguer />
        </div>

        <ul className={styles.menusecond}>
          <Link href="/contact">
            <li> {language ? "Contact" : "Contato"}</li>
          </Link>

          <button onClick={translate}>{language ? "🇺🇸" : "🇧🇷"}</button>
        </ul>
      </div>
      <ModalMenu />
    </div>
  );
};

export default Header;
