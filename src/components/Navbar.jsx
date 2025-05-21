import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-custom-gradient shadow-lg w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-bold text-white">
            TechCorp
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-9 items-center">
            <Link to="/" className="text-white px-3 py-2 rounded hover:bg-white hover:text-black transition">
              Home
            </Link>
            <Link to="/about" className="text-white px-3 py-2 rounded hover:bg-white hover:text-black transition">
              About Us
            </Link>
            <Link to="/company" className="text-white px-3 py-2 rounded hover:bg-white hover:text-black transition">
              Company
            </Link>
            <Link to="/blogs" className="text-white px-3 py-2 rounded hover:bg-white hover:text-black transition">
              Blogs
            </Link>
            <Link to="/contact" className="text-white px-3 py-2 rounded hover:bg-white hover:text-black transition">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-white/90 backdrop-blur rounded-b-xl shadow-md space-y-2">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 px-4 py-2 rounded hover:bg-black hover:text-white transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 px-4 py-2 rounded hover:bg-black hover:text-white transition"
          >
            About Us
          </Link>
          <Link
            to="/company"
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 px-4 py-2 rounded hover:bg-black hover:text-white transition"
          >
            Company
          </Link>
          <Link
            to="/blogs"
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 px-4 py-2 rounded hover:bg-black hover:text-white transition"
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 px-4 py-2 rounded hover:bg-black hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
