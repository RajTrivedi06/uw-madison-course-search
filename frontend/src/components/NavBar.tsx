"use client"; // If you’re on Next.js with the app router
import React, { useState } from "react";
import { Link } from "@tanstack/react-router"; // import your own Logo image or text here

// Example nav links
const NAV_LINKS = [
  { id: 0, label: "HOME", to: "/home" },
  { id: 1, label: "WORK", href: "/work" },
  { id: 2, label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto max-w-screen-xl px-4 py-3 flex items-center justify-between">
        {/* Left side: Logo */}
        <div className="flex items-center gap-2">
          {/* If you have a Logo image */}
          {/* <Image src="/logo.png" alt="Logo" width={50} height={50} /> */}
          {/* Or text-based logo */}

          <span className="font-bold text-xl tracking-wide">Course Search</span>
        </div>

        {/* Desktop Navigation (hidden on small screens) */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-sm font-medium text-gray-800 hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/login"
            className="inline-block bg-black text-white px-4 py-2 text-sm font-medium rounded hover:bg-gray-800 transition-colors"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button (hamburger icon) */}
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-black"
        >
          {!isOpen ? (
            /* Hamburger icon (menu closed) */
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            /* X icon (menu open) */
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (visible when isOpen is true) */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col px-4 py-3 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-sm font-medium text-gray-800 hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/login"
              className="inline-block bg-black text-white px-4 py-2 text-sm font-medium rounded hover:bg-gray-800 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              LOGIN
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
