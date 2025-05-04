import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1a1a1a] text-white py-3 shadow-md'
          : 'bg-transparent text-white py-6'
      }`}
    >
      <div className="hymid-container flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-bold ${isScrolled ? 'text-hymid-teal' : 'text-white'}`}>STC</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className={`nav-link ${isScrolled ? 'text-hymid-dark' : 'text-white'}`}>Home</Link>
          <Link to="/about-us" className={`nav-link ${isScrolled ? 'text-hymid-dark' : 'text-white'}`}>About Us</Link>
          <Link to="/services" className={`nav-link ${isScrolled ? 'text-hymid-dark' : 'text-white'}`}>Services</Link>
          <Link to="/products" className={`nav-link ${isScrolled ? 'text-hymid-dark' : 'text-white'}`}>Products</Link>
          <Link to="/blogs" className={`nav-link ${isScrolled ? 'text-hymid-dark' : 'text-white'}`}>Blogs</Link>
          <Link to="/contactUs" className={`nav-link ${isScrolled ? 'text-hymid-dark' : 'text-white'}`}>Contacts</Link>
          <a href="/#industries" className={`nav-link ${isScrolled ? 'text-hymid-dark' : 'text-white'}`}>Industries</a>
          <a href="/#process" className={`nav-link ${isScrolled ? 'text-hymid-dark' : 'text-white'}`}>Process</a>
          <a href="/#sustainability" className={`nav-link ${isScrolled ? 'text-hymid-dark' : 'text-white'}`}>Sustainability</a>
          <a href="/#quality" className={`nav-link ${isScrolled ? 'text-hymid-dark' : 'text-white'}`}>Quality</a>
          <a href="/#contact" className={`nav-link ${isScrolled ? 'text-hymid-dark' : 'text-white'}`}>Contact</a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 ${
              isScrolled ? 'text-hymid-light' : 'text-white'
            } rounded-md hover:bg-gray-100 hover:bg-opacity-20 focus:outline-none`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1a1a]">
          <div className="px-6 py-4 space-y-4">
            <Link to="/" className="block nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about-us" className="block nav-link" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link to="/services" className="block nav-link" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link to="/products" className="block nav-link" onClick={() => setIsOpen(false)}>
              Products
            </Link>
            <a href="/#industries" className="block nav-link" onClick={() => setIsOpen(false)}>
              Industries
            </a>
            <a href="/#process" className="block nav-link" onClick={() => setIsOpen(false)}>
              Process
            </a>
            <a href="/#sustainability" className="block nav-link" onClick={() => setIsOpen(false)}>
              Sustainability
            </a>
            <a href="/#quality" className="block nav-link" onClick={() => setIsOpen(false)}>
              Quality
            </a>
            <a href="/#contact" className="block nav-link" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
