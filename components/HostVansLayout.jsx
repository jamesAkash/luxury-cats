import React from "react";
import { Outlet } from "react-router-dom";

const HostVansLayout = () => {
  return (
    <div className="page-container">
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default HostVansLayout;
