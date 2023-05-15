import React from "react";
import { Link } from "react-router-dom";

const HostHeader = () => {
  return (
    <nav>
      <div className="nav-flex host-nav-flex">
        <Link className="host-link" to="/host">
          Dashboard
        </Link>
        <Link className="host-link" to="/host/reviews">
          Reviews
        </Link>
        <Link className="host-link" to="/host/income">
          Income
        </Link>
      </div>
    </nav>
  );
};

export default HostHeader;
