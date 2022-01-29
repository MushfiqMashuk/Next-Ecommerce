import Head from "next/head";
import "../styles/globals.css";
import Context from "../context/CartContext";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>E-Commerce App</title>
      </Head>
      <Context>
        <Nav />
        <Component {...pageProps}/>
      </Context>
    </>
  );
}

export default MyApp;
