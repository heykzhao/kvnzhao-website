import type { NextPage } from "next";
import Link from "next/link";

interface ChildProps {
  title: string;
  url: string;
}

const BioBodyLink: NextPage<ChildProps> = ({ title, url }: ChildProps) => {
  return (
    <Link href={url}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-light-mode-1 decoration-light-mode-1 decoration-wavy hover:text-light-mode-1 hover:underline dark:text-dark-mode-4 dark:decoration-dark-mode-4 hover:dark:text-dark-mode-4"
      >
        {title}
      </a>
    </Link>
  );
};

export default BioBodyLink;
