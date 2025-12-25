import React, { useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Typography from '../../atoms/Typography/Typography';
import CTAButton from '../../molecules/CTAButton/CTAButton';
import SocialLinks from '../../molecules/SocialLinks/SocialLinks';
import useTypingEffect from '../../../hooks/useTypingEffect';

const Hero = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  const roles = ["Full-Stack Developer", "Problem Solver"];
  
  useTypingEffect(roles, typingRef);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center p-4">
      <div className="flex-grow flex flex-col items-center justify-center">
        <Typography variant="h1" className="mb-4 text-4xl md:text-6xl">
          Hi, I'm Arjun Sharma
        </Typography>
        <Typography variant="h2" className="mb-4 text-2xl md:text-3xl font-semibold text-blue-600 h-10">
          <span ref={typingRef}></span>
        </Typography>
        <Typography variant="p" className="mb-8 text-lg text-gray-600 max-w-2xl">
          3rd Year CS Undergrad | MERN Stack Developer | Competitive Programmer
        </Typography>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
          <CTAButton variant="primary">View Projects</CTAButton>
          <CTAButton variant="secondary">Download Resume</CTAButton>
        </div>
        <SocialLinks />
      </div>
      <div className="absolute bottom-10">
        <FaChevronDown className="text-3xl text-gray-500 animate-bounce" />
      </div>
    </div>
  );
};

export default Hero;
