import Image from "next/image";
import styles from "./Contact.module.scss";
import gifImg from "../../assets/code4.gif";

import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiGmail,
  SiWhatsapp,
} from "react-icons/si";

import { LanguageContext } from "./../../Providers/languages/index";
import { useContext } from "react";
export default function ContactPage() {
  const { language } = useContext(LanguageContext);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.containerTitle}>
          <h1>{language ? "My Contacts" : "Meus contatos"}</h1>
          <section className={styles.containerContact}>
            <div className={styles.containerBox}>
              <span>
                <SiGithub />
              </span>
              <a
                href="https://github.com/diegosales30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>{language ? "go to Github" : "acessar github"}</p>
              </a>
            </div>
            <div className={styles.containerBox}>
              <span>
                <SiLinkedin />
              </span>
              <a
                href="https://www.linkedin.com/in/diegosales30/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>{language ? "go to Linkedin" : "acessar Linkedin"}</p>
              </a>
            </div>
            <div className={styles.containerBox}>
              <span>
                <SiGmail />
              </span>
              <a
                href="mailto:diegofelipesales23@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>{language ? "go to Gmail" : "acessar Gmail"}</p>
              </a>
            </div>
            <div className={styles.containerBox}>
              <span>
                <SiWhatsapp />
              </span>
              <a
                href="https://api.whatsapp.com/send/?phone=5592994748629&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>{language ? "go to WhatsApp" : "acessar WhatsApp"}</p>
              </a>
            </div>
            <div className={styles.containerBox}>
              <span>
                <SiInstagram />
              </span>
              <a
                href="https://www.instagram.com/felip.codes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>{language ? "go to Instagram" : "acessar Instagram"}</p>
              </a>
            </div>
          </section>
        </div>
        <div className={styles.containerImg}>
          <span>
            <Image src={gifImg} alt="git programador" width={480} height={360} />
          </span>
        </div>
      </main>
    </div>
  );
}
