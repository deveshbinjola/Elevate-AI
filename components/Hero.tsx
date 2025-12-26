import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';

interface HeroProps {
  onOpenForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenForm }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 max-w-7xl mx-auto text-center overflow-hidden">
      <div className="animate-fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00FF41]/10 text-slate-800 rounded-full text-xs font-black uppercase tracking-widest mb-10 border border-[#00FF41]/20">
          <Leaf size={14} className="text-[#008F24]" />
          Systems for Human Beings
        </div>
        
        <h1 className="text-6xl md:text-[120px] font-black text-slate-900 mb-10 tracking-tighter leading-[0.9]">
          AI Systems for <br />
          <span className="italic">Creators,</span> <span className="highlight-green">Leaders.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-14 leading-relaxed font-bold tracking-tight">
          We install custom AI infrastructure that removes operational friction, so you can return to your zone of genius.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button 
            onClick={onOpenForm}
            className="px-12 py-6 bg-slate-950 text-white rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-3"
          >
            Start Your Audit
            <ArrowRight size={24} className="text-[#00FF41]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;