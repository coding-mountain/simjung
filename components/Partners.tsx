
import React, { useEffect, useRef, useState } from 'react';
import { PARTNERS } from '../constants';
import { Globe2 } from 'lucide-react';
import Logo from './Logo';

const GlobeVisual: React.FC = () => {
  const [revealed, setRevealed] = useState(false);
  const containerSize = 540; // Standardize coordinates for SVG
  const center = containerSize / 2;

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-[300px] h-[300px] md:w-[540px] md:h-[540px] flex items-center justify-center">
      {/* Central Pulsing Hub */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border border-orchid/5 animate-pulse-ring"></div>
        <div className="w-48 h-48 md:w-[450px] md:h-[450px] rounded-full border border-orange-200/5 animate-pulse-ring" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Core SimJung Logo */}
      <div className="relative z-40 glass p-8 rounded-full border-purple-50 shadow-2xl scale-75 md:scale-110 transition-transform duration-1000">
        <Logo hideText className="h-16" />
        <div className="absolute inset-0 rounded-full bg-orchid/5 animate-pulse"></div>
      </div>

      {/* SVG Spoke System for Connections - Using standardized viewBox for precision */}
      <svg 
        viewBox={`0 0 ${containerSize} ${containerSize}`} 
        className="absolute inset-0 w-full h-full z-30 pointer-events-none overflow-visible"
      >
        <defs>
          <linearGradient id="spoke-gradient-refined" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="var(--orchid)" stopOpacity="0" />
            <stop offset="100%" stopColor="var(--orchid)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {PARTNERS.map((_, i) => {
          const angle = (i * 360) / PARTNERS.length;
          // Responsive radius logic
          const radius = window.innerWidth < 768 ? 130 : 240;
          const angleRad = (angle - 90) * (Math.PI / 180);
          
          const x2 = center + radius * Math.cos(angleRad);
          const y2 = center + radius * Math.sin(angleRad);

          return (
            <g key={i}>
              {/* Lighter, delicate connection line */}
              <line 
                x1={center} y1={center} 
                x2={x2} y2={y2} 
                stroke="url(#spoke-gradient-refined)"
                strokeWidth="1"
                strokeLinecap="round"
                style={{ 
                  transition: 'stroke-dashoffset 2.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  strokeDasharray: radius,
                  strokeDashoffset: revealed ? '0' : radius
                }}
              />
              
              {/* Orange Data Pulse - Starting from the logo core */}
              <circle r="2" fill="var(--vivid-orange)" opacity="0.8">
                <animateMotion 
                  path={`M ${center},${center} L ${x2},${y2}`}
                  dur={`${2.5 + i * 0.5}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.4}s`}
                />
                <animate
                  attributeName="opacity"
                  values="0;0.8;0"
                  dur={`${2.5 + i * 0.5}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.4}s`}
                />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* Partner Labels & Badges */}
      {PARTNERS.map((partner, i) => {
        const angle = (i * 360) / PARTNERS.length;
        const radius = window.innerWidth < 768 ? 130 : 240;
        
        return (
          <div 
            key={partner.country}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ 
              transform: `rotate(${angle}deg)`,
              opacity: revealed ? 1 : 0,
              transition: `opacity 1s ease-out ${0.8 + i * 0.2}s`
            }}
          >
            <div 
              className="absolute pointer-events-auto"
              style={{ 
                transform: `translateY(-${radius}px) rotate(-${angle}deg)` 
              }}
            >
              <div className="group relative flex flex-col items-center cursor-pointer">
                <div className="mb-3 transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2">
                  <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center text-2xl md:text-3xl rounded-[1.25rem] bg-white shadow-xl border border-purple-50 transition-all group-hover:border-orchid/50 group-hover:shadow-orchid/20">
                    <span className="animate-wiggle inline-block">{partner.flag}</span>
                  </div>
                </div>
                
                <div className="glass px-6 py-2 rounded-full border-purple-50 shadow-elegant opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1E1B4B] whitespace-nowrap">
                    {partner.country}
                  </span>
                </div>

                <div className="absolute -bottom-1 w-3 h-3 rounded-full bg-orchid opacity-0 group-hover:opacity-20 transition-all blur-sm scale-0 group-hover:scale-150"></div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Background globe skeleton - Slightly lightened for cleaner feel */}
      <div className="absolute inset-0 animate-globe-spin opacity-[0.08]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#1E1B4B]">
          <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 2" />
          <ellipse cx="50" cy="50" rx="49" ry="0.1" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <ellipse cx="50" cy="50" rx="0.1" ry="49" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <ellipse cx="50" cy="50" rx="48.5" ry="12" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <ellipse cx="50" cy="50" rx="46.5" ry="24" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <ellipse cx="50" cy="50" rx="42" ry="36" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <ellipse cx="50" cy="50" rx="12" ry="48.5" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <ellipse cx="50" cy="50" rx="24" ry="46.5" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <ellipse cx="50" cy="50" rx="36" ry="42" fill="none" stroke="currentColor" strokeWidth="0.1" />
        </svg>
      </div>
    </div>
  );
};

const Partners: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="partners" className="py-24 px-6 bg-transparent overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-20">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <Globe2 className="w-5 h-5 text-orchid" />
              <span className="text-orange-400 font-black tracking-widest uppercase text-[10px]">Global Synergy</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-[#1E1B4B] tracking-tight leading-none mb-10">
              A World-Spanning <br/>
              <span className="font-serif italic font-normal text-gradient">Collective</span>.
            </h2>
            <p className="text-xl text-slate-400 max-w-lg font-medium leading-relaxed italic border-l-2 border-purple-100 pl-8 mb-12">
              "Strategic alliances across four continents ensure our solutions are truly borderless, blending local insights with Himalayan delivery."
            </p>
            <div className="flex gap-4 flex-wrap">
              {['24/7 Support', 'Global Ops', 'Cross-Border QA'].map(tag => (
                <div key={tag} className="px-5 py-2 rounded-full bg-purple-50 border border-purple-100 text-[10px] font-black uppercase tracking-widest text-orchid">
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <GlobeVisual />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNERS.map((partner, i) => (
            <div 
              key={partner.country}
              className={`p-10 rounded-[2.5rem] bg-purple-50/20 border border-purple-50 group hover:bg-orange-50/30 hover:border-orange-100 hover:shadow-elegant transition-all duration-700 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orchid flex items-center gap-2">
                  <span className="text-lg mr-1 animate-wiggle inline-block">{partner.flag}</span> {partner.country}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 group-hover:scale-[3] transition-transform"></div>
              </div>
              <h3 className="text-2xl font-black text-[#1E1B4B] mb-4 group-hover:text-orchid transition-colors">{partner.name}</h3>
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-6">{partner.focus}</p>
              <p className="text-slate-500 font-medium text-sm leading-relaxed border-t border-purple-100 pt-6 group-hover:border-orange-100">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
