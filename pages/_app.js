import Layout from "../components/layout";
import "../styles/globals.css";
import Howto from "./howto/index";
import Script from "next/script";
import dynamic from "next/dynamic";
import { useState } from 'react'

import { Context } from '../context'

function MyApp({ Component, pageProps, router }) {
  const authState = useState(undefined)

  if (router.pathname.startsWith("/howto")) {
    return <Howto />;
  }
  return (
    <Context.Provider value={authState}>
      <Layout>
        <Script src="https://kit.fontawesome.com/17de3b6e96.js"></Script>
        <Component {...pageProps} />
      </Layout>
    </Context.Provider>
  );
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
