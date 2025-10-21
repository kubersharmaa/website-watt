"use client";
import { useState } from "react";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/sendFeedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus(" Feedback sent successfully!");
        setFormData({ name: "", email: "", feedback: "" });
      } else {
        setStatus("❌ Failed to send feedback. Try again!");
      }
    } catch (error) {
      setStatus("⚠️ Error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4 py-10 sm:px-6">
      <div className="max-w-3xl w-full bg-gray-900 rounded-3xl shadow-2xl p-8 sm:p-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 sm:mb-8 text-center">Give Us Your Feedback</h2>
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
