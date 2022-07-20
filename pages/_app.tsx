import "../styles/globals.css";
import "../styles/home.css";
import type { AppProps } from "next/app";

//UI COMPONENTS
import { NextUIProvider } from "@nextui-org/react";

// LAYOUTS FOR HEADER AND FOOTER
import Footer from "../src/layouts/Footer";
import Header from "../src/layouts/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="main-container">
      <NextUIProvider>
        {/* THIS IS THE HEADER CHILD COMPONENT */}
        <Header />

        {/* THE MAIN COMPONENTS */}
        <Component {...pageProps} />

        {/* THIS IS THE FOOTER CHILD COMPONENT */}
        <Footer />
      </NextUIProvider>
    </div>
  );
}

export default MyApp;
