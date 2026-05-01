/**
 * Modal Component Unit Tests
 * 
 * Tests for the Modal component including accessibility features
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './Modal';

describe('Modal Component', () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    children: <div>Modal Content</div>,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    // Clean up body overflow style
    document.body.style.overflow = 'unset';
  });

  it('renders children when isOpen is true', () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(<Modal {...defaultProps} isOpen={false} />);
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
  });

  it('renders overlay with semi-transparent background', () => {
    const { container } = render(<Modal {...defaultProps} />);
    const overlay = container.querySelector('.modal-overlay');
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass('bg-black/50');
  });

  it('renders close button', () => {
    render(<Modal {...defaultProps} />);
    const closeButton = screen.getByLabelText('Close modal');
    expect(closeButton).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(<Modal {...defaultProps} onClose={onClose} />);
    
    const closeButton = screen.getByLabelText('Close modal');
    fireEvent.click(closeButton);
    
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when overlay is clicked', () => {
    const onClose = jest.fn();
    const { container } = render(<Modal {...defaultProps} onClose={onClose} />);
    
    const overlay = container.querySelector('.modal-overlay');
    if (overlay) {
      fireEvent.click(overlay);
    }
    
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when ESC key is pressed', () => {
    const onClose = jest.fn();
    render(<Modal {...defaultProps} onClose={onClose} />);
    
    fireEvent.keyDown(document, { key: 'Escape' });
    
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when other keys are pressed', () => {
    const onClose = jest.fn();
    render(<Modal {...defaultProps} onClose={onClose} />);
    
    fireEvent.keyDown(document, { key: 'Enter' });
    fireEvent.keyDown(document, { key: 'Space' });
    
    expect(onClose).not.toHaveBeenCalled();
  });

  it('has correct ARIA attributes', () => {
    const { container } = render(<Modal {...defaultProps} />);
    const dialog = container.querySelector('[role="dialog"]');
    
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title');
  });

  it('applies z-50 for proper layering', () => {
    const { container } = render(<Modal {...defaultProps} />);
    const dialog = container.querySelector('[role="dialog"]');
    
    expect(dialog).toHaveClass('z-50');
  });

  it('centers content on screen', () => {
    const { container } = render(<Modal {...defaultProps} />);
    const dialog = container.querySelector('[role="dialog"]');
    
    expect(dialog).toHaveClass('flex');
    expect(dialog).toHaveClass('items-center');
    expect(dialog).toHaveClass('justify-center');
  });

  it('applies fixed positioning', () => {
    const { container } = render(<Modal {...defaultProps} />);
    const dialog = container.querySelector('[role="dialog"]');
    
    expect(dialog).toHaveClass('fixed');
    expect(dialog).toHaveClass('inset-0');
  });

  it('applies custom className to modal content', () => {
    const { container } = render(
      <Modal {...defaultProps} className="custom-modal-class" />
    );
    const modalContent = container.querySelector('.modal-content')?.parentElement;
    
    expect(modalContent).toHaveClass('custom-modal-class');
  });

  it('prevents body scroll when modal is open', () => {
    render(<Modal {...defaultProps} />);
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('restores body scroll when modal is closed', () => {
    const { rerender } = render(<Modal {...defaultProps} />);
    expect(document.body.style.overflow).toBe('hidden');
    
    rerender(<Modal {...defaultProps} isOpen={false} />);
    expect(document.body.style.overflow).toBe('unset');
  });

  it('has white background for modal content', () => {
    const { container } = render(<Modal {...defaultProps} />);
    const modalContent = container.querySelector('.modal-content')?.parentElement;
    
    expect(modalContent).toHaveClass('bg-white');
  });

  it('has rounded corners', () => {
    const { container } = render(<Modal {...defaultProps} />);
    const modalContent = container.querySelector('.modal-content')?.parentElement;
    
    expect(modalContent).toHaveClass('rounded-lg');
  });

  it('has shadow styling', () => {
    const { container } = render(<Modal {...defaultProps} />);
    const modalContent = container.querySelector('.modal-content')?.parentElement;
    
    expect(modalContent).toHaveClass('shadow-2xl');
  });

  it('has max width constraint', () => {
    const { container } = render(<Modal {...defaultProps} />);
    const modalContent = container.querySelector('.modal-content')?.parentElement;
    
    expect(modalContent).toHaveClass('max-w-2xl');
  });

  it('has max height constraint with scroll', () => {
    const { container } = render(<Modal {...defaultProps} />);
    const modalContent = container.querySelector('.modal-content')?.parentElement;
    
    expect(modalContent).toHaveClass('max-h-[90vh]');
    expect(modalContent).toHaveClass('overflow-y-auto');
  });

  it('positions close button in top-right corner', () => {
    render(<Modal {...defaultProps} />);
    const closeButton = screen.getByLabelText('Close modal');
    
    expect(closeButton).toHaveClass('absolute');
    expect(closeButton).toHaveClass('top-4');
    expect(closeButton).toHaveClass('right-4');
  });

  it('applies fade animation', () => {
    const { container } = render(<Modal {...defaultProps} />);
    const dialog = container.querySelector('[role="dialog"]');
    
    expect(dialog).toHaveClass('animate-fadeIn');
  });

  it('applies scale animation to content', () => {
    const { container } = render(<Modal {...defaultProps} />);
    const modalContent = container.querySelector('.modal-content')?.parentElement;
    
    expect(modalContent).toHaveClass('animate-scaleIn');
  });

  it('focuses close button when modal opens', async () => {
    render(<Modal {...defaultProps} />);
    
    await waitFor(() => {
      const closeButton = screen.getByLabelText('Close modal');
      expect(closeButton).toHaveFocus();
    }, { timeout: 200 });
  });

  it('renders modal content with proper padding', () => {
    const { container } = render(<Modal {...defaultProps} />);
    const modalContent = container.querySelector('.modal-content');
    
    expect(modalContent).toHaveClass('p-8');
    expect(modalContent).toHaveClass('pt-12');
  });

  it('close button has hover effect', () => {
    render(<Modal {...defaultProps} />);
    const closeButton = screen.getByLabelText('Close modal');
    
    expect(closeButton).toHaveClass('hover:bg-gray-200');
  });

  it('close button has focus ring', () => {
    render(<Modal {...defaultProps} />);
    const closeButton = screen.getByLabelText('Close modal');
    
    expect(closeButton).toHaveClass('focus:ring-2');
    expect(closeButton).toHaveClass('focus:ring-[#F5A623]');
  });
});
