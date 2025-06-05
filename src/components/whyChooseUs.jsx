import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Target, Users, Code, HeartHandshake } from "lucide-react";
import chooseUs from "../assets/ChooseUs.png";

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: Rocket,
      title: "Innovation Leaders",
      description:
        "Pioneering cutting-edge solutions that set industry standards",
      
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Target,
      title: "Result-Driven Approach",
      description: "Focused on delivering measurable business outcomes",
      
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Seasoned professionals with diverse industry expertise",
     
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Mastery in latest technologies and best practices",
      
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: HeartHandshake,
      title: "Client Partnership",
      description:
        "Building lasting relationships through trust and collaboration",
      
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white">
      <div ref={containerRef} className="container mx-auto px-4">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold  p-[10px] bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Experience excellence through innovation, expertise, and unwavering
            commitment to your success. We don't just meet expectations – we
            exceed them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={chooseUs}
                alt="Innovation Hub"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>

          {/* Reasons List (Animated One-by-One + Instant Hover) */}
          <div className="lg:col-span-7 my-10 space-y-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2, // Staggered effect on page load
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05, // Hover effect applies instantly
                  transition: { duration: 0.2 },
                }}
                className={`relative overflow-hidden bg-gradient-to-r ${reason.color} 
                  p-6 rounded-xl shadow-xl transform transition-all`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-white/20 rounded-lg">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-white/80">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
