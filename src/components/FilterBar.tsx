import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FilterBarProps {
  onFilterChange: (query: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchQuery(newValue);
    onFilterChange(newValue);
  };

  const clearSearch = () => {
    setSearchQuery('');
    onFilterChange('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800/40 backdrop-blur-md rounded-full px-4 py-2 flex items-center max-w-md mx-auto mb-16"
    >
      <Search className="text-gray-400 h-5 w-5 mr-2" />
      <input
        type="text"
        placeholder="Search technologies..."
        value={searchQuery}
        onChange={handleChange}
        className="bg-transparent border-none text-white placeholder-gray-400 focus:outline-none flex-1"
      />
      <AnimatePresence>
        {searchQuery && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={clearSearch}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FilterBar;