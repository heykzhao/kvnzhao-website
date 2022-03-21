import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import kvnLogoWhite from "./images/kvn_logo_white.png";

interface ChildProps {
  darkMode: boolean;
}

const Footer: NextPage<ChildProps> = ({ darkMode }: ChildProps) => {
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col items-center bg-black pt-2 pr-2 pl-2 pb-14 text-white">
        <div className="w-full md:max-w-5xl">
          <div className="pl-8 pr-8 pb-2">
            <div className="border-t-4 border-white" />
          </div>
          <div className="flex items-center justify-between">
            <div className="pl-8 text-xs">
              <span>© 2022 Kevin Zhao</span>
              <span className="hidden sm:inline"> - </span>
              <span className="hidden sm:inline">
                Built with{" "}
                <Link href="https://nextjs.org/">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-black decoration-light-mode-4 decoration-wavy hover:underline dark:decoration-dark-mode-4"
                  >
                    Next.js
                  </a>
                </Link>
                {" + "}
                <Link href="https://tailwindcss.com/">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-black decoration-light-mode-4 decoration-wavy hover:underline dark:decoration-dark-mode-4"
                  >
                    Tailwind CSS
                  </a>
                </Link>
                {" + "}
                <Link href="https://www.typescriptlang.org/">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-black decoration-light-mode-4 decoration-wavy hover:underline dark:decoration-dark-mode-4"
                  >
                    TypeScript
                  </a>
                </Link>
                . Deployed on{" "}
                <Link href="https://vercel.com/">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-black decoration-light-mode-4 decoration-wavy hover:underline dark:decoration-dark-mode-4"
                  >
                    Vercel
                  </a>
                </Link>
                .
              </span>
            </div>
            <div className="flex w-12 items-center pr-8">
              <Link href="/">
                <a>
                  <Image src={kvnLogoWhite} alt="kvn logo in white" />
                </a>
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-col items-center pt-6 text-xs sm:hidden">
            <div>
              Built with{" "}
              <Link href="https://nextjs.org/">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-black decoration-light-mode-4 decoration-wavy hover:underline dark:decoration-dark-mode-4"
                >
                  Next.js
                </a>
              </Link>
              {" + "}
              <Link href="https://tailwindcss.com/">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-black decoration-light-mode-4 decoration-wavy hover:underline dark:decoration-dark-mode-4"
                >
                  Tailwind CSS
                </a>
              </Link>
              {" + "}
              <Link href="https://www.typescriptlang.org/">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-black decoration-light-mode-4 decoration-wavy hover:underline dark:decoration-dark-mode-4"
                >
                  TypeScript
                </a>
              </Link>
              .
            </div>
            <div>
              Deployed on{" "}
              <Link href="https://vercel.com/">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-black decoration-light-mode-4 decoration-wavy hover:underline dark:decoration-dark-mode-4"
                >
                  Vercel
                </a>
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
