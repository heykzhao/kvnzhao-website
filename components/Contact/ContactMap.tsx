import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import ClevelandMap from "./images/cleveland-map.png";

const ContactLinks: NextPage = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full items-center pr-3 pl-3 pb-1">
        <p className="pr-2 text-sm font-bold sm:text-lg">Where</p>
        <span className="w-full shrink border-t border-dashed" />
      </div>
      <div className="m-auto block w-full pr-2 pl-2 sm:w-96">
        <Link href="https://www.google.com/maps/place/Cleveland,+OH/">
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src={ClevelandMap}
              alt="Map of Cleveland with location pin"
              layout="responsive"
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ContactLinks;
