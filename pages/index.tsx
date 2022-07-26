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
  newsData: NewsInterface[];
  spotlightsData: SpotlightInterface[];
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
  // RETURN DATA

  return {
    props: {
      spotlightsData: ATENE_SPOTLIGHT,
      newsData: ATENEO_NEWS,
    },
  };
};

export default Home;
