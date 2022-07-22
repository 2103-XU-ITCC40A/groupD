import "../styles/globals.css";
import "../styles/home.css";
import type { AppProps } from "next/app";

//UI COMPONENTS
import { NextUIProvider } from "@nextui-org/react";

// CONTEXT PROVIDER WRAPPER FOR THE APP
import context from "../src/context/context";

// TOAST
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// LAYOUTS FOR HEADER AND FOOTER
import Footer from "../src/layouts/Footer";
import Header from "../src/layouts/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="main-container">
      <NextUIProvider>
        <context.Provider value={{}}>
          {/* THIS IS THE HEADER CHILD COMPONENT */}
          <Header />

          {/* THE MAIN COMPONENTS */}
          <Component {...pageProps} />

          <ToastContainer />

          {/* THIS IS THE FOOTER CHILD COMPONENT */}
          <Footer />
        </context.Provider>
      </NextUIProvider>
    </div>
  );
}

export default MyApp;
