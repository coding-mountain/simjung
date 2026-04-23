
import React from 'react';
import Contact from '../components/Contact';
import { PageType } from '../App';
import { ChevronRight } from 'lucide-react';

const ContactPage: React.FC<{ navigateTo: (p: PageType) => void }> = ({ navigateTo }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Tightened Header */}
      <section className="pt-48 pb-12 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex items-center gap-2 mb-8 text-[9px] font-black uppercase tracking-widest text-slate-400">
            <button onClick={() => navigateTo('home')} className="hover:text-orchid transition-colors">Home</button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1E1B4B]">Contact</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="text-orchid font-black tracking-[0.6em] uppercase text-[10px] mb-6 block">Communication Hub</span>
            </div>
            <div className="lg:col-span-4">
            </div>
          </div>
        </div>
      </section>
      
      {/* The Contact Form */}
      <Contact />
    </div>
  );
};

export default ContactPage;
