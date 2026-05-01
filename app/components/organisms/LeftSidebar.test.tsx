/**
 * LeftSidebar Component Tests
 * 
 * Unit tests and property-based tests for the LeftSidebar component.
 * Tests rendering, contact info display, skills sections, and array consistency.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import fc from 'fast-check';
import LeftSidebar from './LeftSidebar';
import { LeftSidebarProps, ContactInfo, Skill, ExtraSkill } from '@/app/types';
import { Code, Cloud } from 'lucide-react';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('LeftSidebar', () => {
  const mockContactInfo: ContactInfo = {
    age: '28',
    city: 'Madrid, España',
    availability: 'Disponible',
    address: 'Calle Ejemplo 123',
  };

  const mockLanguages: Skill[] = [
    { label: 'Español', percentage: 100 },
    { label: 'Inglés', percentage: 85 },
  ];

  const mockProgrammingLanguages: Skill[] = [
    { label: 'JavaScript', percentage: 90 },
    { label: 'TypeScript', percentage: 85 },
    { label: 'Python', percentage: 75 },
  ];

  const mockExtraSkills: ExtraSkill[] = [
    { icon: <Code data-testid="code-icon" />, text: 'Git & GitHub' },
    { icon: <Cloud data-testid="cloud-icon" />, text: 'AWS & Azure' },
  ];

  const defaultProps: LeftSidebarProps = {
    profileImage: 'https://placehold.co/120x120',
    name: 'Juan Ramos',
    title: 'Desarrollador Full Stack',
    contactInfo: mockContactInfo,
    languages: mockLanguages,
    programmingLanguages: mockProgrammingLanguages,
    extraSkills: mockExtraSkills,
  };

  describe('Unit Tests', () => {
    it('renders profile image with correct alt text', () => {
      render(<LeftSidebar {...defaultProps} />);
      const image = screen.getByAltText('Juan Ramos profile picture');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', 'https://placehold.co/120x120');
    });

    it('renders name and title correctly', () => {
      render(<LeftSidebar {...defaultProps} />);
      expect(screen.getByText('Juan Ramos')).toBeInTheDocument();
      expect(screen.getByText('Desarrollador Full Stack')).toBeInTheDocument();
    });

    it('renders all contact info fields when provided', () => {
      render(<LeftSidebar {...defaultProps} />);
      expect(screen.getByText('28')).toBeInTheDocument();
      expect(screen.getByText('Madrid, España')).toBeInTheDocument();
      expect(screen.getByText('Disponible')).toBeInTheDocument();
      expect(screen.getByText('Calle Ejemplo 123')).toBeInTheDocument();
    });

    it('renders Languages section with correct title', () => {
      render(<LeftSidebar {...defaultProps} />);
      expect(screen.getByText('Languages')).toBeInTheDocument();
    });

    it('renders Programming Languages section with correct title', () => {
      render(<LeftSidebar {...defaultProps} />);
      expect(screen.getByText('Programming Languages')).toBeInTheDocument();
    });

    it('renders Extra Skills section with correct title', () => {
      render(<LeftSidebar {...defaultProps} />);
      expect(screen.getByText('Extra Skills')).toBeInTheDocument();
    });

    it('renders extra skills with icons and text', () => {
      render(<LeftSidebar {...defaultProps} />);
      expect(screen.getByText('Git & GitHub')).toBeInTheDocument();
      expect(screen.getByText('AWS & Azure')).toBeInTheDocument();
      expect(screen.getByTestId('code-icon')).toBeInTheDocument();
      expect(screen.getByTestId('cloud-icon')).toBeInTheDocument();
    });

    it('does not render Languages section when array is empty', () => {
      const props = { ...defaultProps, languages: [] };
      render(<LeftSidebar {...props} />);
      expect(screen.queryByText('Languages')).not.toBeInTheDocument();
    });

    it('does not render Programming Languages section when array is empty', () => {
      const props = { ...defaultProps, programmingLanguages: [] };
      render(<LeftSidebar {...props} />);
      expect(screen.queryByText('Programming Languages')).not.toBeInTheDocument();
    });

    it('does not render Extra Skills section when array is empty', () => {
      const props = { ...defaultProps, extraSkills: [] };
      render(<LeftSidebar {...props} />);
      expect(screen.queryByText('Extra Skills')).not.toBeInTheDocument();
    });

    it('applies custom className when provided', () => {
      const { container } = render(
        <LeftSidebar {...defaultProps} className="custom-class" />
      );
      const aside = container.querySelector('aside');
      expect(aside).toHaveClass('custom-class');
    });

    it('has correct ARIA label for accessibility', () => {
      render(<LeftSidebar {...defaultProps} />);
      const aside = screen.getByLabelText('Left sidebar with personal information');
      expect(aside).toBeInTheDocument();
    });

    it('does not render contact info fields when empty', () => {
      const emptyContactInfo: ContactInfo = {
        age: '',
        city: '',
        availability: '',
        address: '',
      };
      const props = { ...defaultProps, contactInfo: emptyContactInfo };
      render(<LeftSidebar {...props} />);
      
      expect(screen.queryByText('Age:')).not.toBeInTheDocument();
      expect(screen.queryByText('City:')).not.toBeInTheDocument();
      expect(screen.queryByText('Status:')).not.toBeInTheDocument();
      expect(screen.queryByText('Address:')).not.toBeInTheDocument();
    });
  });

  describe('Property-Based Tests', () => {
    // Feature: personal-portfolio-nextjs, Property 1: Array Rendering Consistency
    it('renders correct number of language progress bars for any array length', () => {
      fc.assert(
        fc.property(
          fc.array(
            fc.record({
              label: fc.string({ minLength: 1, maxLength: 30 }),
              percentage: fc.integer({ min: 0, max: 100 }),
            }),
            { minLength: 0, maxLength: 10 }
          ),
          (languages) => {
            const props = { ...defaultProps, languages };
            const { container } = render(<LeftSidebar {...props} />);
            
            // Count ProgressBar components in Languages section
            const progressBars = container.querySelectorAll('[role="progressbar"]');
            const totalExpected = languages.length + defaultProps.programmingLanguages.length;
            
            expect(progressBars).toHaveLength(totalExpected);
          }
        ),
        { numRuns: 100 }
      );
    });

    // Feature: personal-portfolio-nextjs, Property 1: Array Rendering Consistency
    it('renders correct number of programming language progress bars for any array length', () => {
      fc.assert(
        fc.property(
          fc.array(
            fc.record({
              label: fc.string({ minLength: 1, maxLength: 30 }),
              percentage: fc.integer({ min: 0, max: 100 }),
            }),
            { minLength: 0, maxLength: 10 }
          ),
          (programmingLanguages) => {
            const props = { ...defaultProps, programmingLanguages };
            const { container } = render(<LeftSidebar {...props} />);
            
            // Count ProgressBar components
            const progressBars = container.querySelectorAll('[role="progressbar"]');
            const totalExpected = defaultProps.languages.length + programmingLanguages.length;
            
            expect(progressBars).toHaveLength(totalExpected);
          }
        ),
        { numRuns: 100 }
      );
    });

    // Feature: personal-portfolio-nextjs, Property 1: Array Rendering Consistency
    it('renders correct number of extra skills for any array length', () => {
      fc.assert(
        fc.property(
          fc.array(
            fc.record({
              text: fc.string({ minLength: 1, maxLength: 50 }).filter(s => s.trim().length > 0),
            }),
            { minLength: 0, maxLength: 15 }
          ),
          (skills) => {
            const extraSkills = skills.map((skill, index) => ({
              icon: <Code data-testid={`skill-icon-${index}`} />,
              text: skill.text,
            }));
            
            const props = { ...defaultProps, extraSkills };
            const { container } = render(<LeftSidebar {...props} />);
            
            // Count the number of extra skill items rendered
            const skillItems = container.querySelectorAll('.flex.items-center.gap-2.text-xs');
            
            // The count should match the extraSkills array length
            // Note: We need to subtract the default props extra skills count
            const expectedCount = extraSkills.length;
            expect(skillItems.length).toBe(expectedCount);
          }
        ),
        { numRuns: 100 }
      );
    });

    // Feature: personal-portfolio-nextjs, Property 2: Contact Information Completeness
    it('renders all non-empty contact info fields', () => {
      fc.assert(
        fc.property(
          fc.record({
            age: fc.option(fc.string({ minLength: 1, maxLength: 3 }), { nil: '' }),
            city: fc.option(fc.string({ minLength: 1, maxLength: 50 }), { nil: '' }),
            availability: fc.option(
              fc.constantFrom('Disponible', 'No disponible', 'Parcialmente disponible'),
              { nil: '' }
            ),
            address: fc.option(fc.string({ minLength: 1, maxLength: 100 }), { nil: '' }),
          }),
          (contactInfo) => {
            const props = { 
              ...defaultProps, 
              contactInfo,
              // Use empty arrays to avoid interference from default props
              languages: [],
              programmingLanguages: [],
              extraSkills: []
            };
            const { container } = render(<LeftSidebar {...props} />);
            
            // Count rendered contact info fields
            const contactInfoDiv = container.querySelector('.text-xs.text-\\[\\#333333\\].space-y-2');
            const renderedFields = contactInfoDiv?.querySelectorAll('.flex.justify-between') || [];
            
            // Count expected non-empty fields
            let expectedCount = 0;
            if (contactInfo.age) expectedCount++;
            if (contactInfo.city) expectedCount++;
            if (contactInfo.availability) expectedCount++;
            if (contactInfo.address) expectedCount++;
            
            expect(renderedFields.length).toBe(expectedCount);
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});
