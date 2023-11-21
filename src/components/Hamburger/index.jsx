// src/components/HamburgerMenu.js
import React, { useState } from "react";
import DarkModeToggle from "../DarkModeToggle";
import { data } from "./Data";
import { Link, useLocation } from "react-router-dom";

const HamburgerMenu = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden relative">
      <button
        onClick={toggleMenu}
        className="text-white p-2 focus:outline-none focus:bg-gray-600"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="bg-[#000] z-50 absolute rounded-xl p-2 gap-2 right-0 top-0 w-[60vw] max-w-[250px] flex flex-col justify-start">
          {/* Your menu items go here */}
          <div className="flex justify-between">
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

            <button 
            onClick={toggleMenu}
            className="text-white p-2 rounded-lg w-fit bg-mainY">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          {data.map((item, i) => {
            return (
              <Link className="flex gap-3" to={`/${item.url}`} onClick={toggleMenu}>
                <div
                  key={i}
                  className="text-white p-3 border-b-2 border-b-[#222] w-full rounded-lg text-left flex items-center gap-2"
                >
                  <span className="text-mainY font-semibold">{i + 1}</span>{" "}
                  {item.label}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
