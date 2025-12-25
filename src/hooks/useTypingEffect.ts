import { useEffect, useRef } from 'react';
import gsap from 'gsap'; // Assuming gsap is installed

const useTypingEffect = (text: string, speed: number = 0.05) => {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      // Placeholder for GSAP typing effect logic
      // In a real implementation, this would animate `text` character by character
      elementRef.current.textContent = text; 
    }
  }, [text, speed]);

  return elementRef;
};

export default useTypingEffect;