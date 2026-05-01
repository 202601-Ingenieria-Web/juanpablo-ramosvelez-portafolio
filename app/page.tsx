'use client';

/**
 * Página principal del portafolio personal.
 * Integra todos los componentes usando el PageLayout de 3 columnas.
 */

import React from 'react';
import PageLayout from '@/app/components/templates/PageLayout';
import ProfileSection from '@/app/components/organisms/ProfileSection';
import KnowledgeSection from '@/app/components/organisms/KnowledgeSection';
import EducationSection from '@/app/components/organisms/EducationSection';
import PortfolioSection from '@/app/components/organisms/PortfolioSection';
import Footer from '@/app/components/organisms/Footer';
import { portfolioData } from '@/app/data/portfolio-data';

export default function Home() {
  const { profile, skills, knowledge, education, portfolio, social } = portfolioData;

  return (
    <PageLayout
      leftSidebarProps={{
        profileImage: profile.profileImage,
        name: profile.name,
        title: profile.title,
        contactInfo: profile.contactInfo,
        languages: skills.languages,
        programmingLanguages: skills.programmingLanguages,
        extraSkills: skills.extraSkills,
      }}
      rightSidebarProps={{
        socialLinks: social,
      }}
    >
      {/* 1. Sección de perfil */}
      <ProfileSection
        name={profile.name}
        title={profile.title}
        highlightWord={profile.highlightWord}
        profileImage={profile.profileImage}
        description={profile.description}
        onHireMe={() => {}}
      />

      {/* 2. Sección de conocimientos */}
      <KnowledgeSection
        title={knowledge.title}
        subtitle={knowledge.subtitle}
        knowledgeAreas={knowledge.areas}
      />

      {/* 3. Sección de educación */}
      <EducationSection
        title={education.title}
        subtitle={education.subtitle}
        educationItems={education.items}
      />

      {/* 4. Sección de portafolio */}
      <PortfolioSection
        title={portfolio.title}
        projects={portfolio.projects}
      />

      {/* 5. Footer */}
      <Footer />
    </PageLayout>
  );
}
