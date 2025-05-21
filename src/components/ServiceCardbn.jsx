import React from 'react';
import TypeWriter from '../components/TypeWriter';

const ServiceCard = ({
  title,
  description,
  backgroundImage,
  onClick,
  knowMore,
  animationDelay = 0,
  animationDirection = 'left'
}) => {
  const directionClass = {
    left: 'slide-from-left',
    right: 'slide-from-right',
    top: 'slide-from-top'
  }[animationDirection];

  return (
    <div 
      className={`group relative rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl h-[400px] ${directionClass}`}
      style={{
        '--animation-delay': `${animationDelay}ms`
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 transition-opacity duration-300 group-hover:opacity-90" />
      
      <div className="relative h-full flex flex-col justify-end p-6 text-white transform transition-transform duration-300 group-hover:translate-y-[-8px]">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
        <div className="min-h-[60px] mb-4">
          <TypeWriter 
            text={description}
            className="text-gray-200 opacity-90 group-hover:opacity-100"
          />
        </div>
        
        <div className="flex gap-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
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
        .slide-from-left,
        .slide-from-right,
        .slide-from-top {
          opacity: 0;
          position: relative;
        }

        .slide-from-left::after,
        .slide-from-right::after,
        .slide-from-top::after {
          content: '';
          position: absolute;
          inset: 0;
          background: white;
          transform-origin: left;
          animation: reveal 0.8s ease-in-out forwards;
          animation-delay: var(--animation-delay);
        }

        .slide-from-left {
          animation: slideFromLeft 0.8s ease-in-out forwards;
          animation-delay: var(--animation-delay);
        }

        .slide-from-right {
          animation: slideFromRight 0.8s ease-in-out forwards;
          animation-delay: var(--animation-delay);
        }

        .slide-from-top {
          animation: slideFromTop 0.8s ease-in-out forwards;
          animation-delay: var(--animation-delay);
        }

        @keyframes reveal {
          0% {
            transform: scaleX(1);
          }
          100% {
            transform: scaleX(0);
          }
        }

        @keyframes slideFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideFromRight {
          0% {
            opacity: 0;
            transform: translateX(100%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideFromTop {
          0% {
            opacity: 0;
            transform: translateY(-100%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;