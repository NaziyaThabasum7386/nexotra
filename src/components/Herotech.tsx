import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContent = () => {
    const element = document.querySelector('#frontend');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex justify-center overflow-hidden">
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.3, 0.1], 
          transition: { duration: 5, repeat: Infinity, repeatType: 'reverse' } 
        }}
        className="absolute -top-40 -left-40 w-80 h-80 bg-custom-gradient rounded-full filter blur-3xl opacity-10"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.2, 0.1], 
          transition: { duration: 7, repeat: Infinity, repeatType: 'reverse', delay: 1 } 
        }}
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-custom-gradient rounded-full filter blur-3xl opacity-10"
      />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-clip-text text-transparent bg-custom-gradient">Tech Stack</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Leveraging cutting-edge technologies to build scalable, efficient, and innovative solutions for our clients.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;