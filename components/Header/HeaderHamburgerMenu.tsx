import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

import { MenuLinks } from "./Menu";

interface ChildProps {
  menuItems: MenuLinks[];
  setHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderHamburgerMenu: NextPage<ChildProps> = ({
  menuItems,
  setHamburgerOpen,
}: ChildProps) => {
  const menuHamburgerLinks = menuItems.map((item) => {
    if (location.pathname === item.path) {
      return (
        <button
          type="button"
          onClick={() => setHamburgerOpen(false)}
          key={item.title}
          className="cursor-pointer pb-10 text-3xl font-black text-light-mode-1 hover:underline hover:decoration-wavy dark:text-dark-mode-1 lg:hidden"
        >
          {item.title}
        </button>
      );
    } else {
      return (
        <Link href={item.path} key={item.title}>
          <a className="cursor-pointer pb-10 text-3xl font-black text-light-mode-1 hover:underline hover:decoration-wavy dark:text-dark-mode-1 lg:hidden">
            {item.title}
          </a>
        </Link>
      );
    }
  });

  return (
    <div className=" z-50 flex h-full w-full flex-col items-center overflow-hidden overscroll-none border-b-8 border-light-mode-1 bg-light-mode-4 pt-10 dark:border-none dark:bg-dark-mode-4 lg:hidden">
      {menuHamburgerLinks}
    </div>
  );
};

export default HeaderHamburgerMenu;
