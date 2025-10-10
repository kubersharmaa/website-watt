"use client";
import React from "react";
import Link from "next/link";

// ====================
// Header Section
// ====================
const Header = () => (
  <header className="py-20 bg-gray-900 text-white text-center">
    <h1 className="text-4xl font-bold">Smart Attendance System</h1>
    <p className="mt-2 text-lg text-gray-400">
      An intuitive, secure, and efficient way to manage attendance for your organization.
    </p>
  </header>
);

// ====================
// Video Section
// ====================
const VideoSection = () => (
  <section className="py-12 bg-gray-900 flex justify-center">
    <div className="w-full max-w-4xl bg-gray-800 rounded-xl overflow-hidden shadow-2xl relative aspect-video flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <button className="z-10 bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-full hover:bg-opacity-30 transition"></button>
      <div className="absolute bottom-10 text-white text-3xl font-extrabold tracking-widest uppercase">
        Smart Attendance System
      </div>
    </div>
  </section>
);

// ====================
// About & Features
// ====================
const AboutAndFeatures = () => (
  <section className="py-20 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-500 pl-4">About the Product</h2>
      <p className="text-gray-400 mb-12 leading-relaxed">
        The <strong>Smart Attendance System</strong> is a cutting-edge solution designed to
        streamline and automate attendance tracking in businesses and educational institutions.
        Leveraging advanced technologies such as <strong>facial recognition</strong> and{" "}
        <strong>RFID</strong>, it ensures accurate and efficient staff and student management,
        while including a powerful overlay of enhanced monitoring and security.
      </p>

      <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FeatureCard title="Biometric Authentication" description="Utilizes advanced facial recognition for precise attendance marking." />
        <FeatureCard title="Real-time Monitoring" description="Live dashboard of attendance data and insights for immediate action." />
        <FeatureCard title="Automated Reporting" description="Generate customizable attendance reports automatically, saving time and effort." />
        <FeatureCard title="Enhanced Security" description="Secure data environments with robust encryption and access controls." />
      </div>
    </div>
  </section>
);

const FeatureCard = ({ title, description }) => (
  <div className="p-6 bg-gray-800 rounded-lg shadow-xl hover:bg-gray-700 transition-colors duration-200">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

// ====================
// Testimonials Section
// ====================
const Testimonials = () => (
  <section className="py-20 bg-gray-800 text-white px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4">What Our Customers Are Saying</h2>
      <div className="space-y-8">
        <TestimonialCard
          name="Brian Sachs, CEO of TechCorp"
          quote="The Smart Attendance System has revolutionized our attendance process. It's incredibly accurate and easy to use. We've saved hours of administrative work, hugely increasing our efficiency."
        />
        <TestimonialCard
          name="Sophia Bernal, Principal of Lakeside High"
          quote="Implementing this system has been a game-changer for our school. Attendance tracking is now seamless and has made a significant improvement in administrative tasks."
        />
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ name, quote }) => (
  <div className="p-6 bg-gray-900 rounded-lg shadow-2xl border-l-4 border-blue-500">
    <div className="flex justify-between items-center mb-4">
      <p className="font-semibold text-lg text-blue-300">{name}</p>
      <div className="text-yellow-400 text-2xl">★★★★★</div>
    </div>
    <p className="italic text-gray-300">"{quote}"</p>
    <p className="text-sm mt-2 text-gray-500">3 months ago</p>
  </div>
);

// ====================
// Why Choose Section
// ====================
const WhyChoose = () => (
  <section className="py-20 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4">Why Choose Our Product?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <WhyChooseCard title="Accuracy and Reliability" description="Enjoy flawless and precise attendance tracking, eliminating errors and discrepancies." />
        <WhyChooseCard title="Efficiency and Time-Saving" description="Streamline manual processes, freeing up valuable time for other tasks." />
        <WhyChooseCard title="Security and Data Protection" description="Employ advanced security protocols to protect sensitive attendance data." />
      </div>
    </div>
  </section>
);

const WhyChooseCard = ({ title, description }) => (
  <div className="text-center p-6 bg-gray-800 rounded-lg shadow-xl hover:bg-gray-700 transition-colors duration-200">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

// ====================
// CTA Section 
// ====================
const CTASection = () => {
  const openCalendlyPopup = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/wattincorporate/project-discussion-meeting?background_color=0b1620&text_color=ffffff&primary_color=0070f3",
      });
    } else {
      alert("Calendly not loaded yet. Please wait a moment.");
    }
  };

  return (
    <section className="my-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-900/90 rounded-3xl shadow-lg text-center py-16 relative overflow-hidden">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Discuss Your Project?
        </h2>
        <p className="text-gray-400 mb-8 text-lg sm:text-xl">
          Book a free consultation and let’s bring your ideas to life!
        </p>
        <button
          onClick={openCalendlyPopup}
          className="inline-block bg-teal-500 hover:bg-teal-400 text-white font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-teal-400/50 transition transform hover:-translate-y-1"
        >
          Schedule a Meeting
        </button>

        {/* Decorative Shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </section>
    
  );
};

// ====================
// Main Page
// ====================
const SmartAttendanceSystem = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <VideoSection />
      <AboutAndFeatures />
      <Testimonials />
      <WhyChoose />
      <CTASection /> 
    </div>
  );
};

export default SmartAttendanceSystem;
