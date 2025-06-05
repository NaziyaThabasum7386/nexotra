import React from 'react';
import { Instagram, Twitter, Github } from 'lucide-react';

interface SocialLink {
  type: 'instagram' | 'twitter' | 'github';
  url: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  const renderIcon = (type: string) => {
    switch(type) {
      case 'instagram':
        return <Instagram size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'github':
        return <Github size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex gap-4 social-links-container">
      {links.map((link, index) => (
        <a 
          key={index} 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={`Visit ${link.type}`}
        >
          {renderIcon(link.type)}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;