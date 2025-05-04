import React, { useEffect } from "react";
import {
  CheckCircle,
  Star,
  Shield,
  TrendingUp,
  Zap,
  Code,
  Users,
} from "lucide-react";

const WhyChooseUs = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const reasons = [
    {
      title: "Engineering Excellence",
      icon: <Code size={24} />,
      description:
        "Innovative solutions backed by years of technical expertise",
    },
    {
      title: "Sustainable Manufacturing",
      icon: <Leaf size={24} />,
      description: "Eco-friendly processes that reduce environmental impact",
    },
    {
      title: "Consistent Quality Assurance",
      icon: <Shield size={24} />,
      description: "Rigorous testing ensuring every product meets standards",
    },
    {
      title: "Cost-Effective Solutions",
      icon: <TrendingUp size={24} />,
      description: "Optimized production for maximum value without compromise",
    },
    {
      title: "Rapid Prototyping",
      icon: <Zap size={24} />,
      description: "Quick turnaround times from concept to production",
    },
    {
      title: "End-to-End Service",
      icon: <Users size={24} />,
      description: "Complete support through every phase of your project",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b to-gray-900 from-[#16234f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 reveal-on-scroll">
          <div className="inline-block mb-3">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-1 w-6 bg-purple-500 rounded"></div>
              <span className="text-purple-400 font-medium">
                OUR ADVANTAGES
              </span>
              <div className="h-1 w-6 bg-purple-500 rounded"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-purple-400">STC</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We offer more than just manufacturing – we provide complete
            solutions built on expertise, quality, and innovation that drive
            your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="reveal-on-scroll bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 
                       hover:border-purple-500 transition-all duration-300 group transform hover:-translate-y-2 hover:shadow-purple-500/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start">
                <div
                  className="mr-4 p-3 bg-purple-900/40 rounded-lg text-purple-400 group-hover:text-purple-300 
                              group-hover:bg-purple-800/50 transition-all duration-300 transform group-hover:scale-110"
                >
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400">{reason.description}</p>
                </div>
              </div>
              <div className="w-0 h-1 bg-purple-500 mt-4 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div
          className="text-center mt-16 reveal-on-scroll"
          style={{ animationDelay: "600ms" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-500 
                    transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
          >
            Partner with us for your next project
          </a>
        </div>
      </div>

      <style jsx>{`
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .reveal-on-scroll.active {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </section>
  );
};

// Add the missing Leaf component
const Leaf = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 4 13C4 6 11 4 11 4s7 2 7 9a7 7 0 0 1-7 7Z"></path>
      <path d="M11 12a3 3 0 0 0 3 3"></path>
    </svg>
  );
};

export default WhyChooseUs;
