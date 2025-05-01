
import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
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

  const reasons = [
    "Engineering Excellence",
    "Sustainable Manufacturing",
    "Consistent Quality Assurance",
    "Cost-Effective Solutions",
    "Rapid Prototyping",
    "End-to-End Service"
  ];

  return (
    <section className="section-padding bg-hymid-light">
      <div className="hymid-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hymid-dark mb-4">
            Why Choose <span className="text-hymid-teal">STC</span>
          </h2>
          <p className="text-hymid-gray max-w-3xl mx-auto">
            We offer more than just manufacturing – we provide complete solutions built on expertise, quality, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="reveal-on-scroll bg-white p-6 rounded-lg shadow-md flex items-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CheckCircle size={24} className="text-hymid-teal mr-3 shrink-0" />
              <span className="text-hymid-dark font-medium">{reason}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3 bg-hymid-teal text-white rounded-md hover:bg-opacity-90 transition-all duration-300"
          >
            Partner with us for your next project
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
