import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
// Assuming LeetCode might need a generic icon or a custom SVG later
import { FaCode } from 'react-icons/fa';

const socialLinks = [
  { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com' },
  { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com' },
  { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com' },
  { name: 'LeetCode', icon: <FaCode />, url: 'https://leetcode.com' },
];

const SocialLinks = () => {
  return (
    <div className="flex space-x-6">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-500 transition-colors"
          aria-label={link.name}
        >
          <div className="text-2xl">{link.icon}</div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
