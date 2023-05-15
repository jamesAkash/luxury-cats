import React from "react";
import { Link, NavLink } from "react-router-dom";

const HostHeader = () => {
  const activeStyle = {
    backgroundColor: "#e17654",
    color: "black",
  };
  return (
    <nav>
      <div className="nav-flex host-nav-flex">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          className="host-link"
          to="/host"
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          className="host-link"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host/reviews"
        >
          Reviews
        </NavLink>
        <NavLink
          className="host-link"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host/vans"
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          className="host-link"
          to="/host/income"
        >
          Income
        </NavLink>
      </div>
    </nav>
  );
};

export default HostHeader;
