import React from 'react';
import TypeWriter from '../components/TypeWriter';

const ServiceCard = ({
  title,
  description,
  backgroundImage,
  onClick,
  knowMore,
  animationDirection = 'left' // you can remove this prop too if not needed anymore
}) => {
  // You can completely remove the directionClass usage or keep it if you want
  // For now, I'll just remove the animation classes
  // const directionClass = {
  //   left: 'slide-from-left',
  //   right: 'slide-from-right',
  //   top: 'slide-from-top'
  // }[animationDirection];

  return (
    <div 
      className={`group relative rounded-xl overflow-hidden shadow-lg transition-none hover:scale-105 hover:shadow-2xl h-[400px]`}
      // Removed inline style for animation delay
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 transition-opacity duration-300 group-hover:opacity-90" />
      
      <div className="relative h-full flex flex-col justify-end p-6 text-white transform transition-transform duration-100 group-hover:translate-y-[-8px]">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
        <div className="min-h-[60px] mb-4">
          <TypeWriter 
            text={description}
            className="text-gray-200 opacity-90 group-hover:opacity-100"
          />
        </div>
        
        <div className="flex gap-3 transform translate-y-4 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-100">

          <button
            onClick={onClick}
            className="px-4 py-2 bg-white text-black rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Learn More
          </button>
          <a
            href={knowMore}
            className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            View Details
          </a>
        </div>
      </div>

      <style jsx>{`
        /* Remove all animation styles */
        .slide-from-left,
        .slide-from-right,
        .slide-from-top {
          opacity: 1 !important;
          position: relative;
          animation: none !important;
        }

        .slide-from-left::after,
        .slide-from-right::after,
        .slide-from-top::after {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;
