import React, { useEffect } from "react";
import {
  ChevronRight,
  Wrench,
  Factory,
  TestTube,
  Briefcase,
} from "lucide-react";

// Service card component
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  index,
  color,
}) => {
  return (
    <div
      className={`reveal-on-scroll bg-[#0f1c38fe] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4`}
      style={{
        animationDelay: `${index * 100}ms`,
        borderColor: color,
      }}
    >
      <div className="mb-6" style={{ color: color }}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-[#cbd5e1] mb-6">{description}</p>
      <a
        href="#"
        className="inline-flex items-center hover:underline transition-all duration-300"
        style={{ color: color }}
      >
        Learn more{" "}
        <ChevronRight
          size={16}
          className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    </div>
  );
};

const Services = () => {
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

  const services = [
    {
      title: "Custom Product Development",
      description:
        "From concept to reality, our design team works with you to create innovative plastic products that meet your specific requirements.",
      icon: <Wrench size={32} />,
      color: "#60a5fa", // Bright blue
    },
    {
      title: "Mould Design & Manufacture",
      description:
        "We create custom tools and moulds designed for longevity and optimal production efficiency.",
      icon: <Factory size={32} />,
      color: "#3b82f6", // Medium blue
    },
    {
      title: "Plastic Goods Production",
      description:
        "Our state-of-the-art injection moulding process ensures high-quality, precise, and consistent plastic components.",
      icon: <Briefcase size={32} />,
      color: "#2563eb", // Rich blue
    },
    {
      title: "Prototyping & Testing",
      description:
        "Comprehensive prototyping and testing ensures your products meet all quality and performance standards before full production.",
      icon: <TestTube size={32} />,
      color: "#1d4ed8", // Deep blue
    },
  ];

  return (
    <section id="services" className="section-padding bg-[#070d1a]">
      <div className="hymid-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-[#3b82f6]">Services</span>
          </h2>
          <p className="text-[#cbd5e1] max-w-3xl mx-auto">
            We offer a complete range of plastic manufacturing services to help
            bring your product ideas to life with precision and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
