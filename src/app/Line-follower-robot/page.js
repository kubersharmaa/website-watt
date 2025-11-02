"use client";
import React from "react";
import Link from "next/link";

// ====================
// Header Section
// ====================
const Header = () => (
  <header className="py-20 bg-gray-900 text-white text-center">
    <h1 className="text-4xl font-bold">Line Follower Robot</h1>
    <p className="mt-2 text-lg text-gray-400">
      An autonomous robotic vehicle designed to detect and follow lines with precision and efficiency.
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
        Line Follower Robot
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
      <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-500 pl-4">About the Project</h2>
      <p className="text-gray-400 mb-12 leading-relaxed">
        The <strong>Line Follower Robot</strong> is an autonomous robotic vehicle that uses infrared sensors to detect and
        follow a line marked on the floor. It demonstrates core principles of robotics such as automation, control systems,
        and sensor integration. Ideal for learning and research purposes, this project bridges the gap between electronics
        and intelligent movement.
      </p>

      <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FeatureCard title="Infrared Sensor Detection" description="Uses IR sensors to detect and follow the line path accurately." />
        <FeatureCard title="Automatic Steering" description="Adjusts motor direction based on sensor input to maintain the line track." />
        <FeatureCard title="Microcontroller Based" description="Controlled by Arduino or similar microcontroller for flexible programming." />
        <FeatureCard title="Compact and Efficient Design" description="Lightweight chassis and energy-efficient motor system for smooth operation." />
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
      <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4">What Users Are Saying</h2>
      <div className="space-y-8">
        <TestimonialCard
          name="Aman Verma, Robotics Enthusiast"
          quote="The Line Follower Robot was an amazing project for understanding robotics basics. The responsiveness of the sensors is impressive!"
        />
        <TestimonialCard
          name="Dr. Meera Joshi, Electronics Professor"
          quote="Excellent educational tool! Helps students practically understand automation, sensors, and control algorithms."
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
    <p className="italic text-gray-300">{quote}</p>
    <p className="text-sm mt-2 text-gray-500">2 months ago</p>
  </div>
);

// ====================
// Why Choose Section
// ====================
const WhyChoose = () => (
  <section className="py-20 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4">Why Choose This Project?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <WhyChooseCard title="Educational Value" description="Perfect for students to understand automation and control systems." />
        <WhyChooseCard title="Affordable Components" description="Uses easily available and budget-friendly parts for DIY enthusiasts." />
        <WhyChooseCard title="Practical Implementation" description="Can be extended to industrial or service robotics for future projects." />
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
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Interested in Building Your Own Robot?</h2>
      <p className="text-gray-400 mb-8 text-lg sm:text-xl">Book a free session to learn how to get started!</p>
      <button
        onClick={openCalendlyPopup}
        className="inline-block bg-teal-500 hover:bg-teal-400 text-white font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-teal-400/50 transition transform hover:-translate-y-1"
      >
        Schedule a Meeting
      </button>
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

// ====================
// Main Page
// ====================
const LineFollowerRobot = () => {
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

export default LineFollowerRobot;
