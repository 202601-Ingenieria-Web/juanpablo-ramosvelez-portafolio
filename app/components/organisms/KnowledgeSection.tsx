import React from 'react';
import { KnowledgeSectionProps } from '@/app/types';
import KnowledgeCard from '@/app/components/molecules/KnowledgeCard';

const KnowledgeSection: React.FC<KnowledgeSectionProps> = ({
  title,
  subtitle,
  knowledgeAreas,
  className = '',
}) => {
  return (
    <section className={`bg-[#0f172a] px-12 py-12 border-b border-[#1e3a5f] ${className}`} aria-label="Sección de conocimientos">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#e2e8f0] mb-2">{title}</h2>
        <p className="text-[#94a3b8]">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {knowledgeAreas.map((area, index) => (
          <KnowledgeCard key={`knowledge-${index}`} icon={area.icon} title={area.title} description={area.description} />
        ))}
      </div>
    </section>
  );
};

export default KnowledgeSection;
