import React, { useState } from "react";
import Players from "../pages/Players";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="w-full h-16 bg-[#35CE8D] text-[#E0D2C3] flex items-center relative ">
      <div className="container mx-auto flex justify-between items-center">
        <div>Logo</div>
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
          <li>
            <Link to="/players" onClick={() => setIsOpen(false)}>
              Players
            </Link>
          </li>
          <li>
            <Link to="/players" onClick={() => setIsOpen(false)}>
              Players
            </Link>
          </li>
          <li>
            <Link to="/players" onClick={() => setIsOpen(false)}>
              Players
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
