import React, { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

// Components
import HeaderDarkModeButton from "./HeaderDarkModeButton";
import HeaderHamburgerMenu from "./HeaderHamburgerMenu";
import HeaderDesktopMenu from "./HeaderDesktopMenu";

// Data
import { menuItems } from "./Menu";

// Icons
import { MenuAlt3Icon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/solid";

// Images
import kvnLogoDark from "../Header/images/kvn_logo_dark.png";
import kvnLogoLight from "../Header/images/kvn_logo_light.png";

interface ChildProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: NextPage<ChildProps> = ({
  darkMode,
  setDarkMode,
}: ChildProps) => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  function handleHamburgerClick() {
    setHamburgerOpen((prevValue) => !prevValue);
  }

  return (
    <div className={darkMode ? "dark sticky top-0 z-40" : "sticky top-0 z-40"}>
      <div className="relative flex w-full justify-center bg-light-mode-4 dark:bg-dark-mode-4">
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
          <div className="absolute inset-y-0 right-0 hidden items-center p-3 lg:flex">
            <HeaderDesktopMenu menuItems={menuItems} />
          </div>
          {/* Hamburger menu, hidden on md or larger */}
          <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-4 lg:hidden">
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
      {hamburgerOpen ? (
        <HeaderHamburgerMenu
          menuItems={menuItems}
          setHamburgerOpen={setHamburgerOpen}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
