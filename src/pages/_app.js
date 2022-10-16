import "../../styles/globals.scss";
import Provider from "../Providers";
import Header from "../components/Header";
function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
