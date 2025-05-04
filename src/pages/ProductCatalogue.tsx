
import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, ChevronRight, ChevronDown, FileImage, Image, Package } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const ProductCard = ({ product, index }) => {
  return (
    <div 
      className="reveal-on-scroll group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-hymid-teal text-white text-xs px-2 py-1 rounded">
          {product.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-hymid-dark mb-2">{product.name}</h3>
        <p className="text-hymid-gray mb-4 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-hymid-gray">{product.material}</span>
          <a 
            href="#" 
            className="inline-flex items-center text-hymid-teal hover:underline"
          >
            Details <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

const CategoryAccordion = ({ category, isOpen, toggle, products }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
      <div 
        className="flex justify-between items-center p-4 bg-hymid-light cursor-pointer"
        onClick={toggle}
      >
        <div className="flex items-center">
          <Package size={20} className="text-hymid-teal mr-3" />
          <h3 className="font-semibold text-hymid-dark">{category}</h3>
        </div>
        {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </div>
      
      {isOpen && (
        <div className="p-4 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <div key={index} className="border border-gray-200 p-4 rounded-md hover:border-hymid-teal transition-colors">
                <div className="flex items-center mb-2">
                  <div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden shrink-0 mr-3">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-medium text-hymid-dark">{product.name}</h4>
                </div>
                <p className="text-sm text-hymid-gray mb-3 line-clamp-2">{product.description}</p>
                <a 
                  href="#" 
                  className="text-sm text-hymid-teal hover:underline"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ProductCatalogue = () => {
  const [openCategory, setOpenCategory] = useState(null);
  
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

  const toggleCategory = (category) => {
    if (openCategory === category) {
      setOpenCategory(null);
    } else {
      setOpenCategory(category);
    }
  };

  const products = [
    {
      name: "Automotive Dashboard Component",
      description: "Precision-molded dashboard components for automotive applications with high heat resistance and durability.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Automotive",
      material: "High-impact ABS"
    },
    {
      name: "Medical Device Housing",
      description: "Sterile, biocompatible housings for medical devices with precise tolerance specifications.",
      image: "https://images.unsplash.com/photo-1581595219315-a523f912db8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Healthcare",
      material: "Medical-grade Polycarbonate"
    },
    {
      name: "Consumer Electronics Shell",
      description: "Lightweight, durable shells for various consumer electronics with excellent finish and precise fit.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Electronics",
      material: "Flame-retardant PC/ABS blend"
    },
    {
      name: "Agricultural Irrigation Components",
      description: "UV-resistant, weather-durable components for agricultural irrigation systems.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Agriculture",
      material: "UV-stabilized Polyethylene"
    },
    {
      name: "Eco-friendly Packaging",
      description: "Sustainable packaging solutions that minimize environmental impact while maintaining product protection.",
      image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Packaging",
      material: "Biodegradable PLA"
    },
    {
      name: "Industrial Storage Container",
      description: "Heavy-duty storage containers for industrial applications with stackable design and reinforced structure.",
      image: "https://images.unsplash.com/photo-1633961409991-39546e1376c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Industrial",
      material: "High-density Polyethylene"
    }
  ];

  const categoryProducts = {
    "Automotive": products.filter(p => p.category === "Automotive"),
    "Healthcare": products.filter(p => p.category === "Healthcare"),
    "Electronics": products.filter(p => p.category === "Electronics"),
    "Agriculture": products.filter(p => p.category === "Agriculture"),
    "Packaging": products.filter(p => p.category === "Packaging"),
    "Industrial": products.filter(p => p.category === "Industrial")
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-hymid-light overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
              filter: 'brightness(0.5)'
            }}
          ></div>
        </div>
        
        <div className="hymid-container flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-hymid-teal">Products</span>
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mb-10">
            Explore our comprehensive range of precision plastic solutions designed for various industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#brochure" 
              className="px-8 py-3 bg-hymid-teal text-white rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center"
            >
              View Digital Brochure <FileImage size={18} className="ml-2" />
            </a>
            <a 
              href="#categories" 
              className="px-8 py-3 bg-white text-hymid-dark rounded-md hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              Browse Categories <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Digital Brochure */}
      <section id="brochure" className="section-padding bg-white">
        <div className="hymid-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hymid-dark mb-4">
              Digital <span className="text-hymid-teal">Brochure</span>
            </h2>
            <p className="text-hymid-gray max-w-3xl mx-auto">
              Download our comprehensive product catalog or browse online to explore our complete range of plastic manufacturing solutions.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 reveal-on-scroll">
              <div className="bg-hymid-light p-6 rounded-lg shadow-lg">
                <div className="aspect-[3/4] bg-white rounded-lg shadow-inner flex items-center justify-center overflow-hidden">
                  <Image size={48} className="text-hymid-teal opacity-30" />
                </div>
                <div className="mt-6 flex justify-center">
                  <a 
                    href="#" 
                    className="px-6 py-2 bg-hymid-teal text-white rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center"
                  >
                    Download PDF <Download size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 reveal-on-scroll">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-hymid-dark mb-6">Product Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-hymid-teal/10 p-2 rounded-md mr-4 text-hymid-teal">
                      <Package size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-hymid-dark mb-1">Diverse Product Range</h4>
                      <p className="text-hymid-gray text-sm">
                        Explore our extensive collection of plastic products designed for various applications and industries.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-hymid-teal/10 p-2 rounded-md mr-4 text-hymid-teal">
                      <FileImage size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-hymid-dark mb-1">Detailed Specifications</h4>
                      <p className="text-hymid-gray text-sm">
                        Access comprehensive technical specifications, material information, and application guidelines.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-hymid-teal/10 p-2 rounded-md mr-4 text-hymid-teal">
                      <Image size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-hymid-dark mb-1">High-Resolution Images</h4>
                      <p className="text-hymid-gray text-sm">
                        View detailed images showcasing the quality and features of our products.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Categories */}
      <section id="categories" className="section-padding bg-hymid-light">
        <div className="hymid-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hymid-dark mb-4">
              Product <span className="text-hymid-teal">Categories</span>
            </h2>
            <p className="text-hymid-gray max-w-3xl mx-auto">
              Browse our products by industry category to find the perfect solution for your specific needs.
            </p>
          </div>
          
          <div className="mb-12">
            <Tabs defaultValue="grid" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="grid">Grid View</TabsTrigger>
                  <TabsTrigger value="list">List View</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="grid">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.map((product, index) => (
                    <ProductCard key={index} product={product} index={index} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="list">
                <div className="space-y-4">
                  {Object.keys(categoryProducts).map((category) => (
                    <CategoryAccordion 
                      key={category}
                      category={category}
                      isOpen={openCategory === category}
                      toggle={() => toggleCategory(category)}
                      products={categoryProducts[category]}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="text-center reveal-on-scroll">
            <p className="text-hymid-gray mb-6">
              Can't find what you're looking for? Contact us for custom product development tailored to your specific requirements.
            </p>
            <a 
              href="/services" 
              className="inline-flex items-center px-8 py-3 bg-hymid-teal text-white rounded-md hover:bg-opacity-90 transition-all duration-300"
            >
              Learn About Custom Solutions <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Product Applications */}
      <section className="section-padding bg-white">
        <div className="hymid-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hymid-dark mb-4">
              Product <span className="text-hymid-teal">Applications</span>
            </h2>
            <p className="text-hymid-gray max-w-3xl mx-auto">
              Discover how our products are being utilized across various industries to solve complex challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-hymid-light p-6 rounded-lg shadow-md reveal-on-scroll">
              <h3 className="text-xl font-semibold text-hymid-dark mb-3">Automotive</h3>
              <ul className="space-y-2 text-hymid-gray mb-4">
                <li>• Interior dashboard components</li>
                <li>• Engine compartment parts</li>
                <li>• Exterior trim elements</li>
                <li>• Electrical housing units</li>
              </ul>
              <a 
                href="#" 
                className="inline-flex items-center text-hymid-teal hover:underline"
              >
                Explore Automotive Solutions <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-hymid-light p-6 rounded-lg shadow-md reveal-on-scroll" style={{ animationDelay: '100ms' }}>
              <h3 className="text-xl font-semibold text-hymid-dark mb-3">Healthcare</h3>
              <ul className="space-y-2 text-hymid-gray mb-4">
                <li>• Medical device enclosures</li>
                <li>• Diagnostic equipment parts</li>
                <li>• Laboratory consumables</li>
                <li>• Sterilizable components</li>
              </ul>
              <a 
                href="#" 
                className="inline-flex items-center text-hymid-teal hover:underline"
              >
                Explore Healthcare Solutions <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-hymid-light p-6 rounded-lg shadow-md reveal-on-scroll" style={{ animationDelay: '200ms' }}>
              <h3 className="text-xl font-semibold text-hymid-dark mb-3">Consumer Goods</h3>
              <ul className="space-y-2 text-hymid-gray mb-4">
                <li>• Home appliance components</li>
                <li>• Electronic device housings</li>
                <li>• Durable household items</li>
                <li>• Innovative storage solutions</li>
              </ul>
              <a 
                href="#" 
                className="inline-flex items-center text-hymid-teal hover:underline"
              >
                Explore Consumer Solutions <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ProductCatalogue;