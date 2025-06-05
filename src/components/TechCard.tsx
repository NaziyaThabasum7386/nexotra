import React from 'react';
import { motion } from 'framer-motion';

interface TechCardProps {
  name: string;
  icon: React.ReactNode;
  description: string;
  skillLevel: number;
  color: string;
}

const TechCard: React.FC<TechCardProps> = ({ 
  name, 
  icon, 
  description, 
  skillLevel, 
  color 
}) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl p-6 h-full border border-indigo-600 shadow-lg"
    >
      <div className="flex flex-col h-full">
        <div className={`text-${color}-500 mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{name}</h3>
        
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        
        <div className="mt-auto">
          <div className="flex items-center">
            <span className="text-xs text-gray-500 mr-2">Proficiency</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className={`h-1.5 w-5 rounded-full ${i < skillLevel ? 'bg-custom-gradient' : 'bg-gray-200'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechCard;