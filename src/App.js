import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Porfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="portfolio-react/" element={<About />}></Route>
            <Route path="portfolio-react/about" element={<About />}></Route>
            <Route
              path="portfolio-react/portfolio"
              element={<Porfolio />}
            ></Route>
            <Route path="portfolio-react/contact" element={<Contact />}></Route>
            <Route path="portfolio-react/resume" element={<Resume />}></Route>
            <Route path="portfolio-react/" element={<About />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
