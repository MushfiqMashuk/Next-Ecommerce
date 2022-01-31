import Head from "next/head";
import Nav from "../components/Nav";
import Context from "../context/CartContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>E-Commerce App</title>
      </Head>
      <Context>
        <Nav />
        <Component {...pageProps} />
      </Context>
    </>
  );
}

export default MyApp;
