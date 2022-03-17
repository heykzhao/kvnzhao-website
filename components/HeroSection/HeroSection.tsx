import type { NextPage } from "next";

interface ChildProps {
  darkMode: boolean;
}

const HeroSection: NextPage<ChildProps> = ({ darkMode }: ChildProps) => {
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-light-mode-1 dark:bg-dark-mode-1">Hero Section</div>
    </div>
  );
};

export default HeroSection;
