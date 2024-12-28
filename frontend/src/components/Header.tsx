// src/components/Header.tsx
import React from "react";
import { useAuth } from "../context/AuthContext"; // Custom hook for authentication

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { logout } = useAuth();

  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      <button
        onClick={logout}
        className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
      >
        Sign out
      </button>
    </div>
  );
};

export default Header;
