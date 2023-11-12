import React from "react";
import "./style.css";

export default function Background({ darkMode }) {
  return (
    <div className={`${!darkMode ? "bgdark" : "bglight"}`}>
      <div className="bg-circle"></div>
      <div className="bg-circle"></div>
      <div className="bg"></div>
      <div className="bg-wrapper"></div>
    </div>
  );
}
