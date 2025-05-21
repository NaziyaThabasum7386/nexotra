import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  Server,
  Globe,
  Layers,
  Shield,
  Scale,
  Zap,
  CheckCircle2,
  CloudCog,
  CloudRain,
  CloudSun,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

function CloudSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Hero Section with Floating Clouds */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Cloud Technology"
          className="absolute w-full h-full object-cover"
        />

        {/* Animated Cloud Elements */}
        <div className="absolute inset-0 z-20">
          <motion.div
            animate={{
              x: [0, 100, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4"
          >
            <Cloud className="w-16 h-16 text-white opacity-30" />
          </motion.div>
          <motion.div
            animate={{
              x: [0, -150, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/3 right-1/3"
          >
            <CloudCog className="w-24 h-24 text-white opacity-20" />
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="relative z-30 h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                Transform Your Business with Cloud Solutions
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Scalable, secure, and innovative cloud infrastructure designed
                for the future of your enterprise.
              </p>

              {/* Cloud Features Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Scale, text: "Scalable Infrastructure" },
                  { icon: Shield, text: "Enterprise Security" },
                  { icon: Zap, text: "High Performance" },
                  { icon: Globe, text: "Global Reach" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 text-white bg-white bg-opacity-10 rounded-lg p-3"
                  >
                    <feature.icon className="w-5 h-5 text-purple-300" />
                    <span>{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Services Section */}
        <motion.div
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[
            {
              icon: Server,
              title: "Cloud Infrastructure",
              description:
                "Build and scale your applications with our robust cloud infrastructure.",
              color: "from-purple-500 to-purple-600",
            },
            {
              icon: Database,
              title: "Cloud Storage",
              description:
                "Secure and scalable storage solutions for your enterprise data.",
              color: "from-indigo-500 to-indigo-600",
            },
            {
              icon: Layers,
              title: "Cloud Platform",
              description:
                "Comprehensive platform services for modern application development.",
              color: "from-blue-500 to-blue-600",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden bg-gradient-to-br ${service.color} p-8 rounded-2xl shadow-xl text-white`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full transform translate-x-16 -translate-y-16" />
              <service.icon className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-purple-100">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Cloud Benefits */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Why Choose Our Cloud Solutions?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "99.99%", label: "Uptime Guarantee" },
              { metric: "Global", label: "Data Centers" },
              { metric: "24/7", label: "Expert Support" },
              { metric: "Instant", label: "Scalability" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white bg-opacity-5 rounded-xl p-6 text-center backdrop-blur-sm"
              >
                <h3 className="text-3xl font-bold text-purple-300 mb-2">
                  {stat.metric}
                </h3>
                <p className="text-purple-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cloud Solutions Process */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-br from-purple-800 to-indigo-900 rounded-3xl p-12 shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-pattern opacity-5" />
          <h2 className="text-3xl font-bold text-white text-center mb-12 relative z-10">
            Cloud Migration Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              {
                step: "1",
                title: "Assessment",
                description: "Evaluate current infrastructure",
              },
              {
                step: "2",
                title: "Planning",
                description: "Design cloud architecture",
              },
              {
                step: "3",
                title: "Migration",
                description: "Seamless data transfer",
              },
              {
                step: "4",
                title: "Optimization",
                description: "Performance tuning",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">
                    {process.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {process.title}
                </h3>
                <p className="text-purple-200">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CloudSolutions;
