import React from 'react';
import Image from 'next/image';
import { PortfolioCardProps } from '@/app/types';
import Button from '@/app/components/atoms/Button';

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  image, title, shortDescription, fullDescription, githubUrl, onLearnMore, className = '',
}) => {
  return (
    <div className={`bg-[#1e293b] border border-[#334155] rounded-xl shadow-lg hover:shadow-[#38bdf8]/10 hover:border-[#38bdf8]/50 transition-all duration-300 w-80 flex-shrink-0 overflow-hidden ${className}`}>
      <div className="relative w-full aspect-video portfolio-image">
        <Image src={image} alt={title} fill className="object-cover" sizes="320px" />
      </div>
      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-[#e2e8f0] portfolio-title">{title}</h3>
        <p className="text-sm text-[#94a3b8] line-clamp-2 portfolio-description">{shortDescription}</p>
        <div className="mt-2">
          <Button variant="outline" onClick={onLearnMore} className="w-full">Ver más</Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
