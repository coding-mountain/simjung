
import React, { useEffect, useState, useRef } from 'react';

interface MountainDividerProps {
  color: string;
  flipped?: boolean;
}

const MountainDivider: React.FC<MountainDividerProps> = ({ color, flipped }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative w-full h-24 overflow-hidden ${flipped ? 'rotate-180 -mt-1' : '-mb-1'}`}>
      <svg viewBox="0 0 1440 120" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="divider-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.01" />
            <stop offset="80%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {/* Layered mountain peaks using smoother curves */}
        <path 
          d="M0,120 L0,85 Q150,75 320,100 Q480,55 650,110 Q850,45 1050,115 Q1250,75 1440,105 L1440,120 Z" 
          fill="url(#divider-grad)"
          className={`${color} transition-all duration-[3000ms] cubic-bezier(0.16, 1, 0.3, 1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        />
        
        {/* Smoothed Ridge Line - extremely faint */}
        <path 
          d="M0,85 Q150,75 320,100 Q480,55 650,110 Q850,45 1050,115 Q1250,75 1440,105" 
          fill="none" 
          stroke="#38BDF8" 
          strokeWidth="0.5"
          strokeOpacity="0.08"
          strokeDasharray="1440"
          strokeDashoffset={isVisible ? "0" : "1440"}
          className="transition-all duration-[4000ms] delay-500"
        />
      </svg>
    </div>
  );
};

export default MountainDivider;
