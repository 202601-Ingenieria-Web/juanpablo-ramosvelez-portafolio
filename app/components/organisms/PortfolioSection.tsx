'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PortfolioSectionProps, Project } from '@/app/types';
import PortfolioCard from '@/app/components/molecules/PortfolioCard';
import Modal from '@/app/components/molecules/Modal';
import Button from '@/app/components/atoms/Button';

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  title,
  projects,
  className = '',
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className={`bg-[#0f172a] px-12 py-12 border-b border-[#1e3a5f] ${className}`} aria-label="Sección de portafolio">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#e2e8f0] mb-2">{title}</h2>
      </div>

      <div className="overflow-x-auto pb-4">
        <div className="flex flex-row gap-6 w-max px-2">
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              image={project.image}
              title={project.title}
              shortDescription={project.shortDescription}
              fullDescription={project.fullDescription}
              githubUrl={project.githubUrl}
              onLearnMore={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div>
            <h2 id="modal-title" className="text-2xl font-bold text-[#e2e8f0] mb-4">{selectedProject.title}</h2>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
              <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
            </div>
            <p className="text-[#94a3b8] leading-relaxed mb-6">{selectedProject.fullDescription}</p>
            {selectedProject.githubUrl && (
              <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">Ver en GitHub</Button>
              </a>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default PortfolioSection;
