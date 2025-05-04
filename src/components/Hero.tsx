import React, { useEffect, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Initial animation on load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Add parallax effect on scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroImage = document.querySelector(".hero-bg-image");
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrollTop * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToNextSection = () => {
    setIsScrolling(true);
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-[#0f172a] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="hero-bg-image absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
            filter: "brightness(0.3)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/70 to-[#0f172a]/90"></div>
      </div>

      <div
        className={`hymid-container flex flex-col items-center text-center transition-all duration-1000 relative z-10 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-700">
          Precision in Plastics.
          <span className="text-[#3b82f6] block mt-2 transition-all duration-700 hover:text-[#60a5fa]">
            Innovation in Every Mould.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-[#cbd5e1] max-w-3xl mb-10 transition-all duration-700">
          A leading MSME manufacturing company specializing in precision plastic
          products and innovative solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#services"
            className="px-8 py-3 bg-[#2563eb] text-white rounded-md hover:bg-[#3b82f6] transition-all duration-300 flex items-center justify-center shadow-lg shadow-[#2563eb]/20 transform hover:translate-y-[-2px]"
          >
            Explore Our Solutions{" "}
            <ArrowRight
              size={18}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>

      {/* Arrow down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer">
        <button
          onClick={scrollToNextSection}
          aria-label="Scroll down"
          className={`transition-all duration-500 ${
            isScrolling ? "opacity-0" : "animate-bounce opacity-100"
          }`}
        >
          <ArrowDown
            size={24}
            className="text-[#60a5fa] hover:text-white transition-colors duration-300"
          />
        </button>
      </div>

      {/* Background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#2563eb] rounded-full opacity-10 animate-pulse"></div>
      <div
        className="absolute -bottom-40 -left-20 w-80 h-80 bg-[#2563eb] rounded-full opacity-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </section>
  );
};

export default Hero;
