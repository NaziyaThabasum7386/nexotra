import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Server, Globe } from "lucide-react";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <Code2 size={64} className="text-blue-500" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-blue-500/30 rounded-full"
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          TechForge Solutions
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          A Team of Passionate Full-Stack Developers Building Tomorrow's Digital
          Solutions
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-6 justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full">
            <Server size={20} className="text-blue-400" />
            <span>Backend Development</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full">
            <Code2 size={20} className="text-purple-400" />
            <span>Frontend Development</span>
          </div>
          <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full">
            <Globe size={20} className="text-green-400" />
            <span>Web Applications</span>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:Support@nexotra.com"
            className="hover:text-blue-400 transition-colors"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-transparent opacity-20"></div>
      </motion.div>
    </div>
  );
}
