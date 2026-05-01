import React from 'react';
import { PageLayoutProps } from '@/app/types';
import LeftSidebar from '@/app/components/organisms/LeftSidebar';
import RightSidebar from '@/app/components/organisms/RightSidebar';

const PageLayout: React.FC<PageLayoutProps> = ({
  leftSidebarProps,
  rightSidebarProps,
  children,
  className = '',
}) => {
  return (
    <div className={`flex min-h-screen bg-[#0f172a] ${className}`}>
      {/* Left Sidebar */}
      <div className="hidden md:block sticky top-0 h-screen flex-shrink-0 z-10 border-r border-[#1e3a5f]">
        <LeftSidebar {...leftSidebarProps} />
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto min-w-0">
        <div className="block md:hidden border-b border-[#1e3a5f]">
          <LeftSidebar {...leftSidebarProps} className="w-full h-auto overflow-visible" />
        </div>
        {children}
      </main>

      {/* Right Sidebar */}
      <div className="hidden lg:block sticky top-0 h-screen flex-shrink-0 border-l border-[#1e3a5f] z-10">
        <RightSidebar {...rightSidebarProps} />
      </div>

      {/* Mobile floating icons */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-2 lg:hidden z-20">
        {rightSidebarProps.socialLinks.slice(0, 3).map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="w-10 h-10 bg-[#38bdf8] rounded-full flex items-center justify-center text-[#0f172a] shadow-lg hover:scale-110 transition-transform font-bold text-xs"
          >
            {link.platform.charAt(0).toUpperCase()}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PageLayout;
