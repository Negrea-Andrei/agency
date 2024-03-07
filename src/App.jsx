import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

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
    </>
  );
}
