import type { NextPage } from "next";
import ContactList from "./ContactList";
import ContactMap from "./ContactMap";
interface ChildProps {
  darkMode: boolean;
}

export interface ContactLinks {
  title: string;
  display_url: string;
  url: string;
}

const Contact: NextPage<ChildProps> = ({ darkMode }: ChildProps) => {
  const contactItems: ContactLinks[] = [
    {
      title: "Email",
      display_url: "kvnzhao[at]outlook.com",
      url: "mailto:kvnzhao@outlook.com",
    },
    {
      title: "GitHub",
      display_url: "github.com/heykzhao",
      url: "https://github.com/heykzhao",
    },
    {
      title: "LinkedIn",
      display_url: "linkedin.com/in/kvnzhao",
      url: "https://linkedin.com/in/kvnzhao",
    },
  ];
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex w-full flex-col items-center bg-black p-10 text-white">
        <div className="uppercasesm:text-4xl pb-5 text-3xl font-black">
          Contact
        </div>
        <div className="w-full sm:w-96">
          <ContactList contactItems={contactItems} />
          <ContactMap />
        </div>
      </div>
    </div>
  );
};

export default Contact;
