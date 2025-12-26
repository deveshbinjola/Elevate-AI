
import React from 'react';

const RealProblem: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-brand-yellow font-black uppercase tracking-[0.2em] text-xs mb-6 block">The Real Problem</span>
        <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-12 tracking-tighter leading-[1.0]">
          Your inner clarity has <br />
          <span className="highlight-yellow">outgrown your structure.</span>
        </h2>
        
        <p className="text-2xl text-slate-500 font-bold mb-16 max-w-2xl mx-auto italic">
          So everything feels heavier than it should.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            { t: "Depth", d: "without containment" },
            { t: "Creativity", d: "without translation" },
            { t: "Intelligence", d: "without leverage" }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-[48px] bg-slate-50 border border-slate-100 hover:border-brand-yellow transition-colors group">
              <h4 className="font-black text-3xl mb-3 text-slate-900 group-hover:text-brand-yellow transition-colors">{item.t}</h4>
              <p className="text-slate-600 text-xl font-bold tracking-tight">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealProblem;
