import Head from "next/head";
import AboutMe from "../components/About";

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="I'm web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutMe />
    </div>
  );
};

export default About;
