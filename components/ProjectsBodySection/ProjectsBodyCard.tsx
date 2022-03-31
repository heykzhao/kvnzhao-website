import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { ProjectProps } from "../../pages/projects";

interface ChildProps {
  darkMode: boolean;
  project: ProjectProps;
}

const ProjectsBodyCard: NextPage<ChildProps> = ({
  darkMode,
  project,
}: ChildProps) => {
  const { name, image, description, technologiesUsed, details } = project;

  const technologiesUsedCards = technologiesUsed.map((item, index) => {
    return (
      <div
        key={index}
        className="bg-dark mr-2 mb-2 rounded-xl bg-black py-0.5 px-2 text-xs text-white dark:bg-white dark:text-black"
      >
        {item}
      </div>
    );
  });

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="my-2 mx-4 flex flex-col items-center rounded-2xl border-2 border-light-mode-5 py-4 dark:border-dark-mode-5 md:flex-row">
        <div className="w-1/2 md:w-5/12 md:px-5">
          <Link href={details.demo_url}>
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src={image[0].url}
                alt={`Screenshot of ${name}`}
                width={image[0].width}
                height={image[0].height}
                loading="lazy"
                className="cursor-pointer rounded-2xl"
              />
            </a>
          </Link>
        </div>
        <div className="flex flex-col items-center md:w-7/12 md:items-start md:pr-5">
          <div className="flex flex-col items-center md:items-start">
            <div className="w-10/12 pb-3 text-center md:w-full md:text-left">
              <h5 className="py-2 text-xl font-black md:text-2xl">{name}</h5>
              <p className="text-sm font-light italic md:text-base">
                {description}
              </p>
            </div>
            <div className="flex w-9/12 justify-center py-3 md:w-full md:justify-start">
              <p className="shrink-0 pr-2 text-sm">Built with: </p>
              <div className="flex flex-wrap">{technologiesUsedCards}</div>
            </div>
          </div>
          <div className="flex flex-row py-2">
            <div className="pr-4">
              <Link href={details.demo_url}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer rounded-xl border-2 border-light-mode-1 bg-light-mode-1 px-3 py-1 text-sm font-bold text-white hover:border-black hover:bg-black dark:border-dark-mode-4 dark:bg-dark-mode-4 dark:text-black hover:dark:border-white hover:dark:bg-white"
                >
                  Live Demo
                </a>
              </Link>
            </div>
            <div>
              <Link href={details.code_url}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer rounded-xl border-2 border-light-mode-5 bg-light-mode-4 px-3 py-1 text-sm font-bold hover:bg-light-mode-5 dark:border-dark-mode-5 dark:bg-dark-mode-2 hover:dark:bg-dark-mode-5"
                >
                  View Code
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsBodyCard;
