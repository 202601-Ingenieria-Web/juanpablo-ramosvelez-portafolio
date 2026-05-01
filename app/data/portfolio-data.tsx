/**
 * Portfolio Data
 *
 * Datos de ejemplo para el portafolio personal.
 * Reemplaza estos valores con tu información real.
 */

import React from 'react'; // needed for JSX icons
import {
  Code,
  Palette,
  Database,
  Globe,
  Smartphone,
  Cloud,
  GitBranch,
  Terminal,
  Layers,
  Zap,
} from 'lucide-react';
import { PortfolioData } from '@/app/types';

export const portfolioData: PortfolioData = {
  // ── Perfil ──────────────────────────────────────────────────────────────────
  profile: {
    name: 'Juan Pablo Ramos',
    title: 'Ingeniero de Sistemas',
    highlightWord: 'Sistemas',
    profileImage: '/profile.jpg',
    description:
      'Ingeniero de Sistemas con experiencia en desarrollo web y de software en entornos como HTML, CSS, JavaScript, PHP y WordPress. Cuento con experiencia laboral en mantenimiento y soporte de sistemas, lo que me ha permitido desarrollar una visión integral del ciclo de vida del software, desde su desarrollo hasta su operación. Me caracterizo por mi capacidad de aprendizaje rápido, trabajo en equipo y orientación a la resolución de problemas.',
    contactInfo: {
      age: '25',
      city: 'Bello, Ant',
      availability: 'Disponible',
      address: 'La Florida',
    },
  },

  // ── Habilidades ─────────────────────────────────────────────────────────────
  skills: {
    languages: [
      { label: 'Español', percentage: 100 },
      { label: 'Inglés', percentage: 85 },
    ],
    programmingLanguages: [
      { label: 'JavaScript', percentage: 92 },
      { label: 'TypeScript', percentage: 88 },
      { label: 'Python', percentage: 75 },
      { label: 'SQL', percentage: 80 },
      { label: 'Java', percentage: 50 },
    ],
    extraSkills: [
      { icon: <GitBranch size={16} />, text: 'Git & GitHub' },
      { icon: <Cloud size={16} />, text: 'AWS & Azure' },
      { icon: <Terminal size={16} />, text: 'Docker & CI/CD' },
      { icon: <Layers size={16} />, text: 'Agile / Scrum' },
      { icon: <Zap size={16} />, text: 'Testing (Jest, Cypress)' },
    ],
  },

  // ── Conocimientos ────────────────────────────────────────────────────────────
  knowledge: {
    title: 'Mis Conocimientos',
    subtitle: 'Áreas en las que tengo experiencia y pasión por seguir aprendiendo',
    areas: [
      {
        icon: <Code size={48} />,
        title: 'Desarrollo Web',
        description:
          'Creación de aplicaciones web modernas con React, Next.js y TypeScript siguiendo las mejores prácticas.',
      },
      {
        icon: <Palette size={48} />,
        title: 'UI / UX Design',
        description:
          'Diseño de interfaces intuitivas y atractivas centradas en la experiencia del usuario.',
      },
      {
        icon: <Database size={48} />,
        title: 'Bases de Datos',
        description:
          'Diseño y optimización de bases de datos relacionales (PostgreSQL, MySQL) y NoSQL (MongoDB).',
      },
      {
        icon: <Globe size={48} />,
        title: 'APIs & Backend',
        description:
          'Desarrollo de APIs RESTful y GraphQL con Node.js, Express y autenticación segura.',
      },
      {
        icon: <Smartphone size={48} />,
        title: 'Desarrollo Móvil',
        description:
          'Aplicaciones móviles multiplataforma con React Native para iOS y Android.',
      },
      {
        icon: <Cloud size={48} />,
        title: 'Cloud & DevOps',
        description:
          'Despliegue y gestión de aplicaciones en AWS, Azure y Google Cloud con Docker y CI/CD.',
      },
    ],
  },

  // ── Educación ────────────────────────────────────────────────────────────────
  education: {
    title: 'Educación',
    subtitle: 'Mi formación académica y certificaciones profesionales',
    items: [
      {
        institution: 'Institución Educativa',
        role: 'Estudiante',
        period: '2017',
        certificateTitle: 'Título Técnico en Sistemas',
        description:
          'Formación técnica en sistemas con énfasis en mantenimiento de equipos, soporte técnico y fundamentos de programación.',
      },
      {
        institution: 'Universidad de Antioquia',
        role: 'Estudiante',
        period: '2028',
        certificateTitle: 'Ingeniería de Sistemas',
        description:
          'Programa de Ingeniería de Sistemas con énfasis en desarrollo de software, arquitectura de sistemas y gestión de proyectos tecnológicos.',
      },
    ],
  },

  // ── Portafolio ───────────────────────────────────────────────────────────────
  portfolio: {
    title: 'Portafolio',
    projects: [
      {
        id: 'project-1',
        image: '/pokedex.png',
        title: 'Pokédex Primera Generación',
        shortDescription:
          'Aplicación web que funciona como Pokédex de los 151 Pokémon originales de la primera generación.',
        fullDescription:
          'Pokédex interactiva de la primera generación (151 Pokémon) desarrollada con HTML, CSS y JavaScript. Permite explorar cada Pokémon con su información detallada: tipo, estadísticas, descripción y evoluciones. Los datos se obtienen desde la PokéAPI.',
        githubUrl: 'https://github.com/202601-Ingenieria-Web/taller-html-JuanPablo-RamosVelez',
      },
      {
        id: 'project-2',
        image: 'https://placehold.co/640x360/333333/white?text=Task+Manager',
        title: 'Gestor de Tareas Colaborativo',
        shortDescription:
          'App de gestión de tareas con actualizaciones en tiempo real y colaboración en equipo.',
        fullDescription:
          'Sistema de gestión de tareas con interfaz drag-and-drop, colaboración en tiempo real mediante WebSockets, autenticación JWT, organización por proyectos y etiquetas, y notificaciones push. Stack: React, Node.js, Socket.io y MongoDB.',
        githubUrl: 'https://github.com/juanramos/task-manager',
      },
      {
        id: 'project-3',
        image: 'https://placehold.co/640x360/4A90E2/white?text=Dashboard',
        title: 'Dashboard de Analytics',
        shortDescription:
          'Panel de control con visualizaciones de datos interactivas y reportes exportables.',
        fullDescription:
          'Dashboard empresarial con gráficos interactivos usando Chart.js y D3.js, filtros dinámicos, exportación a PDF/Excel, sistema de roles y permisos, y modo oscuro. Construido con React, TypeScript y una API REST en Python/FastAPI.',
        githubUrl: 'https://github.com/juanramos/analytics-dashboard',
      },
      {
        id: 'project-4',
        image: 'https://placehold.co/640x360/27AE60/white?text=Blog+CMS',
        title: 'Blog con CMS Headless',
        shortDescription:
          'Blog personal con CMS headless, markdown, SEO optimizado y modo oscuro.',
        fullDescription:
          'Blog moderno con Next.js y Contentful como CMS headless. Soporta markdown con syntax highlighting, generación estática (SSG), SEO avanzado con metadatos dinámicos, sitemap automático, modo oscuro y comentarios con Disqus.',
        githubUrl: 'https://github.com/juanramos/blog-cms',
      },
      {
        id: 'project-5',
        image: 'https://placehold.co/640x360/8E44AD/white?text=Chat+App',
        title: 'Aplicación de Chat en Tiempo Real',
        shortDescription:
          'Chat con salas, mensajes privados, emojis y compartición de archivos.',
        fullDescription:
          'Aplicación de mensajería en tiempo real con salas de chat públicas y privadas, mensajes directos, soporte de emojis, compartición de imágenes y archivos, indicadores de escritura y estado de conexión. Tecnologías: React, Node.js, Socket.io y Redis.',
        githubUrl: 'https://github.com/juanramos/realtime-chat',
      },
    ],
  },

  // ── Redes Sociales ───────────────────────────────────────────────────────────
  social: [
    {
      platform: 'github',
      url: 'https://github.com/JuanPablo-Ramos',
      label: 'Perfil de GitHub',
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com',
      label: 'Perfil de LinkedIn',
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com',
      label: 'Perfil de Instagram',
    },
    {
      platform: 'twitter',
      url: 'https://x.com',
      label: 'Perfil de Twitter',
    },
    {
      platform: 'youtube',
      url: 'https://youtube.com',
      label: 'Canal de YouTube',
    },
  ],
};
