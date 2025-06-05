import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Network,
  Server,
  Globe,
  ArrowDown,
  MousePointer2,
} from "lucide-react";
import logo from "../assets/logo.png";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const scrollIndicatorVariants = {
    initial: {
      opacity: 0,
      y: -20,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 2,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const arrowVariants = {
    animate: {
      y: [0, 8, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-900 relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-10 bg-blue-500/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-4xl"
      >
        <motion.div
          animate={floatingAnimation}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <Network size={150} className="bg-custom-gradient text-transparent bg-clip-text" />
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute inset-0 border-4 border-blue-500/30 rounded-full"
            />
            <div className="absolute inset-0 border-4 border-purple-500/30 rounded-full flex items-center justify-center">
              <img src={logo} alt="Nexotra Logo" className="w-16 h-16 object-container" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center"
        >
          <span className="bg-custom-gradient text-transparent bg-clip-text">
            NEXOTRA
          </span>
        </motion.h1>

        <div className="flex justify-center py-8 sm:py-10 lg:py-16 px-2 sm:px-4">
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl bg-custom-gradient text-transparent bg-clip-text text-center max-w-3xl"
          >
           At Nexota Technologies, we are driven by passion and precision to deliver innovative IT solutions tailored to your business needs.
          </motion.p>
        </div>

        <motion.div
          variants={scrollIndicatorVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <div className="flex flex-col items-center transform -translate-x-1/2 translate-y-[10%]">
            <motion.div
              className="relative w-5 h-8 sm:w-6 sm:h-10 border-2 border-purple-500 rounded-full p-1"
              style={{
                background:
                  "linear-gradient(90deg, rgba(246,0,254,0.1) 20%, rgba(201,0,254,0.1) 31%, rgba(161,54,255,0.1) 43%, rgba(81,66,240,0.1) 66%, rgba(0,51,217,0.1) 100%)",
              }}
            >
              <motion.div
                className="w-1.5 h-1.5 bg-custom-gradient rounded-full mx-auto"
                animate={{
                  y: [0, 20, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs sm:text-sm font-medium bg-custom-gradient text-transparent bg-clip-text whitespace-nowrap">
                Scroll to explore
              </span>
              <motion.div
                variants={arrowVariants}
                animate="animate"
                className="bg-custom-gradient rounded-full p-1"
              >
                <ArrowDown size={16} className="text-white" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-transparent opacity-20"></div>
      </motion.div>
    </div>
  );
}
