import type { NextPage } from "next";
import Link from "next/link";

interface ChildProps {
  title: string;
  url: string;
}

const HomeBodyButton: NextPage<ChildProps> = ({ title, url }: ChildProps) => {
  return (
    <div className="pb-10 transition duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-105">
      <Link href={url}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="items-center rounded-lg bg-light-mode-1 px-5 py-3 text-xl font-medium text-white decoration-light-mode-4 decoration-wavy hover:underline dark:bg-dark-mode-4 dark:text-dark-mode-1 dark:decoration-dark-mode-1"
        >
          {title}
        </a>
      </Link>
    </div>
  );
};

export default HomeBodyButton;
