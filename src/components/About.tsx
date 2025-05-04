import React, { useEffect } from "react";
import { Award, Lightbulb, Users } from "lucide-react";

const About = () => {
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

  return (
    <section id="about" className="section-padding bg-[#0f172a]">
      <div className="hymid-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-[#3b82f6]">STC</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="reveal-on-scroll bg-[#1e293b] p-8 rounded-lg shadow-lg border border-[#334155]">
                <p className="text-[#cbd5e1] mb-6">
                  STC is a leading MSME manufacturing enterprise focused on
                  delivering precision plastic solutions for diverse industries.
                  We combine technical excellence with innovative design
                  thinking to create high-quality products that meet our
                  clients' exact specifications.
                </p>
                <p className="text-[#cbd5e1] mb-6">
                  Our values of quality, innovation, and customer satisfaction
                  drive everything we do, from conceptualization to final
                  production and delivery.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#3b82f6] rounded-full mr-2"></div>
                    <span className="text-[#e2e8f0]">MSME Certified</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#3b82f6] rounded-full mr-2"></div>
                    <span className="text-[#e2e8f0]">ISO Compliant</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#3b82f6] rounded-full mr-2"></div>
                    <span className="text-[#e2e8f0]">Expert Team</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#3b82f6] rounded-full mr-2"></div>
                    <span className="text-[#e2e8f0]">
                      Sustainable Practices
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#2563eb] rounded-lg -z-10"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="reveal-on-scroll grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1e293b] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border border-[#334155]">
                <div className="mx-auto mb-4 w-12 h-12 bg-[#1e3a8a] rounded-full flex items-center justify-center text-[#60a5fa]">
                  <Award size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Quality
                </h3>
                <p className="text-[#cbd5e1] text-sm">
                  Committed to excellence in every product we manufacture.
                </p>
              </div>

              <div className="bg-[#1e293b] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border border-[#334155]">
                <div className="mx-auto mb-4 w-12 h-12 bg-[#1e3a8a] rounded-full flex items-center justify-center text-[#60a5fa]">
                  <Lightbulb size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Innovation
                </h3>
                <p className="text-[#cbd5e1] text-sm">
                  Continuously pushing boundaries in plastic manufacturing.
                </p>
              </div>

              <div className="bg-[#1e293b] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border border-[#334155]">
                <div className="mx-auto mb-4 w-12 h-12 bg-[#1e3a8a] rounded-full flex items-center justify-center text-[#60a5fa]">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Partnership
                </h3>
                <p className="text-[#cbd5e1] text-sm">
                  Building lasting relationships with our clients and partners.
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
