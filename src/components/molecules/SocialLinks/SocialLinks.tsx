import React from 'react';

interface SocialLink {
  icon: string; // Placeholder for now, could be a path to SVG or a component
  url: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links, className = '' }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {links.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
          {/* Placeholder for icon, replace with actual SVG or icon component */}
          <span className="text-2xl">{link.icon}</span> 
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;