import { Mail, Github, Twitter, Instagram } from 'lucide-react';
import React from 'react';
const ProfileCard = () => {
  return (
    <div className="card">
      <button className="mail">
        <Mail />
      </button>
      <div className="profile-pic">
        <svg version="1.1" id="svg2" width="666.66669" height="666.66669" viewBox="0 0 666.66669 666.66669" xmlns="http://www.w3.org/2000/svg">
          {/* SVG content remains the same - omitted for brevity */}
        </svg>
      </div>
      <div className="bottom">
        <div className="content">
          <span className="name">My Name</span>
          <span className="about-me">Lorem ipsum dolor sit amet consectetur adipisicinFcls</span>
        </div>
        <div className="bottom-bottom">
          <div className="social-links-container">
            <Instagram size={16} />
            <Twitter size={16} />
            <Github size={16} />
          </div>
          <button className="button">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;