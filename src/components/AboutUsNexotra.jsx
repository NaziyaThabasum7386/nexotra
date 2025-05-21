import React from "react";
import { ArrowRight } from 'lucide-react';
import { Users, Rocket, Target, Award, ChevronRight } from "lucide-react";

const About = () => {
  return (
    <div className="flex justify-between p-4 bg-gray-100 rounded-xl shadow-md">
      {/* Left Div */}
      <div className="w-1/2 p-4 bg-white rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-2 text-gray-700">
          Welcome to Federal Soft Systems
        </h2>
        <p className="text-blue-900 font-black text-4xl">
          <div className="mb-2 bg-custom-gradient text-transparent bg-clip-text">Revolutionizing Global Digital Excellence</div>
        
        </p>
      </div>
      {/* right Div */}
      <div className="w-1/2 p-4 bg-white rounded-lg shadow-sm ml-4">
        <p className="text-gray-700 mt-4 font-medium pl-4">
          <div>
            Federal Soft Systems Inc. is a leading Global IT Products and
            Services
          </div>
          company that specializes in the Digital Transformation for diverse
          <div>business verticals.</div>
        </p>
        <a href="/company">
        <div className=" bg-white flex items-center justify-center">
      <div className="relative group">
        <button className="relative px-8 py-3 rounded-lg overflow-hidden">
          {/* Rotating gradient border */}
          <div className="absolute inset-0 bg-custom-gradient animate-spin-slow rounded-lg" />
          
          {/* White background */}
          <div className="absolute inset-[2px] bg-white rounded-lg" />
          
          {/* Button content */}
          <div className="relative z-10 flex items-center space-x-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-custom-gradient">
              Explore More
            </span>
            <ArrowRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </button>
      </div>
    </div>
        </a>
      </div>
    </div>
  );
};

export default About;
