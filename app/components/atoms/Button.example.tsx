/**
 * Button Component Usage Examples
 * 
 * This file demonstrates how to use the Button component with different variants.
 * Not included in production build - for documentation purposes only.
 */

import React from 'react';
import Button from './Button';

export default function ButtonExamples() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="p-8 space-y-6 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-8">Button Component Examples</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Primary Variant</h2>
        <Button variant="primary" onClick={handleClick}>
          Primary Button
        </Button>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Secondary Variant</h2>
        <Button variant="secondary" onClick={handleClick}>
          Secondary Button
        </Button>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Outline Variant</h2>
        <Button variant="outline" onClick={handleClick}>
          Outline Button
        </Button>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Custom Styling</h2>
        <Button variant="primary" className="w-full" onClick={handleClick}>
          Full Width Button
        </Button>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">All Variants Together</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary" onClick={handleClick}>
            Hire Me
          </Button>
          <Button variant="secondary" onClick={handleClick}>
            Learn More
          </Button>
          <Button variant="outline" onClick={handleClick}>
            View Portfolio
          </Button>
        </div>
      </section>
    </div>
  );
}
