// data/projects.js

const projects = [
  {
    id: 1,
    title: "Autonomous Drone Navigation",
    category: "AI & Robotics",
    status: "In Progress",
    images: [
      "/projects/drone1.jpg",
      "/projects/drone2.jpg",
      "/projects/drone3.jpg",
    ],
    description: `Drone Services involve the use of high-performance unmanned aerial vehicles (UAVs) equipped with specialized cameras, sensors, and navigation systems to carry out tasks in various domains such as aerial photography, surveillance, agriculture, inspection, and delivery. These services are customized to meet the technical and operational needs of industries, institutions, and research organizations.Our drone solutions include both off-the-shelf and custom-built drones, and we offer full deployment including pilot operation, flight planning, real-time data collection, post-processing, and system training.`,
  },
   {
    id: 2,
    title: "3D Printed Prosthetic Hand",
    category: "Hardware & 3D Printing",
    status: "Completed",
    images: [
      "/projects/prosthetic1.jpg",
      "/projects/prosthetic2.jpg",
      "/projects/prosthetic3.jpg",
      "/projects/prosthetic4.jpg",
      "/projects/prosthetic5.jpg",
      "/projects/prosthetic6.jpg",
    ],
    description: `We offer high-quality FDM 3D printing services for prototyping, custom parts, and small-batch production. 
    Our prints are durable, accurate, and cost-effective, suitable for both personal and industrial applications.

We support a variety of materials including PLA, ABS, and TPU, allowing flexibility based on strength, finish, and functional requirements. Customers can share their 3D designs in .STL format, and we ensure fast turnaround with nationwide delivery.`,
  },
  {
    id: 3,
    title: "Obstacle Avoidance Robot",
    category: "Robotics",
    status: "Completed",
    images: [
      "/projects/Obstacle-Avoidance-Robot1.jpg",
      "/projects/obstacle-Avoidance-Robot2.jpg",
      "/projects/obstacle-Avoidance-Robot3.jpg",
    ],

    description: `The Obstacle Avoider Robot is an autonomous mobile robot capable of detecting and avoiding obstacles in its path. 
    Using ultrasonic or IR proximity sensors, it continuously scans its surroundings and sends feedback to the microcontroller.
     Based on sensor inputs, the robot makes intelligent decisions to turn left, right, or stop to prevent collisions.
      It is widely used in robotics education, competitions, and demonstrations to showcase autonomous navigation and decision-making.
       The Obstacle Avoider Robot is ideal for beginners learning microcontrollers, sensor integration, and motor control. 
       It can be enhanced with multiple sensors for 360-degree detection or integrated with GPS and AI for advanced applications like self-driving models.

     Its simple yet effective design makes it highly engaging for learners.`,
  },
 
  {
    id: 4,
    title: "Dr. Bharti (AI Model)",
    category: "AI & Healthcare",
    status: "In Progress",
    images: [
      "/projects/dr1.jpg",
      "/projects/dr2.jpg",
      "/projects/dr3.jpg",
      "/projects/dr4.jpg",
    ],
    description: `Dr. Bharti is a personalized AI model designed to function as a virtual healthcare assistant, developed through in-depth research in artificial intelligence and natural language processing. 
    The system aims to support medical professionals and patients by providing intelligent, conversational interaction for health monitoring, symptom analysis, and basic diagnostics.
    Equipped with a smart dialogue system, Dr. Bharti can ask context-aware health-related questions, recommend next steps based on symptoms, schedule appointments, provide medication reminders, and offer general health advice. 
    The model can be integrated with wearable health trackers, electronic health records (EHR), and mobile apps to enhance real-time decision-making.Built using machine learning and NLP frameworks like TensorFlow, Dialog flow, or GPT-based architectures,
     Dr. Bharti is trained on curated medical data sets while adhering to ethical guidelines and privacy protocols.
     This AI assistant is ideal for remote care, telemedicine platforms, and health-tech startups aiming to improve accessibility and patient engagement.`,
  },
  
  {
    id: 5,
    title: "Pen Plotter (Small)",
    category: "CNC & Hardware",
    status: "Featured",
    images: ["/projects/Pen-Plotter.jpg"],
    description: `The Pen Plotter (Small) is a compact and affordable CNC-based drawing machine designed to produce high-precision vector graphics on paper or similar surfaces. Ideal for hobbyists, students, artists, and makers, it can sketch complex diagrams, circuit layouts, design patterns, and calligraphy with consistent accuracy.This model features a lightweight frame, stepper motors, a pen-holder module, and USB connectivity for interfacing with popular vector graphics software such as Inkscape or G-code interpreters. It supports SVG/DXF formats and is compatible with Windows, macOS, and Linux platforms.With easy calibration, plug-and-play functionality, and low power consumption, this plotter is perfect for educational demos, DIY art projects, PCB layout marking, and personalized gifts.`,
  },
 
  {
    id: 6,
    title: "Smart Wheelchair Attachment",
    category: "Healthcare & Robotics",
    status: "Featured",
    images: [
      "/projects/Smart-Wheelchair-Attachment1.jpg",
      "/projects/Smart-Wheelchair-Attachment2.jpg",
      "/projects/Smart-Wheelchair-Attachment3.jpg",
    ],
    description: `The Smart Wheelchair Attachment is a compact, plug-and-play module designed to convert any manual wheelchair into a motor-powered smart mobility device. It features an easy-to-install frame with integrated brushless DC motors, a joystick for directional control, and optional voice recognition for hands-free operation.This innovative system is equipped with obstacle detection sensors, Bluetooth/Wi-Fi connectivity, and a mobile app interface for real-time control and monitoring. It supports speed adjustment, battery status display, and emergency stop functionality, making it ideal for individuals with mobility challenges.The attachment is lightweight, portable, and designed to fit most standard wheelchairs without permanent modification. It enhances the user's independence while offering caregivers additional control options. Suitable for homes, hospitals, elderly care centers, and rehabilitation facilities.`,
  },

   {
    id: 7,
    title: "Line Follower Robot",
    category: "Robotics",
    status: "Completed",
    images: [
      "/projects/Line Follower Robot1.jpg",
      "/projects/Line Follower Robot2.jpg",
      "/projects/Line Follower Robot3c:UsersphulrDesktopwattWatt GalleryWatt GalleryWhatsApp Image 2025-07-31 at 17.14.17_53f11f13.jpg.jpg",
    ],
    description: `A Line Follower Robot is an autonomous robotic vehicle designed to detect and follow a continuous black line marked on the floor. It uses infrared (IR) sensors to sense the contrast between the line and background surface. The microcontroller processes these signals and drives the motors to adjust the path accordingly. This robot demonstrates fundamental concepts of robotics, electronics, and programming, making it an excellent project for students, hobbyists, and beginners. It is widely used in competitions, industrial model demonstrations, and automation training. With its simple design and flexible coding, it provides a practical way to understand automation and sensor-based navigation. The Line Follower Robot can also be enhanced with speed control, Bluetooth operation, or obstacle avoidance for advanced learning.`,
  },


   {
    id: 8,
    title: "Smart Card Attendance System",
    category: "IoT",
    status: "Featured",
    images: [
      "/projects/Smart-Attendance-System1.jpg",
      "/projects/Smart-Attendance-System2.jpg",
    ],
    description: `The Smart Attendance System is a comprehensive IoT-based solution that streamlines and automates attendance tracking across educational institutions, offices, and co-working spaces. Utilizing RFID (Radio Frequency Identification) technology, each user is provided with a unique RFID card or tag that, when scanned at an access terminal or smart gate, records their identity and timestamp in real time. To enhance accuracy and security, the system supports advanced features like facial recognition and biometric authentication (such as fingerprint or palm scanning), eliminating the chances of proxy attendance or manipulation.

This integrated system not only reduces administrative workload but also ensures tamper-proof and efficient recordkeeping. It can be connected to a cloud-based dashboard that allows administrators to access analytics, daily reports, and logs, as well as sync attendance data with payroll or academic management systems. Additional functionalities include automatic late mark detection, entry-exit logging, and real-time SMS or email notifications. The Smart Attendance System is highly customizable and scalable, making it suitable for schools, colleges, gym, industries, and organizations seeking reliable, digital attendance management with optional hybrid verification modules.`,
  },

  {
    id: 9,
    title: "Robotic Eye Mechanism",
    category: "Robotics",
    status: "Completed",
    images: ["/projects/Robotic-eye1.jpg", "/projects/Robotics-eye2.jpg"],
    description: `The Robotic Eye Mechanism is a bio-inspired mechatronic model that mimics the motion of a human eye. It is designed using servo motors and linkages that allow horizontal and vertical rotations, simulating realistic eye movement. When integrated with a camera, it can track objects and respond to external stimuli using sensors or computer vision algorithms. This project is particularly useful for research, robotics training, and educational demonstrations. It helps students understand biomechanics, servo control, and automation. Its compact structure is built using lightweight materials such as acrylic or 3D-printed frames, making it both portable and durable. The Robotic Eye can also be customized for AI-based tracking experiments, human-robot interaction, or surveillance projects where directional vision is required.`,
  },

  {
    id: 10,
    title: "Web Application Development Service",
    category: "Web Development",
  
    images: ["/projects/web-dev.jpg",],
    description: `We offer comprehensive web development services, including the creation of static and dynamic websites, interactive user interfaces, and powerful admin dashboards tailored to your project or business needs. Our websites are responsive, visually engaging, and optimized for performance across all devices.From simple portfolio pages and institutional websites to complex platforms with user authentication, data handling, and real-time interactions, we ensure seamless backend integration using technologies like Node.js, Express, PHP, and cloud-based databases (MongoDB, Firebase, MySQL).We also develop custom admin dashboards with data visualization, form handling, analytics, and user management modules—perfect for internal monitoring, inventory control, or educational platforms. Each project is built using modern frameworks like React, Angular, or plain HTML/CSS/JS based on the requirement.Optional features include SEO optimization, deployment support, domain setup, and ongoing maintenance.Perfect for startups, institutions, product showcases, IoT portals, and customized internal tools.`,
  },

  {
    id: 11,
    title: "Led Bulbs",
    category: "Electronics",
    images: ["/projects/Led-Bulbs.jpg", "/projects/Led-Bulbs2.jpg"],
    description: `An LED Bulb (Light Emitting Diode bulb) is an energy-efficient lighting solution that provides bright, consistent illumination with significantly lower power consumption than traditional incandescent or CFL bulbs. It is designed for residential, commercial, and industrial lighting needs, offering a long operational life, minimal heat output, and environment-friendly operation.

These bulbs are available in various wattages, color temperatures (cool white, warm white, daylight), and socket types. They are often used in automation and IoT-based projects due to their compatibility with sensors, smart switches, and microcontrollers like Arduino or Raspberry Pi.`,
  },
  {
    id: 12,
    title: "Educational Robotic Kits",
    category: "AI & Robotics",
    status: "Completed",
    images: ["/projects/Educational-Robotic-Kits.jpg"],
    description: `The Robotics Kit is a comprehensive, all-in-one package designed for students, hobbyists, and educators to build a wide range of robotics and automation projects. It includes a curated collection of essential hardware components such as an Arduino-compatible microcontroller, DC and servo motors, ultrasonic and IR sensors, motor driver modules, jumper wires, wheels, chassis parts, battery holders, and more.
This kit enables users to develop hands-on skills in embedded systems, electronics, and mechanical design. Ideal for school projects, college assignments, robotics competitions, and DIY innovations, it supports multiple applications like obstacle-avoiding robots, line-following robots, Bluetooth-controlled cars, and automation systems.
All components are reusable and packed in a compartmentalized box for easy organization. The kit is accompanied by sample codes, wiring diagrams, and tutorials (optional), making it suitable for both guided learning and independent experimentation. Smart Wheelchair Attachment is a compact, plug-and-play module designed to convert any manual wheelchair into a motor-powered smart mobility device. It features an easy-to-install frame with integrated brushless DC motors, a joystick for directional control, and optional voice recognition for hands-free operation.This innovative system is equipped with obstacle detection sensors, Bluetooth/Wi-Fi connectivity, and a mobile app interface for real-time control and monitoring. It supports speed adjustment, battery status display, and emergency stop functionality, making it ideal for individuals with mobility challenges.The attachment is lightweight, portable, and designed to fit most standard wheelchairs without permanent modification. It enhances the user's independence while offering caregivers additional control options. Suitable for homes, hospitals, elderly care centers, and rehabilitation facilities.`,
  },
  {
    id: 13,
    title:
      "Embedded Systems Design & Development Solutions - ATmega, ESP, Raspberry Pi, Arduino-Based",
    category: "IoT",
    images: ["/projects/Embedded-System .jpg"],
    description: `WATT Technologies offers professional Embedded Systems Design and Development services tailored to your specific requirements. We specialize in microcontroller-based solutions using ATmega, ESP8266/ESP32, Raspberry Pi, and Arduino platforms to create reliable and scalable products. Our expertise covers IoT device development with Wi-Fi, RF, and Bluetooth connectivity, along with app and web-based control integration for smart, connected solutions. We provide sensor interfacing, custom firmware development, PCB design, and enclosure prototyping to deliver complete end-to-end solutions. From industrial automation devices to consumer and academic projects, we ensure efficient, cost-effective, and production-ready embedded systems. With a focus on innovation, quality, and timely delivery, WATT Technologies transforms your ideas into fully functional prototypes and market-ready products.
`,
  },

  {
    id: 14,
    title: "Double Sided PCB",
    category: "Electronics",
    images: ["/projects/Double-Sided-PCB.jpg"],
    description: `We provide high-performance Double-Sided Printed Circuit Boards (PCBs) suitable for both prototyping and final product deployment. These boards feature copper layers on both sides, allowing components to be mounted on the top and bottom for compact and efficient designs.

Our service ensures accurate routing, durable copper plating, and reliable via connections, making the boards ideal for LED lighting, consumer electronics, power supplies, automotive modules, and industrial devices. Both through-hole and surface mount (SMD) components are supported.

Fabrication includes solder mask application, component placement, and quality testing for stable performance. Optional services such as assembly, testing, and enclosure design are also available.

A trusted choice for students, startups, and hardware innovators.`,
  },
];
 


export default projects;
