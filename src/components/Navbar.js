// components/Navbar.js

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { Menu, X } from "lucide-react"; 
import { usePathname } from "next/navigation"; 
import ProductDropdown from './ProductDropdown'; // Import the dropdown

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // State for the Product Dropdown
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false); 

  const pathname = usePathname();

  // ⬅️ UPDATED: 'Projects' and 'Gallery' are back in the menuItems array
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" }, // ✅ Added back
    { name: "Gallery", path: "/gallery" }, // ✅ Added back
    { name: "About", path: "/about" },
    { name: "Blogs", path: "/blogs" },
  ];
  
  // Helper function to close both menus
  const closeAllMenus = () => {
      setMenuOpen(false);
      setIsProductDropdownOpen(false);
  }

  // Handle outside clicks to close the desktop dropdown
  // Note: For a more robust solution, you would typically use an effect with an event listener, 
  // but for simplicity, we'll rely on the button click toggle for now.

  return ( 	
    <nav className="shadow-lg relative"> 
      <div className="container mx-auto px-4 py-4 flex items-center justify-between bg-gray-900 text-white rounded-lg">
        
        {/* Logo (Clickable) */}
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
          
          {/* Loop for regular links */}
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

          {/* ⬅️ Products Dropdown Link (Desktop) - Inserted right after menu items */}
          <div className="relative h-full flex items-center">
            <button
                // Toggle only the product dropdown
                onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
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
            {/* The Dropdown Component */}
            <ProductDropdown 
                isOpen={isProductDropdownOpen} 
                // Close all menus when a product link is clicked
                closeMenu={closeAllMenus} 
            />
          </div>


          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="bg-blue-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-600 transition shadow-md"
            onClick={closeAllMenus}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
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
          
          {/* Loop for regular links */}
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

          {/* ⬅️ Products link in Mobile menu (direct link to the main product) */}
          <Link
            href="/smart-attendance-system" 
            className={`block font-medium transition ${
              pathname.startsWith("/smart-attendance-system") ? "text-blue-400" : "hover:text-blue-400"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          
          {/* Contact Us Button (Mobile) */}
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