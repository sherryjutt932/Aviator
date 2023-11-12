import React, {useEffect } from 'react';
import "./style.css";

const DarkModeToggle = ({darkMode, setDarkMode}) => {
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <>
    {/* <label className="switch">
      <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      <span className="slider round"></span>
    </label> */}

    <div className="toggle-switch">
  <label className="switch-label">
    <input type="checkbox" className="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>
    <span className="slider"></span>
  </label>
</div>  
    </>

    
  );
};

export default DarkModeToggle;
