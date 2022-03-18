import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: NextPage = ({ darkMode, setDarkMode }: any) => {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="Contact" content="Contact kvnzhao" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <div className="flex-none">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Contact darkMode={darkMode} />
        </div>
        <div className="flex-grow bg-black" />
        <div className="flex-none">
          <Footer darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default Home;
