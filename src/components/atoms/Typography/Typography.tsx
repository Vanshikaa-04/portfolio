import React, { ElementType } from 'react';

type TypographyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'p' | 'caption';
  children: React.ReactNode;
  className?: string;
};

const Typography = ({ variant, children, className = '' }: TypographyProps) => {
  const Tag = variant === 'caption' ? 'p' : variant;

  const styles = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-bold',
    p: 'text-base',
    caption: 'text-sm',
  };

  const combinedClassName = `${styles[variant]} ${className}`;

  return <Tag className={combinedClassName}>{children}</Tag>;
};

export default Typography;
