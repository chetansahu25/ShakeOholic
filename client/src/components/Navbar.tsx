import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Menu", href: "#menu" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white fixed top-0 left-0 shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-pink-500">
          Shakeoholic
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-pink-500 transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#reserve"
            className="ml-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
          >
            Reserve
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-700 hover:text-pink-500"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#reserve"
            className="block mt-2 px-4 py-2 text-center bg-pink-500 text-white rounded hover:bg-pink-600 transition"
          >
            Reserve
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
