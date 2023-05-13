import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Vans from "./components/Vans";
// import { Home, About, Vans } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">
          <h1>#VansLife</h1>
        </Link>
        <div className="nav-flex">
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <footer>
        <h3>@2022 #VANLIFE</h3>
      </footer>
    </BrowserRouter>
  );
};

export default App;
