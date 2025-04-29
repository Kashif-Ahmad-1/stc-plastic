
import React, { useEffect } from 'react';
import { MessageSquare, PenTool, Hammer, Factory, Truck } from 'lucide-react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, icon, index }) => {
  return (
    <div 
      className={`reveal-on-scroll${index % 2 === 0 ? '-right' : '-left'} flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-lg`}
    >
      <div className="md:w-1/5 flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-hymid-teal rounded-full flex items-center justify-center text-white text-xl font-bold mb-3">
          {number}
        </div>
        <div className="text-hymid-teal">{icon}</div>
      </div>
      <div className="md:w-4/5">
        <h3 className="text-xl font-semibold text-hymid-dark mb-3">{title}</h3>
        <p className="text-hymid-gray">{description}</p>
      </div>
    </div>
  );
};

const Process = () => {
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

    const elements = document.querySelectorAll('.reveal-on-scroll-right, .reveal-on-scroll-left');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const steps = [
    {
      number: "01",
      title: "Consultation & Ideation",
      description: "We begin by understanding your project requirements, discussing feasibility, and exploring potential solutions.",
      icon: <MessageSquare size={24} />
    },
    {
      number: "02",
      title: "Design & Engineering",
      description: "Our expert team develops precise CAD models and plans material selection for optimal performance.",
      icon: <PenTool size={24} />
    },
    {
      number: "03",
      title: "Tooling & Mould Manufacture",
      description: "We build precision moulds tailored to your product specifications for maximum efficiency.",
      icon: <Hammer size={24} />
    },
    {
      number: "04",
      title: "Production & Quality Assurance",
      description: "Scalable manufacturing with rigorous quality checks at every stage ensures perfect results.",
      icon: <Factory size={24} />
    },
    {
      number: "05",
      title: "Delivery & Support",
      description: "We provide timely dispatch of finished products and ongoing support for all your needs.",
      icon: <Truck size={24} />
    }
  ];

  return (
    <section id="process" className="section-padding bg-white">
      <div className="hymid-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hymid-dark mb-4">
            How We <span className="text-hymid-teal">Work</span>
          </h2>
          <p className="text-hymid-gray max-w-3xl mx-auto">
            Our streamlined process ensures efficient delivery of high-quality plastic products tailored to your needs.
          </p>
        </div>

        <div className="space-y-8">
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
      </div>
    </section>
  );
};

export default Process;
