
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-hymid-dark text-white">
      <div className="hymid-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Hymid</h3>
            <p className="text-gray-300 mb-6">
              Leading plastic injection moulding specialists delivering innovative solutions for over 40 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-hymid-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-hymid-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-hymid-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-hymid-teal transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-hymid-teal transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-hymid-teal transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-hymid-teal transition-colors">Services</a>
              </li>
              <li>
                <a href="#case-studies" className="text-gray-300 hover:text-hymid-teal transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-hymid-teal transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-hymid-teal transition-colors">Design & Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-hymid-teal transition-colors">Injection Moulding</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-hymid-teal transition-colors">Tool Manufacturing</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-hymid-teal transition-colors">Assembly & Finishing</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-hymid-teal transition-colors">Quality Control</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">
                <span className="block font-medium">Address:</span>
                Hymid Technical Mouldings, Devon, UK
              </li>
              <li className="text-gray-300">
                <span className="block font-medium">Phone:</span>
                +44 (0) 1626 123456
              </li>
              <li className="text-gray-300">
                <span className="block font-medium">Email:</span>
                info@hymid.co.uk
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="hymid-container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Hymid Technical Mouldings. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-hymid-teal text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-hymid-teal text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-hymid-teal text-sm transition-colors">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
