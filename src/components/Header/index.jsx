import React from "react";
import logo from "../../assets/images/Aviator Logo.png";
import DarkModeToggle from "../DarkModeToggle";
import Nav from "../Nav";
import HamburgerMenu from "../Hamburger";


export default function Header({ darkMode, setDarkMode }) {
  return (
    <div className="h-[100px] px-6 sm:px-8 flex justify-between items-center">
    <div className="flex items-center gap-2 sm:gap-4">
      <img className="w-10 sm:w-14" src={logo} alt="logo" />
      <p className="text-xl sm:text-3xl font-bold uppercase">Aviator</p>
    </div>

    <div className="block sm:hidden">
<HamburgerMenu darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>

    <div className="items-center gap-10 hidden sm:flex">
      <Nav darkMode={darkMode}/>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  </div>  
  );
}
