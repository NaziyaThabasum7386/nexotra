import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Tablet,
  Laptop,
  Palette,
  Zap,
  Shield,
  Code,
  Settings,
  CheckCircle2,
  Compass,
  Layout,
  Share2,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

function MobileDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
          alt="Mobile Development"
          className="absolute w-full h-full object-cover"
        />

        {/* Floating Device Animations */}
        <div className="absolute inset-0 z-20">
          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 right-1/4"
          >
            <Smartphone className="w-16 h-16 text-white opacity-50" />
          </motion.div>
          <motion.div
            animate={{
              y: [10, -10, 10],
              rotate: [5, -5, 5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/3 right-1/3"
          >
            <Tablet className="w-24 h-24 text-white opacity-30" />
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
                Innovative Mobile Solutions for Modern Business
              </h1>
              <p className="text-xl text-orange-100 mb-8">
                Create powerful, engaging mobile experiences that transform how
                users interact with your brand.
              </p>

              {/* Platform Support */}
              <div className="flex space-x-6 mb-8">
                {[
                  { icon: Smartphone, text: "iOS" },
                  { icon: Tablet, text: "Android" },
                  { icon: Laptop, text: "Cross-Platform" },
                ].map((platform, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center space-y-2"
                  >
                    <platform.icon className="w-12 h-12 text-white" />
                    <span className="text-white font-medium">
                      {platform.text}
                    </span>
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[
            {
              icon: Code,
              title: "Native Development",
              description:
                "High-performance native apps for iOS and Android platforms.",
              color: "from-orange-400 to-pink-500",
            },
            {
              icon: Share2,
              title: "Cross-Platform",
              description:
                "Efficient development with React Native and Flutter.",
              color: "from-pink-500 to-purple-500",
            },
            {
              icon: Layout,
              title: "UI/UX Design",
              description: "Beautiful, intuitive interfaces that users love.",
              color: "from-purple-500 to-orange-400",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              className={`bg-gradient-to-br ${service.color} p-8 rounded-2xl shadow-xl text-white relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-16 -translate-y-16" />
              <service.icon className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-orange-50">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            App Development Features
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Fast Performance" },
              { icon: Shield, title: "Secure Data" },
              { icon: Palette, title: "Custom Design" },
              { icon: Settings, title: "Easy Integration" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center"
              >
                <feature.icon className="w-10 h-10 text-white mb-4 mx-auto" />
                <h3 className="text-white font-semibold">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-br from-orange-600 to-pink-600 rounded-3xl p-12 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Discovery", icon: Compass },
              { step: "2", title: "Design", icon: Palette },
              { step: "3", title: "Development", icon: Code },
              { step: "4", title: "Testing", icon: Shield },
              { step: "5", title: "Launch", icon: Share2 },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative text-center"
              >
                <process.icon className="w-12 h-12 text-white mb-4 mx-auto" />
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">
                    {process.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {process.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default MobileDevelopment;
