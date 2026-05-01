import React from 'react';
import { SocialIconProps } from '@/app/types';

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href, label, className = '' }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`flex items-center justify-center w-10 h-10 bg-[#e8843a] rounded-full text-white transition-all duration-300 hover:scale-110 hover:bg-[#d4733a] focus:outline-none focus:ring-2 focus:ring-[#e8843a] focus:ring-offset-2 focus:ring-offset-[#1e293b] ${className}`}
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
