import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  Code,
  Database,
  Cloud,
  Globe,
  Shield,
  Cpu,
} from "lucide-react";
import ServiceCard from "../components/ServiceCard";

export const services = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Create stunning, responsive websites with modern technologies",
    bgImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
    icon: Globe,
    longDescription:
      "Our web development services combine cutting-edge technologies with exceptional user experience design. We specialize in creating responsive, scalable, and performant web applications using modern frameworks like React, Vue, and Angular. From e-commerce platforms to complex enterprise solutions, we deliver web applications that drive business growth.",
    features: [
      "Custom Web Application Development",
      "Progressive Web Apps (PWA)",
      "E-commerce Solutions",
      "Content Management Systems",
      "API Development and Integration",
      "Performance Optimization",
    ],
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure for your growing business",
    bgImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072",
    icon: Cloud,
    longDescription:
      "Transform your business with our comprehensive cloud solutions. We help organizations leverage the power of cloud computing to improve scalability, reduce costs, and enhance operational efficiency. Our expertise spans across major cloud platforms including AWS, Azure, and Google Cloud.",
    features: [
      "Cloud Migration Services",
      "Cloud Infrastructure Design",
      "Serverless Architecture",
      "Cloud Security Solutions",
      "DevOps Implementation",
      "24/7 Cloud Support",
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Protect your digital assets with advanced security measures",
    bgImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
    icon: Shield,
    longDescription:
      "In today's digital landscape, security is paramount. Our cybersecurity services provide comprehensive protection for your business against evolving cyber threats. We implement robust security measures and conduct regular assessments to ensure your data and systems remain secure.",
    features: [
      "Security Audits & Assessments",
      "Penetration Testing",
      "Incident Response Planning",
      "Security Monitoring",
      "Compliance Management",
      "Employee Security Training",
    ],
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    bgImage:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=2070",
    icon: Code,
    longDescription:
      "We create exceptional mobile experiences for iOS and Android platforms. Our mobile development team specializes in building native and cross-platform applications that engage users and deliver real business value. We focus on performance, user experience, and maintainability.",
    features: [
      "iOS App Development",
      "Android App Development",
      "Cross-platform Solutions",
      "Mobile UI/UX Design",
      "App Store Optimization",
      "Mobile App Maintenance",
    ],
  },
  {
    id: "database-solutions",
    title: "Database Solutions",
    description: "Optimize your data architecture and management",
    bgImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2072",
    icon: Database,
    longDescription:
      "Efficient data management is crucial for business success. We provide comprehensive database solutions that help organizations store, manage, and analyze their data effectively. Our expertise covers both SQL and NoSQL databases, ensuring you get the right solution for your needs.",
    features: [
      "Database Design & Architecture",
      "Performance Optimization",
      "Data Migration Services",
      "Database Security",
      "Backup & Recovery Solutions",
      "24/7 Database Support",
    ],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Implement intelligent solutions for your business",
    bgImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2072",
    icon: Cpu,
    longDescription:
      "Harness the power of artificial intelligence and machine learning to transform your business. We develop custom AI solutions that automate processes, provide valuable insights, and create competitive advantages. Our team stays at the forefront of AI technology to deliver innovative solutions.",
    features: [
      "Custom AI Solutions",
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision Systems",
      "Predictive Analytics",
      "AI Integration Services",
    ],
  },
];

function HomePage() {
  const navigate = useNavigate();

  const handleLearnMore = (serviceId, string) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Achieve Business Excellence
          </h1>
          <p className="text-xl text-center text-blue-200 max-w-3xl mx-auto">
            With Our Premium Services
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              onLearnMore={() => handleLearnMore(service.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
