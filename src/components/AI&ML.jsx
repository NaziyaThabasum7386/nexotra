import React from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, Database, Network, BarChart, Notebook as Robot, Search, Zap, CheckCircle2, Lightbulb, LineChart, Workflow } from "lucide-react";
import Talenthiring from "../components/talenthiring/ServiceCard";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

function AiMachineLearning() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      {/* Hero Section with Neural Network Animation */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80"
          alt="AI Technology"
          className="absolute w-full h-full object-cover"
        />

        {/* Neural Network Animation */}
        <div className="absolute inset-0 z-20">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5
              }}
              className="absolute"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`
              }}
            >
              <Brain className="w-8 h-8 text-emerald-400 opacity-30" />
            </motion.div>
          ))}
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
                AI & Machine Learning Solutions
              </h1>
              <p className="text-xl text-emerald-100 mb-8">
                Harness the power of artificial intelligence and machine learning 
                to transform your business operations.
              </p>

              {/* AI Capabilities */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Brain, text: "Deep Learning" },
                  { icon: Database, text: "Big Data Analytics" },
                  { icon: Robot, text: "Automation" },
                  { icon: Search, text: "Predictive Analysis" }
                ].map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 bg-white bg-opacity-10 rounded-lg p-4"
                  >
                    <capability.icon className="w-6 h-6 text-emerald-400" />
                    <span className="text-white font-medium">{capability.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>


      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        {/* AI Solutions Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[
            {
              icon: Cpu,
              title: "Machine Learning",
              description: "Custom ML models for complex business problems.",
              color: "from-emerald-600 to-teal-700"
            },
            {
              icon: Network,
              title: "Deep Learning",
              description: "Neural networks for advanced pattern recognition.",
              color: "from-teal-600 to-cyan-700"
            },
            {
              icon: BarChart,
              title: "Predictive Analytics",
              description: "Data-driven insights for informed decision making.",
              color: "from-cyan-600 to-emerald-700"
            }
          ].map((solution, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              className={`bg-gradient-to-br ${solution.color} p-8 rounded-2xl shadow-xl text-white relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-16 -translate-y-16" />
              <solution.icon className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
              <p className="text-emerald-50">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Applications */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            AI Applications
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: "98%", label: "Accuracy Rate" },
              { metric: "10x", label: "Faster Processing" },
              { metric: "24/7", label: "Automated Operations" },
              { metric: "60%", label: "Cost Reduction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-800 to-teal-900 rounded-xl p-6 text-center"
              >
                <h3 className="text-3xl font-bold text-emerald-400 mb-2">
                  {stat.metric}
                </h3>
                <p className="text-emerald-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AI Implementation Process */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-br from-emerald-800 to-teal-900 rounded-3xl p-12 shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-pattern opacity-5" />
          <h2 className="text-3xl font-bold text-white text-center mb-12 relative z-10">
            AI Implementation Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              { step: "1", title: "Data Collection", icon: Database },
              { step: "2", title: "Model Training", icon: Brain },
              { step: "3", title: "Integration", icon: Workflow },
              { step: "4", title: "Optimization", icon: LineChart }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <process.icon className="w-12 h-12 text-emerald-400 mb-4 mx-auto" />
                <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{process.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
    </div>
  );
}

export default AiMachineLearning;