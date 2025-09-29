"use client";
import Image from "next/image";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import gallery data
import events from "@/data/gallery";

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function GalleryPage() {
  // Custom Arrow Components
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-gray-800 bg-opacity-60 p-2 rounded-full hover:bg-gray-600 hover:bg-opacity-80 transition"
      onClick={onClick}
    >
      <FaChevronRight className="text-white text-xl" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-gray-800 bg-opacity-60 p-2 rounded-full hover:bg-gray-600 hover:bg-opacity-80 transition"
      onClick={onClick}
    >
      <FaChevronLeft className="text-white text-xl" />
    </div>
  );

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Event Gallery
        </h1>

        {events.map((event, index) => (
          <div key={index} className="space-y-6">
            {/* Event Info */}
            <div>
              <h2 className="text-2xl font-semibold text-white">{event.title}</h2>
              <p className="text-gray-400 mt-2">{event.description}</p>
            </div>

            {/* Image Carousel */}
            <div className="relative">
              <Slider {...settings}>
                {event.images.map((img, i) => (
                  <div key={i} className="px-2">
                    <div className="w-full h-[250px] sm:h-[300px] md:h-[300px] lg:h-[300px] relative rounded-lg overflow-hidden shadow-lg bg-transparent flex items-center justify-center">
                      <Image
                        src={img}
                        alt={`${event.title} - Image ${i + 1}`}
                        fill
                        className="object-cover object-top w-full h-full"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
