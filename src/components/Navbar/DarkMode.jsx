// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import DarkPNG from "../../assets/website/dark.png";
import LightPNG from "../../assets/website/light.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <>
      <div className="relative">
        <img
          src={LightPNG}
          alt=""
          className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10
            ${theme === "dark" ? "opacity-0" : "opacity-100"}
            `}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />

        <img
          src={DarkPNG}
          alt=""
          className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] transition-all duration-300"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      </div>
    </>
  );
};

export default DarkMode;
