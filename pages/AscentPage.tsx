
import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { PageType } from '../App';
import { ASCENT_PROCESS } from '../constants';

const AscentPage: React.FC<{ navigateTo: (p: PageType) => void }> = ({ navigateTo }) => {
  return (
    <div className="bg-[#FFFBFC] overflow-hidden min-h-screen relative">
      {/* Soft atmospheric gradients */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-sky-50 opacity-20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/2 left-0 w-[40vw] h-[40vw] bg-slate-100 opacity-30 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Vertical Rail Text */}
      <div className="fixed left-6 bottom-32 hidden md:block z-50">
        <p className="writing-vertical-rl rotate-180 text-[9px] tracking-[0.5em] font-black uppercase text-slate-300">
           SimJung Digital — The Science of Ascent
        </p>
      </div>
      {/* Editorial Header */}
      <section className="pt-32 lg:pt-48 pb-16 lg:pb-32 px-6 md:px-12 relative">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2 mb-12 text-[9px] font-black uppercase tracking-widest text-[#1E1B4B]/30">
            <button onClick={() => navigateTo('home')} className="hover:text-[#1E1B4B] transition-colors">Home</button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1E1B4B]">Our Ascent</span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-4xl">
              <span className="text-sky-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">The Onboarding Methodology</span>
              <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black text-[#1E1B4B] tracking-tighter leading-[0.85] mb-8">
                The Path <br/>
                To <span className="font-serif italic font-normal text-slate-300">Excellence</span>.
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed">
                A meticulously engineered multi-phase transition from local vision to global high-altitude performance.
              </p>
            </div>
            {/* High altitude stats indicator */}
            <div className="flex gap-12 border-t border-slate-100 pt-8 lg:border-none lg:pt-0">
               <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-1">Standard Oxygen</p>
                 <p className="text-2xl font-black text-[#1E1B4B]">100% Reliability</p>
               </div>
               <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-1">Success Gradient</p>
                 <p className="text-2xl font-black text-[#1E1B4B]">99.8% Precision</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Vertical Ascent Path */}
      <section className="py-24 px-6 md:px-12 relative bg-white border-y border-slate-50">
        <div className="max-w-5xl mx-auto relative">
          
          {/* Visual Vertical Path Line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#1E1B4B]/10 via-sky-200 to-transparent lg:-translate-x-1/2 hidden md:block"></div>

          <div className="space-y-32 lg:space-y-64 pb-32">
            {ASCENT_PROCESS.map((step, idx) => (
              <div key={idx} className={`relative flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start lg:items-center gap-12 lg:gap-24`}>
                
                {/* Oversized Phase Number */}
                <span className={`absolute ${idx % 2 === 0 ? '-right-12' : '-left-12'} top-1/2 -translate-y-1/2 text-[15rem] lg:text-[25rem] font-black text-[#1E1B4B]/[0.02] select-none pointer-events-none hidden lg:block`}>
                  0{idx + 1}
                </span>

                {/* Visual Anchor (The Base Camp Marker) */}
                <div className="absolute left-0 lg:left-1/2 top-0 -translate-y-1/2 lg:-translate-x-1/2 z-10 hidden md:flex items-center justify-center">
                  <div className="group relative">
                    <div className="w-6 h-6 rounded-full bg-white border-4 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.4)] group-hover:scale-125 transition-transform duration-500"></div>
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[9px] font-black uppercase tracking-widest text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Check Point</div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 relative z-10">
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-[1.25rem] bg-white shadow-xl shadow-sky-100 flex items-center justify-center text-sky-500">
                        <step.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black tracking-[0.3em] text-slate-300 uppercase block leading-none mb-1">Navigation Point</span>
                        <span className="text-[10px] font-black tracking-widest text-[#1E1B4B] uppercase block leading-none">{step.tag}</span>
                      </div>
                   </div>
                   <h3 className="text-5xl lg:text-7xl font-black text-[#1E1B4B] mb-8 leading-[0.9] tracking-tighter">{step.title}</h3>
                   <p className="text-xl text-slate-500 leading-relaxed max-w-md font-light italic border-l-4 border-sky-50 pl-8 py-4">
                     "{step.desc}"
                   </p>
                </div>

                {/* Feature/Detail Side */}
                <div className="w-full lg:w-1/2 relative z-10">
                   <div className="bg-[#FFFBFC] p-10 lg:p-16 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-100 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-sky-100 transition-colors"></div>
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-10 block">Himalayan Precision Protocols</p>
                      <ul className="space-y-8">
                         {[
                           "Strategic Alignment Audit",
                           "Vertical Resource Integration",
                           "Precision Delivery Verification"
                         ].map((text, i) => (
                           <li key={i} className="flex items-start gap-6 group/item">
                              <div className="mt-1 w-6 h-6 rounded-full border-2 border-sky-100 flex items-center justify-center text-sky-400 group-hover/item:border-sky-400 group-hover/item:bg-sky-400 group-hover/item:text-white transition-all">
                                <ChevronRight className="w-3 h-3" />
                              </div>
                              <div>
                                <span className="text-slate-800 font-bold block mb-1">{text}</span>
                                <span className="text-slate-400 text-sm">Ensuring that every output meets the vertical requirements of the Global boardroom.</span>
                              </div>
                           </li>
                         ))}
                      </ul>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Contrast CTA Section */}
      <section className="py-24 lg:py-48 px-6 md:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col items-center text-center">
             <div className="w-20 h-[1px] bg-slate-200 mb-12"></div>
             <h2 className="text-5xl md:text-7xl lg:text-9xl font-black text-[#1E1B4B] mb-12 tracking-tighter leading-none">
               Reach the <span className="font-serif italic font-normal text-slate-300">Summit</span>.
             </h2>
             <p className="text-xl md:text-2xl text-slate-400 font-light max-w-xl leading-relaxed mb-20">
               Ready to bridge the distance between Kathmandu and your engineering milestones?
             </p>
             <button 
               onClick={() => navigateTo('contact')}
               className="group flex flex-col items-center gap-6"
             >
                <div className="w-24 h-24 rounded-full border border-[#1E1B4B]/10 flex items-center justify-center group-hover:bg-[#1E1B4B] group-hover:text-white transition-all transform group-hover:scale-110">
                  <ArrowRight className="w-8 h-8 group-hover:-rotate-45 transition-transform" />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-[#1E1B4B]">Begin Consultation</span>
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AscentPage;
