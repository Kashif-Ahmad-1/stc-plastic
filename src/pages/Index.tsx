
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollObserver from '@/components/ScrollObserver';

const Index = () => {
  return (
    <ScrollObserver>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </ScrollObserver>
  );
};

export default Index;
