import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Album1 from "./Pages/Album1/Album11";
import Album2 from "./Pages/Album2";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/album1" element={<Album1 />} />
          <Route path="/album2" element={<Album2 />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
