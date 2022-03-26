import React from "react";
import type { NextPage } from "next";

import Head from "next/head";

import Header from "../components/Header";
import AboutHeroSection from "../components/AboutHeroSection";
import AboutBodySection from "../components/AboutBodySection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const About: NextPage = ({ darkMode, setDarkMode }: any) => {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta
          name="kvnzhao's Projects"
          content="Projects page for kvnzhao.com"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <div className="flex-none">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <AboutHeroSection darkMode={darkMode} />
          <AboutBodySection darkMode={darkMode} />
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

export default About;
