import React, { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

// Components
import HeaderDarkModeButton from "./HeaderDarkModeButton";
import HeaderHamburgerMenu from "./HeaderHamburgerMenu";
import HeaderDesktopMenu from "./HeaderDesktopMenu";

// Icons
import { MenuAlt3Icon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/solid";

// Images
import kvnLogoDark from "../Header/images/kvn_logo_dark.svg";
import kvnLogoLight from "../Header/images/kvn_logo_light.svg";

interface ChildProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MenuLinks {
  title: string;
  path: string;
}

const Header: NextPage<ChildProps> = ({
  darkMode,
  setDarkMode,
}: ChildProps) => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  const menuItems: MenuLinks[] = [
    { title: "Home", path: "/" },
    { title: "Contact", path: "/contact" },
  ];

  function handleHamburgerClick() {
    setHamburgerOpen((prevValue) => !prevValue);
  }

  return (
    <div className={darkMode ? "dark relative" : "relative"}>
      <div className="relative flex w-screen justify-center bg-light-mode-4 dark:bg-dark-mode-4">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <HeaderDarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <div className="flex items-center pt-2 pb-2">
          <Link href="/">
            <a className="flex">
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
              <span className="select-none pl-2 text-2xl font-black text-light-mode-1 dark:text-dark-mode-1">
                kvnzhao
              </span>
            </a>
          </Link>
        </div>
        <div>
          <div className="absolute inset-y-0 right-0 hidden items-center p-3 md:flex">
            <HeaderDesktopMenu menuItems={menuItems} />
          </div>
          {/* Hamburger menu, hidden on md or larger */}
          <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center p-1 md:hidden">
            <button
              type="button"
              className="rounded-lg p-1 hover:bg-dark-mode-1/10"
              onClick={handleHamburgerClick}
            >
              {hamburgerOpen ? (
                <XIcon className="h-7 w-7 text-light-mode-1 dark:text-dark-mode-1" />
              ) : (
                <MenuAlt3Icon className="h-7 w-7 text-light-mode-1 dark:text-dark-mode-1" />
              )}
            </button>
          </div>
        </div>
      </div>
      {hamburgerOpen ? <HeaderHamburgerMenu menuItems={menuItems} /> : <></>}
    </div>
  );
};

export default Header;
