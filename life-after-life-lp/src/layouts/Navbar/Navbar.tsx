import { useState } from "react";
import logo from "../../assets/icons/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="bg-white/30 backdrop-blur-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={scrollToTop}
              className="hover:scale-105 transition-transform duration-300"
            >
              <img src={logo} alt="Logo" className="h-12 w-12" />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-950 hover:text-slate-500 transition ml-8"
            >
              קצת עלינו
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-slate-950 hover:text-slate-500 transition"
            >
              היחודיות שלנו
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-slate-950 hover:text-slate-500 transition"
            >
              מחירון
            </button>
            <button className="text-slate-950 px-6 py-2 rounded-lg border-2 border-slate-950 border-solid hover:scale-105 transition duration-300">
              הירשם
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-950 hover:text-slate-500 focus:outline-none"
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
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-right px-3 py-2 text-gray-700 hover:bg-rose-100 hover:text-rose-950 rounded-md transition"
            >
              קצת עלינו
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-right px-3 py-2 text-gray-700 hover:bg-rose-100 hover:text-rose-950 rounded-md transition"
            >
              היחודיות שלנו
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-right px-3 py-2 text-gray-700 hover:bg-rose-100 hover:text-rose-950 rounded-md transition"
            >
              מחירון
            </button>
            <button className="w-full mt-2 bg-slate-950 text-slate-200 px-6 py-2 rounded-lg hover:bg-slate-600 transition">
              הירשם
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;