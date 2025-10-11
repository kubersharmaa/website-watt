"use client";
import { useEffect } from "react";

export default function CalendlyCTA() {
  useEffect(() => {
    if (typeof window !== "undefined" && !window.Calendly) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const openCalendly = (e) => {
  e.preventDefault();
  if (window.Calendly) {
    // Directly open popup widget
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/wattincorporate/project-discussion-meeting?background_color=0b1620&text_color=ffffff&primary_color=0070f3",
      prefill: {},
      utm: {}
    });

    // Body par overflow hide kar do jab popup open ho
    document.body.style.overflow = "hidden";

    // Automatically restore overflow when popup is closed
    const checkCalendly = setInterval(() => {
      const iframe = document.querySelector(".calendly-overlay iframe");
      if (!iframe) {
        document.body.style.overflow = "auto";
        clearInterval(checkCalendly);
      }
    }, 500);
    
  } else {
    alert("Calendly not loaded yet. Please wait a moment.");
  }
  return false;
};


  return (
    <>
      {/* Only Floating CTA Button */}
      <a href="#" className="calendly-cta" onClick={openCalendly}>
        Book a Meeting
      </a>

      <style jsx>{`
        .calendly-cta {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 9999;
          background: linear-gradient(135deg, #0070f3, #0059c9);
          color: #fff;
          padding: 14px 22px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .calendly-cta:hover {
          transform: translateY(-3px);
          background: linear-gradient(135deg, #0059c9, #003c91);
        }

        .calendly-cta:active {
          transform: scale(0.97);
        }
      `}</style>
    </>
  );
}
