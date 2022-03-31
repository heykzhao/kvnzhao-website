import type { NextPage } from "next";

interface ChildProps {
  darkMode: boolean;
}

const ProjectsHeroSection: NextPage<ChildProps> = ({
  darkMode,
}: ChildProps) => {
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className=" flex flex-col items-center bg-light-mode-1 p-12 text-white dark:bg-dark-mode-1">
        <h1 className="text-center text-3xl font-black uppercase sm:text-4xl">
          Projects
        </h1>
        <p className="pt-2 text-center text-xl sm:text-2xl">
          {
            "Some of the projects I've been working on, from latest to earliest."
          }
        </p>
      </div>
    </div>
  );
};

export default ProjectsHeroSection;
