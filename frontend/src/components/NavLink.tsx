// src/components/NavLink.tsx
import React from "react";
import { Link, useRouter } from "@tanstack/react-router";
import { Text } from "@radix-ui/themes";

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, icon, label, onClick }) => {
  const router = useRouter();
  const currentPath = router.currentRoute?.fullPath || "";
  const isActive = currentPath === to;

  return (
    <Link
      to={to}
      className={
        isActive
          ? "flex items-center gap-3 text-left bg-gray-700 rounded p-2"
          : "flex items-center gap-3 text-left p-2 hover:bg-gray-700 hover:rounded transition-colors"
      }
      onClick={onClick}
    >
      {icon}
      <Text>{label}</Text>
    </Link>
  );
};

export default NavLink;
