
import React, { useRef } from 'react';
import { Car, Stethoscope, ShoppingBag, Leaf, Package } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface IndustryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, description, icon, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
      <div 
        className="h-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-3 text-hymid-teal">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-hymid-dark">{title}</h3>
        </div>
        <p className="text-hymid-gray">{description}</p>
      </div>
    </div>
  );
};

const Industries = () => {
  const industries = [
    {
      title: "Automotive",
      description: "Durable and lightweight precision parts for automotive applications.",
      icon: <Car size={24} />,
      imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Healthcare",
      description: "Medical-grade and sterile products for healthcare applications.",
      icon: <Stethoscope size={24} />,
      imageUrl: "https://images.unsplash.com/photo-1581595219315-a523f912db8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Consumer Goods",
      description: "Durable and aesthetically pleasing products for home and office use.",
      icon: <ShoppingBag size={24} />,
      imageUrl: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Agriculture",
      description: "UV and weather-resistant components for agricultural applications.",
      icon: <Leaf size={24} />,
      imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Industrial & Logistics",
      description: "Robust crates, containers, and pallets for industrial use.",
      icon: <Package size={24} />,
      imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="industries" className="section-padding bg-white">
      <div className="hymid-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hymid-dark mb-4">
            Industries We <span className="text-hymid-teal">Serve</span>
          </h2>
          <p className="text-hymid-gray max-w-3xl mx-auto">
            Our plastic manufacturing expertise spans multiple industries, delivering tailored solutions for diverse applications.
          </p>
        </div>

        <div className="px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full reveal-on-scroll"
          >
            <CarouselContent>
              {industries.map((industry, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-2">
                  <div className="h-full">
                    <IndustryCard
                      title={industry.title}
                      description={industry.description}
                      icon={industry.icon}
                      imageUrl={industry.imageUrl}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 lg:-left-4" />
            <CarouselNext className="right-0 lg:-right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Industries;
