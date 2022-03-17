import React from "react";
import type { NextPage } from "next";
import { Switch } from "@headlessui/react";
import { LightBulbIcon } from "@heroicons/react/solid";
import { MoonIcon } from "@heroicons/react/solid";

interface ChildProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderDarkModeButton: NextPage<ChildProps> = ({
  darkMode,
  setDarkMode,
}: ChildProps) => {
  setDarkMode;

  return (
    <div className="p-3">
      <Switch
        checked={darkMode}
        onChange={setDarkMode}
        className={`${
          darkMode ? "bg-dark-mode-1" : "bg-light-mode-1"
        } relative inline-flex h-10 w-16 items-center rounded-full`}
      >
        <span className="sr-only">Toggle Dark Mode</span>
        <span
          className={`${
            darkMode
              ? "translate-x-7 bg-dark-mode-4"
              : "translate-x-2 bg-light-mode-4"
          } inline-block h-7 w-7 transform rounded-full transition duration-200 ease-in-out`}
        >
          {darkMode ? (
            <MoonIcon className="h-7 w-7 text-dark-mode-1" />
          ) : (
            <LightBulbIcon className="h-7 w-7 text-light-mode-1" />
          )}
        </span>
      </Switch>
    </div>
  );
};

export default HeaderDarkModeButton;
