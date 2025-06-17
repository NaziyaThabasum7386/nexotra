import React from "react";
import Designer from "../assets/Company/Designer.jpeg";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import Img from "../assets/Company/AboutOurCom(federalSYstems).png";

const Company = () => {
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
              Driving Innovation with Integrity
            </motion.p>
            <motion.p
              className="m-4 text-xl md:text-2xl font-semibold max-w-2xl text-white"
              initial={{ opacity: 0, x: 1000 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Nexota Technologies Private Limited specializes in application development, IT services, business advisory, and recruitment solutions — dedicated to empowering your growth.
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
                Who We Are
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl font-semibold text-indigo-700"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Passionate about delivering value and building meaningful partnerships.
              </motion.p>

              <motion.p
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                At Nexota Technologies, we are committed to helping businesses navigate the digital landscape with practical solutions and reliable support. Though a startup, our focus is on building trust through dedication and consistently meeting client needs in application design, IT assistance, business consulting, and talent sourcing.
              </motion.p>
            </div>

            {/* Mission and Vision Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Mission */}
              <motion.div
                className="flex items-center gap-6 p-6 bg-gray-50 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <Target className="w-12 h-12 text-indigo-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To foster growth and success for our clients by providing dependable technology and business services with honesty and transparency.
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
                  <Eye className="w-12 h-12 text-indigo-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To establish Nexota Technologies as a trusted partner that supports sustainable growth and innovation for businesses worldwide.
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
