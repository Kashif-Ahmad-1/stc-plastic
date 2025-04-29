
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-hymid-dark text-white">
      <div className="hymid-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">STC</h3>
            <p className="text-gray-300 mb-6">
              Leading MSME plastic manufacturing company delivering precision solutions for diverse industries across India.
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
                <a href="#industries" className="text-gray-300 hover:text-hymid-teal transition-colors">Industries</a>
              </li>
              <li>
                <a href="#process" className="text-gray-300 hover:text-hymid-teal transition-colors">Our Process</a>
              </li>
              <li>
                <a href="#sustainability" className="text-gray-300 hover:text-hymid-teal transition-colors">Sustainability</a>
              </li>
              <li>
                <a href="#quality" className="text-gray-300 hover:text-hymid-teal transition-colors">Quality</a>
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
                <a href="#" className="text-gray-300 hover:text-hymid-teal transition-colors">Custom Product Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-hymid-teal transition-colors">Mould Design & Manufacture</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-hymid-teal transition-colors">Plastic Goods Production</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-hymid-teal transition-colors">Prototyping & Testing</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-hymid-teal transition-colors">Quality Assurance</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">
                <span className="block font-medium">Address:</span>
                STC Plastic Manufacturing, Industrial Area, Phase II, New Delhi, India
              </li>
              <li className="text-gray-300">
                <span className="block font-medium">Phone:</span>
                +91 (0) 9876 543210
              </li>
              <li className="text-gray-300">
                <span className="block font-medium">Email:</span>
                info@stc-plastics.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="hymid-container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} STC Plastic Manufacturing. All rights reserved.
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
