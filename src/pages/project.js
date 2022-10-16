import ProjetcPage from "../components/Project/index";
import Head from "next/head";
const Project = () => {
  return (
    <div>
      <Head>
        <title>Project</title>
        <meta name="description" content="I'm web Developer" />
        <link rel="icon" href="./favicon_io/favicon.ico" />
      </Head>
      <ProjetcPage />
    </div>
  );
};

export default Project;
