import React from "react";
import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";
import HomeHeroSection from "../components/HomeHeroSection";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <div>
      <Head>
        <title>kvnzhao</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <HomeHeroSection darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
};

export default Home;
