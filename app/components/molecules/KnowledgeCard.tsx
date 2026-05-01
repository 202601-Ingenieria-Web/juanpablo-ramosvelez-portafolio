import React from 'react';
import { KnowledgeCardProps } from '@/app/types';

const KnowledgeCard: React.FC<KnowledgeCardProps> = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`bg-[#1e293b] border border-[#334155] rounded-xl p-6 shadow-lg hover:shadow-[#38bdf8]/10 hover:border-[#38bdf8]/50 transition-all duration-300 flex flex-col items-center text-center ${className}`}>
      <div className="text-[#38bdf8] mb-4 icon-container" aria-hidden="true">{icon}</div>
      <h3 className="text-lg font-semibold text-[#e2e8f0] mb-2 card-title">{title}</h3>
      <p className="text-sm text-[#94a3b8] card-description">{description}</p>
    </div>
  );
};

export default KnowledgeCard;
