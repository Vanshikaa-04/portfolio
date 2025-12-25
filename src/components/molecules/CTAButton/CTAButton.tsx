import React from 'react';

interface CTAButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ label, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = 'px-4 py-2 rounded-md font-semibold';
  const primaryStyles = 'bg-blue-600 text-white hover:bg-blue-700';
  const secondaryStyles = 'bg-gray-200 text-gray-800 hover:bg-gray-300';

  const styles = variant === 'primary' ? primaryStyles : secondaryStyles;

  return (
    <button className={`${baseStyles} ${styles} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default CTAButton;