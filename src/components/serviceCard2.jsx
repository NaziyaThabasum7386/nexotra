import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  bgImage: string;
  icon: LucideIcon;
  onLearnMore: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  bgImage,
  icon: Icon,
  onLearnMore,
}) => {
  return (
    <div className="group relative h-96 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-red via-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <div className="mb-4">
          <Icon className="w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>

        {/* Know More Button */}
        <button
          onClick={onLearnMore}
          className="inline-flex items-center text-sm font-semibold text-white hover:text-blue-400 transition-colors duration-200"
        >
          Know More
          <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;