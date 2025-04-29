
import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
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
    <section id="contact" className="section-padding bg-hymid-light">
      <div className="hymid-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hymid-dark mb-4">
            Get in <span className="text-hymid-teal">Touch</span>
          </h2>
          <p className="text-hymid-gray max-w-3xl mx-auto">
            Have a project in mind? Contact our team to discuss how we can help you bring your ideas to life.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2 reveal-on-scroll">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-hymid-dark mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-hymid-teal/10 p-3 rounded-full mr-4">
                    <Phone size={20} className="text-hymid-teal" />
                  </div>
                  <div>
                    <h4 className="text-hymid-dark font-medium">Phone</h4>
                    <p className="text-hymid-gray">+44 (0) 1626 123456</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-hymid-teal/10 p-3 rounded-full mr-4">
                    <Mail size={20} className="text-hymid-teal" />
                  </div>
                  <div>
                    <h4 className="text-hymid-dark font-medium">Email</h4>
                    <p className="text-hymid-gray">info@hymid.co.uk</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-hymid-teal/10 p-3 rounded-full mr-4">
                    <MapPin size={20} className="text-hymid-teal" />
                  </div>
                  <div>
                    <h4 className="text-hymid-dark font-medium">Address</h4>
                    <p className="text-hymid-gray">
                      Hymid Technical Mouldings<br />
                      Devon, UK
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 reveal-on-scroll">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-hymid-dark mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-hymid-dark font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-hymid-teal"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-hymid-dark font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-hymid-teal"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-hymid-dark font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-hymid-teal"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-hymid-dark font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-hymid-teal"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="inline-flex items-center px-8 py-3 bg-hymid-teal text-white rounded-md hover:bg-opacity-90 transition-all duration-300"
                >
                  Send Message <Send size={16} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
