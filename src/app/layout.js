// /app/layout.js
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CalendlyCTA from "../components/CalendlyCTA"; // 👈 add this import
import Script from "next/script"; // 👈 needed for Calendly widget script

export const metadata = {
  title: "WATT Incorporate",
  description: "WATT Incorporate - Empowering Your Business with Innovative Solutions",
  icons: {
    icon: "/logo.jpeg", // path relative to /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Calendly global widget script (CSS + JS) */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </head>

      <body className="bg-gray-900 text-white">
        <Navbar />
        <main className="container max-w-full">{children}</main>
        <Footer />

        {/* 👇 Global floating CTA visible on all pages */}
        <CalendlyCTA />
      </body>
    </html>
  );
}
