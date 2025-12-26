import React from 'react';

const LongGame: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/10 blur-[150px] -z-0"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <span className="text-brand-green font-black uppercase tracking-[0.3em] text-lg mb-10 block">INSIDE THE LAB</span>
        <h2 className="text-5xl md:text-8xl font-black mb-16 tracking-tighter leading-none">The Long Game</h2>
        
        <p className="text-2xl md:text-4xl text-slate-300 mb-20 leading-relaxed font-bold tracking-tight">
          As we do this work, patterns emerge. Those patterns become <span className="text-white border-b-8 border-brand-green/50">internal tools, AI agents, and operating frameworks.</span>
        </p>
      </div>
    </section>
  );
};

export default LongGame;