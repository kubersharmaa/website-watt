"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (  
    <nav className="shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between bg-gray-900 text-white rounded-lg">
        
        {/* Logo (Clickable) */}
        <Link href="/" className="flex items-center space-x-6">
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
          {["Home", "Projects", "Gallery", "About", "Blogs"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative font-medium hover:text-blue-400 transition duration-200 group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}

          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="bg-blue-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-600 transition shadow-md"
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
          {["Home", "Projects", "Gallery", "About", "Blogs"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block font-medium hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
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
