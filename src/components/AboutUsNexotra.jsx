import React from "react";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between p-4 bg-gray-100 rounded-xl shadow-md gap-4">
      {/* Left Div */}
      <div className="w-full lg:w-1/2 p-4 bg-white rounded-lg shadow-sm text-center lg:text-left">
        <h2 className="text-xl font-bold mb-2 text-gray-700">
          Welcome to Nexota Technologies
        </h2>
        <h1 className="text-blue-900 font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          <span className="bg-custom-gradient text-transparent bg-clip-text block">
            Empowering Digital Innovation & Growth
          </span>
        </h1>
      </div>

      {/* Right Div */}
      <div className="w-full lg:w-1/2 p-4 bg-white rounded-lg shadow-sm text-center lg:text-left">
        <p className="text-gray-700 mt-4 font-medium">
          Nexota Technologies Private Limited specializes in application design and development, IT support, business consulting, and talent acquisition. 
          As a dedicated startup, we focus on building trust and delivering quality through innovation and client-centric solutions.
        </p>

        <a href="/company">
          <div className="flex justify-center lg:justify-start mt-6">
            <div className="relative group p-2">
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
