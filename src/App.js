// src/App.js

import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import StoryPage from "./pages/StoryPage";
import About from "./pages/About";
import MusicPlayer from "./components/MusicPlayer"; 

function App() {
  return (
    <Router>
      {/* MusicPlayer در کل برنامه */}
      <MusicPlayer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
