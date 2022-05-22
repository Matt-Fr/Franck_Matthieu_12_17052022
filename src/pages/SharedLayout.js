import React from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";

import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div className="App">
      <Header></Header>
      <SideNav></SideNav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
