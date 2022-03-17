import React from "react";
import type { NextPage } from "next";
import { LightBulbIcon } from "@heroicons/react/outline";

interface ChildProps {
  setDarkMode: React.Dispatch<React.SetStateAction<string>>;
}

const HeaderDarkModeButton: NextPage<ChildProps> = ({
  setDarkMode,
}: ChildProps) => {
  setDarkMode;

  return (
    <div className="dark">
      <div>
        <LightBulbIcon className="h-5 w-5" />
      </div>
    </div>
  );
};

export default HeaderDarkModeButton;
