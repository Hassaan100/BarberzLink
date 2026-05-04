import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom"; // dono yahan se

import Home from "./Components/Home/Home";
import { Services } from "./Components/Services";
import Service from "./Components/Services/Service";
import { About } from "./Components/About/About";
import { Support } from "./Components/Support/Support";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
