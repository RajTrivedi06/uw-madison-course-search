// src/components/Sidebar.tsx
import React from "react";
import { Link } from "@tanstack/react-router";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  LightningBoltIcon,
  FileIcon,
  RulerSquareIcon,
} from "@radix-ui/react-icons"; // Assume you have these icons
import { useAuth } from "../context/AuthContext"; // Custom hook for authentication

const Sidebar: React.FC = () => {
  //   const router = useRouter();
  const { user, logout } = useAuth();

  const navItems = [
    { name: "Home", path: "/home", icon: <HomeIcon /> },
    {
      name: "Course Search AI",
      path: "/course-search-ai",
      icon: <MagnifyingGlassIcon />,
    },
    { name: "Popular", path: "/popular", icon: <LightningBoltIcon /> },
    { name: "Activities", path: "/activities", icon: <FileIcon /> },
    {
      name: "Support",
      path: "/support",
      icon: <RulerSquareIcon />,
      subItems: [
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
      ],
    },
  ];

  return (
    <div className="w-64 flex flex-col border-r border-gray-200">
      {/* Brand Logo */}
      <div className="flex items-center justify-center h-16 bg-gray-100">
        <span className="text-2xl font-bold">TESLA</span>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <ul>
          {navItems.map((item) =>
            item.subItems ? (
              <li key={item.name} className="mb-2">
                <div className="text-gray-600 mb-1">{item.name}</div>
                <ul className="ml-4">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.name} className="mb-1">
                      <Link
                        to={subItem.path}
                        activeProps={{
                          className:
                            "flex items-center gap-2 rounded bg-blue-100 px-3 py-2 text-blue-600",
                        }}
                        inactiveProps={{
                          className:
                            "flex items-center gap-2 rounded px-3 py-2 text-gray-600 hover:bg-gray-50",
                        }}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.name} className="mb-2">
                <Link
                  to={item.path}
                  activeProps={{
                    className:
                      "flex items-center gap-2 rounded bg-blue-100 px-3 py-2 text-blue-600",
                  }}
                  inactiveProps={{
                    className:
                      "flex items-center gap-2 rounded px-3 py-2 text-gray-600 hover:bg-gray-50",
                  }}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Footer Section */}
      {user && (
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <img
              src={user.profilePicture || "/default-profile.png"}
              alt="Profile"
              className="h-10 w-10 rounded-full"
            />
            <div>
              <div className="text-sm font-semibold text-gray-700">
                {user.name}
              </div>
              <div className="text-xs text-gray-500">{user.email}</div>
            </div>
          </div>
          <button
            onClick={logout}
            className="mt-3 w-full text-left text-sm text-red-500 hover:underline"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
