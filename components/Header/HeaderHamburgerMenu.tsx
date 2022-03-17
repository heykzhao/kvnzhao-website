import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

import { MenuLinks } from "./Header";

interface ChildProps {
  menuItems: MenuLinks[];
}

const HeaderHamburgerMenu: NextPage<ChildProps> = ({
  menuItems,
}: ChildProps) => {
  const menuHamburgerLinks = menuItems.map((item) => {
    return (
      <Link href={item.path} key={item.title}>
        <a className="cursor-pointer pb-10 text-3xl font-black text-light-mode-1 hover:underline hover:decoration-wavy dark:text-dark-mode-1 md:hidden">
          {item.title}
        </a>
      </Link>
    );
  });

  return (
    <div className="fixed z-50 flex h-screen w-screen flex-col items-center bg-light-mode-4 pt-3 dark:bg-dark-mode-4 md:hidden">
      {menuHamburgerLinks}
    </div>
  );
};

export default HeaderHamburgerMenu;
