import "../../styles/globals.scss";
import Provider from "../Providers";
import Header from "../components/Header";
import VLibras from "vlibras-nextjs";
function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Header />
      <div>
        {/* only worked in production in tests with nextjs applications maybe you can solve this! */}
        {process.env.NODE_ENV === "production" && <VLibras forceOnload />}
      </div>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
