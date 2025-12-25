import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const useTypingEffect = (roles: string[], targetRef: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!targetRef.current) return;

    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    roles.forEach(role => {
      timeline.to(targetRef.current, {
        duration: 1,
        text: role,
        ease: 'none',
      }).to(targetRef.current, {
        duration: 1,
        text: '',
        ease: 'none',
        delay: 1,
      });
    });

    return () => {
      timeline.kill();
    };
  }, [roles, targetRef]);
};

export default useTypingEffect;
