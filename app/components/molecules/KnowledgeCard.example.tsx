/**
 * KnowledgeCard Component Examples
 * 
 * Visual examples of the KnowledgeCard component with different content
 */

import React from 'react';
import KnowledgeCard from './KnowledgeCard';
import { Code, Palette, Database, Globe, Smartphone, Cloud } from 'lucide-react';

export default function KnowledgeCardExamples() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">KnowledgeCard Examples</h1>
      
      {/* Grid layout similar to how it will be used in KnowledgeSection */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <KnowledgeCard
          icon={<Code size={48} />}
          title="Web Development"
          description="Building modern, responsive web applications using the latest technologies and best practices."
        />

        <KnowledgeCard
          icon={<Palette size={48} />}
          title="UI/UX Design"
          description="Creating intuitive and beautiful user interfaces with focus on user experience and accessibility."
        />

        <KnowledgeCard
          icon={<Database size={48} />}
          title="Database Design"
          description="Designing efficient database schemas and optimizing queries for performance and scalability."
        />

        <KnowledgeCard
          icon={<Globe size={48} />}
          title="API Development"
          description="Building RESTful and GraphQL APIs with proper authentication and documentation."
        />

        <KnowledgeCard
          icon={<Smartphone size={48} />}
          title="Mobile Development"
          description="Developing cross-platform mobile applications with React Native and modern frameworks."
        />

        <KnowledgeCard
          icon={<Cloud size={48} />}
          title="Cloud Services"
          description="Deploying and managing applications on cloud platforms like AWS, Azure, and Google Cloud."
        />
      </div>

      {/* Example with custom className */}
      <div className="mt-12 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">With Custom Styling</h2>
        <KnowledgeCard
          icon={<Code size={48} />}
          title="Custom Styled Card"
          description="This card has a custom className applied for additional styling."
          className="border-2 border-[#F5A623]"
        />
      </div>

      {/* Example with long description */}
      <div className="mt-12 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">With Long Description</h2>
        <KnowledgeCard
          icon={<Database size={48} />}
          title="Data Engineering"
          description="Comprehensive experience in building data pipelines, ETL processes, data warehousing, and implementing big data solutions using modern tools and frameworks for large-scale data processing."
        />
      </div>
    </div>
  );
}
