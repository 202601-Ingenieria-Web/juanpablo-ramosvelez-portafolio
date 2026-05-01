/**
 * EducationCard Example
 * 
 * Example usage of the EducationCard component with sample data.
 */

import React from 'react';
import EducationCard from './EducationCard';

const EducationCardExample: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">EducationCard Examples</h1>
      
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Example 1: University Degree */}
        <EducationCard
          institution="Universidad Complutense de Madrid"
          role="Estudiante"
          period="2018 - 2022"
          certificateTitle="Grado en Ingeniería Informática"
          description="Especialización en desarrollo de software y arquitectura de sistemas. Proyecto final: Sistema de gestión de inventario con React y Node.js."
        />

        {/* Example 2: Professional Certification */}
        <EducationCard
          institution="AWS Training"
          role="Participante"
          period="2023"
          certificateTitle="AWS Certified Solutions Architect"
          description="Certificación profesional que valida la capacidad de diseñar y desplegar sistemas escalables en AWS."
        />

        {/* Example 3: Bootcamp */}
        <EducationCard
          institution="Ironhack"
          role="Estudiante Full-Time"
          period="2022"
          certificateTitle="Full Stack Web Development Bootcamp"
          description="Programa intensivo de 9 semanas cubriendo JavaScript, React, Node.js, Express, MongoDB y metodologías ágiles."
        />

        {/* Example 4: Online Course */}
        <EducationCard
          institution="Platzi"
          role="Estudiante Online"
          period="2021 - 2022"
          certificateTitle="Escuela de JavaScript"
          description="Ruta de aprendizaje completa incluyendo fundamentos de JavaScript, ES6+, TypeScript, React y Next.js."
        />
      </div>
    </div>
  );
};

export default EducationCardExample;
