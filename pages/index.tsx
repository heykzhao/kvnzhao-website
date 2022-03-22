import React from "react";
import type { NextPage } from "next";

import Head from "next/head";

import Header from "../components/Header";
import HomeHeroSection from "../components/HomeHeroSection";
import HomeBodySection from "../components/HomeBodySection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: NextPage = ({ darkMode, setDarkMode }: any) => {
  return (
    <div>
      <Head>
        <title>kvnzhao</title>
        <meta name="kvnzhao Homepage" content="Home page for kvnzhao.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <div className="flex-none">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <HomeHeroSection darkMode={darkMode} />
          <HomeBodySection darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </div>
        <div className="grow bg-black" />
        <div className="flex-none">
          <Footer darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default Home;
