"use client";
import React from "react";
import NavLink from "./NavLink";
import { HomeIcon, LightningBoltIcon, GearIcon } from "@radix-ui/react-icons";

const NAV_LINKS = [
  { id: 0, label: "Home", to: "/home", icon: <HomeIcon /> },
  {
    id: 1,
    label: "Course Search AI",
    to: "/course-search",
    icon: <LightningBoltIcon />,
  },
  { id: 2, label: "Popular", to: "/popular" },
  {
    id: 3,
    label: "Activities",
    to: "/activities",
    icon: <LightningBoltIcon />,
  },
];

const SUPPORT_LINKS = [
  { id: 0, label: "About Us", to: "/about" },
  { id: 1, label: "Contact Us", to: "/contact", icon: <GearIcon /> },
];

export default function Navbar() {
  return (
    <aside className="flex flex-col bg-white w-64 h-screen shadow-md fixed">
      {/* Brand Section */}
      <div className="p-6 flex items-center gap-3">
        <div className="text-red-500 text-2xl font-bold">TESLA</div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-2">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.id}
            to={link.to}
            label={link.label}
            icon={link.icon}
          />
        ))}
      </nav>

      {/* Support Links */}
      <div className="mt-auto px-4">
        <div className="border-t border-gray-300 my-4"></div>
        {SUPPORT_LINKS.map((link) => (
          <NavLink
            key={link.id}
            to={link.to}
            label={link.label}
            icon={link.icon}
          />
        ))}
      </div>

      {/* Footer Section */}
      <footer className="p-4">
        <div className="flex items-center gap-3">
          <img
            src="/profile.jpg" // Replace with your image path
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">Anuraj Triswamy</p>
            <p className="text-xs text-gray-500">nohero@mysigns.com</p>
          </div>
        </div>
      </footer>
    </aside>
  );
}
