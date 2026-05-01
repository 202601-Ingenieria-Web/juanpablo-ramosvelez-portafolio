import React from 'react';
import { EducationSectionProps } from '@/app/types';
import EducationCard from '@/app/components/molecules/EducationCard';

const EducationSection: React.FC<EducationSectionProps> = ({
  title,
  subtitle,
  educationItems,
  className = '',
}) => {
  return (
    <section className={`bg-[#0f172a] px-12 py-12 border-b border-[#1e3a5f] ${className}`} aria-label="Sección de educación">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#e2e8f0] mb-2">{title}</h2>
        <p className="text-[#94a3b8]">{subtitle}</p>
      </div>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {educationItems.map((item, index) => (
          <EducationCard
            key={`education-${index}`}
            institution={item.institution}
            role={item.role}
            period={item.period}
            certificateTitle={item.certificateTitle}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
