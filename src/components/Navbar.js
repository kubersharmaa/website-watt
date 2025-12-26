// components/Navbar.js

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import ProductDropdown from "./ProductDropdown";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Blogs", path: "/blogs" },
  ];

  const closeAllMenus = () => {
    setMenuOpen(false);
    setIsProductDropdownOpen(false);
  };

  return (
    <nav className="shadow-lg relative">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between bg-gray-900 text-white rounded-lg">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-6"
          onClick={closeAllMenus}
        >
          <Image
            src="/logo.jpeg"
            alt="Watt Incorporate Logo"
            width={40}
            height={40}
            className="object-contain rounded-full"
          />
          <span className="font-bold text-2xl tracking-wide">
            WATT Incorporate
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`relative font-medium transition duration-200 group ${
                  isActive ? "text-blue-400" : "hover:text-blue-400"
                }`}
                onClick={closeAllMenus}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-400 transition-all ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}

          {/* 🧠 Products Dropdown (Hover to open) */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsProductDropdownOpen(true)}
            onMouseLeave={() => setIsProductDropdownOpen(false)}
          >
            <button
              className={`relative font-medium transition duration-200 group focus:outline-none ${
                isProductDropdownOpen ? "text-blue-400" : "hover:text-blue-400"
              }`}
            >
              Products
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-blue-400 transition-all ${
                  isProductDropdownOpen ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </button>

            {/* Dropdown Component */}
            <ProductDropdown
              isOpen={isProductDropdownOpen}
              closeMenu={closeAllMenus}
            />
          </div>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="bg-blue-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-600 transition shadow-md"
            onClick={closeAllMenus}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden container mx-auto bg-gray-900 text-white px-6 py-4 space-y-4 rounded-b-lg">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`block font-medium transition ${
                  isActive ? "text-blue-400" : "hover:text-blue-400"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}

          <Link
            href="/smart-attendance-system"
            className={`block font-medium transition ${
              pathname.startsWith("/smart-attendance-system")
                ? "text-blue-400"
                : "hover:text-blue-400"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>

          <Link
            href="/contact"
            className="block bg-blue-500 text-center text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-600 transition shadow-md"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
