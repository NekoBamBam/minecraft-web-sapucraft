import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icono1.png";
import NavbarImg from "../assets/NavbarImg.png";

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
  ];
  return (
    <nav className="h-16 text-[#E0D2C3] flex items-center ">
      <div className="container m-10 flex justify-between items-center lg:mx-auto ">
        <div>
          <Link to="/">
            <img src={logo} alt="" className="h-20" />
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
              class="bi bi-list hover:fill-[#E46F18]"
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
        }  border border-[#E0D2C3] bg-black bg-opacity-45 lg:w-1/5 w-full h-screen absolute right-0 top-0 pt-52 z-30`}
      >
        <div  className="absolute inset-0 bg-[#]"></div>
        <ul className="flex flex-col space-y-4 items-center">
          {links.map(({ to, name }, index) => {
            return (
              <li
                key={index}
                className="relative hover:text-[#E46F18] hover:text-xl hover:before:content-['•'] hover:before:mr-1 w-full justify-center flex"
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
