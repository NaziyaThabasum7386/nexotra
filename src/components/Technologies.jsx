import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Database, Cloud, Server, Layout, Shield } from "lucide-react";

export default function Technologies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = {
    Frontend: {
      icon: <Layout className="text-blue-400" size={24} />,
      techs: [
        "React",
        "Vue.js",
        "Angular",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    Backend: {
      icon: <Server className="text-green-400" size={24} />,
      techs: ["Node.js", "Python", "Java", "Go", "PHP", "Ruby"],
    },
    Database: {
      icon: <Database className="text-purple-400" size={24} />,
      techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"],
    },
    Cloud: {
      icon: <Cloud className="text-red-400" size={24} />,
      techs: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    },
    Security: {
      icon: <Shield className="text-yellow-400" size={24} />,
      techs: ["OAuth", "JWT", "SSL/TLS", "WAF", "Encryption"],
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const techBadgeVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div
      id="technologies"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(to right, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Technologies We Master
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Our expertise spans across modern technologies, enabling us to
            deliver cutting-edge solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologies).map(
            ([category, { icon, techs }], index) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  {icon}
                  <h3 className="text-xl font-semibold text-blue-400">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, i) => (
                    <motion.span
                      key={i}
                      variants={techBadgeVariants}
                      whileHover="hover"
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm border border-gray-600/50 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>

        <motion.div variants={itemVariants} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 p-8 rounded-lg backdrop-blur-sm">
            <p className="text-gray-300 text-lg">
              Our commitment to staying ahead of technological trends ensures
              that your project will be built with the most efficient and
              scalable solutions available.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
