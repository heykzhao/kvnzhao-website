import Image from "next/image";
import type { NextPage } from "next";

import headShot from "./images/profile-pic-head.jpeg";

interface ChildProps {
  darkMode: boolean;
}

const HeroSection: NextPage<ChildProps> = ({ darkMode }: ChildProps) => {
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col bg-light-mode-1 text-white dark:bg-dark-mode-1 lg:flex-row lg:justify-center">
        <div className="flex items-center justify-center pt-7 lg:hidden">
          <div className="h-48 w-48">
            <Image
              src={headShot}
              alt="Headshot of Kevin Zhao"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="p-6 text-center lg:p-20 lg:text-left">
          <h1 className="pt-3 pb-3 text-3xl font-black lg:pt-10 lg:pb-10 lg:text-5xl">
            👋🏻{" "}
            <span>
              Hey! I&apos;m{" "}
              <span className="text-light-mode-4 dark:text-dark-mode-4">
                Kevin Zhao
              </span>
              .
            </span>
          </h1>
          <h3 className="pt-3 pb-4 text-2xl font-bold">
            I&apos;m currently looking for{" "}
            <span className="text-light-mode-4 dark:text-dark-mode-4">
              remote opportunities
            </span>{" "}
            in...
            <br />
            <div className="pt-3 pb-3">
              <span className="underline decoration-light-mode-4 decoration-solid dark:decoration-dark-mode-4">
                Technical Project Management
              </span>
              <br></br>
              <span className="underline decoration-light-mode-4 decoration-solid dark:decoration-dark-mode-4">
                with an emphasis on web technologies.
              </span>
            </div>
          </h3>
        </div>
        <div className="hidden items-center justify-center lg:flex">
          <div className="h-64 w-64">
            <Image
              src={headShot}
              alt="Headshot of Kevin Zhao"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
