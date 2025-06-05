import React from "react";

const ServiceCard = ({ title, description, backgroundImage, knowMore }) => {
  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-lg bg-cover bg-center text-white h-[350px] group"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black/60 p-6 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>

        {/* ✅ Buttons: always visible on mobile, hover-triggered only on desktop */}
        <div
          className="
            mt-4 flex gap-2
            sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100
            transition-opacity duration-300
          "
        >
          <a href={knowMore}>
            <button className="px-4 py-2 text-sm font-medium bg-white text-black rounded-lg hover:bg-gray-200 transition">
              Learn More
            </button>
          </a>
          <a href={knowMore}>
            <button className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-lg hover:opacity-90 transition">
              View
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
