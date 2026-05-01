/**
 * KnowledgeCard Component Unit Tests
 * 
 * Tests for the KnowledgeCard component
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import KnowledgeCard from './KnowledgeCard';
import { Code } from 'lucide-react';

describe('KnowledgeCard Component', () => {
  const defaultProps = {
    icon: <Code data-testid="test-icon" size={48} />,
    title: 'Web Development',
    description: 'Building modern web applications with React and Next.js',
  };

  it('renders title correctly', () => {
    render(<KnowledgeCard {...defaultProps} />);
    expect(screen.getByText('Web Development')).toBeInTheDocument();
  });

  it('renders description correctly', () => {
    render(<KnowledgeCard {...defaultProps} />);
    expect(screen.getByText('Building modern web applications with React and Next.js')).toBeInTheDocument();
  });

  it('renders icon correctly', () => {
    render(<KnowledgeCard {...defaultProps} />);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('applies white background', () => {
    const { container } = render(<KnowledgeCard {...defaultProps} />);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('bg-white');
  });

  it('applies shadow styling', () => {
    const { container } = render(<KnowledgeCard {...defaultProps} />);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('shadow-md');
    expect(card).toHaveClass('hover:shadow-xl');
  });

  it('applies padding of 24px (p-6 in Tailwind)', () => {
    const { container } = render(<KnowledgeCard {...defaultProps} />);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('p-6');
  });

  it('applies custom className', () => {
    const { container } = render(
      <KnowledgeCard {...defaultProps} className="custom-class" />
    );
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('custom-class');
  });

  it('centers content with flex layout', () => {
    const { container } = render(<KnowledgeCard {...defaultProps} />);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('flex');
    expect(card).toHaveClass('flex-col');
    expect(card).toHaveClass('items-center');
    expect(card).toHaveClass('text-center');
  });

  it('renders elements in correct order: icon, title, description', () => {
    const { container } = render(<KnowledgeCard {...defaultProps} />);
    const card = container.firstChild as HTMLElement;
    const children = Array.from(card.children);
    
    // First child should contain the icon
    expect(children[0]).toHaveClass('icon-container');
    
    // Second child should be the title
    expect(children[1]).toHaveClass('card-title');
    expect(children[1]).toHaveTextContent('Web Development');
    
    // Third child should be the description
    expect(children[2]).toHaveClass('card-description');
    expect(children[2]).toHaveTextContent('Building modern web applications with React and Next.js');
  });

  it('applies correct text styles to title', () => {
    render(<KnowledgeCard {...defaultProps} />);
    const title = screen.getByText('Web Development');
    expect(title).toHaveClass('text-lg');
    expect(title).toHaveClass('font-semibold');
    expect(title).toHaveClass('text-gray-800');
  });

  it('applies correct text styles to description', () => {
    render(<KnowledgeCard {...defaultProps} />);
    const description = screen.getByText('Building modern web applications with React and Next.js');
    expect(description).toHaveClass('text-sm');
    expect(description).toHaveClass('text-gray-600');
  });

  it('applies accent color to icon container', () => {
    const { container } = render(<KnowledgeCard {...defaultProps} />);
    const iconContainer = container.querySelector('.icon-container');
    expect(iconContainer).toHaveClass('text-[#F5A623]');
  });
});
