import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Change Link to NavLink
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper function to keep the code clean
  const linkStyles = ({ isActive }) =>
    `transition-all duration-300 pb-1 ${
      isActive 
        ? "text-green-600 border-b-2 border-green-600" 
        : "text-gray-700 hover:text-green-600"
    }`;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-16 md:h-20 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} className={linkStyles}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 pb-4 font-medium bg-gray-50">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                className={linkStyles}
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
