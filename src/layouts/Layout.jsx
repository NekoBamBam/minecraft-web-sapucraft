import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="h-screen w-screen flex flex-col font-minecraft bg-[#05AF9E]">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
