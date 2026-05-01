/**
 * LeftSidebar Component Example
 * 
 * Example usage of the LeftSidebar component with sample data.
 * This file demonstrates how to use the component with realistic portfolio data.
 */

import React from 'react';
import LeftSidebar from './LeftSidebar';
import { LeftSidebarProps } from '@/app/types';
import { Code, Cloud, Database, Smartphone, Globe, Zap } from 'lucide-react';

const exampleProps: LeftSidebarProps = {
  profileImage: 'https://placehold.co/120x120?text=Profile',
  name: 'Juan Ramos',
  title: 'Desarrollador Full Stack',
  contactInfo: {
    age: '28',
    city: 'Madrid, España',
    availability: 'Disponible',
    address: 'Calle Ejemplo 123',
  },
  languages: [
    { label: 'Español', percentage: 100 },
    { label: 'Inglés', percentage: 85 },
    { label: 'Francés', percentage: 60 },
  ],
  programmingLanguages: [
    { label: 'JavaScript', percentage: 90 },
    { label: 'TypeScript', percentage: 85 },
    { label: 'Python', percentage: 75 },
    { label: 'Java', percentage: 70 },
    { label: 'Go', percentage: 65 },
  ],
  extraSkills: [
    { icon: <Code size={16} />, text: 'Git & GitHub' },
    { icon: <Cloud size={16} />, text: 'AWS & Azure' },
    { icon: <Database size={16} />, text: 'SQL & NoSQL' },
    { icon: <Smartphone size={16} />, text: 'Responsive Design' },
    { icon: <Globe size={16} />, text: 'REST APIs' },
    { icon: <Zap size={16} />, text: 'Agile/Scrum' },
  ],
};

/**
 * Example 1: Full LeftSidebar with all data
 */
export const FullLeftSidebar = () => {
  return (
    <div className="h-screen">
      <LeftSidebar {...exampleProps} />
    </div>
  );
};

/**
 * Example 2: Minimal LeftSidebar with only required fields
 */
export const MinimalLeftSidebar = () => {
  const minimalProps: LeftSidebarProps = {
    profileImage: 'https://placehold.co/120x120?text=Min',
    name: 'Ana García',
    title: 'Diseñadora UX/UI',
    contactInfo: {
      age: '25',
      city: 'Barcelona',
      availability: 'Disponible',
      address: '',
    },
    languages: [{ label: 'Español', percentage: 100 }],
    programmingLanguages: [],
    extraSkills: [],
  };

  return (
    <div className="h-screen">
      <LeftSidebar {...minimalProps} />
    </div>
  );
};

/**
 * Example 3: LeftSidebar with empty arrays (sections hidden)
 */
export const EmptySectionsLeftSidebar = () => {
  const emptyProps: LeftSidebarProps = {
    profileImage: 'https://placehold.co/120x120?text=Empty',
    name: 'Carlos Pérez',
    title: 'Product Manager',
    contactInfo: {
      age: '32',
      city: 'Valencia',
      availability: 'No disponible',
      address: 'Avenida Principal 456',
    },
    languages: [],
    programmingLanguages: [],
    extraSkills: [],
  };

  return (
    <div className="h-screen">
      <LeftSidebar {...emptyProps} />
    </div>
  );
};

/**
 * Example 4: LeftSidebar with partial contact info
 */
export const PartialContactLeftSidebar = () => {
  const partialProps: LeftSidebarProps = {
    profileImage: 'https://placehold.co/120x120?text=Partial',
    name: 'María López',
    title: 'Frontend Developer',
    contactInfo: {
      age: '26',
      city: 'Sevilla',
      availability: '',
      address: '',
    },
    languages: [
      { label: 'Español', percentage: 100 },
      { label: 'Inglés', percentage: 75 },
    ],
    programmingLanguages: [
      { label: 'JavaScript', percentage: 95 },
      { label: 'React', percentage: 90 },
    ],
    extraSkills: [
      { icon: <Code size={16} />, text: 'Git' },
      { icon: <Smartphone size={16} />, text: 'Mobile First' },
    ],
  };

  return (
    <div className="h-screen">
      <LeftSidebar {...partialProps} />
    </div>
  );
};

/**
 * Example 5: LeftSidebar with custom className
 */
export const CustomStyledLeftSidebar = () => {
  return (
    <div className="h-screen">
      <LeftSidebar {...exampleProps} className="shadow-lg border-r-2 border-gray-200" />
    </div>
  );
};

// Default export for Storybook or documentation tools
export default FullLeftSidebar;
