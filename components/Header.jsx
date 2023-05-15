import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <Link to="/">
        <h1>#ScoobyVan</h1>
      </Link>
      <div className="nav-flex">
        <Link to="/host">Host</Link>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </div>
    </nav>
  );
};

export default Header;
