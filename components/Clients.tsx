
import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const Clients: React.FC = () => {
  // Duplicate logos for seamless infinite scrolling
  const scrollLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-10 md:py-6 bg-white border-y border-slate-50 overflow-hidden relative z-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center">
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-indigo-300 mb-6 px-6 text-center">
            Pioneering Success with Global Giants
          </span>
          
          <div className="scroller relative w-full overflow-hidden">
            {/* Gradient masks for a smooth fade on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <div className="flex animate-scroll whitespace-nowrap gap-12 md:gap-24 items-center w-max px-12">
              {scrollLogos.map((logo, i) => (
                <div 
                  key={i} 
                  className="w-20 md:w-32 h-10 relative group shrink-0 flex items-center justify-center"
                >
                  <img 
                    src={logo} 
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 group-hover:animate-hobble transition-all duration-700 transform group-hover:scale-110" 
                    alt="Client Logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
