import React from "react";
import { useTheme } from "./ThemeContext";


const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/70 dark:bg-[#0f172a]/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-700 transition duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Left: Your Name */}
        <h1 className="text-2xl font-bold text-[#2563eb] dark:text-[#60a5fa]">
          Suzana Sohorab
        </h1>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex space-x-8 text-gray-800 dark:text-gray-200 font-medium">
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="hover:text-[#2563eb] dark:hover:text-[#93c5fd] transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Buttons */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              // 🌙 Moon Icon for Dark Mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              // ☀️ Sun Icon for Light Mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>

          {/* Download CV Button */}
          <a
            href="/src/Resume/MY-Web-Resume.pdf"
            download
            className="px-4 py-2 bg-[#2563eb] hover:bg-[#1e40af] text-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;