"use client";
import { useState, useEffect } from "react";

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Email validation regex
  const isValidEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Invalid email
    if (!isValidEmail(formData.email)) {
      setStatus("Invalid email address. Please enter a valid email");
      return;
    }

    setStatus("Sending...");

    try {
      const res = await fetch("/api/sendFeedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Feedback sent successfully!");
        setFormData({ name: "", email: "", feedback: "" });
      } else {
        setStatus("Failed to send feedback. Try again!");
      }
    } catch (error) {
      setStatus("Error: " + error.message);
    }
  };

  // Auto hide status message after 7 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 7000); // 5–10 sec (change if needed)

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4 py-10 sm:px-6">
      <div className="max-w-3xl w-full bg-gray-900 rounded-3xl shadow-2xl p-8 sm:p-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 sm:mb-8 text-center">Share Your Thoughts With Us</h2>
        <p className="mb-6 text-gray-300 text-center">
          Your feedback helps us improve our services. We’d love to hear your thoughts!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 sm:p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 sm:p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            placeholder="Your Feedback"
            rows="5"
            required
            className="w-full p-3 sm:p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 sm:py-4 rounded-xl transition transform hover:scale-105 shadow-lg"
          >
            Send Feedback
          </button>
        </form>
        {status && <p className="mt-4 text-center text-gray-300 text-sm sm:text-base">{status}</p>}
      </div>
    </div>
  );
}
