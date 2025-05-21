import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({
  title,
  description,
  backgroundImage,
  onClick,
  knowMore,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="relative h-[500px]  rounded-xl overflow-hidden group cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onClick={onClick}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 hover:bg-gradient-to-br from-pink-400 via-black to-pink-400 "> 
        <div className="absolute bottom-0 p-6 space-y-3">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-gray-200">{description}</p>
          <button
            onClick={() => navigate(knowMore)}
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
          >
            Know More <ArrowRight size={20} />
          </button>
          {/* <button
            onClick={() =>
              (window.location.href = "/services/enterprise-solutions")
            }
            className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
          >
            Know More
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
