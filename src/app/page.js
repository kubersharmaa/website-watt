"use client";
import { useState } from "react"; // ✅ Added useState
import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";
import projects from "@/data/projects";
import gallery from "@/data/gallery";
import blogs from "@/data/blogs";

const partners = [
  { id: 1, name: "Partner 1", logo: "/partners/SATI_Vidisha.jpg" },
  { id: 2, name: "Partner 2", logo: "/partners/AGH.jpg" },
  { id: 3, name: "Partner 3", logo: "/partners/Maulana_Azad_National_Institute_of_Technology.jpg" },
  { id: 4, name: "Partner 4", logo: "/partners/CSIR.jpg" },
];

const services = [
  { id: 1, name: "AI & Robotics", icon: "🤖", description: "Building intelligent machines and autonomous systems." },
  { id: 2, name: "Electronics", icon: "⚡", description: "Designing and prototyping innovative circuits." },
  { id: 3, name: "IoT", icon: "🌐", description: "Connecting devices and making life smarter." },
  { id: 4, name: "Hardware", icon: "🔩", description: "Crafting reliable hardware solutions." },
  { id: 5, name: "Web Development", icon: "💻", description: "Creating responsive and engaging websites." },
  { id: 6, name: "Mobile App Development", icon: "📱", description: "Building apps that people love to use." },
  { id: 7, name: "3D Printing", icon: "🖨️", description: "Turning ideas into tangible 3D models." },
  { id: 8, name: "Laser Cutting Models", icon: "🔦", description: "Precision cutting for creative projects." },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to open Calendly popup
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
    <div className={`${selectedProject ? "overflow-hidden" : ""}`}>
      <Hero />

      {/* Services Section */}
      <section className="my-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center sm:text-left">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center p-6 bg-gray-900/90 border border-gray-800 rounded-2xl shadow-md hover:shadow-teal-400/30 hover:-translate-y-1 transform transition duration-300"
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="text-lg font-semibold text-white text-center mb-1">
                {service.name}
              </h3>
              <p className="text-gray-400 text-sm text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="my-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4 sm:gap-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-teal-400 font-semibold hover:text-teal-500 transition"
          >
            Explore More →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {projects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="bg-gray-900/80 border border-gray-800 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-teal-500/20 hover:-translate-y-1 transform transition duration-300"
            >
              {project.images?.[0] && (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400 mb-3 text-sm sm:text-base">
                {project.description.length > 150
                  ? project.description.slice(0, 150) + "..."
                  : project.description}
              </p>
              <button
                onClick={() => setSelectedProject(project)}
                className="text-teal-400 hover:text-teal-500 font-medium transition"
              >
                View Project →
              </button>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <>
            {/* Static blurred background overlay */}
            <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"></div>

            {/* Modal container */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="bg-gray-900 rounded-2xl shadow-lg max-w-3xl w-full p-4 sm:p-6 relative overflow-y-auto max-h-[90vh]">
                <button
                  className="absolute top-4 right-4 text-white text-2xl font-bold"
                  onClick={() => setSelectedProject(null)}
                >
                  ×
                </button>

                <h2 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {selectedProject.images?.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${selectedProject.title}-${idx}`}
                      className="w-full h-48 sm:h-40 md:h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>

                <p className="text-gray-300 mb-4">{selectedProject.description}</p>
                <p className="text-teal-400 font-semibold">
                  Category: {selectedProject.category} | Status: {selectedProject.status}
                </p>
              </div>
            </div>
          </>
        )}
      </section>

      {/* Gallery Section */}
      <section className="my-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4 sm:gap-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Galleries</h2>
          <Link
            href="/gallery"
            className="text-teal-400 font-semibold hover:text-teal-500 transition"
          >
            Explore More →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {gallery
            ?.flatMap((event) =>
              event.images.map((img) => ({ img, title: event.title }))
            )
            .slice(0, 3)
            .map((item, index) => (
              <div
                key={index}
                className="relative w-full h-64 sm:h-72 md:h-64 rounded-2xl overflow-hidden bg-gray-900/90 border border-gray-800 shadow-lg hover:shadow-teal-500/30 transform hover:-translate-y-1 transition-all duration-500"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover object-top transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-center font-semibold px-4">{item.title}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="my-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white text-center sm:text-left">
          Our Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
          {partners.map((p) => (
            <div
              key={p.id}
              className="flex justify-center items-center bg-gray-900/80 border border-gray-800 rounded-2xl shadow hover:shadow-lg transition w-44 sm:w-52 md:w-56 h-44 sm:h-52 md:h-56 p-4"
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Blogs Section */}
      <section className="my-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4 sm:gap-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">From the Blog</h2>
          <Link
            href="/blogs"
            className="text-teal-400 font-semibold hover:text-teal-500 transition"
          >
            Explore More →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {blogs?.slice(0, 3).map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-900/80 border border-gray-800 rounded-2xl shadow-lg hover:shadow-teal-500/20 hover:-translate-y-1 transform transition duration-300 flex flex-col"
            >
              <div className="w-full h-48 relative rounded-t-2xl overflow-hidden">
                <Image src={blog.image} alt={blog.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-white">{blog.title}</h3>
                <p className="text-gray-400 mb-4 text-sm flex-1">{blog.description}</p>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="text-teal-400 hover:text-teal-500 font-medium transition mt-auto"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  );
}
