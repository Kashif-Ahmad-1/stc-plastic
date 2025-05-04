import React, { useEffect } from "react";
import { ShieldCheck, FlaskConical, TrendingUp } from "lucide-react";

interface QualityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const QualityCard: React.FC<QualityCardProps> = ({
  title,
  description,
  icon,
  index,
}) => {
  return (
    <div
      className="reveal-on-scroll bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg 
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

const Quality = () => {
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

  const qualityPoints = [
    {
      title: "Built-in Quality",
      description:
        "Quality is infused at every stage of our process, from design to final production, ensuring consistent excellence.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Testing & Certification",
      description:
        "Our in-house testing labs and third-party certifications ensure all products meet or exceed industry standards.",
      icon: <FlaskConical size={24} />,
    },
    {
      title: "Continuous Improvement",
      description:
        "We constantly analyze feedback and performance data to drive ongoing enhancements to our products and processes.",
      icon: <TrendingUp size={24} />,
    },
  ];

  return (
    <section
      id="quality"
      className="py-24 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 reveal-on-scroll">
          <div className="inline-block mb-3">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-1 w-6 bg-teal-500 rounded"></div>
              <span className="text-teal-400 font-medium">QUALITY FOCUS</span>
              <div className="h-1 w-6 bg-teal-500 rounded"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-teal-400">Quality</span> Commitment
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We maintain rigorous quality control standards throughout our
            manufacturing process to ensure excellence in every product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-on-scroll">
          {qualityPoints.map((item, index) => (
            <QualityCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>

        <div
          className="mt-16 reveal-on-scroll"
          style={{ animationDelay: "500ms" }}
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Quality Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 p-4 rounded-lg text-center border border-gray-700">
                <div className="text-3xl font-bold text-teal-400 mb-1">
                  99.8%
                </div>
                <p className="text-gray-300">First-pass yield rate</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg text-center border border-gray-700">
                <div className="text-3xl font-bold text-teal-400 mb-1">
                  &lt;0.1%
                </div>
                <p className="text-gray-300">Customer return rate</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg text-center border border-gray-700">
                <div className="text-3xl font-bold text-teal-400 mb-1">
                  ISO 9001
                </div>
                <p className="text-gray-300">Quality certification</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
