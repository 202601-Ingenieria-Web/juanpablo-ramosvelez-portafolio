/**
 * SocialIcon Component Unit Tests
 * 
 * Tests for the SocialIcon component
 * **Validates: Requirements 13.2, 13.5, 15.1**
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SocialIcon from './SocialIcon';

// Mock icon component for testing
const MockIcon = ({ 'data-testid': testId }: { 'data-testid'?: string }) => (
  <svg data-testid={testId} width="24" height="24" />
);

describe('SocialIcon Component', () => {
  const mockIcon = <MockIcon data-testid="github-icon" />;
  const mockHref = 'https://github.com/username';
  const mockLabel = 'GitHub Profile';

  it('renders the icon correctly', () => {
    render(<SocialIcon icon={mockIcon} href={mockHref} label={mockLabel} />);
    expect(screen.getByTestId('github-icon')).toBeInTheDocument();
  });

  it('renders as a link with correct href', () => {
    render(<SocialIcon icon={mockIcon} href={mockHref} label={mockLabel} />);
    const link = screen.getByRole('link', { name: mockLabel });
    
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', mockHref);
  });

  it('opens link in new tab with security attributes', () => {
    render(<SocialIcon icon={mockIcon} href={mockHref} label={mockLabel} />);
    const link = screen.getByRole('link', { name: mockLabel });
    
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has correct accessibility label', () => {
    render(<SocialIcon icon={mockIcon} href={mockHref} label={mockLabel} />);
    const link = screen.getByLabelText(mockLabel);
    
    expect(link).toBeInTheDocument();
  });

  it('applies correct size styles (48px × 48px)', () => {
    render(<SocialIcon icon={mockIcon} href={mockHref} label={mockLabel} />);
    const link = screen.getByRole('link', { name: mockLabel });
    
    expect(link).toHaveClass('w-12'); // 48px
    expect(link).toHaveClass('h-12'); // 48px
  });

  it('applies correct background color (#F5A623)', () => {
    render(<SocialIcon icon={mockIcon} href={mockHref} label={mockLabel} />);
    const link = screen.getByRole('link', { name: mockLabel });
    
    expect(link).toHaveClass('bg-[#F5A623]');
  });

  it('applies circular shape', () => {
    render(<SocialIcon icon={mockIcon} href={mockHref} label={mockLabel} />);
    const link = screen.getByRole('link', { name: mockLabel });
    
    expect(link).toHaveClass('rounded-full');
  });

  it('applies white text color for icon', () => {
    render(<SocialIcon icon={mockIcon} href={mockHref} label={mockLabel} />);
    const link = screen.getByRole('link', { name: mockLabel });
    
    expect(link).toHaveClass('text-white');
  });

  it('applies hover scale effect', () => {
    render(<SocialIcon icon={mockIcon} href={mockHref} label={mockLabel} />);
    const link = screen.getByRole('link', { name: mockLabel });
    
    expect(link).toHaveClass('hover:scale-110');
  });

  it('centers icon content', () => {
    render(<SocialIcon icon={mockIcon} href={mockHref} label={mockLabel} />);
    const link = screen.getByRole('link', { name: mockLabel });
    
    expect(link).toHaveClass('flex');
    expect(link).toHaveClass('items-center');
    expect(link).toHaveClass('justify-center');
  });

  it('applies custom className', () => {
    render(
      <SocialIcon
        icon={mockIcon}
        href={mockHref}
        label={mockLabel}
        className="custom-class"
      />
    );
    const link = screen.getByRole('link', { name: mockLabel });
    
    expect(link).toHaveClass('custom-class');
  });

  it('has focus styles for accessibility', () => {
    render(<SocialIcon icon={mockIcon} href={mockHref} label={mockLabel} />);
    const link = screen.getByRole('link', { name: mockLabel });
    
    expect(link).toHaveClass('focus:outline-none');
    expect(link).toHaveClass('focus:ring-2');
    expect(link).toHaveClass('focus:ring-[#F5A623]');
  });

  it('renders multiple social icons with different platforms', () => {
    const { container } = render(
      <div>
        <SocialIcon
          icon={<MockIcon data-testid="github-icon" />}
          href="https://github.com/username"
          label="GitHub Profile"
        />
        <SocialIcon
          icon={<MockIcon data-testid="linkedin-icon" />}
          href="https://linkedin.com/in/username"
          label="LinkedIn Profile"
        />
      </div>
    );
    
    expect(screen.getByTestId('github-icon')).toBeInTheDocument();
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
    expect(screen.getByLabelText('GitHub Profile')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn Profile')).toBeInTheDocument();
  });
});
