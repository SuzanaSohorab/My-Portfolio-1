import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Tech Terk – Interactive Course Platform",
      description:
        "A full-stack learning platform where users can explore courses, enroll in programs, and track their learning journey. Features include secure authentication, dynamic course pages, real-time enrollment updates, and admin-controlled content management.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
      image: "/src/assets/teck.png",
      github: "https://github.com/SuzanaSohorab/Teck-Terk1",
      live: "https://tech-trek-client.web.app",
    },
    {
      title: "Go Green – Smart Inventory & Loss Management System",
      description:
        "A web-based IoT-inspired solution to track perishable goods and reduce post-harvest losses. Features include dynamic dashboards, CRUD operations, real-time inventory updates, and analytics.",
      tech: ["HTML", "Tailwind CSS", "JavaScript", "Node.js", "MongoDB"],
      image: "/src/assets/go-green.png",
      github: "https://github.com/yourusername/go-green-dashboard",
      live: "https://remarkable-paprenjak-440aa8.netlify.app",
    },
    {
      title: "Suzipi Gaming App Store",
      description:
        "A modern gaming app store to explore, download, and review games with an interactive UI. Features include game search, responsive design, and smooth user experience with Vite and Firebase.",
      tech: ["React", "Firebase", "Vite", "CSS"],
      image: "/src/assets/suzipi.png",
      github: "https://github.com/yourusername/suzipi-app-store",
      live: "https://suzupi-app-store.netlify.app",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] dark:from-[#0f172a] dark:to-[#1e293b] text-gray-900 dark:text-gray-100 px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-16 transition duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 md:mb-12 text-center text-[#2563eb] dark:text-[#60a5fa]">
          My Projects
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-[#1e293b]/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.02]"
            >
              {/* Image container with hover animation */}
              <div className="overflow-hidden h-40 sm:h-48 md:h-52 group relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fill transform transition-transform duration-[4000ms] ease-linear group-hover:animate-scrollUp"
                />
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#2563eb] dark:text-[#93c5fd]">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#2563eb] hover:bg-[#1e40af] text-white text-sm font-medium rounded-full transition w-full sm:w-auto text-center"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-600 hover:text-white text-sm font-medium rounded-full transition w-full sm:w-auto text-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
