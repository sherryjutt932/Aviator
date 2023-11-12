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

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  return (
    <Router>
      <main className={`h-screen w-full overflow-hidden ${!darkMode ? "dark" : "light"}`}>
      <Background darkMode={darkMode}/>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Nav darkMode={darkMode}/>
      
      <section className="h-[calc(100vh-240px)] px-12 xl:px-24 py-2">
      <Routes>
        <Route path="/" element={<AboutAviator />} />
        <Route path="/Tokenomics" element={<Tokenomics />} />
        <Route path="/Roadmap" element={<Roadmap />} />
      </Routes>
      </section>

      <Footer darkMode={darkMode} />
      </main>

    </Router>
  );
}

export default App;
