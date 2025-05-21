import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
   
import {
  Eye,
  Users,
  Server,
  CheckCircle,
  Settings,
  Layers,
  Monitor,
  Database,
} from "lucide-react";
import AppDevImg from "../assets/Appdevelopment.jpg";
import TLimg from "../assets/TL.png";
import TDiscussion from "../assets/TeamDiscussion.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function WebDevelopment() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-indigo-50"
    >
      <div className="relative w-full ">
        <img
          src={AppDevImg}
          alt="App Development"
          className="w-full h-15 object-cover"
          style={{ height: "400px" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">App Development</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* <motion.button
          whileHover={{ x: -5 }}
          onClick={() => navigate("/")}
          className="flex items-center text-indigo-600 hover:text-indigo-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Services
        </motion.button> */}
        <div className="container mx-auto px-4">
          <div className="text-center pl-8 mb-16">
            <h2 className="text-5xl font-bold text-black mb-4">
              Unlock Streamlined Technical Excellence
            </h2>
            <p className="  text-black">
              <span className="block mb-2">
                Dive into a realm where innovation meets precision and let us
                craft robust solutions that go
              </span>
              <span className="block">beyond meeting your needs.</span>
            </p>
          </div>
        </div>

        <div className="max-w-7xl max-h-[1000px]">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-12"
          >
            <div className="flex flex-col md:flex-row gap-8 md:pl-20">
              <img
                src={TLimg}
                alt="Service Overview"
                className="w-full md:w-1/4 h-auto rounded-xl shadow-lg object-cover"
              />

              <motion.div
                variants={container}
                className="grid md:grid-cols-2 gap-8"
              >
                {[
                  {
                    icon: Settings,
                    title: "Strategic Development",
                    description:
                      "We craft innovative and strategic solutions to propel your business into the digital era.",
                  },
                  {
                    icon: Layers,
                    title: "Bespoke Development",
                    description:
                      "We tailor applications to your specific needs, ensuring they are unique and optimized for your operations",
                  },
                  {
                    icon: Monitor,
                    title: "Innovative Prototyping",
                    description:
                      "We develop creative prototypes that provide a visual representation of the final application, ensuring alignment with user expectations",
                  },
                  {
                    icon: Database,
                    title: "Scalable Architecture",
                    description:
                      "We build applications with a scalable architecture to accommodate growth and evolving business requirements.",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <service.icon className="w-8 h-8 text-red-400 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* // second div of same kind   */}

        <div className="max-w-7xl max-h-[1000px] mt-20">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-12"
          >
            <div className="flex flex-col md:flex-row gap-8 md:pl-20">
              <motion.div
                variants={container}
                className="grid md:grid-cols-2 gap-8"
              >
                {[
                  {
                    icon: Server,
                    title: "Extensive Technology Stack",
                    description:
                      "We have proficiency in a diverse technology stack, covering frontend, backend, and database technologies.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Quality Assurance Excellence",
                    description:
                      "We ensure security and high performance through stringent quality assurance processes in our applications",
                  },
                  {
                    icon: Users,
                    title: "Human-Centered Design",
                    description:
                      "We prioritize user-centric design to enhance the overall user experience and maximize customer satisfaction.",
                  },
                  {
                    icon: Eye,
                    title: "Project Insight & Delivery",
                    description:
                      "We provide comprehensive insights into project progress, including Technical Blueprints and Project Roadmaps",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <service.icon className="w-8 h-8 text-red-400 mb-4" />
                    <h3 className="text-xl text-gray-900 font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </motion.div>
                ))}
              </motion.div>
              <img
                src={TDiscussion}
                alt="Service Overview"
                className="w-full md:w-1/4 h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default WebDevelopment;
