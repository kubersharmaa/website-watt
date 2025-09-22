// app/components/Hero.js

"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Prev Arrow
function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 p-2 rounded-full"
    >
      <ChevronLeft size={28} className="text-white" />
    </button>
  );
}

// Custom Next Arrow
function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 p-2 rounded-full"
    >
      <ChevronRight size={28} className="text-white" />
    </button>
  );
}

export default function Hero() {
  const sliderRef = useRef(null);
  const videoRefs = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Fast and Efficient Robotics & IoT Services",
      description:
        "WATT (World of Automation Technology & Trainings) is a robotics-based company using emerging technologies like IoT, AI, and Data Science to solve real-world problems and automate repetitive tasks.",
      media: "/Home/robot.mp4",
      type: "video",
    },
    {
      title: "3D Printing: Turning Ideas into Reality",
      description:
        "Discover how 3D printing transforms digital designs into physical objects. From rapid prototyping to functional products, explore the endless possibilities of layer-by-layer manufacturing.",
      media: "/Home/3D-printing.mp4",
      type: "video",
    },
    {
      title: "Next-Gen IT & Automation Services",
      description:
        "Leveraging AI, IoT, and data-driven strategies, we create intelligent systems to streamline business processes.",
      media: "/Home/Automation-services.mp4",
      type: "video",
    },
    {
      title: "Advanced Electronics Design",
      description:
        "Designing and prototyping innovative circuits that power modern devices and solutions.",
      media: "/Home/Electronic.mp4",
      type: "video",
    },
    {
      title: "Creative Web Development",
      description:
        "Building responsive, engaging websites that leave a lasting impression.",
      media: "/Home/web-dev.mp4",
      type: "video",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    pauseOnHover: false,
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
  };

  // Play the active video and pause others
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;

      if (idx === currentSlide) {
        video.currentTime = 0; // Rewind active video
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            // Autoplay was prevented.
            console.log("Autoplay was prevented:", error);
          });
        }
      } else {
        video.pause();
        video.currentTime = 0; // Reset non-active videos
      }
    });
  }, [currentSlide]);

  return (
    <section className="relative w-full h-screen">
      <Slider ref={sliderRef} {...settings} className="h-full">
        {slides.map((slide, idx) => (
          <div key={idx} className="relative w-full h-screen">
            {slide.type === "video" ? (
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                src={slide.media}
                className="w-full h-full object-cover"
                muted
                playsInline
                autoPlay
                onEnded={() => {
                  if (sliderRef.current) sliderRef.current.slickNext();
                }}
              />
            ) : (
              <Image
                src={slide.media}
                alt={slide.title}
                fill
                className="object-cover"
                priority={idx === 0}
              />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

            {/* Centered Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h6 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                {slide.title}
              </h6>
              <p className="text-sm md:text-xl text-gray-200 mb-8 max-w-2xl">
                {slide.description}
              </p>
              <Link
                href="/projects"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition"
              >
                Explore Projects
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}