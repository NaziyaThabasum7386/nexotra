import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TalentSphere</h3>
            <p className="text-blue-100 mb-6">
              Bridging the gap between top talents and businesses, shaping a future of collective success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Executive Search</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">IT Recruitment</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Temporary Staffing</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">HR Consulting</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Talent Development</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-blue-300 shrink-0 mt-1" size={18} />
                <span>123 Business Avenue, Suite 200, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-blue-300" size={18} />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-blue-300" size={18} />
                <span>contact@talentsphere.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} TalentSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;