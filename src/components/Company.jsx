import React from "react";
import Designer from "../assets/Company/Designer.jpeg";
import { motion } from "framer-motion";
//import Img from "../assets/Company/leftSlide.png";
import { Target, Eye } from "lucide-react";
import Img from "../assets/Company/AboutOurCom(federalSYstems).png";

const Company = () => {
  const fadeInUp = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <>
      <div className="relative w-full h-[550px]">
        {/* Background Image */}
        <img
          src={Designer}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-start justify-center text-left px-8">
          <motion.p
            className="m-4 text-2xl md:text-5xl max-w-3xl font-bold text-white"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Revolutionizing Global Digital Excellence
          </motion.p>
          <motion.p
            className="m-4 text-xl md:text-2xl  font-semibold max-w-2xl"
            initial={{ opacity: 0, x: 1000 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Federal Soft Systems Inc. is a leading Global IT Products and
            Services company that specializes in Digital Transformation for
            diverse business verticals.
          </motion.p>
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 ">
        <div className="flex flex-col md:flex-row items-stretch bg-white ">
          {/* Left Image Section */}
          <motion.div
            className="w-full md:w-1/2 h-full"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={Img}
              alt="About Us"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Text Section */}
          <div className="flex flex-col justify-between md:w-1/2 p-8 lg:p-12">
            <div className="space-y-6">
              <motion.h2
                className="text-2xl md:text-5xl font-bold text-black"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                More About Our Company
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl font-semibold text-red-500"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Increasing Value Through People
              </motion.p>

              <motion.p
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                With an unwavering commitment to excellence, Federal Soft
                Systems takes a proactive role in crafting tailor-made
                technological solutions, driving a comprehensive and
                transformative evolution in the landscape of business
                digitization. Through advanced digital platforms, our company
                paves the way for businesses and brands to thrive in the dynamic
                and ever-evolving digital era.
              </motion.p>
            </div>

            {/* Mission and Vision Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              {/* Mission */}
              <motion.div
                className="flex items-center gap-6 p-6 bg-gray-50 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <Target className="w-12 h-12 text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    Our mission is to be the leading provider of digital
                    solutions that drive business evolution.
                  </p>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                className="flex items-center gap-6 p-6 bg-gray-50 rounded-xl shadow-sm max-w-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <Eye className="w-12 h-12 text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    Our vision is to pioneer technological innovation that
                    empowers businesses to reach their full potential.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
