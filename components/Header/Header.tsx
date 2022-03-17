import React from "react";
import type { NextPage } from "next";
import Image from "next/image";

import HeaderDarkModeButton from "./HeaderDarkModeButton";

import { MenuAlt3Icon } from "@heroicons/react/solid";

import kvnLogoDark from "../Header/images/kvn_logo_dark.svg";
import kvnLogoLight from "../Header/images/kvn_logo_light.svg";

interface ChildProps {
  darkMode: string;
  setDarkMode: React.Dispatch<React.SetStateAction<string>>;
}

const Header: NextPage<ChildProps> = ({
  darkMode,
  setDarkMode,
}: ChildProps) => {
  return (
    <div className={darkMode}>
      <div className="relative flex w-screen justify-center bg-light-mode-4 dark:bg-dark-mode-4">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <HeaderDarkModeButton setDarkMode={setDarkMode} />
        </div>
        <div className="flex items-center pt-2 pb-2">
          <div className="hidden w-7 dark:block">
            <Image
              src={kvnLogoDark}
              alt="KVN Logo, dark mode"
              layout="responsive"
            />
          </div>
          <div className="block w-7 dark:hidden">
            <Image
              src={kvnLogoLight}
              alt="KVN Logo, light mode"
              layout="responsive"
            />
          </div>
        </div>
        <div>
          <div className="absolute inset-y-0 right-0 hidden items-center md:flex">
            <div className="dark:text-dark-mode-1">About</div>
            <div className="dark:text-dark-mode-1">Contact</div>
          </div>
          <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center p-1 md:hidden">
            <div className="rounded-lg p-1 hover:bg-dark-mode-1/10">
              <MenuAlt3Icon className="h-7 w-7" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-screen justify-center bg-light-mode-1 dark:bg-dark-mode-4">
        <div className="dark:text-dark-mode-1">About</div>
        <div className="dark:text-dark-mode-1">Contact</div>
      </div>
    </div>
  );
};

export default Header;
