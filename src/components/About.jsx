import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Award, Target, Rocket } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: <Users className="text-blue-400" size={24} />,
      value: "50+",
      label: "Happy Clients",
    },
    {
      icon: <Award className="text-green-400" size={24} />,
      value: "100+",
      label: "Projects Completed",
    },
    {
      icon: <Target className="text-purple-400" size={24} />,
      value: "5+",
      label: "Years Experience",
    },
    {
      icon: <Rocket className="text-red-400" size={24} />,
      value: "24/7",
      label: "Support",
    },
  ];

  return (
    <div
      id="about"
      className="min-h-screen bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8"
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
            About Us
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            We are a team of passionate developers dedicated to creating
            innovative digital solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-400 mb-6">
              `At TechForge Solutions, we are committed to delivering
              exceptional digital experiences through innovative technology
              solutions. Our mission is to help businesses thrive in the digital
              age by providing cutting-edge development services.`
            </p>
            <p className="text-gray-400">
              We believe in creating lasting partnerships with our clients,
              understanding their unique challenges, and delivering solutions
              that drive real business value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center p-6 bg-gray-800 rounded-lg"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
