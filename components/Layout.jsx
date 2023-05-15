import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>
        <h3>@2022 #VANLIFE</h3>
      </footer>
    </>
  );
};

export default Layout;
