import React, { useState, useEffect, useRef } from "react";
import ServiceCard from "../components/ServiceCardbn";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies",
    backgroundImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    knowmoreLink: "/services/full-stack",
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    backgroundImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    knowmoreLink: "/services/mobile-development",
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment",
    backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    knowmoreLink: "/services/cloud-integration",
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    description: "Intelligent solutions for business automation",
    backgroundImage: "https://images.unsplash.com/photo-1555255707-c07966088b7b",
    knowmoreLink: "/services/AI&ML",
  },
  {
    id: 5,
    title: "Cybersecurity",
    description: "Comprehensive security solutions and consulting",
    backgroundImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    knowmoreLink: "/services/cybersecurity",
  },
  {
    id: 6,
    title: "DevOps Services",
    description: "Streamline your development and operations",
    backgroundImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
    knowmoreLink: "/services/full-stack",
  },
];

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const visibleServices = [
    services[currentIndex % services.length],
    services[(currentIndex + 1) % services.length],
    services[(currentIndex + 2) % services.length],
  ];

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [currentIndex, isHovered]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      nextSlide();
    } else if (info.offset.x > 100) {
      prevSlide();
    }
  };

  return (
    <div
      className="bg-white min-h-screen py-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-4xl font-bold text-black mb-4">Our Services</p>
          <h2 className="text-4xl font-bold text-black">
            Achieve
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
              {" "}Business Excellence
            </span>{" "}
            With Our Services
          </h2>
        </div>

        <div className="relative px-4 lg:px-12">
          <motion.div
            className="flex flex-col sm:flex-row gap-6 overflow-hidden cursor-grab"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            {visibleServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="flex-1 min-w-[300px]"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  backgroundImage={service.backgroundImage}
                  knowMore={service.knowmoreLink}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg hidden md:block"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(246,0,254,1) 20%, rgba(201,0,254,1) 31%, rgba(161,54,255,1) 43%, rgba(81,66,240,1) 66%, rgba(0,51,217,1) 100%)",
              color: "#fff",
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg hidden md:block"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(246,0,254,1) 20%, rgba(201,0,254,1) 31%, rgba(161,54,255,1) 43%, rgba(81,66,240,1) 66%, rgba(0,51,217,1) 100%)",
              color: "#fff",
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              title={services[i].title}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600"
                  : "bg-gray-300"
              }`}
              style={
                i === currentIndex
                  ? {
                      backgroundImage:
                        "linear-gradient(90deg, rgba(246,0,254,1) 20%, rgba(201,0,254,1) 31%, rgba(161,54,255,1) 43%, rgba(81,66,240,1) 66%, rgba(0,51,217,1) 100%)",
                    }
                  : {}
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
