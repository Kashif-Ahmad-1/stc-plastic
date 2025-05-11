// BlogDarkTheme.jsx
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import {
  Search,
  BookOpen,
  Lightbulb,
  Package,
  Leaf,
  Calendar,
} from "lucide-react";

const BlogPost = ({ title, excerpt, category, date, image, index }) => {
  return (
    <div
      className="reveal-on-scroll bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="bg-hymid-teal/20 text-hymid-teal text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-gray-400 text-sm flex items-center">
            <Calendar size={14} className="mr-1" />
            {date}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{excerpt}</p>
        <a
          href="#"
          className="inline-flex items-center text-hymid-teal hover:underline"
        >
          Read more
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

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

  const categories = [
    { name: "All", icon: BookOpen },
    { name: "Industry Trends", icon: Lightbulb },
    { name: "Product Spotlights", icon: Package },
    { name: "Sustainability", icon: Leaf },
  ];

  const blogPosts = [
    {
      title: "Innovations in Sustainable Plastic Manufacturing",
      excerpt:
        "Explore the latest advancements in eco-friendly plastic production and how STC is leading the charge in sustainability.",
      category: "Sustainability",
      date: "May 2, 2025",
      image:
        "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "The Future of Medical Plastics Post-Pandemic",
      excerpt:
        "How the healthcare industry's demand for specialized plastic components has evolved and what it means for manufacturers.",
      category: "Industry Trends",
      date: "April 24, 2025",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Spotlight: Our New Precision Micro-Components",
      excerpt:
        "Introducing STC's latest line of high-precision micro-molded components for electronic devices and medical instruments.",
      category: "Product Spotlights",
      date: "April 15, 2025",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Reducing Carbon Footprint in Manufacturing",
      excerpt:
        "Practical strategies we've implemented to decrease our environmental impact while maintaining production quality.",
      category: "Sustainability",
      date: "April 8, 2025",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "The Role of 3D Printing in Modern Prototyping",
      excerpt:
        "How STC integrates advanced 3D printing technology into our product development process for faster iterations.",
      category: "Industry Trends",
      date: "March 30, 2025",
      image:
        "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Case Study: Automotive Parts Redesign",
      excerpt:
        "How we helped a major automotive manufacturer redesign critical components for increased durability and performance.",
      category: "Product Spotlights",
      date: "March 22, 2025",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <section className="bg-gray-900 text-white pt-32 pb-20">
        <div className="hymid-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Insights, innovations, and industry updates from the STC team
          </p>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-hymid-teal bg-gray-800 text-white placeholder-gray-400"
            />
            <Search
              className="absolute left-4 top-3.5 text-gray-400"
              size={20}
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-800">
        <div className="hymid-container">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center px-4 py-2 rounded-md transition-colors duration-200 ${
                  activeCategory === category.name
                    ? "bg-hymid-teal text-white"
                    : "bg-gray-900 text-white hover:bg-gray-700"
                }`}
              >
                <category.icon size={16} className="mr-2" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <BlogPost
                  key={index}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  date={post.date}
                  image={post.image}
                  index={index}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  No articles found
                </h3>
                <p className="text-gray-300">
                  Try adjusting your search or filter to find what you're
                  looking for.
                </p>
              </div>
            )}
          </div>

          <div className="mt-16 bg-gray-900 p-8 rounded-lg shadow-lg reveal-on-scroll">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-300 mb-6">
                Stay updated with our latest articles, industry insights and
                company news.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-hymid-teal border border-gray-600 bg-gray-800 text-white placeholder-gray-400"
                />
                <button className="bg-hymid-teal text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                  Subscribe
                </button>
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

export default Blog;
