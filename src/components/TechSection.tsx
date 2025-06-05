import React from 'react';
import { motion } from 'framer-motion';
import TechCard from './TechCard';

interface Technology {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  skillLevel: number;
  color: string;
}

interface TechSectionProps {
  title: string;
  description: string;
  technologies: Technology[];
  index: number;
}

const TechSection: React.FC<TechSectionProps> = ({ 
  title, 
  description, 
  technologies,
  index
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div id={title.toLowerCase().replace(/\s/g, '-')} className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          {title}
        </h2>
        <p className="text-gray-800 max-w-3xl">{description}</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {technologies.map((tech) => (
          <TechCard
            key={tech.id}
            name={tech.name}
            icon={tech.icon}
            description={tech.description}
            skillLevel={tech.skillLevel}
            color={tech.color}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TechSection;