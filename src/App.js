import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import StoryPage from "./pages/StoryPage";
import About from "./pages/About"; // وارد کردن صفحه About

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/about" element={<About />} /> {/* افزودن مسیر About */}
      </Routes>
    </Router>
  );
}

export default App;
