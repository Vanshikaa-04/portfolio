import React, { forwardRef } from 'react';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  children: React.ReactNode;
}

const Typography = forwardRef<HTMLElement, TypographyProps>(({ variant = 'p', className = '', children }, ref) => {
  const Tag = variant;

  // Basic styling for demonstration. This will be replaced by actual Tailwind classes later.
  const baseStyles = ''; 

  return <Tag ref={ref} className={`${baseStyles} ${className}`}>{children}</Tag>;
});

export default Typography;