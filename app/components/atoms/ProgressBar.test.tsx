/**
 * ProgressBar Component Unit Tests
 * 
 * Tests for the ProgressBar component including clamping behavior
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProgressBar from './ProgressBar';

describe('ProgressBar Component', () => {
  it('renders label correctly', () => {
    render(<ProgressBar label="JavaScript" percentage={75} />);
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  });

  it('renders percentage correctly', () => {
    render(<ProgressBar label="TypeScript" percentage={85} />);
    expect(screen.getByText('85%')).toBeInTheDocument();
  });

  it('displays label on the left and percentage on the right', () => {
    const { container } = render(<ProgressBar label="Python" percentage={70} />);
    
    const labelElement = container.querySelector('.label');
    const percentageElement = container.querySelector('.percentage');
    
    expect(labelElement).toHaveTextContent('Python');
    expect(percentageElement).toHaveTextContent('70%');
    
    // Verify they are in a flex container with justify-between
    const flexContainer = labelElement?.parentElement;
    expect(flexContainer).toHaveClass('justify-between');
  });

  it('clamps percentage below 0 to 0', () => {
    render(<ProgressBar label="Test" percentage={-10} />);
    expect(screen.getByText('0%')).toBeInTheDocument();
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');
    expect(progressBar).toHaveStyle({ width: '0%' });
  });

  it('clamps percentage above 100 to 100', () => {
    render(<ProgressBar label="Test" percentage={150} />);
    expect(screen.getByText('100%')).toBeInTheDocument();
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '100');
    expect(progressBar).toHaveStyle({ width: '100%' });
  });

  it('handles valid percentage values correctly', () => {
    render(<ProgressBar label="Test" percentage={50} />);
    expect(screen.getByText('50%')).toBeInTheDocument();
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '50');
    expect(progressBar).toHaveStyle({ width: '50%' });
  });

  it('applies correct background colors', () => {
    const { container } = render(<ProgressBar label="Test" percentage={60} />);
    
    // Check progress bar container has gray background
    const progressBarContainer = container.querySelector('.bg-\\[\\#e0e0e0\\]');
    expect(progressBarContainer).toBeInTheDocument();
    
    // Check progress bar fill has orange background
    const progressBarFill = container.querySelector('.bg-\\[\\#F5A623\\]');
    expect(progressBarFill).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <ProgressBar label="Test" percentage={50} className="custom-class" />
    );
    
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('custom-class');
  });

  it('has proper accessibility attributes', () => {
    render(<ProgressBar label="JavaScript" percentage={75} />);
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '75');
    expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    expect(progressBar).toHaveAttribute('aria-valuemax', '100');
    expect(progressBar).toHaveAttribute('aria-label', 'JavaScript progress');
  });

  it('handles edge case percentage of 0', () => {
    render(<ProgressBar label="Test" percentage={0} />);
    expect(screen.getByText('0%')).toBeInTheDocument();
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveStyle({ width: '0%' });
  });

  it('handles edge case percentage of 100', () => {
    render(<ProgressBar label="Test" percentage={100} />);
    expect(screen.getByText('100%')).toBeInTheDocument();
    
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveStyle({ width: '100%' });
  });
});
