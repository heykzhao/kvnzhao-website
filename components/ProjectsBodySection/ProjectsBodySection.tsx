import type { NextPage } from "next";

import { ProjectProps } from "../../pages/projects";
import ProjectsBodyCard from "./ProjectsBodyCard";

interface ChildProps {
  darkMode: boolean;
  projects: ProjectProps[];
}

const ProjectsBodySection: NextPage<ChildProps> = ({
  darkMode,
  projects,
}: ChildProps) => {
  const projectCards = projects.map((project) => {
    return (
      <ProjectsBodyCard
        darkMode={darkMode}
        key={project.id}
        project={project}
      />
    );
  });

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex justify-center bg-light-mode-4 text-black dark:bg-dark-mode-2 dark:text-white">
        <div className="flex max-w-screen-md flex-col py-10">
          {projectCards}
        </div>
      </div>
    </div>
  );
};

export default ProjectsBodySection;
