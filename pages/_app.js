import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
