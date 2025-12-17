import { useState } from "react";
import logo from "../../assets/icons/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#home">
              <img src={logo} alt="Logo" className="h-12 w-12" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#Home"
              className="text-slate-200 hover:text-slate-50 transition ml-8"
            >
              בית
            </a>
            <a
              href="#about"
              className="text-slate-200 hover:text-slate-50 transition"
            >
              קצת עלינו
            </a>
            <a
              href="#services"
              className="text-slate-200 hover:text-slate-50 transition"
            >
              ביקורות
            </a>
            <a
              href="#contact"
              className="text-slate-200 hover:text-slate-50 transition"
            >
              צור קשר
            </a>
            <button className="bg-gradient-to-r from-violet-800 to-indigo-800 text-slate-200 px-6 py-2 rounded-lg hover:scale-105 transition duration-300">
              הירשם
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-200 hover:text-slate-50 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition"
            >
              ביקורות
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition"
            >
              קצת עלינו
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition"
            >
              צרו קשר
            </a>
            <button className="w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              הירשם
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
