
import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

// Service card component
interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index }) => {
  return (
    <div 
      className={`reveal-on-scroll bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-hymid-teal`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="mb-6 text-hymid-teal">
        {icon === '1' && <div className="text-4xl font-bold">01</div>}
        {icon === '2' && <div className="text-4xl font-bold">02</div>}
        {icon === '3' && <div className="text-4xl font-bold">03</div>}
        {icon === '4' && <div className="text-4xl font-bold">04</div>}
      </div>
      <h3 className="text-xl font-semibold text-hymid-dark mb-3">{title}</h3>
      <p className="text-hymid-gray mb-6">{description}</p>
      <a 
        href="#" 
        className="inline-flex items-center text-hymid-teal hover:underline"
      >
        Learn more <ChevronRight size={16} className="ml-1" />
      </a>
    </div>
  );
};

const Services = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      title: "Design & Development",
      description: "From concept to reality, our design team works with you to create innovative plastic products that meet your specific requirements.",
      icon: "1"
    },
    {
      title: "Injection Moulding",
      description: "Our state-of-the-art injection moulding process ensures high-quality, precise, and consistent plastic components.",
      icon: "2"
    },
    {
      title: "Tool Manufacturing",
      description: "We create custom tools and moulds designed for longevity and optimal production efficiency.",
      icon: "3"
    },
    {
      title: "Assembly & Finishing",
      description: "Our comprehensive finishing services include assembly, decoration, and quality control to deliver market-ready products.",
      icon: "4"
    }
  ];

  return (
    <section id="services" className="section-padding bg-hymid-light">
      <div className="hymid-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hymid-dark mb-4">
            Our <span className="text-hymid-teal">Services</span>
          </h2>
          <p className="text-hymid-gray max-w-3xl mx-auto">
            We offer a complete range of plastic manufacturing services to help bring your product ideas to life with precision and quality.
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
