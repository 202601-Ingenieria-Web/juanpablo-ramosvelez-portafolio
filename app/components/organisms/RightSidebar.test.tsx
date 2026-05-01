/**
 * RightSidebar Component Tests
 * 
 * Unit tests and property-based tests for the RightSidebar component.
 * Tests rendering, social links display, icon mapping, and array consistency.
 * 
 * **Validates: Requirements 2.3, 13.1, 13.3**
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import fc from 'fast-check';
import RightSidebar from './RightSidebar';
import { RightSidebarProps, SocialLink } from '@/app/types';

describe('RightSidebar', () => {
  const mockSocialLinks: SocialLink[] = [
    {
      platform: 'github',
      url: 'https://github.com/username',
      label: 'GitHub Profile',
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/username',
      label: 'LinkedIn Profile',
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/username',
      label: 'Instagram Profile',
    },
    {
      platform: 'twitter',
      url: 'https://twitter.com/username',
      label: 'Twitter Profile',
    },
    {
      platform: 'youtube',
      url: 'https://youtube.com/@username',
      label: 'YouTube Channel',
    },
  ];

  const defaultProps: RightSidebarProps = {
    socialLinks: mockSocialLinks,
  };

  describe('Unit Tests', () => {
    it('renders all social links', () => {
      render(<RightSidebar {...defaultProps} />);
      
      expect(screen.getByLabelText('GitHub Profile')).toBeInTheDocument();
      expect(screen.getByLabelText('LinkedIn Profile')).toBeInTheDocument();
      expect(screen.getByLabelText('Instagram Profile')).toBeInTheDocument();
      expect(screen.getByLabelText('Twitter Profile')).toBeInTheDocument();
      expect(screen.getByLabelText('YouTube Channel')).toBeInTheDocument();
    });

    it('renders correct number of social icons', () => {
      const { container } = render(<RightSidebar {...defaultProps} />);
      const links = container.querySelectorAll('a[target="_blank"]');
      expect(links).toHaveLength(5);
    });

    it('renders social links with correct href attributes', () => {
      render(<RightSidebar {...defaultProps} />);
      
      const githubLink = screen.getByLabelText('GitHub Profile');
      expect(githubLink).toHaveAttribute('href', 'https://github.com/username');
      
      const linkedinLink = screen.getByLabelText('LinkedIn Profile');
      expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/username');
    });

    it('renders social links with target="_blank" and rel="noopener noreferrer"', () => {
      render(<RightSidebar {...defaultProps} />);
      
      const githubLink = screen.getByLabelText('GitHub Profile');
      expect(githubLink).toHaveAttribute('target', '_blank');
      expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('has correct ARIA label for accessibility', () => {
      render(<RightSidebar {...defaultProps} />);
      const aside = screen.getByLabelText('Right sidebar with social media links');
      expect(aside).toBeInTheDocument();
    });

    it('applies custom className when provided', () => {
      const { container } = render(
        <RightSidebar {...defaultProps} className="custom-class" />
      );
      const aside = container.querySelector('aside');
      expect(aside).toHaveClass('custom-class');
    });

    it('renders with empty social links array', () => {
      const props: RightSidebarProps = { socialLinks: [] };
      const { container } = render(<RightSidebar {...props} />);
      const aside = container.querySelector('aside');
      expect(aside).toBeInTheDocument();
      
      const links = container.querySelectorAll('a[target="_blank"]');
      expect(links).toHaveLength(0);
    });

    it('has correct width styling (60px)', () => {
      const { container } = render(<RightSidebar {...defaultProps} />);
      const aside = container.querySelector('aside');
      expect(aside).toHaveClass('w-[60px]');
    });

    it('has correct height styling (100vh)', () => {
      const { container } = render(<RightSidebar {...defaultProps} />);
      const aside = container.querySelector('aside');
      expect(aside).toHaveClass('h-screen');
    });

    it('has correct flex layout (column, centered, gap)', () => {
      const { container } = render(<RightSidebar {...defaultProps} />);
      const aside = container.querySelector('aside');
      expect(aside).toHaveClass('flex');
      expect(aside).toHaveClass('flex-col');
      expect(aside).toHaveClass('items-center');
      expect(aside).toHaveClass('gap-4');
    });

    it('renders only specified platforms', () => {
      const minimalLinks: SocialLink[] = [
        {
          platform: 'github',
          url: 'https://github.com/username',
          label: 'GitHub Profile',
        },
        {
          platform: 'linkedin',
          url: 'https://linkedin.com/in/username',
          label: 'LinkedIn Profile',
        },
      ];
      
      render(<RightSidebar socialLinks={minimalLinks} />);
      
      expect(screen.getByLabelText('GitHub Profile')).toBeInTheDocument();
      expect(screen.getByLabelText('LinkedIn Profile')).toBeInTheDocument();
      expect(screen.queryByLabelText('Instagram Profile')).not.toBeInTheDocument();
      expect(screen.queryByLabelText('Twitter Profile')).not.toBeInTheDocument();
      expect(screen.queryByLabelText('YouTube Channel')).not.toBeInTheDocument();
    });

    it('handles case-insensitive platform names', () => {
      const mixedCaseLinks: SocialLink[] = [
        {
          platform: 'GitHub',
          url: 'https://github.com/username',
          label: 'GitHub Profile',
        },
        {
          platform: 'LINKEDIN',
          url: 'https://linkedin.com/in/username',
          label: 'LinkedIn Profile',
        },
      ];
      
      render(<RightSidebar socialLinks={mixedCaseLinks} />);
      
      expect(screen.getByLabelText('GitHub Profile')).toBeInTheDocument();
      expect(screen.getByLabelText('LinkedIn Profile')).toBeInTheDocument();
    });
  });

  describe('Property-Based Tests', () => {
    // Feature: personal-portfolio-nextjs, Property 1: Array Rendering Consistency
    it('renders correct number of social icons for any array length', () => {
      fc.assert(
        fc.property(
          fc.array(
            fc.record({
              platform: fc.constantFrom('github', 'linkedin', 'instagram', 'twitter', 'youtube'),
              url: fc.webUrl(),
              label: fc.string({ minLength: 1, maxLength: 50 }),
            }),
            { minLength: 0, maxLength: 10 }
          ),
          (socialLinks) => {
            const props: RightSidebarProps = { socialLinks };
            const { container } = render(<RightSidebar {...props} />);
            
            // Count the number of social icon links rendered
            const links = container.querySelectorAll('a[target="_blank"]');
            
            expect(links.length).toBe(socialLinks.length);
          }
        ),
        { numRuns: 100 }
      );
    });

    // Feature: personal-portfolio-nextjs, Property 3: Social Links Accessibility
    it('all social links have proper accessibility attributes', () => {
      fc.assert(
        fc.property(
          fc.array(
            fc.record({
              platform: fc.constantFrom('github', 'linkedin', 'instagram', 'twitter', 'youtube'),
              url: fc.webUrl(),
              label: fc.string({ minLength: 1, maxLength: 50 }),
            }),
            { minLength: 1, maxLength: 5 }
          ),
          (socialLinks) => {
            const props: RightSidebarProps = { socialLinks };
            const { container } = render(<RightSidebar {...props} />);
            
            const links = container.querySelectorAll('a[target="_blank"]');
            
            links.forEach((link) => {
              // Each link should have target="_blank"
              expect(link).toHaveAttribute('target', '_blank');
              
              // Each link should have rel="noopener noreferrer"
              expect(link).toHaveAttribute('rel', 'noopener noreferrer');
              
              // Each link should have an aria-label
              expect(link).toHaveAttribute('aria-label');
            });
          }
        ),
        { numRuns: 50 }
      );
    });

    // Feature: personal-portfolio-nextjs, Property 4: URL Integrity
    it('preserves exact URL values for all social links', () => {
      fc.assert(
        fc.property(
          fc.array(
            fc.record({
              platform: fc.constantFrom('github', 'linkedin', 'instagram', 'twitter', 'youtube'),
              url: fc.webUrl(),
              label: fc.string({ minLength: 1, maxLength: 50 }),
            }),
            { minLength: 1, maxLength: 5 }
          ),
          (socialLinks) => {
            const props: RightSidebarProps = { socialLinks };
            const { container } = render(<RightSidebar {...props} />);
            
            const links = container.querySelectorAll('a[target="_blank"]');
            
            // Verify each rendered link has the correct href
            socialLinks.forEach((socialLink, index) => {
              expect(links[index]).toHaveAttribute('href', socialLink.url);
            });
          }
        ),
        { numRuns: 50 }
      );
    });
  });
});
