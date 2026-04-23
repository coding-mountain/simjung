import React, { useState } from 'react';
import { PageType } from '../App';
import { ChevronRight, Sparkles, Loader2, CheckCircle2, Clock, Calendar, Mail, Send, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const InitiatePage: React.FC<{ navigateTo: (p: PageType) => void }> = ({ navigateTo }) => {
  const [step, setStep] = useState<'describe' | 'review' | 'success'>('describe');
  const [loading, setLoading] = useState(false);
  const [problemDescription, setProblemDescription] = useState('');
  const [analysis, setAnalysis] = useState<{ briefingEmail: string } | null>(null);
  const [availability, setAvailability] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!problemDescription.trim()) return;
    setLoading(true);
    setError(null);
    try {
      // Simulated briefing draft for publishing without API dependency
      const mockBriefing = `SUBJECT: STRATEGIC BRIEFING // PRIORITY: ALPHA\n\nCORE CHALLENGE IDENTIFIED:\n${problemDescription}\n\nRECONNAISSANCE SUMMARY:\nThe challenge presented requires vertical strategic alignment and specialized engineering integration. We are preparing a comprehensive roadmap to address the latency and scale constraints through our Kathmandu studio.\n\nPROPOSED NEXT STEPS:\n1. Dedicated Team Selection (Top 5% Talent Pool)\n2. Technical Infrastructure Audit\n3. Bi-Weekly Sync Integration (24/7 Continuity)\n\nSIMJUNG LEADERSHIP TEAM // KATHMANDU`;
      
      setAnalysis({ briefingEmail: mockBriefing } as any);
      setTimeout(() => {
        setLoading(false);
        setStep('review');
      }, 1000);
    } catch (err: any) {
      setError('Intake failed. Please check your connection.');
      setLoading(false);
    }
  };

  const handleFinalSubmit = () => {
    setLoading(true);
    // Simulate sending email and scheduling
    setTimeout(() => {
      setLoading(false);
      setStep('success');
    }, 1500);
  };

  const renderStepDescribe = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto py-20 px-6 lg:px-0"
    >
      <div className="mb-12">
        <h2 className="text-4xl lg:text-7xl font-black text-[#1E1B4B] tracking-tighter mb-4">The Strategic Intake.</h2>
        <p className="text-slate-400 text-lg">Describe your organizational challenge. Our team will architect the solution and draft our briefing agenda.</p>
      </div>

      <div className="space-y-8 bg-white p-8 lg:p-12 rounded-[3.5rem] border border-sky-100 shadow-xl shadow-sky-500/5">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-sky-500 mb-2 block">Problem Specification</label>
          <textarea 
            value={problemDescription}
            onChange={(e) => setProblemDescription(e.target.value)}
            placeholder="e.g. Our current data processing pipeline is hitting 3s latency at peak volumes, and we need to scale our engineering team by 4 React devs within 30 days..." 
            className="w-full px-8 py-6 rounded-[2rem] bg-sky-50/50 border-none focus:ring-2 focus:ring-sky-400 transition-all font-medium min-h-[250px] text-lg resize-none"
          ></textarea>
        </div>
        {error && <p className="text-rose-500 text-sm font-bold">{error}</p>}
        <button 
          onClick={handleAnalyze}
          disabled={loading || !problemDescription.trim()}
          className="w-full py-6 bg-[#1E1B4B] text-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-sky-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
          {loading ? 'Drafting Briefing...' : 'Review Briefing Agenda'}
        </button>
      </div>
    </motion.div>
  );

  const renderStepReview = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="max-w-5xl mx-auto py-20 px-6 lg:px-0"
    >
      <div className="mb-12">
        <button onClick={() => setStep('describe')} className="text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-sky-500 transition-colors mb-4 flex items-center gap-2">
          <ChevronRight className="w-4 h-4 rotate-180" /> Refine Challenge
        </button>
        <h2 className="text-4xl lg:text-6xl font-black text-[#1E1B4B] tracking-tighter mb-4">Briefing Agenda.</h2>
        <p className="text-slate-400 text-lg">Our system has prepared an initial briefing draft based on your organizational challenge.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 lg:p-12 rounded-[4rem] border border-slate-100 shadow-xl shadow-slate-100">
            <div className="mb-8 flex items-center justify-between">
               <span className="text-sky-400 font-bold uppercase text-[10px] tracking-widest block">Generated Briefing Email</span>
               <div className="flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-slate-100"></div>
                 <div className="w-2 h-2 rounded-full bg-slate-100"></div>
                 <div className="w-2 h-2 rounded-full bg-slate-100"></div>
               </div>
            </div>
            
            <div className="bg-slate-50 p-6 lg:p-10 rounded-[2.5rem] font-mono text-sm text-slate-600 leading-relaxed min-h-[400px] border border-slate-100 shadow-inner whitespace-pre-wrap">
              {analysis?.briefingEmail}
            </div>

            <div className="mt-8 flex items-center gap-3 text-slate-400">
               <Mail className="w-4 h-4" />
               <span className="text-[10px] font-bold uppercase tracking-widest">Recipients: hello@simjung.com • Leadership Team (Kathmandu)</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
           <div className="bg-[#1E1B4B] p-8 lg:p-10 rounded-[3rem] text-white shadow-2xl shadow-indigo-900/20 sticky top-32">
              <div className="flex items-center gap-2 mb-8">
                <Clock className="w-5 h-5 text-orange-400" />
                <h4 className="text-[10px] font-black uppercase tracking-widest text-sky-200">Confirm Schedule</h4>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Your Availability</label>
                  <textarea 
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    placeholder="e.g. Next Tuesday at 3PM EST" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-medium placeholder:text-white/20 focus:ring-2 focus:ring-sky-400 transition-all resize-none h-32"
                  ></textarea>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-start gap-3">
                   <Calendar className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                   <p className="text-[11px] font-medium text-white/60 leading-relaxed">
                     Final confirmation will be sent to your email after our leads review the briefing.
                   </p>
                </div>

                <button 
                  onClick={handleFinalSubmit}
                  disabled={loading || !availability.trim()}
                  className="w-full py-5 bg-sky-500 text-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-[#1E1B4B] transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-lg shadow-sky-500/20"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  {loading ? 'Confirming...' : 'Send Briefing & Schedule'}
                </button>
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );

  const renderSuccess = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-2xl mx-auto py-20 px-6 text-center"
    >
      <div className="w-24 h-24 bg-emerald-50 rounded-[2rem] flex items-center justify-center mx-auto mb-10 border border-emerald-100 shadow-xl shadow-emerald-500/5">
        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
      </div>
      <h2 className="text-5xl lg:text-7xl font-black text-[#1E1B4B] tracking-tighter mb-6">Ascent Initiated.</h2>
      <p className="text-xl text-slate-400 font-medium mb-10 leading-relaxed px-8">
        Your strategic briefing agenda has been finalized and queued for the SimJung leadership team in Kathmandu.
      </p>
      <div className="space-y-4">
        <button 
          onClick={() => navigateTo('home')}
          className="px-10 py-5 bg-[#1E1B4B] text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-sky-500 transition-all flex items-center gap-4 mx-auto"
        >
          Return to Dashboard <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-[#FFFBFC] min-h-screen">
       <section className="pt-32 lg:pt-48 pb-12 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex items-center gap-2 mb-8 text-[9px] font-black uppercase tracking-widest text-slate-400">
            <button onClick={() => navigateTo('home')} className="hover:text-[#1E1B4B] transition-colors">Home</button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1E1B4B]">Initiate Ascent</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 'describe' && renderStepDescribe()}
          {step === 'review' && renderStepReview()}
          {step === 'success' && renderSuccess()}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default InitiatePage;
