"use client";
import { useState, useEffect } from "react";
import testimonials from "@/data/testimonials";

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const cardWidth = 320;
  const gap = 24;
  const visibleCards = 3;

  const totalCards = testimonials.length;

  // Circular next/prev
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalCards);
  };

  // Prepare infinite loop by duplicating cards
  const extendedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>

        <div className="relative flex justify-center items-center">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3 shadow z-10"
          >
            &#10094;
          </button>

          {/* Slider */}
          <div
            className="overflow-hidden"
            style={{ width: `${visibleCards * (cardWidth + gap) - gap}px` }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${current * (cardWidth + gap)}px)`,
                gap: `${gap}px`,
              }}
            >
              {extendedTestimonials.map((t, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-8 shadow-lg flex-shrink-0"
                  style={{ width: `${cardWidth}px` }}
                >
                  {/* Image section */}
                  {/* <img src={t.image} alt={t.name} className="rounded-full w-24 h-24 mx-auto mb-4" /> */}
                  <h3 className="text-xl font-semibold mb-1">{t.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{t.role}</p>
                  <p className="text-gray-200 italic">&quot;{t.feedback}&quot;</p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3 shadow z-10"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}
