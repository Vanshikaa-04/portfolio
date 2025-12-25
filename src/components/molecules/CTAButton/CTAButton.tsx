import React from 'react';

type CTAButtonProps = {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
};

const CTAButton = ({ variant, children, onClick }: CTAButtonProps) => {
  const baseStyle = 'px-6 py-3 font-semibold rounded-md transition-transform transform hover:scale-105';
  
  const styles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
  };

  const combinedClassName = `${baseStyle} ${styles[variant]}`;

  return (
    <button className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default CTAButton;
