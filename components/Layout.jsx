import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <footer>
        <h3>@2023 #Rent-a-Cat</h3>
      </footer>
    </main>
  );
};

export default Layout;
