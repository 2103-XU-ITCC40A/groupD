import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

// LAYOUTS FOR HEADER AND FOOTER
import Footer from "../src/layouts/Footer";
import Header from "../src/layouts/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      {/* THIS IS THE HEADER CHILD COMPONENT */}
      <Header />

      <Component {...pageProps} />

      {/* THIS IS THE FOOTER CHILD COMPONENT */}
      <Footer />
    </NextUIProvider>
  );
}

export default MyApp;
