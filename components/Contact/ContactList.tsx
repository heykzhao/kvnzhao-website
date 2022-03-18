import React from "react";
import Link from "next/link";
import type { NextPage } from "next";

import { ContactLinks } from "./Contact";

interface ChildProps {
  contactItems: ContactLinks[];
}

const ContactList: NextPage<ChildProps> = ({ contactItems }: ChildProps) => {
  const contactItemsLinks = contactItems.map((item) => {
    return (
      <div className="flex items-center pl-3 pr-3 pb-3" key={item.title}>
        <p className="pr-2 text-sm font-bold sm:text-lg">{item.title}</p>
        <span className="w-full shrink border-t border-dashed" />
        <Link href={item.url}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="pl-2 text-sm font-bold decoration-light-mode-4 hover:underline hover:decoration-wavy  dark:decoration-dark-mode-4 sm:text-lg"
          >
            {item.display_url}
          </a>
        </Link>
      </div>
    );
  });

  return <div className="flex w-full flex-col">{contactItemsLinks}</div>;
};

export default ContactList;
