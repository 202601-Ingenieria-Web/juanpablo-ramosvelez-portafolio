/**
 * EducationCard Component Unit Tests
 * 
 * Tests for the EducationCard component
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EducationCard from './EducationCard';

describe('EducationCard Component', () => {
  const defaultProps = {
    institution: 'Universidad Complutense de Madrid',
    role: 'Estudiante',
    period: '2018 - 2022',
    certificateTitle: 'Grado en Ingeniería Informática',
    description: 'Especialización en desarrollo de software y arquitectura de sistemas.',
  };

  it('renders institution correctly', () => {
    render(<EducationCard {...defaultProps} />);
    expect(screen.getByText('Universidad Complutense de Madrid')).toBeInTheDocument();
  });

  it('renders role correctly', () => {
    render(<EducationCard {...defaultProps} />);
    expect(screen.getByText('Estudiante')).toBeInTheDocument();
  });

  it('renders period correctly', () => {
    render(<EducationCard {...defaultProps} />);
    expect(screen.getByText('2018 - 2022')).toBeInTheDocument();
  });

  it('renders certificate title correctly', () => {
    render(<EducationCard {...defaultProps} />);
    expect(screen.getByText('Grado en Ingeniería Informática')).toBeInTheDocument();
  });

  it('renders description correctly', () => {
    render(<EducationCard {...defaultProps} />);
    expect(screen.getByText('Especialización en desarrollo de software y arquitectura de sistemas.')).toBeInTheDocument();
  });

  it('applies white background', () => {
    const { container } = render(<EducationCard {...defaultProps} />);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('bg-white');
  });

  it('applies shadow styling', () => {
    const { container } = render(<EducationCard {...defaultProps} />);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('shadow-md');
    expect(card).toHaveClass('hover:shadow-xl');
  });

  it('applies padding of 24px (p-6 in Tailwind)', () => {
    const { container } = render(<EducationCard {...defaultProps} />);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('p-6');
  });

  it('applies custom className', () => {
    const { container } = render(
      <EducationCard {...defaultProps} className="custom-class" />
    );
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('custom-class');
  });

  it('renders two-column layout', () => {
    const { container } = render(<EducationCard {...defaultProps} />);
    const layoutContainer = container.querySelector('.flex');
    expect(layoutContainer).toHaveClass('flex-col');
    expect(layoutContainer).toHaveClass('md:flex-row');
  });

  it('renders left column with institution, role, and period', () => {
    const { container } = render(<EducationCard {...defaultProps} />);
    const leftColumn = container.querySelector('.md\\:w-2\\/5');
    
    expect(leftColumn).toBeInTheDocument();
    expect(leftColumn?.querySelector('.education-institution')).toHaveTextContent('Universidad Complutense de Madrid');
    expect(leftColumn?.querySelector('.education-role')).toHaveTextContent('Estudiante');
    expect(leftColumn?.querySelector('.education-period')).toHaveTextContent('2018 - 2022');
  });

  it('renders right column with certificate title and description', () => {
    const { container } = render(<EducationCard {...defaultProps} />);
    const rightColumn = container.querySelector('.md\\:w-3\\/5');
    
    expect(rightColumn).toBeInTheDocument();
    expect(rightColumn?.querySelector('.education-certificate')).toHaveTextContent('Grado en Ingeniería Informática');
    expect(rightColumn?.querySelector('.education-description')).toHaveTextContent('Especialización en desarrollo de software y arquitectura de sistemas.');
  });

  it('applies accent color #F5A623 to period badge background', () => {
    const { container } = render(<EducationCard {...defaultProps} />);
    const periodBadge = container.querySelector('.education-period');
    expect(periodBadge).toHaveClass('bg-[#F5A623]');
  });

  it('applies white text color to period badge', () => {
    const { container } = render(<EducationCard {...defaultProps} />);
    const periodBadge = container.querySelector('.education-period');
    expect(periodBadge).toHaveClass('text-white');
  });

  it('applies correct text styles to institution', () => {
    const { container } = render(<EducationCard {...defaultProps} />);
    const institution = container.querySelector('.education-institution');
    expect(institution).toHaveClass('text-lg');
    expect(institution).toHaveClass('font-semibold');
    expect(institution).toHaveClass('text-gray-800');
  });

  it('applies correct text styles to role', () => {
    const { container } = render(<EducationCard {...defaultProps} />);
    const role = container.querySelector('.education-role');
    expect(role).toHaveClass('text-sm');
    expect(role).toHaveClass('text-gray-600');
  });

  it('applies correct text styles to certificate title', () => {
    const { container } = render(<EducationCard {...defaultProps} />);
    const certificate = container.querySelector('.education-certificate');
    expect(certificate).toHaveClass('text-lg');
    expect(certificate).toHaveClass('font-semibold');
    expect(certificate).toHaveClass('text-gray-800');
  });

  it('applies correct text styles to description', () => {
    const { container } = render(<EducationCard {...defaultProps} />);
    const description = container.querySelector('.education-description');
    expect(description).toHaveClass('text-sm');
    expect(description).toHaveClass('text-gray-600');
  });

  it('renders period badge with rounded-full style', () => {
    const { container } = render(<EducationCard {...defaultProps} />);
    const periodBadge = container.querySelector('.education-period');
    expect(periodBadge).toHaveClass('rounded-full');
  });

  it('handles long text content gracefully', () => {
    const longProps = {
      institution: 'Universidad Internacional de Tecnología y Ciencias Aplicadas de Madrid',
      role: 'Estudiante de Postgrado en Ingeniería de Software Avanzada',
      period: '2018 - 2022',
      certificateTitle: 'Máster en Desarrollo de Aplicaciones Web y Móviles con Especialización en Cloud Computing',
      description: 'Programa completo de especialización en desarrollo de software moderno, incluyendo arquitecturas de microservicios, contenedores Docker, orquestación con Kubernetes, CI/CD, y metodologías ágiles avanzadas.',
    };

    render(<EducationCard {...longProps} />);
    expect(screen.getByText(longProps.institution)).toBeInTheDocument();
    expect(screen.getByText(longProps.certificateTitle)).toBeInTheDocument();
  });
});
