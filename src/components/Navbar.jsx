import React from "react";
import { BiSolidSun } from "react-icons/bi";
import { BiSolidMoon } from "react-icons/bi";

const Links = [
  {
    id: "1",
    name: "Home",
    link: "/",
  },
  {
    id: "2",
    name: "CARS",
    link: "/cars",
  },
  {
    id: "3",
    name: "ABOUT",
    link: "/about",
  },
  {
    id: "4",
    name: "BOOKING",
    link: "/booking",
  },
];

const Navbar = ({theme, setTheme}) => {
  return (
    <nav className="shadow-md bg-[#F0F8FF] dark:bg-dark dark:text-white">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-serif font-bold">Rent a'Car</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {Links.map((data) => (
                <li className="py-4" key={data.id}>
                  <a
                    className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-300 text-lg font-medium"
                    href={data.link}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {theme === "dark" ? (
              <BiSolidSun className="text-2xl" onClick={() => setTheme("light")}/>
            ) : (
              <BiSolidMoon className="text-2xl" onClick={() => setTheme("dark")} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
