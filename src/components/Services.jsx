import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Layout, Server, Database, Cloud, Shield } from "lucide-react";

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Layout className="text-blue-400" size={40} />,
      title: "Frontend Development",
      description:
        "Creating responsive and intuitive user interfaces using modern frameworks like React, Vue, and Angular.",
    },
    {
      icon: <Server className="text-green-400" size={40} />,
      title: "Backend Development",
      description:
        "Building robust server-side applications with Node.js, Python, and Java.",
    },
    {
      icon: <Database className="text-purple-400" size={40} />,
      title: "Database Design",
      description:
        "Designing and optimizing database structures for scalable applications.",
    },
    {
      icon: <Cloud className="text-red-400" size={40} />,
      title: "Business Consulting",
      description:
        "Navigate complexity, drive transformation, and unlock sustainable growth with our expert business consulting services.",
    },
    {
      icon: <Code2 className="text-yellow-400" size={40} />,
      title: "API Development",
      description:
        "Creating RESTful and GraphQL APIs for seamless integration.",
    },
    {
      icon: <Shield className="text-indigo-400" size={40} />,
      title: "Security Solutions",
      description: "Implementing robust security measures and best practices.",
    },
  ];

  return (
    <div
      id="services"
      className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Comprehensive software development solutions tailored to your needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
