
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  category: string;
  imageUrl: string;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, category, imageUrl, index }) => {
  return (
    <div 
      className="reveal-on-scroll group relative overflow-hidden rounded-lg cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div 
        className="aspect-[4/3] bg-gray-200 bg-cover bg-center w-full h-full transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 group-hover:translate-y-[-8px]">
        <p className="text-hymid-teal font-medium mb-2">{category}</p>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center overflow-hidden h-0 group-hover:h-6 transition-all duration-300">
          <span className="font-medium mr-2">View Project</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
};

const CaseStudies = () => {
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

  const caseStudies = [
    {
      title: "Medical Device Housing",
      category: "Healthcare",
      imageUrl: "https://images.unsplash.com/photo-1581595219315-a523f912db8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Eco-friendly Packaging",
      category: "Sustainability",
      imageUrl: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Smart Home Components",
      category: "Consumer Electronics",
      imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Automotive Interior Parts",
      category: "Automotive",
      imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="case-studies" className="section-padding bg-white">
      <div className="hymid-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hymid-dark mb-4">
            Our <span className="text-hymid-teal">Case Studies</span>
          </h2>
          <p className="text-hymid-gray max-w-3xl mx-auto">
            Discover how our injection moulding expertise has helped clients across various industries deliver successful products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              title={study.title}
              category={study.category}
              imageUrl={study.imageUrl}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12 reveal-on-scroll">
          <a 
            href="#" 
            className="inline-flex items-center px-8 py-3 bg-hymid-teal text-white rounded-md hover:bg-opacity-90 transition-all duration-300"
          >
            View All Case Studies <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
