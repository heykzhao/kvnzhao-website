import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { GraphQLClient, gql } from "graphql-request";

import Header from "../components/Header";
import ProjectsHeroSection from "../components/ProjectsHeroSection";
import ProjectsBodySection from "../components/ProjectsBodySection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

interface ImageProps {
  id: string;
  url: string;
  height: number;
  width: number;
}

interface DetailsProp {
  code_url: string;
  demo_url: string;
}

export interface ProjectProps {
  id: string;
  name: string;
  image: ImageProps[];
  description: string;
  technologiesUsed: string[];
  details: DetailsProp;
}

const graphcms = new GraphQLClient(`${process.env.GRAPHCMS_URL_ENDPOINT}`, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_PERM_AUTH_TOKEN}`,
  },
});

const QUERY = gql`
  {
    projects(stage: PUBLISHED, orderBy: firstDeployDate_DESC) {
      id
      name
      image {
        id
        url
        height
        width
      }
      description
      technologiesUsed
      details
    }
  }
`;

export async function getStaticProps() {
  try {
    const { projects } = await graphcms.request(QUERY);

    return {
      props: {
        projects,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.log(error);
  }
  return {
    props: {},
    revalidate: 60,
  };
}

const Projects: NextPage = ({ darkMode, setDarkMode, projects }: any) => {
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
          <ProjectsHeroSection darkMode={darkMode} />
          <ProjectsBodySection darkMode={darkMode} projects={projects} />
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

export default Projects;
