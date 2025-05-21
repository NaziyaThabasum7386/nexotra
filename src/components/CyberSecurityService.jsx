import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  AlertCircle,
  Eye,
  FileSearch,
  Network,
  CloudOff,
  Binary,
  CheckCircle2,
  Fingerprint,
  ShieldAlert,
  Wifi,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg border border-blue-100"
  >
    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500 opacity-10 rounded-full transform translate-x-8 -translate-y-8" />
    <Icon className="w-8 h-8 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

function Cybersecurity() {
  const features = [
    {
      icon: ShieldAlert,
      title: "Real-time Monitoring",
      description: "24/7 security monitoring of your systems",
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "Enterprise-grade encryption for sensitive data",
    },
    {
      icon: Fingerprint,
      title: "Access Control",
      description: "Biometric and multi-factor authentication",
    },
    {
      icon: Wifi,
      title: "Network Protection",
      description: "Advanced firewall and intrusion detection",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
          alt="Cybersecurity"
          className="absolute w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl font-bold text-white mb-6">
                Next-Generation Cybersecurity Solutions
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Protect your digital assets with advanced security measures and
                proactive threat detection systems.
              </p>
              <div className="flex space-x-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-white"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mr-2" />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          <motion.div variants={fadeIn} className="lg:col-span-3">
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-blue-100 text-center max-w-2xl mx-auto">
              Our enterprise-grade security solutions are designed to protect
              your business from evolving cyber threats.
            </p>
          </motion.div>

          {[
            {
              icon: Shield,
              title: "Threat Detection & Response",
              description:
                "Advanced threat detection systems with automated response protocols for immediate threat neutralization.",
            },
            {
              icon: Eye,
              title: "Security Monitoring",
              description:
                "24/7 security operations center providing continuous monitoring and threat analysis.",
            },
            {
              icon: Network,
              title: "Network Security",
              description:
                "Comprehensive network protection with next-gen firewalls and intrusion prevention.",
            },
            {
              icon: FileSearch,
              title: "Security Assessments",
              description:
                "Regular security audits and penetration testing to identify and address vulnerabilities.",
            },
            {
              icon: CloudOff,
              title: "Cloud Security",
              description:
                "Secure cloud infrastructure with advanced data protection and access controls.",
            },
            {
              icon: Binary,
              title: "Security Training",
              description:
                "Comprehensive security awareness training for employees and stakeholders.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Security Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {[
            { number: "99.9%", label: "Threat Detection Rate" },
            { number: "24/7", label: "Active Monitoring" },
            { number: "100+", label: "Security Experts" },
            { number: "<1hr", label: "Response Time" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-800 bg-opacity-50 p-6 rounded-xl text-center"
            >
              <h3 className="text-3xl font-bold text-blue-400 mb-2">
                {stat.number}
              </h3>
              <p className="text-blue-100">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Security Process */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Security Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Assessment",
                description: "Initial security audit",
              },
              {
                step: "2",
                title: "Planning",
                description: "Security strategy development",
              },
              {
                step: "3",
                title: "Implementation",
                description: "Security measures deployment",
              },
              {
                step: "4",
                title: "Monitoring",
                description: "Continuous security oversight",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="relative text-center"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {process.title}
                </h3>
                <p className="text-blue-200">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Cybersecurity;
