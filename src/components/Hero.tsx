
import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

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
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
            filter: 'brightness(0.5)'
          }}
        ></div>
      </div>
      
      <div 
        className={`hymid-container flex flex-col items-center text-center transition-all duration-1000 relative z-10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Precision in Plastics.
          <span className="text-hymid-teal block mt-2">Innovation in Every Mould.</span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-3xl mb-10">
          A leading MSME manufacturing company specializing in precision plastic products and innovative solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#services" 
            className="px-8 py-3 bg-hymid-teal text-white rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center"
          >
            Explore Our Solutions <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>

      {/* Arrow down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
        <button onClick={scrollToNextSection} aria-label="Scroll down">
          <ArrowDown size={24} className="text-white" />
        </button>
      </div>
      
      {/* Background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-hymid-teal rounded-full opacity-10"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-hymid-teal rounded-full opacity-10"></div>
    </section>
  );
};

export default Hero;
