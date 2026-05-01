/**
 * PortfolioCard Component Examples
 * 
 * Visual examples of the PortfolioCard component with different content
 */

'use client';

import React, { useState } from 'react';
import PortfolioCard from './PortfolioCard';

export default function PortfolioCardExamples() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      image: 'https://placehold.co/640x360/F5A623/white?text=E-commerce',
      title: 'E-commerce Platform',
      shortDescription: 'A full-featured e-commerce platform built with Next.js and Stripe integration for seamless payments.',
      fullDescription: 'A comprehensive e-commerce solution with product management, shopping cart, checkout process, and payment integration using Stripe. Built with Next.js, TypeScript, and TailwindCSS.',
      githubUrl: 'https://github.com/user/ecommerce',
    },
    {
      image: 'https://placehold.co/640x360/333333/white?text=Task+Manager',
      title: 'Task Management App',
      shortDescription: 'A collaborative task management application with real-time updates and team collaboration features.',
      fullDescription: 'Full-stack task management system with drag-and-drop interface, real-time collaboration using WebSockets, user authentication, and project organization. Built with React, Node.js, and MongoDB.',
      githubUrl: 'https://github.com/user/task-manager',
    },
    {
      image: 'https://placehold.co/640x360/4A90E2/white?text=Weather+App',
      title: 'Weather Dashboard',
      shortDescription: 'A beautiful weather dashboard that displays current conditions and forecasts for multiple locations.',
      fullDescription: 'Interactive weather application that fetches data from OpenWeather API, displays current conditions, 7-day forecasts, and weather maps. Features location search and favorites. Built with React and TypeScript.',
      githubUrl: 'https://github.com/user/weather-dashboard',
    },
    {
      image: 'https://placehold.co/640x360/E74C3C/white?text=Blog+Platform',
      title: 'Blog Platform',
      shortDescription: 'A modern blogging platform with markdown support, comments, and social sharing capabilities.',
      fullDescription: 'Complete blogging solution with markdown editor, syntax highlighting, comment system, user profiles, and social media integration. Built with Next.js, Prisma, and PostgreSQL.',
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">PortfolioCard Examples</h1>
      
      {/* Horizontal scroll layout (as it will be used in PortfolioSection) */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Horizontal Scroll Layout</h2>
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 px-4">
            {projects.map((project, index) => (
              <PortfolioCard
                key={index}
                image={project.image}
                title={project.title}
                shortDescription={project.shortDescription}
                fullDescription={project.fullDescription}
                githubUrl={project.githubUrl}
                onLearnMore={() => setSelectedProject(project.title)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Grid layout example */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Grid Layout</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.slice(0, 3).map((project, index) => (
            <PortfolioCard
              key={index}
              image={project.image}
              title={project.title}
              shortDescription={project.shortDescription}
              fullDescription={project.fullDescription}
              githubUrl={project.githubUrl}
              onLearnMore={() => setSelectedProject(project.title)}
            />
          ))}
        </div>
      </div>

      {/* Single card example */}
      <div className="max-w-md mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Single Card</h2>
        <PortfolioCard
          image="https://placehold.co/640x360/9B59B6/white?text=Portfolio+Site"
          title="Personal Portfolio"
          shortDescription="A modern personal portfolio website showcasing projects, skills, and experience with a clean design."
          fullDescription="Responsive portfolio website built with Next.js 14, featuring project showcase, skills section, contact form, and blog. Optimized for performance and SEO."
          githubUrl="https://github.com/user/portfolio"
          onLearnMore={() => setSelectedProject('Personal Portfolio')}
        />
      </div>

      {/* Card without GitHub URL */}
      <div className="max-w-md mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Without GitHub URL</h2>
        <PortfolioCard
          image="https://placehold.co/640x360/27AE60/white?text=Private+Project"
          title="Private Client Project"
          shortDescription="A confidential project for a corporate client with custom requirements and proprietary features."
          fullDescription="Enterprise-level application with custom business logic, integrations with third-party services, and advanced security features. Details are under NDA."
          onLearnMore={() => setSelectedProject('Private Client Project')}
        />
      </div>

      {/* Card with custom className */}
      <div className="max-w-md mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">With Custom Styling</h2>
        <PortfolioCard
          image="https://placehold.co/640x360/F39C12/white?text=Featured"
          title="Featured Project"
          shortDescription="This card has a custom className applied for additional styling and emphasis."
          fullDescription="A highlighted project with special styling to draw attention. This demonstrates the flexibility of the component."
          githubUrl="https://github.com/user/featured"
          onLearnMore={() => setSelectedProject('Featured Project')}
          className="ring-2 ring-[#F5A623] ring-offset-4"
        />
      </div>

      {/* Card with very long description */}
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">With Long Description (line-clamp-2)</h2>
        <PortfolioCard
          image="https://placehold.co/640x360/8E44AD/white?text=Complex+App"
          title="Complex Enterprise Application"
          shortDescription="This is a very long description that demonstrates the line-clamp-2 feature. It should be truncated after two lines to maintain consistent card heights. The full description would be much longer and contain detailed information about the project, its features, technologies used, challenges faced, and outcomes achieved."
          fullDescription="A comprehensive enterprise application with multiple modules, complex business logic, and extensive integrations."
          githubUrl="https://github.com/user/enterprise-app"
          onLearnMore={() => setSelectedProject('Complex Enterprise Application')}
        />
      </div>

      {/* Selected project indicator */}
      {selectedProject && (
        <div className="fixed bottom-4 right-4 bg-[#F5A623] text-white px-6 py-3 rounded-lg shadow-lg">
          <p className="font-semibold">Learn More clicked:</p>
          <p className="text-sm">{selectedProject}</p>
          <button
            onClick={() => setSelectedProject(null)}
            className="mt-2 text-xs underline"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
