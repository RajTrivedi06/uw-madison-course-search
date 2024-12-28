// src/layout/HomeLayout.tsx
import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "@tanstack/react-router";

const HomeLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
