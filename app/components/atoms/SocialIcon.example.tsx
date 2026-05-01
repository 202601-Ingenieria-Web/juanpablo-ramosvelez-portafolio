/**
 * SocialIcon Component Usage Examples
 * 
 * This file demonstrates how to use the SocialIcon component with different social media icons.
 * Not included in production build - for documentation purposes only.
 */

import React from 'react';
import SocialIcon from './SocialIcon';
import { Github, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';

export default function SocialIconExamples() {
  return (
    <div className="p-8 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">SocialIcon Component Examples</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Individual Icons</h2>
        <div className="flex gap-4 flex-wrap">
          <SocialIcon
            icon={<Github size={24} />}
            href="https://github.com/username"
            label="GitHub Profile"
          />
          <SocialIcon
            icon={<Linkedin size={24} />}
            href="https://linkedin.com/in/username"
            label="LinkedIn Profile"
          />
          <SocialIcon
            icon={<Instagram size={24} />}
            href="https://instagram.com/username"
            label="Instagram Profile"
          />
          <SocialIcon
            icon={<Twitter size={24} />}
            href="https://twitter.com/username"
            label="Twitter Profile"
          />
          <SocialIcon
            icon={<Youtube size={24} />}
            href="https://youtube.com/@username"
            label="YouTube Channel"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Vertical Layout (Sidebar Style)</h2>
        <div className="flex flex-col gap-4 items-start">
          <SocialIcon
            icon={<Github size={24} />}
            href="https://github.com/username"
            label="GitHub Profile"
          />
          <SocialIcon
            icon={<Linkedin size={24} />}
            href="https://linkedin.com/in/username"
            label="LinkedIn Profile"
          />
          <SocialIcon
            icon={<Instagram size={24} />}
            href="https://instagram.com/username"
            label="Instagram Profile"
          />
          <SocialIcon
            icon={<Twitter size={24} />}
            href="https://twitter.com/username"
            label="Twitter Profile"
          />
          <SocialIcon
            icon={<Youtube size={24} />}
            href="https://youtube.com/@username"
            label="YouTube Channel"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Hover Effect Demo</h2>
        <p className="text-gray-600">Hover over the icons to see the scale-110 effect</p>
        <div className="flex gap-4">
          <SocialIcon
            icon={<Github size={24} />}
            href="https://github.com/username"
            label="GitHub Profile"
          />
          <SocialIcon
            icon={<Linkedin size={24} />}
            href="https://linkedin.com/in/username"
            label="LinkedIn Profile"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Custom Styling</h2>
        <SocialIcon
          icon={<Github size={28} />}
          href="https://github.com/username"
          label="GitHub Profile"
          className="shadow-lg"
        />
      </section>
    </div>
  );
}
