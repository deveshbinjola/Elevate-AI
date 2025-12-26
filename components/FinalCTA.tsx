import React from 'react';
import { Leaf, ArrowUpRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenForm: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenForm }) => {
  return (
    <section className="bg-brand-dark py-40 px-6 relative overflow-hidden border-t border-white/5">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-green/10 blur-[200px] rounded-full"></div>
       
       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-32 relative z-10">
          <div className="text-left max-w-3xl">
             <div className="flex items-center gap-8 mb-16">
                <div className="w-24 h-24 bg-brand-green rounded-[40px] flex items-center justify-center shadow-2xl shadow-brand-green/30">
                  <Leaf size={48} className="text-slate-950" fill="currentColor" />
                </div>
                <span className="text-5xl font-black text-white tracking-tighter">Elevate AI</span>
             </div>
             <p className="text-5xl md:text-8xl text-white font-black leading-none mb-12 tracking-tight">
                Turn effort into <br />
                <span className="text-brand-green italic">results.</span>
             </p>
             <p className="text-2xl text-slate-400 font-bold leading-relaxed">
                We help creators remove friction using systems and AI where they actually help.
             </p>
          </div>

          <div className="text-center lg:text-right w-full lg:w-auto">
             <h3 className="text-4xl font-black text-brand-green mb-6 uppercase tracking-[0.2em]">Start Here</h3>
             <p className="text-2xl text-slate-500 font-bold mb-16">Everything flows from clarity.</p>
             <button 
                onClick={onOpenForm}
                className="px-20 py-10 bg-brand-green text-slate-950 rounded-[48px] font-black text-3xl hover:scale-105 transition-all active:scale-95 shadow-2xl shadow-brand-green/40 flex items-center justify-center gap-6 mx-auto lg:ml-auto"
             >
                Start Diagnostic
                <ArrowUpRight size={40} />
             </button>
          </div>
       </div>
    </section>
  );
};

export default FinalCTA;