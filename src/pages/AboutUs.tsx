import React, { useEffect } from "react";
import { ArrowRight, Award, Lightbulb, Leaf, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import About from "@/components/About";

const TeamMember = ({ name, position, image, index }) => {
  return (
    <div
      className="reveal-on-scroll bg-white p-6 rounded-lg shadow-lg text-center"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="mb-4 overflow-hidden rounded-full w-32 h-32 mx-auto">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-semibold text-hymid-dark">{name}</h3>
      <p className="text-hymid-gray mb-3">{position}</p>
      <a
        href="#"
        className="inline-flex items-center text-hymid-teal hover:underline"
      >
        View Profile <ArrowRight size={16} className="ml-1" />
      </a>
    </div>
  );
};

const ClientLogo = ({ name, logo, index }) => {
  return (
    <div
      className="reveal-on-scroll bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <img
        src={logo}
        alt={name}
        className="max-h-12 max-w-full grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
  );
};

const AboutUs = () => {
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

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Priya Sharma",
      position: "Head of Engineering",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Vikram Singh",
      position: "Production Manager",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Ananya Patel",
      position: "Quality Assurance",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const clients = [
    {
      name: "Client 1",
      logo: "https://via.placeholder.com/150x50?text=Client+1",
    },
    {
      name: "Client 2",
      logo: "https://via.placeholder.com/150x50?text=Client+2",
    },
    {
      name: "Client 3",
      logo: "https://via.placeholder.com/150x50?text=Client+3",
    },
    {
      name: "Client 4",
      logo: "https://via.placeholder.com/150x50?text=Client+4",
    },
    {
      name: "Client 5",
      logo: "https://via.placeholder.com/150x50?text=Client+5",
    },
    {
      name: "Client 6",
      logo: "https://via.placeholder.com/150x50?text=Client+6",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-[#1f2937] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1581095566331-1525ca2fcd25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
              filter: "brightness(0.5)",
            }}
          ></div>
        </div>

        <div className="hymid-container flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-hymid-teal">US</span>
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mb-10">
            Precision in Plastics. Innovation in Every Mould.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#company"
              className="px-8 py-3 bg-hymid-teal text-white rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center"
            >
              Explore Our Story <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <About />

      {/* Our Team */}
      <section id="team" className="section-padding bg-hymid-light">
        <div className="hymid-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hymid-dark mb-4">
              Meet Our <span className="text-hymid-teal">Team</span>
            </h2>
            <p className="text-hymid-gray max-w-3xl mx-auto">
              Our talented team brings together decades of experience in plastic
              manufacturing, engineering, and design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                position={member.position}
                image={member.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="process-about" className="section-padding bg-white">
        <div className="hymid-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hymid-dark mb-4">
              Our <span className="text-hymid-teal">Process</span>
            </h2>
            <p className="text-hymid-gray max-w-3xl mx-auto">
              We follow a meticulous process to transform your ideas into
              high-quality plastic products.
            </p>
          </div>

          <div className="relative">
            {/* Process timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-hymid-teal/30 transform -translate-x-1/2"></div>

            <div className="space-y-16">
              <div className="flex flex-col md:flex-row items-center max-h-[300px] overflow-hidden">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 reveal-on-scroll text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-hymid-dark mb-3">
                      Consultation & Requirements
                    </h3>
                    <p className="text-hymid-gray">
                      We begin with a thorough consultation to understand your
                      product requirements, specifications, and application
                      needs.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-8 h-8 bg-hymid-teal rounded-full relative z-10 mx-auto"></div>
                <div className="md:w-1/2 md:pl-12 reveal-on-scroll">
                  <img
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Consultation"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center max-h-[300px] overflow-hidden">
                <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 reveal-on-scroll">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-hymid-dark mb-3">
                      Design & Engineering
                    </h3>
                    <p className="text-hymid-gray">
                      Our engineering team creates detailed designs and
                      prototypes, considering material properties,
                      functionality, and aesthetics.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-8 h-8 bg-hymid-teal rounded-full relative z-10 mx-auto"></div>
                <div className="md:w-1/2 md:pr-12 reveal-on-scroll text-right">
                  <img
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Design"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center max-h-[300px] overflow-hidden">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 reveal-on-scroll text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-hymid-dark mb-3">
                      Production & Quality Control
                    </h3>
                    <p className="text-hymid-gray">
                      Using advanced machinery, we manufacture your products
                      with strict quality control measures at every step.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-8 h-8 bg-hymid-teal rounded-full relative z-10 mx-auto"></div>
                <div className="md:w-1/2 md:pl-12 reveal-on-scroll">
                  <img
                    src="https://images.unsplash.com/photo-1563694983011-6f4d90358083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Production"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center max-h-[300px] overflow-hidden">
                <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 reveal-on-scroll">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-hymid-dark mb-3">
                      Delivery & Support
                    </h3>
                    <p className="text-hymid-gray">
                      We ensure timely delivery of your products and provide
                      ongoing support to address any concerns or future
                      requirements.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-8 h-8 bg-hymid-teal rounded-full relative z-10 mx-auto"></div>
                <div className="md:w-1/2 md:pr-12 reveal-on-scroll text-right">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Delivery"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section id="clients" className="section-padding bg-hymid-light">
        <div className="hymid-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hymid-dark mb-4">
              Our <span className="text-hymid-teal">Clients</span>
            </h2>
            <p className="text-hymid-gray max-w-3xl mx-auto">
              We're proud to partner with industry leaders across various
              sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <ClientLogo
                key={index}
                name={client.name}
                logo={client.logo}
                index={index}
              />
            ))}
          </div>

          <div className="mt-16 reveal-on-scroll">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-hymid-dark mb-6 text-center">
                Client Testimonials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-hymid-light p-6 rounded-lg">
                  <p className="italic text-hymid-gray mb-4">
                    "STC has consistently delivered high-quality plastic
                    components for our automotive applications. Their attention
                    to detail and commitment to meeting deadlines make them a
                    valuable partner."
                  </p>
                  <p className="font-semibold text-hymid-dark">
                    - Automotive Industry Client
                  </p>
                </div>
                <div className="bg-hymid-light p-6 rounded-lg">
                  <p className="italic text-hymid-gray mb-4">
                    "We've been working with STC for over 5 years, and they
                    continue to impress us with their innovative approach to
                    plastic manufacturing and excellent customer service."
                  </p>
                  <p className="font-semibold text-hymid-dark">
                    - Healthcare Sector Client
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AboutUs;
