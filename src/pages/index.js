import Head from "next/head";

import HomePage from "../components/Home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="I'm web Developer" />
        <link rel="icon" href="./favicon_io/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
}
