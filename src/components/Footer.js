import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Instagram } from "lucide-react"; // updated icons

export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Thin Top Border for Separation */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-400 to-teal-500"></div>

      {/* Footer Content */}
      <div className="bg-gray-900 text-gray-300 pt-12 pb-8">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.jpeg"
                alt="Watt Incorporate Logo"
                width={45}
                height={45}
                className="rounded-full shadow-md"
              />
              <span className="text-2xl font-bold tracking-wide font-sans text-white">
                WATT Incorporate
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed font-light">
              Building the future of clean energy, sustainability, and
              eco-friendly technology solutions.
            </p>
            <div className="flex space-x-5">
              <Link href="https://facebook.com" target="_blank">
                <Facebook className="w-6 h-6 hover:text-blue-500 transition" />
              </Link>
              <Link href="https://www.linkedin.com/company/watt-incorporate/" target="_blank">
                <Linkedin className="w-6 h-6 hover:text-blue-400 transition" />
              </Link>
              <Link href="https://www.instagram.com/watt_india?igsh=d2V2NWU2dm90Mmt2" target="_blank">
                <Instagram className="w-6 h-6 hover:text-pink-500 transition" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 font-sans">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Blogs", "Gallery"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="hover:text-blue-400 transition font-light"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 font-sans">
              Policies
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-400 font-light">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/Terms-of-Service" className="hover:text-blue-400 font-light">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 font-sans">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="hover:text-blue-400 font-light">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@wattincorporate.com"
                  className="hover:text-blue-400 font-light"
                >
                  wattincorporate@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 text-center text-gray-500 text-sm font-light">
          © {new Date().getFullYear()} Watt Incorporate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
