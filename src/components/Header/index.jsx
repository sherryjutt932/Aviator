import React from "react";
import logo from "../../assets/images/Aviator Logo.png";
import DarkModeToggle from "../DarkModeToggle";
import Outline from "../Buttons/Outline";
import Text from "../Buttons/Text";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <div className="h-[100px] px-8 flex justify-between items-center">
    <div className="flex items-center gap-4">
      <img className="w-14" src={logo} alt="logo" />
      <p className="text-3xl font-bold uppercase">Aviator</p>
    </div>

    <div className="flex items-center gap-4">
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Text label="Log in" darkMode={darkMode}/>
      <Outline label="Sign up" darkMode={darkMode}/>
    </div>
  </div>  
  );
}
