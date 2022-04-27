import Layout from "../components/layout";
import "../styles/globals.css";
import Howto from "./howto/index";
import Script from "next/script";
import dynamic from "next/dynamic";
function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith("/howto")) {
    return <Howto />;
  }
  return (
    <Layout>
      <Script src="https://kit.fontawesome.com/17de3b6e96.js"></Script>
      <Component {...pageProps} />
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
