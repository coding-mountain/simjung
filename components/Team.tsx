
import React from 'react';
// Use the existing FOUNDERS export instead of the non-existent TEAM_MEMBERS
import { FOUNDERS } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-48 px-6 bg-white relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-4 sticky top-32">
            <span className="text-blue-700 font-black tracking-widest uppercase text-xs mb-4 block">The Architects</span>
            <h2 className="text-7xl font-serif italic text-slate-900 mb-8 tracking-tighter">The Team.</h2>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-12">
              A leadership collective fusing Silicon Valley agility with the disciplined rigour of Himalayan engineering.
            </p>
            <div className="h-2 w-24 bg-orange-500 rounded-full"></div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
            {/* Map over FOUNDERS as TEAM_MEMBERS is not exported from constants */}
            {FOUNDERS.map((member, idx) => (
              <div key={idx} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-slate-100 mb-8 grayscale group-hover:grayscale-0 transition-all duration-1000 relative">
                  <img 
                    src={member.image} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                    alt={member.name} 
                  />
                  <div className="absolute inset-0 border-[12px] border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className={`absolute bottom-0 left-0 w-12 h-12 flex items-center justify-center font-black text-white ${idx % 2 === 0 ? 'bg-blue-700' : 'bg-orange-600'}`}>
                    0{idx + 1}
                  </div>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-2">{member.name}</h3>
                <p className={`text-xs font-bold uppercase tracking-[0.3em] mb-6 ${idx % 2 === 0 ? 'text-blue-700' : 'text-orange-600'}`}>{member.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs border-l-2 border-slate-100 pl-6">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
