import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/sapuCraftLogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      to: "/players",
      name: "Players",
    },
    {
      to: "/memories",
      name: "Memories",
    },
    {
      to: "/events",
      name: "Events",
    },
    {
      to: "/rules",
      name: "Rules",
    },
  ];
  return (
    <nav className="w-full h-16 bg-[#35CE8D] text-[#E0D2C3] flex items-center relative ">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/">
            <img src={logo} alt="" className="h-8" />
          </Link>
        </div>
        {/* Burger */}
        <div className="flex z-40">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="#E0D2C3"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } bg-[#6BA292] w-1/5 h-screen absolute right-0 top-0 pt-52`}
      >
        <ul className="flex flex-col space-y-4 items-center">
          {links.map(({ to, name }, index) => {
            return (
              <li
                key={index}
                className="relative hover:text-[#79D3A2] hover:text-xl hover:before:content-['•'] hover:before:mr-1 w-full justify-center flex"
              >
                <Link to={to} onClick={() => setIsOpen(false)}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
