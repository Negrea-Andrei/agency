import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  const element = document.documentElement;
  useEffect(() => {
    if(theme === "dark") {
      element.classList.add("dark")
      localStorage.setItem("theme", "dark");
    }else{
      element.classList.remove("dark")
      localStorage.setItem("theme", "light");
    }
  }, [theme])

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
    </>
  );
}
