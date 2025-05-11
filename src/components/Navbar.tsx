import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-opacity-70 ${
        isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="hymid-container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="text-3xl font-bold text-hymid-teal tracking-tight hover:scale-105 transition-transform duration-300"
          >
            STC
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {[
            ["/", "Home"],
            ["/about-us", "About Us"],
            ["/services", "Services"],
            ["/products", "Products"],
            ["/blogs", "Blogs"],
          ].map(([path, label]) => (
            <Link
              key={path}
              to={path}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
          {[
            ["/#industries", "Industries"],
            ["/#sustainability", "Sustainability"],
            ["/#quality", "Quality"],
            ["/#contact", "Contact"],
          ].map(([path, label]) => (
            <a
              key={path}
              href={path}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 rounded-md hover:bg-gray-700 hover:bg-opacity-30"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 shadow-md">
          <div className="flex flex-col px-6 py-4 space-y-3 text-gray-300">
            {[
              ["/", "Home"],
              ["/about-us", "About Us"],
              ["/services", "Services"],
              ["/products", "Products"],
              ["/#industries", "Industries"],
              ["/#process", "Process"],
              ["/#sustainability", "Sustainability"],
              ["/#quality", "Quality"],
              ["/#contact", "Contact"],
            ].map(([path, label]) => (
              <Link
                key={path}
                to={
                  path.startsWith("/") && !path.includes("#") ? path : undefined
                }
                href={path.includes("#") ? path : undefined}
                onClick={() => setIsOpen(false)}
                className="block hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
