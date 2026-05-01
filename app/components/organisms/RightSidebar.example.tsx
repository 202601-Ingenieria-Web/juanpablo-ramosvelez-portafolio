/**
 * RightSidebar Component Usage Examples
 * 
 * This file demonstrates how to use the RightSidebar component with different configurations.
 * Not included in production build - for documentation purposes only.
 */

import React from 'react';
import RightSidebar from './RightSidebar';
import { SocialLink } from '@/app/types';

export default function RightSidebarExamples() {
  const sampleSocialLinks: SocialLink[] = [
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

  const minimalSocialLinks: SocialLink[] = [
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

  return (
    <div className="p-8 space-y-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">RightSidebar Component Examples</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Full Social Links</h2>
        <p className="text-gray-600">RightSidebar with all 5 social media platforms</p>
        <div className="flex justify-end bg-white border border-gray-200 rounded-lg" style={{ height: '500px' }}>
          <RightSidebar socialLinks={sampleSocialLinks} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Minimal Social Links</h2>
        <p className="text-gray-600">RightSidebar with only GitHub and LinkedIn</p>
        <div className="flex justify-end bg-white border border-gray-200 rounded-lg" style={{ height: '300px' }}>
          <RightSidebar socialLinks={minimalSocialLinks} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">In Layout Context</h2>
        <p className="text-gray-600">RightSidebar as it would appear in the full page layout</p>
        <div className="flex bg-[#f5f5f5] border border-gray-200 rounded-lg" style={{ height: '600px' }}>
          <div className="flex-1 bg-white p-8">
            <h3 className="text-2xl font-bold mb-4">Main Content Area</h3>
            <p className="text-gray-600">
              The RightSidebar appears on the right side with a fixed width of 60px.
              It displays social media icons vertically with consistent spacing.
            </p>
          </div>
          <RightSidebar socialLinks={sampleSocialLinks} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Custom Styling</h2>
        <p className="text-gray-600">RightSidebar with custom background color</p>
        <div className="flex justify-end bg-white border border-gray-200 rounded-lg" style={{ height: '400px' }}>
          <RightSidebar 
            socialLinks={sampleSocialLinks} 
            className="bg-gray-50"
          />
        </div>
      </section>
    </div>
  );
}
