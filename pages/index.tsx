import type { NextPage } from "next";
import Head from "next/head";
import NewsComponent from "../src/components/NewsComponent";
import SplotlightComponent from "../src/components/SpotlightComponent";
import WelcomeComponent from "../src/components/WelcomeComponent";

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import { details } from "../src/static/details.json";

const Home = ({ payLoad }: { payLoad: any }) => {
  const {
    news,
    spotlights,
  }: {
    news: NewsInterfaceComponent;
    spotlights: SpotlightInterfaceComponent;
  } = payLoad;

  return (
    <div>
      <Head>
        <title>{details.home_page.title}</title>
        <meta
          name="description"
          content="This app was created by Jovellabay."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* WELCOME COMPONENT */}
        <WelcomeComponent />
        {/* ATENEO SPOTLIGHT */}
        <SplotlightComponent spotlights={spotlights} />
        {/* ATENEO NEWS */}
        <NewsComponent news={news} />
      </main>
    </div>
  );
};

// PRE-RENDER BEFORE IT REACHES THE CLIENT(BROWSER)
export const getServerSideProps: GetServerSideProps = async () => {
  const responseDataSpotlight = await fetch(
    "http://localhost:3000/api/spotlight"
  );
  const responseDataNews = await fetch("http://localhost:3000/api/news");
  const spotlights = await responseDataSpotlight.json();
  const news = await responseDataNews.json();

  return {
    props: {
      payLoad: {
        spotlights,
        news,
      },
    },
  };
};

export default Home;
