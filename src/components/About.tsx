
import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <section id="about" className="section-padding bg-white" ref={sectionRef}>
      <div className="hymid-container">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="reveal-on-scroll bg-hymid-light p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-hymid-dark mb-6">
                  About <span className="text-hymid-teal">Hymid</span>
                </h2>
                <p className="text-hymid-gray mb-4">
                  At Hymid, we've been at the forefront of plastic injection moulding and product development for over 40 years, combining technical excellence with creative design thinking to deliver innovative solutions for our clients.
                </p>
                <p className="text-hymid-gray mb-6">
                  Our experienced team of engineers, designers, and production specialists work collaboratively to transform concepts into high-quality products efficiently and cost-effectively.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-hymid-teal rounded-full mr-2"></div>
                    <span className="text-hymid-dark">40+ Years Experience</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-hymid-teal rounded-full mr-2"></div>
                    <span className="text-hymid-dark">UK Manufacturing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-hymid-teal rounded-full mr-2"></div>
                    <span className="text-hymid-dark">Expert Team</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-hymid-teal rounded-full mr-2"></div>
                    <span className="text-hymid-dark">Innovation Leaders</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-hymid-teal rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="reveal-on-scroll delay-300 grid grid-cols-2 gap-6">
              <div className="bg-hymid-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-hymid-teal rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-hymid-dark mb-2">Quality First</h3>
                <p className="text-hymid-gray text-sm">
                  Our commitment to quality ensures your products meet the highest standards.
                </p>
              </div>
              
              <div className="bg-hymid-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-hymid-teal rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-hymid-dark mb-2">Innovation</h3>
                <p className="text-hymid-gray text-sm">
                  We push the boundaries of what's possible with plastic manufacturing.
                </p>
              </div>
              
              <div className="bg-hymid-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-hymid-teal rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-hymid-dark mb-2">Sustainability</h3>
                <p className="text-hymid-gray text-sm">
                  Environmental responsibility is built into our processes.
                </p>
              </div>
              
              <div className="bg-hymid-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-hymid-teal rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-hymid-dark mb-2">Collaboration</h3>
                <p className="text-hymid-gray text-sm">
                  We work closely with our clients to understand and meet their needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
