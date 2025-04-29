
import React, { useEffect } from 'react';
import { ShieldCheck, FlaskConical, TrendingUp } from 'lucide-react';

const Quality = () => {
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
    <section id="quality" className="section-padding bg-white">
      <div className="hymid-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hymid-dark mb-4">
            Quality <span className="text-hymid-teal">Commitment</span>
          </h2>
          <p className="text-hymid-gray max-w-3xl mx-auto">
            We maintain rigorous quality control standards throughout our manufacturing process to ensure excellence in every product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="reveal-on-scroll bg-hymid-light p-8 rounded-lg shadow-lg text-center">
            <div className="mx-auto w-16 h-16 bg-hymid-teal/10 rounded-full flex items-center justify-center text-hymid-teal mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-semibold text-hymid-dark mb-4">Built-in Quality</h3>
            <p className="text-hymid-gray">
              Quality is infused at every stage of our process, from design to final production, ensuring consistent excellence.
            </p>
          </div>
          
          <div className="reveal-on-scroll bg-hymid-light p-8 rounded-lg shadow-lg text-center" style={{ animationDelay: '100ms' }}>
            <div className="mx-auto w-16 h-16 bg-hymid-teal/10 rounded-full flex items-center justify-center text-hymid-teal mb-6">
              <FlaskConical size={32} />
            </div>
            <h3 className="text-xl font-semibold text-hymid-dark mb-4">Testing & Certification</h3>
            <p className="text-hymid-gray">
              Our in-house testing labs and third-party certifications ensure all products meet or exceed industry standards.
            </p>
          </div>
          
          <div className="reveal-on-scroll bg-hymid-light p-8 rounded-lg shadow-lg text-center" style={{ animationDelay: '200ms' }}>
            <div className="mx-auto w-16 h-16 bg-hymid-teal/10 rounded-full flex items-center justify-center text-hymid-teal mb-6">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-xl font-semibold text-hymid-dark mb-4">Continuous Improvement</h3>
            <p className="text-hymid-gray">
              We constantly analyze feedback and performance data to drive ongoing enhancements to our products and processes.
            </p>
          </div>
        </div>

        <div className="mt-16 reveal-on-scroll">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-hymid-dark mb-6">Quality Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-hymid-light p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-hymid-teal mb-1">99.8%</div>
                <p className="text-hymid-gray">First-pass yield rate</p>
              </div>
              <div className="bg-hymid-light p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-hymid-teal mb-1">&lt;0.1%</div>
                <p className="text-hymid-gray">Customer return rate</p>
              </div>
              <div className="bg-hymid-light p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-hymid-teal mb-1">ISO 9001</div>
                <p className="text-hymid-gray">Quality certification</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
