
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-hymid-light overflow-hidden">
      <div 
        className={`hymid-container flex flex-col items-center text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-hymid-dark mb-6">
          Designing &amp; Manufacturing
          <span className="text-hymid-teal block mt-2">Innovative Plastic Products</span>
        </h1>
        <p className="text-lg md:text-xl text-hymid-gray max-w-3xl mb-10">
          Delivering excellence in plastic injection moulding and product development for over 40 years.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#services" 
            className="px-8 py-3 bg-hymid-teal text-white rounded-md hover:bg-opacity-90 transition-all duration-300"
          >
            Our Services
          </a>
          <a 
            href="#case-studies" 
            className="px-8 py-3 border border-hymid-teal text-hymid-teal rounded-md hover:bg-hymid-teal hover:text-white transition-all duration-300"
          >
            View Case Studies
          </a>
        </div>
      </div>

      {/* Arrow down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
        <button onClick={scrollToNextSection} aria-label="Scroll down">
          <ArrowDown size={24} className="text-hymid-teal" />
        </button>
      </div>
      
      {/* Background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-hymid-teal rounded-full opacity-10"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-hymid-teal rounded-full opacity-10"></div>
    </section>
  );
};

export default Hero;
