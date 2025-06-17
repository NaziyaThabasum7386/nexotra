import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCardbn";
import Devops from '../components/devops'

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
    title: "Business Consulting",
    description: "Navigate complexity, drive transformation, and unlock sustainable growth with our expert business consulting services.",
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
    title: "Talent Hiring",
    description: "Comprehensive security solutions and consulting",
    backgroundImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    knowmoreLink: "/services/cybersecurity",
  },
  {
    id: 6,
    title: "DevOps Services",
    description: "Streamline your development and operations",
    backgroundImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
    knowmoreLink: <Devops/>,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full shadow p-2 z-50"
    aria-label="Previous Slide"
  >
    <svg
      className="w-8 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full shadow p-2 z-50"
    aria-label="Next Slide"
  >
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const ServicesSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-4xl font-bold text-black mb-4">Our Services</p>
          <h2 className="text-4xl font-bold text-black">
            Achieve{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
              Business Excellence
            </span>{" "}
            With Our Services
          </h2>
        </div>

        <div className="relative">
          <Carousel
            responsive={responsive}
            infinite
            swipeable
            draggable
            showDots={false}
            arrows
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            itemClass="px-2"
            containerClass="py-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  backgroundImage={service.backgroundImage}
                  knowMore={service.knowmoreLink}
                />
              </motion.div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
