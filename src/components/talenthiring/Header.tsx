import React from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-gradient-to-r from-blue-900/90 to-purple-900/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl md:text-2xl">TalentSphere</div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-white hover:text-blue-200 transition-colors">Services</a>
            <a href="#about" className="text-white hover:text-blue-200 transition-colors">About</a>
            <a href="#contact" className="text-white hover:text-blue-200 transition-colors">Contact</a>
           
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-white hover:text-blue-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-blue-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-blue-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#contact" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors inline-block w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;