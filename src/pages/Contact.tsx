import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useToast } from '@/hooks/use-toast';
import ContactSection from '@/components/Contact';

const Contact = () => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero section */}
      <section className="bg-hymid-dark text-white pt-32 pb-20">
        <div className="hymid-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions or need a quote? We'd love to hear from you.
          </p>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <ContactSection />

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;