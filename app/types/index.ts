/**
 * TypeScript Type Definitions for Personal Portfolio
 * 
 * This file contains all the interfaces and types used throughout the portfolio application.
 * Organized according to the design document specifications.
 */

import { ReactNode } from 'react';

// ============================================================================
// CORE DATA TYPES
// ============================================================================

/**
 * Contact information displayed in the Left Sidebar
 */
export interface ContactInfo {
  age: string;
  city: string;
  availability: string;
  address: string;
}

/**
 * Skill with proficiency level (used for languages and programming languages)
 */
export interface Skill {
  label: string;
  percentage: number; // 0-100
}

/**
 * Extra skill with icon representation
 */
export interface ExtraSkill {
  icon: ReactNode;
  text: string;
}

/**
 * Knowledge area card data
 */
export interface KnowledgeArea {
  icon: ReactNode;
  title: string;
  description: string;
}

/**
 * Education or certification item
 */
export interface EducationItem {
  institution: string;
  role: string;
  period: string;
  certificateTitle: string;
  description: string;
}

/**
 * Portfolio project data
 */
export interface Project {
  id: string;
  image: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  githubUrl?: string;
}

/**
 * Social media link
 */
export interface SocialLink {
  platform: 'github' | 'linkedin' | 'instagram' | 'twitter' | 'youtube';
  url: string;
  label: string;
}

/**
 * Complete portfolio data structure
 */
export interface PortfolioData {
  profile: {
    name: string;
    title: string;
    highlightWord: string;
    profileImage: string;
    description: string;
    contactInfo: ContactInfo;
  };
  skills: {
    languages: Skill[];
    programmingLanguages: Skill[];
    extraSkills: ExtraSkill[];
  };
  knowledge: {
    title: string;
    subtitle: string;
    areas: KnowledgeArea[];
  };
  education: {
    title: string;
    subtitle: string;
    items: EducationItem[];
  };
  portfolio: {
    title: string;
    projects: Project[];
  };
  social: SocialLink[];
}

// ============================================================================
// COMPONENT PROPS - ATOMS
// ============================================================================

/**
 * Button component props
 */
export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

/**
 * ProgressBar component props
 */
export interface ProgressBarProps {
  label: string;
  percentage: number; // 0-100
  className?: string;
}

/**
 * SocialIcon component props
 */
export interface SocialIconProps {
  icon: ReactNode; // Lucide icon component
  href: string;
  label: string; // For accessibility
  className?: string;
}

// ============================================================================
// COMPONENT PROPS - MOLECULES
// ============================================================================

/**
 * KnowledgeCard component props
 */
export interface KnowledgeCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

/**
 * EducationCard component props
 */
export interface EducationCardProps {
  institution: string;
  role: string;
  period: string;
  certificateTitle: string;
  description: string;
  className?: string;
}

/**
 * PortfolioCard component props
 */
export interface PortfolioCardProps {
  image: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  githubUrl?: string;
  onLearnMore: () => void;
  className?: string;
}

/**
 * Modal component props
 */
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

// ============================================================================
// COMPONENT PROPS - ORGANISMS
// ============================================================================

/**
 * LeftSidebar component props
 */
export interface LeftSidebarProps {
  profileImage: string;
  name: string;
  title: string;
  contactInfo: ContactInfo;
  languages: Skill[];
  programmingLanguages: Skill[];
  extraSkills: ExtraSkill[];
  className?: string;
}

/**
 * RightSidebar component props
 */
export interface RightSidebarProps {
  socialLinks: SocialLink[];
  className?: string;
}

/**
 * ProfileSection component props
 */
export interface ProfileSectionProps {
  name: string;
  title: string;
  highlightWord: string;
  profileImage: string;
  description: string;
  onHireMe: () => void;
  className?: string;
}

/**
 * KnowledgeSection component props
 */
export interface KnowledgeSectionProps {
  title: string;
  subtitle: string;
  knowledgeAreas: KnowledgeArea[];
  className?: string;
}

/**
 * EducationSection component props
 */
export interface EducationSectionProps {
  title: string;
  subtitle: string;
  educationItems: EducationItem[];
  className?: string;
}

/**
 * PortfolioSection component props
 */
export interface PortfolioSectionProps {
  title: string;
  projects: Project[];
  className?: string;
}

/**
 * Footer component props
 */
export interface FooterProps {
  className?: string;
}

// ============================================================================
// COMPONENT PROPS - TEMPLATES
// ============================================================================

/**
 * PageLayout template props
 */
export interface PageLayoutProps {
  leftSidebarProps: LeftSidebarProps;
  rightSidebarProps: RightSidebarProps;
  children: ReactNode;
  className?: string;
}
