/**
 * Button Component Unit Tests
 * 
 * Tests for the Button component with different variants
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  it('renders children correctly', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies primary variant styles by default', () => {
    render(<Button>Primary Button</Button>);
    const button = screen.getByText('Primary Button');
    
    expect(button).toHaveClass('bg-[#F5A623]');
    expect(button).toHaveClass('text-white');
  });

  it('applies secondary variant styles', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByText('Secondary Button');
    
    expect(button).toHaveClass('bg-gray-700');
    expect(button).toHaveClass('text-white');
  });

  it('applies outline variant styles', () => {
    render(<Button variant="outline">Outline Button</Button>);
    const button = screen.getByText('Outline Button');
    
    expect(button).toHaveClass('border-2');
    expect(button).toHaveClass('border-[#F5A623]');
    expect(button).toHaveClass('text-[#F5A623]');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Button</Button>);
    const button = screen.getByText('Button');
    
    expect(button).toHaveClass('custom-class');
  });

  it('applies base styles to all variants', () => {
    render(<Button>Button</Button>);
    const button = screen.getByText('Button');
    
    expect(button).toHaveClass('px-6');
    expect(button).toHaveClass('py-3');
    expect(button).toHaveClass('rounded-lg');
    expect(button).toHaveClass('font-medium');
  });
});
