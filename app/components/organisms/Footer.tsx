import React from 'react';
import { FooterProps } from '@/app/types';

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={`bg-[#1e293b] text-white py-8 px-12 text-center border-t border-[#1e3a5f] ${className}`} aria-label="Pie de página">
      <p className="text-sm text-[#94a3b8]">© {currentYear} Juan Pablo Ramos. Todos los derechos reservados.</p>
      <p className="text-xs text-[#475569] mt-2">Desarrollado con Next.js, TypeScript y TailwindCSS</p>
    </footer>
  );
};

export default Footer;
