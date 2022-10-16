import Head from "next/head";
import ContactPage from "../components/Contact";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="I'm web Developer" />
        <link rel="icon" href="./favicon_io/favicon.ico" />
      </Head>
      <ContactPage />
    </div>
  );
};

export default Contact;
