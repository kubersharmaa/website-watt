import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">About WATT</h1>
        <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto mb-12">
          WATT is a pioneering robotics company at the forefront of technological innovation.
          We specialize in integrating cutting-edge technologies like IoT, AI, and Data Science
          to develop solutions that address real-world challenges and automate repetitive human tasks.
        </p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-400">
              At WATT, we are committed to transforming industries by applying advanced robotics
              and automation expertise. Our work significantly contributes to the evolution of
              Industrial Automation, enabling businesses to optimize their operations and achieve
              unprecedented levels of efficiency. We strive to create a future where technology
              seamlessly integrates with human endeavors, fostering progress and improving quality of life.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-400">
              Our core mission is to enhance efficiency and productivity across various sectors
              through intelligent automation. We envision a world where our innovations empower
              businesses and individuals, creating a more connected, efficient, and sustainable
              future for everyone.
            </p>
          </div>
        </div>

        {/* Projects Timeline */}
        <h2 className="text-3xl font-bold text-center mb-10">Our Journey & Key Projects</h2>
        <div className="relative border-l-2 border-white pl-6 space-y-10 mb-16">
          {[
            { title: "Smart Attendance System", desc: "Automated attendance tracking for schools and offices." },
            { title: "Smart Wheel Chair & Attachments", desc: "Enhancing mobility with smart, AI-powered solutions." },
            { title: "Room Automation", desc: "Intelligent control of lighting, climate, and appliances." },
            { title: "Robotics & Arduino Kits", desc: "Educational and functional kits for robotics projects." },
            { title: "3D Printing & Laser-Cut Models", desc: "Custom prototypes, robotics parts, and gift items." },
            { title: "Pen Plotters & Signage Boards", desc: "Precision plotting and custom display solutions." },
          ].map((project, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-4 top-2 w-3 h-3 bg-white rounded-full"></div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.desc}</p>
              </div>
            </div>
          ))}
          
        </div>
        
</section>

      {/* Footer */}
      <footer className="bg-gray-900 mt-16 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <div className="flex gap-4 text-gray-400 text-lg">
            <a href="#"><FaFacebook /></a>
            <a href="https://www.instagram.com/watt_india?igsh=d2V2NWU2dm90Mmt2"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/watt-incorporate/"><FaLinkedin /></a>
          </div>
        </div>
      </footer>
  </div>
  );
}
