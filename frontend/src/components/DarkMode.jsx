import React, { use, useEffect, useState } from "react";
import lightModeBtn from "../assets/light-mode-button.png";
import darkModeBtn from "../assets/dark-mode-button.png";
function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const themeElement = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      themeElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      themeElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <>
      <div className="relative">
        <img
          src={lightModeBtn}
          alt="lightMode"
          onClick={() =>
            setTheme((theme) => (theme === "light" ? "dark" : "light"))
          }
          className={`w-12 cursor-pointer drop-shadow-2xl transition-all duration-300 absolute right-0 z-10 ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={darkModeBtn}
          alt="darkMode"
          onClick={() =>
            setTheme((theme) => (theme === "dark" ? "light" : "dark"))
          }
          className={`w-12 cursor-pointer drop-shadow-2xl transition-all duration-300 z-10 ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </>
  );
}

export default DarkMode;
