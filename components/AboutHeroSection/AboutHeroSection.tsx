import type { NextPage } from "next";

import AboutHeroLink from "./AboutHeroLink";

interface ChildProps {
  darkMode: boolean;
}

const HeroSection: NextPage<ChildProps> = ({ darkMode }: ChildProps) => {
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className=" flex flex-col items-center bg-light-mode-1 p-12 text-white dark:bg-dark-mode-1">
        <h1 className="text-center text-3xl font-black uppercase sm:text-4xl">
          About
        </h1>
        <p className="pt-2 text-center text-xl sm:text-2xl">
          {"A quick summary of "}
          <AboutHeroLink title={"me"} url={"#timeline"} />
          {", some "}
          <AboutHeroLink title={"acknowledgements"} url={"#acknowledgements"} />
          {", and this "}
          <AboutHeroLink title={"site"} url={"#about-this-site"} />
          {". Content below is ever-evolving. "}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
