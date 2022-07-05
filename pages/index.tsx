import type { NextPage } from "next";
import Head from "next/head";
import { details } from "../src/static/details.json";

const Home: NextPage = () => {
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
        {/**
         * THIS IS FOR TEMPLATING PURPOSES. THIS WILL SERVE A GUIDE TO MY GROUPMATES AS TO WHAT CONTENTS TO BE PUT HERE.
         *
         * THIS IS THE LADING PAGE OF THE WEBISTE
         *
         * THIS WILL HAVE MORE COMPONENTS TO BE ADDED SOON AS WE DEVELOP AND WRITE MORE CODES
         * DO NOT INSTALL ANY OTHER PACKAGES UNLESS MANDATED.
         * UTILIZE THE PACKAGES THAT ARE AVAILABLE IN THE PACKAGE.JSON FILE
         */}
      </main>
    </div>
  );
};

export default Home;
