/**
 * ProgressBar Component Usage Examples
 * 
 * This file demonstrates how to use the ProgressBar component with different values.
 * Not included in production build - for documentation purposes only.
 */

import React from 'react';
import ProgressBar from './ProgressBar';

export default function ProgressBarExamples() {
  return (
    <div className="p-8 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">ProgressBar Component Examples</h1>
      
      <section className="space-y-4 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-900">Languages Section</h2>
        <div className="space-y-4">
          <ProgressBar label="Español" percentage={100} />
          <ProgressBar label="Inglés" percentage={85} />
          <ProgressBar label="Francés" percentage={60} />
          <ProgressBar label="Alemán" percentage={40} />
        </div>
      </section>

      <section className="space-y-4 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-900">Programming Languages Section</h2>
        <div className="space-y-4">
          <ProgressBar label="JavaScript" percentage={90} />
          <ProgressBar label="TypeScript" percentage={85} />
          <ProgressBar label="Python" percentage={75} />
          <ProgressBar label="Java" percentage={70} />
          <ProgressBar label="Go" percentage={55} />
        </div>
      </section>

      <section className="space-y-4 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-900">Edge Cases</h2>
        <div className="space-y-4">
          <ProgressBar label="Minimum (0%)" percentage={0} />
          <ProgressBar label="Low (15%)" percentage={15} />
          <ProgressBar label="Medium (50%)" percentage={50} />
          <ProgressBar label="High (95%)" percentage={95} />
          <ProgressBar label="Maximum (100%)" percentage={100} />
        </div>
      </section>

      <section className="space-y-4 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-900">Clamping Behavior</h2>
        <p className="text-sm text-gray-600 mb-4">
          Values outside 0-100 range are automatically clamped
        </p>
        <div className="space-y-4">
          <ProgressBar label="Below range (-20)" percentage={-20} />
          <ProgressBar label="Above range (150)" percentage={150} />
          <ProgressBar label="Way above (999)" percentage={999} />
        </div>
      </section>

      <section className="space-y-4 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-900">Custom Width</h2>
        <div className="space-y-4">
          <ProgressBar label="Full width" percentage={75} className="w-full" />
          <ProgressBar label="Custom width" percentage={60} className="w-64" />
        </div>
      </section>

      <section className="space-y-4 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-900">In Sidebar Context (200px width)</h2>
        <div className="w-[200px] space-y-3 bg-white p-4 border border-gray-200 rounded">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Languages</h3>
          <ProgressBar label="Español" percentage={100} />
          <ProgressBar label="Inglés" percentage={85} />
          
          <h3 className="text-sm font-semibold text-gray-900 mt-4 mb-2">Programming</h3>
          <ProgressBar label="JavaScript" percentage={90} />
          <ProgressBar label="TypeScript" percentage={85} />
          <ProgressBar label="Python" percentage={75} />
        </div>
      </section>
    </div>
  );
}
