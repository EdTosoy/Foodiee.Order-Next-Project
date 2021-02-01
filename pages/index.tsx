import Header from "../components/Header";
import Head from "next/head";
import Hero from "components/Hero";
import About from "components/About";
import Services from "../components/Services";
import GetApp from "../components/GetApp";
import Footer from "components/Footer";
import Menu from "components/Menu";

export default function Home() {
  return (
    <div className="text-brown">
      <Head>
        <title>Foodiee.Order</title>
        <meta
          name="description"
          content="Our menu is constantly evolving, yet always abides by a few simple constants. All of our cooking revolves around open wood fire. We work with a small group of fisherman, hunters, gatherers, ranchers, and farmers to find and follow microclimates that produce specific tastes from wild foods. Lastly, we steer clear of imported and commercial goods, opting instead to build our own pantry through patient harvesting and preservation."
        />
      </Head>
      <Header />
      <Hero />
      <Menu />
      <About />
      <Services />
      <GetApp />
      <Footer />
    </div>
  );
}
