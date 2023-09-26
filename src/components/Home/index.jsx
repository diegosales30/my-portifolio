import Image from "next/image";
import styles from "./Home.module.scss";
import gifImg from "../../assets/code1.gif";

import { MdKeyboardArrowRight } from "react-icons/md";
import { LanguageContext } from "./../../Providers/languages/index";
import { useContext } from "react";
import Link from "next/link";
export default function HomePage() {
  const pt = (
    <span>
      Saiba mais <MdKeyboardArrowRight />
    </span>
  );
  const en = (
    <span>
      Learn More <MdKeyboardArrowRight />
    </span>
  );

  const { language } = useContext(LanguageContext);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.containerTitle}>
          <h3>{language ? "I'm Diego." : "Sou o Diego."}</h3>

          <h1>
            {language
              ? "I'm Developer React.Js | Next.js | C# Asp.net | SQL"
              : "Sou Desenvolvedor React.Js | Next.js | C# Asp.net | SQL"}
          </h1>
          <p>
            {language
              ? "I'm Brazilian 🇧🇷 , I'm passionate about technology and programming."
              : "Sou Brasileiro 🇧🇷 , e sou apaixonado por tecnologia e programação"}
          </p>
          <Link href="/about">{language ? en : pt}</Link>
        </div>
        <div className={styles.containerImg}>
          <span>
            <Image src={gifImg} alt="gif garoto programando" width={480} height={360} />
          </span>
        </div>
      </main>
    </div>
  );
}
