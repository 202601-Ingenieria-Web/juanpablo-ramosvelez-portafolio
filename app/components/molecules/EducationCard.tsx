import React from 'react';
import { EducationCardProps } from '@/app/types';

const EducationCard: React.FC<EducationCardProps> = ({
  institution, role, period, certificateTitle, description, className = '',
}) => {
  return (
    <div className={`bg-[#1e293b] border border-[#334155] rounded-xl p-6 shadow-lg hover:border-[#38bdf8]/50 transition-all duration-300 ${className}`}>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Columna izquierda */}
        <div className="md:w-2/5 flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-[#e2e8f0] education-institution">{institution}</h3>
          <p className="text-sm text-[#94a3b8] education-role">{role}</p>
          <div className="inline-flex items-center justify-center mt-2">
            <span className="bg-[#38bdf8]/20 text-[#38bdf8] text-xs font-medium px-3 py-1 rounded-full border border-[#38bdf8]/30 education-period">
              {period}
            </span>
          </div>
        </div>
        {/* Columna derecha */}
        <div className="md:w-3/5 flex flex-col gap-2">
          <h4 className="text-lg font-semibold text-[#e2e8f0] education-certificate">{certificateTitle}</h4>
          <p className="text-sm text-[#94a3b8] education-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
