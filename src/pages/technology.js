import TechnologyPage from "../components/Stacks";
import Head from "next/head";
const Technology = () => {
  return (
    <div>
      <Head>
        <title>Tech</title>
        <meta name="description" content="I'm web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TechnologyPage />
    </div>
  );
};
export default Technology;
