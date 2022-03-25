import type { NextPage } from "next";
import HomeBodyLink from "./HomeBodyLink";

interface ChildProps {
  darkMode: boolean;
}

const HeroSection: NextPage<ChildProps> = ({ darkMode }: ChildProps) => {
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex justify-center bg-light-mode-4 text-black dark:bg-dark-mode-2 dark:text-white">
        <div className="flex max-w-screen-md flex-col p-10 text-lg font-light">
          <div className="pb-5 text-center text-3xl font-black uppercase text-light-mode-1 dark:text-white sm:text-4xl">
            About Me
          </div>
          <div className="pb-4">
            {
              "I'm a chemical engineer, project manager, and self-taught web developer. "
            }
          </div>
          <div className="pb-4">
            {"I was previously a "}
            <span className="font-bold text-light-mode-1  decoration-light-mode-1 dark:text-dark-mode-4 dark:decoration-dark-mode-4">
              Project Engineer
            </span>{" "}
            {" at "}
            <HomeBodyLink
              title={"ExxonMobil"}
              url={"https:/www.exxonmobil.com"}
            />
            {
              ", where I led and managed a $50M portfolio of projects for the North American and West African business units. I also supported a small team on a $60M expansion project for new ventures in Guyana."
            }
          </div>
          <div className="pb-4">
            {"Afterwards, I worked on "}
            <span className="font-bold text-light-mode-1  decoration-light-mode-1 dark:text-dark-mode-4 dark:decoration-dark-mode-4">
              Special Projects & Operations
            </span>{" "}
            {" at "}
            <HomeBodyLink title={"Sprinly"} url={"https:/www.sprinly.com"} />
            {
              ", a fast growing vegan meal delivery startup based in Clevealnd. I wore many hats here, including leading the company's site platform from WordPress to Shopify, developing and integrating key processes to ensure continuity of operations during this time, and supporting the co-founders on key growth projects. "
            }
          </div>
          <div className="pb-4">
            {
              "More recently, I've had the privilege of taking an extended break to travel, rest, and dive deeper into some personal passions, including web development."
            }
          </div>
          <div className="pb-4">
            {"I also have a B.S. in "}
            <span className="font-bold text-light-mode-1  decoration-light-mode-1 dark:text-dark-mode-4 dark:decoration-dark-mode-4">
              Chemical Engineering
            </span>
            {" and a Minor in "}
            <span className="font-bold text-light-mode-1  decoration-light-mode-1 dark:text-dark-mode-4 dark:decoration-dark-mode-4">
              Economics
            </span>
            {", from "}
            <HomeBodyLink
              title={"Northwestern University"}
              url={"https:/www.northwestern.edu"}
            />
            {". "}
          </div>
          <div className="">
            {
              "I hope to leverage my previous Projects & Operations expertise, with my newfound knowledge in Software, to bring value in my next role."
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
