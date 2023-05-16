import React from "react";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <nav>
      <Link to="/">
        <h1 className="logo">#Rent-a-Cat</h1>
      </Link>
      <div className="nav-flex">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Cats
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
