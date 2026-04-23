
import React from 'react';
import { SERVICES } from '../constants';
import { PageType } from '../App';
import Contact from '../components/Contact';
import { ChevronRight } from 'lucide-react';

const InquiryPage: React.FC<{ selectedService: string | null; navigateTo: (p: PageType) => void }> = ({ selectedService, navigateTo }) => {
  const service = SERVICES.find(s => s.id === selectedService);

  return (
    <div className="bg-white">
      {/* Tightened Header */}
      <section className="pt-48 pb-12 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex items-center gap-2 mb-8 text-[9px] font-black uppercase tracking-widest text-slate-400">
            <button onClick={() => navigateTo('home')} className="hover:text-orchid transition-colors">Home</button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1E1B4B]">Service Inquiry</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="text-vivid-orange font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">Direct Inquiry</span>
              <h1 className="text-5xl md:text-7xl font-black text-[#1E1B4B] tracking-tighter leading-tight">
                Partnering for <br/>
                <span className="font-serif italic font-normal text-gradient">{service ? service.title : 'Excellence'}</span>.
              </h1>
            </div>
            {service && (
              <div className="lg:col-span-4">
                <p className="text-lg text-slate-400 font-medium leading-relaxed border-l-2 border-orange-200/50 pl-8">
                  Tailoring our {service.title} workflows to your specific engineering benchmarks.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Form integrated with less separation */}
      <Contact />
    </div>
  );
};

export default InquiryPage;
