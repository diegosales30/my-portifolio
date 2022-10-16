import styles from "./styles.module.scss";
import Link from "next/link";
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
      ) : null}
    </div>
  );
};

export default ModalMenu;
