import type { NextPage } from "next";

interface ChildProps {
  darkMode: boolean;
}

const Contact: NextPage<ChildProps> = ({ darkMode }: ChildProps) => {
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-black">Contacts</div>
    </div>
  );
};

export default Contact;
