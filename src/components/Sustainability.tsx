
import React, { useEffect } from 'react';
import { Leaf, Sun, Recycle, BarChart } from 'lucide-react';

interface SustainabilityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const SustainabilityCard: React.FC<SustainabilityCardProps> = ({ title, description, icon, index }) => {
  return (
    <div 
      className="reveal-on-scroll bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-hymid-dark mb-3">{title}</h3>
      <p className="text-hymid-gray">{description}</p>
    </div>
  );
};

const Sustainability = () => {
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

  const initiatives = [
    {
      title: "Material Responsibility",
      description: "We prioritize recycled and biodegradable materials to reduce environmental impact.",
      icon: <Leaf size={24} />
    },
    {
      title: "Energy Efficient Operations",
      description: "Our optimized production processes minimize energy consumption and carbon footprint.",
      icon: <Sun size={24} />
    },
    {
      title: "Waste Management",
      description: "Comprehensive recycling processes ensure minimal waste reaches landfills.",
      icon: <Recycle size={24} />
    },
    {
      title: "Future Goals",
      description: "Ongoing R&D focused on green plastics and sustainable manufacturing innovations.",
      icon: <BarChart size={24} />
    }
  ];

  return (
    <section id="sustainability" className="section-padding bg-hymid-light">
      <div className="hymid-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hymid-dark mb-4">
            Our <span className="text-green-600">Sustainability</span> Commitment
          </h2>
          <p className="text-hymid-gray max-w-3xl mx-auto">
            At STC, we're committed to environmentally responsible manufacturing practices that reduce our ecological footprint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 reveal-on-scroll">
              <h3 className="text-2xl font-semibold text-hymid-dark mb-4">Sustainability Roadmap</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-lg font-medium text-hymid-teal">2025</span>
                  <p className="text-hymid-gray">50% reduction in plastic waste from production</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-lg font-medium text-hymid-teal">2030</span>
                  <p className="text-hymid-gray">75% recycled or biodegradable materials in products</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-lg font-medium text-hymid-teal">2040</span>
                  <p className="text-hymid-gray">Carbon-neutral operations across all facilities</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 reveal-on-scroll">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Sustainability" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
