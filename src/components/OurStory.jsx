import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const OurStory = () => {
  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative w-full h-screen p-4">
      {/* Background Image with Hover Animation */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1.9, ease: "easeOut" }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070"
          alt="Our Story Background"
          className="w-full h-full object-cover transform origin-center"
          initial={{ scale: 1.1 }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </motion.div>

      {/* Overlay with Glass Effect */}
      <motion.div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center text-white max-w-2xl">
          {/* Title Animation */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold m-4 p-9 text-white"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            Our Story
          </motion.h1>

          {/* Subtitle Animation */}
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-8 text-gray-200"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            A Journey of{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
              <TypeAnimation
                sequence={[
                  'Passion',
                  1000,
                  'Groundbreaking Innovation',
                  1000,
                  'Purposeful Exploration',
                  1000,
                  'Meaningful Collaboration',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
            {" "}& Global Impact
          </motion.h2>

          {/* Description Animation */}
          <motion.p
            className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-xl mx-auto"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            Rooted in a vision for positive influence, our journey reflects
            passion and innovation. Overcoming early challenges, we've evolved
            to empower enterprises globally.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mt-8"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default OurStory;