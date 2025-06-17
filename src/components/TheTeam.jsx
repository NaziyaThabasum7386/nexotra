import React from "react";
import ProfileData from '../components/ProfileCard/ProfileData';
import TeamImg from "../assets/TheTeam.jpeg";
import { motion } from "framer-motion";

const TheTeam = () => {
  return (
    <div className="bg-gradient-to-tr from-pink-100 via-blue-100 py-12 px-6">
      {/* Top Section: Text and Image */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="space-y-8 p-8 lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 20 }}
            transition={{ duration: 0.8 }}
            whileHover={{ rotate: 360 }}
            viewport={{ once: true }}
            className="text-white border p-2 rounded-xl inline-block tracking-[0.3em] bg-gradient-to-r from-red-300 via-blue-300 via-green-300 to-yellow-300"
          >
            <h2>THE TEAM</h2>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -100, scale: -1 }}
            whileInView={{ opacity: 1, x: 20, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ boxShadow: "0px 0px 20px rgba(252, 0, 176, 0.5)" }}
            viewport={{ once: true }}
            className="text-purple-600 text-6xl"
          >
            Hello World!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-950 via-red-500 to-green-400 text-transparent bg-clip-text text-2xl"
          >
            We are Nexotra Technologies
            <br />
            a team dedicated to enhancing business resilience <br />
            and driving growth through the implementation of cutting-edge
            technologies.
          </motion.p>
        </div>

        <div className="lg:w-1/2 h-64">
          <img
            src={TeamImg}
            alt="Team"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 hover:rounded-xl"
          />
        </div>
      </div>

      {/* Profile Cards Section
       <div className="mt-12">
        <ProfileData />
      </div>
      
      */}
     
    </div>
  );
};

export default TheTeam;
