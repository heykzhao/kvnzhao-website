import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const darkModeCookie = window.localStorage.getItem("dark-mode");
    if (darkModeCookie === "light-mode") {
      setDarkMode(false);
    }
  }, []);

  return (
    <Component {...pageProps} darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}

export default MyApp;
