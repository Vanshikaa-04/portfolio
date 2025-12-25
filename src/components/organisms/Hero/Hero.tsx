import React from 'react';
import Typography from '../../atoms/Typography/Typography';
import CTAButton from '../../molecules/CTAButton/CTAButton';
import SocialLinks from '../../molecules/SocialLinks/SocialLinks';
import useTypingEffect from '../../../hooks/useTypingEffect';

const Hero: React.FC = () => {
  const socialLinksData = [
    { icon: 'X', url: 'https://twitter.com' },
    { icon: 'In', url: 'https://linkedin.com' },
    { icon: 'Gh', url: 'https://github.com' },
  ];

  const heroTitleRef = useTypingEffect('Hero Section');

  return (
    <div className="h-screen relative flex items-center justify-center"> {/* Added relative for positioning */}
      <div className="text-center">
        <Typography variant="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" ref={heroTitleRef}>
          {/* Text content will be set by the hook */}
        </Typography>
        <div className="flex justify-center space-x-4 mb-8">
          <CTAButton label="View Projects" onClick={() => console.log('View Projects')} />
          <CTAButton label="Download Resume" onClick={() => console.log('Download Resume')} variant="secondary" />
        </div>
        <SocialLinks links={socialLinksData} />
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;