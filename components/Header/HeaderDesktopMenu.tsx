import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

import { MenuLinks } from "./Menu";

interface ChildProps {
  menuItems: MenuLinks[];
}

const HeaderDesktopMenu: NextPage<ChildProps> = ({ menuItems }: ChildProps) => {
  const menuHeaderLinks = menuItems.map((item) => {
    return (
      <Link href={item.path} key={item.title}>
        <a className="cursor-pointer px-3 text-lg font-bold text-light-mode-1 hover:underline hover:decoration-wavy dark:text-dark-mode-1">
          {item.title}
        </a>
      </Link>
    );
  });

  return <div className="flex">{menuHeaderLinks}</div>;
};

export default HeaderDesktopMenu;
