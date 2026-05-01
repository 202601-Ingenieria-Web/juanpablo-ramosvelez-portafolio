import React from 'react';
import { ProgressBarProps } from '@/app/types';

const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage, className = '' }) => {
  const clamped = Math.max(0, Math.min(100, percentage));
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-[#cbd5e1] label">{label}</span>
        <span className="text-xs text-[#38bdf8] percentage">{clamped}%</span>
      </div>
      <div className="w-full h-1.5 bg-[#334155] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#e8843a] rounded-full transition-all duration-500"
          style={{ width: `${clamped}%` }}
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${label} progress`}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
