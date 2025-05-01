
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Sustainability from '@/components/Sustainability';
import Quality from '@/components/Quality';
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
        <Industries />
        <WhyChooseUs />
        <Process />
        <Sustainability />
        <Quality />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </ScrollObserver>
  );
};

export default Index;
