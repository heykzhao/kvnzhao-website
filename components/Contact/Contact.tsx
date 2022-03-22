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
      display_url: "hello[at]kvnzhao.com",
      url: "mailto:hello@kvnzhao.com",
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
        <div className="pb-5 text-3xl font-black uppercase sm:text-4xl">
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
