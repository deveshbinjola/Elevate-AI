import React from 'react';
import { UserCheck, UserX } from 'lucide-react';

const Audience: React.FC = () => {
  return (
    <section id="audience" className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-brand-green font-black uppercase tracking-[0.2em] text-xs mb-4 block">Selection</span>
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Who this is for</h2>
          <p className="text-2xl text-slate-500 font-bold max-w-2xl mx-auto">
            We work with few people at a time. Resonance matters more than scale.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white p-12 md:p-16 rounded-[64px] border-2 border-slate-100 hover:border-brand-green transition-colors">
            <h3 className="text-3xl font-black mb-10 text-slate-900 tracking-tight flex items-center gap-4">
              <UserCheck className="text-brand-green" />
              The Right Fit
            </h3>
            <p className="text-xl text-slate-600 font-bold leading-relaxed mb-6">
              For creators, teachers, and leaders with <span className="text-slate-950 underline decoration-brand-green decoration-4 underline-offset-4">depth</span>.
            </p>
            <p className="text-lg text-slate-500 font-medium">
              You value long-term infrastructure over short-term vanity.
            </p>
          </div>
          
          <div className="bg-slate-950 p-12 md:p-16 rounded-[64px] text-white flex flex-col group">
            <h3 className="text-3xl font-black mb-10 text-white tracking-tight flex items-center gap-4">
              <UserX className="text-slate-500" />
              The Wrong Fit
            </h3>
            <ul className="space-y-6">
              <li className="text-lg text-slate-400 font-bold italic">Not for hype.</li>
              <li className="text-lg text-slate-400 font-bold italic">Not for shortcuts.</li>
              <li className="text-lg text-slate-400 font-bold italic">Not for tool-chasing.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;