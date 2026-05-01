import React from 'react';
import { ButtonProps } from '@/app/types';

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const base = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0f172a]';
  const variants = {
    primary: 'bg-[#e8843a] text-white hover:bg-[#d4733a] focus:ring-[#e8843a] font-semibold',
    secondary: 'bg-[#334155] text-[#e2e8f0] hover:bg-[#475569] focus:ring-[#334155]',
    outline: 'border-2 border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8] hover:text-[#0f172a] focus:ring-[#38bdf8]',
  };
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
