import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

// Comps Import
import Background from "./components/Background";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import DarkModeToggle from './components/DarkModeToggle';

// Pages Import
import AboutAviator from "./pages/AboutAviator";
import Tokenomics from "./pages/Tokenomics";
import Roadmap from "./pages/Roadmap";
import Flightpaper from "./pages/Flightpaper";
import Skybridge from "./pages/Skybridge";
import AviatorArcade from "./pages/AviatorArcade";

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  return (
    <Router>
      <main className={`w-full overflow-x-hidden ${!darkMode ? "dark" : "light"}`}>
      <Background darkMode={darkMode}/>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      {/* <Nav darkMode={darkMode}/> */}
      
      <section className="h-full flex items-center min-h-[calc(100vh-100px)] px-6 sm:px-12 xl:px-24 pt-6 sm:pt-[0px] sm:pb-[100px] pb-[130px]">
      <Routes>
        <Route path="/" element={<AboutAviator />} />
        <Route path="/Tokenomics" element={<Tokenomics darkMode={darkMode} />} />
        <Route path="/Roadmap" element={<Roadmap />} />
        <Route path="/Flightpaper" element={<Flightpaper darkMode={darkMode}/>} />
        <Route path="/Skybridge" element={<Skybridge />} />
        <Route path="/AviatorArcade" element={<AviatorArcade darkMode={darkMode}/>} />
      </Routes>
      </section>

      <Footer darkMode={darkMode} />
      </main>

    </Router>
  );
}

export default App;
