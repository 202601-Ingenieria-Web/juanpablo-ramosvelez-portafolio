/**
 * PortfolioCard Component Unit Tests
 * 
 * Tests for the PortfolioCard component
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PortfolioCard from './PortfolioCard';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('PortfolioCard Component', () => {
  const mockOnLearnMore = jest.fn();

  const defaultProps = {
    image: 'https://placehold.co/640x360',
    title: 'E-commerce Platform',
    shortDescription: 'A full-featured e-commerce platform built with Next.js and Stripe integration for seamless payments.',
    fullDescription: 'A comprehensive e-commerce solution with product management, shopping cart, checkout process, and payment integration using Stripe. Built with Next.js, TypeScript, and TailwindCSS.',
    githubUrl: 'https://github.com/user/ecommerce',
    onLearnMore: mockOnLearnMore,
  };

  beforeEach(() => {
    mockOnLearnMore.mockClear();
  });

  it('renders title correctly', () => {
    render(<PortfolioCard {...defaultProps} />);
    expect(screen.getByText('E-commerce Platform')).toBeInTheDocument();
  });

  it('renders short description correctly', () => {
    render(<PortfolioCard {...defaultProps} />);
    expect(screen.getByText(/A full-featured e-commerce platform/)).toBeInTheDocument();
  });

  it('renders image with correct src', () => {
    render(<PortfolioCard {...defaultProps} />);
    const image = screen.getByAltText('E-commerce Platform');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://placehold.co/640x360');
  });

  it('renders Learn More button', () => {
    render(<PortfolioCard {...defaultProps} />);
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('calls onLearnMore when button is clicked', () => {
    render(<PortfolioCard {...defaultProps} />);
    const button = screen.getByText('Learn More');
    fireEvent.click(button);
    expect(mockOnLearnMore).toHaveBeenCalledTimes(1);
  });

  it('applies white background', () => {
    const { container } = render(<PortfolioCard {...defaultProps} />);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('bg-white');
  });

  it('applies shadow styling', () => {
    const { container } = render(<PortfolioCard {...defaultProps} />);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('shadow-md');
    expect(card).toHaveClass('hover:shadow-xl');
  });

  it('applies fixed width of 320px (w-80 in Tailwind)', () => {
    const { container } = render(<PortfolioCard {...defaultProps} />);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('w-80');
  });

  it('applies flex-shrink-0 for horizontal scroll', () => {
    const { container } = render(<PortfolioCard {...defaultProps} />);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('flex-shrink-0');
  });

  it('applies custom className', () => {
    const { container } = render(
      <PortfolioCard {...defaultProps} className="custom-class" />
    );
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('custom-class');
  });

  it('applies line-clamp-2 to description', () => {
    const { container } = render(<PortfolioCard {...defaultProps} />);
    const description = container.querySelector('.portfolio-description');
    expect(description).toHaveClass('line-clamp-2');
  });

  it('renders image with 16:9 aspect ratio', () => {
    const { container } = render(<PortfolioCard {...defaultProps} />);
    const imageContainer = container.querySelector('.portfolio-image');
    expect(imageContainer).toHaveClass('aspect-video');
  });

  it('applies correct text styles to title', () => {
    render(<PortfolioCard {...defaultProps} />);
    const title = screen.getByText('E-commerce Platform');
    expect(title).toHaveClass('text-lg');
    expect(title).toHaveClass('font-semibold');
    expect(title).toHaveClass('text-gray-800');
  });

  it('applies correct text styles to description', () => {
    const { container } = render(<PortfolioCard {...defaultProps} />);
    const description = container.querySelector('.portfolio-description');
    expect(description).toHaveClass('text-sm');
    expect(description).toHaveClass('text-gray-600');
  });

  it('renders without githubUrl prop', () => {
    const propsWithoutGithub = { ...defaultProps, githubUrl: undefined };
    render(<PortfolioCard {...propsWithoutGithub} />);
    expect(screen.getByText('E-commerce Platform')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('renders elements in correct order: image, title, description, button', () => {
    const { container } = render(<PortfolioCard {...defaultProps} />);
    const card = container.firstChild as HTMLElement;
    const children = Array.from(card.children);
    
    // First child should be the image container
    expect(children[0]).toHaveClass('portfolio-image');
    
    // Second child should be the content container with padding
    const contentContainer = children[1];
    expect(contentContainer).toHaveClass('p-6');
    
    const contentChildren = Array.from(contentContainer.children);
    
    // First content child should be the title
    expect(contentChildren[0]).toHaveClass('portfolio-title');
    
    // Second content child should be the description
    expect(contentChildren[1]).toHaveClass('portfolio-description');
    
    // Third content child should contain the button
    expect(contentChildren[2]).toContainHTML('button');
  });

  it('uses outline variant for button', () => {
    const { container } = render(<PortfolioCard {...defaultProps} />);
    const button = container.querySelector('button');
    expect(button).toHaveClass('border-2');
    expect(button).toHaveClass('border-[#F5A623]');
  });

  it('handles long descriptions with line-clamp', () => {
    const longDescription = 'This is a very long description that should be truncated after two lines. '.repeat(10);
    const propsWithLongDesc = { ...defaultProps, shortDescription: longDescription };
    const { container } = render(<PortfolioCard {...propsWithLongDesc} />);
    const description = container.querySelector('.portfolio-description');
    expect(description).toHaveClass('line-clamp-2');
  });

  it('applies rounded corners', () => {
    const { container } = render(<PortfolioCard {...defaultProps} />);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('rounded-lg');
  });

  it('applies overflow-hidden to card', () => {
    const { container } = render(<PortfolioCard {...defaultProps} />);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('overflow-hidden');
  });

  it('applies object-cover to image', () => {
    const { container } = render(<PortfolioCard {...defaultProps} />);
    const image = container.querySelector('img');
    expect(image).toHaveClass('object-cover');
  });
});
