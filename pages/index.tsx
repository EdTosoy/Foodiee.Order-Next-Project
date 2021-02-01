import Header from "../components/Header";
import Head from "next/head";
import Hero from "components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Foodiee.Order</title>
      </Head>
      <Header />
      <Hero />
    </div>
  );
}
