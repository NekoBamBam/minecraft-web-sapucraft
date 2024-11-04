import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="h-screen flex flex-col font-minecraft bg-[#7F9289]">
      <div className="lg:sticky top-0 z-50">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
