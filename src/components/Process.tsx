import React, { useEffect } from "react";
import { MessageSquare, PenTool, Hammer, Factory, Truck } from "lucide-react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  icon,
  index,
}) => {
  return (
    <div
      className={`reveal-on-scroll${
        index % 2 === 0 ? "-right" : "-left"
      } flex flex-col md:flex-row items-center gap-6 bg-gradient-to-br from-gray-800 to-gray-900 
      p-6 rounded-lg shadow-lg border border-gray-700 hover:border-cyan-500 
      transition-all duration-500 group`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="md:w-1/5 flex flex-col items-center justify-center">
        <div
          className="w-16 h-16 bg-cyan-700 group-hover:bg-cyan-600 rounded-full flex items-center justify-center 
        text-white text-xl font-bold mb-3 transition-all duration-300 transform group-hover:scale-110 shadow-lg group-hover:shadow-cyan-500/40"
        >
          {number}
        </div>
        <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 mt-2">
          {icon}
        </div>
      </div>
      <div className="md:w-4/5">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>

        <div
          className={`mt-4 h-1 bg-cyan-500/30 rounded-full overflow-hidden ${
            index % 2 === 0
              ? "w-0 group-hover:w-full"
              : "ml-auto w-0 group-hover:w-full"
          } transition-all duration-700`}
        >
          <div className="h-full bg-cyan-400 w-full"></div>
        </div>
      </div>
    </div>
  );
};

const Process = () => {
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

    const elements = document.querySelectorAll(
      ".reveal-on-scroll-right, .reveal-on-scroll-left"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const steps = [
    {
      number: "01",
      title: "Consultation & Ideation",
      description:
        "We begin by understanding your project requirements, discussing feasibility, and exploring potential solutions tailored to your business objectives.",
      icon: <MessageSquare size={24} />,
    },
    {
      number: "02",
      title: "Design & Engineering",
      description:
        "Our expert team develops precise CAD models and plans material selection for optimal performance, durability, and cost-effectiveness.",
      icon: <PenTool size={24} />,
    },
    {
      number: "03",
      title: "Tooling & Mould Manufacture",
      description:
        "We build precision moulds tailored to your product specifications for maximum efficiency and consistent quality across production runs.",
      icon: <Hammer size={24} />,
    },
    {
      number: "04",
      title: "Production & Quality Assurance",
      description:
        "Scalable manufacturing with rigorous quality checks at every stage ensures perfect results that meet or exceed industry standards.",
      icon: <Factory size={24} />,
    },
    {
      number: "05",
      title: "Delivery & Support",
      description:
        "We provide timely dispatch of finished products and ongoing support for all your needs, ensuring complete satisfaction with your investment.",
      icon: <Truck size={24} />,
    },
  ];

  return (
    <section
      id="process"
      className="py-24 bg-gradient-to-b from-[#0f172a] to-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 reveal-on-scroll">
          <div className="inline-block mb-3">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-1 w-6 bg-cyan-500 rounded"></div>
              <span className="text-cyan-400 font-medium">OUR METHODOLOGY</span>
              <div className="h-1 w-6 bg-cyan-500 rounded"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How We <span className="text-cyan-400">Work</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our streamlined process ensures efficient delivery of high-quality
            plastic products tailored to your needs with precision and
            expertise.
          </p>
        </div>

        <div className="space-y-8 relative">
          <div className="absolute left-[42px] top-[80px] bottom-[80px] w-1 bg-cyan-900/50 md:block hidden"></div>

          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-16 reveal-on-scroll">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-cyan-700 text-white rounded-lg hover:bg-cyan-600 
                     transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
          >
            Start your project with us
          </a>
        </div>
      </div>

      <style jsx>{`
        .reveal-on-scroll,
        .reveal-on-scroll-left,
        .reveal-on-scroll-right {
          opacity: 0;
          transition: all 0.8s ease-out;
        }

        .reveal-on-scroll {
          transform: translateY(30px);
        }

        .reveal-on-scroll-left {
          transform: translateX(-50px);
        }

        .reveal-on-scroll-right {
          transform: translateX(50px);
        }

        .reveal-on-scroll.active,
        .reveal-on-scroll-left.active,
        .reveal-on-scroll-right.active {
          opacity: 1;
          transform: translate(0);
        }
      `}</style>
    </section>
  );
};

export default Process;
