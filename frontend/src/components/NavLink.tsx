import React from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Text } from "@radix-ui/themes";

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, icon, label, onClick }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = currentPath === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-3 text-left px-4 py-2 rounded transition-colors ${
        isActive
          ? "bg-gray-700 text-white"
          : "text-gray-700 hover:bg-gray-200 hover:text-black"
      }`}
      onClick={onClick}
    >
      {icon}
      <Text className="text-sm font-medium">{label}</Text>
    </Link>
  );
};

export default NavLink;
