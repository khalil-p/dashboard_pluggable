import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
export default function Layout() {
  return (
    <div className="flex flex-row bg-gray-100 h-screen w-screen">
      <Sidebar />
      <div className="h-screen w-screen">
        <Header />
        <div>{<Outlet />}</div>
        <div>Footer</div>
      </div>
    </div>
  );
}
