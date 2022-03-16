import type { NextPage } from "next";

interface ChildProps {
  darkMode: string;
}

const HeroSection: NextPage<ChildProps> = ({ darkMode }: ChildProps) => {
  return (
    <div className={darkMode}>
      <div className="dark:bg-dark-mode-1">Hero Section</div>
    </div>
  );
};

export default HeroSection;
