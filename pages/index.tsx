import type { NextPage } from "next";
import Head from "next/head";
import NewsComponent from "../src/components/NewsComponent";
import SpotlightsComponent from "../src/components/SpotlightComponent";
import WelcomeComponent from "../src/components/WelcomeComponent";

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import { details } from "../src/static/details.json";
import { ATENEO_NEWS, ATENE_SPOTLIGHT } from "../src/static/list";

const Home = ({
  newsData,
  spotlightsData,
}: {
  newsData: NewsInterfaceComponent;
  spotlightsData: SpotlightInterfaceComponent;
}) => {
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
        <SpotlightsComponent spotlightsData={spotlightsData} />
        {/* ATENEO NEWS */}
        <NewsComponent newsData={newsData} />
      </main>
    </div>
  );
};

// PRE-RENDER BEFORE IT REACHES THE CLIENT
export const getServerSideProps: GetServerSideProps = async () => {
  // GET DATA FROM SERVER
  const [news, spotlights] = await Promise.all([
    fetch("http://localhost:3000/api/news"),
    fetch("http://localhost:3000/api/spotlight"),
  ]);

  // PARSE DATA
  const [newsData, spotlightsData] = await Promise.all([
    news.json(),
    spotlights.json(),
  ]);

  // RETURN DATA
  return {
    props: {
      newsData,
      spotlightsData,
    },
  };
};

export default Home;
