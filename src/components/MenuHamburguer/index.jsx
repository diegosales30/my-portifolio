import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./styles.module.scss";
import { ModalContext } from "./../../Providers/modal/index";
import { useContext } from "react";

const MenuHamburguer = () => {
  const { isOpen } = useContext(ModalContext);
  return (
    <div className={styles.container}>
      <button onClick={isOpen}>
        <GiHamburgerMenu />
      </button>
    </div>
  );
};

export default MenuHamburguer;
