"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import projects from "@/data/projects";

const categories = [
  "All",
  "AI & Robotics",
  "IoT",
  "Hardware & 3D Printing",
  "CNC & Hardware",
  "Robotics",
  "Electronics",
  "AI & Healthcare",
  "Healthcare & Robotics",
  "Web Development",
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Disable background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selectedProject]);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % selectedProject.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage(
      (prev) =>
        (prev - 1 + selectedProject.images.length) %
        selectedProject.images.length
    );
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white p-10">
      {/* Page Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Explore Our Projects</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A showcase of our latest work, blending creativity and technology.
        </p>
        <div className="mt-2 w-24 h-1 bg-teal-400 mx-auto rounded-full"></div>
      </div>

      {/* Categories Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === category
                ? "bg-teal-400 text-gray-900"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-xl shadow-lg p-4 cursor-pointer hover:scale-105 transform transition flex flex-col"
            onClick={() => {
              setSelectedProject(project);
              setCurrentImage(0);
            }}
          >
            <div className="w-full h-56 flex items-center justify-center bg-gray-900 rounded-lg mb-4">
              {project.images?.[0] ? (
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="h-full object-contain"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
            </div>
            <div className="flex flex-col overflow-y-auto max-h-40 scrollbar-hide">
              <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
              <span className="text-teal-400 text-sm mb-2">{project.category}</span>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="my-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-900/90 rounded-3xl shadow-lg text-center py-16 relative overflow-hidden">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Interested in any of these services?</h2>
        <p className="text-gray-400 mb-8 text-lg sm:text-xl">
          Let’s collaborate and bring your ideas to life!
        </p>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/wattincorporate/project-discussion-meeting?background_color=0b1620&text_color=ffffff&primary_color=0070f3"
          style={{ minWidth: "320px", height: "700px" , overflow: "hidden"}}
        ></div>
        {/* Decorative Shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          ></div>

          <div className="relative bg-gray-800 rounded-2xl p-6 w-[95%] max-w-3xl shadow-2xl z-50 flex flex-col overflow-hidden">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl font-bold z-[60] bg-black/50 rounded-full p-1"
            >
              
            </button>

            <div className="relative w-full h-96 flex items-center justify-center bg-gray-900 rounded-lg mb-6 overflow-hidden">
              <Image
                src={selectedProject.images[currentImage]}
                alt={selectedProject.title}
                width={800}
                height={400}
                className="object-contain max-h-96 relative z-10"
              />
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 p-2 rounded-full z-20"
                  >
                    
                    ◀
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 p-2 rounded-full z-20"
                  >
                    
                    
                  </button>
                </>
              )}
            </div>

            <div className="flex flex-col items-start text-left overflow-y-auto max-h-60 scrollbar-hide">
              <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
              <span className="text-teal-400 text-sm mb-3">{selectedProject.category}</span>
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Global Scrollbar Hide */}
      <style jsx global>{`
        ::-webkit-scrollbar { display: none; }
        body { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
