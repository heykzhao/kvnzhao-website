import type { NextPage } from "next";

interface ChildProps {
  title: string;
  url: string;
}

const BioBodyLink: NextPage<ChildProps> = ({ title, url }: ChildProps) => {
  return (
    <a
      href={url}
      className="font-bold text-light-mode-4 decoration-light-mode-4 decoration-wavy hover:text-light-mode-4 hover:underline dark:text-dark-mode-4 dark:decoration-dark-mode-4 hover:dark:text-dark-mode-4"
    >
      {title}
    </a>
  );
};

export default BioBodyLink;
