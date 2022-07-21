import Head from "next/head";
import React from "react";
import details from "../../src/static/details.json";

export default function Contacts() {
  return (
    <div>
      <Head>
        <title>{details.details.contact_page.title}</title>
        <meta
          name="description"
          content="This app was created by Jovellabay."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          minHeight: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Contacts</h1>
      </main>
    </div>
  );
}
