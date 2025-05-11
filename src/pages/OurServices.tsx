import React, { useEffect } from "react";
import {
  ArrowRight,
  ChevronRight,
  FlaskConical,
  Factory,
  TestTube,
  Lightbulb,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Service detail card component
const ServiceDetailCard = ({
  title,
  description,
  features,
  image,
  index,
  reverse,
}) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 mb-16 reveal-on-scroll max-h-[300px] overflow-hidden`}
    >
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-start">
        <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-hymid-gray mb-6">{description}</p>
        <div className="space-y-3">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start">
              <ChevronRight
                size={16}
                className="text-hymid-teal mt-1 mr-2 shrink-0"
              />
              <span className="text-hymid-gray">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Process step component
const ProcessStep = ({ number, title, description, icon }) => {
  return (
    <div className="flex items-start p-6 bg-white rounded-lg shadow-md reveal-on-scroll">
      <div className="mr-4 w-12 h-12 bg-hymid-teal rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
        {number}
      </div>
      <div>
        <div className="flex items-center mb-2">
          <h4 className="text-lg font-semibold text-hymid-dark mr-2">
            {title}
          </h4>
          <div className="text-hymid-teal">{icon}</div>
        </div>
        <p className="text-hymid-gray">{description}</p>
      </div>
    </div>
  );
};

const OurServices = () => {
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
        "Our collaborative approach to product design transforms your vision into reality through careful planning, expert engineering, and innovative solutions.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Concept development and feasibility analysis",
        "Material selection and optimization",
        "3D modeling and CAD design",
        "Design for manufacturability (DFM)",
        "Functional prototyping",
      ],
    },
    {
      title: "Precision Mould Manufacturing",
      description:
        "We design and manufacture high-quality, durable moulds that ensure consistent production results and optimal efficiency.",
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Custom mould design for various applications",
        "Single-cavity and multi-cavity moulds",
        "Hot and cold runner systems",
        "Mould flow analysis",
        "Preventative maintenance and refurbishment",
      ],
    },
    {
      title: "Plastic Goods Production",
      description:
        "Our state-of-the-art injection moulding capabilities deliver high-quality plastic components with precision and efficiency.",
      image:
        "https://images.unsplash.com/photo-1563694983011-6f4d90358083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Injection moulding for various plastics",
        "Low to high-volume production capabilities",
        "Consistent part quality and dimensional stability",
        "Secondary operations and assembly",
        "Finishing and surface treatments",
      ],
    },
    {
      title: "Prototyping & Testing",
      description:
        "Validate your product designs with our comprehensive prototyping and testing services before moving to full-scale production.",
      image:
        "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Rapid prototyping for quick concept validation",
        "Material and mechanical property testing",
        "Environmental stress testing",
        "Dimensional analysis and quality verification",
        "Pre-production validation",
      ],
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "We begin with a detailed discussion to understand your product requirements, specifications, and objectives.",
      icon: <Lightbulb size={20} />,
    },
    {
      number: "02",
      title: "Design & Engineering",
      description:
        "Our team develops detailed designs and selects optimal materials and manufacturing processes for your product.",
      icon: <FlaskConical size={20} />,
    },
    {
      number: "03",
      title: "Prototyping",
      description:
        "We create functional prototypes to validate your design and make necessary refinements before production.",
      icon: <TestTube size={20} />,
    },
    {
      number: "04",
      title: "Production",
      description:
        "Using advanced machinery, we manufacture your products with strict quality control measures at every step.",
      icon: <Factory size={20} />,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-hymid-light overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
              filter: "brightness(0.5)",
            }}
          ></div>
        </div>

        <div className="hymid-container flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-hymid-teal">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mb-10">
            Comprehensive plastic manufacturing solutions tailored to your
            specific industry requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services-overview"
              className="px-8 py-3 bg-hymid-teal text-white rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center"
            >
              Explore Our Services <ArrowRight size={18} className="ml-2" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-hymid-dark rounded-md hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              Request a Consultation <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-overview" className="section-padding bg-[#1e293b]">
        <div className="hymid-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Services <span className="text-hymid-teal">Overview</span>
            </h2>
            <p className="text-hymid-gray max-w-3xl mx-auto">
              Our comprehensive range of services covers every aspect of plastic
              product development and manufacturing.
            </p>
          </div>

          {services.map((service, index) => (
            <ServiceDetailCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              image={service.image}
              index={index}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </section>

      {/* Service Process */}
      <section className="section-padding bg-hymid-light">
        <div className="hymid-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hymid-dark mb-4">
              Our <span className="text-hymid-teal">Service Process</span>
            </h2>
            <p className="text-hymid-gray max-w-3xl mx-auto">
              We follow a streamlined process to ensure your project is
              completed efficiently and to the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-white">
        <div className="hymid-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hymid-dark mb-4">
              Industries We <span className="text-hymid-teal">Serve</span>
            </h2>
            <p className="text-hymid-gray max-w-3xl mx-auto">
              Our expertise extends across multiple industries, providing
              specialized solutions for diverse applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-hymid-light p-6 rounded-lg shadow-md reveal-on-scroll">
              <h3 className="text-xl font-semibold text-hymid-dark mb-4">
                Automotive
              </h3>
              <p className="text-hymid-gray mb-4">
                We produce durable, precision-engineered plastic components that
                meet the stringent requirements of the automotive industry.
              </p>
              <div className="border-t border-gray-200 pt-4 text-center">
                <a
                  href="#"
                  className="inline-flex items-center text-hymid-teal hover:underline"
                >
                  View Automotive Solutions{" "}
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>

            <div
              className="bg-hymid-light p-6 rounded-lg shadow-md reveal-on-scroll"
              style={{ animationDelay: "100ms" }}
            >
              <h3 className="text-xl font-semibold text-hymid-dark mb-4">
                Healthcare
              </h3>
              <p className="text-hymid-gray mb-4">
                Our medical-grade plastic components adhere to strict regulatory
                standards for healthcare applications.
              </p>
              <div className="border-t border-gray-200 pt-4 text-center">
                <a
                  href="#"
                  className="inline-flex items-center text-hymid-teal hover:underline"
                >
                  View Healthcare Solutions{" "}
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>

            <div
              className="bg-hymid-light p-6 rounded-lg shadow-md reveal-on-scroll"
              style={{ animationDelay: "200ms" }}
            >
              <h3 className="text-xl font-semibold text-hymid-dark mb-4">
                Consumer Goods
              </h3>
              <p className="text-hymid-gray mb-4">
                From household items to personal care products, we create
                aesthetically pleasing and functional consumer goods.
              </p>
              <div className="border-t border-gray-200 pt-4 text-center">
                <a
                  href="#"
                  className="inline-flex items-center text-hymid-teal hover:underline"
                >
                  View Consumer Solutions{" "}
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-hymid-light">
        <div className="hymid-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hymid-dark mb-4">
              Why Choose <span className="text-hymid-teal">STC</span>
            </h2>
            <p className="text-hymid-gray max-w-3xl mx-auto">
              What sets our services apart from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md reveal-on-scroll">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-hymid-teal/10 rounded-full flex items-center justify-center text-hymid-teal mr-4">
                  <Factory size={24} />
                </div>
                <h3 className="text-xl font-semibold text-hymid-dark">
                  Advanced Manufacturing
                </h3>
              </div>
              <p className="text-hymid-gray">
                Our state-of-the-art facility is equipped with the latest
                injection moulding technology, allowing us to produce complex
                parts with exceptional precision and consistency.
              </p>
            </div>

            <div
              className="bg-white p-6 rounded-lg shadow-md reveal-on-scroll"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-hymid-teal/10 rounded-full flex items-center justify-center text-hymid-teal mr-4">
                  <TestTube size={24} />
                </div>
                <h3 className="text-xl font-semibold text-hymid-dark">
                  Quality Control
                </h3>
              </div>
              <p className="text-hymid-gray">
                We implement rigorous quality control measures at every stage of
                production to ensure that all products meet or exceed industry
                standards and customer specifications.
              </p>
            </div>

            <div
              className="bg-white p-6 rounded-lg shadow-md reveal-on-scroll"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-hymid-teal/10 rounded-full flex items-center justify-center text-hymid-teal mr-4">
                  <Lightbulb size={24} />
                </div>
                <h3 className="text-xl font-semibold text-hymid-dark">
                  Innovation & Expertise
                </h3>
              </div>
              <p className="text-hymid-gray">
                Our team of experienced engineers and designers continuously
                explores new materials, technologies, and techniques to provide
                innovative solutions for your unique challenges.
              </p>
            </div>

            <div
              className="bg-white p-6 rounded-lg shadow-md reveal-on-scroll"
              style={{ animationDelay: "300ms" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-hymid-teal/10 rounded-full flex items-center justify-center text-hymid-teal mr-4">
                  <FlaskConical size={24} />
                </div>
                <h3 className="text-xl font-semibold text-hymid-dark">
                  Comprehensive Service
                </h3>
              </div>
              <p className="text-hymid-gray">
                From initial concept to final delivery, we provide end-to-end
                service, including design consultation, prototyping, testing,
                production, and after-sales support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-hymid-teal text-white">
        <div className="hymid-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Contact us today to discuss your next project or request a quote for
            our services.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-white text-hymid-dark rounded-md hover:bg-gray-100 transition-all duration-300"
          >
            Request a Consultation <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default OurServices;
