import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="h-screen w-screen flex flex-col font-minecraft">
      <div className="fixed w-full top-0 z-50  bg-transparent">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
