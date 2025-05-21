import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {/* Company */}
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/company" className="hover:text-gray-300">
                About Us
              </Link>
            </li>{" "}
            {/* Link to About Us */}
            <li>
              <Link to="/careers" className="hover:text-gray-300">
                Careers
              </Link>
            </li>
            {/* Link to Careers */}
            <li>
              <Link to="/leadership" className="hover:text-gray-300">
                Leadership Panel
              </Link>
            </li>
            {/* Link to Leadership */}
            <li>
              <Link to="/news" className="hover:text-gray-300">
                News & Articles
              </Link>
            </li>{" "}
            {/* Link to News */}
            <li>
              <Link to="/blogs" className="hover:text-gray-300">
                Blogs
              </Link>
            </li>{" "}
            {/* Link to Blogs */}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-bold mb-4">Products</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/products/it" className="hover:text-gray-300">
                Information Technology
              </Link>
            </li>{" "}
            {/* Link to IT Products */}
            <li>
              <Link to="/products/ta" className="hover:text-gray-300">
                Talent Acquisition
              </Link>
            </li>{" "}
            {/* Link to TA Products */}
            <li>
              <Link to="/products/dm" className="hover:text-gray-300">
                Digital Marketing & Design
              </Link>
            </li>{" "}
            {/* Link to DM Products */}
            {/* Add more product links as needed */}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-bold mb-4">Explore</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/success-stories" className="hover:text-gray-300">
                Success Stories
              </Link>
            </li>{" "}
            {/* Link to Success Stories */}
            <li>
              <Link to="/services" className="hover:text-gray-300">
                Services
              </Link>
            </li>
            {/* Link to Services */}
            <li>
              <Link to="/clients" className="hover:text-gray-300">
                Our Clients
              </Link>
            </li>{" "}
            {/* Link to Clients */}
            {/* Add more Explore links as needed */}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-bold mb-4">Contact Us</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact Us
              </Link>
            </li>{" "}
            {/* Link to Contact Us */}
          </ul>
        </div>

        {/* Reach Us */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
          {" "}
          {/* Span across 2 columns on larger screens */}
          <h4 className="font-bold mb-4">Reach Us</h4>
          <p className="mb-2">
            India - Hyderabad, Chennai, Tirupathi, Bangalore
          </p>
          <p className="mb-2">US - Bentonville</p>
          <p>Canada - Ontario</p>
        </div>
      </div>

      <div className="text-center mt-8 pt-4 border-t border-gray-700">
        {" "}
        {/* Added border-t */}
        <p>&copy; All Rights Reserved @ Federal Soft Systems Inc 2024</p>
        <div className="mt-2 space-x-4">
          <Link to="/privacy" className="hover:text-gray-300">
            Privacy Policy
          </Link>{" "}
          {/* Link to Privacy Policy */}
          <Link to="/terms" className="hover:text-gray-300">
            Terms & Conditions
          </Link>{" "}
          {/* Link to Terms */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
