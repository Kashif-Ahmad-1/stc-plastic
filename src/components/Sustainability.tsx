import React, { useEffect } from "react";
import { Leaf, Sun, Recycle, BarChart, Award } from "lucide-react";

interface SustainabilityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const SustainabilityCard: React.FC<SustainabilityCardProps> = ({
  title,
  description,
  icon,
  index,
}) => {
  return (
    <div
      className="reveal-on-scroll bg-gradient-to-br to-gray-800 from-gray-900 p-6 rounded-lg shadow-lg 
                border border-gray-700 hover:border-teal-500 transition-all duration-300 transform 
                hover:-translate-y-2 hover:shadow-teal-500/20 group"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div
        className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-teal-400 
                    mb-4 group-hover:bg-teal-900/50 group-hover:text-teal-300 transform group-hover:scale-110 
                    transition-all duration-300 shadow-inner border border-gray-700 group-hover:border-teal-600"
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-300 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
      <div className="w-0 h-1 bg-teal-500 mt-4 group-hover:w-full transition-all duration-500 rounded-full"></div>
    </div>
  );
};

const Sustainability = () => {
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

  const initiatives = [
    {
      title: "Material Responsibility",
      description:
        "We prioritize recycled and biodegradable materials to reduce environmental impact and promote circular economy.",
      icon: <Leaf size={24} />,
    },
    {
      title: "Energy Efficient Operations",
      description:
        "Our optimized production processes minimize energy consumption and carbon footprint through advanced technologies.",
      icon: <Sun size={24} />,
    },
    {
      title: "Waste Management",
      description:
        "Comprehensive recycling processes ensure minimal waste reaches landfills and maximum reuse of production materials.",
      icon: <Recycle size={24} />,
    },
    {
      title: "Future Goals",
      description:
        "Ongoing R&D focused on green plastics and sustainable manufacturing innovations that will redefine the industry.",
      icon: <BarChart size={24} />,
    },
  ];

  return (
    <section
      id="sustainability"
      className="py-24 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 reveal-on-scroll">
          <div className="inline-block mb-3">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-1 w-6 bg-teal-500 rounded"></div>
              <span className="text-teal-400 font-medium">
                ECO-FRIENDLY INNOVATION
              </span>
              <div className="h-1 w-6 bg-teal-500 rounded"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-teal-400">Sustainability</span> Commitment
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            At STC, we're committed to environmentally responsible manufacturing
            practices that reduce our ecological footprint and create a more
            sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-on-scroll">
          {initiatives.map((initiative, index) => (
            <SustainabilityCard
              key={index}
              title={initiative.title}
              description={initiative.description}
              icon={initiative.icon}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div
              className="w-full lg:w-1/2 reveal-on-scroll"
              style={{ animationDelay: "400ms" }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Award size={24} className="text-teal-400 mr-2" />
                Sustainability Roadmap
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-lg shadow-lg border-l-4 border-teal-500 hover:shadow-teal-500/20 transition-all duration-300 group">
                  <span className="text-lg font-medium text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
                    2025
                  </span>
                  <p className="text-gray-300">
                    50% reduction in plastic waste from production
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-lg shadow-lg border-l-4 border-teal-500 hover:shadow-teal-500/20 transition-all duration-300 group">
                  <span className="text-lg font-medium text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
                    2030
                  </span>
                  <p className="text-gray-300">
                    75% recycled or biodegradable materials in products
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-lg shadow-lg border-l-4 border-teal-500 hover:shadow-teal-500/20 transition-all duration-300 group">
                  <span className="text-lg font-medium text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
                    2040
                  </span>
                  <p className="text-gray-300">
                    Carbon-neutral operations across all facilities
                  </p>
                </div>
              </div>
            </div>
            <div
              className="w-full lg:w-1/2 reveal-on-scroll"
              style={{ animationDelay: "600ms" }}
            >
              <div className="rounded-lg overflow-hidden shadow-xl border border-gray-700 transform transition-all duration-500 hover:shadow-teal-500/20 hover:scale-105">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <img
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Sustainability"
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-block px-4 py-2 bg-teal-500 text-white rounded-md text-sm font-medium mb-3">
                      Our Commitment
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Leading the Industry Toward Sustainability
                    </h4>
                    <p className="text-gray-200 text-sm">
                      Implementing innovative processes that prioritize our
                      planet's future
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="text-center mt-16 reveal-on-scroll"
          style={{ animationDelay: "800ms" }}
        >
          <a
            href="#learn-more"
            className="inline-flex items-center px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-500 
                    transition-all duration-300 shadow-lg hover:shadow-teal-500/50 transform hover:-translate-y-1"
          >
            Learn more about our sustainability initiatives
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
      `}</style>
    </section>
  );
};

export default Sustainability;
